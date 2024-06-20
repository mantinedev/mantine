import { createRef } from 'react';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
  refType: any;
  refProp?: string;
  selector?: string;
}

export function itSupportsRef<Props>(options: Options<Props>, name = 'supports ref') {
  it(name, () => {
    const ref = createRef<typeof options.refType>();
    render(<options.component {...options.props} {...{ [options.refProp || 'ref']: ref }} />);
    expect(ref.current).toBeInstanceOf(options.refType);
  });
}
