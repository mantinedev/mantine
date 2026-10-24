import { render, screen, userEvent, waitFor, within } from '@test-utils';
import { Notifications, notifications } from '@mantine/notifications';
import { InvoiceForm } from './InvoiceForm';
import type { InvoicePayload } from './types';

type User = ReturnType<typeof userEvent.setup>;

function renderForm(onSubmit = jest.fn<void, [InvoicePayload]>()) {
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(
    <>
      <Notifications />
      <InvoiceForm onSubmit={onSubmit} />
    </>
  );
  return { user, onSubmit };
}

const field = (name: string) => screen.getByRole('textbox', { name });
const item = (index: number) => screen.getByRole('group', { name: `Item ${index}` });
const submit = (user: User) => user.click(screen.getByRole('button', { name: 'Issue invoice' }));
const saveDraft = (user: User) => user.click(screen.getByRole('button', { name: 'Save as draft' }));

// The error summary repeats every message, the inline one is outside of it
const inlineError = (message: string) =>
  screen.getAllByText(message).find((element) => !element.closest('[role="alert"]'));

function dateValue(name: string) {
  const part = (unit: string) =>
    (screen.getByLabelText(`${name} ${unit}`) as HTMLInputElement).value;
  return `${part('day')}/${part('month')}/${part('year')}`;
}

async function typeDate(user: User, name: string, [day, month, year]: [string, string, string]) {
  await user.click(screen.getByLabelText(`${name} day`));
  await user.keyboard(day);
  await user.click(screen.getByLabelText(`${name} month`));
  await user.keyboard(month);
  await user.click(screen.getByLabelText(`${name} year`));
  await user.keyboard(year);
}

async function pick(user: User, name: string, option: string) {
  await user.click(screen.getByRole('combobox', { name }));
  await user.click(screen.getByRole('option', { name: option }));
}

async function fillItem(
  user: User,
  index: number,
  { description, quantity, price }: { description: string; quantity: string; price: string }
) {
  await user.type(field(`Item ${index} description`), description);
  await user.clear(field(`Item ${index} quantity`));
  await user.type(field(`Item ${index} quantity`), quantity);
  await user.type(field(`Item ${index} unit price`), price);
}

async function fillValidInvoice(user: User) {
  await pick(user, 'Client', 'Acme Corporation');
  await fillItem(user, 1, { description: 'Design work', quantity: '10', price: '100' });
}

function totalLine(label: string) {
  return within(screen.getByRole('group', { name: 'Totals' })).getByText(label).nextElementSibling
    ?.textContent;
}

// jsdom has no layout: give item rows stacked positions so the dnd-kit keyboard sensor finds neighbours
function stackItemRows() {
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function rect(
    this: HTMLElement
  ) {
    const rows = [...document.querySelectorAll('[role="group"][aria-label^="Item "]')];
    const index = rows.indexOf(this.closest('[role="group"][aria-label^="Item "]') as Element);
    const top = index < 0 ? 0 : index * 60;
    const height = index < 0 ? 0 : 50;
    return {
      x: 0,
      y: top,
      top,
      left: 0,
      width: 800,
      height,
      right: 800,
      bottom: top + height,
      toJSON: () => ({}),
    };
  });
}

async function moveItem(user: User, index: number, key: '{ArrowUp}' | '{ArrowDown}') {
  stackItemRows();
  screen.getByRole('button', { name: `Reorder item ${index}` }).focus();
  await user.keyboard('[Space]');
  await user.keyboard(key);
  await user.keyboard('[Space]');
}

const itemDescriptions = () =>
  screen
    .getAllByRole('textbox', { name: /^Item \d+ description$/ })
    .map((input) => (input as HTMLInputElement).value);

beforeEach(() => {
  jest.useFakeTimers({ now: new Date(2026, 9, 17, 12), advanceTimers: true });
});

afterEach(() => {
  jest.restoreAllMocks();
  notifications.clean();
  jest.useRealTimers();
});

