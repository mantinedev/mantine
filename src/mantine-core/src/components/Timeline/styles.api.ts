import { TimelineStylesNames } from './Timeline';

export const Timeline: Record<TimelineStylesNames, string> = {
  item: 'Item root element',
  itemBody: 'Item body, wraps title and content',
  itemTitle: 'Item title, controlled by title prop',
  itemContent: 'Item content, controlled by children prop',
  itemLineActive: 'Item modifier, with active line',
  itemActive: 'Item modifier, active state',
  itemBullet: 'Item bullet',
  itemBulletWithChild: 'Item bullet modifier, with child, controlled by bullet prop',
};
