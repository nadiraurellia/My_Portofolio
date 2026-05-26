import { useState, useEffect } from "react";

const activityPhotos = [
  "/img/hero/hero4.jpg",
  "/img/profil_nadira2.jpg",
  "/img/hero/hero1.jpg",
  "/img/hero/hero2.jpg",
  "/img/hero/hero3.jpg",
  "/img/hero/hero7.jpg",
];

export default function Hero({ COLORS, FadeIn }) {
  const [typedIdx, setTypedIdx] = useState(0);
  const [bgIdx, setBgIdx] = useState(0);

  const roles = [
    "Business Analyst",
    "ERP Enthusiast",
    "Data Analyst",
    "Process Optimizer",
  ];

  useEffect(() => {
    const t = setInterval(
      () => setTypedIdx((i) => (i + 1) % roles.length),
      2500
    );

    return () => clearInterval(t);
  }, []);

  /* =========================
     FIXED CINEMATIC SLIDESHOW
  ========================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % activityPhotos.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background slideshow photos */}
      {activityPhotos.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,

            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",

            opacity: i === bgIdx ? 1 : 0,

            transition: "opacity 1.6s ease-in-out",

            /* cinematic zoom pelan */
            transform: i === bgIdx ? "scale(1.05)" : "scale(1)",

            transitionProperty: "opacity, transform",
          }}
        />
      ))}

      {/* Sheer frosted overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(
            160deg,
            rgba(245, 235, 220, 0.78) 0%,
            rgba(255, 255, 255, 0.72) 40%,
            rgba(210, 225, 210, 0.78) 100%
          )`,
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      />

      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `${COLORS.terracotta}10`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `${COLORS.sage}14`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          width: 120,
          height: 120,
          border: `2px solid ${COLORS.sage}40`,
          borderRadius: "20px",
          transform: "rotate(15deg)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "10%",
          width: 80,
          height: 80,
          border: `2px solid ${COLORS.terracotta}30`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Photo indicator dots */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 5,
        }}
      >
        {activityPhotos.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === bgIdx ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background:
                i === bgIdx
                  ? COLORS.terracotta
                  : `${COLORS.terracotta}40`,
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
            onClick={() => setBgIdx(i)}
          />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 800,
          position: "relative",
          zIndex: 2,
        }}
      >
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 20px",
              borderRadius: 40,
              fontSize: "clamp(11px, 1.8vw, 12px)",
              background: `${COLORS.terracotta}18`,
              color: COLORS.terracotta,
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "1px",
              marginBottom: 24,
              border: `1px solid ${COLORS.terracotta}35`,
              backdropFilter: "blur(8px)",
            }}
          >
            OPEN TO OPPORTUNITIES
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(40px, 7vw, 60px)",
              color: COLORS.charcoal,
              lineHeight: 1.1,
              margin: "16px 0",
              fontWeight: 400,
            }}
          >
            Hi, I'm Aurellia
            <br />
            <span style={{ color: COLORS.terracotta }}>
              Nadira
            </span>{" "}
            Putri
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div
            style={{
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "16px 0 28px",
            }}
          >
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(18px, 3vw, 26px)",
                color: COLORS.sage,
                fontWeight: 600,
                animation: "fadeSwitch 2.5s ease infinite",
              }}
            >
              {roles[typedIdx]}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(14px, 2.2vw, 16px)",
              lineHeight: 1.75,
              color: `${COLORS.charcoal}bb`,
              maxWidth: 580,
              margin: "0 auto 36px",
            }}
          >
            Information Systems student at Telkom University Jakarta with
            hands-on SAP ERP experience, data-driven decision-making skills,
            and a passion for turning complex business processes into
            actionable insights.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "14px 36px",
                borderRadius: 50,
                border: "none",
                cursor: "pointer",
                background: COLORS.terracotta,
                color: "#fff",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.3px",
                boxShadow: `0 8px 30px ${COLORS.terracotta}40`,
                transition: "all 0.3s",
              }}
            >
              View My Work
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "14px 36px",
                borderRadius: 50,
                cursor: "pointer",
                background: "rgba(255,255,255,0.35)",
                color: COLORS.charcoal,
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: "0.3px",
                border: `2px solid ${COLORS.charcoal}30`,
                transition: "all 0.3s",
                backdropFilter: "blur(8px)",
              }}
            >
              Get in Touch
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.85}>
          <div
            style={{
              display: "flex",
              gap: 40,
              justifyContent: "center",
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "3.71", label: "GPA" },
              { num: "100+", label: "Students Mentored" },
              { num: "3", label: "SAP Modules" },
            ].map((s, i) => (
              <div
                key={i}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily:
                      "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(32px, 5vw, 40px)",
                    color: COLORS.charcoal,
                    fontWeight: 400,
                  }}
                >
                  {s.num}
                </div>

                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(13px, 2vw, 15px)",
                    color: `${COLORS.charcoal}80`,
                    letterSpacing: "1px",
                    marginTop: 10,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Outfit:wght@300;400;500;600;700;800&display=swap');

        @keyframes fadeSwitch {
          0%,100% {
            opacity: 0;
            transform: translateY(8px);
          }

          15%,85% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
}