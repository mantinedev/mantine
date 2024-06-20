import { DEFAULT_THEME } from '../default-theme';
import { defaultCssVariablesResolver } from './default-css-variables-resolver';

test('default-css-variables-resolver', () => {
  expect(defaultCssVariablesResolver(DEFAULT_THEME)).toMatchSnapshot();
});
