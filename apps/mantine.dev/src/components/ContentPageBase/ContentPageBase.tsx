import React from 'react';
import Head from 'next/head';
import { PageBase } from '@/components/PageBase';
import { PageContentContainer } from '../PageContentContainer';

interface ContentPageBaseProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
}

export function ContentPageBase({ title, ...others }: ContentPageBaseProps) {
  return (
    <>
      <Head>
        <title>{`${title} | Mantine`}</title>
      </Head>
      <PageBase>
        <PageContentContainer {...others} />
      </PageBase>
    </>
  );
}
