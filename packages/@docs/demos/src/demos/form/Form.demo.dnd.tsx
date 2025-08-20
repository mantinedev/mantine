import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripVertical } from '@tabler/icons-react';
import { Button, Center, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, TextInput, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { IconGripVertical } from '@tabler/icons-react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, index, form }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Group ref={setNodeRef} mt="xs" style={style} {...attributes}>
      <Center {...listeners}>
        <IconGripVertical size={18} />
      </Center>
      <TextInput
        placeholder="John Doe"
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <TextInput
        placeholder="example@mail.com"
        key={form.key(\`employees.\${index}.email\`)}
        {...form.getInputProps(\`employees.\${index}.email\`)}
      />
    </Group>
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev', key: randomId() },
        { name: 'Bill Love', email: 'bill@mantine.dev', key: randomId() },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev', key: randomId() },
        { name: 'Lim Notch', email: 'lim@mantine.dev', key: randomId() },
        { name: 'Susan Seven', email: 'susan@mantine.dev', key: randomId() },
      ],
    },
  });

  const sensors = useSensors(useSensor(PointerSensor));

  const items = form.getValues().employees.map((item) => item.key);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const employees = form.getValues().employees;
      const oldIndex = employees.findIndex((e) => e.key === active.id);
      const newIndex = employees.findIndex((e) => e.key === over.id);
      form.setFieldValue(
        'employees',
        arrayMove(employees, oldIndex, newIndex)
      );
    }
  };

  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id, index) => (
            <SortableItem key={id} id={id} index={index} form={form} />
          ))}
        </SortableContext>
      </DndContext>
      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}>
          Add employee
        </Button>
      </Group>
    </div>
  );
}
`;

function SortableItem({ id, index, form }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  } as React.CSSProperties;

  return (
    <Group ref={setNodeRef} mt="xs" style={style} {...attributes}>
      <Center {...listeners}>
        <IconGripVertical size={18} />
      </Center>
      <TextInput
        placeholder="John Doe"
        key={form.key(`employees.${index}.name`)}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <TextInput
        placeholder="example@mail.com"
        key={form.key(`employees.${index}.email`)}
        {...form.getInputProps(`employees.${index}.email`)}
      />
    </Group>
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [
        { name: 'John Doe', email: 'john@mantine.dev', key: randomId() },
        { name: 'Bill Love', email: 'bill@mantine.dev', key: randomId() },
        { name: 'Nancy Eagle', email: 'nanacy@mantine.dev', key: randomId() },
        { name: 'Lim Notch', email: 'lim@mantine.dev', key: randomId() },
        { name: 'Susan Seven', email: 'susan@mantine.dev', key: randomId() },
      ],
    },
  });

  const sensors = useSensors(useSensor(PointerSensor));
  const items = form.getValues().employees.map((item) => item.key);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const employees = form.getValues().employees;
      const oldIndex = employees.findIndex((e) => e.key === active.id);
      const newIndex = employees.findIndex((e) => e.key === over.id);
      form.setFieldValue('employees', arrayMove(employees, oldIndex, newIndex));
    }
  };

  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id, index) => (
            <SortableItem key={id} id={id} index={index} form={form} />
          ))}
        </SortableContext>
      </DndContext>
      <Group justify="center" mt="md">
        <Button
          onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}
        >
          Add employee
        </Button>
      </Group>
    </div>
  );
}

export const dnd: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 440,
};
