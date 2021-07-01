import http from './http';

class Repository {
  async getList<T>(apiPath: string): Promise<T[] | void> {
    try {
      const { data } = await http.get(apiPath);

      return data;
    } catch (error) {}
  }
}

export default new Repository();
