import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxLink } from '../MdxLink/MdxLink';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxFlexboxGapSupportProps {
  component: string;
}

export function MdxFlexboxGapSupport({ component }: MdxFlexboxGapSupportProps) {
  return (
    <>
      <MdxTitle id="browser-support">Browser support</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> uses{' '}
        <MdxLink href="https://caniuse.com/flexbox-gap">flexbox gap</MdxLink> to add spacing between
        children. In older browsers, <MdxCode>{component}</MdxCode> children may not have spacing.
        You can install PostCSS{' '}
        <MdxLink href="https://github.com/gavinmcfarland/flex-gap-polyfill">
          flex-gap-polyfill
        </MdxLink>{' '}
        to add support for older browsers.
      </MdxParagraph>
    </>
  );
}
