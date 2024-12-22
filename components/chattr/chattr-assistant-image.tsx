import Image from 'next/image'

import ChattrAssistantMessage from './chattr-assistant-message'

export default function ChattrAssistantImage({
  key,
  data,
}: {
  key?: string
  data?: {
    description: string
    url: string
  }
}) {
  if (!data) {
    return (
      <ChattrAssistantMessage
        key={key}
        content='It looks like something went wrong while creating the image :( Try again later!'
      />
    )
  }
  return (
    <div
      key={key}
      className='flex justify-end'>
      <div className='rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-3 py-2 shadow dark:bg-chattrGrayDark'>
        <p className='break-words text-sm font-light text-chattrText dark:text-chattrTextDark'>
          Here&apos;s what i generated with your description, {data.description}
          :
        </p>
        <div className='mb-2 mt-3 overflow-hidden rounded-chattrRoundedLarge'>
          <Image
            alt='Framed Image'
            className='aspect-square w-full object-cover'
            src={data.url}
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  )
}
