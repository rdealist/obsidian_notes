import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE, type Locale } from "./config";
import { translations, type Translations } from "./translations";

const localeSet = new Set<string>(LOCALES);

export function resolveLocale(): Locale {
  const cookieStore = cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;

  if (value && localeSet.has(value)) {
    return value as Locale;
  }

  return DEFAULT_LOCALE;
}

export function getServerTranslations(): { locale: Locale; t: Translations } {
  const locale = resolveLocale();
  return { locale, t: translations[locale] };
}
