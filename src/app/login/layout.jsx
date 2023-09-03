'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {
                pathName !== "/login" ?

                    < ul className="flex items-center justify-around bg-grey-500">
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/login/loginstudent">Login Student</Link>
                        </li>
                        <li>
                            <Link href="/login/loginteacher">Login Teacher</Link>
                        </li>
                    </ul>
                    : null
            }
            {children}
        </div >
    )
}