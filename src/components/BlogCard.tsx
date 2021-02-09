import LinkWithArrow from './LinkWithArrow';

interface Props {
  post: {
    id: string;
    author: string;
    title: string;
    cover: string;
    published_date: string;
  };
}

export default function BlogCard({ post }: Props) {
  return (
    <div className="blog-card relative h-80 lg:h-96 rounded-md overflow-hidden">
      <div
        style={{ backgroundImage: 'url(/images/oh__demo6__2a-min.jpg)' }}
        className="back absolute h-full w-full"
      />
      <div className="front p-4 md:p-8 bg-custom-gray relative cursor-pointer h-full w-full ">
        <div className="flex items-center mb-10">
          <div className="w-12 mr-3">
            <img className="w-full" src="/images/blog.jpg" alt="post" />
          </div>
          <div>
            <p>Posted by {post.author}</p>
            <p>{post.published_date}</p>
          </div>
        </div>
        <div>
          <p>
            Guides, Media <span>.</span> 4 min read
          </p>
          <h4 className="font-semibold text-xl sm:text-2xl">{post.title}</h4>
        </div>
        <div className="absolute bottom-8">
          <LinkWithArrow />
        </div>
      </div>
    </div>
  );
}
