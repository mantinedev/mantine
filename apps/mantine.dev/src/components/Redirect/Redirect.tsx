import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mantine/core';

interface RedirectProps {
  to: string;
}

export function Redirect({ to }: RedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const redirectLink = window.location.hash ? `${to}${window.location.hash}` : to;
    router.replace(redirectLink);
  }, []);

  return <Box p="xl">Redirecting...</Box>;
}
