'use client'

import { clsxm } from '@zolplay/utils'
import Link from 'next/link'

interface NavigationCardProps {
  title: string
  description: string
  href: string
  icon?: string
  isAffiliate?: boolean
}

export function NavigationCard({ title, description, href, icon = '🎯', isAffiliate = false }: NavigationCardProps) {
  return (
    <div className="transform transition-all duration-300 hover:scale-[1.02]">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsxm(
          'group relative flex flex-col rounded-2xl p-6 transition-all duration-300',
          'bg-zinc-50 hover:bg-white dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50',
          'ring-1 ring-zinc-100 hover:ring-zinc-200 dark:ring-zinc-800 dark:hover:ring-zinc-700'
        )}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl" role="img" aria-label="icon">
            {icon}
          </span>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              {title}
            </h3>
            {isAffiliate && (
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-500">
                推荐
              </span>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </Link>
    </div>
  )
} 