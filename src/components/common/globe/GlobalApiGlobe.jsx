import { useEffect, useRef } from "react";

const GlobalApiGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animFrame;
    let rotation = 0;

    const width = (canvas.width = 260);
    const height = (canvas.height = 260);
    const radius = 95;

    // Supplier Hub Pins (lat/lon mapped to sphere coordinates)
    const hubs = [
      { name: "London (Duffel)", lat: 51.5, lon: -0.1 },
      { name: "Frankfurt (RateHawk)", lat: 50.1, lon: 8.6 },
      { name: "Dubai (Hotelbeds)", lat: 25.2, lon: 55.2 },
      { name: "Singapore (Rail Engine)", lat: 1.3, lon: 103.8 },
      { name: "New York (Xmoney)", lat: 40.7, lon: -74.0 },
      { name: "Lahore Hub (Backend)", lat: 31.5, lon: 74.3 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      rotation += 0.008;

      const cx = width / 2;
      const cy = height / 2;

      // Draw sphere outline wireframe rings
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(14, 165, 233, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Latitudinal rings
      for (let lat = -60; lat <= 60; lat += 30) {
        const r = radius * Math.cos((lat * Math.PI) / 180);
        const y = cy + radius * Math.sin((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(cx, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
        ctx.stroke();
      }

      // Draw Hub Pins
      hubs.forEach((hub) => {
        const phi = ((90 - hub.lat) * Math.PI) / 180;
        const theta = ((hub.lon + rotation * 50) * Math.PI) / 180;

        const x = cx + radius * Math.sin(phi) * Math.cos(theta);
        const y = cy + radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        if (z > 0) {
          const alpha = (z / radius) * 0.9;

          // Glowing dot
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = hub.name.includes("Lahore")
            ? `rgba(16, 185, 129, ${alpha})`
            : `rgba(14, 165, 233, ${alpha})`;
          ctx.fill();

          // Connect hubs back to Lahore Hub
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.3})`;
          ctx.stroke();
        }
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center p-4 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-xl text-center">
      <canvas ref={canvasRef} className="w-[220px] h-[220px]" />
      <p className="text-xs font-bold text-sky-400 mt-2">
        🌐 Global Travel API Network Matrix
      </p>
      <span className="text-[11px] text-slate-400">
        Live connections to 8+ global supplier hubs
      </span>
    </div>
  );
};

export default GlobalApiGlobe;
