import { cloneElement, useState } from 'react';
import { Text, UnstyledButton } from '@mantine/core';
import { DemoAreaProps } from '../DemoArea';
import { DemoCode } from '../DemoCode';
import { DemoColumns } from '../DemoColumns';
import { DemoRoot } from '../DemoRoot';
import classes from './StylesApiDemo.module.css';

export interface StylesApiDemoProps extends DemoAreaProps {
  data: { selectors: Record<string, string> };
  code: string;
}

function getCss(hovered: string | null) {
  return hovered
    ? `.${hovered} {\n  outline: 2px solid #fe0d45;\n  outline-offset: -2px; \n}\n`
    : '/*\n * Hover over selectors to apply outline styles\n *\n */';
}

export function StylesApiDemo({
  data,
  code,
  withPadding,
  maxWidth,
  centered,
  children,
  dimmed,
  striped,
}: StylesApiDemoProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => (
    <UnstyledButton
      className={classes.selector}
      key={selector}
      onMouseEnter={() => setHovered(selector)}
      onMouseLeave={() => setHovered(null)}
    >
      <Text mb={2}>{selector}</Text>
      <Text fz={11} c="dimmed">
        {data.selectors[selector]}
      </Text>
    </UnstyledButton>
  ));

  const classNamesProp = hovered ? ` classNames={{ ${hovered}: classes.${hovered} }}` : '';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: getCss(hovered) }} />
      <DemoRoot>
        <DemoColumns
          withPadding={withPadding}
          maxWidth={maxWidth}
          centered={centered}
          controls={controls}
          dimmed={dimmed}
          striped={striped}
          title="Component Styles API"
          description="Hover over selectors to highlight corresponding elements"
        >
          {cloneElement(children as React.JSX.Element, {
            classNames: selectors.reduce<Record<string, string>>((acc, item) => {
              acc[item] = item;
              return acc;
            }, {}),
          })}
        </DemoColumns>

        <DemoCode
          code={[
            { fileName: 'Demo.module.css', language: 'scss', code: getCss(hovered) },
            {
              fileName: 'Demo.tsx',
              language: 'tsx',
              code: code.replace('{{props}}', classNamesProp),
            },
          ]}
        />
      </DemoRoot>
    </>
  );
}
