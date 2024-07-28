import { tests } from '@mantine-tests/core';
import { LoadingOverlay, LoadingOverlayProps, LoadingOverlayStylesNames } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@mantine/core/LoadingOverlay', () => {
  tests.itSupportsSystemProps<LoadingOverlayProps, LoadingOverlayStylesNames>({
    component: LoadingOverlay,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/LoadingOverlay',
    stylesApiSelectors: ['root', 'loader', 'overlay'],
  });
});
