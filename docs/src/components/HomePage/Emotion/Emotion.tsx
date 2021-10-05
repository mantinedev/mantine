import React from 'react';
import { createStylesBasics } from '../../../demos/create-styles/createStylesBasics';
import Demo from '../../Demo/Demo';
import { PageSection } from '../PageSection/PageSection';

export function Emotion() {
  return (
    <PageSection
      title="Emotion based"
      description="Mantine is based on emotion, take advantage of core emotion features with createStyles function: auto vendor-prefixing, critical css extraction during server side rendering, lazy evaluation, dynamic theming, type safe styles with TypeScript and more."
    >
      <div style={{ marginTop: 30 }}>
        <Demo data={createStylesBasics} />
      </div>
    </PageSection>
  );
}
