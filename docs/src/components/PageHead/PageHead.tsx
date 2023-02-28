import React from 'react';

interface PageHeadProps {
  title: string;
  description?: string;
  disableTitleTemplate?: boolean;
}

export function PageHead({ title, description, disableTitleTemplate }: PageHeadProps) {
  const metaDescription =
    description ||
    'React components and hooks library with native dark theme support and focus on usability, accessibility and developer experience';

  return (
    <>
      <title>{disableTitleTemplate ? title : `${title} | Mantine`}</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta
        name="og:image"
        content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/Hero.png"
      />
      <meta name="og:image:width" content="1280" />
      <meta name="og:image:height" content="640" />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@mantinedev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  );
}
