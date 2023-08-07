import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Home</h1>
        <div>
          <a href="https://www.linkedin.com/in/tiaan-van-staden/"><FacebookIcon className="facebook-icon" /></a>
          <a href="https://www.twitter.com">Twitter </a>
          <a href="https://www.instagram.com">Instagram </a>
        </div>
        <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new"
        >
          About
        </Link>
      </header>
      <body>
        <div>
          <p>Hi there</p>
          <p>my name is Tiaan</p>
        </div>
      </body>
    </>
  )
}