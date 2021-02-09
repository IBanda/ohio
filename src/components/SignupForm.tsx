import Button from './Button';

export default function SignupForm() {
  return (
    <form className="max-w-sm mx-auto">
      <div className="relative h-12 rounded overflow-hidden">
        <input
          className="bg-gray-100 h-full w-full absolute left-0 pl-5 focus:outline-none "
          placeholder="name@email.com"
          type="text"
        />
        <Button
          className="bg-secondary py-3 px-4 text-white absolute h-full z-10 right-0
        "
        >
          Get a Demo
        </Button>
      </div>
    </form>
  );
}
