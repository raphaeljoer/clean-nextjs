import { PostModel } from '../entities/PostModel';

export interface getPosts {
  execute(): (first: number) => Promise<PostModel[]>;
}
