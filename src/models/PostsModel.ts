import { extendObservable, runInAction } from 'mobx';
import { IPost } from '../interfaces/post.interface';

export default class PostsModel {
  list: IPost[] = [];

  constructor() {
    extendObservable(this, {
      list: this.list,
    });
  }

  setList(list: IPost[]) {
    runInAction(() => {
      this.list = list;
    });
  }
}
