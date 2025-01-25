import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:underline">Home</Link>
          <Link href="/projects" className="text-gray-700 hover:underline">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
