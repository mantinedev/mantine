export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

export const CATEGORIES = ['Laptops', 'Phones', 'Audio', 'Accessories'];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Aero 14 laptop', category: 'Laptops', price: 1299, inStock: true },
  { id: 2, name: 'Aero 16 laptop', category: 'Laptops', price: 1899, inStock: false },
  { id: 3, name: 'Nimbus ultrabook', category: 'Laptops', price: 999, inStock: true },
  { id: 4, name: 'Pulse X phone', category: 'Phones', price: 899, inStock: true },
  { id: 5, name: 'Pulse mini phone', category: 'Phones', price: 499, inStock: true },
  { id: 6, name: 'Pulse fold phone', category: 'Phones', price: 1599, inStock: false },
  { id: 7, name: 'Echo headphones', category: 'Audio', price: 249, inStock: true },
  { id: 8, name: 'Echo earbuds', category: 'Audio', price: 129, inStock: true },
  { id: 9, name: 'Studio speaker', category: 'Audio', price: 349, inStock: false },
  { id: 10, name: 'USB-C hub', category: 'Accessories', price: 59, inStock: true },
  { id: 11, name: 'Laptop stand', category: 'Accessories', price: 39, inStock: true },
  { id: 12, name: 'Wireless charger', category: 'Accessories', price: 29, inStock: false },
];
