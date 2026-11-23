import { useActiveElement } from './use-active-element';

export default { title: 'useActiveElement' };

function describeElement(element: Element | null) {
  if (!element) {
    return 'null';
  }

  const id = element.id ? `#${element.id}` : '';
  return `${element.tagName.toLowerCase()}${id}`;
}

export function Usage() {
  const activeElement = useActiveElement();

  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginBottom: 16, fontFamily: 'monospace' }}>
        Focused element: {describeElement(activeElement)}
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input id="first-input" placeholder="First input" />
        <input id="second-input" placeholder="Second input" />
        <textarea id="textarea" placeholder="Textarea" />
        <button id="button" type="button">
          Button
        </button>
      </div>
    </div>
  );
}

export function ShallowVsDeep() {
  const deep = useActiveElement();
  const shallow = useActiveElement({ deep: false });

  return (
    <div style={{ padding: 40, fontFamily: 'monospace' }}>
      <div>deep: {describeElement(deep)}</div>
      <div>shallow: {describeElement(shallow)}</div>
      <input style={{ marginTop: 16 }} placeholder="Focus me" />
    </div>
  );
}
