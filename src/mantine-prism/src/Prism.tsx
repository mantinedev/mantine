import React from 'react';
import cx from 'clsx';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import {
  ActionIcon,
  useMantineTheme,
  Tooltip,
  DefaultProps,
  mergeStyles,
  getThemeColor,
  hexToRgba,
} from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { CopyIcon } from './CopyIcon';
import { getPrismTheme } from './prism-theme';
import useStyles from './Prism.styles';

export interface PrismProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Code which will be highlighted */
  children: string;

  /** Programming language that should be highlighted */
  language: Language;

  /** True to remove copy to clipboard button */
  noCopy?: boolean;

  /** Copy button tooltip */
  copyLabel?: string;

  /** Copy button tooltip in copied state */
  copiedLabel?: string;

  /** Display line numbers */
  withLineNumbers?: boolean;

  /** Highlight line at given line number with color from theme.colors */
  highlightLines?: Record<string, { color: string; label?: string }>;
}

export function Prism({
  className,
  style,
  children,
  language,
  noCopy = false,
  themeOverride,
  classNames,
  styles,
  copyLabel = 'Copy code',
  copiedLabel = 'Copied',
  withLineNumbers = false,
  highlightLines = {},
  ...others
}: PrismProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames);
  const _styles = mergeStyles(classes, styles);
  const clipboard = useClipboard();

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      {!noCopy && (
        <Tooltip
          data-mantine-copy
          className={classes.copy}
          style={_styles.copy}
          label={clipboard.copied ? copiedLabel : copyLabel}
          position="left"
          placement="center"
          transition="fade"
          withArrow
          arrowSize={4}
          gutter={8}
          color={clipboard.copied ? 'teal' : undefined}
        >
          <ActionIcon
            aria-label={clipboard.copied ? copiedLabel : copyLabel}
            onClick={() => clipboard.copy(children)}
          >
            <CopyIcon copied={clipboard.copied} />
          </ActionIcon>
        </Tooltip>
      )}

      <Highlight {...defaultProps} theme={getPrismTheme(theme)} code={children} language={language}>
        {({
          className: inheritedClassName,
          style: inheritedStyle,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={cx(classes.code, inheritedClassName, className)}
            style={{ ...inheritedStyle, ..._styles.code }}
          >
            {tokens
              .map((line, index) => {
                if (index === tokens.length - 1 && line.length === 1 && line[0].content === '\n') {
                  return null;
                }

                const lineNumber = index + 1;
                const lineProps = getLineProps({ line, key: index });
                const shouldHighlight = lineNumber in highlightLines;
                const lineColor =
                  theme.colorScheme === 'dark'
                    ? hexToRgba(
                        getThemeColor({
                          theme,
                          color: highlightLines[lineNumber]?.color,
                          shade: 9,
                        }),
                        0.25
                      )
                    : getThemeColor({
                        theme,
                        color: highlightLines[lineNumber]?.color,
                        shade: 0,
                      });

                return (
                  <div
                    {...lineProps}
                    className={cx(classes.line, lineProps.className)}
                    style={{ ...(shouldHighlight ? { backgroundColor: lineColor } : null) }}
                  >
                    {withLineNumbers && (
                      <div
                        className={classes.lineNumber}
                        data-mantine-line-number
                        style={{
                          color: shouldHighlight
                            ? getThemeColor({
                                theme,
                                color: highlightLines[lineNumber]?.color,
                                shade: theme.colorScheme === 'dark' ? 5 : 8,
                              })
                            : undefined,
                        }}
                      >
                        {highlightLines[lineNumber]?.label || lineNumber}
                      </div>
                    )}

                    <div className={classes.lineContent}>
                      {line.map((token, key) => {
                        const tokenProps = getTokenProps({ token, key });
                        return (
                          <span
                            {...tokenProps}
                            style={{
                              ...tokenProps.style,
                              color: shouldHighlight
                                ? getThemeColor({
                                    theme,
                                    color: highlightLines[lineNumber]?.color,
                                    shade: theme.colorScheme === 'dark' ? 5 : 8,
                                  })
                                : (tokenProps?.style?.color as string),
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })
              .filter(Boolean)}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

Prism.displayName = '@mantine/prism/Prism';
