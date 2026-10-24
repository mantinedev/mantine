import {
  Checkbox,
  Fieldset,
  NumberInput,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@mantine/core';
import type { InvoiceFormType } from '../types';
import { NOTES_MAX_LENGTH, PAYMENT_METHODS, PAYMENT_TERMS } from '../validation';
import classes from './Payment.module.css';

export function Payment({ form }: { form: InvoiceFormType }) {
  const paymentTerms = form.useWatchValue('paymentTerms');
  const notes = form.useWatchValue('notes');

  return (
    <Fieldset legend="Payment" classNames={{ legend: classes.legend }}>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Stack gap="xs">
            <Select
              label="Payment terms"
              placeholder="Payment terms"
              data={PAYMENT_TERMS.map(({ value, label }) => ({ value, label }))}
              allowDeselect={false}
              withAsterisk
              {...form.getInputProps('paymentTerms')}
            />
            {paymentTerms === 'custom' && (
              <NumberInput
                label="Days until due"
                placeholder="1 to 180"
                min={1}
                max={180}
                allowDecimal={false}
                allowNegative={false}
                hideControls
                withAsterisk
                {...form.getInputProps('customTermDays')}
              />
            )}
          </Stack>

          <Checkbox.Group
            label="Accepted payment methods"
            withAsterisk
            {...form.getInputProps('paymentMethods')}
          >
            <Stack gap="xs" mt="xs">
              {PAYMENT_METHODS.map((method) => (
                <Checkbox key={method.value} value={method.value} label={method.label} />
              ))}
            </Stack>
          </Checkbox.Group>
        </SimpleGrid>

        <Textarea
          label="Notes to the client"
          placeholder="Thank you for your business"
          autosize
          minRows={3}
          maxRows={8}
          maxLength={NOTES_MAX_LENGTH}
          bottomSection={
            <Text size="xs" ta="right" c={notes.length >= NOTES_MAX_LENGTH ? 'red' : undefined}>
              {notes.length}/{NOTES_MAX_LENGTH}
            </Text>
          }
          {...form.getInputProps('notes')}
        />

        <Textarea
          label="Internal memo"
          description="Only visible to your team, never shown to the client"
          placeholder="Internal memo"
          autosize
          minRows={2}
          maxRows={6}
          {...form.getInputProps('internalMemo')}
        />
      </Stack>
    </Fieldset>
  );
}
