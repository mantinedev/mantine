import { useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getSpacing,
  MantineColor,
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

  /** Determines whether the link should have active styles @default `false` */
  active?: boolean;

  /** Key of `theme.colors` of any valid CSS color to control active styles @default `theme.primaryColor` */
  color?: MantineColor;

  /** If set, label and description do not wrap to the next line @default `false` */
  noWrap?: boolean;

  /** Child `NavLink` components */
  children?: React.ReactNode;

  /** Controlled nested items collapse state */
  opened?: boolean;

  /** Uncontrolled nested items collapse initial state */
  defaultOpened?: boolean;

  /** Called when open state changes */
  onChange?: (opened: boolean) => void;

  /** If set, right section will not be rotated when collapse is opened @default `false` */
  disableRightSectionRotation?: boolean;

  /** Key of `theme.spacing` or any valid CSS value to set collapsed links `padding-left` @default `'lg'` */
  childrenOffset?: MantineSpacing;

  /** If set, disabled styles will be added to the root element @default `false` */
  disabled?: boolean;

  /** If set, adjusts text color based on background color for `filled` variant */
  autoContrast?: boolean;

  /** Called when the root element is clicked */
  onClick?: React.MouseEventHandler<HTMLElement>;

  /** Called on keydown of the root element */
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
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
    autoContrast,
    mod,
    attributes,
    onClick,
    onKeyDown,
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
                <AccordionChevron {...getStyles('chevron')} />
              )
            ) : (
              rightSection
            )}
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
