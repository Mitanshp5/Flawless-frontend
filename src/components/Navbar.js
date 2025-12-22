"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold tracking-tighter text-black dark:text-white">
            FLAWLESS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/shop" className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
            Shop All
          </Link>
          <Link href="/category/t-shirts" className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
            T-Shirts
          </Link>
          <Link href="/category/hoodies" className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
            Hoodies
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
            About
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
            <span className="sr-only">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
          <Link href="/cart" className="relative text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
            <span className="sr-only">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white dark:bg-white dark:text-black">
              0
            </span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-black">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/shop" 
              className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Shop All
            </Link>
            <Link 
              href="/category/t-shirts" 
              className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              T-Shirts
            </Link>
            <Link 
              href="/category/hoodies" 
              className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Hoodies
            </Link>
            <Link 
              href="/about" 
              className="text-base font-medium text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
