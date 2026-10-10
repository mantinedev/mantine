export interface PasswordRequirement {
  re: RegExp;
  label: string;
}

export const PASSWORD_REQUIREMENTS: PasswordRequirement[] = [
  { re: /.{8,}/, label: 'At least 8 characters' },
  { re: /[0-9]/, label: 'Includes a number' },
  { re: /[a-z]/, label: 'Includes a lowercase letter' },
  { re: /[A-Z]/, label: 'Includes an uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes a special symbol' },
];

export function getStrength(password: string) {
  const passed = PASSWORD_REQUIREMENTS.filter((requirement) => requirement.re.test(password));
  return Math.round((passed.length / PASSWORD_REQUIREMENTS.length) * 100);
}

export function getStrengthColor(strength: number) {
  if (strength === 100) {
    return 'teal';
  }

  return strength >= 60 ? 'yellow' : 'red';
}

export function validatePassword(password: string) {
  const failed = PASSWORD_REQUIREMENTS.find((requirement) => !requirement.re.test(password));
  return failed ? `Password must satisfy: ${failed.label.toLowerCase()}` : null;
}
