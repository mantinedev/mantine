import { tests } from '@mantine-tests/core';
import { Alert, AlertProps, AlertStylesNames } from './Alert';

const defaultProps: AlertProps = {
  withCloseButton: true,
  icon: 'test-icon',
  closeButtonLabel: 'test-close',
  title: 'test-title',
  children: 'test-children',
};

describe('@mantine/core/Alert', () => {
  tests.axe([
    <Alert key="1">Alert message</Alert>,
    <Alert title="Alert title" key="2">
      Alert message
    </Alert>,
    <Alert withCloseButton closeButtonLabel="test-close" key="3">
      Alert message
    </Alert>,
  ]);

  tests.itSupportsSystemProps<AlertProps, AlertStylesNames>({
    component: Alert,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Alert',
    stylesApiSelectors: [
      'root',
      'body',
      'label',
      'title',
      'icon',
      'wrapper',
      'message',
      'closeButton',
    ],
  });
});
