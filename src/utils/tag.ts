import { TagType } from '../components';
import { PasswordLevel } from '../models';

export function getPasswordLevelTagType(passwordLevel: PasswordLevel): TagType {
  switch (passwordLevel) {
    case PasswordLevel.Weak:
      return 'Danger';
    case PasswordLevel.Average:
      return 'Warning';
    case PasswordLevel.Strong:
      return 'Success';
    default:
      const exhaustiveCheck: never = passwordLevel;
      throw new Error(`Unhandled password level: ${exhaustiveCheck}`);
  }
}
