import { DatesProvider } from '../DatesProvider';
import { Calendar } from './Calendar';

export default { title: 'Calendar' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar unstyled />
    </div>
  );
}

export function ConsistentWeeks() {
  return (
    <div style={{ padding: 40 }}>
      <DatesProvider settings={{ consistentWeeks: true }}>
        <Calendar />
      </DatesProvider>
    </div>
  );
}

export function MaxLevel() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar maxLevel="year" />
    </div>
  );
}

export function MinLevel() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar minLevel="year" />
    </div>
  );
}

export function NumberOfColumns() {
  return (
    <div style={{ padding: 40 }}>
      <div>1 column</div>
      <Calendar mb={50} mt="xs" />

      <div>2 columns</div>
      <Calendar numberOfColumns={2} columnsToScroll={2} mb={50} mt="xs" />

      <div>3 columns</div>
      <Calendar numberOfColumns={3} mb={50} mt="xs" />
    </div>
  );
}

export function InitialLevelYear() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar defaultLevel="year" />
    </div>
  );
}

export function InitialLevelDecade() {
  return (
    <div style={{ padding: 40 }}>
      <Calendar defaultLevel="decade" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Calendar size={size} key={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function CustomMonth() {
  return (
    <div style={{ padding: 40 }}>
      <div>
        <h3>Normal Calendar</h3>
        <p>Standard calendar showing May 2024 with normal first day (1st) and normal days count</p>
        <Calendar defaultDate="2024-05-01" mb={30} />
      </div>

      <div>
        <h3>Custom Calendar - Start from 5th with 31 days</h3>
        <p>Calendar starting from May 5th with 31 days total (ends on June 4th)</p>
        <p>Days before 5th and after June 4th should be disabled (grayed out)</p>
        <Calendar
          defaultDate="2024-05-01"
          customFirstDayOfMonth={5}
          customDaysInMonth={31}
          mb={30}
        />
      </div>

      <div>
        <h3>Custom Calendar - Start from 10th with 25 days</h3>
        <p>Calendar starting from May 10th with 25 days total (ends on June 3rd)</p>
        <p>Days before 10th and after June 3rd should be disabled (grayed out)</p>
        <Calendar
          defaultDate="2024-05-01"
          customFirstDayOfMonth={10}
          customDaysInMonth={25}
          mb={30}
        />
      </div>

      <div>
        <h3>Custom Calendar - Start from 15th with 20 days</h3>
        <p>Calendar starting from May 15th with 20 days total (ends on June 3rd)</p>
        <p>Days before 15th and after June 3rd should be disabled (grayed out)</p>
        <Calendar
          defaultDate="2024-05-01"
          customFirstDayOfMonth={15}
          customDaysInMonth={20}
          mb={30}
        />
      </div>

      <div>
        <h3>Custom Calendar - Only custom first day</h3>
        <p>Calendar starting from May 8th but with normal month length (until May 31st)</p>
        <Calendar defaultDate="2024-05-01" customFirstDayOfMonth={8} mb={30} />
      </div>

      <div>
        <h3>Custom Calendar - Only custom days count</h3>
        <p>Calendar starting from May 1st but with only 15 days total (until May 15th)</p>
        <Calendar defaultDate="2024-05-01" customDaysInMonth={15} mb={30} />
      </div>
    </div>
  );
}
