import { chunkItems } from './chunk-items';
import { transformItems } from './transform-items';
import { ComboboxItem } from '../types';

export function getComboboxData(items: ComboboxItem[]) {
  return chunkItems(transformItems(items));
}
