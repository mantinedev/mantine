import { Skeleton } from './Skeleton';

export default { title: 'Skeleton' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Skeleton height={200} />
    </div>
  );
}

export function Circle() {
  return (
    <div style={{ padding: 40 }}>
      <Skeleton height={200} circle />
    </div>
  );
}
