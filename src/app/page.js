import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Urban Legend Hoodie",
    category: "Hoodies",
    price: 89,
    slug: "urban-legend-hoodie",
  },
  {
    id: 2,
    name: "Midnight Tee",
    category: "T-Shirts",
    price: 45,
    slug: "midnight-tee",
  },
  {
    id: 3,
    name: "Concrete Jungle Hoodie",
    category: "Hoodies",
    price: 95,
    slug: "concrete-jungle-hoodie",
  },
  {
    id: 4,
    name: "Neon Vibes Tee",
    category: "T-Shirts",
    price: 42,
    slug: "neon-vibes-tee",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Shop by Category</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
            <Link href="/category/t-shirts" className="group relative block aspect-[2/1] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-black dark:text-white">T-Shirts</span>
              </div>
            </Link>
            <Link href="/category/hoodies" className="group relative block aspect-[2/1] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
               <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-black dark:text-white">Hoodies</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white">Trending Now</h2>
            <Link href="/shop" className="text-sm font-semibold text-black hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300">
              See everything <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}