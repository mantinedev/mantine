import { MantineTheme } from '../../../../MantineProvider';
import { rem } from '../../../../utils';
import { colorResolver } from '../color-resolver/color-resolver';

export function borderResolver(value: unknown, theme: MantineTheme) {
  if (typeof value === 'number') {
    return rem(value);
  }

  if (typeof value === 'string') {
    const [size, style, ...colorTuple] = value.split(' ').filter((val) => val.trim() !== '');
    let result = `${rem(size)}`;
    style && (result += ` ${style}`);
    colorTuple.length > 0 && (result += ` ${colorResolver(colorTuple.join(' '), theme)}`);
    return result.trim();
  }

  return value;
}
