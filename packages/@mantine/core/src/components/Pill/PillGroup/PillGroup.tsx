import { createContext, use } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSize,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { PillsInputContext } from '../../PillsInput/PillsInput.context';
import classes from '../Pill.module.css';

export interface PillGroupContextValue {
  size: MantineSize | (string & {}) | undefined;
  disabled: boolean | undefined;
}

export const PillGroupContext = createContext<PillGroupContextValue | null>(null);

export type PillGroupStylesNames = 'group';
export type PillGroupCssVariables = {
  group: '--pg-gap';
};

export interface PillGroupProps
  extends BoxProps, StylesApiProps<PillGroupFactory>, ElementProps<'div'> {
  /** Controls spacing between pills, by default controlled by `size` */
  gap?: MantineSize | (string & {}) | number;

  /** Controls size of the child `Pill` components and gap between them @default 'sm' */
  size?: MantineSize | (string & {});

  /** If set, adds disabled to all child `Pill` components */
  disabled?: boolean;
}

export type PillGroupFactory = Factory<{
  props: PillGroupProps;
  ref: HTMLDivElement;
  stylesNames: PillGroupStylesNames;
  vars: PillGroupCssVariables;
  ctx: { size: MantineSize | (string & {}) | undefined; withinInput: boolean };
}>;

const varsResolver = createVarsResolver<PillGroupFactory>((_, { gap }, { size, withinInput }) => ({
  group: {
    '--pg-gap':
      gap !== undefined ? getSize(gap) : withinInput ? undefined : getSize(size, 'pg-gap'),
  },
}));

export const PillGroup = factory<PillGroupFactory>((_props) => {
  const props = useProps('PillGroup', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    disabled,
    attributes,
    mod,
    ...others
  } = props;
  const pillsInputCtx = use(PillsInputContext);
  const _size = pillsInputCtx?.size || size || undefined;

  const getStyles = useStyles<PillGroupFactory>({
    name: 'PillGroup',
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
    stylesCtx: { size: _size, withinInput: !!pillsInputCtx },
    rootSelector: 'group',
  });

  return (
    <PillGroupContext value={{ size: _size, disabled }}>
      <Box
        size={_size}
        mod={[{ 'within-input': !!pillsInputCtx }, mod]}
        {...getStyles('group')}
        {...others}
      />
    </PillGroupContext>
  );
});

PillGroup.classes = classes;
PillGroup.varsResolver = varsResolver;
PillGroup.displayName = '@mantine/core/PillGroup';
