export const seo = {
  title: 'Abel船长 | 产品经理 | AI｜区块链分析师 | 效率工具分享',
  description:
    'Ahoy，冒险家们！我是Abel船长，这里是我的数字航海日志！作为一名资深互联网和人工智能探索者及区块链产品经理，我将与你分享100多款互联网工具、最新的互联网和区块链知识，以及产品管理策略。扬帆起航，一起探索这片充满奇迹的数字大陆吧！',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://abelcaptain.com'
      : 'http://localhost:3000'
  ),
} as const
