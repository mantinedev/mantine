import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Popover } from './Popover';

const defaultProps = {
  opened: true,
  onClose: () => {},
  withArrow: true,
  withCloseButton: true,
  target: 'test-control',
  children: 'test-content',
  title: 'test-title',
};

describe('@mantine/core/Popover', () => {
  itSupportsClassName(Popover, defaultProps);
  itSupportsOthers(Popover, defaultProps);
  itSupportsStyle(Popover, defaultProps);

  it('has correct displayName', () => {
    expect(Popover.displayName).toEqual('@mantine/core/Popover');
  });
});
