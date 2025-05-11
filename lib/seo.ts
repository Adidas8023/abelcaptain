export const seo = {
  title: 'Abel船长 | Web3.AI.TOOLS分享',
  description:
    '我是Abel船长，专注于Web3、人工智能和效率工具的探索者和分享者。这里是我的个人博客，记录和分享区块链技术、AI应用、效率工具使用心得，以及最新的科技趋势。致力于帮助更多人了解和运用新技术，共同探索数字世界的无限可能。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.abelcaptain.com'
      : 'http://localhost:3000'
  ),
  keywords: [
    'Abel船长',
    'Web3',
    '区块链',
    '人工智能',
    'AI工具',
    '效率工具',
    '科技博客',
    'AI应用',
    '数字货币',
    'ChatGPT',
    '生产力工具',
    '技术分享',
    '区块链技术',
    '智能合约',
    'DeFi',
    'NFT',
    '元宇宙',
    '技术趋势',
    '工具推荐',
    '个人效率'
  ].join(','),
  defaultImage: '/og_zh.png',
  locale: 'zh_CN',
  type: 'website',
} as const
