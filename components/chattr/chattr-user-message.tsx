export default function ChattrUserMessage({
  key,
  content,
}: {
  key?: string
  content?: string
}) {
  return (
    <div
      key={key}
      className='flex justify-start'>
      <div className='rounded-chattrRoundedLarge bg-chattrPrimary px-3 py-2 shadow dark:bg-chattrPrimaryDark'>
        <p className='max-w-[160px] break-words text-sm font-light text-chattrTextDark'>
          {content}
        </p>
      </div>
    </div>
  )
}
