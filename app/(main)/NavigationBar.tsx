'use client'

import { Popover, type PopoverProps, Transition } from '@headlessui/react'
import { clsxm } from '@zolplay/utils'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { navigationItems } from '~/config/nav'

function NavItem({
  href,
  children,
  external,
  dropdown,
}: {
  href?: string
  children: React.ReactNode
  external?: boolean
  dropdown?: Array<{ href: string; text: string }>
}) {
  const pathname = usePathname()
  const isActive = href ? pathname === href : false

  return (
    <li className="relative">
      {href ? (
        <Link
          href={href}
          className={clsxm(
            'relative block whitespace-nowrap px-3 py-2 transition',
            isActive
              ? 'text-[#8855FF] dark:text-[#c299ff]'
              : 'hover:text-[#8855FF] dark:hover:text-[#c299ff]'
          )}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
          {isActive && (
            <motion.span
              className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-[#8855FF]/0 via-[#8855FF]/70 to-[#8855FF]/0 dark:from-[#c299ff]/0 dark:via-[#c299ff]/40 dark:to-[#c299ff]/0"
              layoutId="active-nav-item"
            />
          )}
        </Link>
      ) : (
        <div className="group/dropdown relative block whitespace-nowrap px-3 py-2 transition hover:text-[#8855FF] dark:hover:text-[#c299ff] cursor-pointer">
          {children}
          {dropdown && (
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 pointer-events-none transition-all duration-200 group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto">
              <div className="rounded-xl bg-gradient-to-b from-zinc-50/70 to-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10">
                <ul className="space-y-1">
                  {dropdown.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block whitespace-nowrap px-3 py-2 text-sm text-zinc-600 transition hover:text-[#8855FF] dark:text-zinc-400 dark:hover:text-[#c299ff]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </li>
  )
}

function Desktop({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const radius = useMotionValue(0)
  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - bounds.left)
      mouseY.set(clientY - bounds.top)
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2.5)
    },
    [mouseX, mouseY, radius]
  )
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--spotlight-color) 0%, transparent 65%)`

  return (
    <nav
      onMouseMove={handleMouseMove}
      className={clsxm(
        'group relative',
        'rounded-full bg-gradient-to-b from-zinc-50/70 to-white/90',
        'shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md',
        'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:ring-zinc-100/10',
        '[--spotlight-color:rgb(236_252_203_/_0.6)] dark:[--spotlight-color:rgb(217_249_157_/_0.07)]',
        className
      )}
      {...props}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />

      <ul className="flex bg-transparent px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {navigationItems.map((item) => (
          <NavItem
            key={item.text}
            href={item.href}
            external={item.external}
            dropdown={item.dropdown}
          >
            {item.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

function MobileNavItem({
  href,
  children,
  external,
  dropdown,
}: {
  href?: string
  children: React.ReactNode
  external?: boolean
  dropdown?: Array<{ href: string; text: string }>
}) {
  if (dropdown) {
    return (
      <li className="py-2">
        <div className="block text-base text-zinc-800 dark:text-zinc-300">
          {children}
        </div>
        <ul className="ml-4 mt-2 space-y-2">
          {dropdown.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-sm text-zinc-600 transition hover:text-[#8855FF] dark:text-zinc-400 dark:hover:text-[#c299ff]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    )
  }

  if (!href) {
    return (
      <li>
        <div className="block py-2 text-zinc-800 dark:text-zinc-300">
          {children}
        </div>
      </li>
    )
  }

  return (
    <li>
      <Link
        href={href}
        className="block py-2 text-zinc-800 dark:text-zinc-300 hover:text-[#8855FF] dark:hover:text-[#c299ff]"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    </li>
  )
}

function Mobile(props: PopoverProps<'div'>) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md focus:outline-none focus-visible:ring-2 dark:from-zinc-900/30 dark:to-zinc-800/80 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:focus-visible:ring-yellow-500/80">
        前往
        {/* Chevron */}
        <svg
          viewBox="0 0 8 6"
          aria-hidden="true"
          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        >
          <path
            d="M1.75 1.75 4 4.25l2.25-2.5"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={React.Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-gradient-to-b from-zinc-100/75 to-white p-8 ring-1 ring-zinc-900/5 dark:from-zinc-900/50 dark:to-zinc-900 dark:ring-zinc-800"
          >
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {({ close }) => (
              <>
                <div className="flex flex-row-reverse items-center justify-between">
                  <Popover.Button
                    aria-label="关闭菜单"
                    className="-m-1 p-1"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                    >
                      <path
                        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Popover.Button>
                  <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    站内导航
                  </h2>
                </div>
                <nav className="mt-6">
                  <ul className="-my-2 divide-y divide-zinc-500/20 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                    {navigationItems.map((item) => (
                      <MobileNavItem
                        key={item.text}
                        href={item.href}
                        external={item.external}
                        dropdown={item.dropdown}
                      >
                        {item.text}
                      </MobileNavItem>
                    ))}
                  </ul>
                </nav>
              </>
            )}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export const NavigationBar = {
  Desktop,
  Mobile,
} as const
