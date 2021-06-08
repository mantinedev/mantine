import React from 'react';
import { Tabs, Tab, useMantineTheme, TabProps, hexToRgba } from '@mantine/core';
import { Prism, PrismProps } from '../Prism';

const tsx = `import React from 'react';
import cx from 'clsx';
import { useReducedMotion } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme, mergeStyles } from '../../theme';
import useStyles, { sizes } from './Burger.styles';

export const BURGER_SIZES = sizes;

export interface BurgerProps
  extends DefaultProps<typeof useStyles>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Burger state: true for cross, false for burger */
  opened: boolean;

  /** Burger color from theme */
  color?: string;

  /** Predefined burger size or number to set width and height in px */
  size?: MantineNumberSize;

  /** Get element ref */
  elementRef?: React.ForwardedRef<HTMLButtonElement>;
}

export function Burger({
  className,
  style,
  opened,
  color = 'gray',
  size = 'md',
  themeOverride,
  elementRef,
  classNames,
  styles,
  ...others
}: BurgerProps) {
  const theme = useMantineTheme(themeOverride);
  const reduceMotion = useReducedMotion();
  const classes = useStyles({ color, size, theme, reduceMotion }, classNames);
  const _styles = mergeStyles(classes, styles);

  return (
    <button
      type="button"
      className={cx(classes.root, className)}
      ref={elementRef}
      style={{ ...style, ..._styles.root }}
      {...others}
    >
      <div
        className={cx(classes.burger, { [classes.opened]: opened })}
        style={{ ..._styles.burger, ...(opened ? _styles.opened : null) }}
      />
    </button>
  );
}

Burger.displayName = '@mantine/core/Burger';`;

const py = `import logging
import sys
import typing as t

from werkzeug.local import LocalProxy

from .globals import request

if t.TYPE_CHECKING:
    from .app import Flask


@LocalProxy
def wsgi_errors_stream() -> t.TextIO:
    """Find the most appropriate error stream for the application. If a request
    is active, log to \`\`wsgi.errors\`\`, otherwise use \`\`sys.stderr\`\`.
    If you configure your own :class:\`logging.StreamHandler\`, you may want to
    use this for the stream. If you are using file or dict configuration and
    can't import this directly, you can refer to it as
    \`\`ext://flask.logging.wsgi_errors_stream\`\`.
    """
    return request.environ["wsgi.errors"] if request else sys.stderr


def has_level_handler(logger: logging.Logger) -> bool:
    """Check if there is a handler in the logging chain that will handle the
    given logger's :meth:\`effective level <~logging.Logger.getEffectiveLevel>\`.
    """
    level = logger.getEffectiveLevel()
    current = logger

    while current:
        if any(handler.level <= level for handler in current.handlers):
            return True

        if not current.propagate:
            break

        current = current.parent  # type: ignore

    return False


#: Log messages to :func:\`~flask.logging.wsgi_errors_stream\` with the format
#: \`\`[%(asctime)s] %(levelname)s in %(module)s: %(message)s\`\`.
default_handler = logging.StreamHandler(wsgi_errors_stream)  # type: ignore
default_handler.setFormatter(
    logging.Formatter("[%(asctime)s] %(levelname)s in %(module)s: %(message)s")
)


def create_logger(app: "Flask") -> logging.Logger:
    """Get the Flask app's logger and configure it if needed.
    The logger name will be the same as
    :attr:\`app.import_name <flask.Flask.name>\`.
    When :attr:\`~flask.Flask.debug\` is enabled, set the logger level to
    :data:\`logging.DEBUG\` if it is not set.
    If there is no handler for the logger's effective level, add a
    :class:\`~logging.StreamHandler\` for
    :func:\`~flask.logging.wsgi_errors_stream\` with a basic format.
    """
    logger = logging.getLogger(app.name)

    if app.debug and not logger.level:
        logger.setLevel(logging.DEBUG)

    if not has_level_handler(logger):
        logger.addHandler(default_handler)

    return logger`;

const scss = `.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: $accordion-button-padding-y $accordion-button-padding-x;
  @include font-size($font-size-base);
  color: $accordion-button-color;
  text-align: left; // Reset button style
  background-color: $accordion-button-bg;
  border: 0;
  @include border-radius(0);
  overflow-anchor: none;
  @include transition($accordion-transition);

  &:not(.collapsed) {
    color: $accordion-button-active-color;
    background-color: $accordion-button-active-bg;
    box-shadow: inset 0 ($accordion-border-width * -1) 0 $accordion-border-color;

    &::after {
      background-image: escape-svg($accordion-button-active-icon);
      transform: $accordion-icon-transform;
    }
  }

  // Accordion icon
  &::after {
    flex-shrink: 0;
    width: $accordion-icon-width;
    height: $accordion-icon-width;
    margin-left: auto;
    content: "";
    background-image: escape-svg($accordion-button-icon);
    background-repeat: no-repeat;
    background-size: $accordion-icon-width;
    @include transition($accordion-icon-transition);
  }

  &:hover {
    z-index: 2;
  }

  &:focus {
    z-index: 3;
    border-color: $accordion-button-focus-border-color;
    outline: 0;
    box-shadow: $accordion-button-focus-box-shadow;
  }
}`;

function Demo() {
  const theme = useMantineTheme();
  const tabStyles: TabProps['styles'] = {
    active: {
      borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[1],
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : hexToRgba(theme.colors.gray[0], 0.65),
    },
  };

  const prismStyles: PrismProps['styles'] = {
    code: { borderRadius: 0 },
    root: {
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[1]}`,
      borderTop: 0,
    },
  };

  return (
    <Tabs
      variant="outline"
      styles={{
        outline: {
          borderBottomColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[1],
        },
      }}
    >
      <Tab label="TypeScript" styles={tabStyles}>
        <Prism language="tsx" styles={prismStyles}>
          {tsx}
        </Prism>
      </Tab>
      <Tab label="Python" styles={tabStyles}>
        <Prism language="python" styles={prismStyles}>
          {py}
        </Prism>
      </Tab>
      <Tab label="Scss" styles={tabStyles}>
        <Prism language="scss" styles={prismStyles}>
          {scss}
        </Prism>
      </Tab>
    </Tabs>
  );
}

export const languages: MantineDemo = {
  type: 'demo',
  component: Demo,
};
