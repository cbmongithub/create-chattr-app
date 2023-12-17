'use client'

import { useState } from 'react'
import { useChattr, type ChattrMessage } from 'chattr'

import {
  ChattrContainer,
  ChattrFeed,
  ChattrForm,
  ChattrHeader,
  ChattrOpenButton,
} from './chattrbots/default'

export default function DefaultChattrbot() {
  const { isOpen, toggle } = useChattr()
  const chattrBotName = 'Bob'
  const userName = 'Visitor'
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChattrMessage[]>([
    {
      content: `Hey! Thanks for visiting. I'm ${chattrBotName}, you can ask me anything!`,
      role: 'assistant',
    },
  ])

  async function sendMessage(
    event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
  ) {
    event.preventDefault()
    setMessage('')
    setLoading(true)
    setMessages(prev => [
      ...prev,
      {
        content: message,
        role: 'user',
      },
    ])

    const response = await fetch('/api/chat-gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message,
        chattrBotName: chattrBotName,
        chattrBotHistory: messages,
      }),
    })

    let result = await response.json()

    if (result.ok) {
      if (result.content.text) {
        setLoading(false)
        setMessages(prev => [
          ...prev,
          {
            content: result.content.text,
            role: 'assistant',
          },
        ])
      } else {
        setLoading(false)
        setMessages(prev => [
          ...prev,
          {
            content: result.error,
            role: 'assistant',
          },
        ])
      }
    }
  }

  return isOpen ? (
    <ChattrContainer>
      <ChattrHeader
        toggle={toggle}
        chattrBotName={chattrBotName}
      />
      <ChattrFeed
        messages={messages}
        userName={userName}
        chattrBotName={chattrBotName}
        loading={loading}
      />
      <ChattrForm
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        loading={loading}
      />
    </ChattrContainer>
  ) : (
    <ChattrOpenButton toggle={toggle} />
  )
}
