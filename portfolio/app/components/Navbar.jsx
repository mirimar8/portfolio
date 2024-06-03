import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./Navlink";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto px-10">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="Miri logo"
            width={150}
            height={150}
          />
        </Link>
        <div>
            <ul>
                <li></li>
            </ul>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
