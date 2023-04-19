import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="">
      <h1 className="text-5xl">Welcome! 🎊</h1>
      <div className="flex flex-col">
        <Link href="/nested-object">
          <span className="">1. Nested Object 👈</span>
        </Link>
        <Link href="/array">
          <span className="">2. Array 👈</span>
        </Link>
        <Link href="/dynamic-fields">
          <span className="">3. Dynamic Field 👈</span>
        </Link>
      </div>
    </main>
  );
}
