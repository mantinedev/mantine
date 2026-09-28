import { buildCsvString, escapeCsvValue } from './export-csv';

describe('escapeCsvValue', () => {
  it('returns value unchanged when no special characters', () => {
    expect(escapeCsvValue('hello', ',')).toBe('hello');
  });

  it('wraps value with quotes when it contains the delimiter', () => {
    expect(escapeCsvValue('Smith, John', ',')).toBe('"Smith, John"');
  });

  it('escapes double quotes by doubling them', () => {
    expect(escapeCsvValue('Say "hello"', ',')).toBe('"Say ""hello"""');
  });

  it('wraps value with quotes when it contains newlines', () => {
    expect(escapeCsvValue('Line1\nLine2', ',')).toBe('"Line1\nLine2"');
  });

  it('wraps value with quotes when it contains carriage returns', () => {
    expect(escapeCsvValue('Line1\rLine2', ',')).toBe('"Line1\rLine2"');
  });

  it('escapes when value contains custom delimiter', () => {
    expect(escapeCsvValue('Hello\tWorld', '\t')).toBe('"Hello\tWorld"');
  });

  it('does not wrap when custom delimiter is not present', () => {
    expect(escapeCsvValue('Hello, World', '\t')).toBe('Hello, World');
  });

  it('handles empty string', () => {
    expect(escapeCsvValue('', ',')).toBe('');
  });

  it('handles value with both quotes and delimiter', () => {
    expect(escapeCsvValue('"A",B', ',')).toBe('"""A"",B"');
  });
});

describe('buildCsvString', () => {
  it('builds CSV with headers and rows', () => {
    const csv = buildCsvString(
      ['Name', 'Age', 'City'],
      [
        ['Alice', '30', 'NYC'],
        ['Bob', '25', 'LA'],
      ],
      ','
    );
    expect(csv).toBe('Name,Age,City\nAlice,30,NYC\nBob,25,LA');
  });

  it('builds CSV without headers when null', () => {
    const csv = buildCsvString(
      null,
      [
        ['Alice', '30'],
        ['Bob', '25'],
      ],
      ','
    );
    expect(csv).toBe('Alice,30\nBob,25');
  });

  it('uses custom delimiter', () => {
    const csv = buildCsvString(['Name', 'Age'], [['Alice', '30']], '\t');
    expect(csv).toBe('Name\tAge\nAlice\t30');
  });

  it('escapes values in rows', () => {
    const csv = buildCsvString(null, [['Smith, John', '40']], ',');
    expect(csv).toBe('"Smith, John",40');
  });

  it('escapes values in headers', () => {
    const csv = buildCsvString(['Full, Name', 'Age'], [['Alice', '30']], ',');
    expect(csv).toBe('"Full, Name",Age\nAlice,30');
  });

  it('handles empty rows array', () => {
    const csv = buildCsvString(['Name', 'Age'], [], ',');
    expect(csv).toBe('Name,Age');
  });

  it('handles empty rows with no headers', () => {
    const csv = buildCsvString(null, [], ',');
    expect(csv).toBe('');
  });

  it('handles single column', () => {
    const csv = buildCsvString(['X'], [['1'], ['2'], ['3']], ',');
    expect(csv).toBe('X\n1\n2\n3');
  });
});
