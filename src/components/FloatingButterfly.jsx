import { useEffect, useRef, useState } from "react";

const FloatingButterfly = () => {
  const [position, setPosition] = useState({ x: 140, y: 120 });
  const [status, setStatus] = useState("flying"); // "flying" | "approaching" | "landed" | "darting"
  const [transitionMs, setTransitionMs] = useState(1400);

  const positionRef = useRef({ x: 140, y: 120 });
  const lastDart = useRef(0);

  useEffect(() => {
    const getRandomPosition = () => ({
      x: 20 + Math.random() * Math.max(0, window.innerWidth - 76),
      y: 20 + Math.random() * Math.max(0, window.innerHeight - 60),
    });

    const getTextLandingSpot = () => {
      const candidates = Array.from(
        document.querySelectorAll("h1, h2, h3, h4, p, a, button, span")
      ).filter((el) => {
        const rect = el.getBoundingClientRect();
        const text = el.textContent?.trim();
        return (
          text &&
          text.length > 2 &&
          text.length < 160 &&
          rect.width > 24 &&
          rect.height > 10 &&
          rect.top > 30 &&
          rect.bottom < window.innerHeight - 30 &&
          rect.left > 16 &&
          rect.right < window.innerWidth - 16
        );
      });

      if (candidates.length === 0) return null;

      const chosen = candidates[Math.floor(Math.random() * candidates.length)];
      const rect = chosen.getBoundingClientRect();

      const targetX = Math.max(
        12,
        Math.min(
          window.innerWidth - 68,
          rect.left + rect.width * (0.2 + Math.random() * 0.6) - 28
        )
      );
      const targetY = Math.max(12, rect.top - 20);

      return { x: targetX, y: targetY };
    };

    let landTimer = null;

    const moveTo = (next, { duration = 1400, mode = "flying" } = {}) => {
      clearTimeout(landTimer);
      setTransitionMs(duration);
      setStatus(mode);
      positionRef.current = next;
      setPosition(next);

      if (mode === "approaching") {
        landTimer = setTimeout(() => {
          setStatus("landed");
        }, duration);
      }
    };

    const wander = () => {
      const shouldLand = Math.random() < 0.4;
      const spot = shouldLand ? getTextLandingSpot() : null;

      if (spot) {
        moveTo(spot, { duration: 1550, mode: "approaching" });
      } else {
        moveTo(getRandomPosition(), { duration: 1350, mode: "flying" });
      }
    };

    moveTo(getRandomPosition(), { duration: 1350, mode: "flying" });
    const interval = setInterval(wander, 5200);

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      const current = positionRef.current;
      const centerX = current.x + 28;
      const centerY = current.y + 20;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < 110 && Date.now() - lastDart.current > 1050) {
        lastDart.current = Date.now();
        moveTo(getRandomPosition(), { duration: 720, mode: "darting" });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      clearTimeout(landTimer);
      clearInterval(interval);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const isLanded = status === "landed";
  const isDarting = status === "darting";

  return (
    <>
      <style>{`
        @keyframes morphoDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-3deg);
          }
          50% {
            transform: translate3d(0, -6px, 0) rotate(3deg);
          }
        }

        @keyframes morphoSettle {
          0%, 100% {
            transform: translate3d(0, 1px, 0) rotate(-1.5deg);
          }
          50% {
            transform: translate3d(0, 2.5px, 0) rotate(1.5deg);
          }
        }

        .morpho-drift {
          animation: morphoDrift 2.9s ease-in-out infinite;
        }

        .morpho-drift--landed {
          animation: morphoSettle 3.8s ease-in-out infinite;
        }

        .morpho-drift--darting {
          animation: morphoDrift 1.05s ease-in-out infinite;
        }

        @keyframes morphoLeftFlap {
          0%, 100% {
            transform: scaleX(1) skewY(0deg);
          }
          50% {
            transform: scaleX(0.56) skewY(-7deg);
          }
        }

        @keyframes morphoRightFlap {
          0%, 100% {
            transform: scaleX(1) skewY(0deg);
          }
          50% {
            transform: scaleX(0.56) skewY(7deg);
          }
        }

        @keyframes morphoRestLeft {
          0%, 100% {
            transform: scaleX(0.92) skewY(-2deg);
          }
          50% {
            transform: scaleX(0.75) skewY(-5deg);
          }
        }

        @keyframes morphoRestRight {
          0%, 100% {
            transform: scaleX(0.92) skewY(2deg);
          }
          50% {
            transform: scaleX(0.75) skewY(5deg);
          }
        }

        .morpho-wing-l,
        .morpho-wing-r {
          transform-box: view-box;
        }

        .morpho-wing-l {
          transform-origin: 96px 76px;
          animation: morphoLeftFlap 0.34s ease-in-out infinite;
        }

        .morpho-wing-r {
          transform-origin: 104px 76px;
          animation: morphoRightFlap 0.34s ease-in-out infinite;
        }

        .morpho-state--landed .morpho-wing-l {
          animation: morphoRestLeft 2.1s ease-in-out infinite;
        }

        .morpho-state--landed .morpho-wing-r {
          animation: morphoRestRight 2.1s ease-in-out infinite;
        }

        .morpho-state--darting .morpho-wing-l,
        .morpho-state--darting .morpho-wing-r {
          animation-duration: 0.19s;
        }

        @media (prefers-reduced-motion: reduce) {
          .morpho-drift,
          .morpho-drift--landed,
          .morpho-drift--darting,
          .morpho-wing-l,
          .morpho-wing-r {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed z-40 ${
          isLanded ? "morpho-state--landed" : ""
        } ${isDarting ? "morpho-state--darting" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          transition: `left ${transitionMs}ms cubic-bezier(.22,.61,.36,1), top ${transitionMs}ms cubic-bezier(.22,.61,.36,1)`,
          willChange: "left, top",
        }}
      >
        <div
          className={`morpho-drift h-10 w-14 ${
            isLanded ? "morpho-drift--landed" : ""
          } ${isDarting ? "morpho-drift--darting" : ""}`}
        >
          <svg
            viewBox="0 0 200 165"
            className="h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Luminous Morpho Cobalt & Electric Cyan Fill */}
              <radialGradient id="photoMorphoBlue" cx="50%" cy="48%" r="62%">
                <stop offset="0%" stopColor="#8ceeff" />
                <stop offset="30%" stopColor="#149bff" />
                <stop offset="66%" stopColor="#0654c7" />
                <stop offset="88%" stopColor="#051c4d" />
                <stop offset="100%" stopColor="#030814" />
              </radialGradient>

              <radialGradient id="photoMorphoHindBlue" cx="48%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#72e3ff" />
                <stop offset="36%" stopColor="#0d84f0" />
                <stop offset="72%" stopColor="#053d9c" />
                <stop offset="92%" stopColor="#04112e" />
                <stop offset="100%" stopColor="#020612" />
              </radialGradient>

              <linearGradient id="photoMorphoHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0fbff" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#031436" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* ================= LEFT WING (Sweeping Forewing + Tail Spur) ================= */}
            <g className="morpho-wing-l">
              {/* Forewing */}
              <path
                d="M95 73 C79 42 52 10 23 6 C11 4 7 13 11 28 C14 42 15 56 17 69 C19 80 28 86 44 87 C63 88 81 84 95 79 Z"
                fill="url(#photoMorphoBlue)"
                stroke="#040914"
                strokeWidth="3.6"
                strokeLinejoin="round"
              />
              <path
                d="M91 73 C76 46 52 19 25 14 C18 23 19 42 23 65 C43 73 70 77 91 73 Z"
                fill="url(#photoMorphoHighlight)"
              />

              {/* Hindwing with Scalloped Rim & Signature Lower-Left Tail */}
              <path
                d="M95 80 C75 83 46 86 27 91 C22 95 25 101 21 106 C17 111 23 117 19 123 C15 129 21 135 16 142 L6 156 C5 158 8 159 12 155 L25 142 C30 140 34 149 42 150 C49 151 52 144 58 146 C65 148 69 141 75 138 C84 132 93 111 97 86 Z"
                fill="url(#photoMorphoHindBlue)"
                stroke="#040914"
                strokeWidth="3.6"
                strokeLinejoin="round"
              />

              {/* Wing Venation (Left) */}
              <g
                fill="none"
                stroke="#05122b"
                strokeWidth="1.25"
                strokeLinecap="round"
                opacity="0.9"
              >
                <path d="M94 74 C76 53 58 34 41 22 C45 35 52 49 63 61 C74 68 84 72 94 74" />
                <path d="M54 32 C41 20 27 11 14 7" />
                <path d="M46 41 C33 32 22 26 12 23" />
                <path d="M52 50 C37 46 24 43 15 42" />
                <path d="M63 61 C47 60 32 60 20 62" />
                <path d="M77 70 C60 72 44 74 30 77" />
                <path d="M94 81 C77 88 62 96 52 108 C62 111 74 107 84 97" />
                <path d="M67 90 C51 94 37 98 25 102" />
                <path d="M56 100 C42 108 31 115 22 121" />
                <path d="M52 108 C40 121 28 134 17 148" />
                <path d="M62 110 C54 123 48 136 44 147" />
                <path d="M74 106 C69 119 64 131 60 142" />
              </g>

              {/* Double Row of Crisp White Dots Along Dark Forewing Edge */}
              <g fill="#f9feff" opacity="0.96">
                <circle cx="17" cy="10" r="1.9" />
                <circle cx="25" cy="11" r="1.7" />
                <circle cx="13" cy="19" r="1.7" />
                <circle cx="20" cy="21" r="1.5" />
                <circle cx="14" cy="29" r="1.7" />
                <circle cx="21" cy="30" r="1.3" />
                <circle cx="15" cy="40" r="1.6" />
                <circle cx="17" cy="52" r="1.6" />
                <circle cx="19" cy="64" r="1.5" />
                <circle cx="24" cy="74" r="1.5" />
                <circle cx="32" cy="82" r="1.3" />
              </g>

              {/* Warm Amber-Orange Crescents on Hindwing Scallops */}
              <g fill="#ff9b14" stroke="#ffe5a3" strokeWidth="0.6">
                <path d="M24 98 Q28 102 23 106 Q21 102 24 98 Z" />
                <path d="M22 115 Q26 119 21 123 Q19 119 22 115 Z" />
                <path d="M36 144 Q42 139 47 145 Q41 148 36 144 Z" />
                <path d="M53 140 Q58 135 63 140 Q58 143 53 140 Z" />
              </g>
            </g>

            {/* ================= RIGHT WING (Broad Forewing + Scalloped Hindwing) ================= */}
            <g className="morpho-wing-r">
              {/* Forewing */}
              <path
                d="M105 73 C121 42 148 10 177 6 C189 4 193 13 189 28 C186 42 185 56 183 69 C181 80 172 86 156 87 C137 88 119 84 105 79 Z"
                fill="url(#photoMorphoBlue)"
                stroke="#040914"
                strokeWidth="3.6"
                strokeLinejoin="round"
              />
              <path
                d="M109 73 C124 46 148 19 175 14 C182 23 181 42 177 65 C157 73 130 77 109 73 Z"
                fill="url(#photoMorphoHighlight)"
              />

              {/* Hindwing */}
              <path
                d="M105 80 C125 83 154 86 173 91 C178 95 175 101 179 106 C183 111 177 117 181 123 C185 129 179 135 184 142 L191 152 C192 154 189 155 186 151 L175 142 C170 140 166 149 158 150 C151 151 148 144 142 146 C135 148 131 141 125 138 C116 132 107 111 103 86 Z"
                fill="url(#photoMorphoHindBlue)"
                stroke="#040914"
                strokeWidth="3.6"
                strokeLinejoin="round"
              />

              {/* Wing Venation (Right) */}
              <g
                fill="none"
                stroke="#05122b"
                strokeWidth="1.25"
                strokeLinecap="round"
                opacity="0.9"
              >
                <path d="M106 74 C124 53 142 34 159 22 C155 35 148 49 137 61 C126 68 116 72 106 74" />
                <path d="M146 32 C159 20 173 11 186 7" />
                <path d="M154 41 C167 32 178 26 188 23" />
                <path d="M148 50 C163 46 176 43 185 42" />
                <path d="M137 61 C153 60 168 60 180 62" />
                <path d="M123 70 C140 72 156 74 170 77" />
                <path d="M106 81 C123 88 138 96 148 108 C138 111 126 107 116 97" />
                <path d="M133 90 C149 94 163 98 175 102" />
                <path d="M144 100 C158 108 169 115 178 121" />
                <path d="M148 108 C160 121 172 134 183 148" />
                <path d="M138 110 C146 123 152 136 156 147" />
                <path d="M126 106 C131 119 136 131 140 142" />
              </g>

              {/* Double Row of Crisp White Dots Along Dark Forewing Edge */}
              <g fill="#f9feff" opacity="0.96">
                <circle cx="183" cy="10" r="1.9" />
                <circle cx="175" cy="11" r="1.7" />
                <circle cx="187" cy="19" r="1.7" />
                <circle cx="180" cy="21" r="1.5" />
                <circle cx="186" cy="29" r="1.7" />
                <circle cx="179" cy="30" r="1.3" />
                <circle cx="185" cy="40" r="1.6" />
                <circle cx="183" cy="52" r="1.6" />
                <circle cx="181" cy="64" r="1.5" />
                <circle cx="176" cy="74" r="1.5" />
                <circle cx="168" cy="82" r="1.3" />
              </g>

              {/* Warm Amber-Orange Crescents on Hindwing Scallops */}
              <g fill="#ff9b14" stroke="#ffe5a3" strokeWidth="0.6">
                <path d="M176 98 Q172 102 177 106 Q179 102 176 98 Z" />
                <path d="M178 115 Q174 119 179 123 Q181 119 178 115 Z" />
                <path d="M164 144 Q158 139 153 145 Q159 148 164 144 Z" />
                <path d="M147 140 Q142 135 137 140 Q142 143 147 140 Z" />
              </g>
            </g>

            {/* ================= BODY, HEAD & ANTENNAE ================= */}
            <g>
              {/* Long Sleek Antennae */}
              <path
                d="M98.5 68 C90 46 78 29 66 19"
                fill="none"
                stroke="#050b16"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle cx="65.5" cy="18.5" r="1.5" fill="#050b16" />

              <path
                d="M101.5 68 C110 46 122 29 134 19"
                fill="none"
                stroke="#050b16"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle cx="134.5" cy="18.5" r="1.5" fill="#050b16" />

              {/* Head & Eyes */}
              <ellipse cx="100" cy="69.5" rx="3.4" ry="2.8" fill="#061224" />
              <circle cx="97.5" cy="69" r="2.1" fill="#040811" />
              <circle cx="102.5" cy="69" r="2.1" fill="#040811" />

              {/* Thorax */}
              <ellipse
                cx="100"
                cy="79"
                rx="4.2"
                ry="7.8"
                fill="#061326"
                stroke="#38bdf8"
                strokeWidth="0.7"
              />
              <ellipse cx="99.2" cy="78" rx="1.5" ry="4.6" fill="#7dd3fc" opacity="0.4" />

              {/* Segmented Abdomen */}
              <path
                d="M96.8 86.5 C96 98 97.6 109 100 115 C102.4 109 104 98 103.2 86.5 Z"
                fill="#061326"
                stroke="#1e3a5f"
                strokeWidth="0.7"
              />
              <g stroke="#60a5fa" strokeWidth="0.75" opacity="0.55" strokeLinecap="round">
                <line x1="97.2" y1="91" x2="102.8" y2="91" />
                <line x1="97.2" y1="96" x2="102.8" y2="96" />
                <line x1="97.5" y1="101" x2="102.5" y2="101" />
                <line x1="98.2" y1="106" x2="101.8" y2="106" />
                <line x1="99" y1="110.5" x2="101" y2="110.5" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default FloatingButterfly;