import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { TextInput } from '../TextInput';
import { Combobox } from './Combobox';
import { useCombobox } from './use-combobox/use-combobox';

function AxeTest() {
  const store = useCombobox({
    defaultOpened: true,
  });

  return (
    <div style={{ padding: 40 }}>
      <Combobox store={store} withinPortal={false}>
        <Combobox.Target>
          <TextInput
            label="Test input"
            onFocus={() => store.openDropdown()}
            onBlur={() => store.closeDropdown()}
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          <Combobox.Options aria-label="test">
            <Combobox.Option value="react">React</Combobox.Option>
            <Combobox.Option value="vue">Vue</Combobox.Option>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

describe('@mantine/core/Combobox', () => {
  tests.axe([<AxeTest key="1" />]);

  it('clears aria-activedescendant when dropdown closes and reopens', async () => {
    function Demo() {
      const store = useCombobox();

      return (
        <Combobox store={store} withinPortal={false}>
          <Combobox.Target>
            <TextInput label="Test input" onClick={() => store.openDropdown()} />
          </Combobox.Target>
          <Combobox.Dropdown>
            <Combobox.Options aria-label="test">
              <Combobox.Option value="react">React</Combobox.Option>
              <Combobox.Option value="vue">Vue</Combobox.Option>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      );
    }

    render(<Demo />);
    const input = screen.getByRole('textbox');

    await userEvent.click(input);
    expect(input).toHaveAttribute('aria-controls');
    expect(input).not.toHaveAttribute('aria-activedescendant');

    await userEvent.keyboard('{ArrowDown}');
    expect(input).toHaveAttribute('aria-activedescendant');

    await userEvent.keyboard('{Escape}');
    expect(input).not.toHaveAttribute('aria-controls');

    await userEvent.click(input);
    expect(input).toHaveAttribute('aria-controls');
    expect(input).not.toHaveAttribute('aria-activedescendant');

    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{ArrowDown}');
    expect(input).toHaveAttribute('aria-controls');
    expect(input).toHaveAttribute('aria-activedescendant');
  });
});
