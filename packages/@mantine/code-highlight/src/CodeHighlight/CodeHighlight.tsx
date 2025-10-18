import cx from 'clsx';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  getThemeColor,
  MantineColor,
  MantineRadius,
  rem,
  ScrollArea,
  StylesApiProps,
  UnstyledButton,
  useComputedColorScheme,
  useProps,
  useStyles,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { useHighlight } from '../CodeHighlightProvider/CodeHighlightProvider';
import { CodeHighlightContextProvider } from './CodeHighlight.context';
import { CodeHighlightControl } from './CodeHighlightControl/CodeHighlightControl';
import { CopyCodeButton } from './CopyCodeButton/CopyCodeButton';
import { ExpandCodeButton } from './ExpandCodeButton/ExpandCodeButton';
import classes from '../CodeHighlight.module.css';

export type CodeHighlightStylesNames =
  | 'codeHighlight'
  | 'pre'
  | 'code'
  | 'control'
  | 'controlTooltip'
  | 'controls'
  | 'scrollarea'
  | 'showCodeButton';

export type CodeHighlightCssVariables = {
  codeHighlight: '--ch-max-height' | '--ch-background' | '--ch-radius';
};

export interface CodeHighlightSettings {
  /** Label for copy button in default state @default `'Copy'` */
  copyLabel?: string;

  /** Label for copy button in copied state @default `'Copied'` */
  copiedLabel?: string;

  /** Uncontrolled expanded default state */
  defaultExpanded?: boolean;

  /** Controlled expanded state */
  expanded?: boolean;

  /** Called when expanded state changes */
  onExpandedChange?: (expanded: boolean) => void;

  /** Max height of collapsed state @default `180px` */
  maxCollapsedHeight?: number | string;

  /** Determines whether the copy button should be displayed @default `true`  */
  withCopyButton?: boolean;

  /** Determines whether the expand/collapse button should be displayed @default `false` */
  withExpandButton?: boolean;

  /** Label for expand button @default `'Expand code'` */
  expandCodeLabel?: string;

  /** Label for collapse button @default `'Collapse code'` */
  collapseCodeLabel?: string;

  /** Controls background color of the code. By default, the value depends on color scheme. */
  background?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default `0` */
  radius?: MantineRadius;

  /** Adds border to the root element @default `false` */
  withBorder?: boolean;

  /** Extra controls to display in the controls list */
  controls?: React.ReactNode[];

  /** Set to use dark or light color scheme. When using shiki adapter, you can use loaded themes here */
  codeColorScheme?: 'dark' | 'light' | (string & {});
}

export interface CodeHighlightProps
  extends CodeHighlightSettings,
    BoxProps,
    StylesApiProps<CodeHighlightFactory>,
    ElementProps<'div'> {
  __withOffset?: boolean;
  __staticSelector?: string;

  /** If set, the code will be rendered as inline element without `<pre>` @default `false` */
  __inline?: boolean;

  /** Code to highlight */
  code: string;

  /** Language of the code, used for syntax highlighting */
  language?: string;
}

export type CodeHighlightFactory = Factory<{
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
  vars: CodeHighlightCssVariables;
  staticComponents: {
    Control: typeof CodeHighlightControl;
  };
}>;

const defaultProps = {
  withCopyButton: true,
  expandCodeLabel: 'Expand code',
} satisfies Partial<CodeHighlightProps>;

const varsResolver = createVarsResolver<CodeHighlightFactory>(
  (theme, { maxCollapsedHeight, background, radius }) => ({
    codeHighlight: {
      '--ch-max-height': rem(maxCollapsedHeight),
      '--ch-background': background ? getThemeColor(background, theme) : undefined,
      '--ch-radius': typeof radius !== 'undefined' ? getRadius(radius) : undefined,
    },
  })
);

export const CodeHighlight = factory<CodeHighlightFactory>((_props, ref) => {
  const props = useProps('CodeHighlight', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    code,
    copiedLabel,
    copyLabel,
    defaultExpanded,
    expanded,
    onExpandedChange,
    maxCollapsedHeight,
    withCopyButton,
    withExpandButton,
    expandCodeLabel,
    collapseCodeLabel,
    radius,
    background,
    withBorder,
    controls,
    language,
    codeColorScheme,
    __withOffset,
    __inline,
    __staticSelector,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<CodeHighlightFactory>({
    name: __staticSelector || 'CodeHighlight',
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
    rootSelector: 'codeHighlight',
  });

  const [_expanded, setExpanded] = useUncontrolled({
    value: expanded,
    defaultValue: defaultExpanded,
    finalValue: true,
    onChange: onExpandedChange,
  });

  const shouldDisplayControls =
    (controls && controls.length > 0) || withExpandButton || withCopyButton;

  const colorScheme = useComputedColorScheme();
  const highlight = useHighlight();
  const highlightedCode = highlight({
    code: code.trim(),
    language,
    colorScheme: codeColorScheme ?? colorScheme,
  });

  const codeContent = highlightedCode.isHighlighted
    ? { dangerouslySetInnerHTML: { __html: highlightedCode.highlightedCode } }
    : { children: code.trim() };

  if (__inline) {
    return (
      <Box
        component="code"
        ref={ref}
        {...others}
        {...highlightedCode.codeElementProps}
        {...getStyles('codeHighlight', {
          className: cx(highlightedCode.codeElementProps?.className, className),
          style: [{ ...highlightedCode.codeElementProps?.style }, style],
        })}
        data-with-border={withBorder || undefined}
        {...codeContent}
      />
    );
  }

  return (
    <CodeHighlightContextProvider value={{ getStyles, codeColorScheme }}>
      <Box
        ref={ref}
        {...getStyles('codeHighlight')}
        {...others}
        dir="ltr"
        data-code-color-scheme={codeColorScheme}
        data-with-border={withBorder || undefined}
      >
        {shouldDisplayControls && (
          <div {...getStyles('controls')} data-with-offset={__withOffset || undefined}>
            {controls}

            {withExpandButton && (
              <ExpandCodeButton
                expanded={_expanded}
                onExpand={setExpanded}
                expandCodeLabel={expandCodeLabel}
                collapseCodeLabel={collapseCodeLabel}
              />
            )}
            {withCopyButton && (
              <CopyCodeButton code={code} copiedLabel={copiedLabel} copyLabel={copyLabel} />
            )}
          </div>
        )}

        <ScrollArea
          type="hover"
          scrollbarSize={4}
          dir="ltr"
          offsetScrollbars={false}
          data-collapsed={!_expanded || undefined}
          styles={{ viewport: { overscrollBehaviorInline: 'none' } }}
          {...getStyles('scrollarea')}
        >
          <pre {...getStyles('pre')} data-with-offset={__withOffset || undefined}>
            <code
              {...highlightedCode.codeElementProps}
              {...getStyles('code', {
                className: highlightedCode.codeElementProps?.className,
                style: highlightedCode.codeElementProps?.style,
              })}
              {...codeContent}
            />
          </pre>
        </ScrollArea>

        <UnstyledButton
          {...getStyles('showCodeButton')}
          mod={{ hidden: _expanded }}
          onClick={() => setExpanded(true)}
          data-code-color-scheme={codeColorScheme}
        >
          {expandCodeLabel}
        </UnstyledButton>
      </Box>
    </CodeHighlightContextProvider>
  );
});

CodeHighlight.displayName = '@mantine/code-highlight/CodeHighlight';
CodeHighlight.classes = classes;
CodeHighlight.Control = CodeHighlightControl;
