import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/submit">Submit Listing</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li><Link href="/category/malls">Malls</Link></li>
            <li><Link href="/category/hospitals">Hospitals</Link></li>
            <li><Link href="/category/restaurants">Restaurants</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">States</h4>
          <ul className="space-y-2">
            <li><Link href="/state/selangor">Selangor</Link></li>
            <li><Link href="/state/kuala-lumpur">Kuala Lumpur</Link></li>
            <li><Link href="/state/penang">Penang</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Info & Social</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
          <p>Disclaimer: All listings are user-submitted. For removal requests, <Link href="/contact" className="underline">contact us</Link>.</p>
          <p className="mt-4 md:mt-0">© 2025 Lokalinfo. All rights reserved.</p>
        </div>
      </div>
    </footer>
}