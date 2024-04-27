import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 flex items-center justify-between border-t border-gray-fs-100 py-5 text-right">
      <div className="m-auto pl-1 opacity-30 transition-opacity duration-200 hover:opacity-80">
        <Link href="/">
          <Image src="./fscode32x32.png" width={32} height={32} alt="logo" />
        </Link>
      </div>
      <span
        id="date"
        className="border-r-8  border-yellow-fs pb-[1px] pr-1 pt-[6px] text-gray-500"
      >
        2024
      </span>
    </footer>
  );
};

export default Footer;
