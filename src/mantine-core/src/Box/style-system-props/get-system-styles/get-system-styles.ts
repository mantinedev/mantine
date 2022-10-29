import { MantineStyleSystemProps, MantineTheme } from '@mantine/styles';
import { getResponsiveValue } from '../get-responsive-value/get-responsive-value';
import { valueGetters } from '../value-getters/value-getters';
import { SYSTEM_PROPS } from '../system-props/system-props';

export function getSystemStyles(systemStyles: MantineStyleSystemProps, theme: MantineTheme) {
  const styles = Object.keys(SYSTEM_PROPS).reduce((acc, systemProp) => {
    if (systemProp in systemStyles && systemStyles[systemProp] !== undefined) {
      acc.push(
        getResponsiveValue({
          value: systemStyles[systemProp],
          getValue: valueGetters[SYSTEM_PROPS[systemProp].type],
          property: SYSTEM_PROPS[systemProp].property,
          theme,
        })
      );
    }

    return acc;
  }, []);

  return styles.reduce((acc, stylesPartial) => {
    const result = { ...acc, ...stylesPartial };
    return result;
  }, {});
}