describe('invoice details', () => {
  it('pre-fills the next invoice number', () => {
    renderForm();
    expect(field('Invoice number')).toHaveValue('INV-0042');
  });

  it('defaults the issue date to today and the due date to 30 days later', () => {
    renderForm();
    expect(dateValue('Issue date')).toBe('17/10/2026');
    expect(dateValue('Due date')).toBe('16/11/2026');
  });

  it('shows the billing address of the selected client', async () => {
    const { user } = renderForm();
    await pick(user, 'Client', 'Globex GmbH');

    const address = screen.getByRole('group', { name: 'Billing address' });
    expect(within(address).getByText('Friedrichstraße 68')).toBeInTheDocument();
    expect(within(address).getByText('10117 Berlin')).toBeInTheDocument();
  });

  it('moves the due date by the same amount when the issue date changes', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Issue date', ['20', '10', '2026']);

    expect(dateValue('Due date')).toBe('19/11/2026');
  });

  it('keeps a due date the user has edited when the issue date changes', async () => {
    const { user } = renderForm();
    await typeDate(user, 'Due date', ['01', '12', '2026']);
    await typeDate(user, 'Issue date', ['20', '10', '2026']);

    expect(dateValue('Due date')).toBe('01/12/2026');
  });

  it('rejects a due date before the issue date', async () => {
    const { user } = renderForm();
    await fillValidInvoice(user);
    await typeDate(user, 'Due date', ['10', '10', '2026']);
    await submit(user);

    expect(inlineError('Due date cannot be before the issue date')).toBeInTheDocument();
  });

  it('formats money in the selected currency', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Design work', quantity: '2', price: '50' });
    await pick(user, 'Currency', 'EUR – Euro');

    expect(within(item(1)).getByText('€100.00')).toBeInTheDocument();
  });

  it('shows yen amounts without decimals', async () => {
    const { user } = renderForm();
    await pick(user, 'Currency', 'JPY – Japanese yen');
    await fillItem(user, 1, { description: 'Design work', quantity: '3', price: '1500' });

    expect(within(item(1)).getByText('¥4,500')).toBeInTheDocument();
    expect(totalLine('Total due')).toBe('¥5,355');
  });
});

describe('line items', () => {
  it('shows the amount of an item as quantity times unit price', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Design work', quantity: '2.5', price: '80' });

    expect(within(item(1)).getByText('$200.00')).toBeInTheDocument();
  });

  it('requires a description', async () => {
    const { user } = renderForm();
    await submit(user);

    expect(inlineError('Enter a description')).toBeInTheDocument();
  });

  it('rejects a quantity of zero', async () => {
    const { user } = renderForm();
    await user.clear(field('Item 1 quantity'));
    await user.type(field('Item 1 quantity'), '0');
    await user.tab();

    expect(inlineError('Quantity must be greater than 0')).toBeInTheDocument();
  });

  it('requires a unit price', async () => {
    const { user } = renderForm();
    await submit(user);

    expect(inlineError('Enter a unit price')).toBeInTheDocument();
  });

  it('reveals a custom tax rate input when the custom rate is picked', async () => {
    const { user } = renderForm();
    expect(
      screen.queryByRole('textbox', { name: 'Item 1 custom tax rate' })
    ).not.toBeInTheDocument();

    await pick(user, 'Item 1 tax rate', 'Custom');

    expect(field('Item 1 custom tax rate')).toBeInTheDocument();
  });

  it('rejects a custom tax rate above 100', async () => {
    const { user } = renderForm();
    await pick(user, 'Item 1 tax rate', 'Custom');
    await user.type(field('Item 1 custom tax rate'), '120');
    await user.tab();

    expect(inlineError('Tax rate must be between 0 and 100')).toBeInTheDocument();
  });

  it('adds an empty item without errors', async () => {
    const { user } = renderForm();
    await user.click(screen.getByRole('button', { name: 'Add item' }));

    expect(field('Item 2 description')).toHaveValue('');
    expect(field('Item 2 description')).not.toHaveAttribute('aria-invalid', 'true');
  });

  it('does not allow removing the last remaining item', () => {
    renderForm();
    expect(screen.getByRole('button', { name: 'Remove item 1' })).toBeDisabled();
  });

  it('removes an item', async () => {
    const { user } = renderForm();
    await user.type(field('Item 1 description'), 'Design');
    await user.click(screen.getByRole('button', { name: 'Add item' }));
    await user.type(field('Item 2 description'), 'Hosting');
    await user.click(screen.getByRole('button', { name: 'Remove item 1' }));

    expect(itemDescriptions()).toEqual(['Hosting']);
  });

  it('inserts a copy right below the duplicated item', async () => {
    const { user } = renderForm();
    await user.type(field('Item 1 description'), 'Design');
    await user.click(screen.getByRole('button', { name: 'Add item' }));
    await user.type(field('Item 2 description'), 'Hosting');
    await user.click(screen.getByRole('button', { name: 'Duplicate item 1' }));

    expect(itemDescriptions()).toEqual(['Design', 'Design', 'Hosting']);
  });

  it('reorders items with the keyboard', async () => {
    const { user } = renderForm();
    await user.type(field('Item 1 description'), 'Design');
    await user.click(screen.getByRole('button', { name: 'Add item' }));
    await user.type(field('Item 2 description'), 'Hosting');

    await moveItem(user, 1, '{ArrowDown}');

    await waitFor(() => expect(itemDescriptions()).toEqual(['Hosting', 'Design']));
  });

  it('stops adding items at 50', async () => {
    const { user } = renderForm();
    const add = screen.getByRole('button', { name: 'Add item' });
    for (let count = 1; count < 50; count += 1) {
      await user.click(add);
    }

    expect(add).toBeDisabled();
    expect(screen.getByText('An invoice holds up to 50 items')).toBeInTheDocument();
  });
});

