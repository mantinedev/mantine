import { factory, Factory, useProps } from '../../core';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { getPersonaName } from './get-persona-name';
import { usePersonaContext } from './Persona.context';

export type PersonaAvatarStylesNames = 'avatar';

/**
 * `Avatar` props. `classNames` and `styles` target the inner `Avatar` selectors
 * (`root`, `image`, `placeholder`); use `Persona` `classNames.avatar` to target the avatar root
 * from the parent. Without `alt` the avatar is decorative (`alt=""`, hidden from assistive technologies)
 * because the name is rendered next to it
 */
export interface PersonaAvatarProps extends AvatarProps {}

export type PersonaAvatarFactory = Factory<{
  props: PersonaAvatarProps;
  ref: HTMLDivElement;
  compound: true;
}>;

export const PersonaAvatar = factory<PersonaAvatarFactory>((_props) => {
  const props = useProps('PersonaAvatar', null, _props);
  const { className, style, size, radius, name, color, unstyled, alt, ...others } = props;
  const ctx = usePersonaContext();
  const resolvedName = getPersonaName(name) ?? ctx.name;

  return (
    <Avatar
      size={size ?? ctx.size}
      radius={radius ?? ctx.radius}
      name={resolvedName}
      color={color ?? (resolvedName ? 'initials' : undefined)}
      unstyled={unstyled ?? ctx.unstyled}
      alt={alt ?? ''}
      aria-hidden={alt == null ? true : undefined}
      {...others}
      {...ctx.getStyles('avatar', { className, style })}
    />
  );
});

PersonaAvatar.displayName = '@mantine/core/PersonaAvatar';
