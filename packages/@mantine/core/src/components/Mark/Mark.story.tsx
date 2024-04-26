import { Mark } from './Mark';

export default { title: 'Mark' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <div>
        <Mark>Default mark</Mark>
      </div>
      <div>
        <Mark color="orange.9">Theme color mark</Mark>
      </div>
      <div>
        <Mark color="#f0ff00">CSS color mark</Mark>
      </div>
    </div>
  );
}
