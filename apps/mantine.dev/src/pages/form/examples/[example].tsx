import type { GetStaticPaths, GetStaticProps } from 'next';
import { FORM_EXAMPLES_DATA, FormExampleId, FormExamplesPage } from '@/form-examples';

interface FormExamplePageProps {
  exampleId: FormExampleId;
}

export default function FormExamplePage({ exampleId }: FormExamplePageProps) {
  return <FormExamplesPage exampleId={exampleId} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: FORM_EXAMPLES_DATA.map((item) => ({ params: { example: item.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<FormExamplePageProps> = async ({ params }) => ({
  props: { exampleId: params!.example as FormExampleId },
});
