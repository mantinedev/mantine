import { useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getSpacing,
  MantineColor,
  MantineSize,
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
export type NavLinkVariant = 'filled' | 'light' | 'subtle';
export type NavLinkCssVariables = {
  root: '--nl-color' | '--nl-bg' | '--nl-hover';
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

  /** Determines whether the link should have active styles, `false` by default */
  active?: boolean;

  /** Key of `theme.colors` of any valid CSS color to control active styles, `theme.primaryColor` by default */
  color?: MantineColor;

  /** If set, label and description will not wrap to the next line, `false` by default */
  noWrap?: boolean;

  /** Child `NavLink` components */
  children?: React.ReactNode;

  /** Controlled nested items collapse state */
  opened?: boolean;

  /** Uncontrolled nested items collapse initial state */
  defaultOpened?: boolean;

  /** Called when open state changes */
  onChange?: (opened: boolean) => void;

  /** If set, right section will not be rotated when collapse is opened, `false` by default */
  disableRightSectionRotation?: boolean;

  /** Key of `theme.spacing` or any valid CSS value to set collapsed links `padding-left`, `'lg'` by default */
  childrenOffset?: MantineSize | (string & {}) | number;

  /** If set, disabled styles will be added to the root element, `false` by default */
  disabled?: boolean;

  /** Called when the link is clicked */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;

  /** Link `onkeydown` event */
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;

  /** Determines whether button text color with filled variant should depend on `background-color`. If luminosity of the `color` prop is less than `theme.luminosityThreshold`, then `theme.white` will be used for text color, otherwise `theme.black`. Overrides `theme.autoContrast`. */
  autoContrast?: boolean;
}

export type NavLinkFactory = PolymorphicFactory<{
  props: NavLinkProps;
  defaultRef: HTMLAnchorElement;
  defaultComponent: 'a';
  stylesNames: NavLinkStylesNames;
  vars: NavLinkCssVariables;
  variant: NavLinkVariant;
}>;

const defaultProps: Partial<NavLinkProps> = {};

const varsResolver = createVarsResolver<NavLinkFactory>(
  (theme, { variant, color, childrenOffset, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      variant: variant || 'light',
      autoContrast,
    });

    return {
      root: {
        '--nl-bg': color || variant ? colors.background : undefined,
        '--nl-hover': color || variant ? colors.hover : undefined,
        '--nl-color': color || variant ? colors.color : undefined,
      },

      children: {
        '--nl-offset': getSpacing(childrenOffset),
      },
    };
  }
);

export const NavLink = polymorphicFactory<NavLinkFactory>((_props, ref) => {
  const props = useProps('NavLink', defaultProps, _props);
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
    onClick,
    active,
    disabled,
    leftSection,
    rightSection,
    label,
    description,
    disableRightSectionRotation,
    noWrap,
    childrenOffset,
    onKeyDown,
    autoContrast,
    mod,
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
        ref={ref}
        onClick={handleClick}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          if (event.nativeEvent.code === 'Space' && withChildren) {
            event.preventDefault();
            setOpened(!_opened);
          }
        }}
        unstyled={unstyled}
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
        {(withChildren || rightSection) && (
          <Box
            {...getStyles('section')}
            component="span"
            mod={{ rotate: _opened && !disableRightSectionRotation, position: 'right' }}
          >
            {withChildren
              ? rightSection || <AccordionChevron {...getStyles('chevron')} />
              : rightSection}
          </Box>
        )}
      </UnstyledButton>
      {withChildren && (
        <Collapse in={_opened} {...getStyles('collapse')}>
          <div {...getStyles('children')}>{children}</div>
        </Collapse>
      )}
    </>
  );
});

NavLink.classes = classes;
NavLink.displayName = '@mantine/core/NavLink';
