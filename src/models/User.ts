import { PasswordLevel } from './PasswordLevel';

export interface User {
  id: string;
  photo: string;
  fullName: string;
  email: string;
  birthDate: Date;
  city: string;
  zip: string;
  address: string;
  phone: string;
  passwordLevel: PasswordLevel;
}
