import { useEffect, useRef, useState } from "react";

const IMAGE_PATH = "/images/hsd-butterfly";

export default function FloatingButterfly() {
  const [position, setPosition] = useState({ x: 80, y: 100 });
  const positionRef = useRef({ x: 80, y: 100 });
  const lastDart = useRef(0);

  useEffect(() => {
    const getRandomPosition = () => {
      const size = Math.min(180, Math.max(110, window.innerWidth * 0.13));
      return {
        x: 20 + Math.random() * Math.max(0, window.innerWidth - size - 40),
        y: 30 + Math.random() * Math.max(0, window.innerHeight - size - 60),
      };
    };

    const moveButterfly = () => {
      const next = getRandomPosition();
      positionRef.current = next;
      setPosition(next);
    };

    moveButterfly();
    const wanderInterval = window.setInterval(moveButterfly, 7000);

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      const current = positionRef.current;
      const size = Math.min(180, Math.max(110, window.innerWidth * 0.13));
      const dx = event.clientX - (current.x + size / 2);
      const dy = event.clientY - (current.y + size / 2);
      const distance = Math.hypot(dx, dy);

      if (distance < 155 && Date.now() - lastDart.current > 1400) {
        lastDart.current = Date.now();
        moveButterfly();
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.clearInterval(wanderInterval);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <style>{`
        .hsd-butterfly-position {
          width: clamp(110px, 13vw, 180px);
          aspect-ratio: 3 / 2;
          perspective: 700px;
          pointer-events: none;
          will-change: left, top;
        }

        .hsd-butterfly-float {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: hsdButterflyFloat 3.8s ease-in-out infinite;
        }

        .hsd-butterfly-layer {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          user-select: none;
          -webkit-user-drag: none;
        }

        .hsd-butterfly-left {
          transform-origin: 50.5% 50%;
          backface-visibility: visible;
          animation: hsdLeftWing 650ms ease-in-out infinite;
        }

        .hsd-butterfly-right {
          transform-origin: 52.5% 50%;
          backface-visibility: visible;
          animation: hsdRightWing 650ms ease-in-out infinite;
        }

        .hsd-butterfly-body {
          z-index: 2;
        }

        @keyframes hsdLeftWing {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(48deg); }
        }

        @keyframes hsdRightWing {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(-48deg); }
        }

        @keyframes hsdButterflyFloat {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
          50% { transform: translate3d(0, -9px, 0) rotate(2deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hsd-butterfly-float,
          .hsd-butterfly-left,
          .hsd-butterfly-right {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="hsd-butterfly-position fixed z-40"
        style={{
          left: position.x,
          top: position.y,
          transition:
            "left 1.5s cubic-bezier(.22,.61,.36,1), top 1.5s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        <div className="hsd-butterfly-float">
          <img
            className="hsd-butterfly-layer hsd-butterfly-left"
            src={`${IMAGE_PATH}/left-wing.png`}
            alt=""
            draggable="false"
          />
          <img
            className="hsd-butterfly-layer hsd-butterfly-right"
            src={`${IMAGE_PATH}/right-wing.png`}
            alt=""
            draggable="false"
          />
          <img
            className="hsd-butterfly-layer hsd-butterfly-body"
            src={`${IMAGE_PATH}/body-and-antennae.png`}
            alt=""
            draggable="false"
          />
        </div>
      </div>
    </>
  );
}
