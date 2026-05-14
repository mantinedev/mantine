import { useSelection } from './use-selection';

export default { title: 'useSelection' };

const rows = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

export function Usage() {
  const [selection, handlers] = useSelection({ data: rows });

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          type="button"
          onClick={() => {
            if (handlers.isAllSelected()) {
              handlers.resetSelection();
            } else {
              handlers.setSelection(rows);
            }
          }}
        >
          {handlers.isAllSelected() ? 'Deselect All' : 'Select All'}
        </button>
        <button type="button" onClick={handlers.resetSelection}>
          Reset
        </button>
      </div>

      <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 400 }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'left' }} />
            <th style={{ border: '1px solid #ccc', padding: 8, textAlign: 'left' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((name) => (
            <tr
              key={name}
              style={{ background: selection.includes(name) ? 'lightyellow' : 'white' }}
            >
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <input
                  type="checkbox"
                  checked={selection.includes(name)}
                  onChange={() => handlers.toggle(name)}
                />
              </td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 16, fontFamily: 'monospace' }}>
        <div>Selected: [{selection.join(', ')}]</div>
        <div>All selected: {String(handlers.isAllSelected())}</div>
        <div>Some selected: {String(handlers.isSomeSelected())}</div>
      </div>
    </div>
  );
}
