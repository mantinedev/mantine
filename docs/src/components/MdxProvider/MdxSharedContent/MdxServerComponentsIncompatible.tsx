import React from 'react';
import { MdxParagraph, MdxCode } from '../MdxTypography/MdxTypography';
import { MdxTitle } from '../MdxTitle/MdxTitle';

interface MdxServerComponentsIncompatibleProps {
  component: string;
}

export function MdxServerComponentsIncompatible({
  component,
}: MdxServerComponentsIncompatibleProps) {
  return (
    <>
      <MdxTitle id="server-components-incompatible">Incompatible with server components</MdxTitle>
      <MdxParagraph>
        <MdxCode>{component}</MdxCode> is not compatible with React server components as it requires
        function as children. To use <MdxCode>{component}</MdxCode> set{' '}
        <MdxCode>&quot;use client;&quot;</MdxCode> at the top of your file.
      </MdxParagraph>
    </>
  );
}
