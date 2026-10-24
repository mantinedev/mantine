import { Checkbox, Fieldset, NativeSelect, NumberInput, Stack } from '@mantine/core';
import { getMoneyInputProps } from '../money';
import type { InvoiceFormType } from '../types';
import classes from './Adjustments.module.css';

export function Adjustments({ form }: { form: InvoiceFormType }) {
  const currency = form.useWatchValue('currency');
  const discountEnabled = form.useWatchValue('discountEnabled');
  const discountType = form.useWatchValue('discountType');
  const moneyProps = getMoneyInputProps(currency);

  const discountProps =
    discountType === 'percentage'
      ? { suffix: '%', decimalScale: 2, allowNegative: false, hideControls: true }
      : moneyProps;

  return (
    <Fieldset legend="Adjustments" classNames={{ legend: classes.legend }}>
      <Stack>
        <Stack gap="xs">
          <Checkbox
            label="Apply a discount before tax"
            {...form.getInputProps('discountEnabled', { type: 'checkbox' })}
          />
          {discountEnabled && (
            <NumberInput
              label="Discount"
              placeholder={discountType === 'percentage' ? 'Percentage' : 'Amount'}
              withAsterisk
              rightSection={
                <NativeSelect
                  aria-label="Discount type"
                  data={[
                    { value: 'percentage', label: '%' },
                    { value: 'fixed', label: currency },
                  ]}
                  variant="unstyled"
                  rightSectionWidth={28}
                  {...form.getInputProps('discountType', { withError: false })}
                />
              }
              rightSectionWidth={84}
              {...discountProps}
              {...form.getInputProps('discountValue')}
            />
          )}
        </Stack>

        <NumberInput
          label="Shipping"
          placeholder="Shipping"
          description="Taxed at the first item's rate"
          {...moneyProps}
          {...form.getInputProps('shipping')}
        />
      </Stack>
    </Fieldset>
  );
}
