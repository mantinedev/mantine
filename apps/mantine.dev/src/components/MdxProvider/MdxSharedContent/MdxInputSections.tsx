import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxLi, MdxParagraph, MdxUl } from '../MdxTypography/MdxTypography';

interface MdxInputSectionsProps {
  component: string;
}

export function MdxInputSections({ component }: MdxInputSectionsProps) {
  return (
    <>
      <MdxTitle id="left-and-right-sections">Left and right sections</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> supports <MdxCode>leftSection</MdxCode> and{' '}
        <MdxCode>rightSection</MdxCode> props. These sections are rendered with absolute position
        inside the input wrapper. You can use them to display icons, input controls or any other
        elements.
      </MdxParagraph>

      <MdxParagraph>
        You can use the following props to control sections styles and content:
      </MdxParagraph>
      <MdxUl>
        <MdxLi>
          <MdxCode>rightSection</MdxCode>/<MdxCode>leftSection</MdxCode> – React node to render on
          the corresponding side of input
        </MdxLi>

        <MdxLi>
          <MdxCode>rightSectionWidth</MdxCode>/<MdxCode>leftSectionWidth</MdxCode> – controls width
          of the right section and padding on the corresponding side of the input. By default, it is
          controlled by component <MdxCode>size</MdxCode> prop.
        </MdxLi>

        <MdxLi>
          <MdxCode>rightSectionPointerEvents</MdxCode>/<MdxCode>leftSectionPointerEvents</MdxCode> –
          controls <MdxCode>pointer-events</MdxCode> property of the section. If you want to render
          a non-interactive element, set it to <MdxCode>none</MdxCode> to pass clicks through to the
          input.
        </MdxLi>
      </MdxUl>
    </>
  );
}
