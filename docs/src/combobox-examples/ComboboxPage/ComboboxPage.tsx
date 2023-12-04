import React from 'react';
import { ComboboxShell } from '../ComboboxShell/ComboboxShell';
import { ComboboxDemo } from '../ComboboxDemo/ComboboxDemo';
import { PageHead } from '@/components/PageHead';

export function ComboboxPage() {
  return (
    <>
      <PageHead
        title="Combobox examples"
        description="50+ examples of using Mantine Combobox component"
      />
      <ComboboxShell>
        <ComboboxDemo />
      </ComboboxShell>
    </>
  );
}
