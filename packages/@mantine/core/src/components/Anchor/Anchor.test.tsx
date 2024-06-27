import { render, tests } from '@mantine-tests/core';
import { Anchor, AnchorProps, AnchorStylesNames } from './Anchor';

const defaultProps: AnchorProps = {};

describe('@mantine/core/Anchor', () => {
  tests.itSupportsSystemProps<AnchorProps, AnchorStylesNames>({
    component: Anchor,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLAnchorElement,
    displayName: '@mantine/core/Anchor',
    stylesApiSelectors: ['root'],
  });

  it('sets data-underline attribute based on underline prop', () => {
    const { container, rerender } = render(<Anchor underline="always" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-underline', 'always');

    rerender(<Anchor underline="hover" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-underline', 'hover');

    rerender(<Anchor underline="never" data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-underline', 'never');

    rerender(<Anchor data-test />);
    expect(container.querySelector('[data-test]')).toHaveAttribute('data-underline', 'hover');
  });
});
