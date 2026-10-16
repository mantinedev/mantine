import { Combobox } from '../Combobox';
import { PopoverScrollArea } from '../Popover/PopoverScrollArea/PopoverScrollArea';
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
        <PopoverScrollArea mah={maxHeight ?? 220} scrollbars="y" unstyled={unstyled}>
          {query != null ? <MentionsOptions query={query} {...others} /> : null}
        </PopoverScrollArea>
      </Combobox.Options>
    </Combobox.Dropdown>
  );
}

MentionsDropdown.displayName = '@mantine/core/MentionsDropdown';
