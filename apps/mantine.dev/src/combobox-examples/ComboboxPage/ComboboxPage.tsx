import { ExamplesShell } from '@/components/ExamplesShell';
import { PageHead } from '@/components/PageHead';
import { COMBOBOX_EXAMPLES_DATA, COMBOBOX_EXAMPLES_GROUPS } from '../combobox-examples-data';
import { ComboboxDemo } from '../ComboboxDemo/ComboboxDemo';
import type { ComboboxExampleId } from '../examples';

interface ComboboxPageProps {
  exampleId: ComboboxExampleId;
}

export function ComboboxPage({ exampleId }: ComboboxPageProps) {
  const metaData = COMBOBOX_EXAMPLES_DATA.find((item) => item.id === exampleId);

  return (
    <>
      <PageHead
        title={metaData ? `${metaData.name} | Combobox examples` : 'Combobox examples'}
        description={metaData?.fullDescription || metaData?.description}
      />
      <ExamplesShell
        data={COMBOBOX_EXAMPLES_DATA}
        groups={COMBOBOX_EXAMPLES_GROUPS}
        basePath="/combobox"
        activeId={exampleId}
      >
        <ComboboxDemo exampleId={exampleId} />
      </ExamplesShell>
    </>
  );
}
