import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          LUMI.
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="transition hover:text-gray-500">
            Home
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-gray-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}