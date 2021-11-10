import { useMantineTheme } from '../../MantineProvider';
import type { MantineMargins } from '../../types';

interface UseExtractedMargins {
  style?: React.CSSProperties;
  others: MantineMargins & { [key: string]: any };
}

function isValidMargin(margin: any) {
  return typeof margin === 'string' || typeof margin === 'number';
}

const margins = {
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
};

export function useExtractedMargins({ others, style }: UseExtractedMargins) {
  const theme = useMantineTheme();
  const mergedStyles: React.CSSProperties = { ...style };

  if (isValidMargin(others.my)) {
    const margin = theme.fn.size({ size: others.my, sizes: theme.spacing });
    mergedStyles.marginTop = margin;
    mergedStyles.marginBottom = margin;
  }

  if (isValidMargin(others.mx)) {
    const margin = theme.fn.size({ size: others.mx, sizes: theme.spacing });
    mergedStyles.marginLeft = margin;
    mergedStyles.marginRight = margin;
  }

  Object.keys(margins).forEach((margin) => {
    if (isValidMargin(others[margin])) {
      mergedStyles[margins[margin]] = theme.fn.size({ size: others[margin], sizes: theme.spacing });
    }
  });

  const rest = { ...others };
  delete rest.m;
  delete rest.mx;
  delete rest.my;
  delete rest.mt;
  delete rest.ml;
  delete rest.mb;
  delete rest.mr;

  return { mergedStyles, rest };
}
