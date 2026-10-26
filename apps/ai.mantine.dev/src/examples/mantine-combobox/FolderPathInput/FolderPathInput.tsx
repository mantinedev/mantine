import { useEffect, useState } from 'react';
import { IconChevronRight, IconFolder, IconFolderOpen, IconFolderPlus } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Code,
  Combobox,
  Input,
  ScrollArea,
  Text,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  filterFolders,
  findMissingSegment,
  FOLDER_NAME_PATTERN,
  FolderNode,
  formatPath,
  getChildren,
  insertFolder,
  splitPath,
  WORKSPACE_TREE,
} from './folderTree';
import classes from './FolderPathInput.module.css';

const CREATE_OPTION = '$create';
const INITIAL_PATH = 'documents/drafts';
const NAME_ERROR = 'Folder names may contain only letters, numbers, spaces, - and _';

interface SavedLocation {
  path: string;
  createdFolders: string[];
}

/** Segments of a complete path: `projects/web/` and `projects/web` are the same folder */
function pathSegments(value: string) {
  const trimmed = value.endsWith('/') ? value.slice(0, -1) : value;
  return trimmed === '' ? [] : splitPath(trimmed);
}

function getPathError(tree: FolderNode[], value: string) {
  const segments = pathSegments(value);
  if (segments.length === 0) {
    return 'Enter a folder path';
  }
  const missing = findMissingSegment(tree, segments);
  if (missing === -1) {
    return null;
  }
  return `Folder “${segments[missing]}” does not exist in ${formatPath(segments.slice(0, missing))}`;
}

function countLabel(count: number) {
  return count === 1 ? '1 document' : `${count} documents`;
}

function isCaretAtEnd(input: HTMLInputElement) {
  return input.selectionStart === input.value.length && input.selectionEnd === input.value.length;
}

