import Link from 'next/link';
// import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Lokalinfo</h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="flex items-center space-x-3">
          {/* Placeholder for SearchBar and AdsSlot */}
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}