export default function ChattrLoader() {
  return (
    <div className='px-3 py-2'>
      <div className='mb-3 flex justify-end'>
        <div className='inline-flex rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-0.5 py-1.5 shadow dark:bg-chattrGrayDark'>
          <div className='flex items-center justify-center px-3 py-2'>
            <div className='chattrDotMinimalist animate-chattrLoader'></div>
            <div className='chattrDotMinimalist animation-delay-200 animate-chattrLoader'></div>
            <div className='chattrDotMinimalist animation-delay-400 animate-chattrLoader'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
