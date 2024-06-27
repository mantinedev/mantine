import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  createScopedKeydownHandler,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { useAccordionContext } from '../Accordion.context';
import { useAccordionItemContext } from '../AccordionItem.context';
import classes from '../Accordion.module.css';

export type AccordionControlStylesNames = 'control' | 'chevron' | 'label' | 'itemTitle' | 'icon';

export interface AccordionControlProps
  extends BoxProps,
    CompoundStylesApiProps<AccordionControlFactory>,
    ElementProps<'button'> {
  /** Disables control button */
  disabled?: boolean;

  /** Custom chevron icon */
  chevron?: React.ReactNode;

  /** Control label */
  children?: React.ReactNode;

  /** Icon displayed next to the label */
  icon?: React.ReactNode;
}

export type AccordionControlFactory = Factory<{
  props: AccordionControlProps;
  ref: HTMLButtonElement;
  stylesNames: AccordionControlStylesNames;
  compound: true;
}>;

const defaultProps: Partial<AccordionControlProps> = {};

export const AccordionControl = factory<AccordionControlFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    chevron,
    icon,
    onClick,
    onKeyDown,
    children,
    disabled,
    mod,
    ...others
  } = useProps('AccordionControl', defaultProps, props);

  const { value } = useAccordionItemContext();
  const ctx = useAccordionContext();
  const isActive = ctx.isItemActive(value);
  const shouldWrapWithHeading = typeof ctx.order === 'number';
  const Heading = `h${ctx.order!}` as const;

  const content = (
    <UnstyledButton<'button'>
      {...others}
      {...ctx.getStyles('control', { className, classNames, style, styles, variant: ctx.variant })}
      unstyled={ctx.unstyled}
      mod={[
        'accordion-control',
        { active: isActive, 'chevron-position': ctx.chevronPosition, disabled },
        mod,
      ]}
      ref={ref}
      onClick={(event) => {
        onClick?.(event);
        ctx.onChange(value);
      }}
      type="button"
      disabled={disabled}
      aria-expanded={isActive}
      aria-controls={ctx.getRegionId(value)}
      id={ctx.getControlId(value)}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[data-accordion-control]',
        parentSelector: '[data-accordion]',
        activateOnFocus: false,
        loop: ctx.loop,
        orientation: 'vertical',
        onKeyDown,
      })}
    >
      <Box
        component="span"
        mod={{ rotate: !ctx.disableChevronRotation && isActive, position: ctx.chevronPosition }}
        {...ctx.getStyles('chevron', { classNames, styles })}
      >
        {chevron || ctx.chevron}
      </Box>
      <span {...ctx.getStyles('label', { classNames, styles })}>{children}</span>
      {icon && (
        <Box
          component="span"
          mod={{ 'chevron-position': ctx.chevronPosition }}
          {...ctx.getStyles('icon', { classNames, styles })}
        >
          {icon}
        </Box>
      )}
    </UnstyledButton>
  );

  return shouldWrapWithHeading ? (
    <Heading {...ctx.getStyles('itemTitle', { classNames, styles })}>{content}</Heading>
  ) : (
    content
  );
});

AccordionControl.displayName = '@mantine/core/AccordionControl';
AccordionControl.classes = classes;
