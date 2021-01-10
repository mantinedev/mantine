import React, { Component } from 'react';
import { DefaultProps } from '@mantine/types';
import { TagPickerTag, TagPickerColor } from './types';
import TagPicker from './TagPicker';

interface TagPickerProps extends DefaultProps {
  data: TagPickerTag[];
  colors?: TagPickerColor[];
  value?: TagPickerTag;
  description?: React.ReactNode;
  createLabel: React.ReactNode;
  onChange(value: TagPickerTag): void;
  onSearchChange?(query: string): void;
  onTagCreate(values: TagPickerTag): void;
  onTagDelete(id: string): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
}

interface TagPickerState {
  dropdownOpened: boolean;
  hovered: number;
  query: string;
}

export default class TagPickerContainer extends Component<TagPickerProps, TagPickerState> {
  state = {
    dropdownOpened: true,
    hovered: -1,
    query: '',
  };

  render() {
    return <TagPicker />;
  }
}
