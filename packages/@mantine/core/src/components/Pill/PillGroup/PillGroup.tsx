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
import { usePillsInputContext } from '../../PillsInput/PillsInput.context';
import { PillGroupProvider } from '../PillGroup.context';
import classes from '../Pill.module.css';

export type PillGroupStylesNames = 'group';
export type PillGroupCssVariables = {
  group: '--pg-gap';
};

export interface PillGroupProps
  extends BoxProps,
    StylesApiProps<PillGroupFactory>,
    ElementProps<'div'> {
  /** Controls spacing between pills, by default controlled by `size` */
  gap?: MantineSize | (string & {}) | number;

  /** Controls size of the child `Pill` components and gap between them, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** Determines whether child `Pill` components should be disabled */
  disabled?: boolean;
}

export type PillGroupFactory = Factory<{
  props: PillGroupProps;
  ref: HTMLDivElement;
  stylesNames: PillGroupStylesNames;
  vars: PillGroupCssVariables;
  ctx: { size: MantineSize | (string & {}) | undefined };
}>;

const defaultProps: Partial<PillGroupProps> = {};

const varsResolver = createVarsResolver<PillGroupFactory>((_, { gap }, { size }) => ({
  group: {
    '--pg-gap': gap !== undefined ? getSize(gap) : getSize(size, 'pg-gap'),
  },
}));

export const PillGroup = factory<PillGroupFactory>((_props, ref) => {
  const props = useProps('PillGroup', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, size, disabled, ...others } = props;
  const pillsInputCtx = usePillsInputContext();
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
    vars,
    varsResolver,
    stylesCtx: { size: _size },
    rootSelector: 'group',
  });

  return (
    <PillGroupProvider value={{ size: _size, disabled }}>
      <Box ref={ref} size={_size} {...getStyles('group')} {...others} />
    </PillGroupProvider>
  );
});

PillGroup.classes = classes;
PillGroup.displayName = '@mantine/core/PillGroup';
