import Link from 'next/link'

import { navLinks } from '@/constants'

export default function Footer() {
  return (
    <footer className='z-10 flex-none pt-32'>
      <div className='sm:px-8'>
        <div className='mx-auto w-full max-w-7xl lg:px-8'>
          <div className='border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40'>
            <div className='relative px-4 sm:px-8 lg:px-12'>
              <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                  <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200'>
                    {navLinks.map((link, i) => {
                      return (
                        <Link
                          key={`footer_${i}_`}
                          className='transition hover:text-teal-500 dark:hover:text-teal-400'
                          href={link.href}>
                          {link.text}
                        </Link>
                      )
                    })}
                  </div>
                  <p className='text-sm text-zinc-400 dark:text-zinc-500'>
                    ©2023 Create Chattr App.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
