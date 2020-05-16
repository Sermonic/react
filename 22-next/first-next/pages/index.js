import Link from "next/link";

const Page = () => {
  console.log("Running Index Page!");

  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
      <h1>Index Page!</h1>
    </div>
  );
};

export default Page;
