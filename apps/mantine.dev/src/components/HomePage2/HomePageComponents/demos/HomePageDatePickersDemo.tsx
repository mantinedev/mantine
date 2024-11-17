import { Input, SimpleGrid } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export function HomePageDatePickerDemos() {
  return (
    <SimpleGrid cols={2}>
      <div>
        <Input.Label size="lg" mb="sm" display="block">
          Date range picker
        </Input.Label>
        <DatePicker size="lg" type="range" />
      </div>
    </SimpleGrid>
  );
}
