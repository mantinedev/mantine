import React from 'react';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import { HeaderCode } from '../HeaderCode/HeaderCode';

interface ImportStatementProps {
  code: string;
}

export function ImportStatement({ code }: ImportStatementProps) {
  return (
    <HeaderItem label="Import">
      <HeaderCode code={code} />
    </HeaderItem>
  );
}
