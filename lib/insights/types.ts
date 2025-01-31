export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
}
