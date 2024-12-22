import { type ChattrFormProps } from 'chattr'

export default function ChattrForm({
  setMessage,
  sendMessage,
  message,
  loading,
}: ChattrFormProps) {
  return (
    <div className='absolute bottom-0 flex h-16 w-full items-center p-4'>
      <form
        onSubmit={event => sendMessage(event)}
        className='flex w-full items-center justify-between space-x-2'>
        <input
          className='flex h-9 w-full flex-auto rounded-chattrRoundedSmall border border-chattrGray bg-transparent px-2 py-1 text-sm font-light text-chattrText shadow-sm transition-colors placeholder:bg-transparent focus:border-chattrPrimary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chattrPrimary disabled:cursor-not-allowed disabled:opacity-50 dark:border-chattrGrayDark dark:text-chattrTextDark'
          type='text'
          required
          autoComplete='off'
          autoCorrect='off'
          placeholder='Ask a question...'
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <button
          className='inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-chattrRoundedSmall bg-chattrBackgroundMuted text-sm font-medium text-chattrText shadow transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chattrPrimary disabled:pointer-events-none disabled:opacity-50 dark:bg-chattrGrayDark dark:text-chattrTextDark'
          type='submit'
          disabled={loading}>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4'>
            <path
              d='M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'></path>
          </svg>
          <span className='sr-only'>Send</span>
        </button>
      </form>
    </div>
  )
}
