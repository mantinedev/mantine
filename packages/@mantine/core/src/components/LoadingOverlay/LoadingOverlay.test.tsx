import { tests } from '@mantine-tests/core';
import { LoadingOverlay, LoadingOverlayProps, LoadingOverlayStylesNames } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@mantine/core/LoadingOverlay', () => {
  tests.itSupportsSystemProps<LoadingOverlayProps, LoadingOverlayStylesNames>({
    component: LoadingOverlay,
    props: defaultProps,
    displayName: '@mantine/core/LoadingOverlay',
    stylesApiSelectors: ['root', 'loader', 'overlay'],
  });
});
