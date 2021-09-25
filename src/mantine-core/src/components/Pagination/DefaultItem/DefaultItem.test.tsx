import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { DefaultItem } from './DefaultItem';

const defaultProps = {};
describe('@mantine/core/Pagination/DefaultItem', () => {
  itSupportsClassName(DefaultItem, defaultProps);
  itSupportsOthers(DefaultItem, defaultProps);
  itSupportsStyle(DefaultItem, defaultProps);

  it('number page renders number as child', () => {
    const element = shallow(<DefaultItem page={1} />);
    expect(element.render().text()).toBe('1');
  });

  it('non number pages renders svg icon', () => {
    const nextPage = shallow(<DefaultItem page="next" />);
    expect(nextPage.render().find('svg')).toHaveLength(1);

    const prevPage = shallow(<DefaultItem page="prev" />);
    expect(prevPage.render().find('svg')).toHaveLength(1);

    const showFirstPage = shallow(<DefaultItem page="showFirst" />);
    expect(showFirstPage.render().find('svg')).toHaveLength(1);

    const showLastPage = shallow(<DefaultItem page="showLast" />);
    expect(showLastPage.render().find('svg')).toHaveLength(1);

    const dotsElement = shallow(<DefaultItem page="dots" />);
    expect(dotsElement.render().find('svg')).toHaveLength(1);
  });

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toEqual('@mantine/core/Pagination/DefaultItem');
  });
});
