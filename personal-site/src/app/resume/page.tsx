import { Metadata } from "next";
import {
  Download,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume and experience",
};

export default function ResumePage() {
  const { t } = getServerTranslations();
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-gradient">{t.pages.resume.header.name}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {t.pages.resume.header.title}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {t.pages.resume.header.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {t.pages.resume.header.email}
                  </span>
                </div>
              </div>

              <button
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                  "bg-primary text-primary-foreground font-medium",
                  "hover:opacity-90 transition-all hover:scale-105",
                  "glow-primary shrink-0"
                )}
              >
                <Download className="w-5 h-5" />
                {t.pages.resume.header.download}
              </button>
            </div>
          </div>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              {t.pages.resume.sections.experience}
            </h2>

            <div className="space-y-6">
              {t.pages.resume.experience.map((job, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {t.pages.resume.sections.skills}
            </h2>

            <div className="glass rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.pages.resume.skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="font-medium mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              {t.pages.resume.sections.education}
            </h2>

            <div className="space-y-4">
              {t.pages.resume.education.map((edu, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {t.pages.resume.sections.certifications}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.pages.resume.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-4 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
