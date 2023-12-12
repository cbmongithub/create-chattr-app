import { memo } from 'react'

import { ChattrAssistantMessage, ChattrUserMessage } from '.'

type ChattrMessage = {
  role: 'user' | 'assistant'
  key?: string
  content?: string
}

function ChattrMessages({
  message: { content, role, key },
  userName,
  chattrBotName,
}: {
  message: ChattrMessage
  userName?: string
  chattrBotName?: string
}) {
  return role === 'user' ? (
    <ChattrUserMessage
      key={key}
      content={content}
      userName={userName}
    />
  ) : (
    <ChattrAssistantMessage
      key={key}
      content={content}
      chattrBotName={chattrBotName}
    />
  )
}

export default memo(ChattrMessages)
