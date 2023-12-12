import { ChattrOpenIcon } from '.'

export default function ChattrOpenButton({ toggle }: { toggle: () => void }) {
  return (
    <div className='fixed bottom-4 right-4 z-20 flex items-center justify-center md:flex-1'>
      <button
        onClick={toggle}
        className='group rounded-full bg-chattrWhite p-3 shadow dark:bg-chattrBlack'
        type='button'
        role='button'
        aria-label='Toggle Chattrbot'>
        <ChattrOpenIcon />
      </button>
    </div>
  )
}
