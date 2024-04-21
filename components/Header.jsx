import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div id="branding">
          <span id="logo-span">~/</span> FScode
        </div>
      </Link>
    </header>
  );
};

export default Header;
