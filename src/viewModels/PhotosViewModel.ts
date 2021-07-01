import { makeAutoObservable } from 'mobx';
import { IPhoto } from '../interfaces/photo.interface';
import PhotosModel from '../models/PhotosModel';
import Repository from '../utils/Repository';

export default class PhotosViewModel {
  private readonly photosModel: PhotosModel;

  constructor() {
    makeAutoObservable(this);

    this.photosModel = new PhotosModel();
  }

  async getList() {
    const result = await Repository.getList<IPhoto>(
      '/photos?_page=1&_limit=10',
    );

    if (!result) {
      return;
    }

    this.photosModel.setList(result);
  }

  get list() {
    return this.photosModel.list;
  }
}
