import React from 'react';
import { tests } from '@mantine/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '20vh' }} />,
};

describe('@mantine/core/Collapse', () => {
  tests.itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    children: true,
    styleProps: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Collapse',
  });
});
