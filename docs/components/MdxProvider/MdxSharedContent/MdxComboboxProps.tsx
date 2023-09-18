import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxLink } from '../MdxLink/MdxLink';

const getCode = (component: string) => `
import { ${component} } from '@mantine/core';

function Demo() {
  return <${component} comboboxProps={{ withinPortal: false }} data={[]} />;
}
`;

interface MdxComboboxPropsProps {
  component: string;
}

export function MdxComboboxProps({ component }: MdxComboboxPropsProps) {
  return (
    <>
      <MdxTitle id="combobox-props">Combobox props</MdxTitle>
      <MdxParagraph>
        You can override <MdxLink href="/core/combobox">Combobox</MdxLink> props with{' '}
        <MdxCode>comboboxProps</MdxCode>. It is useful when you need to change some of the props
        that are not exposed by <MdxCode>{component}</MdxCode>, for example{' '}
        <MdxCode>withinPortal</MdxCode>:
      </MdxParagraph>

      <MdxCodeHighlight language="tsx" code={getCode(component)} />
    </>
  );
}
