import { useState, useEffect } from "react";

const project = [
  {
    id: 1,
    title: "Pemodelan dan Analisis Proses Bisnis Pengadaan Barang pada Distributor Java Hill's Honey",
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
    title: "Dashboard Analisis Pengiriman Pesanan E-Commerce Berbasis Data Warehouse dan Balanced Scorecard",
    shortDesc: "Looker dashboard for visualizing employee retention and performance metrics.",
    thumbnail:"/img/portofolio/Dashboard.png",
    details: {
      content: [
        { type: "text", value: "Tantangan utama e-commerce saat ini adalah mengolah data transaksi harian kompleks dari sistem OLTP menjadi informasi strategis. Proyek ini memanfaatkan Brazilian E-Commerce Public Dataset by Olist yang berisi lebih dari 100.000 transaksi harian, lalu dipadukan dengan data sekunder hari libur nasional Brasil untuk mengevaluasi faktor kalender terhadap efisiensi operasional pengiriman. Fokus utamanya adalah mengintegrasikan data tersebut ke dalam lingkungan analitikal agar siap digunakan untuk mendukung pengambilan keputusan bisnis." },
        { type: "text", value: "Pendekatan Balanced Scorecard diterapkan dengan berfokus pada Perspektif Proses Bisnis Internal untuk mengevaluasi aktivitas inti pemenuhan pesanan (fulfillment). Melalui perspektif ini, dirumuskan tujuan strategis untuk meningkatkan efisiensi operasional logistik serta keandalan pengiriman guna memaksimalkan profitabilitas perusahaan secara berkelanjutan. Sasaran tersebut kemudian diturunkan menjadi lima indikator kinerja utama (KPI) yang bersifat terukur dan actionable." },
        { type: "diagram", src: "/img/portofolio/starscheme.png", caption: "Rancangan Starscheme data" },
        { type: "text", value: "Arsitektur data warehouse berhasil dirancang menggunakan Star Schema yang berpusat pada tabel fakta Fact_Sales untuk menyimpan ukuran kinerja numerik seperti harga produk, ongkos kirim, dan durasi proses. Tabel fakta ini terhubung langsung ke enam tabel dimensi analitis, meliputi Dim_Date, Dim_Customer, Dim_Seller, Dim_Product, Dim_Payment, dan Dim_Review. Model multidimensional ini mempermudah proses querying cepat dan menghasilkan struktur data yang bersih serta siap dianalisis dari berbagai sudut pandang bisnis." },
        { type: "text", value: "Sebelum masuk ke tahap visualisasi, data mentah divalidasi dan diolah melalui proses ETL terotomatisasi menggunakan Pentaho untuk pembersihan, pengayaan geolokasi, dan standardisasi ke RDBMS MySQL. Selanjutnya, diterapkan pemodelan Data Mining menggunakan algoritma Random Forest untuk klasifikasi prediktif hambatan (bottleneck) penjual, serta metode K-Means Clustering untuk segmentasi performa logistik. Kombinasi ini memastikan data yang disajikan tidak hanya bersifat historis, tetapi juga memiliki kemampuan analitik prediktif." },
        { type: "diagram", src: "/img/portofolio/Dashboard.png", caption : "Dashboard menggunakan Looker Studio untuk menganalisis kinerja pengiriman pada E-Commerce" },
        { type: "text", value: "Seluruh metrik KPI, pola historis, dan hasil pemodelan prediktif tersebut diintegrasikan ke dalam dashboard Business Intelligence interaktif menggunakan Looker Studio. Dashboard ini menyajikan visualisasi sebaran operasional, analisis pendapatan, hingga metrik klasifikasi bottleneck secara real-time. Hasil visualisasi ini memberikan kemudahan bagi manajemen untuk memantau kesehatan rantai pasok secara komprehensif dan mengambil tindakan korektif secara proaktif." },
        { type: "text", value: "Evaluasi performa operasional menunjukkan hasil yang positif, di antaranya pencapaian On-Time Delivery Rate sebesar 92,09% yang berhasil melampaui target minimum 90%. Selain itu, metrik Total Revenue per Category mengonfirmasi kategori unggulan seperti bed_bath_table sukses menghasilkan pendapatan di atas 10.000. Di sisi pengawasan internal, KPI lainnya memantau Freight Cost Ratio agar tetap efisien di bawah 20% serta memastikan batas waktu Seller Processing Time rata-rata berada di bawah 10 hari." },
      ],
      tableData: [
        ["No.", "Nama KPI", "Definisi KPI", "Tercapai", "Tidak Tercapai"],
        ["1", "On-Time Delivery Rate", "Persentase pesanan yang diterima pelanggan pada atau sebelum tanggal estimasi pengiriman dengan tingkat pencapaian di atas 90%.", "V"],
        ["2", "Total Revenue per Category", "Total akumulasi nilai pendapatan yang dihasilkan dari penjualan produk berdasarkan kategori produk, minimal ada satu kategori yang memiliki revenue di atas 10.000", "V"],
        ["3", "Freight Cost Ratio", "Proporsi biaya ongkos kirim terhadap total nilai penjualan yang dijaga di bawah 20%.", " ", "V"],
        ["4","Seller Handover Performance Classification","Klasifikasi performa seller ke dalam kategori Efficient (Cepat) atau Bottleneck (Lambat) berdasarkan karakteristik pesanan sebelum barang diserahkan ke kurir dengan tingkat presisi bottleneck < 80%.","V",""],
        ["5","Seller Processing Time","Memastikan lebih dari 95% populasi penjual masuk ke dalam kategori efisien (Segmen A & B) dengan rata-rata waktu proses di bawah 10 hari untuk menjaga stabilitas logistik.","V",""],
      ]
    }
  },
  {
    id: 3,
    title: "Project Management dengan Jira untuk project GroceryPRO",
    shortDesc: "Project Management SCRUM dengan Jira dalam pembuatan proyek GroceryPRO",
    thumbnail: "/img/portofolio/jira3.png",
    details: {
      content: [
        { type: "text", value: "GroceryPro merupakan proyek website Inventory Management dan POS untuk UMKM kecil seperti toko kelontong. Proyek ini dikembangkan menggunakan pendekatan SCRUM dengan bantuan Jira untuk mengelola backlog, sprint, dan progress development secara kolaboratif. Fokus penggunaan Jira juga menjadi bagian dari pembelajaran praktikum agar terbiasa dengan workflow industri software development." },
        { type: "text", value: "Pada proyek ini saya bukan Project Manager utama, melainkan bagian dari tim yang terlibat dalam proses analisis dan pengelolaan task development. Penggunaan Jira dilakukan sebagai sarana pembelajaran implementasi SCRUM, pengelolaan sprint, serta pemahaman workflow proyek secara profesional dalam lingkungan tim." },
        { type: "diagram", src: "/img/portofolio/jira1.png", caption: "Scrum Board sprint 2" },
        { type: "text", value: "Pada tampilan Scrum Board, task development dikelompokkan berdasarkan status seperti To Do, In Progress, Ready to Test, dan Done. Board ini digunakan untuk memantau progress sprint secara visual serta membantu tim dalam tracking pekerjaan dan kolaborasi selama proses development berlangsung." },
        { type: "diagram", src: "/img/portofolio/jira2.png", caption: "Product Backlog" },
        { type: "text", value: "Tampilan backlog menunjukkan daftar user story dan fitur yang diprioritaskan untuk sprint berjalan. Setiap task memiliki status, estimasi, assignee, dan due date sehingga memudahkan proses sprint planning serta monitoring workload tim development." },
        { type: "diagram", src: "/img/portofolio/jira3.png", caption: "Timeline and Sprint Planning" },
        { type: "text", value: "Timeline digunakan untuk mengatur perencanaan sprint dan roadmap pengerjaan fitur selama proyek berlangsung. Melalui tampilan ini, tim dapat memonitor durasi sprint, progres release, serta distribusi pengerjaan fitur agar development tetap sesuai target dan timeline proyek." },
      ],
      tableData: [
        ["Nama anggota", "Peran"],
        ["Rayhan Arya", "Project Manager,Scrum Master, Developer"],
        ["Aurellia Nadira Putri", "Product Owner, System Analyst and Developer"],
        ["Adam Priyatna", "System Analyst andDeveloper"],
        ["Junhaikal Syahwarna", "Developer"],
        ["Charles Prayoga Sanjaya", "Developer"],
        ["Rachmat Akbar", "Developer"],
      ],
    }
  },

  {
    id: 4,
    title: "Project Management untuk Divisi Operation ERPify_",
    shortDesc: "Project Management untuk konten divisi Operation menggunakan Notion",
    thumbnail: "/img/portofolio/opr2.png",
    details: {
      content: [
        { type: "text", value: "Sebagai Ketua Divisi Operasional (Kreatif), saya merancang sistem manajemen kerja di Notion untuk menyatukan alur kerja dua mata kuliah dan strategi branding media sosial. Sistem ini dibuat untuk memetakan tugas tim secara efisien, menghindari bentrokan jadwal, dan memastikan komunikasi berjalan lancar demi mencapai target operasional." },
        { type: "diagram", src: "/img/portofolio/opr1.png", caption: "" },
        { type: "text", value: "Halaman ini adalah pusat kendali untuk mencatat jadwal rapat progress dan pembahasan yang akan didiskusikan selama rapat, lengkap dengan rundown dan list pembahasan." },
        { type: "diagram", src: "/img/portofolio/opr2.png", caption: "" },
        { type: "text", value: "Halaman ini didedikasikan sebagai dasbor koordinasi untuk masing-masing mata kuliah dan konten sosial media , fokus pada pemetaan beban kerja tim dan tenggat waktu proyek. Menggunakan visualisasi ala papan Kanban, saya bisa memantau progres setiap tugas dengan mudah, memitigasi risiko keterlambatan, dan membagi porsi kerja tim secara adil." },
        { type: "diagram", src: "/img/portofolio/opr3.png", caption: "" },
        { type: "text", value: "Halaman ini berfungsi sebagai ruang kerja digital untuk semua proyek, merangkum semua tugas mulai dari tahap riset awal hingga eksekusi final. Dengan sistem dokumentasi yang terpusat ini, seluruh anggota tim memiliki acuan yang sama (single source of truth), sehingga proses kerja jadi lebih transparan dan pengambilan keputusan bisa lebih cepat." },
        { type: "diagram", src: "/img/portofolio/opr4.png", caption: "" },
        { type: "text", value: "Halaman ini dirancang sebagai pusat komando operasional divisi yang mengintegrasikan seluruh basis data proyek, direktori komunikasi tim, dan ringkasan objektif strategis. Menggunakan arsitektur informasi yang intuitif, halaman ini memfasilitasi kolaborasi lintas fungsional yang mulus, meminimalkan hambatan komunikasi (communication silo), dan memberikan visibilitas menyeluruh terhadap kesehatan operasional organisasi" },
      ],
      tableData: [
        ["-"],
      ]
    }
  },
  {
    id: 5,
    title: "Business Process Analysis & Improvement for Supply Chain Operations at Erajaya Swasembada",
    shortDesc: "Evaluating enterprise architecture using TOGAF methodology.",
    thumbnail: "/img/portofolio/value chain.png",
    details: {
      content: [
        { type: "text", value: "Proses peminjaman dan pengelolaan barang pada divisi General Affairs (GA) di Erajaya Swasembada masih dilakukan secara manual melalui form dan chat, sehingga approval sulit dilacak dan data stok sering tidak real-time. Untuk mengatasi hal tersebut, dirancang sistem terintegrasi dengan workflow approval otomatis dan monitoring stok gudang secara digital." },
        { type: "diagram", src: "/img/portofolio/stakeholder.png", caption: "Stakeholder map matrix pada PT. Erajaya" },
        { type: "text", value: "Analisis stakeholder dilakukan untuk mengidentifikasi pihak yang terlibat dalam proses peminjaman barang, mulai dari GA Staff, Warehouse, Procurement, hingga Management dan IT. Hasil analisis menunjukkan kebutuhan utama berupa sistem yang mudah digunakan, terintegrasi, serta mampu memberikan tracking dan notifikasi approval secara otomatis." },
        { type: "diagram", src: "/img/portofolio/value chain.png", caption: "Value Chain Diagram untuk PT. Erajaya" },
        { type: "text", value: "Value chain digunakan untuk memetakan aktivitas utama seperti pengajuan permintaan barang, pengelolaan stok gudang, approval, hingga pengadaan barang. Sistem terintegrasi yang diusulkan membantu meningkatkan efisiensi operasional melalui otomatisasi workflow, monitoring real-time, dan pengurangan proses manual antar divisi." },
        { type: "diagram", src: "/img/portofolio/Goals.png", caption: "Goals/Objective TO-BE PT.Erajaya" },
        { type: "text", value: "Analisis kebutuhan dilakukan untuk mendukung transformasi proses GA dari manual menjadi digital. Solusi yang dirancang berfokus pada otomatisasi approval, digital form request, validasi data otomatis, serta fitur tracking status permintaan agar proses peminjaman barang menjadi lebih cepat dan transparan." },
        { type: "diagram", src: "/img/portofolio/gap.png", caption: "GAP Analysis pada PT. Erajaya yang masih manual" },
        { type: "text", value: "Hasil GAP analysis menunjukkan bahwa proses existing masih memiliki banyak kendala, seperti approval manual, monitoring stok yang tidak terpusat, dan tidak adanya tracking permintaan barang. Solusi yang diusulkan meliputi implementasi inventory system terintegrasi, workflow approval otomatis, dashboard monitoring, serta pelacakan status barang dan permintaan secara real-time." },
        
      ],
      tableData: [
        ["Problem", "Impact", "Solution", "Result"],

  [
    "Peminjaman barang masih dilakukan manual",
    "Proses approval lambat dan sulit dilacak",
    "Implementasi workflow approval otomatis berbasis sistem",
    "Approval lebih cepat dan status permintaan dapat dipantau real-time"
  ],

  [
    "Pencatatan stok gudang belum real-time",
    "Sering terjadi selisih data stok dan human error",
    "Penerapan barcode scanning dan inventory management system",
    "Data stok ter-update otomatis dan lebih akurat"
  ],

  [
    "Sistem GA, Procurement, dan Warehouse belum terintegrasi",
    "Input data dilakukan berulang di beberapa sistem",
    "Pengembangan sistem terintegrasi melalui Integration API",
    "Proses bisnis lebih efisien dan sinkron antar divisi"
  ],

  [
    "Monitoring permintaan barang masih manual",
    "User kesulitan mengetahui status request",
    "Pembuatan dashboard monitoring dan tracking request",
    "Status permintaan dapat dipantau secara transparan"
  ],

  [
    "Tidak ada notifikasi stok minimum",
    "Pengadaan barang sering terlambat",
    "Implementasi automated stock alert system",
    "Procurement dapat melakukan pengadaan lebih cepat"
  ],

  [
    "Pencatatan penerimaan barang masih manual",
    "Riwayat barang sulit ditelusuri",
    "Digitalisasi goods receipt dan logging transaksi",
    "Tracking barang dan audit trail menjadi lebih jelas"
  ]
      ]
    }
  },

   {
    id: 6,
    title: "Rancangan sistem website digitalisasi untuk UMKM Java Hill's Honey",
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
    <section id="portfolio" style={{ padding: "clamp(60px, 15vw, 100px) 24px", background: COLORS.white }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "clamp(30px, 8vw, 48px)" }}>
            <div style={{ width: 40, height: 3, background: COLORS.terracotta, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 700, color: COLORS.terracotta, letterSpacing: "2px" }}>PORTFOLIO</span>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "clamp(20px, 5vw, 32px)" }}>
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
                <div style={{ height: "clamp(140px, 30vw, 180px)", overflow: "hidden", position: "relative" }}>
                  <img src={proj.thumbnail} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }} />
                </div>
                <div style={{ padding: "clamp(18px, 4vw, 27px)", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(18px, 3vw, 22px)", color: COLORS.charcoal, marginBottom: 12 }}>{proj.title}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(13px, 2vw, 15px)", color: `${COLORS.charcoal}99`, lineHeight: 1.6, flexGrow: 1 }}>{proj.shortDesc}</p>
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

            <div style={{ padding: "clamp(24px, 5vw, 48px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ padding: "6px 14px", borderRadius: 20, background: `${COLORS.terracotta}15`, color: COLORS.terracotta, fontSize: 12, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "1px" }}>PROJECT</div>
              </div>

              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", color: COLORS.charcoal, marginBottom: 40, lineHeight: 1.2 }}>{selectedProject.title}</h2>

              {/* --- DYNAMIC CONTENT BLOCKS --- */}
              <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 48 }}>
                {selectedProject.details.content.map((block, idx) => {
                  if (block.type === "text") {
                    return (
                      <p key={idx} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(13px, 2vw, 14px)", color: `${COLORS.charcoal}cc`, lineHeight: 1.85, margin: 0 }}>
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
                          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(11px, 1.8vw, 12px)", color: `${COLORS.charcoal}70`, marginTop: 10, textAlign: "center", fontStyle: "italic" }}>
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
