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
