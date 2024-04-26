import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

interface MdxComboboxLargeDataProps {
  component: string;
}

export function MdxComboboxLargeData({ component }: MdxComboboxLargeDataProps) {
  return (
    <>
      <MdxTitle id="large-data-sets">Large data sets</MdxTitle>
      <MdxParagraph>
        The best strategy for large data sets is to limit the number of options that are rendered at
        the same time. You can do it with <MdxCode>limit</MdxCode> prop. Note that if you use a
        custom <MdxCode>filter</MdxCode> function, you need to implement your own logic to limit the
        number of options in <MdxCode>filter</MdxCode>
      </MdxParagraph>

      <MdxParagraph>
        Example of <MdxCode>{component}</MdxCode> with 100 000 options, 5 options are rendered at
        the same time:
      </MdxParagraph>
    </>
  );
}
