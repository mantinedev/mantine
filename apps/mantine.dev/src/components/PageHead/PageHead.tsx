import Head from 'next/head';

interface PageHeadProps {
  title: string | undefined;
  description: string | undefined;
}

const metaDescription =
  'React components and hooks library with native dark theme support and focus on usability, accessibility and developer experience';

export function PageHead({ title, description }: PageHeadProps) {
  const _title = title ? `${title} | Mantine` : 'Mantine';
  const _description = description || metaDescription;
  return (
    <Head>
      <title>{_title}</title>
      <meta property="description" name="description" content={_description} />
      <meta property="og:title" name="og:title" content={_title} />
      <meta property="og:description" name="og:description" content={_description} />
      <meta property="twitter:title" name="twitter:title" content={_title} />
      <meta property="twitter:description" name="twitter:description" content={_description} />
    </Head>
  );
}
