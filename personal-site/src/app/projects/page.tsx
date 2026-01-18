import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and experiments by Stone",
};

export default function ProjectsPage() {
  const { t } = getServerTranslations();
  const featuredProjects = t.pages.projects.projects.filter((p) => p.featured);
  const otherProjects = t.pages.projects.projects.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.pages.projects.header.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.pages.projects.header.title}{" "}
            <span className="text-gradient">{t.pages.projects.header.titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.pages.projects.header.description}
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            {t.pages.projects.featuredTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "group rounded-2xl glass overflow-hidden",
                  "hover:border-primary/50 transition-all duration-300",
                  "hover:scale-[1.02]"
                )}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <div className="absolute top-3 right-3">
                    <span
                      className={cn(
                        "px-2 py-1 text-xs rounded-full",
                        project.status === "active" && "bg-green-500/20 text-green-500",
                        project.status === "beta" && "bg-yellow-500/20 text-yellow-500",
                        project.status === "archived" && "bg-gray-500/20 text-gray-500"
                      )}
                    >
                      {t.pages.projects.statuses[project.status]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {t.pages.projects.linkLabels.code}
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.pages.projects.linkLabels.demo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">{t.pages.projects.otherTitle}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "group p-6 rounded-2xl glass",
                  "hover:border-primary/50 transition-all"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          "px-2 py-0.5 text-xs rounded-full",
                          project.status === "active" && "bg-green-500/20 text-green-500",
                          project.status === "beta" && "bg-yellow-500/20 text-yellow-500",
                          project.status === "archived" && "bg-gray-500/20 text-gray-500"
                        )}
                      >
                        {t.pages.projects.statuses[project.status]}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
