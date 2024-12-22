import React from 'react'

declare global {
    namespace React { }
    namespace Chattr {
        type ChattrMessageProps = {
            role: 'user' | 'assistant'
            key?: string
            content?: string
            ui?: string
            data?: {
                temperature: string
                celcius: string
                location: string
                description: string
                humidity: string
                wind: string
                clouds: string
                state: string
                url: string
            }
        }

        type ChattrFormProps = {
            setMessage: React.Dispatch<React.SetStateAction<string>>
            sendMessage: (
                event: React.MouseEvent | React.KeyboardEvent | React.FormEvent
            ) => void
            message: string
            loading: boolean
        }
    }
}

export { }