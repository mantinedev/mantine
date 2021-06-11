import React from 'react';
import { DashboardIcon } from '@modulz/radix-icons';

export interface Category {
  title: string;
  icon: (props: React.ComponentProps<typeof DashboardIcon>) => JSX.Element;
  color: string;
}
