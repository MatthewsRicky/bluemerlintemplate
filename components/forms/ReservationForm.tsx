"use client";

import { useState, useTransition } from "react";
import { submitReservation } from "@/app/actions/reservations";

type ReservationFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  message: string;
};

const initialForm: ReservationFormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  message: "",
};

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationFormData>(initialForm);

  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  function updateField(field: keyof ReservationFormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    startTransition(async () => {
      const result = await submitReservation(formData);

      if (!result.success) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    });
  }

  if (submitted) {
    return (
      <div className="border border-[#082f49]/15 bg-[#fffdf9] p-8 sm:p-10 lg:p-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#b99a62]">
          Request received
        </p>

        <h3 className="mt-5 font-display text-4xl leading-none text-[#082f49] sm:text-5xl">
          Thank you, {formData.name || "for your enquiry"}.
        </h3>

        <p className="mt-6 max-w-lg text-sm leading-7 text-[#1d2529]/60">
          Your reservation request has been sent to the restaurant team. They
          will confirm availability and get back to you shortly.
        </p>

        <button
          type="button"
          onClick={() => {
            setFormData(initialForm);
            setError("");
            setSubmitted(false);
          }}
          className="mt-8 border border-[#082f49] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#082f49] hover:text-[#f6f1e8]"
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-[#082f49]/15">
      <div className="grid gap-x-8 sm:grid-cols-2">
        <div className="border-b border-[#082f49]/10 py-6">
          <label
            htmlFor="name"
            className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none placeholder:text-[#1d2529]/30"
          />
        </div>

        <div className="border-b border-[#082f49]/10 py-6">
          <label
            htmlFor="email"
            className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none placeholder:text-[#1d2529]/30"
          />
        </div>

        <div className="border-b border-[#082f49]/10 py-6">
          <label
            htmlFor="phone"
            className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+254..."
            className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none placeholder:text-[#1d2529]/30"
          />
        </div>

        <div className="border-b border-[#082f49]/10 py-6">
          <label
            htmlFor="guests"
            className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
          >
            Guests
          </label>

          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={(event) => updateField("guests", event.target.value)}
            className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none"
          >
            {Array.from({ length: 12 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number} {number === 1 ? "guest" : "guests"}
                </option>
              ),
            )}

            <option value="13+">13+ guests</option>
          </select>
        </div>

        <div className="border-b border-[#082f49]/10 py-6">
          <label
            htmlFor="date"
            className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
          >
            Preferred date
          </label>

          <input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={(event) => updateField("date", event.target.value)}
            className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none"
          />
        </div>

        <div className="border-b border-[#082f49]/10 py-6">
          <label
            htmlFor="time"
            className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
          >
            Preferred time
          </label>

          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={(event) => updateField("time", event.target.value)}
            className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none"
          >
            <option value="">Select a time</option>
            <option value="08:00">8:00 AM</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </div>
      </div>

      <div className="border-b border-[#082f49]/10 py-6">
        <label
          htmlFor="occasion"
          className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
        >
          Occasion
        </label>

        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={(event) => updateField("occasion", event.target.value)}
          className="mt-3 w-full bg-transparent text-sm text-[#082f49] outline-none"
        >
          <option value="">No particular occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Wedding">Wedding / celebration</option>
          <option value="Business">Business meal</option>
          <option value="Family">Family gathering</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="border-b border-[#082f49]/10 py-6">
        <label
          htmlFor="message"
          className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#b99a62]"
        >
          Additional details
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Dietary requirements, special requests, or anything else we should know..."
          className="mt-3 w-full resize-none bg-transparent text-sm leading-7 text-[#082f49] outline-none placeholder:text-[#1d2529]/30"
        />
      </div>

      <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-sm">
          <p className="text-[9px] leading-5 text-[#1d2529]/40">
            Your request is subject to availability. A member of the restaurant
            team will confirm your reservation.
          </p>

          {error && (
            <p className="mt-3 text-xs leading-6 text-red-700">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="shrink-0 bg-[#082f49] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#f6f1e8] transition-colors hover:bg-[#0f4c5c] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Sending request..." : "Request a table"}
        </button>
      </div>
    </form>
  );
}
