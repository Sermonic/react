import Link from "next/link";

const Navbar = () => {
  const styles = {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    background: "grey",
  };

  return (
    <div style={styles}>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </div>
  );
};

export default Navbar;
