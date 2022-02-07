import React from 'react';
import { createStyles, Table, ScrollArea } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  item: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  dragHandle: {
    ...theme.fn.focusStyles(),
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
  },
}));

interface DndTableProps {
  data: {
    position: number;
    mass: number;
    symbol: string;
    name: string;
  }[];
}

export function DndTable({ data }: DndTableProps) {
  const { classes } = useStyles();
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided) => (
        <tr className={classes.item} ref={provided.innerRef} {...provided.draggableProps}>
          <td>
            <div className={classes.dragHandle} {...provided.dragHandleProps}>
              <GripVertical size={18} />
            </div>
          </td>
          <td style={{ width: 80 }}>{item.position}</td>
          <td style={{ width: 120 }}>{item.name}</td>
          <td style={{ width: 80 }}>{item.symbol}</td>
          <td>{item.mass}</td>
        </tr>
      )}
    </Draggable>
  ));

  return (
    <ScrollArea>
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination.index })
        }
      >
        <Table sx={{ minWidth: 420, '& tbody tr td': { borderBottom: 0 } }}>
          <thead>
            <tr>
              <th style={{ width: 40 }} />
              <th style={{ width: 80 }}>Position</th>
              <th style={{ width: 120 }}>Name</th>
              <th style={{ width: 40 }}>Symbol</th>
              <th>Mass</th>
            </tr>
          </thead>
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <tbody {...provided.droppableProps} ref={provided.innerRef}>
                {items}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    </ScrollArea>
  );
}
