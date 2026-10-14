import { useState, useSyncExternalStore } from 'react';
import { Combobox, Input, InputBase, useCombobox } from '@mantine/core';
import { MemberDetails } from './MemberDetails';
import { membersData } from './members-data';
import classes from './SelectOptionDetails.module.css';

export function SelectOptionDetails() {
  const store = useCombobox({
    onDropdownClose: () => store.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const highlightedOptionId = useSyncExternalStore(
    store.subscribeToSelectedOptionId,
    store.getSelectedOptionId,
    () => null
  );

  const selectedMember = membersData.find((member) => member.value === value) || null;
  const highlightedMember = highlightedOptionId
    ? membersData[store.getSelectedOptionIndex()] || null
    : null;

  const options = membersData.map((member, index) => (
    <Combobox.Option
      value={member.value}
      key={member.value}
      onMouseOver={() => store.selectOption(index)}
    >
      {member.name}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={store}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        store.closeDropdown();
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => store.toggleDropdown()}
          onBlur={() => store.closeDropdown()}
          aria-label="Pick assignee"
        >
          {selectedMember?.name || <Input.Placeholder>Pick assignee</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown onMouseLeave={() => store.resetSelectedOption()}>
        <div className={classes.body}>
          <Combobox.Options className={classes.options}>{options}</Combobox.Options>
          <MemberDetails member={highlightedMember || selectedMember} />
        </div>
      </Combobox.Dropdown>
    </Combobox>
  );
}
