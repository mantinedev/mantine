import React, { forwardRef } from 'react';
import Link from 'next/link';

export const NextLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  (props, ref) => (
    <Link href={props.href}>
      <a {...props} ref={ref}>
        {props.children}
      </a>
    </Link>
  )
);
