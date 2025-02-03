import Link from 'next/link';
 
export default function Header() {
    return (
        <header className="w-full fixed top-0 left-0 flex justify-around items-center p-5 bg-[#030616] text-white z-50 font-mono">
         <h1 className="text-xl font-bold">Rahul</h1>

        <nav className="space-x-4">
          <Link href="/projects">Notes</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact Me</Link>
        </nav>

      </header>
    );
  }