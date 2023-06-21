import Link from "next/link";

// seccond page? route to /new
export default function About() {
    return (
        <>
        <header>
            <h1 className="text-2x1">About</h1>
            <Link href="/">Home</Link>
        </header>
        </>
    )
  }