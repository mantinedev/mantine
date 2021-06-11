import React from 'react';
import { Link } from 'gatsby';
import Head from '../Head/Head';

export function HomePage() {
  return (
    <div style={{ padding: 300 }}>
      <Head title="Mantine" disableTitleTemplate />
      <Link to="/core/tabs/">Tabs</Link>
    </div>
  );
}
