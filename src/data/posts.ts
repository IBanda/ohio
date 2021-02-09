interface Post {
  id: string;
  author: string;
  title: string;
  cover: string;
  published_date: string;
}

const posts: Post[] = [
  {
    id: '1',
    author: 'Colabrio',
    title: 'Outdoor Work: a Designer’s Checklist for Every UX Project.',
    cover: 'oh__demo6__2a-min',
    published_date: 'December 18, 2020',
  },
  {
    id: '2',
    author: 'Colabrio',
    title: 'Outdoor Work: a Designer’s Checklist for Every UX Project.',
    cover: 'oh__demo6__2a-min',
    published_date: 'December 18, 2020',
  },
  {
    id: '3',
    author: 'Colabrio',
    title: 'Creativo Jóvenes: a Designer’s UI/UX Complete Checklist.',
    cover: 'oh__demo6__2a-min',
    published_date: 'December 15, 2020',
  },
  {
    id: '4',
    author: 'Colabrio',
    title: 'Definitive Guide to Make a Daily More Productive Working Flow.',
    cover: 'oh__demo6__2a-min',
    published_date: 'December 9, 2020',
  },
];
export default posts;
