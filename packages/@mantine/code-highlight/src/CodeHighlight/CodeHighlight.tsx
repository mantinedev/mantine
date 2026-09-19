import { useEffect, useMemo } from 'react';
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
import {
  useHighlight,
  useIsLanguageLoaded,
  useLoadLanguage,
  type CodeHighlightAdapter,
} from '../CodeHighlightProvider/CodeHighlightProvider';
import type {
  CodeHighlightDefaultLanguage,
  CodeHighlightTabsCode,
  CodeHighlightTabsFactory,
  CodeHighlightTabsProps,
  CodeHighlightTabsStylesNames,
} from '../CodeHighlightTabs/CodeHighlightTabs';
import { normalizeCode } from '../normalize-code';
import {
  CodeHighlightContextProvider,
  type CodeHighlightContextValue,
} from './CodeHighlight.context';
import {
  CodeHighlightControl,
  type CodeHighlightControlProps,
} from './CodeHighlightControl/CodeHighlightControl';
import { CopyCodeButton } from './CopyCodeButton/CopyCodeButton';
import { ExpandCodeButton } from './ExpandCodeButton/ExpandCodeButton';
import type {
  InlineCodeHighlightCssVariables,
  InlineCodeHighlightFactory,
  InlineCodeHighlightProps,
  InlineCodeHighlightStylesNames,
} from './InlineCodeHighlight';
import classes from '../CodeHighlight.module.css';

export type CodeHighlightStylesNames =
  | 'codeHighlight'
  | 'pre'
  | 'code'
  | 'control'
  | 'controlTooltip'
  | 'controls'
  | 'scrollarea'
  | 'showCodeButton'
  | 'lineNumbers'
  | 'codeWrapper';

export type CodeHighlightCssVariables = {
  codeHighlight: '--ch-max-height' | '--ch-background' | '--ch-radius';
};

export interface CodeHighlightSettings {
  /** Label for copy button in default state @default 'Copy' @category appearance */
  copyLabel?: string;

  /** Label for copy button in copied state @default 'Copied' @category appearance */
  copiedLabel?: string;

  /** Uncontrolled expanded default state @category state */
  defaultExpanded?: boolean;

  /** Controlled expanded state @category state */
  expanded?: boolean;

  /** Called when expanded state changes @category state */
  onExpandedChange?: (expanded: boolean) => void;

  /** Max height of collapsed state @default 180px @category appearance */
  maxCollapsedHeight?: number | string;

  /** Determines whether the copy button should be displayed @default true @category appearance */
  withCopyButton?: boolean;

  /** Determines whether the expand/collapse button should be displayed @default false @category appearance */
  withExpandButton?: boolean;

  /** Label for expand button @default 'Expand code' @category appearance */
  expandCodeLabel?: string;

  /** Label for collapse button @default 'Collapse code' @category appearance */
  collapseCodeLabel?: string;

  /** Controls background color of the code. By default, the value depends on color scheme. @category appearance */
  background?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set border-radius @default 0 @category appearance */
  radius?: MantineRadius;

  /** Adds border to the root element @default false @category appearance */
  withBorder?: boolean;

  /** Determines whether line numbers should be displayed @default false @category appearance */
  withLineNumbers?: boolean;

  /** Extra controls to display in the controls list @category appearance */
  controls?: React.ReactNode[];

  /** Set to use dark or light color scheme. When using shiki adapter, you can use loaded themes here @category appearance */
  codeColorScheme?: 'dark' | 'light' | (string & {});

  /** If set, indentation of the first line of the code is preserved. By default, it is removed
   *  along with the rest of the leading and trailing whitespace. @default false @category appearance */
  withFirstLineIndentation?: boolean;
}

export interface CodeHighlightProps
  extends
    CodeHighlightSettings,
    BoxProps,
    StylesApiProps<CodeHighlightFactory>,
    ElementProps<'div'> {
  __withOffset?: boolean;
  __staticSelector?: string;

  /** If set, the code will be rendered as inline element without `<pre>` @default false */
  __inline?: boolean;

  /** Code to highlight @category appearance */
  code: string;

  /** Language of the code, used for syntax highlighting @category appearance */
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
  collapseCodeLabel: 'Collapse code',
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

export const CodeHighlight = factory<CodeHighlightFactory>((_props) => {
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
    withLineNumbers,
    controls,
    language,
    codeColorScheme,
    withFirstLineIndentation,
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
  const loadLanguage = useLoadLanguage();
  const isLanguageLoaded = useIsLanguageLoaded();

  useEffect(() => {
    loadLanguage(language);
  }, [language, loadLanguage]);

  const normalizedCode = normalizeCode(code, { withFirstLineIndentation });
  const resolvedColorScheme = codeColorScheme ?? colorScheme;
  const languageLoaded = isLanguageLoaded(language);

  const highlightedCode = useMemo(
    () => highlight({ code: normalizedCode, language, colorScheme: resolvedColorScheme }),
    [highlight, normalizedCode, language, resolvedColorScheme, languageLoaded]
  );

  const codeContent = highlightedCode.isHighlighted
    ? { dangerouslySetInnerHTML: { __html: highlightedCode.highlightedCode } }
    : { children: normalizedCode };

  if (__inline) {
    return (
      <Box
        component="code"
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
              <CopyCodeButton
                code={normalizedCode}
                copiedLabel={copiedLabel}
                copyLabel={copyLabel}
              />
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
          <div {...getStyles('codeWrapper')}>
            {withLineNumbers && (
              <div {...getStyles('lineNumbers')} data-with-offset={__withOffset || undefined}>
                {normalizedCode.split('\n').map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
            )}
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
          </div>
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
CodeHighlight.varsResolver = varsResolver;
CodeHighlight.Control = CodeHighlightControl;

export namespace CodeHighlight {
  export type Props = CodeHighlightProps;
  export type StylesNames = CodeHighlightStylesNames;
  export type CssVariables = CodeHighlightCssVariables;
  export type Factory = CodeHighlightFactory;
  export type ContextValue = CodeHighlightContextValue;
  export type Adapter = CodeHighlightAdapter;

  export namespace Tabs {
    export type Props = CodeHighlightTabsProps;
    export type StylesNames = CodeHighlightTabsStylesNames;
    export type Code = CodeHighlightTabsCode;
    export type Factory = CodeHighlightTabsFactory;
    export type DefaultLanguage = CodeHighlightDefaultLanguage;
  }

  export namespace Inline {
    export type Props = InlineCodeHighlightProps;
    export type StylesNames = InlineCodeHighlightStylesNames;
    export type CssVariables = InlineCodeHighlightCssVariables;
    export type Factory = InlineCodeHighlightFactory;
  }

  export namespace Control {
    export type Props = CodeHighlightControlProps;
  }
}
