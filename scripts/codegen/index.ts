import { generateExamplesCode } from './generate-examples-code';
import { getPath } from '../utils/get-path';

generateExamplesCode(getPath('docs/src/combobox-examples/examples'));
generateExamplesCode(getPath('docs/src/app-shell-examples/examples'));
