import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Download, Mail, Sparkles, Code2, Rocket } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Tilt on mouse move
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [10, -10]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-10, 10]), { stiffness: 150, damping: 15 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center px-4 sm:px-6 pt-32 pb-16 overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.7_0.2_280/0.25),transparent_50%)]" />

      {/* Floating decorative icons */}
      <motion.div
        className="absolute top-32 right-[10%] hidden lg:block text-primary/40"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="size-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[8%] hidden lg:block text-accent/40"
        animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Code2 className="size-10" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-[5%] hidden xl:block text-primary/30"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Rocket className="size-7" />
      </motion.div>

      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }} className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono mb-6"
          >
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05]">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient inline-block">{profile.name}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xl sm:text-2xl text-muted-foreground font-light"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {profile.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-5 py-3 rounded-full shadow-glow animate-pulse-glow"
            >
              <Download className="size-4" />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 glass-strong font-medium px-5 py-3 rounded-full hover:bg-white/5 transition-colors"
            >
              <Mail className="size-4" />
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            {profile.socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ y: { duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" } }}
                className="size-10 grid place-items-center rounded-full glass hover:bg-white/10"
              >
                <s.icon className="size-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ perspective: 1000 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-40 animate-pulse" />
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong p-2"
          >
            <img
              src={profileImg}
              alt={profile.name}
              width={896}
              height={1152}
              className="size-full object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 shadow-card animate-float-slow"
          >
            <div className="text-xs text-muted-foreground">Currently</div>
            <div className="text-sm font-medium">Building delightful UIs</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 shadow-card animate-float-medium"
          >
            <div className="text-xs text-muted-foreground">Experience</div>
            <div className="text-sm font-medium text-gradient">5+ Years</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="size-8 rounded-full border border-white/20 grid place-items-center"
        >
          <div className="size-1.5 rounded-full bg-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
