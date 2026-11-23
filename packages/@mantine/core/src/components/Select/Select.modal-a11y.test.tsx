import { render, screen, userEvent } from '@mantine-tests/core';
import { Drawer } from '../Drawer';
import { Modal } from '../Modal';
import { Popover } from '../Popover';
import { Select } from './Select';

const providerProps = { env: 'default' as const };

function dialogByName(name: string) {
  return screen.getByRole('dialog', { name });
}

describe('@mantine/core/Select inside modal dialog', () => {
  it.each([
    ['Modal', Modal],
    ['Drawer', Drawer],
  ] as const)('keeps listbox options inside an open %s dialog', async (title, Dialog) => {
    render(
      <Dialog opened onClose={() => {}} title={title} transitionProps={{ duration: 0 }}>
        <Select aria-label="Fruit" data={['Apple', 'Banana']} dropdownOpened />
      </Dialog>,
      undefined,
      providerProps
    );

    const dialog = dialogByName(title);
    const listbox = screen.getByRole('listbox', { hidden: true });
    const option = screen.getByRole('option', { name: 'Apple', hidden: true });

    expect(dialog.contains(listbox)).toBe(true);
    expect(dialog.contains(option)).toBe(true);
    expect(listbox.closest('[aria-hidden="true"]')).toBeNull();
    expect(option.closest('[aria-hidden="true"]')).toBeNull();
    expect(listbox.closest('[data-mantine-modal-floating-portal]')).toBe(
      dialog.querySelector('[data-mantine-modal-floating-portal]')
    );

    const combobox = screen.getByRole('combobox', { name: 'Fruit' });
    await userEvent.click(combobox);
    await userEvent.keyboard('{ArrowDown}');

    const activeId = combobox.getAttribute('aria-activedescendant');
    const activeOption = activeId ? document.getElementById(activeId) : null;
    expect(activeOption).toHaveAttribute('role', 'option');
    expect(activeOption).toHaveAttribute('data-combobox-selected', 'true');
    expect(dialog.contains(activeOption)).toBe(true);
    expect(activeOption).toHaveAccessibleName('Apple');
  });

  it('still portals a Select dropdown to the body outside of a dialog', () => {
    const { container } = render(
      <Select aria-label="Fruit" data={['Apple', 'Banana']} dropdownOpened />,
      undefined,
      providerProps
    );

    const listbox = screen.getByRole('listbox', { hidden: true });
    expect(container.contains(listbox)).toBe(false);
    expect(document.querySelector('[data-mantine-modal-floating-portal]')).toBeNull();
  });

  it('respects withinPortal: false inside a modal', () => {
    render(
      <Modal opened onClose={() => {}} title="Pick" transitionProps={{ duration: 0 }}>
        <Select
          aria-label="Fruit"
          data={['Apple', 'Banana']}
          dropdownOpened
          comboboxProps={{ withinPortal: false }}
        />
      </Modal>,
      undefined,
      providerProps
    );

    const dialog = dialogByName('Pick');
    const listbox = screen.getByRole('listbox', { hidden: true });
    expect(dialog.contains(listbox)).toBe(true);
    expect(listbox.closest('[data-mantine-modal-floating-portal]')).toBeNull();
  });

  it('respects an explicit combobox portal target inside a modal', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    render(
      <Modal opened onClose={() => {}} title="Pick" transitionProps={{ duration: 0 }}>
        <Select
          aria-label="Fruit"
          data={['Apple', 'Banana']}
          dropdownOpened
          comboboxProps={{ portalProps: { target } }}
        />
      </Modal>,
      undefined,
      providerProps
    );

    const dialog = dialogByName('Pick');
    const listbox = screen.getByRole('listbox', { hidden: true });
    expect(target.contains(listbox)).toBe(true);
    expect(dialog.contains(listbox)).toBe(false);
    target.remove();
  });

  it('does not move Popover dropdowns into the modal dialog', () => {
    render(
      <Modal opened onClose={() => {}} title="Pick" transitionProps={{ duration: 0 }}>
        <Popover opened>
          <Popover.Target>
            <button type="button">Open</button>
          </Popover.Target>
          <Popover.Dropdown>popover-body</Popover.Dropdown>
        </Popover>
      </Modal>,
      undefined,
      providerProps
    );

    const dialog = dialogByName('Pick');
    const popoverBody = screen.getByText('popover-body');
    expect(dialog.contains(popoverBody)).toBe(false);
  });
});
