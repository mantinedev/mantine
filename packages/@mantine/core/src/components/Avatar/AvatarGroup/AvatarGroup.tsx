import { Children } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { Avatar } from '../Avatar';
import { AvatarGroupContext } from './AvatarGroup.context';
import classes from '../Avatar.module.css';

export type AvatarGroupStylesNames = 'group';
export type AvatarGroupCssVariables = {
  group: '--ag-spacing';
};

export interface AvatarGroupProps
  extends BoxProps, StylesApiProps<AvatarGroupFactory>, ElementProps<'div'> {
  /** Negative space between Avatar components @default 'sm' */
  spacing?: MantineSpacing;

  /** Maximum number of children displayed. All children that do not fit are replaced with a counter. */
  max?: number;

  /** Total number of avatars represented by the group, used to calculate the counter value @default number of children */
  total?: number;

  /** A function to render the counter, called with the number of avatars that are not displayed. By default, the counter is rendered as an `Avatar` with `+{count}` content. */
  renderOverflow?: (count: number) => React.ReactNode;
}

export type AvatarGroupFactory = Factory<{
  props: AvatarGroupProps;
  ref: HTMLDivElement;
  stylesNames: AvatarGroupStylesNames;
  vars: AvatarGroupCssVariables;
}>;

const varsResolver = createVarsResolver<AvatarGroupFactory>((_, { spacing }) => ({
  group: {
    '--ag-spacing': getSpacing(spacing),
  },
}));

export const AvatarGroup = factory<AvatarGroupFactory>((_props) => {
  const props = useProps('AvatarGroup', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    spacing,
    max,
    total,
    renderOverflow,
    children,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<AvatarGroupFactory>({
    name: 'AvatarGroup',
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
    rootSelector: 'group',
  });

  const childrenArray = Children.toArray(children);
  const visibleChildren = max === undefined ? childrenArray : childrenArray.slice(0, max);
  const overflowCount = (total ?? childrenArray.length) - visibleChildren.length;

  const renderCounter = () =>
    renderOverflow ? (
      renderOverflow(overflowCount)
    ) : (
      <Avatar unstyled={unstyled}>+{overflowCount}</Avatar>
    );

  return (
    <AvatarGroupContext value={{ withinGroup: true }}>
      <Box {...getStyles('group')} {...others}>
        {visibleChildren}
        {overflowCount > 0 && renderCounter()}
      </Box>
    </AvatarGroupContext>
  );
});

AvatarGroup.classes = classes;
AvatarGroup.varsResolver = varsResolver;
AvatarGroup.displayName = '@mantine/core/AvatarGroup';
