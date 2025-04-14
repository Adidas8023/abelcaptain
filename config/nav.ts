type NavigationItem = {
  href?: string
  text: string
  external?: boolean
  dropdown?: Array<{ href: string; text: string }>
}

export const navigationItems: NavigationItem[] = [
  { href: '/', text: '首页' },
  { href: '/blog', text: '博客' },
  { href: '/guestbook', text: '航海图' },
  { href: '/ama', text: '关于我' },
  {
    text: 'AI/Web3导航',
    dropdown: [
      { href: 'https://www.abelcaptain.com/', text: 'Home ↗' },
      { href: 'https://www.abelcaptain.com/collection', text: 'Collection ↗' },
      { href: 'https://www.abelcaptain.com/category', text: 'Category ↗' },
      { href: 'https://www.abelcaptain.com/tag', text: 'Tag ↗' },
      { href: 'https://www.abelcaptain.com/blog', text: 'Blog ↗' },
      { href: 'https://www.abelcaptain.com/pricing', text: 'Pricing ↗' },
      { href: 'https://www.abelcaptain.com/submit', text: 'Submit ↗' },
    ],
  },
  // { href: '/about', text: '关于' },
]
