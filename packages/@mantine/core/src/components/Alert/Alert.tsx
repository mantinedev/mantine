import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getSize,
  MantineColor,
  MantineRadius,
  MantineSize,
  MantineTheme,
  parseThemeColor,
  PartialVarsResolver,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { CloseButton, CloseButtonFactory } from '../CloseButton';
import classes from './Alert.module.css';

export type AlertStylesNames =
  | 'root'
  | 'body'
  | 'label'
  | 'title'
  | 'icon'
  | 'wrapper'
  | 'message'
  | 'closeButton';
export type AlertVariant = 'filled' | 'light' | 'outline' | 'default' | 'transparent' | 'white';
export type AlertCssVariables = {
  root:
    | '--alert-radius'
    | '--alert-bg'
    | '--alert-color'
    | '--alert-bd'
    | '--alert-title-color'
    | '--alert-icon-color'
    | '--alert-padding'
    | '--alert-fz'
    | '--alert-icon-size'
    | '--alert-gap'
    | '--alert-close-size';
};

export interface AlertProps
  extends BoxProps, StylesApiProps<AlertFactory>, ElementProps<'div', 'title'> {
  /** Key of `theme.radius` or any valid CSS value to set border-radius @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Key of `theme.colors` or any valid CSS color @default theme.primaryColor  */
  color?: MantineColor;

  /** Controls padding, font-size, icon size and close button size @default 'md' */
  size?: MantineSize | (string & {});

  /** Alert title */
  title?: React.ReactNode;

  /** Icon displayed next to the title */
  icon?: React.ReactNode;

  /** Determines whether close button should be displayed @default false */
  withCloseButton?: boolean;

  /** Called when the close button is clicked */
  onClose?: () => void;

  /** Close button `aria-label` */
  closeButtonLabel?: string;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type AlertFactory = Factory<{
  props: AlertProps;
  ref: HTMLDivElement;
  stylesNames: AlertStylesNames;
  vars: AlertCssVariables;
  variant: AlertVariant;
}>;

const NEUTRAL_TEXT_VARIANTS = new Set(['light', 'outline', 'default', 'transparent']);

const closeButtonVars: PartialVarsResolver<CloseButtonFactory> = () => ({
  root: { '--cb-size': 'var(--alert-close-size)' },
});

function getAccentColor(color: string, theme: MantineTheme) {
  const parsed = parseThemeColor({ color, theme });

  if (parsed.isThemeColor && parsed.shade === undefined) {
    return `var(--mantine-color-${parsed.color}-text)`;
  }

  return parsed.variable ? `var(${parsed.variable})` : parsed.color;
}

const varsResolver = createVarsResolver<AlertFactory>(
  (theme, { radius, color, variant, autoContrast, size }) => {
    const resolvedColor = color || theme.primaryColor;
    const resolvedVariant = variant || 'light';
    const colors = theme.variantColorResolver({
      color: resolvedColor,
      theme,
      variant: resolvedVariant,
      autoContrast,
    });

    const vars: Record<AlertCssVariables['root'], string | undefined> = {
      '--alert-radius': radius === undefined ? undefined : getRadius(radius),
      '--alert-bg': colors.background,
      '--alert-bd': colors.border,
      '--alert-color': colors.color,
      '--alert-title-color': colors.color,
      '--alert-icon-color': colors.color,
      '--alert-padding': getSize(size, 'alert-padding'),
      '--alert-fz': getSize(size, 'alert-fz'),
      '--alert-icon-size': getSize(size, 'alert-icon-size'),
      '--alert-gap': getSize(size, 'alert-gap'),
      '--alert-close-size': getSize(size, 'alert-close-size'),
    };

    if (resolvedVariant === 'white') {
      vars['--alert-color'] = 'var(--mantine-color-gray-8)';
      vars['--alert-title-color'] = 'var(--mantine-color-black)';
    }

    if (NEUTRAL_TEXT_VARIANTS.has(resolvedVariant)) {
      const accent = getAccentColor(resolvedColor, theme);

      vars['--alert-color'] = 'var(--mantine-color-text)';
      vars['--alert-title-color'] = 'var(--mantine-color-bright)';
      vars['--alert-icon-color'] = accent;

      if (resolvedVariant === 'light') {
        vars['--alert-bg'] =
          `color-mix(in srgb, ${colors.background} 60%, var(--mantine-color-body))`;
        vars['--alert-bd'] = `${rem(1)} solid color-mix(in srgb, ${accent} 30%, transparent)`;
      }

      if (resolvedVariant === 'outline') {
        vars['--alert-bd'] = `${rem(1)} solid color-mix(in srgb, ${accent} 60%, transparent)`;
      }
    }

    return { root: vars };
  }
);

export const Alert = factory<AlertFactory>((_props) => {
  const props = useProps('Alert', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    color,
    size,
    title,
    children,
    id,
    icon,
    withCloseButton,
    onClose,
    closeButtonLabel,
    variant,
    autoContrast,
    role,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<AlertFactory>({
    name: 'Alert',
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

  const rootId = useId(id);
  const titleId = (title && `${rootId}-title`) || undefined;
  const bodyId = `${rootId}-body`;

  return (
    <Box
      id={rootId}
      {...getStyles('root', { variant })}
      variant={variant}
      size={size}
      {...others}
      role={role || 'alert'}
      aria-describedby={children ? bodyId : undefined}
      aria-labelledby={title ? titleId : undefined}
    >
      <div {...getStyles('wrapper')}>
        {icon && <div {...getStyles('icon')}>{icon}</div>}

        <div {...getStyles('body')}>
          {title && (
            <div {...getStyles('title')}>
              <span id={titleId} {...getStyles('label')}>
                {title}
              </span>
            </div>
          )}

          {children && (
            <div id={bodyId} {...getStyles('message')}>
              {children}
            </div>
          )}
        </div>

        {withCloseButton && (
          <CloseButton
            {...getStyles('closeButton')}
            onClick={onClose}
            variant="transparent"
            vars={closeButtonVars}
            aria-label={closeButtonLabel}
            unstyled={unstyled}
          />
        )}
      </div>
    </Box>
  );
});

Alert.classes = classes;
Alert.varsResolver = varsResolver;
Alert.displayName = '@mantine/core/Alert';

export namespace Alert {
  export type Props = AlertProps;
  export type StylesNames = AlertStylesNames;
  export type CssVariables = AlertCssVariables;
  export type Factory = AlertFactory;
}
