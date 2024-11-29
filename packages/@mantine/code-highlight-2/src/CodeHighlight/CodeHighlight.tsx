import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  ScrollArea,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { CodeHighlightProvider } from './CodeHighlight.context';
import { CopyCodeButton } from './CopyCodeButton/CopyCodeButton';
import classes from '../CodeHighlight.module.css';

export type CodeHighlightStylesNames =
  | 'root'
  | 'pre'
  | 'code'
  | 'control'
  | 'controlIcon'
  | 'controls';

export type CodeHighlightCssVariables = {
  root: '--test';
};

export interface CodeHighlightProps
  extends BoxProps,
    StylesApiProps<CodeHighlightFactory>,
    ElementProps<'div'> {
  /** Code to highlight */
  code: string;

  /** Label for copy button in default state, `'Copy'` by default */
  copyLabel?: string;

  /** Label for copy button in copied state, `'Copied'` by default */
  copiedLabel?: string;
}

export type CodeHighlightFactory = Factory<{
  props: CodeHighlightProps;
  ref: HTMLDivElement;
  stylesNames: CodeHighlightStylesNames;
  vars: CodeHighlightCssVariables;
}>;

const defaultProps: Partial<CodeHighlightProps> = {};

const varsResolver = createVarsResolver<CodeHighlightFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const CodeHighlight = factory<CodeHighlightFactory>((_props, ref) => {
  const props = useProps('CodeHighlight', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, code, ...others } = props;

  const getStyles = useStyles<CodeHighlightFactory>({
    name: 'CodeHighlight',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <CodeHighlightProvider value={{ getStyles }}>
      <Box ref={ref} {...getStyles('root')} {...others} dir="ltr">
        <div {...getStyles('controls')}>
          <CopyCodeButton code={code} />
        </div>

        <ScrollArea type="hover" scrollbarSize={4} dir="ltr" offsetScrollbars={false}>
          <pre {...getStyles('pre')}>
            <code {...getStyles('code')}>{code.trim()}</code>
          </pre>
        </ScrollArea>
      </Box>
    </CodeHighlightProvider>
  );
});

CodeHighlight.displayName = '@mantine/code-highlight/CodeHighlight';
CodeHighlight.classes = classes;
