import { useState, useEffect } from "react";

// 1. MODIFIKASI DATA: Properti 'image' sekarang diubah menjadi array 'images'
const CERTIFICATIONS = [
    { id: 1, name: "IT Business Analyst Certification", year: "2026", accent: "#E27D60", images: ["/img/portofolio/sertifikasi.jpg"], description: "Professional certification validating expertise in business analysis, requirements gathering, and process optimization strategies." },
    { id: 2, name: "Training IT Business Analyst", year: "2026", accent: "#85DCB0", images: ["/img/portofolio/training ITBA1.png"], description: "Comprehensive training program covering the fundamentals of IT Business Analysis, stakeholder management, and agile methodologies." },
    { id: 3, name: "SAP HR050 — Human Resource Mgmt", year: "2025", accent: "#E27D60", images: ["/img/portofolio/hrm.png"], description: "Has completed SAP HR050 certification as a requirement for passing the course. Topics include personnel administration, time management, and payroll processes." },
    { id: 4, name: "IBM Granite — Data Classification", year: "2025", accent: "#85DCB0", images: ["/img/portofolio/code ibm.jpg"], description: "Training on leveraging IBM Granite AI models for automated data classification, unstructured data analysis, and metadata tagging." },
    { id: 5, name: "IBM Granite — Code Optimization", year: "2025", accent: "#E27D60", images: ["/img/portofolio/code generalization.jpg"], description: "Mastery of code generation and optimization using IBM Granite's large language models tailored for enterprise applications." },
    { id: 6, name: "SAP SCM500 — Supply Chain Mgmt", year: "2024", accent: "#85DCB0", images: ["/img/portofolio/scm.png"], description: "Has completed SAP SCM500 certification as a requirement for passing the course focusing on procurement, inventory management, and logistics." },
    { id: 7, name: "SAP01 Fundamental", year: "2023", accent: "#E27D60", images: ["/img/portofolio/se.png"], description: "Has completed SAP01 Fundamental certification as a requirement for passing the course providing a core introduction to SAP systems, navigating the SAP GUI, and understanding the integration between different business modules like FI, CO, MM, and SD." },
    {
        id: 8, name: "English Proficiency Test Final Year", year: "2026", accent: "#E27D60", images: ["/img/portofolio/eprt1.png", "/img/portofolio/eprt2.png"], description: "Scoring 503 from 677 English Level B1 Intermediate as Final Year student"
    },
];

// Fungsi untuk convert persentase ke rating bintang (1-5)
function getStarRating(percentage) {
    // Formula: percentage / 20 untuk mendapatkan rating 1-5
    return Math.round((percentage / 20) * 2) / 2;
}

// Komponen untuk menampilkan bintang
function StarRating({ rating, color }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            // Bintang penuh
            stars.push(
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5">
                    <polygon points="12 2 15.09 10.26 23.77 11.35 17.88 17.3 19.54 26 12 22.77 4.46 26 6.12 17.3 0.23 11.35 8.91 10.26 12 2"></polygon>
                </svg>
            );
        } else if (i - rating === 0.5) {
            // Bintang setengah
            stars.push(
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
                    <defs>
                        <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="50%" stopColor={color} stopOpacity="1" />
                            <stop offset="50%" stopColor={color} stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 10.26 23.77 11.35 17.88 17.3 19.54 26 12 22.77 4.46 26 6.12 17.3 0.23 11.35 8.91 10.26 12 2" fill={`url(#grad-${i})`} stroke={color}></polygon>
                </svg>
            );
        } else {
            // Bintang kosong
            stars.push(
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
                    <polygon points="12 2 15.09 10.26 23.77 11.35 17.88 17.3 19.54 26 12 22.77 4.46 26 6.12 17.3 0.23 11.35 8.91 10.26 12 2"></polygon>
                </svg>
            );
        }
    }
    return <div style={{ display: "flex", gap: 4 }}>{stars}</div>;
}

function SkillBar({ name, level, color, delay, useInView, COLORS }) {
    const [ref, visible] = useInView(0.1);
    const rating = getStarRating(level);
    
    return (
        <div ref={ref} style={{ marginBottom: "clamp(16px, 3vw, 20px)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "clamp(6px, 2vw, 8px)" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(14px, 2.2vw, 16px)", fontWeight: 500, color: COLORS.charcoal }}>{name}</span>
                <StarRating rating={rating} color={color} />
            </div>
            <div style={{ height: 6, borderRadius: 3, background: `${COLORS.charcoal}10`, overflow: "hidden" }}>
                <div style={{
                    height: "100%", borderRadius: 3,
                    background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                    width: visible ? `${level}%` : "0%",
                    transition: `width 1.2s ease ${delay}s`,
                }} />
            </div>
        </div>
    );
}

