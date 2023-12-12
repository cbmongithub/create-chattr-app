import { ChattrOpenIcon } from '.'

export default function ChattrIcon({ toggle }: { toggle: () => void }) {
  return (
    <div className='fixed bottom-4 right-4 z-20 flex items-center justify-center md:flex-1'>
      <button
        onClick={toggle}
        className='group rounded-full bg-chattrWhite p-3 shadow shadow-chattrText/5 ring-1 ring-chattrBlack/5 dark:bg-chattrBlack dark:ring-chattrWhite/5 dark:hover:ring-chattrWhite/10'
        type='button'
        role='button'
        aria-label='Toggle Chatbot'>
        <ChattrOpenIcon />
      </button>
    </div>
  )
}
