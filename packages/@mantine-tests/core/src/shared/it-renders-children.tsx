import { screen } from '@testing-library/react';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itRendersChildren<Props>(options: Options<Props>, name = 'renders children') {
  it(name, () => {
    render(<options.component {...options.props}>test-children</options.component>);
    expect(screen.getByText('test-children')).toBeInTheDocument();
  });
}
