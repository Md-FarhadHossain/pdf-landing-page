import Link from "next/link";
import React from "react";

export const MenuLinks = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "How to Buy",
      href: "#about",
    },
  ];
  return (
    <>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link className="font-semibold" href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
