import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxLi, MdxParagraph, MdxUl } from '../MdxTypography/MdxTypography';

export function MdxClearSectionMode() {
  return (
    <>
      <MdxTitle id="clear-section-mode">Clear section mode</MdxTitle>
      <MdxParagraph>
        The <MdxCode>clearSectionMode</MdxCode> prop determines how the clear button and{' '}
        <MdxCode>rightSection</MdxCode> are rendered:
      </MdxParagraph>
      <MdxUl>
        <MdxLi>
          <MdxCode>'both'</MdxCode> (default) – render both the clear button and{' '}
          <MdxCode>rightSection</MdxCode>
        </MdxLi>
        <MdxLi>
          <MdxCode>'rightSection'</MdxCode> – render only the user-supplied{' '}
          <MdxCode>rightSection</MdxCode>, ignore clear button
        </MdxLi>
        <MdxLi>
          <MdxCode>'clear'</MdxCode> – render only the clear button, ignore{' '}
          <MdxCode>rightSection</MdxCode>
        </MdxLi>
      </MdxUl>
    </>
  );
}
