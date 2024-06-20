import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  Highlight,
  MantineColor,
  UnstyledButton,
  useProps,
} from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { spotlightActions } from './spotlight.store';
import classes from './Spotlight.module.css';

export type SpotlightActionStylesNames =
  | 'action'
  | 'actionLabel'
  | 'actionDescription'
  | 'actionSection'
  | 'actionBody';

export interface SpotlightActionProps
  extends BoxProps,
    CompoundStylesApiProps<SpotlightActionFactory>,
    ElementProps<'button'> {
  /** Action label, pass string to use in default filter */
  label?: string;

  /** Action description, pass string to use in default filter */
  description?: string;

  /** Section displayed on the left side of the label, for example, icon */
  leftSection?: React.ReactNode;

  /** Section displayed on the right side of the label, for example, hotkey */
  rightSection?: React.ReactNode;

  /** Children override default action elements, if passed, label, description and sections are hidden */
  children?: React.ReactNode;

  /** Determines whether left and right sections should have dimmed styles, `true` by default */
  dimmedSections?: boolean;

  /** Determines whether search query should be highlighted in action label, `false` by default */
  highlightQuery?: boolean;

  /** Key of `theme.colors` of any valid CSS color that will be used to highlight search query, `'yellow'` by default */
  highlightColor?: MantineColor;

  /** Determines whether the spotlight should be closed when action is triggered, overrides `closeOnActionTrigger` prop set on `Spotlight` */
  closeSpotlightOnTrigger?: boolean;

  /** Keywords that are used for default filtering, not displayed anywhere, can be a string: "react,router,javascript" or an array: ['react', 'router', 'javascript'] */
  keywords?: string | string[];
}

export type SpotlightActionFactory = Factory<{
  props: SpotlightActionProps;
  ref: HTMLButtonElement;
  stylesNames: SpotlightActionStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightActionProps> = {
  dimmedSections: true,
  highlightQuery: false,
};

export const SpotlightAction = factory<SpotlightActionFactory>((_props, ref) => {
  const props = useProps('SpotlightAction', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    id,
    description,
    label,
    leftSection,
    rightSection,
    children,
    dimmedSections,
    highlightQuery,
    highlightColor,
    closeSpotlightOnTrigger,
    onClick,
    onMouseDown,
    keywords,
    vars,
    ...others
  } = props;

  const ctx = useSpotlightContext();

  const stylesApi = { classNames, styles };

  const labelNode =
    highlightQuery && typeof label === 'string' ? (
      <Highlight
        component="span"
        highlight={ctx.query}
        color={highlightColor}
        {...ctx.getStyles('actionLabel', stylesApi)}
      >
        {label}
      </Highlight>
    ) : (
      <span {...ctx.getStyles('actionLabel', stylesApi)}>{label}</span>
    );

  return (
    <UnstyledButton
      ref={ref}
      data-action
      {...ctx.getStyles('action', { className, style, ...stylesApi })}
      {...others}
      onMouseDown={(event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }}
      onClick={(event) => {
        onClick?.(event);
        if (closeSpotlightOnTrigger ?? ctx.closeOnActionTrigger) {
          spotlightActions.close(ctx.store);
        }
      }}
      tabIndex={-1}
    >
      {children || (
        <>
          {leftSection && (
            <Box
              component="span"
              mod={{ position: 'left', dimmed: dimmedSections }}
              {...ctx.getStyles('actionSection', stylesApi)}
            >
              {leftSection}
            </Box>
          )}

          <span {...ctx.getStyles('actionBody', stylesApi)}>
            {labelNode}
            <span {...ctx.getStyles('actionDescription', stylesApi)}>{description}</span>
          </span>

          {rightSection && (
            <Box
              component="span"
              mod={{ position: 'right', dimmed: dimmedSections }}
              {...ctx.getStyles('actionSection', stylesApi)}
            >
              {rightSection}
            </Box>
          )}
        </>
      )}
    </UnstyledButton>
  );
});

SpotlightAction.classes = classes;
SpotlightAction.displayName = '@mantine/spotlight/SpotlightAction';
