import React from 'react';
import { Icon2fa } from '@tabler/icons-react';

export interface Category {
  title: string;
  icon: (props: React.ComponentProps<typeof Icon2fa>) => JSX.Element;
}