describe('totals', () => {
  it('shows one tax line per distinct rate', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Design', quantity: '1', price: '100' });
    await user.click(screen.getByRole('button', { name: 'Add item' }));
    await fillItem(user, 2, { description: 'Books', quantity: '1', price: '50' });
    await pick(user, 'Item 2 tax rate', '7%');

    expect(totalLine('Subtotal')).toBe('$150.00');
    expect(totalLine('Tax 19%')).toBe('$19.00');
    expect(totalLine('Tax 7%')).toBe('$3.50');
    expect(totalLine('Total due')).toBe('$172.50');
  });

  it('applies a percentage discount to the subtotal before tax', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Design', quantity: '1', price: '100' });
    await user.click(screen.getByRole('checkbox', { name: 'Apply a discount before tax' }));
    await user.type(field('Discount'), '10');

    expect(totalLine('Discount 10%')).toBe('-$10.00');
    expect(totalLine('Tax 19%')).toBe('$17.10');
    expect(totalLine('Total due')).toBe('$107.10');
  });

  it('applies a fixed discount in the invoice currency', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Design', quantity: '1', price: '100' });
    await user.click(screen.getByRole('checkbox', { name: 'Apply a discount before tax' }));
    await user.selectOptions(screen.getByRole('combobox', { name: 'Discount type' }), 'USD');
    await user.type(field('Discount'), '20');

    expect(totalLine('Discount')).toBe('-$20.00');
    expect(totalLine('Total due')).toBe('$95.20');
  });

  it('taxes shipping at the rate of the first item', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Books', quantity: '1', price: '100' });
    await pick(user, 'Item 1 tax rate', '7%');
    await user.type(field('Shipping'), '10');

    expect(totalLine('Shipping')).toBe('$10.00');
    expect(totalLine('Tax 7%')).toBe('$7.70');
    expect(totalLine('Total due')).toBe('$117.70');
  });

  it('warns when the total due is zero or negative', async () => {
    const { user } = renderForm();
    await fillItem(user, 1, { description: 'Design', quantity: '1', price: '0' });

    expect(screen.getByText('Total due is zero or negative')).toBeInTheDocument();
  });

  it('issues an invoice with a negative total', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidInvoice(user);
    await user.click(screen.getByRole('checkbox', { name: 'Apply a discount before tax' }));
    await user.selectOptions(screen.getByRole('combobox', { name: 'Discount type' }), 'USD');
    await user.type(field('Discount'), '2000');
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ totals: expect.objectContaining({ total: -100000 }) })
    );
  });
});

describe('payment', () => {
  it('sets the due date from the picked payment terms', async () => {
    const { user } = renderForm();
    await pick(user, 'Payment terms', 'Net 15');

    expect(dateValue('Due date')).toBe('01/11/2026');
  });

  it('sets the due date from custom payment terms', async () => {
    const { user } = renderForm();
    await pick(user, 'Payment terms', 'Custom');
    await user.type(field('Days until due'), '45');

    expect(dateValue('Due date')).toBe('01/12/2026');
  });

  it('requires the number of days for custom payment terms', async () => {
    const { user } = renderForm();
    await fillValidInvoice(user);
    await pick(user, 'Payment terms', 'Custom');
    await submit(user);

    expect(inlineError('Enter between 1 and 180 days')).toBeInTheDocument();
  });

  it('limits custom payment terms to 180 days', async () => {
    const { user } = renderForm();
    await pick(user, 'Payment terms', 'Custom');
    await user.type(field('Days until due'), '200');
    await user.tab();

    expect(field('Days until due')).toHaveValue('180');
  });

  it('requires at least one payment method', async () => {
    const { user } = renderForm();
    await fillValidInvoice(user);
    await user.click(screen.getByRole('checkbox', { name: 'Bank transfer' }));
    await submit(user);

    expect(inlineError('Select at least one payment method')).toBeInTheDocument();
  });

  it('counts the characters of the notes', async () => {
    const { user } = renderForm();
    await user.type(field('Notes to the client'), 'Thank you');

    expect(screen.getByText('9/500')).toBeInTheDocument();
  });
});

