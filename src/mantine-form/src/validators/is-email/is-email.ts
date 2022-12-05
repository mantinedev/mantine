import React from 'react';
import { matches } from '../matches/matches';

export function isEmail(error: React.ReactNode) {
  return matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, error);
}
