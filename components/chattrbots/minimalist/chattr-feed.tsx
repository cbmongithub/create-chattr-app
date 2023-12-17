import { memo } from 'react'

import { ChattrMessages, ChattrLoader } from '.'
import { useScroll, type ChattrMessage } from 'chattr'

function ChattrFeed({
  messages,
  loading,
}: {
  messages: ChattrMessage[]
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
