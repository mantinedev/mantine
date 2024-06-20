import { PageHead } from '@/components/PageHead';
import { ComboboxDemo } from '../ComboboxDemo/ComboboxDemo';
import { ComboboxShell } from '../ComboboxShell/ComboboxShell';

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
