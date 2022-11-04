import React from 'react';
import { __unsafe_do_no_use_SYSTEM_PROPS, Code, Breadcrumbs } from '@mantine/core';
import DataTable from '../MdxPage/MdxProvider/DataTable/DataTable';

const THEME_KEYS = {
  color: 'theme.colors',
  fontSize: 'theme.fontSize',
  spacing: 'theme.spacing',
};

export function StylePropsTable({
  source = __unsafe_do_no_use_SYSTEM_PROPS,
}: {
  source: typeof __unsafe_do_no_use_SYSTEM_PROPS;
}) {
  const data = Object.keys(source).map((propName) => {
    const propData = source[propName];
    const themeKey = THEME_KEYS[propData.type];
    return [
      <Code key="1">{propName}</Code>,
      <Breadcrumbs separator="," styles={{ separator: { marginLeft: 2, marginRight: 2 } }}>
        {Array.isArray(propData.property) ? (
          propData.property.map((prop) => <Code key={prop}>{prop}</Code>)
        ) : (
          <Code>{propData.property}</Code>
        )}
      </Breadcrumbs>,
      themeKey ? <Code>{themeKey}</Code> : '–',
    ];
  });

  return <DataTable head={['Prop', 'CSS Property', 'Theme key']} data={data} />;
}
