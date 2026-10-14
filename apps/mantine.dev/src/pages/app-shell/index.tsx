import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { APP_SHELL_EXAMPLES_COMPONENTS } from '@/app-shell-examples';

export default function AppShellExamplesRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const legacyId = router.query.e;
    const exampleId =
      typeof legacyId === 'string' && legacyId in APP_SHELL_EXAMPLES_COMPONENTS
        ? legacyId
        : 'BasicAppShell';
    const query = router.query.s === 'code' ? '?s=code' : '';

    router.replace(`/app-shell/${exampleId}${query}`);
  }, [router.isReady]);

  return null;
}
