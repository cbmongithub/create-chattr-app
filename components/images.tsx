import Image from 'next/image'

export default function Images() {
  return (
    <div className='mt-16 sm:mt-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        <div className='relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
          <Image
            src='https://images.unsplash.com/photo-1586022045497-31fcf76fa6cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image of Christian B. Martinez'
            width={400}
            height={400}
            loading='eager'
            className='absolute inset-0 h-full w-full object-cover text-transparent'
          />
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
          <Image
            src='https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image of Christian B. Martinez'
            width={400}
            height={400}
            loading='eager'
            className='absolute inset-0 h-full w-full object-cover text-transparent'
          />
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
          <Image
            src='https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image of Christian B. Martinez'
            width={400}
            height={400}
            loading='eager'
            className='absolute inset-0 h-full w-full object-cover text-transparent'
          />
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
          <Image
            src='https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image of Christian B. Martinez'
            width={400}
            height={400}
            loading='eager'
            className='absolute inset-0 h-full w-full object-cover text-transparent'
          />
        </div>
        <div className='relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
          <Image
            src='https://images.unsplash.com/photo-1682687981974-c5ef2111640c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Image of Christian B. Martinez'
            width={400}
            height={400}
            loading='eager'
            className='absolute inset-0 h-full w-full object-cover text-transparent'
          />
        </div>
      </div>
    </div>
  )
}
