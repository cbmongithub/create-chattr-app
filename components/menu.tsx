'use client'

import Link from 'next/link'

import { navLinks } from '@/constants'

type Toggle = {
  isOpen?: boolean
  toggle: () => void
}

export default function Menu({ toggle, isOpen }: Toggle) {
  return (
    <>
      <div
        onClick={toggle}
        aria-hidden='true'
        className={
          isOpen
            ? `fixed inset-0 z-40 bg-zinc-800/40 opacity-100 backdrop-blur-sm transition-all duration-500 dark:bg-black/80`
            : `fixed inset-0 z-0 bg-zinc-800/40 opacity-0 backdrop-blur-sm transition-all duration-500 dark:bg-black/80`
        }></div>
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
            role='button'
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
                strokeLinejoin='round'></path>
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
                <li key={`menu_${i}_`}>
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
