import { Metadata } from "next";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Code,
  Brain,
  Rocket,
  Coffee,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Stone - AI Explorer & Product Builder",
};

const timelineIcons = [Rocket, Brain, Briefcase, Code];
const interestIcons = [Brain, Rocket, Code, Coffee];

export default function AboutPage() {
  const { t } = getServerTranslations();
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.pages.about.header.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.pages.about.header.title}{" "}
            <span className="text-gradient">{t.pages.about.header.name}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.pages.about.header.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Bio */}
          <section className="mb-16">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{t.pages.about.location}</span>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {t.pages.about.bio.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{t.pages.about.timelineTitle}</h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

              <div className="space-y-8">
                {t.pages.about.timeline.map((item, index) => {
                  const Icon = timelineIcons[index];
                  return (
                  <div key={index} className="relative flex gap-6">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0",
                        "bg-primary/10 relative z-10"
                      )}
                    >
                      {Icon ? <Icon className="w-6 h-6 text-primary" /> : null}
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-6 flex-1">
                      <span className="text-primary text-sm font-medium">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                      <p className="text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t.pages.about.interestsTitle} <Heart className="w-6 h-6 inline text-accent" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.pages.about.interests.map((interest, index) => {
                const Icon = interestIcons[index];
                return (
                <div
                  key={index}
                  className={cn(
                    "glass rounded-2xl p-6 text-center",
                    "hover:border-primary/50 transition-all"
                  )}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    {Icon ? <Icon className="w-6 h-6 text-primary" /> : null}
                  </div>
                  <span className="font-medium">{interest.name}</span>
                </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
