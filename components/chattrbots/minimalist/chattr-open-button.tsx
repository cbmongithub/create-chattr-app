import { ChattrOpenIcon } from '.'

export default function ChattrOpenButton({ toggle }: { toggle: () => void }) {
  return (
    <div className='fixed bottom-4 right-4 z-20 flex items-center justify-center md:flex-1'>
      <button
        onClick={toggle}
        className='group rounded-full bg-chattrWhite/90 p-3 shadow-lg shadow-chattrText/5 ring-1 ring-chattrBlack/5 dark:bg-chattrText dark:ring-chattrWhite/10 dark:hover:ring-chattrWhite/20'
        type='button'
        role='button'
        aria-label='Toggle Chatbot'>
        <ChattrOpenIcon />
      </button>
    </div>
  )
}
