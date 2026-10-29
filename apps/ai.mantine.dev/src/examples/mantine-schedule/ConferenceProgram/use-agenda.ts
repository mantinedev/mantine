import { readLocalStorageValue, useLocalStorage } from '@mantine/hooks';

export const AGENDA_STORAGE_KEY = 'conference-program-agenda';

const EMPTY_AGENDA: string[] = [];

// The program and the talk details modal each call this hook; they stay in sync through local storage
export function useAgenda() {
  const [talkIds, setTalkIds] = useLocalStorage<string[]>({
    key: AGENDA_STORAGE_KEY,
    defaultValue: EMPTY_AGENDA,
    getInitialValueInEffect: false,
  });

  // Plain values (not updater functions) notify the other hook instances synchronously
  const read = () =>
    readLocalStorageValue<string[]>({ key: AGENDA_STORAGE_KEY, defaultValue: EMPTY_AGENDA });

  const add = (talkId: string) => {
    const current = read();
    if (!current.includes(talkId)) {
      setTalkIds([...current, talkId]);
    }
  };

  const remove = (talkId: string) => setTalkIds(read().filter((id) => id !== talkId));

  return { talkIds, add, remove, has: (talkId: string) => talkIds.includes(talkId) };
}
