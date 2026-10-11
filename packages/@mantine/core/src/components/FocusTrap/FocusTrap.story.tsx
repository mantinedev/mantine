import { useDisclosure } from '@mantine/hooks';
import { FocusTrap } from './FocusTrap';

export default { title: 'FocusTrap' };

export function Usage() {
  const [active, handlers] = useDisclosure(false);
  return (
    <>
      <button type="button" onClick={handlers.toggle}>
        Toggle
      </button>
      <FocusTrap active={active}>
        <div>
          <input />
          <input />
          <input />
        </div>
      </FocusTrap>
    </>
  );
}

export function NativeTabStops() {
  const [active, handlers] = useDisclosure(false);
  return (
    <>
      <button type="button" onClick={handlers.toggle}>
        Toggle
      </button>
      <FocusTrap active={active}>
        <div>
          <input id="trap-first" placeholder="first" />
          <input id="trap-time" type="time" />
          <button type="button" id="trap-last">
            last
          </button>
        </div>
      </FocusTrap>
      <button type="button" id="outside">
        outside
      </button>
    </>
  );
}
