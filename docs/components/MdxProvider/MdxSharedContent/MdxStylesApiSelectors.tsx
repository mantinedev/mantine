import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxLink } from '../MdxLink/MdxLink';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxStylesApiSelectorsProps {
  component: string;
}

export function MdxStylesApiSelectors({ component }: MdxStylesApiSelectorsProps) {
  return (
    <>
      <MdxTitle id="styles-api">Styles API</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> supports{' '}
        <MdxLink href="/styles/styles-api/">Styles API</MdxLink>, you can add styles to any inner
        element of the component with
        <MdxCode>classNames</MdxCode> prop. Follow{' '}
        <MdxLink href="/styles/styles-api/">Styles API</MdxLink> documentation to learn more.
      </MdxParagraph>
    </>
  );
}
