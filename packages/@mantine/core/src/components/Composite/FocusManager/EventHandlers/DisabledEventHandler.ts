// eslint-disable-next-line import/no-cycle
import { FocusManagerEventHandler } from './FocusManagerEventHandler';

export class DisabledEventHandler extends FocusManagerEventHandler {
  keyboardEventHandler() {}
  mouseEventHandler() {}
}
