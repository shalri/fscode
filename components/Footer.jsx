import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 py-5 text-right border-t border-gray-fs-100 flex justify-between items-center">
      <div className="pl-1 opacity-30 m-auto hover:opacity-80 transition-opacity duration-200">
        <Link href="/">
          <Image src="./fscode32x32.png" width={32} height={32} alt="logo" />
        </Link>
      </div>
      <span
        id="date"
        className="text-gray-500 border-r-5  border-r-8 border-yellow-fs pr-1 pt-[6px] pb-[1px]"
      >
        2024
      </span>
    </footer>
  );
};

export default Footer;
