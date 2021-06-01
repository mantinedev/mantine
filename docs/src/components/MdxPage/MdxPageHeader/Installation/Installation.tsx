import React from 'react';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import { HeaderCode } from '../HeaderCode/HeaderCode';
import { NpmIcon } from '../NpmIcon';
import { YarnIcon } from '../YarnIcon';

interface ImportStatementProps {
  packages: string;
}

export function Installation({ packages }: ImportStatementProps) {
  return (
    <HeaderItem label="Installation" align="flex-start">
      <div>
        <HeaderCode code={`npm install ${packages}`} icon={<NpmIcon />} language="yaml" />
        <HeaderCode code={`yarn add ${packages}`} icon={<YarnIcon />} language="yaml" />
      </div>
    </HeaderItem>
  );
}
