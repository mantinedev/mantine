import { MdxLink } from '../MdxLink/MdxLink';
import { MdxCode, MdxParagraph } from '../MdxTypography/MdxTypography';

interface MdxInputFeaturesProps {
  component: string;
  element: string;
}

export function MdxInputFeatures({ component, element }: MdxInputFeaturesProps) {
  return (
    <MdxParagraph>
      <MdxCode>{component}</MdxCode> component supports <MdxLink href="/core/input">Input</MdxLink>{' '}
      and <MdxLink href="/core/input">Input.Wrapper</MdxLink> component features and all{' '}
      <MdxCode>{element}</MdxCode> element props. The <MdxCode>{component}</MdxCode> documentation
      does not include all features supported by the component – see the{' '}
      <MdxLink href="/core/input">Input</MdxLink> documentation to learn about all available
      features.
    </MdxParagraph>
  );
}
