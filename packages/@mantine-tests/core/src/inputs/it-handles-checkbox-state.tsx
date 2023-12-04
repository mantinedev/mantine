import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itHandlesCheckboxState<Props>(
  options: Options<Props>,
  name = 'handles checkbox state'
) {
  describe(name, () => {
    it('correctly handles controlled checkbox state', async () => {
      const spy = jest.fn();
      render(<options.component {...options.props} checked={false} onChange={spy} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      await userEvent.click(screen.getByRole('checkbox'));
      expect(spy).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('correctly handles uncontrolled checkbox state', async () => {
      render(<options.component {...options.props} defaultChecked={false} />);
      expect(screen.getByRole('checkbox')).not.toBeChecked();
      await userEvent.click(screen.getByRole('checkbox'));
      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });
}
