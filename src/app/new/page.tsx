import { prisma } from "@/db";
import Link from "next/link";
import { DBItem } from "@/components/DBItem";

function getDB() {
    return prisma.todo.findMany()   //looks for todo because I initially created a Todo table
}

// seccond page? route to /new
export default async function About() {
    const db = await getDB()
    //await prisma.todo.create({ data: {title: "test", complete: false}})

    return (
        <>
        <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">About</h1>
            <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/"
            >
                Home
            </Link>
        </header>
        <ul className="pl-4">
            {db.map(todo => (
                <DBItem key={todo.id} {...todo} />
            ))}
        </ul>
        </>
    )
  }