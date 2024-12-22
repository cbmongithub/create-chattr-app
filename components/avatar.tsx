'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Avatar() {
  const { scrollYProgress } = useScroll()
  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [1, 0.5, 0.25, 0]
  )

  return (
    <>
      <div className='order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]'></div>
      <div className='absolute top-0 order-last -mb-3 pt-3 sm:px-8'>
        <div className='mx-auto w-full max-w-7xl lg:px-8'>
          <div className='px-4 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-2xl lg:max-w-5xl'>
              <div className='z-10 w-full'>
                <Link
                  aria-label='Home'
                  className='pointer-events-auto z-10 flex h-16 w-16'
                  href='/'>
                  <motion.img
                    fetchPriority='high'
                    decoding='async'
                    data-nimg='1'
                    style={{
                      scale: scaleValue,
                    }}
                    src='/me.webp'
                    alt='Christian B. Martinez Avatar Photo'
                    width={70}
                    height={70}
                    className='z-10 h-16 w-16 rounded-full'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
