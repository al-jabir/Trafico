import Link from "next/link";
import React from "react";

const Navbar = ({ navData, header }) => {
  console.log(header);
  return (
    <nav className="flex items-center">
      <ul className="flex gap-[96px]">
        {navData.map((item, idx) => {
          const { name, href } = item;
          return (
            <li key={idx}>
              <Link
                href={href}
                className={`${
                  header ? "text-primary" : "text-white"
                }cursor-pointer hover:text-accent-hover transition`}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
