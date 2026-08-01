import { render, tests } from '@mantine-tests/core';
import {
  FloatingIndicator,
  FloatingIndicatorProps,
  FloatingIndicatorStylesNames,
} from './FloatingIndicator';

const defaultProps: FloatingIndicatorProps = {
  target: document.createElement('div'),
  parent: document.createElement('div'),
  transitionDuration: 150,
  displayAfterTransitionEnd: false,
};

describe('@mantine/core/FloatingIndicator', () => {
  tests.itSupportsSystemProps<FloatingIndicatorProps, FloatingIndicatorStylesNames>({
    component: FloatingIndicator,
    props: defaultProps,
    varsResolver: true,
    children: true,
    styleProps: false, // Some styles are overridden by style attribute
    displayName: '@mantine/core/FloatingIndicator',
    stylesApiSelectors: ['root'],
  });

  it('normalizes geometry when parent container is scaled', () => {
    const parent = document.createElement('div');
    const target = document.createElement('div');
    const indicatorRef = { current: document.createElement('div') };

    Object.defineProperty(parent, 'offsetWidth', { value: 200, configurable: true });
    Object.defineProperty(parent, 'offsetHeight', { value: 100, configurable: true });

    jest.spyOn(parent, 'getBoundingClientRect').mockReturnValue({
      top: 100,
      left: 100,
      width: 100,
      height: 50,
      bottom: 150,
      right: 200,
      x: 100,
      y: 100,
      toJSON: () => {},
    });

    jest.spyOn(target, 'getBoundingClientRect').mockReturnValue({
      top: 125,
      left: 150,
      width: 50,
      height: 25,
      bottom: 150,
      right: 200,
      x: 150,
      y: 125,
      toJSON: () => {},
    });

    render(<FloatingIndicator ref={indicatorRef} parent={parent} target={target} />);

    expect(indicatorRef.current.style.width).toBe('100px');
    expect(indicatorRef.current.style.height).toBe('50px');
    expect(indicatorRef.current.style.transform).toBe('translateY(50px) translateX(100px)');
  });
});
