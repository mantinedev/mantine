import { MantineTheme } from '@mantine/styles';
import { getResponsiveValue } from '../get-responsive-value/get-responsive-value';
import { valueGetters } from '../value-getters/value-getters';
import { SYSTEM_PROPS } from '../system-props/system-props';

export function getSystemStyles(
  systemStyles: Record<string, any>,
  theme: MantineTheme,
  systemProps = SYSTEM_PROPS
) {
  const styles = Object.keys(systemProps).reduce((acc, systemProp) => {
    if (systemProp in systemStyles && systemStyles[systemProp] !== undefined) {
      acc.push(
        getResponsiveValue({
          value: systemStyles[systemProp],
          getValue: valueGetters[systemProps[systemProp].type],
          property: systemProps[systemProp].property,
          theme,
        })
      );
    }

    return acc;
  }, []);

  return styles.reduce((acc, stylesPartial) => {
    Object.keys(stylesPartial).forEach((property) => {
      if (typeof stylesPartial[property] === 'object' && stylesPartial[property] !== null) {
        if (!(property in acc)) {
          acc[property] = stylesPartial[property];
        } else {
          acc[property] = { ...acc[property], ...stylesPartial[property] };
        }
      } else {
        acc[property] = stylesPartial[property];
      }
    });

    return acc;
  }, {});
}
