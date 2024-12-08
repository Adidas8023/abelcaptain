export const seo = {
  title: 'Abel Captain | Product Manager, Designer, Productivity Expert, Internet Pirate',
  description:
    'Ahoy, adventurers! I&apos;m Captain Abel, welcome to my digital sailing log! Here, I&apos;ll share my internet adventure stories and exploration experiences. Want to know how to find the latest information treasures on the INTERNET? Or how to cleverly apply for overseas subscription services? Don&apos;t worry, I&apos;ve got everything ready for you :) I also have a tech shop filled with various amazing tools I&apos;ve discovered. So, hoist the sails, and let&apos;s explore this miraculous digital continent together!',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
