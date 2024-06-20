import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

const getTargetCode = (component: string) => `import { ${component}, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <${component}.Target>
        <button>Native button – ok</button>
      </${component}.Target>

      {/* OK */}
      <${component}.Target>
        <Button>Mantine component – ok</Button>
      </${component}.Target>

      {/* String, NOT OK – will throw error */}
      <${component}.Target>Raw string</${component}.Target>

      {/* Number, NOT OK – will throw error */}
      <${component}.Target>{2}</${component}.Target>

      {/* Fragment, NOT OK – will throw error */}
      <${component}.Target>
        <>Fragment, NOT OK, will throw error</>
      </${component}.Target>

      {/* Multiple nodes, NOT OK – will throw error */}
      <${component}.Target>
        <div>More that one node</div>
        <div>NOT OK, will throw error</div>
      </${component}.Target>
    </>
  );
}`;

const getNoRefCode = (component: string) => `
// Example of code that WILL NOT WORK
import { ${component} } from '@mantine/core';

function MyComponent() {
  return <div>My component</div>;
}

// This will not work – MyComponent does not support ref
function Demo() {
  return (
    <${component}>
      <${component}.Target>
        <MyComponent />
      </${component}.Target>
    </${component}>
  );
}`;

const getForwardRefCode = (component: string) => `
// Example of code that will work
import { forwardRef } from 'react';
import { ${component} } from '@mantine/core';

const MyComponent = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => (
  <div ref={ref} {...props}>
    My component
  </div>
));

// Works correctly – ref is forwarded
function Demo() {
  return (
    <${component}>
      <${component}.Target>
        <MyComponent />
      </${component}.Target>
    </${component}>
  );
}
`;

interface MdxTargetComponentProps {
  component: string;
}

export function MdxTargetComponent({ component }: MdxTargetComponentProps) {
  return (
    <>
      <MdxTitle id="target-children">{`${component}.Target children`}</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}.Target</MdxCode> requires an element or a component as a single child –
        strings, fragments, numbers and multiple elements/components are not supported and{' '}
        <b>will throw error</b>. Custom components must provide a prop to get root element ref, all
        Mantine components support ref out of the box.
      </MdxParagraph>

      <MdxCodeHighlight code={getTargetCode(component)} language="tsx" />

      <MdxTitle id="required-ref-prop">Required ref prop</MdxTitle>
      <MdxParagraph>
        Custom components that are rendered inside {component}.Target are required to support{' '}
        <MdxCode>ref</MdxCode> prop:
      </MdxParagraph>

      <MdxCodeHighlight code={getNoRefCode(component)} language="tsx" />

      <MdxParagraph>
        Use <MdxCode>forwardRef</MdxCode> function to forward ref to root element:
      </MdxParagraph>

      <MdxCodeHighlight code={getForwardRefCode(component)} language="tsx" />
    </>
  );
}
