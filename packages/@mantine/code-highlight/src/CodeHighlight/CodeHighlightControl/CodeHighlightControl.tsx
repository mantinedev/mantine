import {
  ActionIcon,
  BoxProps,
  MantinePolymorphicComponent,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  Tooltip,
  useProps,
} from '@mantine/core';
import { useCodeHighlightContext } from '../CodeHighlight.context';

export interface CodeHighlightControlProps
  extends BoxProps,
    StylesApiProps<CodeHighlightControlFactory> {
  /** Control icon */
  children?: React.ReactNode;

  /** Label displayed in the tooltip when the control is hovered */
  tooltipLabel?: string;
}

export type CodeHighlightControlFactory = PolymorphicFactory<{
  props: CodeHighlightControlProps;
  defaultRef: HTMLButtonElement;
  defaultComponent: 'button';
}>;

export const CodeHighlightControl: MantinePolymorphicComponent<CodeHighlightControlFactory> =
  polymorphicFactory<CodeHighlightControlFactory>((_props, ref) => {
    const props = useProps('CodeHighlightControl', null, _props);
    const { children, vars, tooltipLabel, ...others } = props;
    const ctx = useCodeHighlightContext();
    const tooltipStyles = ctx.getStyles('controlTooltip');

    const control = (
      <ActionIcon
        ref={ref}
        {...ctx.getStyles('control')}
        {...others}
        variant="none"
        data-code-color-scheme={ctx.codeColorScheme}
      >
        {children}
      </ActionIcon>
    );

    if (tooltipLabel) {
      return (
        <Tooltip
          label={tooltipLabel}
          fz="sm"
          position="bottom"
          classNames={{ tooltip: tooltipStyles.className }}
          styles={{ tooltip: tooltipStyles.style }}
          data-code-color-scheme={ctx.codeColorScheme}
          transitionProps={{ duration: 0 }}
        >
          {control}
        </Tooltip>
      );
    }

    return control;
  });

CodeHighlightControl.displayName = '@mantine/code-highlight/CodeHighlightControl';
