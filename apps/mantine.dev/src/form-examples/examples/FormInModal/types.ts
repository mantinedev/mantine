export interface UserValues {
  name: string;
  email: string;
  role: string | null;
}

export interface User extends UserValues {
  id: number;
}
