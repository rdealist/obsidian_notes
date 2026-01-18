import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Translations } from "@/i18n/translations";

const socialLinks = [
  { href: "https://github.com/your-username", icon: Github, label: "GitHub" },
  { href: "https://twitter.com/your-username", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/in/your-username", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:your@email.com", icon: Mail, label: "Email" },
];

type FooterProps = {
  footer: Translations["footer"];
  brand: string;
};

export function Footer({ footer, brand }: FooterProps) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gradient">
              {brand}
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              {footer.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    "bg-muted hover:bg-primary/10 transition-colors",
                    "border border-border hover:border-primary/50",
                    "text-muted-foreground hover:text-primary"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footer.sections.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            {footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <p className="flex items-center gap-1">
            {footer.builtWithPrefix} <Heart className="w-4 h-4 text-accent" /> {footer.builtWithSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
}
