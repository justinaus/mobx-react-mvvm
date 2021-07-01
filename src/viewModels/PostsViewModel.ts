import { makeAutoObservable } from 'mobx';
import { IPost } from '../interfaces/post.interface';
import PostsModel from '../models/PostsModel';
import Repository from '../utils/Repository';

export default class PostsViewModel {
  private readonly postsModel: PostsModel;

  constructor() {
    makeAutoObservable(this);

    this.postsModel = new PostsModel();
  }

  async getList() {
    const result = await Repository.getList<IPost>('/posts?_page=1&_limit=10');

    if (!result) {
      return;
    }

    this.postsModel.setList(result);
  }

  get list() {
    return this.postsModel.list;
  }
}
