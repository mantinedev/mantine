import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  getSpacing,
  getThemeColor,
  MantineColor,
  MantineRadius,
  MantineSize,
  MantineSpacing,
  MantineTheme,
  parseThemeColor,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AccordionChevron } from '../Accordion';
import { Collapse } from '../Collapse';
import { UnstyledButton } from '../UnstyledButton';
import classes from './NavLink.module.css';

export type NavLinkStylesNames =
  | 'root'
  | 'section'
  | 'body'
  | 'label'
  | 'description'
  | 'chevron'
  | 'collapse'
  | 'children';
export type NavLinkVariant = 'filled' | 'light' | 'subtle' | 'rail';
export type NavLinkCssVariables = {
  root:
    | '--nl-color'
    | '--nl-bg'
    | '--nl-hover'
    | '--nl-rail-color'
    | '--nl-rail-icon-color'
    | '--nl-radius'
    | '--nl-fz'
    | '--nl-description-fz'
    | '--nl-padding-y'
    | '--nl-padding-x'
    | '--nl-section-gap'
    | '--nl-chevron-size';
  children: '--nl-offset';
};

export interface NavLinkProps extends BoxProps, StylesApiProps<NavLinkFactory> {
  /** Main link label @category appearance */
  label?: React.ReactNode;

  /** Link description, displayed below the label @category appearance */
  description?: React.ReactNode;

  /** Section displayed on the left side of the label @category appearance */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label @category appearance */
  rightSection?: React.ReactNode;

  /** Determines whether the link should have active styles @default false @category state */
  active?: boolean;

  /** Key of `theme.colors` or any valid CSS color to control active styles @default theme.primaryColor @category appearance */
  color?: MantineColor;

  /** Controls font size, padding, sections gap and nested links offset @default 'sm' @category appearance */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, ignored for `rail` variant @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** If set, label and description are truncated with ellipsis instead of wrapping @default false @category appearance */
  noWrap?: boolean;

  /** Child `NavLink` components @category appearance */
  children?: React.ReactNode;

  /** Controlled nested items collapse state @category state */
  opened?: boolean;

  /** Uncontrolled nested items collapse initial state @category state */
  defaultOpened?: boolean;

  /** Called when open state changes @category state */
  onChange?: (opened: boolean) => void;

  /** If set, right section will not be rotated when collapse is opened @default false @category appearance */
  disableRightSectionRotation?: boolean;

  /** Controls indentation of nested NavLink components, key of `theme.spacing` or any valid CSS value. By default, nested links are aligned with the parent link label (28px for `size="sm"`). @category appearance */
  childrenOffset?: MantineSpacing;

  /** If set, a vertical guideline is displayed at the start of nested links @default false @category appearance */
  withGuideline?: boolean;

  /** If set, the root element is marked as disabled with `aria-disabled` and disabled styles, clicks are ignored @default false @category behavior */
  disabled?: boolean;

  /** If set, adjusts text color based on background color for `filled` variant @default theme.autoContrast @category appearance */
  autoContrast?: boolean;

  /** Called when the root element is clicked @category behavior */
  onClick?: React.MouseEventHandler<HTMLElement>;

  /** Called on keydown of the root element @category behavior */
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;

  /** If set to `false`, child `NavLinks` are unmounted when collapsed. By default, collapsed children are kept mounted. @default true @category behavior */
  keepMounted?: boolean;
}

export type NavLinkFactory = PolymorphicFactory<{
  props: NavLinkProps;
  defaultRef: HTMLAnchorElement;
  defaultComponent: 'a';
  stylesNames: NavLinkStylesNames;
  vars: NavLinkCssVariables;
  variant: NavLinkVariant;
}>;

function getRailIconColor(color: MantineColor, theme: MantineTheme) {
  const parsed = parseThemeColor({ color, theme });
  return parsed.isThemeColor && parsed.shade === undefined
    ? `var(--mantine-color-${parsed.color}-text)`
    : getThemeColor(color, theme);
}

