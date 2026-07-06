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
    stylesApiSelectors: ['root', 'svg', 'image'],
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
    expect(container.querySelector('.mantine-QRCode-image')).not.toBeInTheDocument();

    rerender(<QRCode value="test" logo={<span>logo</span>} />);
    expect(container.querySelector('.mantine-QRCode-image')).toBeInTheDocument();
  });

  it('includes the quiet zone (margin) in the svg viewBox', () => {
    const { matrix } = encodeQR('test');
    const { container } = render(<QRCode value="test" margin={4} />);
    const viewBox = container.querySelector('svg')!.getAttribute('viewBox');
    expect(viewBox).toBe(`0 0 ${matrix.length + 8} ${matrix.length + 8}`);
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
});
