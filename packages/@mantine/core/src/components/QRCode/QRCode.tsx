import { useMemo } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { encodeQR, QRCodeErrorCorrectionLevel } from './encode-qr';
import { getQRCodePath } from './get-qr-path';
import classes from './QRCode.module.css';

export type QRCodeStylesNames = 'root' | 'svg' | 'image';

export type QRCodeCssVariables = {
  root: '--qr-size' | '--qr-color';
};

export interface QRCodeProps extends BoxProps, StylesApiProps<QRCodeFactory>, ElementProps<'div'> {
  /** Value encoded into the QR code */
  value: string;

  /** Width and height of the QR code, numbers are converted to rem, `160` by default */
  size?: number | string;

  /** Error correction level, higher levels keep the code scannable when it is partially damaged or covered by a logo, `'M'` by default */
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel;

  /** Color of the dark modules, key of `theme.colors` or any valid CSS color value, `var(--mantine-color-black)` by default */
  color?: MantineColor;

  /** Quiet zone width around the code in modules, `4` (specification minimum) by default */
  margin?: number;

  /** Content rendered as a centered overlay, usually a logo. Pair with `errorCorrectionLevel="H"` to keep the code scannable */
  logo?: React.ReactNode;
}

export type QRCodeFactory = Factory<{
  props: QRCodeProps;
  ref: HTMLDivElement;
  stylesNames: QRCodeStylesNames;
  vars: QRCodeCssVariables;
}>;

const defaultProps = {
  errorCorrectionLevel: 'M',
  margin: 4,
} satisfies Partial<QRCodeProps>;

const varsResolver = createVarsResolver<QRCodeFactory>((theme, { size, color }) => ({
  root: {
    '--qr-size': rem(size),
    '--qr-color': color ? getThemeColor(color, theme) : undefined,
  },
}));

export const QRCode = factory<QRCodeFactory>((_props) => {
  const props = useProps('QRCode', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    value,
    errorCorrectionLevel,
    color,
    margin,
    logo,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<QRCodeFactory>({
    name: 'QRCode',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { matrix, size: matrixSize } = useMemo(
    () => encodeQR(value, { errorCorrectionLevel }),
    [value, errorCorrectionLevel]
  );

  const quietZone = margin ?? 4;
  const total = matrixSize + quietZone * 2;
  const path = useMemo(() => getQRCodePath(matrix, quietZone), [matrix, quietZone]);

  return (
    <Box {...getStyles('root')} {...others}>
      <svg
        {...getStyles('svg')}
        viewBox={`0 0 ${total} ${total}`}
        role="img"
        aria-label={value}
        shapeRendering="crispEdges"
      >
        <path d={path} fill="var(--qr-color)" />
      </svg>
      {logo && <div {...getStyles('image')}>{logo}</div>}
    </Box>
  );
});

QRCode.classes = classes;
QRCode.varsResolver = varsResolver;
QRCode.displayName = '@mantine/core/QRCode';

export namespace QRCode {
  export type Props = QRCodeProps;
  export type StylesNames = QRCodeStylesNames;
  export type Factory = QRCodeFactory;
  export type CssVariables = QRCodeCssVariables;
}
