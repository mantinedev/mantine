import { itSupportsInputAsterisk } from './it-supports-input-asterisk';
import { itSupportsInputContainer } from './it-supports-input-container';
import { itSupportsInputWrapperElements } from './it-supports-input-wrapper-elements';
import { itSupportsInputWrapperOrder } from './it-supports-input-wrapper-order';

interface Options<Props = any> {
  component: React.ComponentType<Props>;
  props: Props;
}

export function itSupportsInputWrapperProps<Props>(
  options: Options<Props>,
  name = 'supports InputWrapper props'
) {
  describe(name, () => {
    itSupportsInputAsterisk(options);
    itSupportsInputContainer(options);
    itSupportsInputWrapperElements(options);
    itSupportsInputWrapperOrder(options);
  });
}
