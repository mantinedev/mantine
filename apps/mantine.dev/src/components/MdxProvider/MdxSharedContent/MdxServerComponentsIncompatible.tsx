import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

interface MdxServerComponentsIncompatibleProps {
  component: string;
}

export function MdxServerComponentsIncompatible({
  component,
}: MdxServerComponentsIncompatibleProps) {
  return (
    <>
      <MdxTitle id="server-components-incompatible">Incompatible with server components</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> is not compatible with React server components as it requires
        function as children. To use <MdxCode>{component}</MdxCode> add{' '}
        <MdxCode>&quot;use client;&quot;</MdxCode> at the top of the file.
      </MdxParagraph>
    </>
  );
}
