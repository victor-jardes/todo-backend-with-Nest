import { User } from './User';
import { newUserForTest } from '../../../../test/userValues/userValues';

describe.only('User entitie', () => {
  let instacieUser: User;

  beforeEach(() => {
    const { inMemorieEmail, inMemorieName, inMemoriePassword } = newUserForTest;

    instacieUser = new User({
      email: inMemorieEmail,
      name: inMemorieName,
      password: inMemoriePassword,
    });
  });

  it.only('should be able create a new user', () => {
    const { id, email, name, password } = instacieUser;
    const { inMemorieEmail, inMemorieName, inMemoriePassword } = newUserForTest;

    expect({ id, name, email, password }).toEqual({
      id,
      email: inMemorieEmail,
      name: inMemorieName,
      password: inMemoriePassword,
    });
  });
});
