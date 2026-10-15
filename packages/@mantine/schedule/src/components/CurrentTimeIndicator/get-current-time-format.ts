import { DateLabelFormat } from '../../types';

export function getCurrentTimeFormat(slotLabelFormat: DateLabelFormat | undefined): string {
  if (typeof slotLabelFormat !== 'string') {
    return 'HH:mm';
  }

  const tokens = slotLabelFormat.replace(/\[[^\]]*\]/g, '');

  if (tokens.includes('mm')) {
    return slotLabelFormat;
  }

  return /[hAa]/.test(tokens) ? 'h:mm A' : 'HH:mm';
}
