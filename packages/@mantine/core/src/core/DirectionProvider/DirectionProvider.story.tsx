import { DirectionProvider, useDirection } from './DirectionProvider';

export default { title: 'DirectionProvider' };

function _Usage() {
  const direction = useDirection();
  console.log(direction);
  return (
    <>
      <button onClick={() => document.documentElement.setAttribute('dir', 'ltr')}>set ltr</button>
      <button onClick={() => document.documentElement.setAttribute('dir', 'rtl')}>set rtl</button>
    </>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DirectionProvider>
        <_Usage />
        Hello
      </DirectionProvider>
    </div>
  );
}
