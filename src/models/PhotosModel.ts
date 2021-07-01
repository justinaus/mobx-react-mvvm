import { extendObservable, runInAction } from 'mobx';
import { IPhoto } from '../interfaces/photo.interface';

export default class PhotosModel {
  list: IPhoto[] = [];

  constructor() {
    extendObservable(this, {
      list: this.list,
    });
  }

  setList(list: IPhoto[]) {
    runInAction(() => {
      this.list = list;
    });
  }
}
