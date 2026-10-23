import type { FormErrors, UseFormReturnType } from '@mantine/form';
import { saveSection, ServerValidationError } from './api';
import type { SectionId } from './types';

export interface SettingsSectionEntry {
  id: SectionId;
  label: string;
  // Sections hold different values, the save flow only uses the members common to every form
  form: UseFormReturnType<any>;
  dirty: boolean;
}

interface SaveOutcome {
  status: 'saved' | 'invalid' | 'failed';
  errors: FormErrors;
}

export interface SaveSectionsResult {
  saved: SettingsSectionEntry[];
  invalid: SettingsSectionEntry[];
  failed: SettingsSectionEntry[];
}

async function saveEntry({ id, form }: SettingsSectionEntry): Promise<SaveOutcome> {
  const validation = form.validate();
  if (validation.hasErrors) {
    return { status: 'invalid', errors: validation.errors };
  }

  form.setSubmitting(true);
  try {
    const saved = await saveSection(id, form.getValues());
    // Saved values become the new baseline for dirty checks and Cancel
    form.setInitialValues(saved);
    form.resetDirty(saved);
    return { status: 'saved', errors: {} };
  } catch (error) {
    if (error instanceof ServerValidationError) {
      form.setErrors(error.errors);
      return { status: 'failed', errors: error.errors };
    }
    return { status: 'failed', errors: {} };
  } finally {
    form.setSubmitting(false);
  }
}

// Sections are in page order, so the first focused field is the topmost error
const focusFirstError = (entries: SettingsSectionEntry[], outcomes: SaveOutcome[]) => {
  for (const [index, { form }] of entries.entries()) {
    const node = Object.keys(outcomes[index].errors)
      .map((path) => form.getInputNode(path))
      .find(Boolean);
    if (node) {
      node.focus();
      return;
    }
  }
};

export async function saveSections(entries: SettingsSectionEntry[]): Promise<SaveSectionsResult> {
  const outcomes = await Promise.all(entries.map(saveEntry));
  focusFirstError(entries, outcomes);
  const withStatus = (status: SaveOutcome['status']) =>
    entries.filter((_, index) => outcomes[index].status === status);
  return {
    saved: withStatus('saved'),
    invalid: withStatus('invalid'),
    failed: withStatus('failed'),
  };
}
