import Image from 'next/image'
import dayjs from 'dayjs'

import { ChattrAssistantMessage } from '.'

export default function ChattrAssistantWeather({
  key,
  data,
}: {
  key?: string
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
}) {
  const currentTimestamp = Date.now()
  const parsedDate = dayjs(currentTimestamp)
  const today = parsedDate.format('dddd, MMMM DD, YYYY')

  if (!data) {
    return (
      <ChattrAssistantMessage
        key={key}
        content='It looks like something went wrong while fetching the weather :( Try again later!'
      />
    )
  }

  return (
    <div
      key={key}
      className='flex justify-end'>
      <div className='w-full rounded-chattrRoundedLarge bg-chattrBackgroundMuted px-3 py-2 shadow dark:bg-chattrGrayDark'>
        <p className='break-words text-sm font-light text-chattrText dark:text-chattrTextDark'>
          Here&apos;s the most recent weather data I found for {data.location}:
        </p>

        <div className='mb-2 mt-3 flex w-full flex-col rounded-chattrRoundedLarge bg-chattrPrimary p-4 dark:bg-chattrPrimaryDark'>
          <div className='text-center'>
            <p className='text-xl font-bold text-chattrWhite'>
              {data.location}, {data.state}
            </p>
            <p className='text-sm font-light text-chattrBackgroundMuted'>
              {today}
            </p>
          </div>
          <div className='flex items-center justify-center py-3'>
            <Image
              alt='Weather Icon'
              className='h-16 w-16'
              src={data.url}
              height={100}
              width={100}
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-4xl font-bold text-chattrWhite'>
              {data.temperature}
            </p>
            <p className='mt-2 text-sm font-light text-chattrGray'>
              {data.celcius}
            </p>
          </div>
          <div className='mt-6 flex flex-row justify-between'>
            <div className='flex flex-col items-center'>
              <p className='text-sm font-semibold text-chattrWhite'>Wind</p>
              <p className='text-sm font-light text-chattrGray'>{data.wind}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-sm font-semibold text-chattrWhite'>Humidity</p>
              <p className='text-sm font-light text-chattrGray'>
                {data.humidity}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-sm font-semibold text-chattrWhite'>Clouds</p>
              <p className='text-sm font-light text-chattrGray'>
                {data.clouds}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
