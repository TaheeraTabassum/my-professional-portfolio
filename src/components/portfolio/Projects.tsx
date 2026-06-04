import { motion } from "framer-motion";
import { Section } from "./Section";
import { projects } from "@/lib/portfolio-data";
import { ExternalLink, Github } from "lucide-react";

const featured = projects.filter((p) => p.featured);
const more = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Featured Projects"
      description="A selection of my best work showcasing my skills in web development and design."
    >
      {/* Featured — alternating layout */}
      <div className="space-y-16">
        {featured.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="group relative glass rounded-2xl overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gradient">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="size-3.5" /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-1.5 glass-strong text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <Github className="size-3.5" /> GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* More Projects */}
      <div className="mt-24">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold mb-8"
        >
          More Projects
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {more.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-bold">{p.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href={p.demo}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="size-3" /> Demo
                  </a>
                  <a
                    href={p.github}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 glass-strong text-xs font-medium px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors"
                  >
                    <Github className="size-3" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
