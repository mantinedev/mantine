import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { COMBOBOX_EXAMPLES_COMPONENTS } from '@/combobox-examples';

export default function ComboboxExamplesRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const legacyId = router.query.e;
    const exampleId =
      typeof legacyId === 'string' && legacyId in COMBOBOX_EXAMPLES_COMPONENTS
        ? legacyId
        : 'BasicSelect';

    router.replace(`/combobox/${exampleId}`);
  }, [router.isReady]);

  return null;
}
