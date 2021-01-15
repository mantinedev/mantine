import React, { Component } from 'react';
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
  onSearchChange?(query: string): void;
  onTagCreate(values: Omit<TagPickerTag, 'id'>): TagPickerTag;
  onTagDelete(id: string): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
}

interface TagPickerState {
  dropdownOpened: boolean;
  hovered: number;
  query: string;
  createColor: string;
  canCreate: boolean;
  filteredData: TagPickerTag[];
}

export default class TagPickerContainer extends Component<TagPickerProps, TagPickerState> {
  contolRef = React.createRef<HTMLButtonElement>();

  state = {
    dropdownOpened: false,
    hovered: -1,
    query: '',
    createColor: getRandomColor(this.props.colors),
    canCreate: false,
    filteredData: this.props.data,
  };

  openDropdown = () => this.setState({ dropdownOpened: true });

  closeDropdown = () =>
    this.setState(
      {
        dropdownOpened: false,
        hovered: -1,
        query: '',
        canCreate: false,
        filteredData: this.props.data,
      },
      () => this.contolRef.current.focus()
    );

  handleSearchChange = (value: string) =>
    this.setState({
      query: value,
      hovered: 0,
      filteredData: this.props.data.filter((tag) =>
        tag.name.toLowerCase().trim().includes(value.toLowerCase().trim())
      ),
      canCreate:
        value.trim().length > 0 &&
        this.props.data.every(
          (tag) => tag.name.toLowerCase().trim() !== value.trim().toLowerCase()
        ),
    });

  handleCreate = () => {
    const tag = this.props.onTagCreate({
      color: this.state.createColor,
      name: this.state.query,
    });

    this.props.onChange(tag);

    this.setState({ createColor: getRandomColor(this.props.colors) });
    this.closeDropdown();
  };

  handleKeyboardEvents = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (this.state.dropdownOpened) {
      const { code } = event.nativeEvent;
      const { canCreate, hovered, filteredData } = this.state;

      if (code === 'Escape') {
        event.preventDefault();
        this.closeDropdown();
      }

      if (code === 'ArrowUp') {
        event.preventDefault();
        const targetIndex = canCreate ? filteredData.length : filteredData.length - 1;
        this.setState({ hovered: hovered <= 0 ? targetIndex : hovered - 1 });
      }

      if (code === 'ArrowDown') {
        event.preventDefault();
        const targetIndex = canCreate ? hovered : hovered + 1;
        this.setState({ hovered: targetIndex === filteredData.length ? 0 : hovered + 1 });
      }

      if (code === 'Enter' && hovered > -1) {
        event.preventDefault();

        if (filteredData[hovered]) {
          this.handleChange(filteredData[hovered]);
          this.closeDropdown();
        }

        if (canCreate && hovered === filteredData.length) {
          this.handleCreate();
        }
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
          createColor={this.state.createColor}
          searchQuery={this.state.query}
          hovered={this.state.hovered}
          dropdownOpened={this.state.dropdownOpened}
          controlRef={this.contolRef}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
          description={this.props.description}
          searchPlaceholder={this.props.searchPlaceholder}
          onSearchChange={this.handleSearchChange}
          data={this.state.filteredData}
          canCreate={this.state.canCreate}
          value={this.props.value}
          createLabel={this.props.createLabel}
          deleteLabel={this.props.deleteLabel}
          noValueLabel={this.props.noValueLabel}
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
