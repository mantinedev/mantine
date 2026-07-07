import { Children, Fragment, isValidElement } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getSize,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { AvatarProps } from '../Avatar/Avatar';
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
  PersonaTextProps,
  PersonaTextStylesNames,
} from './PersonaText';
import { isPresenceVisible, PersonaPresenceValue } from './get-presence-props';
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
    | '--persona-secondary-fz';
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

  /** `Avatar` props (`src`, `initials`, `color`, `radius`, ...) or a custom node rendered in place of the avatar */
  avatar?: AvatarProps | React.ReactNode;

  /** Presence badge: a status string or a configuration object `{ status, outOfOffice, processing }`. Use `'none'` to hide the badge @default 'none' */
  presence?: PersonaPresenceValue;

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

const varsResolver = createVarsResolver<PersonaFactory>((_, { size }) => ({
  root: {
    '--persona-gap': getSize(size, 'persona-gap'),
    '--persona-presence-size': getSize(size, 'persona-presence-size'),
    '--persona-primary-fz': getSize(size, 'persona-primary-fz'),
    '--persona-secondary-fz': getSize(size, 'persona-secondary-fz'),
  },
}));

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

function isAvatarProps(value: PersonaProps['avatar']): value is AvatarProps {
  return (
    value != null && typeof value === 'object' && !Array.isArray(value) && !isValidElement(value)
  );
}

function collectPersonaParts(children: React.ReactNode) {
  const body: React.ReactNode[] = [];
  let avatar: React.ReactNode = null;
  let presence: React.ReactNode = null;

  const walk = (nodes: React.ReactNode) => {
    Children.forEach(nodes, (child) => {
      if (isValidElement(child) && child.type === Fragment) {
        walk((child.props as { children?: React.ReactNode }).children);
      } else if (isPersonaPart(child, PersonaAvatar, '@mantine/core/PersonaAvatar')) {
        avatar = child;
      } else if (isPersonaPart(child, PersonaPresence, '@mantine/core/PersonaPresence')) {
        presence = child;
      } else if (child != null && child !== false) {
        body.push(child);
      }
    });
  };

  walk(children);
  return { avatar, presence, body };
}

export const Persona = polymorphicFactory<PersonaFactory>((_props) => {
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

  let avatarNode: React.ReactNode = null;
  if (!presenceOnly) {
    if (parts) {
      avatarNode = parts.avatar;
    } else if (isAvatarProps(avatar)) {
      avatarNode = <PersonaAvatar {...avatar} />;
    } else if (avatar != null) {
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
    : [
        name ? (
          <PersonaText key="primary" level={1}>
            {name}
          </PersonaText>
        ) : null,
        secondaryText != null ? (
          <PersonaText key="secondary" level={2}>
            {secondaryText}
          </PersonaText>
        ) : null,
        tertiaryText != null ? (
          <PersonaText key="tertiary" level={3}>
            {tertiaryText}
          </PersonaText>
        ) : null,
        quaternaryText != null ? (
          <PersonaText key="quaternary" level={4}>
            {quaternaryText}
          </PersonaText>
        ) : null,
      ].filter(Boolean);

  return (
    <PersonaProvider value={{ getStyles, size: props.size, radius, name, unstyled }}>
      <Box
        {...getStyles('root')}
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
        {avatarNode != null ? (
          <div {...getStyles('avatarWrapper')}>
            {avatarNode}
            {presenceNode}
          </div>
        ) : (
          presenceNode
        )}
        {bodyContent.length > 0 && <div {...getStyles('body')}>{bodyContent}</div>}
      </Box>
    </PersonaProvider>
  );
});

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
    export type StylesNames = PersonaAvatarStylesNames;
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
