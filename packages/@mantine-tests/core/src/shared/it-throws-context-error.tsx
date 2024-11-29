import { patchConsoleError } from '../patch-console-error';
import { render } from '../render';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props & React.JSX.IntrinsicAttributes;
  error: string;
}

export function itThrowsContextError<Props>(
  options: Options<Props>,
  name = 'throws error when rendered outside of context'
) {
  it(name, async () => {
    patchConsoleError();
    expect(() => render(<options.component {...options.props} />)).toThrow(
      new Error(options.error)
    );
    patchConsoleError.release();
  });
}
