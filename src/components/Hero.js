import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-black dark:text-white sm:text-7xl">
          Wear Your <span className="text-zinc-500">Vibe</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-zinc-600 dark:text-zinc-400">
          Premium streetwear designed for those who dare to stand out. 
          Quality prints, comfortable fits, and designs that speak louder than words.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            href="/shop"
            className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-zinc-200 px-8 py-3 text-sm font-semibold text-black hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
