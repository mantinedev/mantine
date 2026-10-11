import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { DatesDropdownProvider } from '../PickerInputBase/DatesDropdown.context';
import { CalendarHeader, CalendarHeaderProps, CalendarHeaderStylesNames } from './CalendarHeader';

const defaultProps: CalendarHeaderProps = {
  nextLabel: 'next',
  previousLabel: 'prev',
  label: '',
};

describe('@mantine/dates/CalendarHeader', () => {
  tests.itSupportsSystemProps<CalendarHeaderProps, CalendarHeaderStylesNames>({
    component: CalendarHeader,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/dates/CalendarHeader',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
    ],
  });

  datesTests.itSupportsHeaderProps({ component: CalendarHeader, props: defaultProps });
  datesTests.itSupportsWithNextPrevious({ component: CalendarHeader, props: defaultProps });

  it('renders given label', () => {
    render(<CalendarHeader {...defaultProps} label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('supports levelControlAriaLabel', () => {
    render(
      <CalendarHeader {...defaultProps} label="test-label" levelControlAriaLabel="Change month" />
    );

    expect(screen.getByText('test-label')).toHaveAttribute('aria-label', 'Change month');
  });

  it('handles focus as usual without dropdown context', async () => {
    render(<CalendarHeader {...defaultProps} levelControlAriaLabel="test-level" />);
    await userEvent.click(screen.getByLabelText('next'));
    expect(screen.getByLabelText('next')).toHaveFocus();

    await userEvent.click(screen.getByLabelText('test-level'));
    expect(screen.getByLabelText('test-level')).toHaveFocus();

    await userEvent.click(screen.getByLabelText('prev'));
    expect(screen.getByLabelText('prev')).toHaveFocus();
  });

  it('does not focus controls on click when dropdown context has preventFocus', async () => {
    render(
      <DatesDropdownProvider
        value={{ preventFocus: true, stopPropagation: false, layout: 'default' }}
      >
        <CalendarHeader {...defaultProps} levelControlAriaLabel="test-level" />
      </DatesDropdownProvider>
    );

    await userEvent.click(screen.getByLabelText('next'));
    expect(document.body).toHaveFocus();
    expect(screen.getByLabelText('next')).toHaveAttribute('tabindex', '-1');

    await userEvent.click(screen.getByLabelText('test-level'));
    expect(document.body).toHaveFocus();

    await userEvent.click(screen.getByLabelText('prev'));
    expect(document.body).toHaveFocus();
  });

  it('adds data-mantine-stop-propagation to controls when dropdown context has stopPropagation', () => {
    render(
      <DatesDropdownProvider
        value={{ preventFocus: false, stopPropagation: true, layout: 'default' }}
      >
        <CalendarHeader {...defaultProps} levelControlAriaLabel="test-level" />
      </DatesDropdownProvider>
    );

    expect(screen.getByLabelText('next')).toHaveAttribute('data-mantine-stop-propagation');
    expect(screen.getByLabelText('prev')).toHaveAttribute('data-mantine-stop-propagation');
    expect(screen.getByLabelText('test-level')).toHaveAttribute('data-mantine-stop-propagation');
  });

  it('renders level button instead of native selects without Calendar ancestor', () => {
    const { container } = render(
      <CalendarHeader {...defaultProps} withNativeLevelSelect levelControlAriaLabel="test-level" />
    );

    expect(screen.getByRole('button', { name: 'test-level' })).toBeInTheDocument();
    expect(container.querySelector('select')).not.toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    render(<CalendarHeader {...defaultProps} __staticSelector="Calendar" />);
    expect(screen.getByLabelText('next')).toHaveClass('mantine-Calendar-calendarHeaderControl');
  });

  it('does not set disabled and tabindex on static level control', () => {
    render(
      <CalendarHeader {...defaultProps} levelControlAriaLabel="test-level" hasNextLevel={false} />
    );
    const level = screen.getByLabelText('test-level');
    expect(level.tagName).toBe('DIV');
    expect(level).not.toHaveAttribute('disabled');
    expect(level).not.toHaveAttribute('tabindex');
  });

  it('renders controls in headerControlsOrder order', () => {
    const { container, rerender } = render(
      <CalendarHeader {...defaultProps} levelControlAriaLabel="level" />
    );
    const getOrder = () =>
      Array.from(container.querySelector('.mantine-CalendarHeader-calendarHeader')!.children).map(
        (node) => node.getAttribute('data-direction') || 'level'
      );

    expect(getOrder()).toStrictEqual(['previous', 'level', 'next']);

    rerender(
      <CalendarHeader
        {...defaultProps}
        levelControlAriaLabel="level"
        headerControlsOrder={['level', 'previous', 'next']}
      />
    );
    expect(getOrder()).toStrictEqual(['level', 'previous', 'next']);
  });
});
