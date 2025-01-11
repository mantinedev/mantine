import { Portal } from './Portal';

export default { title: 'Portal' };

export function Usage() {
  return (
    <>
      <div id="portal-target" />
      <Portal style={{ background: 'pink' }} className="class1 class2">
        <p>First</p>
      </Portal>
      <Portal style={{ background: 'pink' }}>
        <p>Second</p>
      </Portal>
    </>
  );
}

export function ReuseDomNode() {
  return (
    <div>
      <Portal reuseTargetNode>
        <p>First</p>
      </Portal>
      <Portal reuseTargetNode>
        <p>Second</p>
      </Portal>
      <Portal reuseTargetNode>
        <p>Third</p>
      </Portal>
    </div>
  );
}

export function ElementTarget() {
  const target = document.createElement('div');
  document.body.appendChild(target);
  return (
    <>
      <Portal style={{ background: 'pink' }} target={target}>
        <p>First</p>
      </Portal>
      <Portal style={{ background: 'pink' }} target={target}>
        <p>Second</p>
      </Portal>
    </>
  );
}
