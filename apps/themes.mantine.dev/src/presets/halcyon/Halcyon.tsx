'use client';

import { useState } from 'react';
import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { PresetFrame } from '@/components/PresetFrame';
import { BuyBar } from './BuyBar';
import { CartDrawer, type CartItem } from './CartDrawer';
import { Compare } from './Compare';
import { finishes, MAX_QUANTITY } from './data';
import { Faq } from './Faq';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Morning } from './Morning';
import { Nav } from './Nav';
import { Reviews } from './Reviews';
import { Specs } from './Specs';
import { cssVariablesResolver, theme } from './theme';
import classes from './Halcyon.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'halcyon-color-scheme' });

function Launch() {
  const [finish, setFinish] = useState(finishes[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpened, setCartOpened] = useState(false);
  const { ref: heroRef, entry } = useIntersection<HTMLElement>({ threshold: 0 });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = () => {
    setCart((current) => {
      const found = current.find((item) => item.finish.name === finish.name);
      if (found) {
        return current.map((item) =>
          item === found ? { ...item, quantity: Math.min(MAX_QUANTITY, item.quantity + 1) } : item
        );
      }
      return [...current, { finish, quantity: 1 }];
    });
    setCartOpened(true);
  };

  return (
    <div className={classes.root}>
      <Nav cartCount={cartCount} onCartOpen={() => setCartOpened(true)} />
      <Hero ref={heroRef} finish={finish} onFinishChange={setFinish} onPreorder={addToCart} />
      <Morning />
      <Features />
      <Compare />
      <Specs />
      <Reviews />
      <Faq />
      <Footer />
      {entry !== null && !entry.isIntersecting && <BuyBar finish={finish} onPreorder={addToCart} />}
      <CartDrawer
        opened={cartOpened}
        onClose={() => setCartOpened(false)}
        items={cart}
        onItemsChange={setCart}
      />
    </div>
  );
}

export function Halcyon() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        colorSchemeManager={colorSchemeManager}
      >
        <PresetFrame>
          <Launch />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}
