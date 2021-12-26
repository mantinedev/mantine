import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Button } from '../Button';
import { Accordion, AccordionProps } from './Accordion';
import { AccordionItem } from './AccordionItem/AccordionItem';

const defaultProps: AccordionProps = {
  initialItem: 1,
  children: [
    <Accordion.Item label="Test 1">Test 1</Accordion.Item>,
    <Accordion.Item label="Test 2">Test 2</Accordion.Item>,
    <Accordion.Item label="Test 3">Test 3</Accordion.Item>,
  ],
};

describe('@mantine/core/Accordion', () => {
  itSupportsSystemProps({
    component: Accordion,
    props: defaultProps,
    displayName: '@mantine/core/Accordion',
    refType: HTMLDivElement,
  });
  checkAccessibility([render(<Accordion {...defaultProps} />)]);

  it('renders correct amount of items', () => {
    const { container } = render(<Accordion {...defaultProps} />);
    expect(container.querySelectorAll('.mantine-Accordion-item')).toHaveLength(3);
  });

  it('filters out unexpected children', () => {
    const { container } = render(
      <Accordion>
        <Accordion.Item label="Child 1 label">Child 1</Accordion.Item>
        <p className="unexpected">Unexpected child 1</p>
        <div className="unexpected">Unexpected child 1</div>
        <Accordion.Item label="Child 2 label">Child 2</Accordion.Item>
        <Button>Unexpected component</Button>
      </Accordion>
    );

    expect(container.querySelectorAll('.mantine-Accordion-item')).toHaveLength(2);
    expect(container.querySelectorAll('.mantine-Button-root')).toHaveLength(0);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });

  it('supports controlRef on Accordion.Item', async () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Accordion>
        <Accordion.Item controlRef={ref} />
      </Accordion>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('exposes AccordionItem component as Accordion.Item', () => {
    expect(Accordion.Item).toBe(AccordionItem);
  });
});