export default function Skills({ COLORS, FadeIn, useInView, SKILLS_DATA }) {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCert, setSelectedCert] = useState(null);

    // 2. STATE BARU: Untuk kontrol slide & zoom gambar di dalam modal
    const [modalSlide, setModalSlide] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setModalSlide(0); // Reset slide saat modal ditutup
            setIsFullScreen(false); // Reset status full screen saat ditutup
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedCert]);

    const groupedCerts = CERTIFICATIONS.reduce((acc, cert) => {
        if (!acc[cert.year]) acc[cert.year] = [];
        acc[cert.year].push(cert);
        return acc;
    }, {});

    const sortedYears = Object.keys(groupedCerts).sort((a, b) => b - a);

    // Navigasi Slide Gambar
    const nextSlide = (e) => {
        e.stopPropagation();
        if (selectedCert) {
            setModalSlide((prev) => (prev + 1) % selectedCert.images.length);
        }
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        if (selectedCert) {
            setModalSlide((prev) => (prev - 1 + selectedCert.images.length) % selectedCert.images.length);
        }
    };

    return (
        <section id="skills" style={{ padding: "clamp(60px, 15vw, 100px) 24px", background: COLORS.white }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <FadeIn>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(30px, 8vw, 48px)" }}>
                        <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>SKILLS & EXPERTISE</span>
                    </div>
                </FadeIn>

                {/* Tab Category */}
                <FadeIn delay={0.15}>
                    <div style={{ display: "flex", gap: "clamp(6px, 2vw, 8px)", flexWrap: "wrap", marginBottom: "clamp(30px, 8vw, 40px)" }}>
                        {SKILLS_DATA.map((cat, i) => (
                            <button key={i} onClick={() => setActiveTab(i)} style={{
                                padding: "clamp(8px, 2vw, 10px) clamp(14px, 3vw, 22px)", borderRadius: 40, border: "none", cursor: "pointer",
                                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(11px, 2vw, 13px)", fontWeight: 600,
                                background: i === activeTab ? `linear-gradient(135deg, ${COLORS.terracotta}, ${COLORS.terracotta}dd)` : COLORS.sand,
                                color: i === activeTab ? "#fff" : COLORS.charcoal,
                                boxShadow: i === activeTab ? `0 4px 20px ${COLORS.terracotta}30` : "none",
                                transition: "all 0.3s",
                            }}>{cat.category}</button>
                        ))}
                    </div>
                </FadeIn>

                {/* Skills Bar Container */}
                <FadeIn delay={0.25}>
                    <div style={{ background: COLORS.sand, borderRadius: 24, padding: "clamp(24px, 5vw, 40px)", border: `1px solid ${COLORS.charcoal}08` }}>
                        {SKILLS_DATA[activeTab].skills.map((s, i) => (
                            <SkillBar key={`${activeTab}-${i}`} name={s.name} level={s.level}
                                color={i % 2 === 0 ? COLORS.terracotta : COLORS.sage} delay={i * 0.1} useInView={useInView} COLORS={COLORS} />
                        ))}
                    </div>
                </FadeIn>

                {/* Certifications Section */}
                <FadeIn delay={0.35}>
                    <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(20px, 3.5vw, 24px)", color: COLORS.charcoal, marginTop: "clamp(40px, 10vw, 56px)", marginBottom: "clamp(20px, 5vw, 32px)" }}>Certifications</h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 5vw, 32px)" }}>
                        {sortedYears.map((year) => (
                            <div key={year}>
                                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(12px, 3vw, 16px)" }}>
                                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(15px, 2.5vw, 18px)", fontWeight: 700, color: COLORS.charcoal }}>{year}</h4>
                                    <div style={{ flexGrow: 1, height: 1, background: `${COLORS.charcoal}15` }} />
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "clamp(12px, 3vw, 16px)" }}>
                                    {groupedCerts[year].map((c) => (
                                        <div key={c.id} onClick={() => setSelectedCert(c)} style={{
                                            padding: "clamp(14px, 3vw, 18px) clamp(16px, 3vw, 22px)", borderRadius: 14, background: COLORS.white,
                                            border: `1px solid ${c.accent}30`, display: "flex", alignItems: "center", gap: 14,
                                            cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.08)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "none";
                                                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                                            }}
                                        >
                                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.accent, flexShrink: 0 }} />
                                            <div>
                                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(12px, 2vw, 13px)", fontWeight: 600, color: COLORS.charcoal }}>{c.name}</div>
                                                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(10px, 1.5vw, 11px)", color: `${COLORS.charcoal}70`, marginTop: 2 }}>Click to view details</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>

            {/* 3. MODAL UTAMA DENGAN FITUR CAROUSEL & FULLSCREEN */}
            {selectedCert && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
                    background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
                    display: "flex", justifyContent: "center", alignItems: "center", padding: "20px"
                }} onClick={() => setSelectedCert(null)}>

                    <div style={{
                        background: COLORS.white, width: "100%", maxWidth: 750, maxHeight: "90vh",
                        borderRadius: 24, overflowY: "auto", position: "relative",
                        boxShadow: "0 24px 48px rgba(0,0,0,0.3)",
                        animation: "modalFadeIn 0.3s ease forwards",
                        display: "flex", flexDirection: "column"
                    }} onClick={(e) => e.stopPropagation()}>

                        {/* Tombol Close Modal */}
                        <button onClick={() => setSelectedCert(null)} style={{
                            position: "absolute", top: 20, right: 20, width: 40, height: 40,
                            borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "none", cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
                            zIndex: 15, backdropFilter: "blur(4px)"
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* Container Gambar Sertifikat */}
                        <div style={{ width: "100%", height: 380, background: COLORS.sand, position: "relative", overflow: "hidden" }}>

                            {/* Image element dengan trigger klik untuk Fullscreen */}
                            <img
                                src={selectedCert.images[modalSlide]}
                                alt={selectedCert.name}
                                onClick={() => setIsFullScreen(true)}
                                style={{ width: "100%", height: "100%", objectFit: "contain", cursor: "zoom-in", background: "#1a1a1a" }}
                            />

                            {/* Tombol Navigasi Slide Kiri & Kanan (Hanya muncul jika gambar > 1) */}
                            {selectedCert.images.length > 1 && (
                                <>
                                    <button onClick={prevSlide} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.8)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button onClick={nextSlide} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.8)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.charcoal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>

                                    {/* Indikator Angka Halaman Slide */}
                                    <div style={{ position: "absolute", top: 20, left: 20, background: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 10px", borderRadius: 12, fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                        {modalSlide + 1} / {selectedCert.images.length}
                                    </div>
                                </>
                            )}

                            {/* Hint Click to Zoom */}
                            <div onClick={() => setIsFullScreen(true)} style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(255,255,255,0.9)", padding: "6px 12px", borderRadius: 20, fontSize: 15, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", color: COLORS.charcoal, display: "flex", gap: 6, alignItems: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", cursor: "pointer" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                                Click to Zoom
                            </div>
                        </div>

                        {/* Info Teks Detail */}
                        <div style={{ padding: "32px 40px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                                <div style={{ padding: "4px 12px", borderRadius: 20, background: `${selectedCert.accent}20`, color: selectedCert.accent, fontSize: 18, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                                    {selectedCert.year}
                                </div>
                            </div>
                            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 30, color: COLORS.charcoal, marginBottom: 16, lineHeight: 1.3 }}>{selectedCert.name}</h2>
                            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, color: `${COLORS.charcoal}bb`, lineHeight: 1.7, marginBottom: 0 }}>
                                {selectedCert.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* 4. MODAL FULLSCREEN ZOOM */}
            {selectedCert && isFullScreen && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2000,
                    background: "rgba(0,0,0,0.95)", display: "flex", justifyContent: "center", alignItems: "center",
                    cursor: "zoom-out"
                }} onClick={() => setIsFullScreen(false)}>

                    {/* Tombol Close Fullscreen */}
                    <button onClick={() => setIsFullScreen(false)} style={{
                        position: "absolute", top: 24, right: 24, width: 48, height: 48,
                        borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "none", color: "#fff",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    {/* Gambar Ukuran Penuh */}
                    <img
                        src={selectedCert.images[modalSlide]}
                        alt={selectedCert.name}
                        style={{ maxWidth: "95vw", maxHeight: "95vh", objectFit: "contain", animation: "zoomEffect 0.2s ease-out" }}
                    />
                </div>
            )}

            <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes zoomEffect {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </section>
    );
}