import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Grid } from './Grid';

describe('@mantine/core/Grid', () => {
  itSupportsClassName(Grid, {});
  itSupportsOthers(Grid, {});
  itSupportsStyle(Grid, {});

  it('sets justify-content and align-items styles based on props', () => {
    const element = shallow(
      <Grid align="center" justify="center">
        test
      </Grid>
    );
    expect(element.prop('style').justifyContent).toBe('center');
    expect(element.prop('style').alignItems).toBe('center');
  });

  it('sets negative margin based on gutter prop', () => {
    const element = shallow(<Grid gutter={20}>test</Grid>);
    expect(element.prop('style').margin).toBe(-10);
  });

  it('has correct displayName', () => {
    expect(Grid.displayName).toEqual('@mantine/core/Grid');
  });
});
