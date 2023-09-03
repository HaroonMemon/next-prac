'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const navigate1 = (page) => {
        router.push("/login/" + page)
    }
    return (
        <div>
            <h1>Login Pages</h1>
            <Link href="/">Home</Link><br />
            <button onClick={() => router.push("/about")}>About</button> <br />
            <Link href="/login/loginteacher">Login Teacher</Link><br /><br />
            <Link href="/login/loginstudent">Login Student</Link>
            <br />
            <br />
            {/* <button onClick={navigate1("loginstudent")}>Login Student</button>
            <br />
            <button onClick={navigate1("loginteacher")}>Login Teacher</button> */}
        </div>
    )
}