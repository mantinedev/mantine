import { DecadeLevelGroup } from './DecadeLevelGroup';

export default { title: 'DecadeLevelGroup' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <div>1 column</div>
      <DecadeLevelGroup decade="2022-04-11" mb={50} mt="xs" />

      <div>2 columns</div>
      <DecadeLevelGroup numberOfColumns={2} decade="2022-04-11" mb={50} mt="xs" />

      <div>3 columns</div>
      <DecadeLevelGroup numberOfColumns={3} decade="2022-04-11" mb={50} mt="xs" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <DecadeLevelGroup numberOfColumns={3} size={size} key={size} mt="xl" decade="2022-04-11" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
