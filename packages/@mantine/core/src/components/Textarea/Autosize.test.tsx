import { render, screen } from '@mantine-tests/core';
import { TextareaAutosize } from './Autosize';

describe('@mantine/core/Textarea/Autosize', () => {
  it('sets rows attribute to minRows to avoid SSR height flash', () => {
    render(<TextareaAutosize minRows={4} aria-label="test-autosize" />);
    expect(screen.getByLabelText('test-autosize')).toHaveAttribute('rows', '4');
  });

  it('respects an explicit rows prop over minRows', () => {
    render(<TextareaAutosize minRows={4} rows={2} aria-label="test-autosize" />);
    expect(screen.getByLabelText('test-autosize')).toHaveAttribute('rows', '2');
  });
});
