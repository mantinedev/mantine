import { renderHook } from '@testing-library/react-hooks';
import { extractMargins, useExtractedMargins } from './use-extracted-margins';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/styles/extract-margins', () => {
  it('correctly extracts margin props', () => {
    expect(extractMargins({ mt: 10, mb: 15 })).toEqual({ margins: { mt: 10, mb: 15 }, rest: {} });
  });

  it('return correct rest props', () => {
    expect(extractMargins({ mt: 10, a: 1, b: 'test' })).toEqual({
      margins: { mt: 10 },
      rest: { a: 1, b: 'test' },
    });
  });
});

describe('@mantine/styles/use-extracted-margins', () => {
  it('extracts margins with theme.spacing values', () => {
    const hook = renderHook(() => useExtractedMargins({ others: { mt: 'xl', mb: 'sm' } }));
    expect(hook.result.current.mergedStyles).toEqual({
      marginTop: DEFAULT_THEME.spacing.xl,
      marginBottom: DEFAULT_THEME.spacing.sm,
    });
  });

  it('extracts margins with string values', () => {
    const hook = renderHook(() => useExtractedMargins({ others: { mx: 'auto', mt: '50%' } }));
    expect(hook.result.current.mergedStyles).toEqual({
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50%',
    });
  });

  it('extracts margins with number values', () => {
    const hook = renderHook(() => useExtractedMargins({ others: { my: 121, mr: 17 } }));
    expect(hook.result.current.mergedStyles).toEqual({
      marginTop: 121,
      marginBottom: 121,
      marginRight: 17,
    });
  });
});
