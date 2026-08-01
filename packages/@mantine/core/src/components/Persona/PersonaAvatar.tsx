import { factory, Factory, useProps } from '../../core';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { usePersonaContext } from './Persona.context';

export type PersonaAvatarStylesNames = 'avatar';

export interface PersonaAvatarProps extends AvatarProps {}

export type PersonaAvatarFactory = Factory<{
  props: PersonaAvatarProps;
  ref: HTMLDivElement;
  stylesNames: PersonaAvatarStylesNames;
  compound: true;
}>;

export const PersonaAvatar = factory<PersonaAvatarFactory>((_props) => {
  const props = useProps('PersonaAvatar', null, _props);
  const { className, style, size, radius, name, color, unstyled, mod, ...others } = props;
  const ctx = usePersonaContext();
  const resolvedName = name ?? ctx.name;

  return (
    <Avatar
      size={size ?? ctx.size}
      radius={radius ?? ctx.radius}
      name={resolvedName}
      color={color ?? (typeof resolvedName === 'string' ? 'initials' : undefined)}
      unstyled={unstyled ?? ctx.unstyled}
      mod={mod}
      {...others}
      {...ctx.getStyles('avatar', { className, style })}
    />
  );
});

PersonaAvatar.displayName = '@mantine/core/PersonaAvatar';
