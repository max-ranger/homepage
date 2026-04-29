import { onBeforeUnmount, ref, watchEffect, type Ref } from 'vue';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'homepage-theme-mode';

const isBrowser = typeof window !== 'undefined';

function readStoredMode(): ThemeMode | null {
  if (!isBrowser) return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === 'dark' || value === 'light') return value;
  return null;
}

function getSystemTheme(): ThemeMode {
  if (!isBrowser) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme(rootRef: Ref<HTMLElement | null>) {
  const userOverride = ref<ThemeMode | null>(readStoredMode());
  const systemTheme = ref<ThemeMode>(getSystemTheme());
  const theme = ref<ThemeMode>(userOverride.value ?? systemTheme.value);

  const toggle = () => {
    const next: ThemeMode = theme.value === 'dark' ? 'light' : 'dark';
    theme.value = next;
    userOverride.value = next;
  };

  if (isBrowser) {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      systemTheme.value = e.matches ? 'dark' : 'light';
      if (userOverride.value === null) theme.value = systemTheme.value;
    };
    media.addEventListener('change', onChange);
    onBeforeUnmount(() => media.removeEventListener('change', onChange));
  }

  watchEffect(() => {
    const el = rootRef.value;
    if (!el) return;
    el.setAttribute('data-theme', theme.value);
  });

  watchEffect(() => {
    if (!isBrowser) return;
    if (userOverride.value === null) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, userOverride.value);
    }
  });

  return { theme, toggle };
}
