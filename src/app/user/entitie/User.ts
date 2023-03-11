import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

interface UserInfos {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class User {
  private _id: string;
  private props: UserInfos;

  constructor(props: UserInfos) {
    this._id = randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }
  public get name(): string {
    return this.props.name;
  }
  public set name(name: string) {
    this.props.name = name;
  }

  public get password(): string {
    return this.props.password;
  }
  public set password(password: string) {
    this.props.password = password;
  }

  public get email(): string {
    return this.props.email;
  }
  public set email(email: string) {
    this.props.email = email;
  }
}
