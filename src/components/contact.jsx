export default function Contact({ COLORS, FadeIn }) {
  return (
    <section id="contact" style={{
      padding: "100px 24px",
      background: `linear-gradient(160deg, ${COLORS.darkCharcoal} 0%, ${COLORS.charcoal} 100%)`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: `${COLORS.terracotta}10`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 200, height: 200, borderRadius: "50%", background: `${COLORS.sage}08`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <FadeIn>
          <div style={{
            display: "inline-block", padding: "6px 20px", borderRadius: 40, fontSize: 13,
            background: `${COLORS.terracotta}20`, color: COLORS.terracotta, fontWeight: 600,
            fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "1px", marginBottom: 24,
            border: `1px solid ${COLORS.terracotta}30`,
          }}>LET'S CONNECT</div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 40, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
            Ready to Drive<br /><span style={{ color: COLORS.terracotta }}>Business Impact?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
            I'm actively seeking Business Analyst opportunities where I can apply my analytical skills, SAP expertise, and stakeholder management experience to drive meaningful results.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: "✉️", label: "Nadiraputri311@gmail.com", href: "mailto:Nadiraputri311@gmail.com" },
              { icon: "🔗", label: "LinkedIn", href: "https://www.linkedin.com/in/aurellia-nadira300302/" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                padding: "16px 28px", borderRadius: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
              }}>
                <span style={{ fontSize: 20 }}>{c.icon}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>{c.label}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              © 2026 Aurellia Nadira Putri — Designed with purpose.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}