import { NextRequest, NextResponse } from 'next/server'

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

    if (!response.ok) {
      return NextResponse.json({
        ok: false,
        error:
          'Looks like something went wrong fetching that answer! Try again later.',
      })
    }

    const completion = await response.json()

    return NextResponse.json({
      ok: true,
      content: { text: completion.choices[0].message.content },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      error: 'Looks like something went wrong. Try again later.',
    })
  }
}
