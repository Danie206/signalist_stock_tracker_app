import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavItems from "@/components/ui/NavItems";
import UserDropdown from "./UserDropdown";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Signalist logo"
            width={420}
            height={32}
            className="h-8 w-auto cursor-pointer" />
        </Link>

        <nav className="hidden sm:block">
          <NavItems />
        </nav>
       <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
