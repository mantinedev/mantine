import { MdxCodeHighlight } from '../MdxPre/MdxPre';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxLi, MdxParagraph, MdxUl } from '../MdxTypography/MdxTypography';

const getCode = (component: string) => `
import { ${component} } from '@mantine/core';

function Demo() {
  return <${component} wrapperProps={{ 'data-testid': 'wrapper' }} data-testid="input" />;
}
`;

interface MdxWrapperPropsProps {
  component: string;
}

export function MdxWrapperProps({ component }: MdxWrapperPropsProps) {
  return (
    <>
      <MdxTitle id="browser-support">Add props to the root element</MdxTitle>
      <MdxParagraph>
        All props passed to the component are forwarded to the input element. If you need to add
        props to the root element, use <MdxCode>wrapperProps</MdxCode>. In the following example:
      </MdxParagraph>

      <MdxUl>
        <MdxLi>
          <MdxCode>data-testid=&quot;wrapper&quot;</MdxCode> is added to the root element
        </MdxLi>
        <MdxLi>
          <MdxCode>data-testid=&quot;input&quot;</MdxCode> is added to the input element
        </MdxLi>
      </MdxUl>

      <MdxCodeHighlight code={getCode(component)} language="tsx" />
    </>
  );
}
