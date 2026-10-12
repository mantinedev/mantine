import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ExamplesShell } from '@/components/ExamplesShell';
import { PageHead } from '@/components/PageHead';
import { FORM_EXAMPLES_COMPONENTS } from '../examples';
import { FORM_EXAMPLES_DATA, FORM_EXAMPLES_GROUPS } from '../form-examples-data';
import { FormExamplesDemo } from '../FormExamplesDemo/FormExamplesDemo';

export function FormExamplesPage() {
  const router = useRouter();
  const exampleId = router.query.e as string;

  useEffect(() => {
    if (router.isReady && !(exampleId in FORM_EXAMPLES_COMPONENTS)) {
      router.replace('/form/examples?e=LoginForm');
    }
  }, [router.isReady, exampleId]);

  return (
    <>
      <PageHead title="Form examples" description="Examples of using Mantine use-form hook" />
      <ExamplesShell
        data={FORM_EXAMPLES_DATA}
        groups={FORM_EXAMPLES_GROUPS}
        basePath="/form/examples"
      >
        <FormExamplesDemo />
      </ExamplesShell>
    </>
  );
}
