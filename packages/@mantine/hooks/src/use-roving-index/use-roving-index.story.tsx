import { useState } from 'react';
import { useRovingIndex } from './use-roving-index';

export default { title: 'useRovingIndex' };

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export function Usage() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
  });

  return (
    <div style={{ padding: 40 }}>
      <div>Focused index: {focusedIndex}</div>
      <div role="listbox" style={{ marginTop: 10 }}>
        {items.map((item, index) => (
          <div
            key={item}
            role="option"
            aria-selected={focusedIndex === index}
            {...getItemProps({ index })}
            style={{
              padding: '8px 12px',
              cursor: 'pointer',
              background: focusedIndex === index ? 'dodgerblue' : 'transparent',
              color: focusedIndex === index ? 'white' : 'black',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Horizontal() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
  });

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {items.map((item, index) => (
          <button
            key={item}
            {...getItemProps({ index })}
            style={{
              padding: '8px 16px',
              border: '2px solid',
              borderColor: focusedIndex === index ? 'dodgerblue' : 'gray',
              background: focusedIndex === index ? 'dodgerblue' : 'white',
              color: focusedIndex === index ? 'white' : 'black',
              cursor: 'pointer',
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export function WithDisabledItems() {
  const disabledIndices = new Set([1, 3]);
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
    isItemDisabled: (index) => disabledIndices.has(index),
  });

  return (
    <div style={{ padding: 40 }}>
      <div role="listbox">
        {items.map((item, index) => (
          <div
            key={item}
            role="option"
            aria-selected={focusedIndex === index}
            aria-disabled={disabledIndices.has(index)}
            {...getItemProps({ index })}
            style={{
              padding: '8px 12px',
              cursor: disabledIndices.has(index) ? 'not-allowed' : 'pointer',
              opacity: disabledIndices.has(index) ? 0.4 : 1,
              background: focusedIndex === index ? 'dodgerblue' : 'transparent',
              color: focusedIndex === index ? 'white' : 'black',
            }}
          >
            {item} {disabledIndices.has(index) ? '(disabled)' : ''}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Grid() {
  const [selected, setSelected] = useState(-1);
  const gridItems = Array.from({ length: 12 }, (_, i) => i + 1);
  const columns = 4;

  const { getItemProps, focusedIndex } = useRovingIndex({
    total: gridItems.length,
    columns,
  });

  return (
    <div style={{ padding: 40 }}>
      <div>
        Focused: {focusedIndex} | Selected: {selected}
      </div>
      <div
        role="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 60px)`,
          gap: 4,
          marginTop: 10,
        }}
      >
        {gridItems.map((item, index) => (
          <button
            key={item}
            {...getItemProps({
              index,
              onClick: () => setSelected(index),
            })}
            style={{
              width: 60,
              height: 60,
              border: '2px solid',
              borderColor: focusedIndex === index ? 'dodgerblue' : 'gray',
              background:
                selected === index ? 'orange' : focusedIndex === index ? 'lightblue' : 'white',
              cursor: 'pointer',
              fontSize: 18,
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
