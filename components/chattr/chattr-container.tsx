export default function ChattrContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='fixed bottom-4 right-4 z-20 h-96 max-h-96 w-[315px] rounded-chattrRoundedMedium border border-chattrGray bg-chattrWhite dark:border-chattrGrayDark dark:bg-chattrBlack dark:text-chattrTextDark'>
      {children}
    </div>
  )
}
