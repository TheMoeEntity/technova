import Image from "next/image";
import technovalogo from "@/assets/images/technova-logo.svg";
import { links } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex w-full py-5 px-5 md:px-12 items-center gap-5 justify-between">
      <div>
        <Image src={technovalogo} alt="Logo" width={100} height={100} />
      </div>
      <div className="flex  gap-10 items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <Link
        href="/sponsor"
        className="bg-[#000000] rounded-xl text-white px-5 py-2"
      >
        Become a Sponsor
      </Link>
    </header>
  );
};

export default Header;
