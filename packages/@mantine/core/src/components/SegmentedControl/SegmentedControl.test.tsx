import { render } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import {
  SegmentedControl,
  SegmentedControlProps,
  SegmentedControlStylesNames,
} from './SegmentedControl';

const defaultProps: SegmentedControlProps = {
  transitionDuration: 0,
  data: ['First', 'Second', 'Third'],
};

describe('@mantine/core/SegmentedControl', () => {
  tests.axe([
    <SegmentedControl {...defaultProps} key="1" />,
    <SegmentedControl {...defaultProps} aria-label="group label" key="2" />,
  ]);

  tests.itSupportsSystemProps<SegmentedControlProps, SegmentedControlStylesNames>({
    component: SegmentedControl,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/SegmentedControl',
    stylesApiSelectors: ['root', 'label', 'input', 'control', 'indicator'],
  });

  it('supports responsive size properties', () => {
    const { container } = render(
      <SegmentedControl 
        {...defaultProps} 
        size={{ base: 'sm', md: 'lg' }}
      />
    );
    
    // Check that base size is applied
    const root = container.querySelector('[role="radiogroup"]');
    expect(root).toHaveStyle('--sc-padding: var(--sc-padding-sm)');
    expect(root).toHaveStyle('--sc-font-size: var(--mantine-font-size-sm)');
    
    // Check that responsive styles are injected
    const styleElement = container.querySelector('style[data-mantine-styles="inline"]');
    expect(styleElement).toBeInTheDocument();
    expect(styleElement?.innerHTML).toContain('@media');
  });

  it('works with regular size values', () => {
    const { container } = render(
      <SegmentedControl 
        {...defaultProps} 
        size="md"
      />
    );
    
    const root = container.querySelector('[role="radiogroup"]');
    expect(root).toHaveStyle('--sc-padding: var(--sc-padding-md)');
    expect(root).toHaveStyle('--sc-font-size: var(--mantine-font-size-md)');
    
    // Should not have responsive styles
    const styleElement = container.querySelector('style[data-mantine-styles="inline"]');
    expect(styleElement).not.toBeInTheDocument();
  });
});
