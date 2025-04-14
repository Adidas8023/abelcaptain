import './blog/[slug]/blog.css'

import { Analytics } from '@vercel/analytics/react'

import { Footer } from '~/app/(main)/Footer'
import { Header } from '~/app/(main)/Header'
import { QueryProvider } from '~/app/QueryProvider'
import { kvKeys } from '~/config/kv'
import { env } from '~/env.mjs'
import { redis } from '~/lib/redis'

async function getPageViews() {
  if (env.VERCEL_ENV === 'production') {
    return redis.incr(kvKeys.totalPageViews)
  }
  return 345678
}

type VisitorGeolocation = {
  country: string
  city?: string
  flag: string
}

async function getLastVisitor() {
  if (env.VERCEL_ENV === 'production') {
    const [lv, cv] = await redis.mget<VisitorGeolocation[]>(
      kvKeys.lastVisitor,
      kvKeys.currentVisitor
    )
    await redis.set(kvKeys.lastVisitor, cv)
    return lv
  }
  return {
    country: 'US',
    flag: '🇺🇸',
  }
}

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageViews = await getPageViews()
  const visitorInfo = await getLastVisitor()

  return (
    <>
      <div className="pointer-events-none fixed inset-0 select-none bg-white dark:bg-black bg-top bg-repeat z-[-1]" />
      <span className="pointer-events-none fixed top-0 block h-[800px] w-full select-none bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(5,5,5,0.045)_0%,rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(103.72%_46.58%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_100%)] z-[-1]" />

      <div className="fixed inset-0 flex justify-center sm:px-8 z-[-1]">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full ring-1 ring-zinc-100 dark:ring-zinc-400/20" />
        </div>
      </div>

      <QueryProvider>
        <div className="relative text-zinc-800 dark:text-zinc-200">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer pageViews={pageViews} visitorInfo={visitorInfo} />
        </div>
      </QueryProvider>

      <Analytics />
    </>
  )
}
