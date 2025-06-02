import {
  Typography,
  TypographyFactory,
  TypographyProps,
  TypographyStylesNames,
} from './Typography';

/** @deprecated use `Typography` instead */
const TypographyStylesProvider = Typography;

export { Typography, TypographyStylesProvider };

export type {
  TypographyFactory,
  TypographyProps,
  TypographyStylesNames,
  TypographyFactory as TypographyStylesProviderFactory,
  TypographyProps as TypographyStylesProviderProps,
  TypographyStylesNames as TypographyStylesProviderStylesNames,
};
