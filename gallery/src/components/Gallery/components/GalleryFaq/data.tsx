import React from 'react';
import { Anchor } from '@mantine/core';
import GatsbyLink from '../../../MdxPage/MdxProvider/GatsbyLink/GatsbyLink';

export default [
  {
    q: 'Are Mantine Gallery components free?',
    a: 'Yes, all components are free for everyone, you can use them in commercial applications.',
  },
  {
    q: 'What license is applied to Mantine Gallery components?',
    a: 'All components use MIT license. Please note that licence is applied only to component code displayed at website, other files used in examples (images, decorative svg elements, videos, etc.) may have different license, check it before you decide to use component as is in example.',
  },
  {
    q: 'Do I have to attribute Mantine Gallery when I use components?',
    a: 'No, attribution is not required, although it is a nice thing to do and we would appreciate if you give us some credit in your application.',
  },
  {
    q: 'Can I contribute?',
    a: (
      <>
        Sure! Contributing to Mantine Gallery is easy and straight forward – just create a
        component, no documentation or tests required. We welcome all contributors and have a very
        friendly Discord community. If you want to create new component or improve existing one
        follow <GatsbyLink to="/contribute/">contribution guidelines</GatsbyLink> and{' '}
        <Anchor href="https://discord.gg/eUZpPbpxb4">join Discord server</Anchor> to discuss
        details.
      </>
    ),
  },
  {
    q: 'What is the goal of Mantine Gallery?',
    a: 'The main gallery of Mantine Gallery it to provide examples of @mantine/ scoped packages usage. With Mantine Gallery will be able to learn best practices and styling techniques with code examples.',
  },
  {
    q: 'What Mantine version should I use?',
    a: 'Components are always built with latest version of all @mantine/* packages. You can find current version near Mantine logo at the top left part of the screen.',
  },
];
