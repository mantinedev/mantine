import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxLink } from '../MdxLink/MdxLink';

interface MdxInputFeaturesProps {
  component: string;
  element: string;
}

export function MdxInputFeatures({ component, element }: MdxInputFeaturesProps) {
  return (
    <MdxParagraph>
      <MdxCode>{component}</MdxCode> component supports <MdxLink href="/core/input">Input</MdxLink>{' '}
      and <MdxLink href="/core/input">Input.Wrapper</MdxLink> components features and all{' '}
      <MdxCode>{element}</MdxCode> element props. <MdxCode>{component}</MdxCode> documentation does
      not include all features supported by the component – see{' '}
      <MdxLink href="/core/input">Input</MdxLink> documentation to learn about all available
      features.
    </MdxParagraph>
  );
}
