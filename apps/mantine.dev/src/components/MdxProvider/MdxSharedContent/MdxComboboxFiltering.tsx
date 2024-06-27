import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxLi, MdxParagraph, MdxUl } from '../MdxTypography/MdxTypography';

interface MdxComboboxFilteringProps {
  component: string;
}

const valueFormat = '{ value: string; label: string; disabled?: boolean }';

export function MdxComboboxFiltering({ component }: MdxComboboxFilteringProps) {
  return (
    <>
      <MdxTitle id="options-filtering">Options filtering</MdxTitle>
      By default, <MdxCode>{component}</MdxCode> filters options by checking if the option label
      contains input value. You can change this behavior with <MdxCode>filter</MdxCode> prop.
      <MdxCode>filter</MdxCode> function receives an object with the following properties as a
      single argument:
      <MdxUl>
        <MdxLi>
          <MdxCode>options</MdxCode> – array of options or options groups, all options are in{' '}
          <MdxCode>{valueFormat}</MdxCode> format
        </MdxLi>
        <MdxLi>
          <MdxCode>search</MdxCode> – current search query
        </MdxLi>
        <MdxLi>
          <MdxCode>limit</MdxCode> – value of <MdxCode>limit</MdxCode> prop passed to{' '}
          <MdxCode>{component}</MdxCode>
        </MdxLi>
      </MdxUl>
      <MdxParagraph>
        Example of a custom filter function that matches options by words instead of letters
        sequence:
      </MdxParagraph>
    </>
  );
}
