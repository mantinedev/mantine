import { render, tests } from '@mantine-tests/core';
import { encodeQR } from './encode-qr';
import { QRCode, QRCodeProps, QRCodeStylesNames } from './QRCode';

const defaultProps: QRCodeProps = {
  value: 'https://mantine.dev',
  logo: <span>logo</span>,
};

describe('@mantine/core/QRCode', () => {
  tests.itSupportsSystemProps<QRCodeProps, QRCodeStylesNames>({
    component: QRCode,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/QRCode',
    stylesApiSelectors: ['root', 'svg', 'logo'],
  });

  it('renders an accessible svg with a non-empty path', () => {
    const { container } = render(<QRCode value="https://mantine.dev" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute('aria-label', 'https://mantine.dev');

    const path = svg.querySelector('path')!;
    expect(path.getAttribute('d')!.length).toBeGreaterThan(0);
  });

  it('renders the logo overlay only when logo is set', () => {
    const { container, rerender } = render(<QRCode value="test" />);
    expect(container.querySelector('.mantine-QRCode-logo')).not.toBeInTheDocument();

    rerender(<QRCode value="test" logo={<span>logo</span>} />);
    expect(container.querySelector('.mantine-QRCode-logo')).toBeInTheDocument();
  });

  it('includes the quiet zone (margin) in the svg viewBox', () => {
    const { matrix } = encodeQR('test');
    const { container } = render(<QRCode value="test" margin={4} />);
    const viewBox = container.querySelector('svg')!.getAttribute('viewBox');
    expect(viewBox).toBe(`0 0 ${matrix.length + 8} ${matrix.length + 8}`);
  });

  it('normalizes margin to a finite integer >= 0', () => {
    const { size } = encodeQR('test');
    const getViewBox = (margin: number) =>
      render(<QRCode value="test" margin={margin} />)
        .container.querySelector('svg')!
        .getAttribute('viewBox');

    expect(getViewBox(-3)).toBe(`0 0 ${size} ${size}`);
    expect(getViewBox(2.7)).toBe(`0 0 ${size + 4} ${size + 4}`);
    expect(getViewBox(NaN)).toBe(`0 0 ${size + 8} ${size + 8}`);
  });

  it('renders an empty code instead of throwing when the value exceeds the capacity', () => {
    const { container } = render(<QRCode value={'a'.repeat(3000)} />);
    const root = container.querySelector('.mantine-QRCode-root');
    expect(root).toBeInTheDocument();

    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('viewBox', '0 0 8 8');
    expect(svg).toHaveAttribute('role', 'img');
    expect(svg).toHaveAttribute('aria-label', 'a'.repeat(3000));
    expect(svg.querySelector('path')).not.toBeInTheDocument();
  });

  it('renders a value with a lone surrogate (sliced emoji)', () => {
    const { container } = render(<QRCode value={'hi 🚀'.slice(0, 4)} />);
    expect(container.querySelector('path')!.getAttribute('d')!.length).toBeGreaterThan(0);
  });

  it('uses value as the svg accessible name by default', () => {
    const { container } = render(<QRCode value="https://mantine.dev" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'https://mantine.dev');
  });

  it('forwards aria-label and aria-labelledby props to the svg', () => {
    const { container } = render(
      <QRCode value="https://mantine.dev" aria-label="Link to mantine.dev" aria-labelledby="t" />
    );
    const root = container.querySelector('.mantine-QRCode-root')!;
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveAttribute('aria-label', 'Link to mantine.dev');
    expect(svg).toHaveAttribute('aria-labelledby', 't');
    expect(root).not.toHaveAttribute('aria-label');
    expect(root).not.toHaveAttribute('aria-labelledby');
  });

  it('allows overriding svg aria-label with attributes', () => {
    const { container } = render(
      <QRCode value="https://mantine.dev" attributes={{ svg: { 'aria-label': 'Custom label' } }} />
    );
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Custom label');
  });
});

describe('@mantine/core/encodeQR', () => {
  it('returns a square matrix with a matching size', () => {
    const { matrix, size } = encodeQR('https://mantine.dev');
    expect(matrix).toHaveLength(size);
    expect(matrix.every((row) => row.length === size)).toBe(true);
  });

  it('produces a larger matrix for higher error correction levels', () => {
    const low = encodeQR('https://mantine.dev', { errorCorrectionLevel: 'L' });
    const high = encodeQR('https://mantine.dev', { errorCorrectionLevel: 'H' });
    expect(high.size).toBeGreaterThanOrEqual(low.size);
  });

  it('encodes HELLO WORLD into the expected version 1 matrix structure', () => {
    const { matrix, size } = encodeQR('HELLO WORLD');
    expect(size).toBe(21);

    const finderOrigins = [
      [0, 0],
      [0, size - 7],
      [size - 7, 0],
    ];
    for (const [top, left] of finderOrigins) {
      for (let y = 0; y < 7; y += 1) {
        for (let x = 0; x < 7; x += 1) {
          const ring = Math.max(Math.abs(x - 3), Math.abs(y - 3));
          expect(matrix[top + y][left + x]).toBe(ring !== 2);
        }
      }
    }

    for (let i = 8; i < size - 8; i += 1) {
      expect(matrix[6][i]).toBe(i % 2 === 0);
      expect(matrix[i][6]).toBe(i % 2 === 0);
    }

    expect(matrix[size - 8][8]).toBe(true);
    expect(matrix[8].slice(0, 6)).toEqual([true, false, true, false, true, false]);
  });

  it('throws a RangeError when the value exceeds the capacity', () => {
    expect(() => encodeQR('a'.repeat(3000))).toThrow(RangeError);
    expect(() => encodeQR('a'.repeat(1300), { errorCorrectionLevel: 'H' })).toThrow(RangeError);
    expect(() => encodeQR('a'.repeat(1273), { errorCorrectionLevel: 'H' })).not.toThrow();
  });

  it('replaces lone surrogates instead of throwing', () => {
    const { matrix, size } = encodeQR('hi 🚀'.slice(0, 4));
    expect(matrix).toHaveLength(size);
    expect(encodeQR('hi \uFFFD').matrix).toEqual(matrix);
  });
});
