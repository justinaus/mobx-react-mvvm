import { extendObservable } from 'mobx';

export default class UserModel {
  constructor() {
    extendObservable(this, {
      name: this.name,
      email: this.email,
    });
  }

  get name() {
    return 'Justinaus';
  }

  get email() {
    return 'justinaus2k@gmail.com';
  }
}
