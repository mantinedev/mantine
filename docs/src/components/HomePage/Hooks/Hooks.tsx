import React from 'react';
import { PageSection } from '../PageSection/PageSection';

export function Hooks() {
  return (
    <PageSection
      title="Hooks library"
      description="Mantine comes with more than 40 hooks to manage state and UI to help you build custom components. Hooks do not depend on components packages, you can use them independently in any react application."
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      Hooks
    </PageSection>
  );
}
