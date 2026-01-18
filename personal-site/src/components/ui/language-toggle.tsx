"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import { LOCALE_COOKIE } from "@/i18n/config";

const languageFlags: Record<Locale, string> = {
  zh: "🇨🇳",
  en: "🇺🇸",
};

type LanguageToggleProps = {
  locale: Locale;
  labels: {
    zh: string;
    en: string;
  };
};

export function LanguageToggle({ locale, labels }: LanguageToggleProps) {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<Locale>(locale);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentLang(locale);
  }, [locale]);

  const handleLanguageChange = (langCode: Locale) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    document.cookie = `${LOCALE_COOKIE}=${langCode}; path=/; max-age=31536000`;
    router.refresh();
  };

  const languages = [
    { code: "zh" as const, label: labels.zh, flag: languageFlags.zh },
    { code: "en" as const, label: labels.en, flag: languageFlags.en },
  ];

  const currentLanguage = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "px-3 h-9 rounded-lg flex items-center gap-1.5",
          "bg-muted hover:bg-primary/10 transition-colors",
          "border border-border hover:border-primary/50",
          "text-sm font-medium"
        )}
      >
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 glass rounded-lg overflow-hidden min-w-[100px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "w-full px-3 py-2 flex items-center gap-2 text-sm",
                  "hover:bg-primary/10 transition-colors",
                  currentLang === lang.code && "text-primary"
                )}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
