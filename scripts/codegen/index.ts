import { getPath } from '../utils/get-path';
import { generateExamplesCode } from './generate-examples-code';

generateExamplesCode(getPath('docs/src/combobox-examples/examples'));
generateExamplesCode(getPath('docs/src/app-shell-examples/examples'));
