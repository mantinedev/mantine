import React from 'react';
import { usage } from '@demos/rte';
import Demo from '../../../Demo/Demo';
import { LinkTitle } from './LinkTitle';

export function RichTextDemo() {
  return (
    <>
      <LinkTitle title="Rich text editor" link="/others/rte/" />
      <Demo data={usage} />
    </>
  );
}
