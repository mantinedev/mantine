import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { Calendar } from './Calendar';

describe('Calendar - Keyboard Navigation', () => {
  it('should navigate by year with Ctrl+ArrowUp/Down', async () => {
    const user = userEvent.setup();
    const onDateChange = jest.fn();
    
    render(
      <Calendar 
        defaultDate="2024-06-15"
        onDateChange={onDateChange}
        enableKeyboardNavigation
      />
    );
    
    // Focus on the calendar
    const calendar = screen.getByRole('region', { name: /calendar/i });
    calendar.focus();
    
    // Navigate one year back with Ctrl+ArrowUp
    await user.keyboard('{Control>}{ArrowUp}{/Control}');
    expect(onDateChange).toHaveBeenCalledWith('2023-06-15');
    
    // Navigate one year forward with Ctrl+ArrowDown
    await user.keyboard('{Control>}{ArrowDown}{/Control}');
    expect(onDateChange).toHaveBeenCalledWith('2025-06-15');
  });
  
  it('should navigate by decade with Ctrl+Shift+ArrowUp/Down', async () => {
    const user = userEvent.setup();
    const onDateChange = jest.fn();
    
    render(
      <Calendar 
        defaultDate="2024-06-15"
        onDateChange={onDateChange}
        enableKeyboardNavigation
      />
    );
    
    // Focus on the calendar
    const calendar = screen.getByRole('region', { name: /calendar/i });
    calendar.focus();
    
    // Navigate one decade back with Ctrl+Shift+ArrowUp
    await user.keyboard('{Control>}{Shift>}{ArrowUp}{/Shift}{/Control}');
    expect(onDateChange).toHaveBeenCalledWith('2014-06-15');
    
    // Navigate one decade forward with Ctrl+Shift+ArrowDown
    await user.keyboard('{Control>}{Shift>}{ArrowDown}{/Shift}{/Control}');
    expect(onDateChange).toHaveBeenCalledWith('2034-06-15');
  });
  
  it('should open year view with Y key', async () => {
    const user = userEvent.setup();
    const onLevelChange = jest.fn();
    
    render(
      <Calendar 
        defaultDate="2024-06-15"
        defaultLevel="month"
        onLevelChange={onLevelChange}
        enableKeyboardNavigation
      />
    );
    
    // Focus on the calendar
    const calendar = screen.getByRole('region', { name: /calendar/i });
    calendar.focus();
    
    // Press Y key to open year view
    await user.keyboard('y');
    expect(onLevelChange).toHaveBeenCalledWith('year');
  });
  
  it('should not handle keyboard events when disabled', async () => {
    const user = userEvent.setup();
    const onDateChange = jest.fn();
    const onLevelChange = jest.fn();
    
    render(
      <Calendar 
        defaultDate="2024-06-15"
        onDateChange={onDateChange}
        onLevelChange={onLevelChange}
        enableKeyboardNavigation={false}
      />
    );
    
    // Focus on the calendar
    const calendar = screen.getByRole('region', { name: /calendar/i });
    calendar.focus();
    
    // Try keyboard navigation - should not work
    await user.keyboard('{Control>}{ArrowUp}{/Control}');
    await user.keyboard('y');
    
    expect(onDateChange).not.toHaveBeenCalled();
    expect(onLevelChange).not.toHaveBeenCalled();
  });
  
  it('should work with macOS Cmd key', async () => {
    const user = userEvent.setup();
    const onDateChange = jest.fn();
    
    render(
      <Calendar 
        defaultDate="2024-06-15"
        onDateChange={onDateChange}
        enableKeyboardNavigation
      />
    );
    
    // Focus on the calendar
    const calendar = screen.getByRole('region', { name: /calendar/i });
    calendar.focus();
    
    // Navigate with Cmd+ArrowUp (macOS)
    await user.keyboard('{Meta>}{ArrowUp}{/Meta}');
    expect(onDateChange).toHaveBeenCalledWith('2023-06-15');
  });
});