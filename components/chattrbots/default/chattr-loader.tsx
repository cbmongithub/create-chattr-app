export default function ChattrLoader({
  chattrBotName = 'Chattrbot',
}: {
  chattrBotName?: string
}) {
  return (
    <div className='mb-3 flex justify-start'>
      <div className='rounded-chattrRoundedMedium bg-chattrPrimary px-0.5 py-1.5 dark:bg-chattrPrimaryDark'>
        <div className='flex items-center justify-center px-3 py-2'>
          <div className='chattrDotDefault animate-chattrLoader'></div>
          <div className='chattrDotDefault animation-delay-200 animate-chattrLoader'></div>
          <div className='chattrDotDefault animation-delay-400 animate-chattrLoader'></div>
        </div>
      </div>
      <p className='flex items-center pl-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-100'>
        {chattrBotName}
      </p>
    </div>
  )
}
