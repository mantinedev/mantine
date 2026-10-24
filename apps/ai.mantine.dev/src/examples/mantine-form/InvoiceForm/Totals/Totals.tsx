import { IconAlertTriangle } from '@tabler/icons-react';
import { Alert, Divider, Group, Stack, Text } from '@mantine/core';
import { computeTotals, formatMoney } from '../money';
import type { InvoiceFormType } from '../types';
import classes from './Totals.module.css';

function TotalLine({ label, value }: { label: string; value: string }) {
  return (
    <Group justify="space-between" wrap="nowrap" className={classes.line}>
      <Text size="sm">{label}</Text>
      <Text size="sm" className={classes.value}>
        {value}
      </Text>
    </Group>
  );
}

export function Totals({ form }: { form: InvoiceFormType }) {
  const items = form.useWatchValue('items');
  const currency = form.useWatchValue('currency');
  const discountEnabled = form.useWatchValue('discountEnabled');
  const discountType = form.useWatchValue('discountType');
  const discountValue = form.useWatchValue('discountValue');
  const shipping = form.useWatchValue('shipping');

  const totals = computeTotals({
    items,
    currency,
    discountEnabled,
    discountType,
    discountValue,
    shipping,
  });
  const money = (minor: number) => formatMoney(minor, currency);
  // A fresh form totals zero before any price is entered, which is not worth a warning
  const priced = items.some((item) => item.unitPrice !== '');
  const discountLabel =
    discountType === 'percentage' && discountValue !== ''
      ? `Discount ${discountValue}%`
      : 'Discount';

  return (
    <Stack gap="sm" className={classes.root}>
      <div role="group" aria-label="Totals">
        <TotalLine label="Subtotal" value={money(totals.subtotal)} />
        {discountEnabled && <TotalLine label={discountLabel} value={money(-totals.discount)} />}
        {totals.taxes.map((tax) => (
          <TotalLine key={tax.rate} label={`Tax ${tax.rate}%`} value={money(tax.amount)} />
        ))}
        {totals.shipping > 0 && <TotalLine label="Shipping" value={money(totals.shipping)} />}
        <Divider my="xs" />
        <Group justify="space-between" wrap="nowrap">
          <Text className={classes.totalLabel}>Total due</Text>
          <Text className={classes.totalValue}>{money(totals.total)}</Text>
        </Group>
      </div>

      {priced && totals.total <= 0 && (
        <Alert
          variant="default"
          color="yellow"
          icon={<IconAlertTriangle size={18} />}
          title="Total due is zero or negative"
        >
          Check the discount and the prices. You can still issue the invoice.
        </Alert>
      )}
    </Stack>
  );
}
