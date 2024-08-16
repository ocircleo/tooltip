'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const ActiveNavLink = ({ to, click, children }) => {
  const pathname = usePathname()
  return (
    <Link onClick={click} href={to} className={pathname == to ? " text-center font-semibold capitalize  text-indigo-400 underline italic " : " text-black font-semibold  capitalize  hover:text-indigo-500"}>
      {children}
    </Link>
  );
};

export default ActiveNavLink;
