import { useState, useEffect } from "react";

const NAV_ITEMS = ["About", "Experience", "Skills", "Portfolio", "Contact"];

export default function Navbar({ active, COLORS }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scroll = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.charcoal}15` : "none",
      transition: "all 0.4s ease",
      padding: scrolled ? "12px 0" : "20px 0",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div style={{ width: 36, height: 36, borderRadius: "10px", background: `linear-gradient(135deg, ${COLORS.terracotta}, ${COLORS.sage})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 16, fontFamily: "'DM Serif Display', Georgia, serif" }}>A</span>
          </div>
          <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(16px, 2vw, 18px)", color: COLORS.charcoal, fontWeight: 700, display: "none" }} className="brand-text">Aurellia</span>
        </div>
        
        {/* Desktop Menu */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-menu">
          {NAV_ITEMS.map((item) => (
            <span key={item} onClick={() => scroll(item)} style={{
              cursor: "pointer", fontSize: 14, fontWeight: 500, letterSpacing: "0.5px",
              color: active === item.toLowerCase() ? COLORS.terracotta : COLORS.charcoal,
              borderBottom: active === item.toLowerCase() ? `2px solid ${COLORS.terracotta}` : "2px solid transparent",
              paddingBottom: 4, transition: "all 0.3s",
              fontFamily: "'Outfit', sans-serif",
            }}>{item}</span>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px",
          }}
          className="hamburger-btn"
        >
          <div style={{ width: 24, height: 2.5, background: COLORS.charcoal, borderRadius: 2, transition: "all 0.3s" }} />
          <div style={{ width: 24, height: 2.5, background: COLORS.charcoal, borderRadius: 2, transition: "all 0.3s" }} />
          <div style={{ width: 24, height: 2.5, background: COLORS.charcoal, borderRadius: 2, transition: "all 0.3s" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          display: "none",
          flexDirection: "column",
          gap: 16,
          padding: "20px 24px",
          background: "rgba(255,255,255,0.98)",
          borderTop: `1px solid ${COLORS.charcoal}15`,
        }} className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <span key={item} onClick={() => scroll(item)} style={{
              cursor: "pointer", fontSize: 16, fontWeight: 500,
              color: active === item.toLowerCase() ? COLORS.terracotta : COLORS.charcoal,
              padding: "8px 0",
              fontFamily: "'Outfit', sans-serif",
              borderBottom: `1px solid ${COLORS.charcoal}10`,
            }}>{item}</span>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .brand-text {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}