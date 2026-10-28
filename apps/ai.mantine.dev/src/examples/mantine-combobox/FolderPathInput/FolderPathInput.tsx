import { useEffect, useState } from 'react';
import { IconChevronRight, IconFolder, IconFolderOpen, IconFolderPlus } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Code,
  Combobox,
  Group,
  Stack,
  Text,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  addFolder,
  canonicalizePath,
  filterFolders,
  findFolder,
  formatPath,
  isValidName,
  NAME_ERROR,
  parsePath,
  resolvePath,
} from './path';
import { WORKSPACE, type Folder } from './workspace';
import classes from './FolderPathInput.module.css';

const CREATE_VALUE = '$create';

interface SavedLocation {
  path: string;
  createdFolders: string[];
}

export interface FolderPathInputProps {
  initialPath?: string;
}

export function FolderPathInput({ initialPath = 'documents/drafts' }: FolderPathInputProps) {
  const [tree, setTree] = useState<Folder[]>(WORKSPACE);
  const [value, setValue] = useState(initialPath);
  const [blurred, setBlurred] = useState(false);
  const [createdFolders, setCreatedFolders] = useState<string[]>([]);
  const [saved, setSaved] = useState<SavedLocation | null>(null);

  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const { parents, segment } = parsePath(value);
  const listed = findFolder(tree, parents);
  const matches = listed ? filterFolders(listed.children, segment) : [];
  const newName = segment.trim();
  const validNames = parents.every(isValidName) && isValidName(segment);
  const canCreate = listed !== null && matches.length === 0 && newName !== '' && validNames;
  const optionsCount = matches.length + (canCreate ? 1 : 0);

  const resolved = resolvePath(tree, value);
  const pathError =
    value.trim() === ''
      ? 'Enter the folder to save the document to'
      : `Folder “${formatPath(parents.concat(segment).filter(Boolean))}” does not exist`;
  const error = !validNames ? NAME_ERROR : blurred && resolved === null ? pathError : null;

  // A completed or removed segment changes the list: highlight its first folder after it renders
  useEffect(() => {
    if (!combobox.dropdownOpened) {
      return;
    }
    if (optionsCount > 0) {
      combobox.selectFirstOption();
    } else {
      combobox.resetSelectedOption();
    }
  }, [combobox, parents.join('/'), segment, optionsCount]);

  const changeValue = (next: string) => {
    setValue(next);
    setBlurred(false);
    combobox.openDropdown();
  };

  const handleOptionSubmit = (optionValue: string) => {
    if (optionValue === CREATE_VALUE) {
      const createdPath = [...parents, newName].join('/');
      setTree((current) =>
        addFolder(current, parents, { name: newName, documents: 0, children: [], isNew: true })
      );
      setCreatedFolders((current) => [...current, createdPath]);
      changeValue(`${createdPath}/`);
    } else {
      changeValue(`${[...parents, optionValue].join('/')}/`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const caretAtEnd = input.selectionStart === value.length && input.selectionEnd === value.length;
    const highlighted = combobox.dropdownOpened && combobox.getSelectedOptionIndex() !== -1;

    if (
      (event.key === 'Tab' && !event.shiftKey && highlighted) ||
      (event.key === 'ArrowRight' && caretAtEnd && highlighted)
    ) {
      event.preventDefault();
      combobox.clickSelectedOption();
    }

    if (event.key === 'Backspace' && caretAtEnd && value.endsWith('/')) {
      event.preventDefault();
      const withoutSlash = value.slice(0, -1);
      changeValue(withoutSlash.slice(0, withoutSlash.lastIndexOf('/') + 1));
    }
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (resolved === null) {
      return;
    }
    const path = resolved.join('/');
    setValue(path);
    setSaved({ path, createdFolders });
    combobox.closeDropdown();
    notifications.show({ title: 'Document saved', message: `Saved to ${formatPath(resolved)}` });
  };

  const options = matches.map((item) => (
    <Combobox.Option value={item.name} key={item.name} className={classes.option}>
      <Group gap="xs" wrap="nowrap">
        <IconFolder size={16} className={classes.icon} aria-hidden />
        <Text size="sm" className={classes.name}>
          {item.name}
        </Text>
        {item.isNew && (
          <Badge variant="default" size="sm">
            New
          </Badge>
        )}
        <Text size="xs" className={classes.meta}>
          {item.documents === 1 ? '1 doc' : `${item.documents} docs`}
        </Text>
        {item.children.length > 0 ? (
          <IconChevronRight
            size={16}
            className={classes.meta}
            role="img"
            aria-label="Has subfolders"
          />
        ) : (
          <span className={classes.hintSpace} />
        )}
      </Group>
    </Combobox.Option>
  ));

  const emptyMessage =
    listed === null
      ? 'This folder does not exist'
      : !validNames
        ? 'No folders match'
        : 'No subfolders, type a name to create one';

  return (
    <Stack gap="md">
      <form onSubmit={handleSubmit}>
        <Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
          <Combobox.Target>
            <TextInput
              label="Save to"
              placeholder="projects/web/forms"
              value={value}
              error={error}
              leftSection={<IconFolder size={16} />}
              onChange={(event) => changeValue(canonicalizePath(tree, event.currentTarget.value))}
              onKeyDown={handleKeyDown}
              onClick={() => combobox.openDropdown()}
              onFocus={() => combobox.openDropdown()}
              onBlur={() => {
                combobox.closeDropdown();
                setBlurred(true);
              }}
              inputContainer={(children) => (
                <Group align="flex-end" wrap="nowrap">
                  <div className={classes.field}>{children}</div>
                  <Button type="submit" disabled={resolved === null}>
                    Save
                  </Button>
                </Group>
              )}
            />
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Header className={classes.header}>
              <Group gap="xs" wrap="nowrap">
                <IconFolderOpen size={16} aria-hidden />
                <Text size="xs">{formatPath(parents)}</Text>
              </Group>
            </Combobox.Header>
            <Combobox.ScrollArea mah={260} viewportProps={{ tabIndex: -1 }}>
              <Combobox.Options aria-label={`Subfolders of ${formatPath(parents)}`}>
                {options}
                {canCreate && (
                  <Combobox.Option value={CREATE_VALUE} className={classes.option}>
                    <Group gap="xs" wrap="nowrap">
                      <IconFolderPlus size={16} className={classes.icon} aria-hidden />
                      <Text size="sm" className={classes.name}>
                        Create folder “{newName}” in {formatPath(parents)}
                      </Text>
                    </Group>
                  </Combobox.Option>
                )}
                {optionsCount === 0 && <Combobox.Empty>{emptyMessage}</Combobox.Empty>}
              </Combobox.Options>
            </Combobox.ScrollArea>
          </Combobox.Dropdown>
        </Combobox>
      </form>

      {saved && (
        <Stack gap="xs">
          <Text size="sm">Saved location</Text>
          <Code block>{JSON.stringify(saved, null, 2)}</Code>
        </Stack>
      )}
    </Stack>
  );
}
