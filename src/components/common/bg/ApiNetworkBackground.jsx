import { useEffect, useRef } from "react";

const ApiNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e) => {
      if (reduceMotion) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const nodeCount = Math.min(Math.floor((width * height) / 16000), 36);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: reduceMotion ? 0 : (Math.random() - 0.5) * 0.35,
        vy: reduceMotion ? 0 : (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI,
      });
    }

    const drawFrame = (animate) => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        if (animate) {
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;
          if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
          if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;
          nodeA.pulse += 0.025;
        }

        const currentRadius = animate
          ? nodeA.radius + Math.sin(nodeA.pulse) * 0.4
          : nodeA.radius;

        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14, 165, 233, 0.35)";
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (!reduceMotion) {
          const mouseDx = mouse.x - nodeA.x;
          const mouseDy = mouse.y - nodeA.y;
          const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

          if (mouseDist < mouse.radius) {
            const force = (mouse.radius - mouseDist) / mouse.radius;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${force * 0.35})`;
            ctx.lineWidth = 1.25;
            ctx.stroke();
          }
        }
      }
    };

    if (reduceMotion) {
      drawFrame(false);
    } else {
      const loop = () => {
        drawFrame(true);
        animationFrameId = requestAnimationFrame(loop);
      };
      loop();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0"
      aria-hidden="true"
    />
  );
};

export default ApiNetworkBackground;
