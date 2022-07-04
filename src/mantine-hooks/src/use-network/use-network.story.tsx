import React from 'react';
import { useNetwork } from './use-network';

export default { title: 'use-network' };

export const Usage = () => {
  const network = useNetwork();
  return <div>{JSON.stringify(network)}</div>;
};
