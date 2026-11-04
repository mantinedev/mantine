import { use } from 'react';
import { InputWrapperContext } from '../Input/InputWrapper.context';

export interface MentionsControlProps extends React.ComponentPropsWithoutRef<'textarea'> {
  singleLine: boolean;
  controlRef: React.Ref<HTMLTextAreaElement | HTMLInputElement>;
  interactive: boolean;
  dropdownOpened: boolean;
  listId: string | null;
  activeDescendant: string | undefined;
  popupVisible: boolean;
}

export function MentionsControl({
  singleLine,
  controlRef,
  interactive,
  dropdownOpened,
  listId,
  activeDescendant,
  popupVisible,
  ...others
}: MentionsControlProps) {
  const ctx = use(InputWrapperContext);
  const sharedProps = {
    ref: controlRef as any,
    id: ctx.inputId,
    'aria-describedby': ctx.describedBy,
    ...others,
    role: singleLine ? 'combobox' : undefined,
    'aria-autocomplete': interactive ? ('list' as const) : undefined,
    'aria-haspopup': interactive ? ('listbox' as const) : undefined,
    'aria-expanded': singleLine ? dropdownOpened : undefined,
    'aria-controls': dropdownOpened ? (listId ?? undefined) : undefined,
    'aria-activedescendant': activeDescendant,
    'data-mantine-stop-propagation': dropdownOpened || popupVisible || undefined,
  };

  return singleLine ? (
    <input {...(sharedProps as React.ComponentPropsWithoutRef<'input'>)} />
  ) : (
    <textarea {...sharedProps} />
  );
}

MentionsControl.displayName = '@mantine/core/MentionsControl';
