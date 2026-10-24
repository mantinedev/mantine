import { useState } from 'react';
import { Button, Code, Group, Stack, Title } from '@mantine/core';
import {
  FORM_INDEX,
  useForm,
  type FormErrors,
  type FormFieldValidationResult,
} from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { Adjustments } from './Adjustments/Adjustments';
import { SAVED_CLIENTS } from './clients';
import { getInitialValues } from './defaults';
import { ErrorSummary } from './ErrorSummary';
import { useClearHiddenErrors, useDueDateSync, useWholeAmountsForCurrency } from './hooks';
import { InvoiceDetails } from './InvoiceDetails/InvoiceDetails';
import { LineItems } from './LineItems/LineItems';
import { formatMoney } from './money';
import { buildPayload } from './payload';
import { Payment } from './Payment/Payment';
import { Totals } from './Totals/Totals';
import type { Client, InvoicePayload, InvoiceValues } from './types';
import { DRAFT_FIELDS, invoiceRules } from './validation';

interface InvoiceFormProps {
  clients?: Client[];
  nextInvoiceNumber?: string;
  onSubmit?: (payload: InvoicePayload) => void;
}

// preventDefault keeps focus in the field so its blur error does not shift the button under the pointer
const keepFocus = (event: React.MouseEvent) => event.preventDefault();

export function InvoiceForm({
  clients = SAVED_CLIENTS,
  nextInvoiceNumber = 'INV-0042',
  onSubmit,
}: InvoiceFormProps) {
  const [payload, setPayload] = useState<InvoicePayload | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const form = useForm<InvoiceValues, InvoicePayload>({
    name: 'invoice',
    initialValues: getInitialValues(nextInvoiceNumber),
    validate: invoiceRules,
    validateInputOnBlur: [
      `items.${FORM_INDEX}.quantity`,
      `items.${FORM_INDEX}.unitPrice`,
      `items.${FORM_INDEX}.customTaxRate`,
      'discountValue',
      'customTermDays',
    ],
    transformValues: (values) => buildPayload(values, clients),
  });

  useDueDateSync(form);
  useWholeAmountsForCurrency(form);
  useClearHiddenErrors(form);

  const focusField = (path: string) => {
    const node = form.getInputNode(path);
    // Date inputs and checkbox groups put data-path on a wrapper
    const target = node?.matches('input, textarea, select') ? node : node?.querySelector('input');
    (target ?? node)?.focus();
  };

  const focusFirstError = (errors: FormErrors) => {
    const [first] = Object.keys(errors)
      .map((path) => ({ path, node: form.getInputNode(path) }))
      .filter((entry): entry is { path: string; node: HTMLElement } => entry.node !== null)
      .sort((a, b) =>
        a.node.compareDocumentPosition(b.node) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
      );
    first && focusField(first.path);
  };

  const handleErrors = (errors: FormErrors) => {
    setShowSummary(true);
    focusFirstError(errors);
  };

  const publish = (invoice: InvoicePayload) => {
    setShowSummary(false);
    setPayload(invoice);
    onSubmit?.(invoice);
    notifications.show({
      title: invoice.status === 'draft' ? 'Draft saved' : 'Invoice issued',
      message: `${invoice.invoiceNumber} · ${formatMoney(invoice.totals.total, invoice.currency)}`,
    });
  };

  const handleSaveDraft = () => {
    form.clearErrors();
    const errors: FormErrors = {};
    DRAFT_FIELDS.forEach((field) => {
      // All rules are synchronous
      const result = form.validateField(field) as FormFieldValidationResult;
      if (result.hasError) {
        errors[field] = result.error;
      }
    });

    if (Object.keys(errors).length > 0) {
      handleErrors(errors);
      return;
    }

    publish({ ...form.getTransformedValues(), status: 'draft' });
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(publish, handleErrors)} noValidate>
        <Stack gap="xl">
          <Title order={2} c="var(--mantine-color-bright)">
            New invoice
          </Title>
          <InvoiceDetails form={form} clients={clients} />
          <LineItems form={form} />
          <Adjustments form={form} />
          <Payment form={form} />
          <Totals form={form} />
          {showSummary && <ErrorSummary form={form} onSelect={focusField} />}
          <Group justify="flex-end">
            <Button variant="default" onMouseDown={keepFocus} onClick={handleSaveDraft}>
              Save as draft
            </Button>
            <Button type="submit" onMouseDown={keepFocus}>
              Issue invoice
            </Button>
          </Group>
        </Stack>
      </form>

      {payload && (
        <Stack gap="xs">
          <Title order={4}>Invoice JSON</Title>
          <Code block>{JSON.stringify(payload, null, 2)}</Code>
        </Stack>
      )}
    </Stack>
  );
}
