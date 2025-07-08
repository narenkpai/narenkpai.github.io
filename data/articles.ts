// data/articles.ts

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  published_at: string;
}

export const articles: Article[] = [
  // Example:
  // {
  //   id: '1',
  //   title: 'My First Article',
  //   description: 'A short description of my first article.',
  //   url: 'https://example.com/my-first-article',
  //   published_at: '2024-06-01',
  // },
]; 