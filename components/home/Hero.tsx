"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#082f49] text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.avif"
          alt="Blue Marlin Beach Restaurant overlooking the Indian Ocean"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Image treatment */}
      <div className="absolute inset-0 bg-[#082f49]/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#082f49]/95 via-[#082f49]/25 to-[#082f49]/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-end">
        <div className="mx-auto w-full max-w-[1600px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#d8c3a5] sm:text-xs">
                Diani Beach · Kenya
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-display text-[4.5rem] leading-[0.78] tracking-[-0.035em] sm:text-8xl lg:text-[9rem]"
            >
              Dining by
              <br />
              the Indian Ocean.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <p className="max-w-md text-sm leading-7 text-white/75 sm:text-base">
                Fresh seafood, sushi and relaxed coastal dining on one of Diani
                Beach's most beautiful stretches of coastline.
              </p>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="bg-[#f6f1e8] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#082f49] transition-colors hover:bg-[#d8c3a5]"
                >
                  Explore Menu
                </Link>

                <Link
                  href="/reservations"
                  className="border border-white/50 bg-white/5 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:border-[#d8c3a5] hover:bg-[#d8c3a5] hover:text-[#082f49]"
                >
                  Book a Table
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex items-center justify-between border-t border-white/20 pt-5"
          >
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">
              Established 2008
            </p>

            <a
              href="#discover"
              className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
            >
              <span>Scroll to discover</span>

              <span className="block h-8 w-px bg-white/40 transition-all duration-500 group-hover:h-11 group-hover:bg-[#d8c3a5]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
