import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chattrWhite: 'rgb(255 255 255 / 1)', // white
        chattrBlack: 'rgb(24 24 27 / 1)', // zinc-900
        chattrPitchBlack: 'rgb(9 9 11 / 1)', // zinc-950
        chattrPrimary: 'rgb(139 92 246 / 1)', // violet-500
        chattrPrimaryDark: 'rgb(124 58 237 / 1)', // violet-600
        chattrSecondary: 'rgb(113 113 122 / 0.8)', // zinc-500/80
        chattrSecondaryDark: 'rgb(244 244 245 / 0.6)', //zinc-100/60
        chattrGray: 'rgb(212 212 216 / 0.9)', // zinc-300/90
        chattrGrayDark: 'rgb(244 244 245 / 0.15)', //zinc-100/15
        chattrText: 'rgb(39 39 42 / 1)', // zinc-800
        chattrTextDark: 'rgb(244 244 245 / 1)', // zinc-100
        chattrBackgroundMuted: 'rgb(228 228 231 / 0.7)', //zinc-200/70
      },
      borderRadius: {
        chattrRoundedSmall: '0.5rem',
        chattrRoundedMedium: '0.85rem',
        chattrRoundedLarge: '1rem',
      },
      animation: {
        chattrLoader: 'chattrLoader 0.5s infinite alternate',
        heartBeat: 'heartBeat 1.5s ease 0s infinite alternate',
      },
      keyframes: {
        chattrLoader: {
          from: {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          to: {
            opacity: '0.25',
            transform: 'translate3d(0, -0.2rem, 0)',
          },
        },
        heartBeat: {
          '0%, 50%, 100%': {
            transform: 'scale(1,1)',
          },
          '30%, 80%': {
            transform: 'scale(0.92, 0.95)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
