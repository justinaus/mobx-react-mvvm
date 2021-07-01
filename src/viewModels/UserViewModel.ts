import { makeAutoObservable } from 'mobx';
import UserModel from '../models/UserModel';

export default class UserViewModel {
  private readonly userModel: UserModel;

  constructor() {
    makeAutoObservable(this);

    this.userModel = new UserModel();
  }

  get userName() {
    return this.userModel.name;
  }

  get userEmail() {
    return this.userModel.email;
  }
}
