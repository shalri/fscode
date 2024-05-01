import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 flex items-center justify-between border-t border-gray-fs-100 py-5 text-right">
      <div className="m-auto pl-1 opacity-30 transition-opacity duration-200 hover:opacity-80">
        <Link href="/">
          <div className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-yellow-fs">
            <span className="pt-1 font-bold text-gray-800">FS</span>
          </div>
        </Link>
      </div>
      <div
        id="date"
        className="border-r-8  border-yellow-fs pb-[1px] pr-1 pt-[6px]"
      >
        <span className="opacity-30">2024</span>
      </div>
    </footer>
  );
};

export default Footer;
