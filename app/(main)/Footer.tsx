'use client'

import Link from 'next/link'
import React from 'react'

import { CursorClickIcon, UsersIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { Container } from '~/components/ui/Container'
import { navigationItems } from '~/config/nav'
import { prettifyNumber } from '~/lib/math'

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

type VisitorGeolocation = {
  country: string
  city?: string
  flag: string
}

interface TotalPageViewsProps {
  views: number;
}

function TotalPageViews({ views }: TotalPageViewsProps) {
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

interface LastVisitorInfoProps {
  lastVisitor: VisitorGeolocation | null;
}

function LastVisitorInfo({ lastVisitor }: LastVisitorInfoProps) {
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

interface FooterProps {
  pageViews: number;
  visitorInfo: VisitorGeolocation | null;
}

export function Footer({ pageViews, visitorInfo }: FooterProps) {
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
              <TotalPageViews views={pageViews} />
              <LastVisitorInfo lastVisitor={visitorInfo} />
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
