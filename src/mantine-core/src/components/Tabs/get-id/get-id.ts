import { TABS_ERRORS } from '../Tabs.errors';

export function getId(uid: string, section: 'tab' | 'panel') {
  return (value: string) => {
    if (typeof value !== 'string' || value.trim().length === 0) {
      throw new Error(TABS_ERRORS.value.message);
    }

    return `${uid}-${section}-${value}`;
  };
}
