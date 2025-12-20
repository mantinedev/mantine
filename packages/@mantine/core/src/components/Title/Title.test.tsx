import { tests } from '@mantine-tests/core';
import { Title, TitleProps, TitleStylesNames } from './Title';

const defaultProps: TitleProps = {};

describe('@mantine/core/Title', () => {
  tests.itSupportsSystemProps<TitleProps, TitleStylesNames>({
    component: Title,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Title',
    stylesApiSelectors: ['root'],
  });
});
