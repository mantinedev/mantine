import React, { useState, useRef } from 'react';
import { DefaultProps } from '@mantine/types';
import { TagPickerTag, TagPickerColor } from './types';
import TagPicker from './TagPicker/TagPicker';

function getRandomColor(colors: TagPickerColor[]) {
  return colors[Math.floor(Math.random() * colors.length)].color;
}

interface TagPickerProps extends DefaultProps {
  data: TagPickerTag[];
  colors?: TagPickerColor[];
  value?: TagPickerTag;
  description?: string;
  createLabel: string;
  deleteLabel: string;
  noValueLabel: string;
  searchPlaceholder?: string;
  onChange(value: TagPickerTag): void;
  onTagCreate(values: Omit<TagPickerTag, 'id'>): TagPickerTag;
  onTagDelete(id: string): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
}

export default function TagPickerContainer(props: TagPickerProps) {
  const controlRef = useRef<HTMLButtonElement>();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const [query, setQuery] = useState('');
  const [createColor, setCreateColor] = useState(getRandomColor(props.colors));

  const closeDropdown = () => {
    setDropdownOpened(false);
    setHovered(-1);
    setQuery('');
    controlRef.current.focus();
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setHovered(0);
  };

  const handleCreate = () => {
    props.onChange(props.onTagCreate({ color: createColor, name: query }));
    setCreateColor(getRandomColor(props.colors));
    closeDropdown();
  };

  const handleChange = (value: TagPickerTag) => {
    props.onChange(value);
    closeDropdown();
  };

  const filteredData = props.data.filter((tag) =>
    tag.name.toLowerCase().trim().includes(query.toLowerCase().trim())
  );

  const canCreate =
    query.trim().length > 0 &&
    props.data.every((tag) => tag.name.toLowerCase().trim() !== query.trim().toLowerCase());

  const handleKeyboardEvents = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (dropdownOpened) {
      const { code } = event.nativeEvent;

      if (code === 'Escape') {
        event.preventDefault();
        closeDropdown();
      }

      if (code === 'ArrowUp') {
        event.preventDefault();
        const targetIndex = canCreate ? filteredData.length : filteredData.length - 1;
        setHovered(hovered <= 0 ? targetIndex : hovered - 1);
      }

      if (code === 'ArrowDown') {
        event.preventDefault();
        const targetIndex = canCreate ? hovered : hovered + 1;
        setHovered(targetIndex === filteredData.length ? 0 : hovered + 1);
      }

      if (code === 'Enter' && hovered > -1) {
        event.preventDefault();

        if (filteredData[hovered]) {
          handleChange(filteredData[hovered]);
          closeDropdown();
        }

        if (canCreate && hovered === filteredData.length) {
          handleCreate();
        }
      }
    }
  };

  return (
    <div onKeyDownCapture={handleKeyboardEvents}>
      <TagPicker
        createColor={createColor}
        searchQuery={query}
        hovered={hovered}
        dropdownOpened={dropdownOpened}
        controlRef={controlRef}
        openDropdown={() => setDropdownOpened(true)}
        closeDropdown={closeDropdown}
        description={props.description}
        searchPlaceholder={props.searchPlaceholder}
        onSearchChange={handleSearchChange}
        data={filteredData}
        canCreate={canCreate}
        value={props.value}
        createLabel={props.createLabel}
        deleteLabel={props.deleteLabel}
        noValueLabel={props.noValueLabel}
        onCreate={handleCreate}
        colors={props.colors}
        onTagUpdate={props.onTagUpdate}
        onTagDelete={props.onTagDelete}
        onChange={handleChange}
        onHoveredChange={setHovered}
      />
    </div>
  );
}
