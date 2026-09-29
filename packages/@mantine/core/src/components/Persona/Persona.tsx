import { Children, Fragment, isValidElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getSize,
  MantineRadius,
  MantineSize,
  MantineTheme,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AvatarProps } from '../Avatar/Avatar';
import { getPersonaName } from './get-persona-name';
import { PersonaProvider } from './Persona.context';
import {
  PersonaAvatar,
  PersonaAvatarFactory,
  PersonaAvatarProps,
  PersonaAvatarStylesNames,
} from './PersonaAvatar';
import {
  PersonaPresence,
  PersonaPresenceFactory,
  PersonaPresenceProps,
  PersonaPresenceStylesNames,
} from './PersonaPresence';
import {
  PersonaText,
  PersonaTextFactory,
  PersonaTextLevel,
  PersonaTextProps,
  PersonaTextStylesNames,
} from './PersonaText';
import { isPresenceVisible, PersonaPresenceLabels, PersonaPresenceValue } from './resolve-presence';
import classes from './Persona.module.css';

export type PersonaStylesNames =
  | 'root'
  | 'avatarWrapper'
  | 'body'
  | PersonaAvatarStylesNames
  | PersonaPresenceStylesNames
  | PersonaTextStylesNames;

export type PersonaCssVariables = {
  root:
    | '--persona-gap'
    | '--persona-presence-size'
    | '--persona-primary-fz'
    | '--persona-secondary-fz'
    | '--persona-presence-offset';
  presence: '--persona-presence-color' | '--persona-presence-ring-color';
};

export interface PersonaProps extends BoxProps, StylesApiProps<PersonaFactory> {
  /** Primary text, usually the person name. Also drives avatar initials and color when the avatar has no image */
  name?: string;

  /** Second line of text, for example the person role */
  secondaryText?: React.ReactNode;

  /** Third line of text, for example the person status */
  tertiaryText?: React.ReactNode;

  /** Fourth line of text */
  quaternaryText?: React.ReactNode;

  /** `Avatar` props (`src`, `name`, `color`, `radius`, ...) or a custom node rendered in place of the avatar. `false`, `null` and `''` render the default avatar */
  avatar?: AvatarProps | React.ReactNode;

  /** Presence badge: a status string or a configuration object `{ status, outOfOffice, processing }`. Use `'none'` to hide the badge @default 'none' */
  presence?: PersonaPresenceValue;

  /** Presence status labels announced by screen readers, for example `{ available: 'Verfügbar', outOfOffice: 'nicht im Büro' }`. Missing keys fall back to the default English labels, an empty string label renders no status text */
  labels?: PersonaPresenceLabels;

  /** If set, only the presence badge is displayed inline with the text, without an avatar @default false */
  presenceOnly?: boolean;

  /** Controls avatar and text sizes @default 'md' */
  size?: MantineSize;

  /** Text placement relative to the avatar @default 'after' */
  textPosition?: 'after' | 'before' | 'below';

  /** Text block alignment @default 'start' */
  textAlignment?: 'start' | 'center';

  /** Key of `theme.radius` or any valid CSS value to set the avatar `border-radius`, `1000px` by default */
  radius?: MantineRadius;

  /** Custom content, replaces the default composition built from shorthand props */
  children?: React.ReactNode;
}

export type PersonaFactory = PolymorphicFactory<{
  props: PersonaProps;
  defaultRef: HTMLDivElement;
  defaultComponent: 'div';
  stylesNames: PersonaStylesNames;
  vars: PersonaCssVariables;
  staticComponents: {
    Avatar: typeof PersonaAvatar;
    Presence: typeof PersonaPresence;
    Text: typeof PersonaText;
  };
}>;

const defaultProps = {
  size: 'md',
  presence: 'none',
  textPosition: 'after',
  textAlignment: 'start',
  presenceOnly: false,
} satisfies Partial<PersonaProps>;

const AVATAR_SIZES: Record<string, number> = { xs: 16, sm: 26, md: 38, lg: 56, xl: 84 };

function toPx(value: unknown): number | null {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();

  if (trimmed.endsWith('%')) {
    return Infinity;
  }

  const px = trimmed.match(/^(\d*\.?\d+)(px)?$/);
  if (px) {
    return parseFloat(px[1]);
  }

  const rem = trimmed.match(/^(?:calc\()?(\d*\.?\d+)rem(?:\s*\*\s*var\(--mantine-scale\)\))?$/);
  return rem ? parseFloat(rem[1]) * 16 : null;
}

function isRoundRadius(
  theme: MantineTheme,
  radius: MantineRadius | undefined,
  size: unknown
): boolean {
  if (radius === undefined) {
    return true;
  }

  const radiusPx = toPx(
    typeof radius === 'string' && Object.hasOwn(theme.radius, radius)
      ? theme.radius[radius]
      : radius
  );
  const sizePx =
    typeof size === 'string' && Object.hasOwn(AVATAR_SIZES, size) ? AVATAR_SIZES[size] : toPx(size);

  return radiusPx === null || sizePx === null || radiusPx >= sizePx / 2;
}

function isAvatarProps(value: PersonaProps['avatar']): value is AvatarProps {
  return (
    value != null && typeof value === 'object' && !Array.isArray(value) && !isValidElement(value)
  );
}

