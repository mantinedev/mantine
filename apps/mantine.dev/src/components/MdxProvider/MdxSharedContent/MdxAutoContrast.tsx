import { MdxLink } from '../MdxLink/MdxLink';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

interface MdxAutoContrastProps {
  component: string;
  withVariant?: boolean;
}

export function MdxAutoContrast({ component, withVariant = true }: MdxAutoContrastProps) {
  return (
    <>
      <MdxTitle id="auto-contrast">autoContrast</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> supports <MdxCode>autoContrast</MdxCode> prop and{' '}
        <MdxLink href="/theming/theme-object/#autocontrast">theme.autoContrast</MdxLink>. If{' '}
        <MdxCode>autoContrast</MdxCode> is set either on <MdxCode>{component}</MdxCode> or on theme,
        content color will be adjusted to have sufficient contrast with the value specified in{' '}
        <MdxCode>color</MdxCode> prop.
      </MdxParagraph>

      <MdxParagraph>
        Note that <MdxCode>autoContrast</MdxCode> feature works only if you use{' '}
        <MdxCode>color</MdxCode> prop to change background color.
        {withVariant && (
          <>
            {' '}
            <MdxCode>autoContrast</MdxCode> works only with <MdxCode>filled</MdxCode> variant.
          </>
        )}
      </MdxParagraph>
    </>
  );
}
