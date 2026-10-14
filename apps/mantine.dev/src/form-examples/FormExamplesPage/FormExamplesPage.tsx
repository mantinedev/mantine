import { ExamplesShell } from '@/components/ExamplesShell';
import { PageHead } from '@/components/PageHead';
import type { FormExampleId } from '../examples';
import { FORM_EXAMPLES_DATA, FORM_EXAMPLES_GROUPS } from '../form-examples-data';
import { FormExamplesDemo } from '../FormExamplesDemo/FormExamplesDemo';

interface FormExamplesPageProps {
  exampleId: FormExampleId;
}

export function FormExamplesPage({ exampleId }: FormExamplesPageProps) {
  const metaData = FORM_EXAMPLES_DATA.find((item) => item.id === exampleId);

  return (
    <>
      <PageHead
        title={metaData ? `${metaData.name} | Form examples` : 'Form examples'}
        description={metaData?.fullDescription || metaData?.description}
      />
      <ExamplesShell
        data={FORM_EXAMPLES_DATA}
        groups={FORM_EXAMPLES_GROUPS}
        basePath="/form/examples"
        activeId={exampleId}
      >
        <FormExamplesDemo exampleId={exampleId} />
      </ExamplesShell>
    </>
  );
}
