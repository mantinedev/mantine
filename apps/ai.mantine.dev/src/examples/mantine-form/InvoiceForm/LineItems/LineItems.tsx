import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { IconPlus } from '@tabler/icons-react';
import { Button, Fieldset, Group, Input, Text } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { createLineItem } from '../defaults';
import { LineItemRow } from '../LineItemRow/LineItemRow';
import { getLineAmount } from '../money';
import type { InvoiceFormType } from '../types';
import { MAX_ITEMS } from '../validation';
import classes from './LineItems.module.css';

const Required = () => <span className={classes.required}>*</span>;

export function LineItems({ form }: { form: InvoiceFormType }) {
  const items = form.useWatchValue('items');
  const currency = form.useWatchValue('currency');
  const ids = items.map((item) => item.id);
  const atMax = items.length >= MAX_ITEMS;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
      form.reorderListItem('items', {
        from: ids.indexOf(String(active.id)),
        to: ids.indexOf(String(over.id)),
      });
    }
  };

  const duplicateItem = (index: number) => {
    form.insertListItem('items', { ...form.getValues().items[index], id: randomId() }, index + 1);
  };

  return (
    <Fieldset legend="Line items" classNames={{ legend: classes.legend }}>
      <div className={classes.list}>
        <div className={classes.caption} aria-hidden>
          <Text size="xs">
            Description
            <Required />
          </Text>
          <Text size="xs">
            Quantity
            <Required />
          </Text>
          <Text size="xs">
            Unit price
            <Required />
          </Text>
          <Text size="xs">Tax rate</Text>
          <Text size="xs" ta="right">
            Amount
          </Text>
          <span />
        </div>

        <DndContext
          id="invoice-line-items"
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            {items.map((item, index) => (
              <LineItemRow
                key={item.id}
                id={item.id}
                form={form}
                index={index}
                currency={currency}
                amount={getLineAmount(item, currency)}
                canRemove={items.length > 1}
                canDuplicate={!atMax}
                onDuplicate={() => duplicateItem(index)}
                onRemove={() => form.removeListItem('items', index)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      {form.errors.items && <Input.Error mt="xs">{form.errors.items}</Input.Error>}

      <Group mt="md" gap="sm">
        <Button
          variant="default"
          leftSection={<IconPlus size={18} />}
          disabled={atMax}
          onClick={() => form.insertListItem('items', createLineItem())}
        >
          Add item
        </Button>
        {atMax && <Text size="sm">An invoice holds up to {MAX_ITEMS} items</Text>}
      </Group>
    </Fieldset>
  );
}
