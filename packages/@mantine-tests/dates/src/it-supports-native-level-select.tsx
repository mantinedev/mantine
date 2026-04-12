import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsNativeLevelSelect(
  options: Options,
  name = 'supports withNativeLevelSelect'
) {
  describe(name, () => {
    it('renders native month and year selects at month level', () => {
      const { container } = render(<options.component {...options.props} withNativeLevelSelect />);

      const monthSelect = container.querySelector('select[data-select="month"]');
      const yearSelect = container.querySelector('select[data-select="year"]');
      expect(monthSelect).toBeInTheDocument();
      expect(yearSelect).toBeInTheDocument();
    });

    it('does not render native selects when withNativeLevelSelect is not set', () => {
      const { container } = render(<options.component {...options.props} />);

      const monthSelect = container.querySelector('select[data-select="month"]');
      const yearSelect = container.querySelector('select[data-select="year"]');
      expect(monthSelect).not.toBeInTheDocument();
      expect(yearSelect).not.toBeInTheDocument();
    });

    it('changes displayed month when month select is changed', async () => {
      const { container } = render(
        <options.component {...options.props} defaultDate="2024-03-01" withNativeLevelSelect />
      );

      const monthSelect = container.querySelector(
        'select[data-select="month"]'
      ) as HTMLSelectElement;
      expect(monthSelect.value).toBe('2');

      await userEvent.selectOptions(monthSelect, '5');
      expect(monthSelect.value).toBe('5');
    });

    it('changes displayed year when year select is changed', async () => {
      const { container } = render(
        <options.component {...options.props} defaultDate="2024-03-01" withNativeLevelSelect />
      );

      const yearSelect = container.querySelector('select[data-select="year"]') as HTMLSelectElement;
      expect(yearSelect.value).toBe('2024');

      await userEvent.selectOptions(yearSelect, '2025');
      expect(yearSelect.value).toBe('2025');
    });

    it('renders localized month names', () => {
      const { container } = render(
        <options.component {...options.props} withNativeLevelSelect locale="ru" />
      );

      const monthSelect = container.querySelector(
        'select[data-select="month"]'
      ) as HTMLSelectElement;
      const options_list = within(monthSelect).getAllByRole('option');
      expect(options_list[0].textContent).not.toBe('January');
    });

    it('hides level button when native selects are shown', () => {
      const { container } = render(
        <options.component
          {...options.props}
          withNativeLevelSelect
          levelControlAriaLabel="change-level"
        />
      );

      expect(container.querySelector('[data-native-level-select]')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'change-level' })).not.toBeInTheDocument();
    });
  });
}
