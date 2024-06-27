import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxGetElementRefProps {
  component: string;
  refType: string;
  package?: string;
}

const commonRefs: Record<string, string> = {
  div: 'HTMLDivElement',
  button: 'HTMLButtonElement',
  input: 'HTMLInputElement',
  textarea: 'HTMLTextAreaElement',
  select: 'HTMLSelectElement',
  a: 'HTMLAnchorElement',
};

function getRefCode(input: MdxGetElementRefProps) {
  const refType = input.refType in commonRefs ? commonRefs[input.refType] : input.refType;
  return `import { useRef } from 'react';
import { ${input.component} } from '${input.package || '@mantine/core'}';

function Demo() {
  const ref = useRef<${refType}>(null);
  return <${input.component} ref={ref} />;
}
  `;
}

export function MdxGetElementRef(props: MdxGetElementRefProps) {
  return (
    <>
      <MdxTitle id="get-element-ref">Get element ref</MdxTitle>
      <MdxCodeHighlight code={getRefCode(props)} />
    </>
  );
}
