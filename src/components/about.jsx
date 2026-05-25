import { useState, useEffect } from "react";

const profil_pict = [
    "/img/profil_nadira1.JPG",
    "/img/profil_nadira3.JPG"
];

export default function About({ COLORS, FadeIn }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % profil_pict.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" style={{ padding: "100px 24px", background: COLORS.white }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>

                {/* 1. Label Section */}
                <FadeIn>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
                        <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 25, fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>ABOUT ME</span>
                    </div>
                </FadeIn>

                {/* 2. Row Atas: Foto Profil Bulat (Lebih Besar) Sejajar dengan Header & Caption */}
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 52, alignItems: "center", marginBottom: 60 }}>
                    <FadeIn delay={0.15}>
                        {/* Ukuran diperbesar ke 280px x 280px */}
                        <div style={{ position: "relative", width: 280, height: 280, borderRadius: "50%", overflow: "hidden", boxShadow: "0 10px 35px rgba(0,0,0,0.1)", flexShrink: 0 }}>
                            {profil_pict.map((photo, i) => (
                                <img
                                    key={i} src={photo} alt={`Activity ${i + 1}`}
                                    style={{
                                        position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover",
                                        opacity: i === currentSlide ? 1 : 0, transition: "opacity 0.8s ease-in-out"
                                    }}
                                />
                            ))}

                            {/* Dots indicator */}
                            <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, zIndex: 2 }}>
                                {profil_pict.map((_, i) => (
                                    <div key={i} onClick={() => setCurrentSlide(i)} style={{
                                        width: i === currentSlide ? 18 : 6, height: 6, borderRadius: 3, cursor: "pointer",
                                        background: i === currentSlide ? COLORS.terracotta : "rgba(255,255,255,0.6)",
                                        transition: "all 0.3s ease"
                                    }} />
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.25}>
                        {/* Header & Caption */}
                        <div>
                            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 45, color: COLORS.charcoal, lineHeight: 1.25, marginBottom: 18 }}>
                                Hi, I'm <span style={{ color: COLORS.terracotta }}>Nadira!</span>
                            </h2>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, lineHeight: 1.8, color: `${COLORS.charcoal}cc`, marginBottom: 12 }}>
                                As a 6th-semester Information Systems student, I specialize in translating complex business requirements into structured, data-driven solutions. My experience spans SAP ERP modules (SAP01 Fundamentals, SAP SCM500, SAP HR050), cross-functional project coordination, and stakeholder communication.
                            </p>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, lineHeight: 1.8, color: `${COLORS.charcoal}cc` }}>
                                I thrive in environments where analytical thinking meets real-world impact using analysis, process modeling, and technology integration to drive tangible business improvements.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* 3. Row Bawah: 4 Box Skill */}
                <FadeIn delay={0.4}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
                        {[
                            { icon: "📊", title: "Data-Driven Analysis", desc: "Power BI, Looker Studio, Excel for actionable dashboards" },
                            { icon: "⚙️", title: "SAP ERP Understanding", desc:"Gained integrated expertise in navigating SAP systems, executing end-to-end procurement cycles, and managing full workforce lifecycles" },
                            { icon: "📋", title: "Requirements Gathering", desc: "BRD, FSD, process flow documentation" },
                            { icon: "🤝", title: "Stakeholder Mgmt", desc: "Cross-functional coordination for 200+ members" },
                        ].map((c, i) => (
                            <div key={i} style={{
                                padding: 24, borderRadius: 16,
                                background: i % 2 === 0 ? `${COLORS.terracotta}08` : `${COLORS.sage}15`,
                                border: `1px solid ${i % 2 === 0 ? COLORS.terracotta : COLORS.sage}20`,
                                cursor: "default",
                            }}>
                                <div style={{ fontSize: 30, marginBottom: 12 }}>{c.icon}</div>
                                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: COLORS.charcoal, marginBottom: 6 }}>{c.title}</div>
                                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, color: `${COLORS.charcoal}99`, lineHeight: 1.5 }}>{c.desc}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}