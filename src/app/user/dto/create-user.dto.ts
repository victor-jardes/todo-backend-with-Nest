export class CreateUserDTO {
  id?: string;
  /**
   * name for show in your profile later
   * @example 'my name'
   */
  name: string;
  /**
   * password for your login later
   * @example 'my passw@rd'
   */
  password: string;

  /**
   * email for your login later
   * @example 'email@email.com'
   */
  email: string;
}
