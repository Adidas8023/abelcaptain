import Balancer from 'react-wrap-balancer'

import { SocialLink } from '~/components/links/SocialLink'
import { Container } from '~/components/ui/Container'
import { kvKeys } from '~/config/kv'
import { env } from '~/env.mjs'
import { redis } from '~/lib/redis'
import { getLatestBlogPosts } from '~/sanity/queries'
import { type Post } from '~/sanity/schemas/post'

import { BlogPosts } from './BlogPosts'

const description =
  '欢迎登上我的博客航线！作为Abel船长，我在这片数字海洋上航行多年，搜集了众多珍贵的知识宝藏。在这里，你将发现关于最新技术工具的使用指南、各种薅羊毛省钱攻略、区块链投资策略以及AI工具应用的深度解析。我的航海日志主要记录这些领域的探索心得，希望能帮助更多的冒险者在信息海洋中寻找到有价值的宝藏！'
export const metadata = {
  title: '船长的航海日志',
  description,
  openGraph: {
    title: '船长的航海日志',
    description,
  },
  twitter: {
    title: '船长的航海日志',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default async function BlogPage() {
  const limit = 20
  let initialPosts: Post[] = []
  let initialViews: number[] = []
  
  try {
    initialPosts = await getLatestBlogPosts({ limit, forDisplay: true }) || []
    
    if (initialPosts.length > 0) {
      const postIdKeys = initialPosts.map(({ _id }: { _id: string }) => kvKeys.postViews(_id))
      
      if (env.VERCEL_ENV === 'development') {
        initialViews = initialPosts.map(() => Math.floor(Math.random() * 1000))
      } else {
        if (postIdKeys.length > 0) {
          initialViews = await redis.mget<number[]>(...postIdKeys) || []
        }
      }
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // 出错时使用空数组
  }

  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          船长的航海日志
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <p className="flex items-center">
          <SocialLink href="/feed.xml" platform="rss" />
        </p>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts initialPosts={initialPosts} initialViews={initialViews} />
      </div>
    </Container>
  )
}

export const revalidate = 60
