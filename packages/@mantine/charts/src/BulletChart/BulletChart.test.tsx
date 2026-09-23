import { render } from '@mantine-tests/core';
import { BulletChart } from './BulletChart';

const ranges = [{ value: 100, color: 'blue' }];

describe('@mantine/charts/BulletChart', () => {
  it('clamps the value bar within the track', () => {
    const { container, rerender } = render(<BulletChart value={150} ranges={ranges} />);
    expect(container.querySelector('.mantine-BulletChart-bar')).toHaveStyle({ width: '100%' });

    rerender(<BulletChart value={-20} ranges={ranges} />);
    expect(container.querySelector('.mantine-BulletChart-bar')).toHaveStyle({ width: '0%' });
  });

  it('clamps the target marker within the track', () => {
    const { container, rerender } = render(<BulletChart value={50} target={150} ranges={ranges} />);
    expect(container.querySelector('.mantine-BulletChart-target')).toHaveStyle({ left: '100%' });

    rerender(<BulletChart value={50} target={-10} ranges={ranges} />);
    expect(container.querySelector('.mantine-BulletChart-target')).toHaveStyle({ left: '0%' });
  });

  it('clamps the target marker within the track when vertical', () => {
    const { container } = render(
      <BulletChart value={50} target={150} ranges={ranges} orientation="vertical" />
    );
    expect(container.querySelector('.mantine-BulletChart-target')).toHaveStyle({ bottom: '100%' });
  });
});
