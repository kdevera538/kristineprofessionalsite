import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

const COLORS = [35, 50, 75, 180, 195]; // orange, yellow, mint, teal hues

export function FairyDust() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastScrollEmit = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number, count: number, spread = 1) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (Math.random() * 2 + 0.6) * spread;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 1.2,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          size: Math.random() * 2.5 + 1,
          hue: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const onClick = (e: MouseEvent) => spawn(e.clientX, e.clientY, 28, 1.4);
    const onPointerMove = (e: PointerEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };
    const lastMouse = { current: { x: window.innerWidth / 2, y: window.innerHeight / 2 } };
    const onScroll = () => {
      const now = performance.now();
      if (now - lastScrollEmit.current < 40) return;
      lastScrollEmit.current = now;
      const dy = Math.abs(window.scrollY - lastScrollY.current);
      lastScrollY.current = window.scrollY;
      const count = Math.min(8, Math.max(2, Math.floor(dy / 8)));
      spawn(lastMouse.current.x, lastMouse.current.y, count, 0.8);
    };

    window.addEventListener("click", onClick);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // gravity
        p.vx *= 0.985;
        const t = 1 - p.life / p.maxLife;
        if (t <= 0) {
          ps.splice(i, 1);
          continue;
        }
        const alpha = Math.max(0, t);
        ctx.beginPath();
        const r = p.size * (0.6 + t * 0.8);
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        grd.addColorStop(0, `oklch(0.95 0.18 ${p.hue} / ${alpha})`);
        grd.addColorStop(1, `oklch(0.85 0.15 ${p.hue} / 0)`);
        ctx.fillStyle = grd;
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `oklch(0.98 0.12 ${p.hue} / ${alpha})`;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[100]"
    />
  );
}
