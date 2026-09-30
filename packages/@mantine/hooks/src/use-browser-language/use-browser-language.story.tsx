import { useBrowserLanguage, usePreferredLanguages } from './use-browser-language';

export default { title: 'useBrowserLanguage' };

export function Usage() {
  const language = useBrowserLanguage();

  return (
    <div style={{ padding: 40, fontFamily: 'monospace' }}>
      navigator.language: {language ?? 'undefined'}
    </div>
  );
}

export function PreferredLanguages() {
  const languages = usePreferredLanguages();

  return (
    <div style={{ padding: 40, fontFamily: 'monospace' }}>
      navigator.languages: {languages.length > 0 ? languages.join(', ') : 'empty'}
    </div>
  );
}
