import React from 'react';
import { itSupportsClassName } from './it-supports-classname';
import { itSupportsStyle } from './it-supports-style';
import { itSupportsOthers } from './it-supports-others';
import { itSupportsSx } from './it-supports-sx';
import { itSupportsMargins } from './it-supports-margins';
import { itSupportsPaddings } from './it-supports-paddings';
import { itSupportsRef } from './it-supports-ref';
import { itSupportsProviderDefaultProps } from './it-supports-provider-default-props';

interface Options<T extends React.FC> {
  component: T;
  props: any;
  providerName?: string;
  displayName?: string;
  othersSelector?: string;
  excludeOthers?: boolean;
  excludePadding?: boolean;
  refType?: any;
}

export function itSupportsSystemProps<T extends React.FC>(options: Options<T>) {
  const shouldExcludeOthers = options.excludeOthers || false;
  const shouldExcludePaddings = options.excludePadding || false;

  options.refType && itSupportsRef(options.component, options.props, options.refType);
  options.providerName &&
    itSupportsProviderDefaultProps(
      options.component,
      options.props,
      options.providerName,
      options.othersSelector
    );
  !shouldExcludeOthers &&
    itSupportsOthers(options.component, options.props, options.othersSelector);
  itSupportsClassName(options.component, options.props);
  itSupportsMargins(options.component, options.props);
  !shouldExcludePaddings && itSupportsPaddings(options.component, options.props);
  itSupportsStyle(options.component, options.props);
  itSupportsSx(options.component, options.props);

  if (options.displayName) {
    it('has correct displayName', () => {
      expect(options.component.displayName).toBe(options.displayName);
    });
  }
}
