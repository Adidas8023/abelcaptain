import { count, isNotNull } from 'drizzle-orm'
import Link from 'next/link'
import React, { use } from 'react'

import { CursorClickIcon, UsersIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { Container } from '~/components/ui/Container'
import { kvKeys } from '~/config/kv'
import { navigationItems } from '~/config/nav'
import { db } from '~/db'
import { subscribers } from '~/db/schema'
import { env } from '~/env.mjs'
import { prettifyNumber } from '~/lib/math'
import { redis } from '~/lib/redis'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-[#8855FF] dark:hover:text-[#c299ff]"
    >
      {children}
    </Link>
  )
}

function Links() {
  return (
    <nav className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
      {navigationItems
        .filter((item) => item.href)
        .map(({ href, text }) => (
          <NavLink key={text} href={href}>
            {text}
          </NavLink>
        ))}
    </nav>
  )
}

async function getPageViews() {
  if (env.VERCEL_ENV === 'production') {
    return redis.incr(kvKeys.totalPageViews)
  }
  return 345678
}

function TotalPageViews() {
  const views = use(getPageViews())

  return (
    <span className="flex items-center justify-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 md:justify-start">
      <UsersIcon className="h-4 w-4" />
      <span title={`${Intl.NumberFormat('en-US').format(views)}次浏览`}>
        总浏览量&nbsp;
        <span className="font-medium">{prettifyNumber(views, true)}</span>
      </span>
    </span>
  )
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

function LastVisitorInfo() {
  const lastVisitor = use(getLastVisitor())

  if (!lastVisitor) {
    return null
  }

  return (
    <span className="flex items-center justify-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 md:justify-start">
      <CursorClickIcon className="h-4 w-4" />
      <span>
        最近访客来自&nbsp;
        {[lastVisitor.city, lastVisitor.country].filter(Boolean).join(', ')}
      </span>
      <span className="font-medium">{lastVisitor.flag}</span>
    </span>
  )
}

export async function Footer() {
  await db
    .select({
      subCount: count(),
    })
    .from(subscribers)
    .where(isNotNull(subscribers.subscribedAt))

  return (
    <footer className="mt-16 bg-white dark:bg-black">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-500/80 dark:text-zinc-400/80">
                &copy; {new Date().getFullYear()} AbelCaptain. 关注我：
                <PeekabooLink href="https://x.com/Cyrpto_Captain">
                  Twitter
                </PeekabooLink>
              </p>
              <Links />
            </div>
          </Container.Inner>
          <Container.Inner className="mt-6">
            <div className="flex flex-col items-center justify-start gap-2 sm:flex-row">
              <React.Suspense>
                <TotalPageViews />
              </React.Suspense>
              <React.Suspense>
                <LastVisitorInfo />
              </React.Suspense>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