const varsResolver = createVarsResolver<PersonaFactory>(
  (theme, { size, radius, avatar, children }) => {
    const avatarProps = children == null && isAvatarProps(avatar) ? avatar : null;
    const avatarRadius = avatarProps?.radius ?? radius;
    const avatarSize = avatarProps?.size ?? size;

    return {
      root: {
        '--persona-gap': getSize(size, 'persona-gap'),
        '--persona-presence-size': getSize(size, 'persona-presence-size'),
        '--persona-primary-fz': getSize(size, 'persona-primary-fz'),
        '--persona-secondary-fz': getSize(size, 'persona-secondary-fz'),
        '--persona-presence-offset': isRoundRadius(theme, avatarRadius, avatarSize)
          ? undefined
          : '0px',
      },
      presence: {
        '--persona-presence-color': undefined,
        '--persona-presence-ring-color': undefined,
      },
    };
  }
);

function isPersonaPart(
  child: React.ReactNode,
  component: React.ComponentType,
  displayName: string
) {
  return (
    isValidElement(child) &&
    (child.type === component || (child.type as any)?.displayName === displayName)
  );
}

function isEmptyNode(node: React.ReactNode) {
  return node == null || typeof node === 'boolean' || node === '';
}

function isPersonaPartType(node: React.ReactElement) {
  return [PersonaAvatar, PersonaPresence, PersonaText].some((component) =>
    isPersonaPart(node, component, component.displayName!)
  );
}

function containsPersonaPart(
  node: React.ReactNode,
  component: React.ComponentType,
  displayName: string
): boolean {
  if (isPersonaPart(node, component, displayName)) {
    return true;
  }

  if (!isValidElement(node) || typeof node.type === 'string' || isPersonaPartType(node)) {
    return false;
  }

  const children = (node.props as { children?: React.ReactNode }).children;
  return isValidElement(children) && containsPersonaPart(children, component, displayName);
}

interface PersonaParts {
  avatar: React.ReactNode;
  presence: React.ReactNode;
  body: React.ReactNode[];
}

function collectPersonaParts(children: React.ReactNode) {
  const parts: PersonaParts = { avatar: null, presence: null, body: [] };

  const walk = (nodes: React.ReactNode) => {
    Children.forEach(nodes, (child) => {
      if (isValidElement(child) && child.type === Fragment) {
        walk((child.props as { children?: React.ReactNode }).children);
      } else if (containsPersonaPart(child, PersonaAvatar, '@mantine/core/PersonaAvatar')) {
        parts.avatar = child;
      } else if (containsPersonaPart(child, PersonaPresence, '@mantine/core/PersonaPresence')) {
        parts.presence = child;
      } else if (!isEmptyNode(child)) {
        parts.body.push(child);
      }
    });
  };

  walk(children);
  return parts;
}

export const Persona = polymorphicFactory<PersonaFactory>(
  (_props: PersonaProps & { component?: any }) => {
    const props = useProps('Persona', defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      name,
      secondaryText,
      tertiaryText,
      quaternaryText,
      avatar,
      presence,
      labels,
      presenceOnly,
      textPosition,
      textAlignment,
      radius,
      children,
      mod,
      attributes,
      ...others
    } = props;

    const getStyles = useStyles<PersonaFactory>({
      name: 'Persona',
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
    });

    const parts = children != null ? collectPersonaParts(children) : null;
    const resolvedName = getPersonaName(name);

    let avatarNode: React.ReactNode = null;
    if (!presenceOnly) {
      if (parts) {
        avatarNode = parts.avatar;
      } else if (isAvatarProps(avatar)) {
        avatarNode = <PersonaAvatar {...avatar} />;
      } else if (!isEmptyNode(avatar)) {
        avatarNode = avatar;
      } else {
        avatarNode = <PersonaAvatar />;
      }
    }

    const presenceNode = parts ? (
      parts.presence
    ) : isPresenceVisible(presence) ? (
      <PersonaPresence presence={presence} />
    ) : null;

    const bodyContent = parts
      ? parts.body
      : [resolvedName, secondaryText, tertiaryText, quaternaryText]
          .map((line, index) =>
            isEmptyNode(line) ? null : (
              <PersonaText key={index} level={(index + 1) as PersonaTextLevel}>
                {line}
              </PersonaText>
            )
          )
          .filter(Boolean);

    return (
      <PersonaProvider
        value={{ getStyles, size: props.size, radius, name: resolvedName, unstyled, labels }}
      >
        <Box
          {...getStyles('root', { focusable: true })}
          type={_props.component === 'button' ? 'button' : undefined}
          mod={[
            {
              'text-position': textPosition,
              'text-alignment': textAlignment,
              'presence-only': presenceOnly,
            },
            mod,
          ]}
          {...others}
        >
          {bodyContent.length > 0 && <div {...getStyles('body')}>{bodyContent}</div>}
          {avatarNode != null ? (
            <div {...getStyles('avatarWrapper')}>
              {avatarNode}
              {presenceNode}
            </div>
          ) : (
            presenceNode
          )}
        </Box>
      </PersonaProvider>
    );
  }
);

Persona.classes = classes;
Persona.varsResolver = varsResolver;
Persona.displayName = '@mantine/core/Persona';
Persona.Avatar = PersonaAvatar;
Persona.Presence = PersonaPresence;
Persona.Text = PersonaText;

export namespace Persona {
  export type Props = PersonaProps;
  export type StylesNames = PersonaStylesNames;
  export type CssVariables = PersonaCssVariables;
  export type Factory = PersonaFactory;

  export namespace Avatar {
    export type Props = PersonaAvatarProps;
    export type Factory = PersonaAvatarFactory;
  }

  export namespace Presence {
    export type Props = PersonaPresenceProps;
    export type StylesNames = PersonaPresenceStylesNames;
    export type Factory = PersonaPresenceFactory;
  }

  export namespace Text {
    export type Props = PersonaTextProps;
    export type StylesNames = PersonaTextStylesNames;
    export type Factory = PersonaTextFactory;
  }
}
