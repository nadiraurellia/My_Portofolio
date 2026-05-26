import { useState } from "react";

export default function Experience({ COLORS, FadeIn, EXPERIENCES }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const exp = EXPERIENCES[activeIdx];

  return (
    <section id="experience" style={{ padding: "clamp(60px, 15vw, 100px) 24px", background: COLORS.sand }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(30px, 8vw, 48px)" }}>
            <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>EXPERIENCE</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "flex", gap: "clamp(6px, 2vw, 8px)", flexWrap: "wrap", marginBottom: "clamp(30px, 8vw, 40px)" }}>
            {EXPERIENCES.map((e, i) => (
              <button key={i} onClick={() => setActiveIdx(i)} style={{
                padding: "clamp(8px, 2vw, 10px) clamp(14px, 3vw, 20px)", borderRadius: 40, border: "none", cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(12px, 2.5vw, 18px)", fontWeight: 600,
                background: i === activeIdx ? COLORS.charcoal : COLORS.white,
                color: i === activeIdx ? "#fff" : COLORS.charcoal,
                boxShadow: i === activeIdx ? `0 4px 20px ${COLORS.charcoal}25` : "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.3s",
              }}>{e.role.length > 22 ? e.role.slice(0, 20) + "…" : e.role}</button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div style={{
            background: COLORS.white, borderRadius: 24, padding: "clamp(24px, 5vw, 48px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            border: `1px solid ${exp.color}20`, transition: "border-color 0.4s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: "clamp(20px, 5vw, 28px)" }}>
              <div>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(20px, 3.5vw, 26px)", color: COLORS.charcoal, marginBottom: 6 }}>{exp.role}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(12px, 2vw, 13px)", color: `${COLORS.charcoal}99` }}>{exp.org}</p>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <span style={{
                  padding: "6px 16px", borderRadius: 20, fontSize: "clamp(11px, 2vw, 15px)", fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px",
                  background: `${exp.color}15`, color: exp.color,
                  border: `1px solid ${exp.color}30`,
                }}>{exp.tag}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(11px, 2vw, 20px)", color: `${COLORS.charcoal}80` }}>{exp.period}</span>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: `${COLORS.charcoal}10`, marginBottom: "clamp(16px, 4vw, 24px)" }} />

            {exp.points.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: "clamp(12px, 3vw, 16px)", alignItems: "flex-start" }}>
                <div style={{ minWidth: 8, height: 8, borderRadius: "50%", marginTop: 7, background: exp.color, flexShrink: 0 }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.7, color: `${COLORS.charcoal}cc` }}>{p}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}