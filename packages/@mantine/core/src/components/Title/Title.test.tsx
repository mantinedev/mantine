import { render, tests } from '@mantine-tests/core';
import { Title, TitleProps, TitleStylesNames } from './Title';

const defaultProps: TitleProps = {};

describe('@mantine/core/Title', () => {
  tests.itSupportsSystemProps<TitleProps, TitleStylesNames>({
    component: Title,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Title',
    stylesApiSelectors: ['root'],
  });

  it('sets data-line-clamp attribute based on lineClamp prop', () => {
    const { container, rerender } = render(<Title lineClamp={3} />);
    expect(container.querySelector('.mantine-Title-root')).toHaveAttribute('data-line-clamp');

    rerender(<Title />);
    expect(container.querySelector('.mantine-Title-root')).not.toHaveAttribute('data-line-clamp');
  });
});
