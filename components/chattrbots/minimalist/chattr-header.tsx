import Image from 'next/image'

import { ChattrCloseIcon } from '.'

export default function ChattrHeader({
  chattrBotName,
  role,
  toggle,
}: {
  chattrBotName: string
  role: string
  toggle: () => void
}) {
  return (
    <div className='flex flex-row items-center space-y-1.5 p-4'>
      <div className='flex items-center space-x-4'>
        <span className='relative flex h-10 w-10 flex-none items-center justify-center rounded-full border border-chattrGray dark:border dark:border-chattrGrayDark'>
          <Image
            alt='Chatbot Image'
            width={28}
            height={28}
            className='h-9 w-9 rounded-full'
            src='/bot.webp'
          />
        </span>
        <div>
          <p className='text-sm font-medium leading-none text-chattrText dark:text-chattrTextDark'>
            {chattrBotName}
          </p>
          <p className='text-sm font-light text-chattrSecondary dark:text-chattrSecondaryDark'>
            {role}
          </p>
        </div>
      </div>
      <button
        onClick={toggle}
        className='ml-auto inline-flex h-5 w-5 items-start justify-end text-sm font-medium hover:opacity-60'>
        <ChattrCloseIcon />
      </button>
    </div>
  )
}
