import React, { useState, useRef } from 'react';
import { DefaultProps, MantineTransition } from '@mantine/core';
import { TagPickerTag, TagPickerColor } from './types';
import { TagPicker } from './TagPicker/TagPicker';

function getRandomColor(colors: TagPickerColor[]) {
  return colors[Math.floor(Math.random() * colors.length)].color;
}

interface TagPickerProps extends DefaultProps {
  /** Options which should be rendered in the dropdown list */
  data: TagPickerTag[];

  /** Currently selected tag */
  value?: TagPickerTag;

  /** Called when user selects tag */
  onChange(value: TagPickerTag): void;

  /** Possible colors which tag can have */
  colors?: TagPickerColor[];

  /** Description displayed after search input */
  description?: string;

  /** Label for create control */
  createLabel?: string;

  /** Label for delete control */
  deleteLabel?: string;

  /** aria-label for save control */
  saveLabel?: string;

  /** aria-label for tag name edit field */
  tagNameEditLabel?: string;

  /** aria-label for edit tag control */
  editTagLabel?: string;

  /** aria-labelledby attribute for button control */
  labelledBy?: string;

  /** Set id on control, use it to connect with label */
  controlId?: string;

  /** Tag with this value is displayed when value prop is null */
  noValueLabel: string;

  /** Search field placeholder */
  searchPlaceholder?: string;

  /** Enable user to create new tags */
  enableCreate?: boolean;

  /** Enable user to update existing tags */
  enableUpdate?: boolean;

  /** Enable user to delete existing tags */
  enableDelete?: boolean;

  /** Enable user to change tag colors */
  enableColorChange?: boolean;

  /** Mount/unmount transitions for all dropdowns */
  transition?: MantineTransition;

  /** Mount/unmount transitions transitionTimingFunction, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;

  /** Mount/unmount transition duration for all dropdowns */
  transitionDuration?: number;

  /** Called when dropdown opens */
  onDropdownOpen?(): void;

  /** Called when dropdown closes */
  onDropdownClose?(): void;

  /** Called when search changes */
  onSearchChange?(query: string): void;

  /** Get control ref */
  controlRef?: React.RefCallback<HTMLButtonElement>;

  /** Called when user creates new tag */
  onTagCreate?(values: Omit<TagPickerTag, 'id'>): TagPickerTag;

  /** Called when user deletes tag */
  onTagDelete?(id: string): void;

  /** Called when user updates tag */
  onTagUpdate?(id: string, values: Omit<TagPickerTag, 'id'>): void;
}

export function TagPickerContainer({ transitionDuration = 250, ...props }: TagPickerProps) {
  const controlRef = useRef<HTMLButtonElement>();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const [query, setQuery] = useState('');
  const [createColor, setCreateColor] = useState(getRandomColor(props.colors));
  const [shouldCaptureEvents, setShouldCaptureEvents] = useState(true);
  const [shouldCaptureArrowEvents, setShouldCaptureArrowEvents] = useState(true);

  const closeDropdown = () => {
    if (shouldCaptureEvents) {
      setDropdownOpened(false);
      setHovered(-1);
      setQuery('');
      setTimeout(() => controlRef.current.focus(), transitionDuration + 35);
      typeof props.onDropdownClose === 'function' && props.onDropdownClose();
    }
  };

  const openDropdown = () => {
    setDropdownOpened(true);
    typeof props.onDropdownOpen === 'function' && props.onDropdownOpen();
  };

  const handleSearchChange = (value: string) => {
    setQuery(value);
    setHovered(0);
    typeof props.onSearchChange === 'function' && props.onSearchChange(value);
  };

  const handleCreate = () => {
    props.onChange(props.onTagCreate({ color: createColor, name: query }));
    setCreateColor(getRandomColor(props.colors));
    closeDropdown();
  };

  const handleUpdate = (id: string, values: Omit<TagPickerTag, 'id'>) => {
    if (props.value && props.value.id === id) {
      props.onChange({ ...values, id });
    }

    props.onTagUpdate(id, values);
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
    if (dropdownOpened && shouldCaptureEvents) {
      const { code } = event.nativeEvent;

      if (code === 'Escape') {
        event.preventDefault();
        closeDropdown();
      }

      if (code === 'ArrowUp' && shouldCaptureArrowEvents) {
        event.preventDefault();
        const targetIndex = canCreate ? filteredData.length : filteredData.length - 1;
        setHovered(hovered <= 0 ? targetIndex : hovered - 1);
      }

      if (code === 'ArrowDown' && shouldCaptureArrowEvents) {
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
    <div onKeyDownCapture={handleKeyboardEvents} className={props.className} style={props.style}>
      <TagPicker
        createColor={createColor}
        searchQuery={query}
        hovered={hovered}
        dropdownOpened={dropdownOpened}
        controlRef={(node: HTMLButtonElement) => {
          controlRef.current = node;
          typeof props.controlRef === 'function' && props.controlRef(node);
        }}
        openDropdown={openDropdown}
        closeDropdown={closeDropdown}
        description={props.description}
        searchPlaceholder={props.searchPlaceholder}
        onSearchChange={handleSearchChange}
        data={filteredData}
        canCreate={canCreate}
        value={props.value}
        createLabel={props.createLabel}
        saveLabel={props.saveLabel}
        editTagLabel={props.editTagLabel}
        deleteLabel={props.deleteLabel}
        noValueLabel={props.noValueLabel}
        tagNameEditLabel={props.tagNameEditLabel}
        onCreate={handleCreate}
        colors={props.colors}
        onTagUpdate={handleUpdate}
        onTagDelete={props.onTagDelete}
        onChange={handleChange}
        onHoveredChange={setHovered}
        onEventsCaptureChange={setShouldCaptureEvents}
        onArrowsCaptureChange={setShouldCaptureArrowEvents}
        enableCreate={props.enableCreate}
        enableUpdate={props.enableUpdate}
        enableDelete={props.enableDelete}
        enableColorChange={props.enableColorChange}
        transitionDuration={transitionDuration}
        transition={props.transition}
        transitionTimingFunction={props.transitionTimingFunction}
        themeOverride={props.themeOverride}
      />
    </div>
  );
}
