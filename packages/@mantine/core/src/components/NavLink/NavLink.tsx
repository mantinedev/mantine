import { useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  getSpacing,
  MantineColor,
  MantineRadius,
  MantineSize,
  MantineSpacing,
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
  /** Main link label */
  label?: React.ReactNode;

  /** Link description, displayed below the label */
  description?: React.ReactNode;

  /** Section displayed on the left side of the label */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label */
  rightSection?: React.ReactNode;

  /** Determines whether the link should have active styles @default false */
  active?: boolean;

  /** Key of `theme.colors` or any valid CSS color to control active styles @default theme.primaryColor */
  color?: MantineColor;

  /** Controls font size, padding, sections gap and nested links offset @default 'sm' */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, ignored for `rail` variant @default theme.defaultRadius */
  radius?: MantineRadius;

  /** If set, label and description are truncated with ellipsis instead of wrapping @default false */
  noWrap?: boolean;

  /** Child `NavLink` components */
  children?: React.ReactNode;

  /** Controlled nested items collapse state */
  opened?: boolean;

  /** Uncontrolled nested items collapse initial state */
  defaultOpened?: boolean;

  /** Called when open state changes */
  onChange?: (opened: boolean) => void;

  /** If set, right section will not be rotated when collapse is opened @default false */
  disableRightSectionRotation?: boolean;

  /** Controls indentation of nested NavLink components, key of `theme.spacing` or any valid CSS value. By default, nested links are aligned with the parent link label (28px for `size="sm"`). */
  childrenOffset?: MantineSpacing;

  /** If set, a vertical guideline is displayed at the start of nested links @default false */
  withGuideline?: boolean;

  /** If set, disabled styles will be added to the root element @default false */
  disabled?: boolean;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Called when the root element is clicked */
  onClick?: React.MouseEventHandler<HTMLElement>;

  /** Called on keydown of the root element */
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;

  /** If set to `false`, child `NavLinks` are unmounted when collapsed */
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

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
        component="a"
        onClick={handleClick}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          if (event.nativeEvent.code === 'Space' && withChildren) {
            event.preventDefault();
            setOpened(!_opened);
          }
        }}
        unstyled={unstyled}
        size={size}
        variant={variant}
        mod={[{ disabled, active, expanded: _opened }, mod]}
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
        <Collapse expanded={_opened} keepMounted={keepMounted} {...getStyles('collapse')}>
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
