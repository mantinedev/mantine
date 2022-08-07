import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsClassName<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports className prop', () => {
    const { container } = render(<Component {...requiredProps} className="test-class-name" />);
    expect(container.querySelector('.test-class-name')).toBeInTheDocument();
  });
}
