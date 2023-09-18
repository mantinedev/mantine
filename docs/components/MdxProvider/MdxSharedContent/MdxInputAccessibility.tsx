import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxInputAccessibilityProps {
  component: string;
  package?: string;
}

const getInaccessibleCode = (component: string, packageName: string) => `
import { ${component} } from '${packageName}';

// Inaccessible input – screen reader will not announce it properly
function Demo() {
  return <${component} />;
}
`;

const getAriaLabelCode = (component: string, packageName: string) => `
import { ${component} } from '${packageName}';

// Accessible input – it has aria-label
function Demo() {
  return <${component} aria-label="My input" />;
}
`;

const getLabelCode = (component: string, packageName: string) => `
import { ${component} } from '${packageName}';

// Accessible input – it has associated label element
function Demo() {
  return <${component} label="My input" />;
}
`;

export function MdxInputAccessibility(props: MdxInputAccessibilityProps) {
  const packageName = props.package || '@mantine/core';
  return (
    <>
      <MdxTitle id="accessibility">Accessibility</MdxTitle>
      <MdxParagraph>
        If <MdxCode>{props.component}</MdxCode> is used without <MdxCode>label</MdxCode> prop, it
        will not be announced properly by screen reader:
      </MdxParagraph>
      <MdxCodeHighlight code={getInaccessibleCode(props.component, packageName)} language="tsx" />

      <MdxParagraph>
        Set <MdxCode>aria-label</MdxCode> to make the input accessible. In this case label will not
        be visible, but screen reader will announce it:
      </MdxParagraph>
      <MdxCodeHighlight code={getAriaLabelCode(props.component, packageName)} language="tsx" />

      <MdxParagraph>
        If <MdxCode>label</MdxCode> prop is set, input will be accessible it is not required to set{' '}
        <MdxCode>aria-label</MdxCode>:
      </MdxParagraph>
      <MdxCodeHighlight code={getLabelCode(props.component, packageName)} language="tsx" />
    </>
  );
}
