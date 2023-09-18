import React from 'react';
import { MdxNpmScript } from '../MdxNpmScript/MdxNpmScript';

interface MdxInstallScriptProps {
  packages: string;
  dev?: boolean;
}

export function MdxInstallScript({ packages, dev }: MdxInstallScriptProps) {
  // Hello good sir/lady. Seems like you are interested in adding pnpm here.
  // Please do not do that, this contribution is not welcome.
  // https://github.com/mantinedev/mantine/pulls?q=is%3Apr+pnpm

  return (
    <MdxNpmScript
      yarnScript={`yarn add ${dev ? '--dev ' : ''}${packages}`}
      npmScript={`npm install ${dev ? '--save-dev ' : ''}${packages}`}
    />
  );
}
