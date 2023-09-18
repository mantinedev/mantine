import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxLink } from '../MdxLink/MdxLink';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxComboboxDisclaimerProps {
  component: string;
}

export function MdxComboboxDisclaimer({ component }: MdxComboboxDisclaimerProps) {
  return (
    <>
      <MdxTitle id="combobox">Made with Combobox</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> is an <b>opinionated</b> component built on top of{' '}
        <MdxLink href="/core/combobox">Combobox</MdxLink> component. It has a limited set of
        features to cover only the basic use cases. If you need more advanced features, you can
        build your own component with <MdxLink href="/core/combobox">Combobox</MdxLink>. You can
        find examples of custom {component.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()}{' '}
        components on <MdxLink href="/core/combobox">the examples page</MdxLink>.
      </MdxParagraph>
    </>
  );
}
