import { createContext } from 'react';
import { MantineNumberSize } from '@mantine/styles';

interface NavbarContextType {
  padding: MantineNumberSize;
}

export const NavbarContext = createContext<NavbarContextType>({ padding: 'md' });
