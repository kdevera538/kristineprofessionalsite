// Animated flowing smoke/plasma background using brand colors.
// Uses SVG turbulence + multiple drifting radial blobs for an organic look.

export function SmokeBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Soft base wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, color-mix(in oklab, var(--brand-teal) 18%, transparent), transparent 60%), radial-gradient(ellipse at 80% 90%, color-mix(in oklab, var(--brand-orange) 18%, transparent), transparent 60%)",
        }}
      />

      {/* Drifting blurred blobs */}
      <div className="smoke-blob smoke-blob-1" />
      <div className="smoke-blob smoke-blob-2" />
      <div className="smoke-blob smoke-blob-3" />
      <div className="smoke-blob smoke-blob-4" />
      <div className="smoke-blob smoke-blob-5" />

      {/* Grain / turbulence overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="smoke-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#smoke-noise)" />
      </svg>
    </div>
  );
}
