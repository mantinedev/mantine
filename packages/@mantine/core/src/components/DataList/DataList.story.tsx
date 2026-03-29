import { DataList } from './DataList';

export default { title: 'DataList' };

const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
];

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DataList>
        {data.map((item) => (
          <DataList.Item key={item.label}>
            <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
            <DataList.ItemValue>{item.value}</DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList>
    </div>
  );
}

export function Horizontal() {
  return (
    <div style={{ padding: 40 }}>
      <DataList orientation="horizontal">
        {data.map((item) => (
          <DataList.Item key={item.label}>
            <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
            <DataList.ItemValue>{item.value}</DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList>
    </div>
  );
}

export function WithDivider() {
  return (
    <div style={{ padding: 40 }}>
      <DataList withDivider>
        {data.map((item) => (
          <DataList.Item key={item.label}>
            <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
            <DataList.ItemValue>{item.value}</DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList>
    </div>
  );
}

export function HorizontalWithDivider() {
  return (
    <div style={{ padding: 40 }}>
      <DataList orientation="horizontal" withDivider>
        {data.map((item) => (
          <DataList.Item key={item.label}>
            <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
            <DataList.ItemValue>{item.value}</DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} style={{ marginBottom: 32 }}>
          <h3>Size: {size}</h3>
          <DataList size={size}>
            {data.map((item) => (
              <DataList.Item key={item.label}>
                <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
            ))}
          </DataList>
        </div>
      ))}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <DataList unstyled>
        {data.map((item) => (
          <DataList.Item key={item.label}>
            <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
            <DataList.ItemValue>{item.value}</DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList>
    </div>
  );
}
