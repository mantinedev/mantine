import { useEffect, useRef } from 'react';
import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getRadius,
  getSize,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  parseThemeColor,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { InlineInput, InlineInputClasses, InlineInputStylesNames } from '../../utils/InlineInput';
import classes from './Checkbox.module.css';
import { CheckboxCard } from './CheckboxCard/CheckboxCard';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';
import { CheckboxIndicator } from './CheckboxIndicator/CheckboxIndicator';
import { CheckboxIcon } from './CheckIcon';

export type CheckboxVariant = 'filled' | 'outline';
export type CheckboxStylesNames = 'icon' | 'inner' | 'input' | InlineInputStylesNames;
export type CheckboxCssVariables = {
  root: '--checkbox-size' | '--checkbox-radius' | '--checkbox-color' | '--checkbox-icon-color';
};

export interface CheckboxProps
  extends BoxProps,
    StylesApiProps<CheckboxFactory>,
    ElementProps<'input', 'size' | 'children'> {
  /** Unique input id */
  id?: string;

  /** `label` associated with the checkbox */
  label?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set input background color in checked state @default `theme.primaryColor` */
  color?: MantineColor;

  /** Controls size of the component @default `'sm'` */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Props passed down to the root element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & DataAttributes;

  /** Position of the label relative to the input @default `'right'` */
  labelPosition?: 'left' | 'right';

  /** Description displayed below the label */
  description?: React.ReactNode;

  /** Error message displayed below the label */
  error?: React.ReactNode;

  /** Indeterminate state of the checkbox. If set, `checked` prop is ignored. */
  indeterminate?: boolean;

  /** Icon displayed when checkbox is in checked or indeterminate state */
  icon?: React.FC<{ indeterminate: boolean | undefined; className: string }>;

  /** Root element ref */
  rootRef?: React.ForwardedRef<HTMLDivElement>;

  /** Key of `theme.colors` or any valid CSS color to set icon color. By default, depends on `theme.autoContrast`. */
  iconColor?: MantineColor;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;
}

export type CheckboxFactory = Factory<{
  props: CheckboxProps;
  ref: HTMLInputElement;
  stylesNames: CheckboxStylesNames;
  vars: CheckboxCssVariables;
  variant: CheckboxVariant;
  staticComponents: {
    Group: typeof CheckboxGroup;
    Indicator: typeof CheckboxIndicator;
    Card: typeof CheckboxCard;
  };
}>;

const defaultProps = {
  labelPosition: 'right',
  icon: CheckboxIcon,
  variant: 'filled',
} satisfies Partial<CheckboxProps>;

const varsResolver = createVarsResolver<CheckboxFactory>(
  (theme, { radius, color, size, iconColor, variant, autoContrast }) => {
    const parsedColor = parseThemeColor({ color: color || theme.primaryColor, theme });
    const outlineColor =
      parsedColor.isThemeColor && parsedColor.shade === undefined
        ? `var(--mantine-color-${parsedColor.color}-outline)`
        : parsedColor.color;

    return {
      root: {
        '--checkbox-size': getSize(size, 'checkbox-size'),
        '--checkbox-radius': radius === undefined ? undefined : getRadius(radius),
        '--checkbox-color': variant === 'outline' ? outlineColor : getThemeColor(color, theme),
        '--checkbox-icon-color': iconColor
          ? getThemeColor(iconColor, theme)
          : getAutoContrastValue(autoContrast, theme)
            ? getContrastColor({ color, theme, autoContrast })
            : undefined,
      },
    };
  }
);

export const Checkbox = factory<CheckboxFactory>((_props, forwardedRef) => {
  const props = useProps('Checkbox', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    color,
    label,
    id,
    size,
    radius,
    wrapperProps,
    checked,
    labelPosition,
    description,
    error,
    disabled,
    variant,
    indeterminate,
    icon: Icon,
    rootRef,
    iconColor,
    onChange,
    autoContrast,
    mod,
    attributes,
    ...others
  } = props;

  const ctx = useCheckboxGroupContext();
  const _size = size || ctx?.size;

  const getStyles = useStyles<CheckboxFactory>({
    name: 'Checkbox',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const uuid = useId(id);

  const withContextProps = {
    checked: ctx?.value.includes(rest.value as string) ?? checked,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      ctx?.onChange(event);
      onChange?.(event);
    },
    disabled: ctx?.disabled ?? disabled,
  };

  const fallbackRef = useRef<HTMLInputElement>(null);
  const ref = forwardedRef || fallbackRef;

  useEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.indeterminate = indeterminate || false;

      if (indeterminate) {
        ref.current.setAttribute('data-indeterminate', 'true');
      } else {
        ref.current.removeAttribute('data-indeterminate');
      }
    }
  }, [indeterminate, ref]);

  return (
    <InlineInput
      {...getStyles('root')}
      __staticSelector="Checkbox"
      __stylesApiProps={props}
      id={uuid}
      size={_size}
      labelPosition={labelPosition}
      label={label}
      description={description}
      error={error}
      disabled={withContextProps.disabled}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
      data-checked={withContextProps.checked || checked || undefined}
      variant={variant}
      ref={rootRef}
      mod={mod}
      inert={rest.inert}
      {...styleProps}
      {...wrapperProps}
    >
      <Box {...getStyles('inner')} mod={{ 'data-label-position': labelPosition }}>
        <Box
          component="input"
          id={uuid}
          ref={ref}
          mod={{ error: !!error }}
          {...getStyles('input', { focusable: true, variant })}
          {...rest}
          {...withContextProps}
          inert={rest.inert}
          type="checkbox"
        />

        <Icon indeterminate={indeterminate} {...getStyles('icon')} />
      </Box>
    </InlineInput>
  );
});

Checkbox.classes = { ...classes, ...InlineInputClasses };
Checkbox.displayName = '@mantine/core/Checkbox';
Checkbox.Group = CheckboxGroup;
Checkbox.Indicator = CheckboxIndicator;
Checkbox.Card = CheckboxCard;
