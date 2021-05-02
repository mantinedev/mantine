import React from 'react';
import { Helmet } from 'react-helmet';
import ogImage from '../../images/og-image.png';

interface HeadProps {
  title: string;
  description?: string;
  disableTitleTemplate?: boolean;
}

export default function Head({ title, description, disableTitleTemplate }: HeadProps) {
  const metaDescription =
    description ||
    'React components and hooks library with native dark theme support and focus on usability, accessibility and developer experience';

  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={disableTitleTemplate ? undefined : '%s | Mantine'}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:image',
          content: ogImage,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  );
}
