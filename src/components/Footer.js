import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold tracking-tighter text-black dark:text-white">
              FLAWLESS
            </span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Premium streetwear for the modern individual. Wear your vibe.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black dark:text-white">Shop</h3>
            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/shop" className="hover:text-black dark:hover:text-white">All Products</Link></li>
              <li><Link href="/category/t-shirts" className="hover:text-black dark:hover:text-white">T-Shirts</Link></li>
              <li><Link href="/category/hoodies" className="hover:text-black dark:hover:text-white">Hoodies</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-black dark:hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black dark:text-white">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/faq" className="hover:text-black dark:hover:text-white">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-black dark:hover:text-white">Shipping & Returns</Link></li>
              <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-black dark:text-white">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black dark:hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} Flawless. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
