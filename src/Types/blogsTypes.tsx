export interface authorComponentProps {
  authorName: string;
  quote: string;
}

export interface BlogCardProps {
  title: string;
  content: string;
  authorName: string;
  blogId: string;
}

export interface AuthorProps {
  username: string;
  email: string;
  password?: string;
  id: number;
}

export interface Blog {
  author: AuthorProps;
  authorId: number;
  content: string;
  createdAt: string;
  id: string;
  published: boolean;
  title: string;
}

export interface InputForNewBlog {
    title: string;
    content: string;
  }
