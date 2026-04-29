import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES, type Locale } from '@/i18n';

const STORAGE_KEY = 'homepage-language';

const isBrowser = typeof window !== 'undefined';

const DEFAULT_LOCALE: Locale = 'en';

function readStoredLocale(): Locale | null {
  if (!isBrowser) return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return SUPPORTED_LOCALES.includes(value as Locale) ? (value as Locale) : null;
}

export function useLanguage() {
  const { locale } = useI18n();

  const initial = readStoredLocale() ?? DEFAULT_LOCALE;
  if (locale.value !== initial) locale.value = initial;

  const lang = computed<Locale>(() => locale.value as Locale);

  const toggle = () => {
    locale.value = locale.value === 'en' ? 'de' : 'en';
  };

  watch(locale, (next) => {
    if (!isBrowser) return;
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute('lang', next);
  });

  if (isBrowser) {
    document.documentElement.setAttribute('lang', locale.value);
  }

  return { lang, toggle };
}
