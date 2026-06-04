export function FloatingBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid mask-radial-fade opacity-40" />
      <div className="absolute -top-32 -left-32 size-[28rem] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-32 size-[32rem] rounded-full opacity-25 blur-3xl animate-blob"
        style={{ background: "var(--gradient-primary)", animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 size-[26rem] rounded-full opacity-20 blur-3xl animate-blob"
        style={{ background: "var(--gradient-primary)", animationDelay: "-14s" }}
      />
    </div>
  );
}
