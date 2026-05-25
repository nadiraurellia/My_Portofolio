import { useState, useEffect } from "react";

const project = [
  {
    id: 1,
    title: "[IDN] Redesign of Procurement Process for Java Hill's Honey Distributor using Business Process Modeling Notation and Analysis",
    shortDesc: "Pemroses pemodelan bisnis pengadaan barang pada Java Hill's Honey",
    thumbnail: "/img/portofolio/bpmn.png",
    details: {
      content: [
        { type: "text", value: "Proyek ini bertujuan untuk menganalisis dan mendesain ulang proses pengadaan barang pada distributor madu Java Hill's Honey. Analisis dimulai dengan memetakan proses yang berjalan saat ini (AS-IS) menggunakan Business Process Modeling Notation (BPMN) untuk mengidentifikasi alur kerja, hambatan, dan peran yang terlibat dalam proses pengadaan." },
        { type: "diagram", src: "/img/portofolio/ADV Proses pengadaan barang.jpg", caption: "Diagram 1: AS-IS Process — Alur pengadaan barang yang berjalan saat ini" },
        { type: "text", value: "Berdasarkan hasil analisis pada diagram AS-IS, ditemukan beberapa inefisiensi utama seperti proses verifikasi manual yang memakan waktu dan potensi bottleneck pada tahap persetujuan. Berdasarkan temuan tersebut, dirancang model proses baru (TO-BE) yang mengoptimalkan alur kerja dengan mengotomatisasi persetujuan rutin dan memperjelas tanggung jawab setiap peran." },
        { type: "diagram", src: "/img/portofolio/TO BE Diagram pengadaan Barang.png", caption: "Diagram 2: TO-BE Process — Alur pengadaan barang yang direkomendasikan" },
        { type: "text", value: "Perbandingan antara proses AS-IS dan TO-BE menunjukkan potensi penurunan waktu siklus pengadaan secara signifikan. Rekomendasi ini disampaikan melalui laporan analisis lengkap kepada manajemen Java Hill's Honey sebagai dasar untuk perbaikan operasional ke depan." },
      ],
      tableData: [
        ["Fase", "Deliverable", "Metode", "Status"],
        ["Analisis AS-IS", "Diagram Proses Saat Ini", "BPMN + Wawancara", "Selesai"],
        ["Identifikasi Gap", "Laporan Temuan", "Gap Analysis", "Selesai"],
        ["Perancangan TO-BE", "Diagram Proses Baru", "BPMN Redesign", "Selesai"],
        ["Rekomendasi", "Laporan Akhir", "Dokumentasi", "Selesai"],
      ]
    }
  },
  {
    id: 2,
    title: "HR Analytics Dashboard",
    shortDesc: "Power BI dashboard for visualizing employee retention and performance metrics.",
    thumbnail: "/img/thumbnail_analytics.png",
    details: {
      content: [
        { type: "text", value: "This project focused on developing a comprehensive HR Analytics Dashboard using Power BI to provide actionable insights into employee turnover, performance scores, and training effectiveness. The primary goal was to shift the HR department from a reactive to a data-driven, proactive stance on talent management." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 1: Data Architecture — HR data flow from SAP HCM to Power BI" },
        { type: "text", value: "The dashboard aggregates data from the SAP HCM module and external survey systems. Key features include drill-down capabilities by department, role, and tenure, as well as interactive filters for historical trend analysis. A predictive attrition model was also integrated to flag at-risk employees." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 2: Dashboard Overview — Key HR metrics and KPI visualization" },
        { type: "text", value: "The implementation resulted in a measurable improvement in HR decision-making speed. Management was able to identify retention risks 2 months earlier than before, contributing to a more proactive approach to talent development and a reduction in voluntary turnover." },
      ],
      tableData: [
        ["Metric", "Source System", "Update Frequency", "Target KPI"],
        ["Turnover Rate", "SAP HCM", "Monthly", "< 5%"],
        ["Training ROI", "LMS", "Quarterly", "> 120%"],
        ["Engagement Score", "SurveyMonkey", "Bi-annually", "> 8.0/10"],
      ]
    }
  },
  {
    id: 3,
    title: "Business Process Reengineering",
    shortDesc: "Redesigning core financial workflows to eliminate bottlenecks and redundancy.",
    thumbnail: "/img/thumbnail_erp.png",
    details: {
      content: [
        { type: "text", value: "This initiative was triggered by growing complaints from the sales team about slow order processing times. A cross-functional team was assembled to conduct a deep dive into the Order-to-Cash (O2C) cycle. Through stakeholder interviews and process walkthroughs, we identified 4 major bottlenecks that were causing significant delays." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 1: O2C Process Map — Identified bottlenecks highlighted in red" },
        { type: "text", value: "Based on the gap analysis, an automated solution was proposed within SAP SD and FI modules. Manual credit approval steps for regular customers were replaced with a rule-based engine, and invoicing was connected directly to the delivery confirmation event. The redesigned process reduced the end-to-end cycle time by 35%, from an average of 5 days to 3.25 days." },
      ],
      tableData: [
        ["Process Step", "As-Is Time", "To-Be Time", "Improvement"],
        ["Order Entry", "45 mins", "15 mins", "66%"],
        ["Credit Approval", "24 hrs", "Automated", "100%"],
        ["Invoicing", "2 hrs", "30 mins", "75%"],
      ]
    }
  },
  {
    id: 4,
    title: "Sales Data Migration",
    shortDesc: "Data cleansing and migration strategy for a major CRM rollout.",
    thumbnail: "/img/thumbnail_analytics.png",
    details: {
      content: [
        { type: "text", value: "This project managed the end-to-end data migration strategy for transitioning over 1.2 million customer records from a legacy on-premise CRM to a new cloud-based platform. The project began with a thorough data profiling exercise to understand the quality and structure of the source data, revealing that approximately 15% of records required cleansing before migration." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 1: Data Migration Architecture — ETL pipeline from legacy CRM to cloud" },
        { type: "text", value: "A multi-stage ETL (Extract, Transform, Load) pipeline was designed to handle data type transformations, deduplication, and business rule validations. Three full mock migrations were performed prior to go-live to validate data integrity and system performance under load. Each mock migration's results were used to refine the cleansing scripts." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 2: Data Quality Report — Before & after cleansing comparison" },
        { type: "text", value: "The final migration was executed over a weekend maintenance window with zero unplanned downtime. Post-migration validation confirmed 99.9% data accuracy. A data governance framework was also established to ensure ongoing data quality in the new system." },
      ],
      tableData: [
        ["Object", "Total Records", "Cleansed Records", "Success Rate"],
        ["Customers", "1,200,500", "1,180,000", "98.3%"],
        ["Sales Orders", "5,500,000", "5,490,000", "99.8%"],
        ["Products", "45,000", "44,500", "98.9%"],
      ]
    }
  },
  {
    id: 5,
    title: "IT Architecture Assessment",
    shortDesc: "Evaluating enterprise architecture using TOGAF methodology.",
    thumbnail: "/img/thumbnail_erp.png",
    details: {
      content: [
        { type: "text", value: "This engagement involved a comprehensive assessment of the organization's existing IT architecture using the TOGAF ADM (Architecture Development Method) methodology. The project kicked off with an Architecture Vision workshop to align stakeholders on the assessment's goals and scope. We then systematically mapped all four architecture domains." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 1: Business Architecture — Current value chain and organizational capability map" },
        { type: "text", value: "A significant gap was identified between the current application landscape—consisting of over 40 siloed legacy applications—and the target state of an integrated, API-driven ecosystem. The Data Architecture domain was flagged as the most critical area, with no single source of truth for key business metrics and significant data redundancy across systems." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 2: Technology Roadmap — Prioritized transformation initiatives over 3 years" },
        { type: "text", value: "The final deliverable was a 3-year IT Transformation Roadmap, prioritizing quick wins such as cloud migration of non-critical workloads and the implementation of a central API gateway. The roadmap was presented to the C-suite and received full executive sponsorship for Year 1 initiatives." },
        { type: "diagram", src: "/img/diagram_process.png", caption: "Diagram 3: Architecture Maturity Scoring — Current vs. target state by domain" },
      ],
      tableData: [
        ["Domain", "Current State Score", "Target State Score", "Priority"],
        ["Business Architecture", "3/5", "5/5", "High"],
        ["Data Architecture", "2/5", "4/5", "Critical"],
        ["Application Architecture", "3/5", "4/5", "Medium"],
        ["Technology Architecture", "3/5", "5/5", "High"],
      ]
    }
  }
];

export default function Portfolio({ COLORS, FadeIn }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="portfolio" style={{ padding: "100px 24px", background: COLORS.white }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
            <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 25, fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>PORTFOLIO</span>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 32 }}>
          {project.map((proj, i) => (
            <FadeIn key={proj.id} delay={i * 0.1}>
              <div
                onClick={() => setSelectedProject(proj)}
                style={{
                  background: COLORS.sand, borderRadius: 20, overflow: "hidden", cursor: "pointer",
                  border: `1px solid ${COLORS.charcoal}10`, transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", height: "100%"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <img src={proj.thumbnail} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} />
                </div>
                <div style={{ padding: 27, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 25, color: COLORS.charcoal, marginBottom: 12 }}>{proj.title}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, color: `${COLORS.charcoal}99`, lineHeight: 1.6, flexGrow: 1 }}>{proj.shortDesc}</p>
                  <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: COLORS.terracotta, fontSize: 13, fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    View Details
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
          display: "flex", justifyContent: "center", alignItems: "center", padding: "20px"
        }} onClick={() => setSelectedProject(null)}>

          <div style={{
            background: COLORS.white, width: "100%", maxWidth: 800, maxHeight: "90vh",
            borderRadius: 24, overflowY: "auto", position: "relative",
            boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
            animation: "modalFadeIn 0.4s ease forwards"
          }} onClick={(e) => e.stopPropagation()}>

            <button onClick={() => setSelectedProject(null)} style={{
              position: "absolute", top: 20, right: 20, width: 40, height: 40,
              borderRadius: "50%", background: COLORS.sand, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.charcoal,
              zIndex: 10, transition: "background 0.2s"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div style={{ padding: "40px 48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ padding: "6px 14px", borderRadius: 20, background: `${COLORS.terracotta}15`, color: COLORS.terracotta, fontSize: 12, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "1px" }}>PROJECT</div>
              </div>

              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", color: COLORS.charcoal, marginBottom: 40, lineHeight: 1.2 }}>{selectedProject.title}</h2>

              {/* --- DYNAMIC CONTENT BLOCKS --- */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 48 }}>
                {selectedProject.details.content.map((block, idx) => {
                  if (block.type === "text") {
                    return (
                      <p key={idx} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: `${COLORS.charcoal}cc`, lineHeight: 1.85, margin: 0 }}>
                        {block.value}
                      </p>
                    );
                  }
                  if (block.type === "diagram") {
                    return (
                      <div key={idx}>
                        <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${COLORS.charcoal}10` }}>
                          <img src={block.src} alt={block.caption || `Diagram ${idx + 1}`} style={{ width: "100%", display: "block" }} />
                        </div>
                        {block.caption && (
                          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: `${COLORS.charcoal}70`, marginTop: 10, textAlign: "center", fontStyle: "italic" }}>
                            {block.caption}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* --- TABLE --- */}
              <h4 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 24, color: COLORS.charcoal, marginBottom: 20 }}>Project Data</h4>
              <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${COLORS.charcoal}15` }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: COLORS.sand, textAlign: "left" }}>
                      {selectedProject.details.tableData[0].map((h, i) => (
                        <th key={i} style={{ padding: "16px 20px", color: COLORS.charcoal, fontWeight: 600, borderBottom: `2px solid ${COLORS.charcoal}15` }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProject.details.tableData.slice(1).map((row, i) => (
                      <tr key={i} style={{ borderBottom: i === selectedProject.details.tableData.length - 2 ? "none" : `1px solid ${COLORS.charcoal}10` }}>
                        {row.map((cell, j) => (
                          <td key={j} style={{ padding: "16px 20px", color: `${COLORS.charcoal}bb` }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
