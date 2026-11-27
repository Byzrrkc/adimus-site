"use client";
import { motion } from "motion/react";

// First three are from your screenshot, the rest are my guesses from your other screenshots.
// Replace them with the real 11 from the live site.
const items = [
  "Works without signal",
  "Samples numbered from M01",
  "Late bookings flagged while you book",
  "Order form signed on the tablet",
  "Floor plans drawn on site",
  "Photos blurred automatically",
  "Fiches filled from your library",
  "Visit date follows the planning",
  "Inventory created in OVAM",
  "One click per OVAM page",
  "Warns before COPRO's 22:00 deadline",
];

export default function Marquee() {
  return (
    <section className="marquee" aria-label="What Adimus does">
      <div className="container marquee-inner">
        <p className="marquee-label">
          What Adimus does by itself, or after you click
        </p>
        <div className="marquee-window">
          <motion.div
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          >
            {[...items, ...items].map((text, i) => (
              <span className="chip" key={i}>
                <i />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
