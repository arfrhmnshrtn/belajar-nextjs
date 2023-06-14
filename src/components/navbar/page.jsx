"use client"
import Link from "next/link";
import React from "react";

import { usePathname } from 'next/navigation';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function menuButton() {
  alert('hello world!')
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="relative">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href='/' className="btn btn-ghost normal-case text-xl">ariefraa</Link>
        </div>
        <button className="btn btn-square btn-ghost block md:hidden" onClick={menuButton}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <div className="hidden absolute bg-white right-2.5 left-2.5 top-16 md:flex md:bg-transparent md:static">
          <ul className="menu menu-vertical px-1 md:menu-horizontal">
            {links.map((el) => {
              // const isActive = pathname.startsWith(el.url);
              return (
                <li className="mr-3 " key={el.id}>
                  <Link className='' href={el.url}>{el.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
