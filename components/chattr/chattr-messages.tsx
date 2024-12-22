import { memo } from 'react'
import { type ChattrMessageProps } from 'chattr'
import dynamic from 'next/dynamic'
import ChattrUserMessage from './chattr-user-message'

const DynamicAssistantImage = dynamic(() => import('./chattr-assistant-image'), {
  loading: () => <p>Loading Image...</p>,
})

const DynamicAssistantMessage = dynamic(() => import('./chattr-assistant-message'), {
  loading: () => <p>Loading Message...</p>,
})

const DynamicAssistantVideo = dynamic(() => import('./chattr-assistant-video'), {
  loading: () => <p>Loading Video...</p>,
})

const DynamicAssistantWeather = dynamic(() => import('./chattr-assistant-weather'), {
  loading: () => <p>Loading Weather...</p>,
})

function ChattrMessages({
  message: { content, role, key, ui, data },
}: {
  message: ChattrMessageProps
}) {
  return (
    <div className='px-4 py-2'>
      {role === 'assistant' && ui === 'default' ? (
        <DynamicAssistantMessage
          key={key}
          content={content}
        />
      ) : role === 'assistant' && ui === 'weather' ? (
        <DynamicAssistantWeather
          key={key}
          data={data}
        />
      ) : role === 'assistant' && ui === 'image' ? (
        <DynamicAssistantImage
          key={key}
          data={data}
        />
      ) : role === 'assistant' && ui === 'video' ? (
        <DynamicAssistantVideo
          key={key}
          data={data}
        />
      ) : (
        <ChattrUserMessage
          key={key}
          content={content}
        />
      )}
    </div>
  )
}

export default memo(ChattrMessages)