export function FolderPathInput() {
  const [tree, setTree] = useState(WORKSPACE_TREE);
  const [value, setValue] = useState(INITIAL_PATH);
  const [blurError, setBlurError] = useState<string | null>(null);
  const [createdFolders, setCreatedFolders] = useState<string[]>([]);
  const [saved, setSaved] = useState<SavedLocation | null>(null);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  // The text after the last `/` is the segment being typed, everything before it is the folder being listed
  const segments = splitPath(value);
  const query = segments[segments.length - 1];
  const parent = segments.slice(0, -1);
  const children = getChildren(tree, parent);
  const folders = children ? filterFolders(children, query) : [];
  const newName = query.trim();

  const nameError = segments.some((segment) => segment !== '' && !FOLDER_NAME_PATTERN.test(segment))
    ? NAME_ERROR
    : null;
  const canCreate =
    children !== null && folders.length === 0 && newName !== '' && nameError === null;
  const isValid = getPathError(tree, value) === null && nameError === null;

  // Highlight the best match while a segment is typed, so Tab completes it like in a shell
  useEffect(() => {
    if (!combobox.dropdownOpened) {
      return;
    }
    if (query.trim() !== '' && folders.length > 0) {
      combobox.selectFirstOption();
    } else {
      combobox.resetSelectedOption();
    }
  }, [value, tree, combobox.dropdownOpened]);

  const changeValue = (next: string) => {
    setValue(next);
    setBlurError(null);
    combobox.openDropdown();
  };

  const enterFolder = (path: string[]) => changeValue(`${path.join('/')}/`);

  const handleOptionSubmit = (option: string) => {
    if (option === CREATE_OPTION) {
      const path = [...parent, newName];
      setTree((current) => insertFolder(current, parent, newName));
      setCreatedFolders((current) => [...current, path.join('/')]);
      enterFolder(path);
      return;
    }
    enterFolder([...parent, option]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const hasHighlight = combobox.dropdownOpened && combobox.getSelectedOptionIndex() !== -1;

    if (event.key === 'Tab' && hasHighlight) {
      event.preventDefault();
      combobox.clickSelectedOption();
      return;
    }

    if (!isCaretAtEnd(input)) {
      return;
    }

    if (event.key === 'ArrowRight' && hasHighlight) {
      event.preventDefault();
      combobox.clickSelectedOption();
    } else if (event.key === '/') {
      // No empty segments; the exact name of a folder moves into it
      const match = children?.find((item) => item.name.toLowerCase() === query.toLowerCase());
      if (query === '' || match) {
        event.preventDefault();
      }
      if (match) {
        enterFolder([...parent, match.name]);
      }
    } else if (event.key === 'Backspace' && value.endsWith('/')) {
      event.preventDefault();
      const up = parent.slice(0, -1);
      changeValue(up.length === 0 ? '' : `${up.join('/')}/`);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    const path = pathSegments(value);
    setSaved({ path: path.join('/'), createdFolders });
    combobox.closeDropdown();
    notifications.show({ title: 'Document saved', message: `Saved to ${formatPath(path)}` });
  };

  const options = folders.map((item) => {
    const hasSubfolders = item.children.length > 0;
    const label = [
      item.name,
      countLabel(item.documents),
      item.isNew && 'new',
      hasSubfolders && 'has subfolders',
    ]
      .filter(Boolean)
      .join(', ');

    return (
      <Combobox.Option value={item.name} key={item.name} aria-label={label}>
        <div className={classes.option}>
          <IconFolder size={16} className={classes.icon} aria-hidden />
          <Text size="sm" className={classes.name} truncate>
            {item.name}
          </Text>
          {item.isNew && (
            <Badge variant="default" size="xs">
              New
            </Badge>
          )}
          <Text size="xs" className={classes.count}>
            {countLabel(item.documents)}
          </Text>
          <span className={classes.hint}>
            {hasSubfolders && <IconChevronRight size={14} aria-hidden />}
          </span>
        </div>
      </Combobox.Option>
    );
  });

  const listedFolder = formatPath(parent);

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Combobox store={combobox} onOptionSubmit={handleOptionSubmit}>
        <Combobox.Target withExpandedAttribute>
          <TextInput
            label="Save to"
            description="Tab completes a folder, / opens it, Backspace after / goes up"
            placeholder="projects/web/forms"
            leftSection={<IconFolder size={16} />}
            value={value}
            error={nameError ?? blurError}
            onChange={(event) => changeValue(event.currentTarget.value)}
            onKeyDown={handleKeyDown}
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => {
              combobox.closeDropdown();
              setBlurError(getPathError(tree, value));
            }}
            spellCheck={false}
            autoComplete="off"
            inputContainer={(input) => (
              <div className={classes.field}>
                <div className={classes.input}>{input}</div>
                <Button type="submit" disabled={!isValid}>
                  Save
                </Button>
              </div>
            )}
          />
        </Combobox.Target>

        <Combobox.Dropdown hidden={nameError !== null}>
          <Combobox.Header className={classes.header}>
            <IconFolderOpen size={14} aria-hidden />
            <Text size="xs" truncate>
              {listedFolder}
            </Text>
          </Combobox.Header>
          <Combobox.Options aria-label={`Subfolders of ${listedFolder}`}>
            <ScrollArea.Autosize mah={280} type="scroll">
              {options}
              {canCreate && (
                <Combobox.Option value={CREATE_OPTION}>
                  <div className={classes.option}>
                    <IconFolderPlus size={16} className={classes.icon} aria-hidden />
                    <Text size="sm" className={classes.name}>
                      Create folder “{newName}” in {listedFolder}
                    </Text>
                  </div>
                </Combobox.Option>
              )}
              {children === null && (
                <Combobox.Empty>{getPathError(tree, parent.join('/'))}</Combobox.Empty>
              )}
              {children !== null && children.length === 0 && query === '' && (
                <Combobox.Empty>No subfolders</Combobox.Empty>
              )}
            </ScrollArea.Autosize>
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      {saved && (
        <div className={classes.saved}>
          <Input.Label labelElement="div">Saved location</Input.Label>
          <Code block aria-label="Saved location">
            {JSON.stringify(saved, null, 2)}
          </Code>
        </div>
      )}
    </form>
  );
}
