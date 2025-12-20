import { tests } from '@mantine-tests/core';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  expanded: true,
  children: <div style={{ height: '20vh' }} />,
};

describe('@mantine/core/Collapse', () => {
  tests.itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    children: true,
    styleProps: true,
    extend: true,
    withProps: true,
    displayName: '@mantine/core/Collapse',
  });
});
