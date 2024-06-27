import { Breadcrumbs, Code, STYlE_PROPS_DATA } from '@mantine/core';
import { MdxDataTable } from '@/components/MdxProvider';

const THEME_KEYS: Record<string, string> = {
  color: 'theme.colors',
  fontSize: 'theme.fontSizes',
  spacing: 'theme.spacing',
  lineHeight: 'theme.lineHeights',
};

export function StylePropsTable({ source = STYlE_PROPS_DATA }: { source: any }) {
  const data = Object.keys(source).map((propName) => {
    const propData = source[propName];
    const themeKey = THEME_KEYS[propData.type];
    return [
      <Code key="1">{propName}</Code>,
      <Breadcrumbs separator="," styles={{ separator: { marginLeft: 2, marginRight: 2 } }}>
        {Array.isArray(propData.property) ? (
          propData.property.map((prop: any) => <Code key={prop}>{prop}</Code>)
        ) : (
          <Code>{propData.property}</Code>
        )}
      </Breadcrumbs>,
      themeKey ? <Code>{themeKey}</Code> : '–',
    ];
  });

  return <MdxDataTable head={['Prop', 'CSS Property', 'Theme key']} data={data} />;
}
