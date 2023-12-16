'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'

import { Avatar, Menu } from '.'
import { navLinks } from '@/constants'
import useMenu from '@/hooks/use-menu'

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const { isOpen, toggle } = useMenu()

  const handleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <>
      <Menu
        isOpen={isOpen}
        toggle={toggle}
      />
      <nav className='relative z-10 -mb-[116px] flex h-[180px] flex-none flex-col'>
        <Avatar />
        <div className='sticky top-0 z-10 h-16 pt-6'>
          <div className='top-[116px] w-full sm:px-8'>
            <div className='mx-auto w-full max-w-7xl lg:px-8'>
              <div className='px-4 sm:px-8 lg:px-12'>
                <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                  <div className='flex gap-4'>
                    <div className='flex flex-1'></div>
                    <div className='flex flex-1 justify-end md:justify-center'>
                      <div className='pointer-events-auto md:hidden'>
                        <button
                          onClick={toggle}
                          className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
                          type='button'
                          role='button'>
                          Menu
                          <svg
                            viewBox='0 0 8 6'
                            aria-hidden='true'
                            className='ml-3 h-auto w-2 stroke-zinc-800 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-400'>
                            <path
                              d='M1.75 1.75 4 4.25l2.25-2.5'
                              fill='none'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                          </svg>
                        </button>
                      </div>
                      <div className='fixed left-[1px] top-[1px] m-[-1px] hidden h-0 w-[1px] overflow-hidden whitespace-nowrap border-0 p-0'></div>
                      <nav className='pointer-events-auto hidden md:block'>
                        <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
                          {navLinks.map((link, i) => {
                            return (
                              <li key={`header_${i}_`}>
                                <Link
                                  className='block px-3 py-2 hover:text-violet-500 dark:hover:text-violet-400'
                                  href={link.href}>
                                  {link.text}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </nav>
                    </div>
                    <div className='flex justify-end md:flex-1'>
                      <div className='pointer-events-auto'>
                        <button
                          onClick={handleTheme}
                          className='group rounded-full bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
                          type='button'
                          role='button'
                          aria-label='Toggle theme'>
                          <svg
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            aria-hidden='true'
                            className='h-6 w-6 fill-white/90 stroke-zinc-800 group-hover:stroke-zinc-900 dark:hidden dark:fill-zinc-800'>
                            <path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z'></path>
                            <path
                              d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
                              fill='none'></path>
                          </svg>
                          <svg
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            className='hidden h-5 w-5 fill-zinc-700 stroke-zinc-500 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-violet-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-violet-500'>
                            <path
                              d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
