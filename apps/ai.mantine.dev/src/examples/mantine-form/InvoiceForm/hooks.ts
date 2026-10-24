import dayjs from 'dayjs';
import { useRef } from 'react';
import { getTermDays } from './payload';
import type { InvoiceFormType } from './types';
import { getCurrency } from './validation';

const DATE_FORMAT = 'YYYY-MM-DD';

const addDays = (date: string, days: number) => dayjs(date).add(days, 'day').format(DATE_FORMAT);

export function useDueDateSync(form: InvoiceFormType) {
  // The due date follows the issue date and the payment terms until the user types a due date
  const generatedDueDate = useRef(form.getValues().dueDate);
  const dueDateEdited = useRef(false);
  const lastIssueDate = useRef(form.getValues().issueDate);

  const setDueDate = (value: string) => {
    generatedDueDate.current = value;
    dueDateEdited.current = false;
    form.setFieldValue('dueDate', value);
  };

  const applyTerms = () => {
    const values = form.getValues();
    const days = getTermDays(values);
    if (values.issueDate && days !== null && Number.isInteger(days) && days >= 0 && days <= 180) {
      setDueDate(addDays(values.issueDate, days));
    }
  };

  form.watch('dueDate', ({ value }) => {
    if (value !== generatedDueDate.current) {
      dueDateEdited.current = true;
    }
  });

  form.watch('issueDate', ({ value }) => {
    // The masked input reports null while a part is incomplete: shift from the last complete date
    if (!value) {
      return;
    }
    const previous = lastIssueDate.current;
    lastIssueDate.current = value;
    const { dueDate } = form.getValues();

    if (!dueDateEdited.current && previous && dueDate) {
      setDueDate(addDays(dueDate, dayjs(value).diff(previous, 'day')));
    } else if (form.errors.dueDate) {
      form.validateField('dueDate');
    }
  });

  form.watch('paymentTerms', applyTerms);
  form.watch('customTermDays', applyTerms);
}

export function useWholeAmountsForCurrency(form: InvoiceFormType) {
  // Money inputs drop decimals for JPY: round the stored amounts so totals match what is displayed
  form.watch('currency', ({ value }) => {
    const factor = 10 ** getCurrency(value).decimals;
    const roundField = (path: string, amount: number | string) => {
      const rounded = amount === '' ? amount : Math.round(Number(amount) * factor) / factor;
      if (rounded !== amount) {
        form.setFieldValue(path, rounded);
      }
    };
    const values = form.getValues();

    values.items.forEach((item, index) => roundField(`items.${index}.unitPrice`, item.unitPrice));
    roundField('shipping', values.shipping);
    if (values.discountType === 'fixed') {
      roundField('discountValue', values.discountValue);
    }
  });
}

export function useClearHiddenErrors(form: InvoiceFormType) {
  form.watch('discountEnabled', ({ value }) => {
    if (!value) {
      form.clearFieldError('discountValue');
    }
  });

  form.watch('paymentTerms', ({ value }) => {
    if (value !== 'custom') {
      form.clearFieldError('customTermDays');
    }
  });
}
