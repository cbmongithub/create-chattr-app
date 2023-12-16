import { memo } from 'react'

import { ChattrCloseIcon } from '.'

function ChattrHeader({
  toggle,
  chattrBotName = 'Chattrbot',
}: {
  toggle: () => void
  chattrBotName?: string
}) {
  return (
    <div className='z-40 flex h-14 w-full items-center justify-between rounded-t-chattrRoundedLarge border-b border-chattrGray bg-chattrWhite px-3 py-2 dark:border-chattrTextDark/10 dark:bg-chattrPitchBlack'>
      <div className='ml-1 flex flex-[0.5] justify-start'>
        <h3 className='text-sm font-semibold tracking-wide text-chattrText dark:text-chattrTextDark'>
          {chattrBotName}
        </h3>
      </div>
      <div className='mr-1 flex flex-[0.5] justify-end'>
        <a
          onClick={toggle}
          className='cursor-pointer text-chattrText hover:opacity-80 dark:text-chattrTextDark hover:dark:opacity-80'>
          <ChattrCloseIcon />
        </a>
      </div>
    </div>
  )
}

export default memo(ChattrHeader)
