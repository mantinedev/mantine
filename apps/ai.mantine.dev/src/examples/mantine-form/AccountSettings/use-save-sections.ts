import { useState } from 'react';
import type { FormErrors, UseFormReturnType } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { saveSection, ServerValidationError } from './api';
import { SECTION_LABELS } from './constants';
import type { SectionKey } from './types';

export interface SettingsSectionForm {
  key: SectionKey;
  form: UseFormReturnType<any>;
}

interface SectionErrors {
  section: SettingsSectionForm;
  errors: FormErrors;
}

const showErrors = (title: string, failed: SectionErrors[]) => {
  const { section, errors } = failed[0];
  const path = Object.keys(errors)[0];
  path && section.form.getInputNode(path)?.focus();

  const labels = failed.map(({ section: { key } }) => SECTION_LABELS[key]).join(', ');
  notifications.show({ color: 'red', title, message: `Check the highlighted fields in ${labels}` });
};

export function useSaveSections(
  sections: SettingsSectionForm[],
  onSaved: (key: SectionKey, values: any) => void
) {
  const [saving, setSaving] = useState(false);

  const saveOne = async (section: SettingsSectionForm): Promise<SectionErrors | null> => {
    const { key, form } = section;
    try {
      const saved = await saveSection(key, form.getValues());
      // Saved values become the baseline for dirty checks and Cancel
      form.setInitialValues(saved);
      form.resetDirty(saved);
      onSaved(key, saved);
      return null;
    } catch (error) {
      if (error instanceof ServerValidationError) {
        form.setErrors(error.errors);
        return { section, errors: error.errors };
      }
      throw error;
    }
  };

  const save = async () => {
    const dirty = sections.filter(({ form }) => form.isDirty());
    const invalid = dirty
      .map((section) => ({ section, errors: section.form.validate().errors }))
      .filter(({ errors }) => Object.keys(errors).length > 0);

    if (invalid.length > 0) {
      showErrors('Changes not saved', invalid);
      return;
    }

    setSaving(true);
    const results = await Promise.all(dirty.map(saveOne));
    setSaving(false);

    const failed = results.filter((result) => result !== null);
    if (failed.length > 0) {
      showErrors('Some changes were not saved', failed);
      return;
    }

    const labels = dirty.map(({ key }) => SECTION_LABELS[key]).join(', ');
    notifications.show({ title: 'Changes saved', message: labels });
  };

  const cancel = () => {
    sections.forEach(({ form }) => form.isDirty() && form.reset());
  };

  return { saving, save, cancel };
}
