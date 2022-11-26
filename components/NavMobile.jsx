import Link from "next/link";
import React from "react";

const NavMobile = ({ navData }) => {
  return (
    <nav className="bg-accent w-full p-4">
      <ul className="flex flex-col gap-y-6">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link href={href} className="text-white hover:text-black">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
