import posts from '../data/posts';
import BlogCard from './BlogCard';
import Button from './Button';
import { Subtitle, Title } from './Typography';

export default function Blog() {
  return (
    <section id="blog" className="container my-20">
      <div className="text-gray-500">
        <h2 className="text-sm font-bold text-gray-500 uppercase">
          from the blog
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3  gap-10">
        <div className="col-span-2">
          <Title className="max-w-md mt-4 mb-8">
            Quick and neat,just like your work.
          </Title>
          <Subtitle className="mb-8">
            So how does it work? Let’s check our Getting Started
          </Subtitle>
          <Button className="bg-transparent border border-solid border-black text-black py-1 px-3 hover:text-white">
            Read all guides
          </Button>
        </div>
        {posts.map((post) => (
          <div key={post.id} className="col-span-2 lg:col-span-1">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
