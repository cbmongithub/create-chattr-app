export default function ChattrContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='fixed bottom-4 right-4 z-20 flex h-96 max-h-96 w-72 flex-col justify-between rounded-chattrRoundedLarge border border-chattrGray bg-chattrWhite shadow dark:border-chattrText dark:bg-chattrPitchBlack'>
      {children}
    </div>
  )
}
