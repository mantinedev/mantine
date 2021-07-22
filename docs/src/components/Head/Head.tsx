import React from 'react';
import { Helmet } from 'react-helmet';

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
          name: 'viewport',
          content: 'width=device-width, user-scalable=no',
        },
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
          content: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/Hero.png',
        },
        {
          property: 'og:image:width',
          content: '1280',
        },
        {
          property: 'og:image:height',
          content: '640',
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
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: '@mantinedev',
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
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dosis:wght@800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
