import Link from "next/link";






export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li><Link href="/studentlist/haroon">Haroon</Link></li>
                <li><Link href="/studentlist/hamza">Hamza</Link></li>
                <li><Link href="/studentlist/asad">Asad</Link></li>
                <li><Link href="/studentlist/hamiz">Hamiz</Link></li>
                <li><Link href="/studentlist/hassan">Hassan</Link></li>
            </ul>
        </div>
    )
}