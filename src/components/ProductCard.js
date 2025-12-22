import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
        {/* Placeholder for image - using a colored div for now or Next.js Image if we had a src */}
        <div className="flex h-full w-full items-center justify-center text-zinc-400">
           {/* In a real app, this would be <Image ... /> */}
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12 opacity-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-black dark:text-white">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-black dark:text-white">${product.price}</p>
      </div>
    </Link>
  );
}
