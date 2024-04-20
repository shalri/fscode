import Link from "next/link";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b">
      <Link href="/">
        <h1 className="text-yellow-fs">
          <span id="logo-span">~/</span> FScode
        </h1>
      </Link>
    </header>
  );
};

export default Header;
