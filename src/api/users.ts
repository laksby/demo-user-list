import { faker } from '@faker-js/faker';
import { PasswordLevel, User } from '../models';

export function getUsers(): User[] {
  return new Array(10).fill(0).map(() => ({
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    fullName: faker.person.fullName(),
    email: faker.internet.email(),
    birthDate: faker.date.birthdate(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zip: faker.location.zipCode(),
    phone: faker.helpers.fromRegExp('([0-9]{3}) [0-9]{3}-[0-9]{4}'),
    passwordLevel: faker.helpers.arrayElement([PasswordLevel.Weak, PasswordLevel.Average, PasswordLevel.Strong]),
  }));
}
