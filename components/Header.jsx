import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div
          id="branding"
          className="py-5 md:px-10 px-4 border-b border-gray-700 mb-20 text-yellow-fs font-semibold text-xl"
        >
          <span className="opacity-50">~/</span> FScode
        </div>
      </Link>
    </header>
  );
};

export default Header;
