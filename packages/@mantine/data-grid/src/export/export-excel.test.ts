import { renderHook } from '@testing-library/react';
import { useDataGrid } from '../hooks';
import { buildExcelXml, exportToExcel } from './export-excel';

describe('buildExcelXml', () => {
  it('outputs valid XML structure with Workbook/Worksheet/Table elements', () => {
    const xml = buildExcelXml(['Name'], [['Alice']], 'Sheet1');
    expect(xml).toContain('<?xml version="1.0"?>');
    expect(xml).toContain('<?mso-application progid="Excel.Sheet"?>');
    expect(xml).toContain('<Workbook');
    expect(xml).toContain('</Workbook>');
    expect(xml).toContain('<Worksheet ss:Name="Sheet1">');
    expect(xml).toContain('</Worksheet>');
    expect(xml).toContain('<Table>');
    expect(xml).toContain('</Table>');
  });

  it('includes headers when provided', () => {
    const xml = buildExcelXml(['Name', 'Age'], [['Alice', 30]], 'Sheet1');
    const headerRow =
      '<Row><Cell><Data ss:Type="String">Name</Data></Cell><Cell><Data ss:Type="String">Age</Data></Cell></Row>';
    expect(xml).toContain(headerRow);
  });

  it('omits header row when headers are null', () => {
    const xml = buildExcelXml(null, [['Alice', 30]], 'Sheet1');
    expect(xml).not.toContain('ss:Type="String">Name<');
    expect(xml).toContain('<Row>');
  });

  it('uses Number type for number values', () => {
    const xml = buildExcelXml(null, [[42, 3.14]], 'Sheet1');
    expect(xml).toContain('<Cell><Data ss:Type="Number">42</Data></Cell>');
    expect(xml).toContain('<Cell><Data ss:Type="Number">3.14</Data></Cell>');
  });

  it('uses String type for string values', () => {
    const xml = buildExcelXml(null, [['hello']], 'Sheet1');
    expect(xml).toContain('<Cell><Data ss:Type="String">hello</Data></Cell>');
  });

  it('uses String type for null and undefined values', () => {
    const xml = buildExcelXml(null, [[null, undefined]], 'Sheet1');
    expect(xml).toContain('<Cell><Data ss:Type="String"></Data></Cell>');
  });

  it('uses String type for NaN values', () => {
    const xml = buildExcelXml(null, [[NaN]], 'Sheet1');
    expect(xml).toContain('<Cell><Data ss:Type="String">NaN</Data></Cell>');
  });

  it('uses String type for non-finite numbers', () => {
    const xml = buildExcelXml(null, [[Infinity, -Infinity]], 'Sheet1');
    expect(xml).toContain('<Cell><Data ss:Type="String">Infinity</Data></Cell>');
    expect(xml).toContain('<Cell><Data ss:Type="String">-Infinity</Data></Cell>');
    expect(xml).not.toContain('ss:Type="Number"');
  });

  it('escapes XML special characters', () => {
    const xml = buildExcelXml(null, [['<b>bold</b>', 'A & B', '"quoted"', "it's"]], 'Sheet1');
    expect(xml).toContain('&lt;b&gt;bold&lt;/b&gt;');
    expect(xml).toContain('A &amp; B');
    expect(xml).toContain('&quot;quoted&quot;');
    expect(xml).toContain('it&apos;s');
  });

  it('escapes XML special characters in sheet name', () => {
    const xml = buildExcelXml(null, [[1]], 'Data & "Results"');
    expect(xml).toContain('ss:Name="Data &amp; &quot;Results&quot;"');
  });

  it('uses custom sheet name', () => {
    const xml = buildExcelXml(['A'], [[1]], 'MyData');
    expect(xml).toContain('<Worksheet ss:Name="MyData">');
  });

  it('handles empty rows array', () => {
    const xml = buildExcelXml(['Name'], [], 'Sheet1');
    expect(xml).toContain('<Table>');
    expect(xml).toContain('</Table>');
    expect(xml).toContain('<Row>');
  });

  it('handles empty rows with no headers', () => {
    const xml = buildExcelXml(null, [], 'Sheet1');
    expect(xml).not.toContain('<Row>');
  });

  it('handles multiple rows', () => {
    const xml = buildExcelXml(
      null,
      [
        ['Alice', 30],
        ['Bob', 25],
      ],
      'Sheet1'
    );
    const matches = xml.match(/<Row>/g);
    expect(matches).toHaveLength(2);
  });
});

describe('exportToExcel', () => {
  it('writes number cells as numbers', () => {
    const OriginalBlob = global.Blob;
    const parts: string[] = [];
    (global as any).Blob = jest.fn((content: string[]) => {
      parts.push(...content);
      return {};
    });
    const createObjectURL = jest.fn(() => 'blob:mock');
    const revokeObjectURL = jest.fn();
    Object.assign(URL, { createObjectURL, revokeObjectURL });
    const click = jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    const hook = renderHook(() =>
      useDataGrid({
        data: [{ name: 'Alice', age: 30 }],
        columns: [
          { accessorKey: 'name', header: 'Name' },
          { accessorKey: 'age', header: 'Age' },
        ],
      })
    );
    exportToExcel(hook.result.current.table);

    expect(parts.join('')).toContain('<Cell><Data ss:Type="Number">30</Data></Cell>');
    expect(parts.join('')).toContain('<Cell><Data ss:Type="String">Alice</Data></Cell>');
    expect(click).toHaveBeenCalled();

    click.mockRestore();
    global.Blob = OriginalBlob;
  });
});
