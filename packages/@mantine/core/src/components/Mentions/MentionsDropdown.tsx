import { Combobox } from '../Combobox';
import { ScrollArea } from '../ScrollArea';
import { MentionsOptions, type MentionsOptionsProps } from './MentionsOptions';

export interface MentionsDropdownProps extends Omit<MentionsOptionsProps, 'query'> {
  query: string | null;
  label: string | undefined;
  maxHeight: number | string | undefined;
  unstyled: boolean | undefined;
}

export function MentionsDropdown({
  query,
  label,
  maxHeight,
  unstyled,
  ...others
}: MentionsDropdownProps) {
  return (
    <Combobox.Dropdown>
      <Combobox.Options aria-label={label}>
        <ScrollArea.Autosize
          mah={maxHeight ?? 220}
          type="scroll"
          scrollbars="y"
          unstyled={unstyled}
        >
          {query != null ? <MentionsOptions query={query} {...others} /> : null}
        </ScrollArea.Autosize>
      </Combobox.Options>
    </Combobox.Dropdown>
  );
}

MentionsDropdown.displayName = '@mantine/core/MentionsDropdown';
