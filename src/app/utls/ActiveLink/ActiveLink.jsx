'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
const ActiveLink = ({ to, click, children }) => {
    const pathname = usePathname()
    return (
        <Link onClick={click} href={to} className={pathname == to ? "bg-black text-center py-2 rounded font-semibold capitalize  hover:bg-indigo-600 text-white duration-100" : "bg-gray-300 shadow text-center py-2 rounded font-semibold capitalize  hover:bg-indigo-600 hover:text-white duration-100"}>
            {children}
        </Link>
    );
};

export default ActiveLink;