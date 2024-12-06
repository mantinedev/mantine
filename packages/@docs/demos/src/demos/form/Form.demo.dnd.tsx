import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import { Button, Center, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, TextInput, Button, Center } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';

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

  const fields = form.getValues().employees.map((item, index) => (
    <Draggable key={item.key} index={index} draggableId={item.key}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
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
      )}
    </Draggable>
  ));

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          destination?.index !== undefined && form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group justify="center" mt="md">
        <Button onClick={() => form.insertListItem('employees', { name: '', email: '', key: randomId() })}>
          Add employee
        </Button>
      </Group>
    </div>
  );
}
`;

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

  const fields = form.getValues().employees.map((item, index) => (
    <Draggable key={item.key} index={index} draggableId={item.key}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
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
      )}
    </Draggable>
  ));

  return (
    <div>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          destination?.index !== undefined &&
          form.reorderListItem('employees', { from: source.index, to: destination?.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

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
