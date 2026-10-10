import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RECIPES_REDIRECTS: Record<string, string> = {
  '#set-initial-values-with-async-request': 'EditRecord',
  '#save-form-values-to-local-storage': 'AutosaveLocalStorage',
  '#list-items-reordering': 'ReorderListItems',
  '#form-with-multiple-steps': 'StepperWizard',
};

export default function FormRecipesRedirect() {
  const router = useRouter();

  useEffect(() => {
    const example = RECIPES_REDIRECTS[window.location.hash] || 'LoginForm';
    router.replace(`/form/examples?e=${example}`);
  }, []);

  return null;
}
