export const seo = {
  title: 'Captain Abel | Product Manager | AI & Blockchain Analyst | Productivity Tools',
  description:
    'Ahoy, adventurers! I\'m Captain Abel, and this is my digital sailing log! As a seasoned internet and AI explorer and blockchain product manager, I\'ll share with you 100+ internet tools, the latest internet and blockchain knowledge, and product management strategies. Set sail and let\'s explore this miraculous digital continent together!',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://abelcaptain.com'
      : 'http://localhost:3000'
  ),
} as const
