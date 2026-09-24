import { memo, Profiler, startTransition, Suspense, use, useState } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Table, TableProps, TableStylesNames } from './Table';
import {
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableThead,
  TableTr,
} from './Table.components';

const defaultProps: TableProps = {
  children: (
    <>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>test-th-1</Table.Th>
          <Table.Th>test-th-2</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>test-td-1</Table.Td>
          <Table.Td>test-td-2</Table.Td>
        </Table.Tr>
      </Table.Tbody>

      <Table.Tfoot>
        <Table.Tr>
          <Table.Td>test-td-1</Table.Td>
          <Table.Td>test-td-2</Table.Td>
        </Table.Tr>
      </Table.Tfoot>

      <Table.Caption>test-caption</Table.Caption>
    </>
  ),
};

describe('@mantine/core/Table', () => {
  tests.itSupportsSystemProps<TableProps, TableStylesNames>({
    component: Table,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Table',
    stylesApiSelectors: ['table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'],
  });

  it('renders children', () => {
    render(
      <Table>
        <tbody data-test="tbody" />
      </Table>
    );
    expect(document.querySelector('[data-test="tbody"]')).toBeInTheDocument();
  });

  it('renders table rows based on data prop', () => {
    const { container } = render(
      <Table
        data={{
          head: ['test-thead'],
          body: [['test-td']],
          foot: ['test-tfoot'],
          caption: 'test-caption',
        }}
      />
    );

    expect(container.querySelectorAll('tr')).toHaveLength(3);
    expect(container.querySelector('td')).toHaveTextContent('test-td');
    expect(container.querySelector('thead th')).toHaveTextContent('test-thead');
    expect(container.querySelector('tfoot th')).toHaveTextContent('test-tfoot');
    expect(container.querySelector('caption')).toHaveTextContent('test-caption');
  });

  it('sets data-with-table-border attribute when withTableBorder prop is set', () => {
    render(<Table withTableBorder />);
    expect(screen.getByRole('table')).toHaveAttribute('data-with-table-border');
  });

  it('sets data-tabular-nums attribute when tabularNums prop is set', () => {
    const { rerender } = render(<Table tabularNums />);
    expect(screen.getByRole('table')).toHaveAttribute('data-tabular-nums');

    rerender(<Table tabularNums={false} />);
    expect(screen.getByRole('table')).not.toHaveAttribute('data-tabular-nums');
  });

  it('does not rerender memoized rows when parent rerenders with the same table props', async () => {
    let rowRenders = 0;
    const onRowRender = () => {
      rowRenders += 1;
    };

    const Row = memo(() => (
      <Profiler id="row" onRender={onRowRender}>
        <Table.Tr>
          <Table.Td>cell</Table.Td>
        </Table.Tr>
      </Profiler>
    ));

    function Demo() {
      const [counter, setCounter] = useState(0);
      return (
        <>
          <button type="button" onClick={() => setCounter((c) => c + 1)}>
            rerender {counter}
          </button>
          <Table striped>
            <Table.Tbody>
              <Row />
              <Row />
            </Table.Tbody>
          </Table>
        </>
      );
    }

    render(<Demo />);
    rowRenders = 0;
    await userEvent.click(screen.getByRole('button'));
    expect(rowRenders).toBe(0);
  });

  it('updates memoized rows when table props change', async () => {
    const Row = memo(() => (
      <Table.Tr>
        <Table.Td>cell</Table.Td>
      </Table.Tr>
    ));

    function Demo() {
      const [striped, setStriped] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setStriped(true)}>
            stripe
          </button>
          <Table striped={striped}>
            <Table.Tbody>
              <Row />
            </Table.Tbody>
          </Table>
        </>
      );
    }

    render(<Demo />);
    expect(screen.getByRole('row')).not.toHaveAttribute('data-striped');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('row')).toHaveAttribute('data-striped', 'odd');
  });

  it('updates memoized cells when classNames function depends on table props', async () => {
    const Row = memo(() => (
      <Table.Tr>
        <Table.Td>cell</Table.Td>
      </Table.Tr>
    ));

    const classNames = (_theme: any, props: TableProps) => ({
      td: props.layout === 'fixed' ? 'fixed-td' : 'auto-td',
    });

    function Demo() {
      const [layout, setLayout] = useState<'auto' | 'fixed'>('auto');
      return (
        <>
          <button type="button" onClick={() => setLayout('fixed')}>
            layout
          </button>
          <Table layout={layout} classNames={classNames}>
            <Table.Tbody>
              <Row />
            </Table.Tbody>
          </Table>
        </>
      );
    }

    render(<Demo />);
    expect(screen.getByRole('cell')).toHaveClass('auto-td');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('cell')).toHaveClass('fixed-td');
  });

  it('does not apply styles from uncommitted renders to memoized rows', async () => {
    const pending = new Promise<never>(() => {});

    function Suspender({ suspend }: { suspend: boolean }) {
      if (suspend) {
        use(pending);
      }

      return null;
    }

    const Row = memo(() => {
      const [clicks, setClicks] = useState(0);
      return (
        <Table.Tr>
          <Table.Td onClick={() => setClicks((c) => c + 1)}>clicks {clicks}</Table.Td>
        </Table.Tr>
      );
    });

    function Demo() {
      const [mode, setMode] = useState<'a' | 'b'>('a');
      return (
        <>
          <button type="button" onClick={() => startTransition(() => setMode('b'))}>
            switch
          </button>
          <Suspense fallback="loading">
            <Table classNames={{ td: mode === 'a' ? 'td-a' : 'td-b' }}>
              <Table.Tbody>
                <Row />
              </Table.Tbody>
            </Table>
            <Suspender suspend={mode === 'b'} />
          </Suspense>
        </>
      );
    }

    render(<Demo />);
    await userEvent.click(screen.getByRole('button', { name: 'switch' }));
    await userEvent.click(screen.getByRole('cell'));

    expect(screen.getByRole('cell')).toHaveTextContent('clicks 1');
    expect(screen.getByRole('cell')).toHaveClass('td-a');
    expect(screen.getByRole('cell')).not.toHaveClass('td-b');
  });

  it('exposes Table.Caption, Table.Tbody, Table.Td, Table.Tfoot, Table.Th, Table.Tr, Table.Thead components', () => {
    expect(Table.Caption).toBe(TableCaption);
    expect(Table.Tbody).toBe(TableTbody);
    expect(Table.Td).toBe(TableTd);
    expect(Table.Tfoot).toBe(TableTfoot);
    expect(Table.Th).toBe(TableTh);
    expect(Table.Tr).toBe(TableTr);
    expect(Table.Thead).toBe(TableThead);
  });
});
