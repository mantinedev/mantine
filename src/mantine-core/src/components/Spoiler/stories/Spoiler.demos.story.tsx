import { storiesOf } from '@storybook/react';
import { attachDemos } from '@mantine/ds/src';
import * as demos from '../demos';

const stories = storiesOf('@mantine/core/Spoiler/demos', module);

attachDemos(stories, demos);
