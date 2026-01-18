import { ParticleBackground } from "@/components/ui/particle-background";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutPreviewSection } from "@/components/sections/about-preview-section";
import { ProjectsPreviewSection } from "@/components/sections/projects-preview-section";
import { SkillsPreviewSection } from "@/components/sections/skills-preview-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { CTASection } from "@/components/sections/cta-section";
import { getServerTranslations } from "@/i18n/server";

export default function HomePage() {
  const { locale, t } = getServerTranslations();
  return (
    <>
      <ParticleBackground />
      <HeroSection content={t.home.hero} />
      <AboutPreviewSection content={t.home.aboutPreview} />
      <ProjectsPreviewSection content={t.home.projectsPreview} />
      <SkillsPreviewSection content={t.home.skillsPreview} />
      <BlogPreviewSection locale={locale} content={t.home.blogPreview} />
      <CTASection content={t.home.cta} />
    </>
  );
}
