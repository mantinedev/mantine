import { Loader } from './Loader';

export default { title: 'Loader' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Loader />
      <Loader type="bars" mt="xl" />
      <Loader type="dots" mt="xl" />
    </div>
  );
}
