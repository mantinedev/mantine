import { storiesOf } from '@storybook/react';
import { attachDemos } from '../../attach-demos';
import * as demos from './index';

attachDemos(storiesOf('Styled', module), demos);
