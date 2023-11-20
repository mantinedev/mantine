import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxTitle } from '../MdxTitle/MdxTitle';
import { MdxLink } from '../MdxLink/MdxLink';

interface MdxGradientProps {
  component: string;
}

export function MdxGradient({ component }: MdxGradientProps) {
  return (
    <>
      <MdxTitle id="gradient-variant">Gradient variant</MdxTitle>
      <MdxParagraph>
        When <MdxCode>variant</MdxCode> prop is set to <MdxCode>gradient</MdxCode>, you can control
        gradient with <MdxCode>gradient</MdxCode> prop, it accepts an object with{' '}
        <MdxCode>from</MdxCode>, <MdxCode>to</MdxCode> and <MdxCode>deg</MdxCode> properties. If the
        <MdxCode>gradient</MdxCode> prop is not set, <MdxCode>{component}</MdxCode> will use{' '}
        <MdxCode>theme.defaultGradient</MdxCode> which can be configured on the{' '}
        <MdxLink href="/theming/theme-object">theme object</MdxLink>. <MdxCode>gradient</MdxCode>{' '}
        prop is ignored when <MdxCode>variant</MdxCode> is not <MdxCode>gradient</MdxCode>.
      </MdxParagraph>

      <MdxParagraph>
        Note that <MdxCode>variant=&quot;gradient&quot;</MdxCode> supports only linear gradients
        with two colors. If you need a more complex gradient, then use{' '}
        <MdxLink href="/styles/styles-api">Styles API</MdxLink> to modify{' '}
        <MdxCode>{component}</MdxCode> styles.
      </MdxParagraph>
    </>
  );
}
