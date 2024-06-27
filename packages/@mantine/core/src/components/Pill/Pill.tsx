import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getSize,
  MantineRadius,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { CloseButton } from '../CloseButton';
import { usePillsInputContext } from '../PillsInput/PillsInput.context';
import { usePillGroupContext } from './PillGroup.context';
import { PillGroup } from './PillGroup/PillGroup';
import classes from './Pill.module.css';

export type PillStylesNames = 'root' | 'label' | 'remove';
export type PillVariant = 'default' | 'contrast';
export type PillCssVariables = {
  root: '--pill-fz' | '--pill-radius' | '--pill-height';
};

export interface PillProps extends BoxProps, StylesApiProps<PillFactory>, ElementProps<'div'> {
  /** Controls pill `font-size` and `padding`, `'sm'` by default */
  size?: MantineSize;

  /** Determines whether the remove button should be displayed, `false` by default */
  withRemoveButton?: boolean;

  /** Called when the remove button is clicked */
  onRemove?: () => void;

  /** Props passed down to the remove button */
  removeButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `'xl'` by default. */
  radius?: MantineRadius;

  /** If pill is disabled it has higher contrast to be visible on the disabled input background and the remove button is hidden */
  disabled?: boolean;
}

export type PillFactory = Factory<{
  props: PillProps;
  ref: HTMLDivElement;
  stylesNames: PillStylesNames;
  vars: PillCssVariables;
  variant: PillVariant;
  ctx: { size: MantineSize | (string & {}) | undefined };
  staticComponents: {
    Group: typeof PillGroup;
  };
}>;

const defaultProps: Partial<PillProps> = {
  variant: 'default',
};

const varsResolver = createVarsResolver<PillFactory>((_, { radius }, { size }) => ({
  root: {
    '--pill-fz': getSize(size, 'pill-fz'),
    '--pill-height': getSize(size, 'pill-height'),
    '--pill-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

export const Pill = factory<PillFactory>((_props, ref) => {
  const props = useProps('Pill', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    variant,
    children,
    withRemoveButton,
    onRemove,
    removeButtonProps,
    radius,
    size,
    disabled,
    mod,
    ...others
  } = props;

  const ctx = usePillGroupContext();
  const pillsInputCtx = usePillsInputContext();
  const _size = size || ctx?.size || undefined;
  const _variant = pillsInputCtx?.variant === 'filled' ? 'contrast' : variant || 'default';

  const getStyles = useStyles<PillFactory>({
    name: 'Pill',
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
  });

  return (
    <Box
      component="span"
      ref={ref}
      variant={_variant}
      size={_size}
      {...getStyles('root', { variant: _variant })}
      mod={[
        { 'with-remove': withRemoveButton && !disabled, disabled: disabled || ctx?.disabled },
        mod,
      ]}
      {...others}
    >
      <span {...getStyles('label')}>{children}</span>
      {withRemoveButton && (
        <CloseButton
          variant="transparent"
          radius={radius}
          tabIndex={-1}
          aria-hidden
          unstyled={unstyled}
          {...removeButtonProps}
          {...getStyles('remove', {
            className: removeButtonProps?.className,
            style: removeButtonProps?.style,
          })}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            removeButtonProps?.onMouseDown?.(event);
          }}
          onClick={(event) => {
            event.stopPropagation();
            onRemove?.();
            removeButtonProps?.onClick?.(event);
          }}
        />
      )}
    </Box>
  );
});

Pill.classes = classes;
Pill.displayName = '@mantine/core/Pill';
Pill.Group = PillGroup;
