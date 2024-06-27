import { MonthLevelGroup } from './MonthLevelGroup';

export default { title: 'MonthLevelGroup' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <div>1 month</div>
      <MonthLevelGroup month={new Date(2022, 3, 11)} mb={50} mt="xs" />

      <div>2 months</div>
      <MonthLevelGroup numberOfColumns={2} month={new Date(2022, 3, 11)} mb={50} mt="xs" />

      <div>3 months</div>
      <MonthLevelGroup numberOfColumns={3} month={new Date(2022, 3, 11)} mb={50} mt="xs" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <MonthLevelGroup
      numberOfColumns={3}
      size={size}
      key={size}
      mt="xl"
      month={new Date(2022, 3, 11)}
    />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
