import { memo } from 'react'

import ChattrMessages from './chattr-messages'
import ChattrLoader from './chattr-loader'
import { useScroll, type ChattrMessageProps } from 'chattr'

function ChattrFeed({
  messages,
  loading,
}: {
  messages: ChattrMessageProps[]
  loading: boolean
}) {
  const ref = useScroll(messages)

  return (
    <div
      ref={ref}
      className='max-h-[245px] min-h-[245px] flex-auto overflow-y-scroll'>
      {messages.map((message, i) => (
        <ChattrMessages
          key={`${message.role}_message_${i}`}
          message={message}
        />
      ))}
      {loading && <ChattrLoader />}
    </div>
  )
}

export default memo(ChattrFeed)
