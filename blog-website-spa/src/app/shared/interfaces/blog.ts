export interface IBlog {
  id: number;
  author: {
    id: number;
    username: string;
  };
  topic: string;
  title: string;
  image: string;
  created_at: string;
  updated_at: string;
}
