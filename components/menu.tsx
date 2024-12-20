'use client'

import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react';

type Toggle = {
  onOpen?: boolean
}

export default function Menu({ onOpen }: Toggle) {
  const [isOpen, setIsOpen] = useState(onOpen);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className={
          isOpen
            ? 'fixed inset-x-4 top-8 z-50 scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 transition-all duration-500 dark:bg-zinc-900 dark:ring-zinc-800'
            : 'fixed inset-x-4 top-0 z-0 scale-0 rounded-3xl bg-white p-8 opacity-0 ring-1 ring-zinc-900/5 transition-all duration-500 dark:bg-zinc-900 dark:ring-zinc-800'
        }>
        <div className='flex flex-row-reverse items-center justify-between'>
          <button
            onClick={toggle}
            className='-m-1 p-1'
            type='button'
            aria-label='Close menu'>
            <svg
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='h-6 w-6 text-zinc-500 dark:text-zinc-400'>
              <path
                d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'/>
            </svg>
          </button>
          <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
            Navigation
          </h2>
        </div>
        <nav className='mt-6'>
          <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
            {navLinks.map((link, i) => {
              return (
                <li key={`menu_${i+1}_`}>
                  <Link
                    className='block py-2 hover:text-teal-500 dark:hover:text-teal-400'
                    href={link.href}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}