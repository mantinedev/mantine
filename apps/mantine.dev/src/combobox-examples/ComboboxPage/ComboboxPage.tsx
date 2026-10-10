import { ExamplesShell } from '@/components/ExamplesShell';
import { PageHead } from '@/components/PageHead';
import { COMBOBOX_EXAMPLES_DATA, COMBOBOX_EXAMPLES_GROUPS } from '../combobox-examples-data';
import { ComboboxDemo } from '../ComboboxDemo/ComboboxDemo';

export function ComboboxPage() {
  return (
    <>
      <PageHead
        title="Combobox examples"
        description="50+ examples of using Mantine Combobox component"
      />
      <ExamplesShell
        data={COMBOBOX_EXAMPLES_DATA}
        groups={COMBOBOX_EXAMPLES_GROUPS}
        basePath="/combobox"
      >
        <ComboboxDemo />
      </ExamplesShell>
    </>
  );
}
