"use server";

import { z } from "zod";
import { resend } from "@/lib/resend";

const reservationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long."),

  date: z
    .string()
    .min(1, "Please select a reservation date.")
    .refine((value) => {
      const selectedDate = new Date(`${value}T00:00:00`);

      if (Number.isNaN(selectedDate.getTime())) {
        return false;
      }

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      return selectedDate >= today;
    }, "Please select today or a future date."),

  time: z.string().min(1, "Please select a preferred time."),

  guests: z.string().refine((value) => {
    const allowedGuests = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13+",
    ];

    return allowedGuests.includes(value);
  }, "Please select a valid number of guests."),

  occasion: z.string().max(100, "Occasion is too long.").optional(),

  message: z.string().trim().max(2000, "Your message is too long.").optional(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitReservation(formData: FormData) {
  const rawData = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    date: String(formData.get("date") ?? ""),
    time: String(formData.get("time") ?? ""),
    guests: String(formData.get("guests") ?? ""),
    occasion: String(formData.get("occasion") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const result = reservationSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      error:
        result.error.issues[0]?.message ??
        "Please check your reservation details.",
    };
  }

  const { name, email, phone, date, time, guests, occasion, message } =
    result.data;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured.");

    return {
      success: false,
      error: "The reservation service is not configured.",
    };
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    console.error("RESEND_FROM_EMAIL is not configured.");

    return {
      success: false,
      error: "The reservation service is not configured.",
    };
  }

  const { error } = await resend.emails.send({
    from: `Blue Marlin Reservations <${process.env.RESEND_FROM_EMAIL}>`,

    to: ["reservations@bluemarlinbeachhotel.com"],

    replyTo: email,

    subject: `New reservation request — ${name}`,

    html: `
      <div
        style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 680px;
          margin: 0 auto;
          color: #1d2529;
        "
      >

        <div
          style="
            background: #082f49;
            padding: 32px;
          "
        >
          <h1
            style="
              margin: 0;
              color: #f6f1e8;
              font-family: Georgia, serif;
              font-size: 32px;
              font-weight: normal;
            "
          >
            New Reservation Request
          </h1>

          <p
            style="
              margin: 8px 0 0;
              color: #d8c3a5;
              font-size: 12px;
              letter-spacing: 2px;
              text-transform: uppercase;
            "
          >
            Blue Marlin Beach Restaurant
          </p>
        </div>

        <div
          style="
            padding: 32px;
            background: #f6f1e8;
          "
        >

          <h2
            style="
              color: #082f49;
              font-family: Georgia, serif;
              font-weight: normal;
            "
          >
            Guest details
          </h2>

          <p>
            <strong>Name:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Phone:</strong>
            ${escapeHtml(phone)}
          </p>


          <h2
            style="
              margin-top: 32px;
              color: #082f49;
              font-family: Georgia, serif;
              font-weight: normal;
            "
          >
            Reservation details
          </h2>

          <p>
            <strong>Date:</strong>
            ${escapeHtml(date)}
          </p>

          <p>
            <strong>Preferred time:</strong>
            ${escapeHtml(time)}
          </p>

          <p>
            <strong>Guests:</strong>
            ${escapeHtml(guests)}
          </p>

          <p>
            <strong>Occasion:</strong>
            ${escapeHtml(occasion || "None specified")}
          </p>


          ${
            message
              ? `
                <h2
                  style="
                    margin-top: 32px;
                    color: #082f49;
                    font-family: Georgia, serif;
                    font-weight: normal;
                  "
                >
                  Additional details
                </h2>

                <p
                  style="
                    line-height: 1.7;
                  "
                >
                  ${escapeHtml(message).replace(/\n/g, "<br />")}
                </p>
              `
              : ""
          }


          <div
            style="
              margin-top: 32px;
              padding-top: 20px;
              border-top: 1px solid #d8c3a5;
            "
          >
            <p
              style="
                margin: 0;
                color: #666;
                font-size: 12px;
                line-height: 1.6;
              "
            >
              This reservation request was submitted through the
              Blue Marlin Beach Restaurant website.
            </p>
          </div>

        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend reservation error:", error);

    return {
      success: false,
      error:
        "We couldn't send your reservation request. Please try again or call the restaurant directly.",
    };
  }

  return {
    success: true,
  };
}
