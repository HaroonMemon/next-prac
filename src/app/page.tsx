'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Home() {

  const router= useRouter()
  const navigate = (name1) => {
    router.push(name1)
  }

  const [name, setName] = useState("Memon")
  const state = () => {
    setName("Haroon")
  }

  const InnerComp = () => {
    return (
      <h1>Inner Components</h1>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>

      <Link href="/login">Got to login page</Link>
      <br />
      <Link href="/about">Got to about page</Link>
      <br />
      <br />
      <button onClick={()=>navigate("/login")}>Login</button>
      <button onClick={()=>navigate("/about")}>about</button>



      <User name={name} />
      <User name="Hamza" />
      <User name="Hamiz" />

      <h1>Events, Function and State</h1>
      <InnerComp />
      {InnerComp()}
      <button onClick={() => alert("Hello next js")}>Click Me </button>
      <button onClick={() => state()}>Click Me </button>

    </main>
  )
}

const User = (props) => {
  return (
    <div>User name is {props.name}</div>
  )
}