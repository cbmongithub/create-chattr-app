export default function ChattrAssistantMessage({
  key,
  content,
}: {
  key?: string
  content?: string
}) {
  return (
    <div
      key={key}
      className='flex justify-end'>
      <div className='rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-3 py-2 shadow dark:bg-chattrGrayDark'>
        <p className='max-w-[160px] break-words text-sm font-light text-chattrText dark:text-chattrTextDark'>
          {content}
        </p>
      </div>
    </div>
  )
}
