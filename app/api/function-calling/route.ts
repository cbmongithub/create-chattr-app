import { NextRequest, NextResponse } from 'next/server'
import { get_current_weather, create_image, create_video } from 'chattr'

export async function POST(req: NextRequest) {
  try {
    const {
      prompt,
      chattrBotName,
      chattrBotHistory,
    }: {
      prompt: string
      chattrBotName: string | number
      chattrBotHistory: string
    } = await req.json()

    const chatHistory = JSON.stringify(chattrBotHistory)

    const payload = {
      model: 'gpt-4-1106-preview',
      messages: [
        {
          role: 'system',
          content: `
          You are a chatbot named ${chattrBotName}.
          Respond with any information that the user requests. 
          You can view the entire chat history here, where your role is the assistant, and the users role is user: ${chatHistory}.
          This history is helpful if you need to recall any information or understand context from chat. 
          Use a professional tone in your responses.`,
        },
        {
          role: 'assistant',
          content: `Hey! Thanks for visiting. I'm ${chattrBotName}, you can ask me anything!`, // Replace with your own greeting
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      functions: [
        {
          name: 'get_current_weather',
          description: 'Get the current weather',
          parameters: {
            type: 'object',
            properties: {
              zipcode: {
                type: 'string',
                description:
                  'The zipcode of the city. For example, 90210 for Beverly Hills. If the user passes in a city, retrieve any zip code for that city and use it as the zipcode value.',
              },
              state: {
                type: 'string',
                description:
                  'The state of the city. For example: CA if the user asks for the weather in Beverly Hills, or UT if the user asks for the weather in Salt Lake City, etc. If the user passes a zip code or a city name as a zip code, retrieve the state that belongs to that zip code and use it as the state value.',
              },
            },
            required: ['zipcode', 'state'],
          },
        },
        {
          name: 'create_image',
          description: 'Create an image for the given description',
          parameters: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
                description: 'Description of what the image should be.',
              },
            },
            required: ['description'],
          },
        },
        {
          name: 'create_video',
          description: 'Create a video for a given description',
          parameters: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
                description: 'Description of what the video should be.',
              },
            },
            required: ['description'],
          },
        },
      ],
      function_call: 'auto',
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 75,
      n: 1,
    }

    const response: Response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: 'POST',
        body: JSON.stringify(payload),
      }
    )

    const completion = await response.json()

    if (completion.choices[0].message.content === null) {
      const args = JSON.parse(
        completion.choices[0].message.function_call.arguments
      )

      const functionCall = completion.choices[0].message.function_call.name

      if (functionCall === 'get_current_weather') {
        const {
          temperature,
          celcius,
          location,
          url,
          description,
          humidity,
          wind,
          clouds,
          state,
        } = await get_current_weather(args.zipcode, args.state)

        return NextResponse.json({
          ok: true,
          ui: 'weather',
          content: {
            function_response: {
              temperature: temperature,
              celcius: celcius,
              location: location,
              url: url,
              description: description,
              humidity: humidity,
              wind: wind,
              clouds: clouds,
              state: state,
            },
          },
        })
      } else if (functionCall === 'create_image') {
        const { description, url } = await create_image(args.description)

        return NextResponse.json({
          ok: true,
          ui: 'image',
          content: {
            function_response: {
              description: description,
              url: url,
            },
          },
        })
      } else if (functionCall === 'create_video') {
        const { description, url } = await create_video(args.description)

        return NextResponse.json({
          ok: true,
          ui: 'video',
          content: {
            function_response: {
              description: description,
              url: url,
            },
          },
        })
      } else {
        return NextResponse.json({
          ok: false,
          error:
            'Looks like something went wrong while generating that. Please try again! If the problem persists, let us know!',
        })
      }
    } else {
      return NextResponse.json({
        ok: true,
        content: { text: completion.choices[0].message.content },
      })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      error:
        'Looks like something went wrong. Please try again! If the problem persists, let us know!',
    })
  }
}
