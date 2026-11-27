"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ClipboardCheck,
  CalendarDays,
  Users,
  Tablet,
  ShieldAlert,
  FlaskConical,
} from "lucide-react";

const products = [
  {
    name: "Fiche Generator",
    text: "Your fiches into OVAM, from your own Chrome",
    Icon: ClipboardCheck,
  },
  {
    name: "Planner",
    text: "Book visits with OVAM's deadline in view",
    Icon: CalendarDays,
  },
  {
    name: "Office",
    text: "Portals for partners and clients, and the delivery rule",
    Icon: Users,
  },
  {
    name: "Onsite",
    text: "The visit on a tablet, also without signal",
    Icon: Tablet,
  },
  {
    name: "Prevention",
    text: "What your audits keep finding",
    Icon: ShieldAlert,
    badge: { label: "In development", cls: "badge-red" },
  },
  {
    name: "Lab",
    text: "Samples out, results back on the case",
    Icon: FlaskConical,
    badge: { label: "Coming", cls: "badge-amber" },
  },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map(({ name, text, Icon, badge }) => (
        <div className="product" key={name}>
          <div className="product-icon">
            <Icon size={20} />
          </div>
          <div>
            <h4>
              {name}{" "}
              {badge && (
                <span className={`badge ${badge.cls}`}>{badge.label}</span>
              )}
            </h4>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="logo">
      {/* placeholder mark: swap for your real logo file later */}
      <svg width="26" height="26" viewBox="0 0 26 26" fill="#fff">
        <path d="M2 2l10 10-3 12L2 2zm22 6L14 14l2 10 8-16z" />
      </svg>
      Adimus
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <nav className="nav-links">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              aria-expanded={productsOpen}
            >
              Products <ChevronDown size={16} />
            </button>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </nav>
          <div className="nav-right">
            <a href="#" className="nav-auth">
              Sign in
            </a>
            <a href="#" className="nav-auth">
              Create an account
            </a>
            <a href="#demo" className="btn btn-light">
              Book a demo
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {productsOpen && (
            <motion.div
              className="dropdown"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container">
                <ProductGrid />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* mobile menu sits OUTSIDE <header> on purpose, see note below */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-head">
              <Logo />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <div className="mobile-body">
              <p style={{ color: "#6b706d" }}>Six pieces, sold one by one</p>
              <ProductGrid />
              <p style={{ color: "#6b706d", marginTop: 24 }}>
                Cases, clients, team and settings come with any piece.
              </p>
            </div>
            <div className="mobile-links">
              <a href="#pricing">
                Pricing <ChevronRight size={18} />
              </a>
              <a href="#about">
                About <ChevronRight size={18} />
              </a>
            </div>
            <div className="mobile-foot">
              <a href="#demo" className="btn btn-dark">
                Book a demo
              </a>
              <div className="row">
                <a href="#" className="btn btn-outline">
                  Sign in
                </a>
                <a href="#" className="btn btn-outline">
                  Create an account
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
