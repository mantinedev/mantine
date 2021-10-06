import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { MdxPageProps } from '../../../types';
import { MdxSibling } from './MdxSibling/MdxSibling';

interface MdxSiblingsProps {
  siblings: MdxPageProps['siblings'];
}

export function MdxSiblings({ siblings }: MdxSiblingsProps) {
  return (
    <SimpleGrid mt={40} cols={2} breakpoints={[{ maxWidth: 1000, cols: 1 }]}>
      {siblings.prev && <MdxSibling type="prev" data={siblings.prev} />}
      {siblings.next && <MdxSibling type="next" data={siblings.next} />}
    </SimpleGrid>
  );
}
