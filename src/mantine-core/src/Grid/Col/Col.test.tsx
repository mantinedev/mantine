import {
  itSupportsSystemProps,
  createContextContainer,
  itThrowsContextError,
} from '@mantine/tests';
import { GridProvider } from '../Grid.context';
import { Col, ColProps } from './Col';

const defaultProps: ColProps = {
  span: 12,
};

const TestContainer = createContextContainer(Col, GridProvider, {
  value: {
    gutter: 'md',
    grow: false,
    columns: 12,
  },
});

describe('@mantine/core/Col', () => {
  itThrowsContextError(Col, defaultProps, 'Grid component was not found in tree');
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Col',
    providerName: 'GridCol',
  });
});
