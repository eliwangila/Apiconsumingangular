export interface IBlogDetailed {
  id: number;
  author: {
    id: number;
    username: string;
  };
  topic: string;
  title: string;
  image: string;
  content: string;
  created_at: string;
  updated_at: string;
}
