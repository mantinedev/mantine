import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps = {};

describe('@mantine/core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsProviderVariant(Paper, defaultProps, 'Paper');
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: '@mantine/core/Paper',
    refType: HTMLDivElement,
    providerName: 'Paper',
  });
});
