import React, { Component } from 'react';
import { DefaultProps } from '@mantine/types';
import { TagPickerTag, TagPickerColor } from './types';
import TagPicker from './TagPicker';

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
  searchPlaceholder?: string;
  onChange(value: TagPickerTag): void;
  onSearchChange?(query: string): void;
  onTagCreate(values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
}

interface TagPickerState {
  dropdownOpened: boolean;
  hovered: number;
  query: string;
  createColor: string;
}

export default class TagPickerContainer extends Component<TagPickerProps, TagPickerState> {
  contolRef = React.createRef<HTMLButtonElement>();

  state = {
    dropdownOpened: true,
    hovered: -1,
    query: '',
    createColor: getRandomColor(this.props.colors),
  };

  openDropdown = () => this.setState({ dropdownOpened: true });

  closeDropdown = () =>
    this.setState(
      {
        dropdownOpened: false,
        hovered: -1,
        query: '',
      },
      () => this.contolRef.current.focus()
    );

  handleSearchChange = (value: string) => this.setState({ query: value, hovered: 0 });

  handleCreate = () => {
    this.props.onTagCreate({
      color: this.state.createColor,
      name: this.state.query,
    });

    this.setState({ createColor: getRandomColor(this.props.colors) });
    this.closeDropdown();
  };

  handleKeyboardEvents = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (this.state.dropdownOpened) {
      const { code } = event;

      if (code === 'Tab') {
        event.preventDefault();
      }

      if (code === 'Escape') {
        event.preventDefault();
        this.closeDropdown();
      }
    }
  };

  handleChange = (value: TagPickerTag) => {
    this.props.onChange(value);
    this.closeDropdown();
  };

  handleHoveredChange = (index: number) => this.setState({ hovered: index });

  render() {
    return (
      <div onKeyDownCapture={this.handleKeyboardEvents}>
        <TagPicker
          searchQuery={this.state.query}
          hovered={this.state.hovered}
          dropdownOpened={this.state.dropdownOpened}
          controlRef={this.contolRef}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
          description={this.props.description}
          searchPlaceholder={this.props.searchPlaceholder}
          onSearchChange={this.handleSearchChange}
          data={this.props.data}
          canCreate
          createLabel={this.props.createLabel}
          deleteLabel={this.props.deleteLabel}
          onCreate={this.handleCreate}
          colors={this.props.colors}
          onTagUpdate={this.props.onTagUpdate}
          onTagDelete={this.props.onTagDelete}
          onChange={this.handleChange}
          onHoveredChange={this.handleHoveredChange}
        />
      </div>
    );
  }
}
