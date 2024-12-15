[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![alt text](https://github.com/christianbmartinez/create-chattr-app/blob/main/public/createchattrapp.jpg)

# create-chattr-app

A next js chattr boilerplate. Built with Nextjs, Chattr, Tailwindcss, OpenAI, and Typescript.

- Ships with chattr's default theme, and chattr's minimalist theme (originally styled by [shadcn](https://ui.shadcn.com/themes)) allowing for full customization over every component chattr offers.
- Full theme support for light/dark mode via next themes.
- Minimalist landing page example that has the minimalist chattrbot, menu, and navigation installed.
- Two routes are setup, one for basic chatgpt functionality and the other for chat gpt and function calling.
- Default theme uses the `api/chatgpt` route, while the minimalist theme uses the `api/function-calling` route as starting examples.
- Re engineered `spotlight` from tailwind ui for this example. Please visit tailwindui to purchase the full theme.

# Demo

You can view a live demo on [codesandbox](https://githubbox.com/christianbmartinez/create-chattr-app)! Just enter in your `OPENAI_API_KEY` in the `.env.development.local` file. For function calling with the Minimalist Chattrbot, you will also need a `WEATHER_APP_ID` and a `REPLICATE_API_TOKEN`.

# Installation

**NEW** You can now use `npx create-chattr-app` for installation of files and dependencies automatically:

```bash
npx create-chattr-app your-app-name
```

Or you can clone it, and manually install dependencies:

```bash
git clone https://github.com/christianbmartinez/create-chattr-app.git
```

# Usage

You can skip this step if you are using `npx create-chattr-app`. Otherwise, install all dependencies by running:

```bash
npm install
```

Next, you need an `OPENAI_API_KEY`. If you don't have one already, click [here](https://platform.openai.com/api-keys) to get one.

Once you have your key, insert your api key in both `.env.production.local` and `.env.development.local`, along with any other api keys if you plan on using the default function calling features. **In production, remember to copy your api key, to your environment variables section.**

```bash
OPENAI_API_KEY='YOUR_OPENAI_API_KEY'
WEATHER_APP_ID='YOUR_OPENWEATHERMAPS_API_KEY'
#https://home.openweathermap.org/api_keys
# Sign up and subscribe to the Current weather and forecast free plan
REPLICATE_API_TOKEN='YOUR_REPLICATE_TOKEN'
#https://replicate.com/account/api-tokens
# Login with github and create a token
```

Once you have your api keys, create the build:

```bash
npm run build
```

Finally, you can run the application in development mode:

```bash
npm run dev
```

For running the app in production mode, use:

```bash
npm run prod
```

You can view the app locally at http://localhost:3000/

# License

This project is covered under the [MIT](https://opensource.org/licenses/MIT) license.

# Contributing

Contributing is welcomed! Please submit a pull request.

# Questions

Feel free to [email](mailto:hello@christianbmartinez.com?subject=[GitHub]%20Create%20React%20App) me with any questions or view [my github profile](https://github.com/christianbmartinez) to check out my other repos!

# Sponsors

If you like the project and it adds value to you, feel free to [sponsor me](https://github.com/sponsors/christianbmartinez) if you'd like!
