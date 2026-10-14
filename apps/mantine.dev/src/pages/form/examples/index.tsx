import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FORM_EXAMPLES_COMPONENTS } from '@/form-examples';

export default function FormExamplesRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const legacyId = router.query.e;
    const exampleId =
      typeof legacyId === 'string' && legacyId in FORM_EXAMPLES_COMPONENTS ? legacyId : 'LoginForm';

    router.replace(`/form/examples/${exampleId}`);
  }, [router.isReady]);

  return null;
}
