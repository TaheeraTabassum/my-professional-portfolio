import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { FloatingBackdrop } from "@/components/portfolio/FloatingBackdrop";
import { Hero } from "@/components/portfolio/Hero";
import { TechStack } from "@/components/portfolio/TechStack";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Stats } from "@/components/portfolio/Stats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rahman — Front-End Developer & Software Engineer" },
      { name: "description", content: "Portfolio of Alex Rahman, a front-end developer and software engineer crafting fast, accessible, and beautifully animated web experiences." },
      { property: "og:title", content: "Alex Rahman — Front-End Developer & Software Engineer" },
      { property: "og:description", content: "Premium portfolio: React, Next.js, TypeScript. Selected projects, experience, and ways to get in touch." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen relative">
      <FloatingBackdrop />
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
