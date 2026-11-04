import { useEffect, useState } from 'react';

export function useBrowserLanguage(): string | undefined {
  const [language, setLanguage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const update = () => setLanguage(window.navigator.language);

    update();
    window.addEventListener('languagechange', update);
    return () => window.removeEventListener('languagechange', update);
  }, []);

  return language;
}

export function usePreferredLanguages(): readonly string[] {
  const [languages, setLanguages] = useState<readonly string[]>([]);

  useEffect(() => {
    const update = () => setLanguages(window.navigator.languages);

    update();
    window.addEventListener('languagechange', update);
    return () => window.removeEventListener('languagechange', update);
  }, []);

  return languages;
}
