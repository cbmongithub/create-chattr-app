import { type ChattrForm } from 'chattr'

export default function ChattrForm({
  setMessage,
  sendMessage,
  message,
  loading,
}: ChattrForm) {
  return (
    <form
      onSubmit={event => sendMessage(event)}
      className='z-40 flex h-16 items-center justify-between rounded-b-chattrRoundedLarge border-t border-chattrGray bg-chattrWhite px-2 py-2.5 dark:border-chattrTextDark/10 dark:bg-chattrPitchBlack'>
      <input
        className='h-10 min-w-0 flex-auto appearance-none rounded-chattrRoundedMedium border border-chattrGray bg-chattrWhite px-3 py-2 font-light text-chattrText placeholder:text-chattrSecondary/70 focus:border-chattrPrimary focus:outline-none dark:border-chattrTextDark/10 dark:bg-chattrBlack dark:text-chattrTextDark dark:placeholder:text-chattrTextDark/50 dark:focus:border-chattrPrimaryDark sm:text-sm'
        type='text'
        required
        placeholder='Ask a question...'
        autoComplete='off'
        autoCorrect='off'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <button
        type='submit'
        disabled={loading}
        className='ml-2 h-10 flex-none items-center justify-center gap-2 rounded-chattrRoundedMedium bg-chattrPrimary px-3 py-2 text-sm font-semibold text-chattrWhite outline-offset-2 hover:bg-chattrPrimaryDark disabled:cursor-not-allowed disabled:bg-chattrPrimary/70 dark:bg-chattrPrimaryDark dark:hover:bg-chattrPrimaryDark/90'>
        Send
      </button>
    </form>
  )
}
