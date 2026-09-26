import { renderHook } from '@testing-library/react';
import { useDataGrid } from '../hooks';
import { exportToPrint } from './export-print';

describe('exportToPrint', () => {
  it('prints values with newlines, quotes and commas as single cells', () => {
    const printDocument = document.implementation.createHTMLDocument('print');
    const printWindow = {
      document: printDocument,
      focus: jest.fn(),
      print: jest.fn(),
      close: jest.fn(),
    };
    const openSpy = jest.spyOn(window, 'open').mockReturnValue(printWindow as any);

    const { result } = renderHook(() =>
      useDataGrid({
        data: [
          { name: 'Line 1\nLine 2', note: 'Say "hi", then leave' },
          { name: 'Bob', note: '' },
        ],
        columns: [
          { accessorKey: 'name', header: 'Name' },
          { accessorKey: 'note', header: 'Note' },
        ],
      })
    );

    exportToPrint(result.current.table);

    const bodyRows = Array.from(printDocument.querySelectorAll('tbody tr'));
    expect(bodyRows).toHaveLength(2);
    expect(Array.from(bodyRows[0].querySelectorAll('td')).map((td) => td.textContent)).toEqual([
      'Line 1\nLine 2',
      'Say "hi", then leave',
    ]);
    expect(
      Array.from(printDocument.querySelectorAll('thead th')).map((th) => th.textContent)
    ).toEqual(['Name', 'Note']);
    expect(printWindow.print).toHaveBeenCalled();
    openSpy.mockRestore();
  });

  it('sets the print document title as plain text', () => {
    const printDocument = document.implementation.createHTMLDocument('print');
    const printWindow = {
      document: printDocument,
      focus: jest.fn(),
      print: jest.fn(),
      close: jest.fn(),
    };
    const openSpy = jest.spyOn(window, 'open').mockReturnValue(printWindow as any);
    const { result } = renderHook(() =>
      useDataGrid({ data: [{ name: 'Bob' }], columns: [{ accessorKey: 'name', header: 'Name' }] })
    );

    exportToPrint(result.current.table, { title: 'Sales & <Revenue>' });

    expect(printDocument.title).toBe('Sales & <Revenue>');
    openSpy.mockRestore();
  });
});
