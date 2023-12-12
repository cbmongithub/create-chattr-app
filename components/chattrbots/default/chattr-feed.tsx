import { memo, useEffect, useRef } from 'react'

import { ChattrMessages, ChattrLoader } from '.'

type ChattrMessages = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
}

function ChattrFeed({
  messages,
  userName,
  chattrBotName,
  loading,
}: {
  messages: ChattrMessages[]
  userName?: string
  chattrBotName?: string
  loading?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={ref}
      className='max-h-[275px] flex-auto overflow-y-scroll px-3'>
      <div className='mb-3'></div>
      {messages.map((message, i) => (
        <ChattrMessages
          key={`${message.role}_message_${i}`}
          message={message}
          userName={userName}
          chattrBotName={chattrBotName}
        />
      ))}
      {loading && <ChattrLoader chattrBotName={chattrBotName} />}
    </div>
  )
}

export default memo(ChattrFeed)
