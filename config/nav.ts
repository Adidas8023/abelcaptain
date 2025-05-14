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
      { href: 'https://www.abelweb3aitools.com/', text: 'Home ↗' },
      { href: 'https://www.abelweb3aitools.com/collection', text: 'Collection ↗' },
      { href: 'https://www.abelweb3aitools.com/category', text: 'Category ↗' },
      { href: 'https://www.abelweb3aitools.com/tag', text: 'Tag ↗' },
      { href: 'https://www.abelweb3aitools.com/blog', text: 'Blog ↗' },
      { href: 'https://www.abelweb3aitools.com/pricing', text: 'Pricing ↗' },
      { href: 'https://www.abelweb3aitools.com/submit', text: 'Submit ↗' },
    ],
  },
  // { href: '/about', text: '关于' },
]
