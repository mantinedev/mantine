import React from 'react';
import { Prism } from './Prism';

const code2 = Array(20)
  .fill(0)
  .map(() => 'Some line')
  .join('\n');

const code3 = Array(120)
  .fill(0)
  .map(() => 'Some line')
  .join('\n');

export default {
  title: 'Prism',
};

export const TwoDigitLineNumbers = () => (
  <Prism language="javascript" withLineNumbers>
    {code2}
  </Prism>
);

export const ThreeDigitLineNumbers = () => (
  <Prism language="javascript" withLineNumbers>
    {code3}
  </Prism>
);
