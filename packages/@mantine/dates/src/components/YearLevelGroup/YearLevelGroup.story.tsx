import { YearLevelGroup } from './YearLevelGroup';

export default { title: 'YearLevelGroup' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <div>1 column</div>
      <YearLevelGroup year={new Date(2022, 3, 11)} mb={50} mt="xs" />

      <div>2 columns</div>
      <YearLevelGroup numberOfColumns={2} year={new Date(2022, 3, 11)} mb={50} mt="xs" />

      <div>3 columns</div>
      <YearLevelGroup numberOfColumns={3} year={new Date(2022, 3, 11)} mb={50} mt="xs" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <YearLevelGroup
      numberOfColumns={3}
      size={size}
      key={size}
      mt="xl"
      year={new Date(2022, 3, 11)}
    />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
