import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { usePersonaContext } from './Persona.context';

export type PersonaTextStylesNames = 'text';

export type PersonaTextLevel = 1 | 2 | 3 | 4;

export interface PersonaTextProps
  extends BoxProps, CompoundStylesApiProps<PersonaTextFactory>, ElementProps<'div'> {
  /** Text importance level. `1` is the primary line (person name), `2`–`4` are secondary lines @default 1 */
  level?: PersonaTextLevel;

  /** Text content */
  children?: React.ReactNode;
}

export type PersonaTextFactory = Factory<{
  props: PersonaTextProps;
  ref: HTMLDivElement;
  stylesNames: PersonaTextStylesNames;
  compound: true;
}>;

const defaultProps = {
  level: 1,
} satisfies Partial<PersonaTextProps>;

export const PersonaText = factory<PersonaTextFactory>((_props) => {
  const props = useProps('PersonaText', defaultProps, _props);
  const { className, style, classNames, styles, vars, level, mod, ...others } = props;
  const ctx = usePersonaContext();

  return (
    <Box
      mod={[{ level }, mod]}
      {...ctx.getStyles('text', { className, style, classNames, styles })}
      {...others}
    />
  );
});

PersonaText.displayName = '@mantine/core/PersonaText';
