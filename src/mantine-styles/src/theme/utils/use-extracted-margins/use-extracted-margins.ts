import { useMantineTheme } from '../../MantineProvider';
import type { MantineMargins } from '../../types';

interface UseExtractedMargins {
  style?: React.CSSProperties;
  others: MantineMargins & { [key: string]: any };
}

export function extractMargins(others: MantineMargins & { [key: string]: any }) {
  const { m, mx, my, mt, mb, ml, mr, ...rest } = others;
  return { margins: { m, mx, my, mt, mb, ml, mr }, rest };
}

function isValidMargin(margin: any) {
  return typeof margin === 'string' || typeof margin === 'number';
}

const MARGINS = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
};

export function useExtractedMargins({ others, style }: UseExtractedMargins) {
  const theme = useMantineTheme();
  const mergedStyles: React.CSSProperties = { ...style };
  const { margins, rest } = extractMargins(others);

  if (isValidMargin(margins.my)) {
    const margin = theme.fn.size({ size: margins.my, sizes: theme.spacing });
    mergedStyles.marginTop = margin;
    mergedStyles.marginBottom = margin;
  }

  if (isValidMargin(margins.mx)) {
    const margin = theme.fn.size({ size: margins.mx, sizes: theme.spacing });
    mergedStyles.marginLeft = margin;
    mergedStyles.marginRight = margin;
  }

  Object.keys(MARGINS).forEach((margin) => {
    if (isValidMargin(margins[margin])) {
      mergedStyles[MARGINS[margin]] = theme.fn.size({
        size: margins[margin],
        sizes: theme.spacing,
      });
    }
  });

  return { mergedStyles, rest };
}