const varsResolver = createVarsResolver<NavLinkFactory>(
  (theme, { variant, color, childrenOffset, autoContrast, size, radius }) => {
    const isRail = variant === 'rail';
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: isRail ? 'filled' : variant || 'light',
      autoContrast,
    });

    return {
      root: {
        '--nl-bg': !isRail && (color || variant) ? colors.background : undefined,
        '--nl-hover': !isRail && (color || variant) ? colors.hover : undefined,
        '--nl-color': !isRail && (color || variant) ? colors.color : undefined,
        '--nl-rail-color': isRail && color ? colors.background : undefined,
        '--nl-rail-icon-color': isRail && color ? getRailIconColor(color, theme) : undefined,
        '--nl-radius': getRadius(radius),
        '--nl-fz': getSize(size, 'nl-fz'),
        '--nl-description-fz': getSize(size, 'nl-description-fz'),
        '--nl-padding-y': getSize(size, 'nl-padding-y'),
        '--nl-padding-x': getSize(size, 'nl-padding-x'),
        '--nl-section-gap': getSize(size, 'nl-section-gap'),
        '--nl-chevron-size': getSize(size, 'nl-chevron-size'),
      },

      children: {
        '--nl-offset':
          childrenOffset === undefined
            ? getSize(size, 'nl-children-offset')
            : getSpacing(childrenOffset),
      },
    };
  }
);

export const NavLink = polymorphicFactory<NavLinkFactory>((_props) => {
  const props = useProps('NavLink', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    opened,
    defaultOpened,
    onChange,
    children,
    active,
    disabled,
    leftSection,
    rightSection,
    label,
    description,
    disableRightSectionRotation,
    noWrap,
    childrenOffset,
    withGuideline,
    variant,
    size,
    radius,
    autoContrast,
    mod,
    attributes,
    onClick,
    onKeyDown,
    keepMounted,
    ...others
  } = props;

  const getStyles = useStyles<NavLinkFactory>({
    name: 'NavLink',
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

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  const withChildren = !!children;
  const collapseId = useId();
  const component =
    (others as any).component ?? (withChildren && !(others as any).href ? 'button' : 'a');
  const handleSpaceKey = withChildren && component !== 'button';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);

    if (withChildren) {
      event.preventDefault();
      setOpened(!_opened);
    }
  };

  return (
    <>
      <UnstyledButton
        {...getStyles('root')}
        component={component}
        onClick={handleClick}
        onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
          onKeyDown?.(event);

          if (event.nativeEvent.code === 'Space' && handleSpaceKey && !disabled) {
            event.preventDefault();
            setOpened(!_opened);
          }
        }}
        unstyled={unstyled}
        size={size}
        variant={variant}
        mod={[{ disabled, active, expanded: _opened }, mod]}
        aria-expanded={withChildren ? _opened : undefined}
        aria-controls={withChildren ? collapseId : undefined}
        aria-disabled={disabled || undefined}
        {...others}
      >
        {leftSection && (
          <Box component="span" {...getStyles('section')} mod={{ position: 'left' }}>
            {leftSection}
          </Box>
        )}
        <Box {...getStyles('body')} mod={{ 'no-wrap': noWrap }}>
          <Box component="span" {...getStyles('label')}>
            {label}
          </Box>
          <Box component="span" mod={{ active }} {...getStyles('description')}>
            {description}
          </Box>
        </Box>
        {(withChildren || rightSection !== undefined) && (
          <Box
            {...getStyles('section')}
            component="span"
            mod={{ rotate: _opened && !disableRightSectionRotation, position: 'right' }}
          >
            {withChildren ? (
              rightSection !== undefined ? (
                rightSection
              ) : (
                <AccordionChevron {...getStyles('chevron')} size="var(--nl-chevron-size)" />
              )
            ) : (
              rightSection
            )}
          </Box>
        )}
      </UnstyledButton>
      {withChildren && (
        <Collapse
          expanded={_opened}
          keepMounted={keepMounted}
          id={collapseId}
          {...getStyles('collapse')}
        >
          <Box {...getStyles('children')} mod={{ 'with-guideline': withGuideline, variant }}>
            {children}
          </Box>
        </Collapse>
      )}
    </>
  );
});

NavLink.classes = classes;
NavLink.varsResolver = varsResolver;
NavLink.displayName = '@mantine/core/NavLink';

export namespace NavLink {
  export type Props = NavLinkProps;
  export type StylesNames = NavLinkStylesNames;
  export type CssVariables = NavLinkCssVariables;
  export type Factory = NavLinkFactory;
  export type Variant = NavLinkVariant;
}
