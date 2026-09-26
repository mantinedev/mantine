import { Header } from '@tanstack/react-table';
import type { DataGridFeatures } from './table-features';

export function getLeafHeaders(
  header: Header<DataGridFeatures, any, unknown>
): Header<DataGridFeatures, any, unknown>[] {
  return header.getLeafHeaders().filter((leaf) => leaf.subHeaders.length === 0);
}
