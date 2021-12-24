/**
 * @jest-environment jsdom
 */
import React from 'react';
import { itSupportsRef } from '@mantine/tests';
import { render } from '@testing-library/react';
import { Affix } from './Affix';

describe('@mantine/core/Affix', () => {
  itSupportsRef(Affix, {}, HTMLDivElement);

  it('renders Affix in document', () => {
    const { getByText } = render(<Affix>Test Affix</Affix>);
    expect(getByText('Test Affix')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Affix.displayName).toEqual('@mantine/core/Affix');
  });
});
