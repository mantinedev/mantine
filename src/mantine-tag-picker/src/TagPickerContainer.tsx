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
  description?: React.ReactNode;
  createLabel: React.ReactNode;
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
  state = {
    dropdownOpened: true,
    hovered: -1,
    query: '',
    createColor: getRandomColor(this.props.colors),
  };

  closeDropdown = () =>
    this.setState({
      dropdownOpened: false,
      hovered: -1,
      query: '',
    });

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

  render() {
    return (
      <div onKeyDownCapture={this.handleKeyboardEvents}>
        <TagPicker
          query={this.state.query}
          hovered={this.state.hovered}
          dropdownOpened={this.state.dropdownOpened}
        />
      </div>
    );
  }
}
