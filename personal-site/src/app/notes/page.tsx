import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, Tag, Search, Brain, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Notes",
  description: "AI learning notes and knowledge base",
};

const categoryIcons = [Brain, BookOpen, BookOpen, BookOpen, BookOpen, BookOpen];

export default function NotesPage() {
  const { t, locale } = getServerTranslations();
  const dateLocale = locale === "zh" ? "zh-CN" : "en-US";
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.pages.notes.header.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.pages.notes.header.title}{" "}
            <span className="text-gradient">{t.pages.notes.header.titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.pages.notes.header.description}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.pages.notes.searchPlaceholder}
              className={cn(
                "w-full pl-12 pr-4 py-4 rounded-2xl",
                "bg-muted border border-border",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                "placeholder:text-muted-foreground text-lg"
              )}
            />
          </div>
        </div>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">{t.pages.notes.categoriesTitle}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.pages.notes.categories.map((category, index) => {
              const Icon = categoryIcons[index];
              return (
              <Link
                key={index}
                href={`/notes/${category.slug}`}
                className={cn(
                  "group p-6 rounded-2xl glass",
                  "hover:border-primary/50 transition-all",
                  "hover:scale-[1.02]"
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {Icon ? <Icon className="w-5 h-5 text-primary" /> : null}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {category.count} {t.pages.notes.countLabel}
                  </span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              </Link>
              );
            })}
          </div>
        </section>

        {/* Recent Notes */}
        <section>
          <h2 className="text-2xl font-bold mb-8">{t.pages.notes.recentTitle}</h2>

          <div className="space-y-4">
            {t.pages.notes.recent.map((note, index) => (
              <Link
                key={index}
                href={`/notes/${note.slug}`}
                className={cn(
                  "group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl glass",
                  "hover:border-primary/50 transition-all"
                )}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
                      {note.category}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {note.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                  <span>
                    {new Date(note.date).toLocaleDateString(dateLocale, {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
