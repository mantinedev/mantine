import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
};

describe('@mantine/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    displayName: '@mantine/core/Collapse',
  });
});
