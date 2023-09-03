'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About(){
    const router = useRouter()
    // const navigate = (name) => {
    //     router.push(name)
    // }
    return(
        <div>
            <h1>About Page</h1>
            <Link href="/">Home</Link><br />
            <button onClick={()=>router.push("/login")}>login</button>
            <br />
            <Link href="/about/aboutcollege">About College</Link><br /><br />
            <Link href="/about/aboutstudent">About Student</Link>
        </div>
    )
}