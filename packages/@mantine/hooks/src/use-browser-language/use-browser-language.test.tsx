import { act, renderHook } from '@testing-library/react';
import { useBrowserLanguage, usePreferredLanguages } from './use-browser-language';

function setLanguage(language: string) {
  Object.defineProperty(window.navigator, 'language', {
    value: language,
    configurable: true,
  });
}

function setLanguages(languages: string[]) {
  Object.defineProperty(window.navigator, 'languages', {
    value: languages,
    configurable: true,
  });
}

function dispatchLanguageChange() {
  act(() => {
    window.dispatchEvent(new Event('languagechange'));
  });
}

describe('@mantine/hooks/use-browser-language', () => {
  it('returns navigator.language after mount', () => {
    setLanguage('en-US');
    const { result } = renderHook(() => useBrowserLanguage());
    expect(result.current).toBe('en-US');
  });

  it('updates when the languagechange event is dispatched', () => {
    setLanguage('en-US');
    const { result } = renderHook(() => useBrowserLanguage());
    expect(result.current).toBe('en-US');

    setLanguage('fr-FR');
    dispatchLanguageChange();
    expect(result.current).toBe('fr-FR');
  });

  it('removes the languagechange listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useBrowserLanguage());

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('languagechange', expect.any(Function));
    removeSpy.mockRestore();
  });
});

describe('@mantine/hooks/use-preferred-languages', () => {
  it('returns navigator.languages after mount', () => {
    setLanguages(['en-US', 'en']);
    const { result } = renderHook(() => usePreferredLanguages());
    expect(result.current).toEqual(['en-US', 'en']);
  });

  it('updates when the languagechange event is dispatched', () => {
    setLanguages(['en-US', 'en']);
    const { result } = renderHook(() => usePreferredLanguages());
    expect(result.current).toEqual(['en-US', 'en']);

    setLanguages(['fr-FR', 'fr', 'en']);
    dispatchLanguageChange();
    expect(result.current).toEqual(['fr-FR', 'fr', 'en']);
  });

  it('removes the languagechange listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => usePreferredLanguages());

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('languagechange', expect.any(Function));
    removeSpy.mockRestore();
  });
});
