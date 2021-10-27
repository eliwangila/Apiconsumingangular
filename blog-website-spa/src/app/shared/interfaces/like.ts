export interface ILike {
  id: number;
  user: {
    id: number;
    username: string
  };
  blog: {
    id: number;
    author: {
      id: number;
      username: string
    };
    topic: string;
    title: string;
    image: string;
    created_at: string;
    updated_at: string;
  }
}
