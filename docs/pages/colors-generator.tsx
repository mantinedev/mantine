import React from 'react';
import { ContentPageBase } from '@/components/ContentPageBase';
import { ColorsGenerator } from '@/components/ColorsGenerator';

export default function ColorsGeneratorPage() {
  return (
    <ContentPageBase title="Colors generator">
      <ColorsGenerator />
    </ContentPageBase>
  );
}
