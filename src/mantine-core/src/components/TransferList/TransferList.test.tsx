import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  mockResizeObserver,
  itSupportsSx,
} from '@mantine/tests';
import { TransferList, TransferListProps } from './TransferList';

const defaultProps: Partial<TransferListProps> = {
  onChange: () => {},
  titles: ['test-1', 'test-2'],
  value: [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
    ],
  ],
};

mockResizeObserver();

describe('@mantine/core/TransferList', () => {
  itSupportsClassName(TransferList, defaultProps);
  itSupportsMargins(TransferList, defaultProps);
  itSupportsOthers(TransferList, defaultProps);
  itSupportsStyle(TransferList, defaultProps);
  itSupportsSx(TransferList, defaultProps);
  itSupportsRef(TransferList, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(TransferList.displayName).toEqual('@mantine/core/TransferList');
  });
});
