export interface Address {
  street: string;
  city: string;
  zip: string;
}

export interface AddressValues {
  billing: Address;
  shipping: Address;
}
