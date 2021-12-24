import React from 'react';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsRef,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
  itSupportsSx,
} from '@mantine/tests';
import { Button } from '../Button';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem/AccordionItem';
import { Accordion as AccordionStylesApi } from './styles.api';

const defaultProps = {
  initialItem: 1,
  children: [
    <Accordion.Item label="Test 1">Test 1</Accordion.Item>,
    <Accordion.Item label="Test 2">Test 2</Accordion.Item>,
    <Accordion.Item label="Test 3">Test 3</Accordion.Item>,
  ],
};

describe('@mantine/core/Accordion', () => {
  itSupportsClassName(Accordion, defaultProps);
  itSupportsOthers(Accordion, defaultProps);
  itSupportsStyle(Accordion, defaultProps);
  itSupportsSx(Accordion, defaultProps);
  itSupportsMargins(Accordion, defaultProps);
  itSupportsRef(Accordion, defaultProps, HTMLDivElement);
  checkAccessibility([mount(<Accordion {...defaultProps} />)]);
  itSupportsStylesApi(Accordion, defaultProps, Object.keys(AccordionStylesApi), 'Accordion');

  it('renders correct amount of items', () => {
    const element = shallow(<Accordion {...defaultProps} />);
    expect(element.find(Accordion.Item)).toHaveLength(defaultProps.children.length);
  });

  it('filters out unexpected children', () => {
    const element = shallow(
      <Accordion>
        <Accordion.Item label="Child 1 label">Child 1</Accordion.Item>
        <p>Unexpected child 1</p>
        <div>Unexpected child 1</div>
        <Accordion.Item label="Child 2 label">Child 2</Accordion.Item>
        <Button>Unexpected component</Button>
      </Accordion>
    );

    expect(element.find(Accordion.Item)).toHaveLength(2);
    expect(element.children()).toHaveLength(2);
  });

  it('supports controlRef on Accordion.Item', async () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Accordion>
        <Accordion.Item controlRef={ref} />
      </Accordion>
    );
    expect(ref.current instanceof HTMLButtonElement).toBe(true);
  });

  it('exposes AccordionItem component as Accordion.Item', () => {
    expect(Accordion.Item).toEqual(AccordionItem);
  });

  it('has correct displayName', () => {
    expect(Accordion.displayName).toEqual('@mantine/core/Accordion');
  });
});
