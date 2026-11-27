"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  WifiOff,
  CalendarDays,
  Tablet,
  ClipboardCheck,
  Database,
  Monitor,
} from "lucide-react";

const tabs = [
  {
    id: "desk",
    label: "At the desk",
    Icon: CalendarDays,
    title: "Planner, week 48",
    pill: "2 late",
  },
  {
    id: "site",
    label: "On site",
    Icon: Tablet,
    title: "Onsite, Vrijdagmarkt 10 bus 0101",
    pill: "14 to send",
  },
  {
    id: "ovam",
    label: "In OVAM",
    Icon: ClipboardCheck,
    title: "asbestinventaris.ovam.be",
    pill: "Registered",
  },
];

const list = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function OnSite() {
  return (
    <>
      <motion.div className="step" variants={item}>
        <div className="step-check">
          <Check size={18} />
        </div>
        <div>
          <h4>
            Order form <span className="tag gold">Signed</span>
          </h4>
          <div className="sign-row">
            <div className="signature">
              <svg width="110" height="44" viewBox="0 0 110 44">
                <motion.path
                  d="M4 36 C 14 2, 24 2, 28 28 S 40 8, 50 28 S 70 8, 106 20"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </svg>
            </div>
            <span>Opdrachtgever: Bram Voorbeeldkoper</span>
          </div>
        </div>
      </motion.div>

      <motion.div className="step" variants={item}>
        <div className="step-check">
          <Check size={18} />
        </div>
        <div>
          <h4>
            Floor plans <small>All floors are ready.</small>
          </h4>
          <div className="plans">
            <div className="plan">
              <div />
              Ground floor
            </div>
            <div className="plan">
              <div />
              Floor 1
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className="step" variants={item}>
        <div className="step-check num">3</div>
        <div>
          <h4>
            Start inspection <small>14 photos</small>{" "}
            <span className="tag blue">Blurred 1</span>
          </h4>
          <div className="photos">
            {[0, 1, 2, 3, 4].map((n) => (
              <div className="photo" key={n} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="toast" variants={item}>
        <WifiOff size={24} color="#8a5a10" />
        <div>
          <strong>Offline</strong>
          <span>
            No connection. You are working with what is on this device.
          </span>
        </div>
      </motion.div>
    </>
  );
}

/* PLACEHOLDERS: send me screenshots of the other two tabs and I'll make them match */
function AtDesk() {
  return (
    <>
      {[
        ["Vrijdagmarkt 10 bus 0101, Gent", "26/11 08:15"],
        ["Korenmarkt 4, Gent", "27/11 10:00"],
        ["Veldstraat 21, Aalst", "28/11 14:30"],
      ].map(([a, d]) => (
        <motion.div className="row-item" variants={item} key={a}>
          <b>{a}</b>
          <span>{d}</span>
        </motion.div>
      ))}
    </>
  );
}
function InOvam() {
  return (
    <>
      {[
        ["Inventarisdetails", "Created"],
        ["Datum en tijd plaatsbezoek", "Registered"],
        ["Fiches", "In OVAM"],
      ].map(([a, d]) => (
        <motion.div className="row-item" variants={item} key={a}>
          <b>{a}</b>
          <span className="tag blue">{d}</span>
        </motion.div>
      ))}
    </>
  );
}

export default function Hero() {
  const [active, setActive] = useState("site");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">For asbestos inspection offices in Flanders</p>
          <h1>
            Type it once.
            <br />
            <span>It lands in OVAM.</span>
          </h1>
          <p className="hero-lead">
            Software for asbestos inspectors: book the visit, record it on the
            tablet, and it goes into OVAM&apos;s asbestinventaris.
          </p>
          <div className="hero-cta">
            <a
              href="#demo"
              className="btn btn-light"
              style={{ padding: "18px 28px" }}
            >
              Book a 30-minute demo
            </a>
            <a href="#case" className="link-arrow">
              See one case <ArrowRight size={18} />
            </a>
          </div>
          <p className="hero-note">
            30 minutes on OVAM&apos;s practice site, with made-up data. Your
            price in writing before you start.
          </p>

          <div className="works-with">
            <h3>Works with</h3>
            <ul>
              <li>
                <Database size={18} /> OVAM&apos;s asbestinventaris
              </li>
              <li>
                <Monitor size={18} /> Chrome on a computer
              </li>
              <li>
                <Tablet size={18} /> iPad and Android tablets
              </li>
              <li>
                <CalendarDays size={18} /> Google, Outlook and Apple calendars
              </li>
            </ul>
            <p className="fine-print">
              Not an OVAM product. You generate the attest yourself.
            </p>
          </div>
        </div>

        <div>
          <div className="tabs" role="tablist">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                role="tab"
                aria-selected={active === id}
                className={`tab ${active === id ? "active" : ""}`}
                onClick={() => setActive(id)}
              >
                {active === id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="tab-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span>
                  <Icon size={18} /> {label}
                </span>
              </button>
            ))}
          </div>

          <div className="panel">
            <div className="panel-bar">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <span>{current.title}</span>
              <span className="pill">{current.pill}</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={list}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                {active === "site" && <OnSite />}
                {active === "desk" && <AtDesk />}
                {active === "ovam" && <InOvam />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
