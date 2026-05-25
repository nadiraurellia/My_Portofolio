import { useState } from "react";

export default function Experience({ COLORS, FadeIn, EXPERIENCES }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const exp = EXPERIENCES[activeIdx];

  return (
    <section id="experience" style={{ padding: "100px 24px", background: COLORS.sand }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>EXPERIENCE</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
            {EXPERIENCES.map((e, i) => (
              <button key={i} onClick={() => setActiveIdx(i)} style={{
                padding: "10px 20px", borderRadius: 40, border: "none", cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 600,
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
            background: COLORS.white, borderRadius: 24, padding: 48,
            boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
            border: `1px solid ${exp.color}20`, transition: "border-color 0.4s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
              <div>
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, color: COLORS.charcoal, marginBottom: 6 }}>{exp.role}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: `${COLORS.charcoal}99` }}>{exp.org}</p>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{
                  padding: "6px 16px", borderRadius: 20, fontSize: 15, fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px",
                  background: `${exp.color}15`, color: exp.color,
                  border: `1px solid ${exp.color}30`,
                }}>{exp.tag}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, color: `${COLORS.charcoal}80` }}>{exp.period}</span>
              </div>
            </div>

            <div style={{ width: "100%", height: 1, background: `${COLORS.charcoal}10`, marginBottom: 24 }} />

            {exp.points.map((p, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
                <div style={{ minWidth: 8, height: 8, borderRadius: "50%", marginTop: 7, background: exp.color }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, lineHeight: 1.7, color: `${COLORS.charcoal}cc` }}>{p}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}