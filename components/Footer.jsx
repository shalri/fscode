import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 flex items-center justify-between border-t border-gray-fs-100 py-5 text-right">
      <div className="m-auto pl-1 ">
        <Link href="/">
          <div className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-yellow-fs opacity-70 transition-opacity duration-200 hover:opacity-100">
            <span className="pt-1 font-bold text-gray-800">FS</span>
          </div>
        </Link>
      </div>
      <div
        id="date"
        className="stripe-bg border-r-8  border-yellow-fs pb-[1px] pr-1 pt-[6px]"
      >
        <span className="pl-1 text-white opacity-30">2024</span>
      </div>
    </footer>
  );
};

export default Footer;
