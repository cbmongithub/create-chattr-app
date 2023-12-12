'use-client'

import Link from 'next/link'

export default function Hero() {
  return (
    <div className='mt-9 sm:px-8'>
      <div className='mx-auto w-full max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='mx-auto max-w-2xl lg:max-w-5xl'>
            <div className='max-w-2xl'>
              <h1 className='text-3xl font-black tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
                Create Chattr App
              </h1>
              <p className='mt-6 text-base font-light text-zinc-600 dark:text-zinc-400'>
                I&apos;m Christian, a full stack developer based in Salt Lake
                City. Welcome to Create Chattr App, a Next js chattr boilerplate
                that enables developers to create quick and easy chatgpt
                chatbots.
                <br></br>
                <br></br> When I first developed a chatgpt chatbot for my own
                personal site, I noticed no one was doing the same thing at the
                time. This led me to the idea of chattr, and create chattr app,
                where developers can integrate chatgpt chatbots and customize
                them to their hearts desire. I hope you enjoy the project!
                <br></br>
                <br></br> Hiring? I would love the opportunity to become apart
                of your team!&nbsp;
                <a
                  href='mailto:hello@christianbmartinez.com?subject=Join%20%our%20Team'
                  className='underline hover:no-underline'
                  target='_blank'>
                  Contact me
                </a>{' '}
                anytime, or lets connect on social media!
              </p>
              <div className='mt-6 flex gap-6'>
                <Link
                  className='group -m-1 p-1'
                  aria-label='Follow on Twitter'
                  target='_blank'
                  href='https://twitter.com/_coderchris'>
                  <svg
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
                    <path d='M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z'></path>
                  </svg>
                </Link>
                <Link
                  className='group -m-1 p-1'
                  aria-label='Follow on GitHub'
                  target='_blank'
                  href='https://github.com/christianbmartinez'>
                  <svg
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z'></path>
                  </svg>
                </Link>
                <Link
                  className='group -m-1 p-1'
                  aria-label='Follow on LinkedIn'
                  target='_blank'
                  href='https://www.linkedin.com/in/cmartinez1089/'>
                  <svg
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
                    <path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'></path>
                  </svg>
                </Link>
                <Link
                  className='group -m-1 p-1'
                  aria-label='Sponsor christianbmartinez on GitHub'
                  target='_blank'
                  href='https://github.com/sponsors/christianbmartinez'>
                  <svg
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                    className='animate-heartBeat h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
                    <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
