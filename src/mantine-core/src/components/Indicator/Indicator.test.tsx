import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { Indicator, IndicatorProps } from './Indicator';

const defaultProps: IndicatorProps = {
  children: 'Child',
};

describe('@mantine/core/Indicator', () => {
  itRendersChildren(Indicator, defaultProps);
  itSupportsSystemProps({
    component: Indicator,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Indicator',
  });
});
