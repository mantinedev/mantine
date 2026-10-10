export interface OnboardingValues {
  personal: {
    firstName: string;
    lastName: string;
    email: string;
  };
  company: {
    name: string;
    website: string;
  };
  preferences: {
    language: string | null;
    newsletter: boolean;
  };
}
