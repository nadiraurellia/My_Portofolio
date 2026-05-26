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
        <section id="about" style={{ padding: "clamp(60px, 15vw, 100px) 24px", background: COLORS.white }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>

                {/* 1. Label Section */}
                <FadeIn>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(30px, 8vw, 48px)" }}>
                        <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>ABOUT ME</span>
                    </div>
                </FadeIn>

                {/* 2. Row Atas: Foto Profil Bulat (Responsive) */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(30px, 8vw, 52px)", alignItems: "center", marginBottom: "clamp(40px, 10vw, 60px)" }} className="about-grid">
                    <FadeIn delay={0.15}>
                        {/* Ukuran responsive: 200px mobile, 280px desktop */}
                        <div style={{ position: "relative", width: "clamp(200px, 45vw, 280px)", height: "clamp(200px, 45vw, 280px)", borderRadius: "50%", overflow: "hidden", boxShadow: "0 10px 35px rgba(0,0,0,0.1)", flexShrink: 0, margin: "0 auto" }} className="profile-pic">
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
                            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(32px, 5vw, 42px)", color: COLORS.charcoal, lineHeight: 1.25, marginBottom: "clamp(12px, 3vw, 18px)" }}>
                                Hi, I'm <span style={{ color: COLORS.terracotta }}>Nadira!</span>
                            </h2>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: 1.8, color: `${COLORS.charcoal}cc`, marginBottom: "clamp(8px, 2vw, 12px)" }}>
                                As a 6th-semester Information Systems student, I specialize in translating complex business requirements into structured, data-driven solutions. My experience spans SAP ERP modules (SAP01 Fundamentals, SAP SCM500, SAP HR050), cross-functional project coordination, and stakeholder communication.
                            </p>
                            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: 1.8, color: `${COLORS.charcoal}cc` }}>
                                I thrive in environments where analytical thinking meets real-world impact using analysis, process modeling, and technology integration to drive tangible business improvements.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* 3. Row Bawah: 4 Box Skill (Responsive Grid) */}
                <FadeIn delay={0.4}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "clamp(12px, 3vw, 20px)" }}>
                        {[
                            { icon: "📊", title: "Data-Driven Analysis", desc: "Power BI, Looker Studio, Excel for actionable dashboards" },
                            { icon: "⚙️", title: "SAP ERP Understanding", desc:"Gained integrated expertise in navigating SAP systems, executing end-to-end procurement cycles, and managing full workforce lifecycles" },
                            { icon: "📋", title: "Requirements Gathering", desc: "BRD, FSD, process flow documentation" },
                            { icon: "🤝", title: "Stakeholder Mgmt", desc: "Cross-functional coordination for 200+ members" },
                        ].map((c, i) => (
                            <div key={i} style={{
                                padding: "clamp(16px, 4vw, 24px)", borderRadius: 16,
                                background: i % 2 === 0 ? `${COLORS.terracotta}08` : `${COLORS.sage}15`,
                                border: `1px solid ${i % 2 === 0 ? COLORS.terracotta : COLORS.sage}20`,
                                cursor: "default",
                            }}>
                                <div style={{ fontSize: "clamp(24px, 5vw, 30px)", marginBottom: 12 }}>{c.icon}</div>
                                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 700, color: COLORS.charcoal, marginBottom: 6 }}>{c.title}</div>
                                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(13px, 2vw, 15px)", color: `${COLORS.charcoal}99`, lineHeight: 1.5 }}>{c.desc}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

            </div>

            <style>{`
                @media (min-width: 768px) {
                    .about-grid {
                        grid-template-columns: auto 1fr !important;
                    }
                    .profile-pic {
                        margin: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
}