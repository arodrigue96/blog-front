export interface PostData {
  title: string;
  author: string;
  content: string;
  imageUrl: string;
  altImageText: string;
}

export interface Post extends PostData {
  id: number;
  date: Date;
}
