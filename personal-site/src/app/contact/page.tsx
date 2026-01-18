import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getServerTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Stone",
};

const contactMethodIcons = [Mail, Twitter, Github, Linkedin];

export default function ContactPage() {
  const { t } = getServerTranslations();
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.pages.contact.header.label}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.pages.contact.header.title}{" "}
            <span className="text-gradient">{t.pages.contact.header.titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.pages.contact.header.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                {t.pages.contact.form.title}
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.pages.contact.form.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t.pages.contact.form.placeholders.name}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.pages.contact.form.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t.pages.contact.form.placeholders.email}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.pages.contact.form.fields.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder={t.pages.contact.form.placeholders.subject}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t.pages.contact.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t.pages.contact.form.placeholders.message}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl resize-none",
                      "bg-muted border border-border",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50",
                      "placeholder:text-muted-foreground"
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
                    "bg-primary text-primary-foreground font-medium",
                    "hover:opacity-90 transition-all hover:scale-[1.02]",
                    "glow-primary"
                  )}
                >
                  <Send className="w-5 h-5" />
                  {t.pages.contact.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info */}
            <div className="glass rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6">{t.pages.contact.info.title}</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t.pages.contact.info.locationLabel}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.pages.contact.info.locationValue}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t.pages.contact.info.responseLabel}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.pages.contact.info.responseValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-8">
                <h2 className="text-xl font-bold mb-6">{t.pages.contact.socialTitle}</h2>

                <div className="space-y-4">
                  {t.pages.contact.methods.map((method, index) => {
                    const Icon = contactMethodIcons[index];
                    return (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl",
                        "bg-muted/50 hover:bg-primary/10 transition-colors",
                        "group"
                      )}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {Icon ? <Icon className="w-5 h-5 text-primary" /> : null}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {method.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
