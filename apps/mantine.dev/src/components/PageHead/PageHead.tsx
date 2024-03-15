import React from 'react';
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
      <meta name="description" content={_description} />
      <meta name="og:title" content={_title} />
      <meta name="og:description" content={_description} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />
    </Head>
  );
}
