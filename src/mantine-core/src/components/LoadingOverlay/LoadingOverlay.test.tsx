import { tests } from '@mantine/tests';
import { LoadingOverlay, LoadingOverlayProps, LoadingOverlayStylesNames } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@mantine/core/LoadingOverlay', () => {
  tests.itSupportsSystemProps<LoadingOverlayProps, LoadingOverlayStylesNames>({
    component: LoadingOverlay,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/LoadingOverlay',
    stylesApiSelectors: ['root', 'loader', 'overlay'],
  });
});
