import React from 'react';
import {
  IconForms,
  IconCalendar,
  IconStack2,
  IconBold,
  IconNotebook,
  IconSlideshow,
} from '@tabler/icons-react';
import { Inputs } from './demos/Inputs';
import { Dates } from './demos/Dates';
import { Overlays } from './demos/Overlays';
import { Content } from './demos/Content';
import { RichText } from './demos/RichText';
import { Carousel } from './demos/Carousel';
import { DemoTabs } from '../DemoTabs/DemoTabs';

const data = [
  { demo: Inputs, icon: IconForms, name: 'Inputs', description: '20+ input components' },
  {
    demo: Dates,
    icon: IconCalendar,
    name: 'Date pickers',
    description: 'Calendar, date pickers, time inputs',
  },
  {
    demo: Overlays,
    icon: IconStack2,
    name: 'Overlays & Navigation',
    description: 'Modal, HoverCard, Tabs, Stepper',
  },
  { demo: Content, icon: IconNotebook, name: 'Content', description: 'Accordion, Timeline' },
  {
    demo: RichText,
    icon: IconBold,
    name: 'Rich text editor',
    description: 'Tiptap based rich text editor',
  },
  { demo: Carousel, icon: IconSlideshow, name: 'Carousel', description: 'Embla based carousel' },
];

export function Components() {
  return <DemoTabs data={data} title="100+ components" />;
}
