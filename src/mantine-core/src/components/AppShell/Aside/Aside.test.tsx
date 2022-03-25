import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Aside, AsideProps } from './Aside';
import { HorizontalSection } from '../HorizontalSection/HorizontalSection';

const defaultProps: AsideProps = { children: 'test-aside' };

describe('@mantine/core/Aside', () => {
  itRendersChildren(Aside, defaultProps);
  itSupportsSystemProps({
    component: Aside,
    props: defaultProps,
    displayName: '@mantine/core/Aside',
    refType: HTMLElement,
  });

  it('exposes HorizontalSection.HorizontalSection as Aside.Section', () => {
    expect(Aside.Section).toBe(HorizontalSection.Section);
  });
});
