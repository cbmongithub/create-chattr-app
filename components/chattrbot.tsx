'use client'

import { useState } from 'react'
import { useChattr, type ChattrMessageProps } from 'chattr'

import ChattrContainer from './chattr/chattr-container'
import ChattrFeed from './chattr/chattr-feed'
import ChattrForm from './chattr/chattr-form'
import ChattrHeader from './chattr/chattr-header'
import ChattrOpenButton from './chattr/chattr-open-button'

export default function MinimalistChattrbot() {
    const { isOpen, toggle } = useChattr()
    const chattrBotName = 'Chattrbot'
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<ChattrMessageProps[]>([
        {
            ui: 'default',
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
                ui: 'default',
                content: message,
                role: 'user',
            },
        ])
        const response = await fetch('/api/function-calling', {
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
                        ui: 'default',
                        content: result.content.text,
                        role: 'assistant',
                    },
                ])
            } else if (result.content.function_response) {
                setLoading(false)
                setMessages(prev => [
                    ...prev,
                    {
                        ui: result.ui,
                        data: result.content.function_response,
                        role: 'assistant',
                    },
                ])
            }
        } else {
            setLoading(false)
            setMessages(prev => [
                ...prev,
                {
                    ui: 'default',
                    content: result.error,
                    role: 'assistant',
                },
            ])
        }
    }

    return isOpen ? (
        <ChattrContainer>
            <ChattrHeader
                chattrBotName={chattrBotName}
                userRole='Assistant'
                toggle={toggle}
            />
            <ChattrFeed
                messages={messages}
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