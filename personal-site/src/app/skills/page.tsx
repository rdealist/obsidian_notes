import { Metadata } from "next";
import {
  Brain,
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Skills & Prompts",
  description: "Technical skills and prompt templates",
};

const categoryIcons = [Brain, Globe, Database, Terminal];

export default function SkillsPage() {
  const { t } = getServerTranslations();
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.pages.skills.header.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.pages.skills.header.title}{" "}
            <span className="text-gradient">{t.pages.skills.header.titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.pages.skills.header.description}
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            {t.pages.skills.skillsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.pages.skills.categories.map((category, index) => {
              const Icon = categoryIcons[index];
              return (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    {Icon ? <Icon className="w-5 h-5 text-primary" /> : null}
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* Prompts Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {t.pages.skills.promptTitle}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.pages.skills.prompts.map((template, index) => (
              <div
                key={index}
                className={cn("glass rounded-2xl p-6", "group")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                      {template.category}
                    </span>
                    <h3 className="font-semibold text-lg mt-2">
                      {template.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {template.description}
                    </p>
                  </div>
                  <button
                    className={cn(
                      "p-2 rounded-lg",
                      "bg-muted hover:bg-primary/10 transition-colors",
                      "opacity-0 group-hover:opacity-100"
                    )}
                    title={t.pages.skills.copyPrompt}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                <pre
                  className={cn(
                    "p-4 rounded-xl bg-muted/50 text-sm",
                    "overflow-x-auto whitespace-pre-wrap",
                    "font-mono text-muted-foreground"
                  )}
                >
                  {template.prompt}
                </pre>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
