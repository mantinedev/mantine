import { render } from '@mantine-tests/core';
import { Toolbar } from '../Toolbar';

describe('@mantine/core/ToolbarDivider', () => {
  it('renders with correct orientation data attribute from context', () => {
    const { container } = render(
      <Toolbar>
        <Toolbar.Divider />
      </Toolbar>
    );
    expect(container.querySelector('.mantine-Toolbar-divider')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );
  });

  it('renders vertical orientation when toolbar is vertical', () => {
    const { container } = render(
      <Toolbar orientation="vertical">
        <Toolbar.Divider />
      </Toolbar>
    );
    expect(container.querySelector('.mantine-Toolbar-divider')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });
});
