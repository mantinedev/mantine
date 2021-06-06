import React from 'react';
import cx from 'clsx';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { ClipboardIcon, CheckIcon } from '@modulz/radix-icons';
import { ActionIcon, useMantineTheme, Tooltip, DefaultProps, mergeStyles } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { getPrismTheme } from './prism-theme';
import useStyles from './Prism.styles';

export interface PrismProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'div'> {
  children: string;
  language: Language;
  className?: string;
  style?: React.CSSProperties;
  noCopy?: boolean;
  rootClassName?: string;
  copyLabel?: string;
  copiedLabel?: string;
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
            {clipboard.copied ? <CheckIcon /> : <ClipboardIcon />}
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
              .map((line, i) => {
                if (i === tokens.length - 1 && line.length === 1 && line[0].content === '\n') {
                  return null;
                }

                return (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
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
