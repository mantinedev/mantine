import { getWeekLabel } from './get-week-label';

describe('@mantine/schedule/get-week-label', () => {
  const weekdays = [
    new Date(2025, 10, 3), // Mon Nov 03 2025
    new Date(2025, 10, 4),
    new Date(2025, 10, 5),
    new Date(2025, 10, 6),
    new Date(2025, 10, 7), // Fri Nov 07 2025
    new Date(2025, 10, 8),
    new Date(2025, 10, 9), // Sun Nov 09 2025
  ];

  it('returns formatted string with default formatter', () => {
    // Nov 03 – Nov 09, 2025
    expect(
      getWeekLabel({
        weekdays,
        locale: 'en',
        weekLabelFormat: 'MMM DD',
      })
    ).toBe('Nov 03 – Nov 09, 2025');
  });

  it('uses renderWeekLabel if provided', () => {
    const renderWeekLabel = jest.fn().mockReturnValue('Custom Label');
    expect(
      getWeekLabel({
        weekdays,
        locale: 'en',
        weekLabelFormat: 'MMM DD',
        renderWeekLabel,
      })
    ).toBe('Custom Label');

    expect(renderWeekLabel).toHaveBeenCalledWith({
      weekStart: expect.any(String),
      weekEnd: expect.any(String),
    });

    expect(renderWeekLabel.mock.calls[0][0].weekStart).toBe('2025-11-03');
    expect(renderWeekLabel.mock.calls[0][0].weekEnd).toBe('2025-11-09');
  });
});
