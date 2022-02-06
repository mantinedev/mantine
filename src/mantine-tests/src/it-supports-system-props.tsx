import React from 'react';
import { itSupportsClassName } from './it-supports-classname';
import { itSupportsStyle } from './it-supports-style';
import { itSupportsOthers } from './it-supports-others';
import { itSupportsSx } from './it-supports-sx';
import { itSupportsMargins } from './it-supports-margins';
import { itSupportsRef } from './it-supports-ref';

interface Options<T extends React.FC> {
  component: T;
  props: any;
  displayName?: string;
  excludeOthers?: boolean;
  refType?: any;
}

export function itSupportsSystemProps<T extends React.FC>(options: Options<T>) {
  const shouldExcludeOthers = options.excludeOthers || false;

  options.refType && itSupportsRef(options.component, options.props, options.refType);
  !shouldExcludeOthers && itSupportsOthers(options.component, options.props);
  itSupportsClassName(options.component, options.props);
  itSupportsMargins(options.component, options.props);
  itSupportsStyle(options.component, options.props);
  itSupportsSx(options.component, options.props);

  if (options.displayName) {
    it('has correct displayName', () => {
      expect(options.component.displayName).toBe(options.displayName);
    });
  }
}