describe('submit', () => {
  it('focuses the first invalid field', async () => {
    const { user } = renderForm();
    await submit(user);

    expect(screen.getByRole('combobox', { name: 'Client' })).toHaveFocus();
  });

  it('lists the errors in a summary above the actions', async () => {
    const { user } = renderForm();
    await submit(user);

    const summary = screen.getByRole('alert');
    expect(within(summary).getByRole('button', { name: 'Client' })).toBeInTheDocument();
    expect(within(summary).getByRole('button', { name: 'Item 1 description' })).toBeInTheDocument();
  });

  it('shows the invoice number and total due in a notification', async () => {
    const { user } = renderForm();
    await fillValidInvoice(user);
    await submit(user);

    expect(await screen.findByText('Invoice issued')).toBeInTheDocument();
    expect(screen.getByText('INV-0042 · $1,190.00')).toBeInTheDocument();
  });

  it('submits money as minor units', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidInvoice(user);
    await user.type(field('Purchase order number'), 'PO-7');
    await submit(user);

    expect(onSubmit).toHaveBeenCalledWith({
      status: 'issued',
      invoiceNumber: 'INV-0042',
      client: expect.objectContaining({ id: 'acme', name: 'Acme Corporation' }),
      issueDate: '2026-10-17',
      dueDate: '2026-11-16',
      currency: 'USD',
      purchaseOrderNumber: 'PO-7',
      items: [
        {
          description: 'Design work',
          quantity: 10,
          unit: 'hours',
          unitPrice: 10000,
          taxRate: 19,
          amount: 100000,
        },
      ],
      discount: { type: 'none', amount: 0 },
      shipping: 0,
      totals: {
        subtotal: 100000,
        discount: 0,
        taxes: [{ rate: 19, amount: 19000 }],
        shipping: 0,
        total: 119000,
      },
      payment: { terms: 'net30', termDays: 30, methods: ['bank_transfer'] },
      notes: '',
      internalMemo: '',
    });
  });

  it('shows the invoice JSON under the form', async () => {
    const { user } = renderForm();
    await fillValidInvoice(user);
    await submit(user);

    const json = screen.getByRole('heading', { name: 'Invoice JSON' }).nextElementSibling;
    expect(JSON.parse(json?.textContent ?? '')).toMatchObject({
      status: 'issued',
      totals: { total: 119000 },
    });
  });

  it('submits items in their displayed order', async () => {
    const { user, onSubmit } = renderForm();
    await fillValidInvoice(user);
    await user.click(screen.getByRole('button', { name: 'Add item' }));
    await fillItem(user, 2, { description: 'Hosting', quantity: '1', price: '20' });
    await moveItem(user, 2, '{ArrowUp}');
    await waitFor(() => expect(itemDescriptions()).toEqual(['Hosting', 'Design work']));
    await submit(user);

    expect(onSubmit.mock.calls[0][0].items.map((line) => line.description)).toEqual([
      'Hosting',
      'Design work',
    ]);
  });

  it('keeps the form values after submit', async () => {
    const { user } = renderForm();
    await fillValidInvoice(user);
    await submit(user);

    expect(field('Item 1 description')).toHaveValue('Design work');
    expect(screen.getByRole('combobox', { name: 'Client' })).toHaveValue('Acme Corporation');
  });
});

describe('save as draft', () => {
  it('saves a draft without validating line items', async () => {
    const { user, onSubmit } = renderForm();
    await pick(user, 'Client', 'Acme Corporation');
    await saveDraft(user);

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ status: 'draft', invoiceNumber: 'INV-0042' })
    );
  });

  it('shows a draft notification', async () => {
    const { user } = renderForm();
    await pick(user, 'Client', 'Acme Corporation');
    await saveDraft(user);

    expect(await screen.findByText('Draft saved')).toBeInTheDocument();
  });

  it('requires a client for a draft', async () => {
    const { user, onSubmit } = renderForm();
    await saveDraft(user);

    expect(inlineError('Select a client')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Client' })).toHaveFocus();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('requires an invoice number for a draft', async () => {
    const { user, onSubmit } = renderForm();
    await pick(user, 'Client', 'Acme Corporation');
    await user.clear(field('Invoice number'));
    await saveDraft(user);

    expect(inlineError('Enter an invoice number')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
