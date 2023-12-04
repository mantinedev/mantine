import React from 'react';
import { Code } from '@mantine/core';
import { MdxParagraph, MdxLink, MdxTitle } from '@/components/MdxProvider';
import { StylesApiTable } from './StylesApiTable';
import classes from './StylesApiTable.module.css';

interface StylesApiTablesListProps {
  components: string[];
  componentPrefix?: string;
}

export function StylesApiTablesList({ components, componentPrefix }: StylesApiTablesListProps) {
  const tables = components.map((component) => (
    <div className={classes.group} key={component}>
      <StylesApiTable component={component} componentPrefix={componentPrefix} />
    </div>
  ));

  return (
    <>
      <div className={classes.groupsHeader}>
        <MdxTitle style={{ marginTop: 0 }}>Styles API</MdxTitle>
        <MdxParagraph style={{ marginTop: 0 }}>
          <Code>{components[0]}</Code> component supports{' '}
          <MdxLink href="/styles/styles-api">Styles API</MdxLink>. With Styles API, you can
          customize styles of any inner element. Follow{' '}
          <MdxLink href="/styles/styles-api">the documentation</MdxLink> to learn how to use CSS
          modules, CSS variables and inline styles to get full control over component styles.
        </MdxParagraph>
      </div>
      {tables}
    </>
  );
}
