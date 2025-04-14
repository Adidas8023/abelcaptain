'use client'

import { clsxm } from '@zolplay/utils'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  href: string
  icon?: string
  type: 'github' | 'store'
}

export function ProjectCard({ title, description, href, icon = '⚓️', type }: ProjectCardProps) {
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
            <span className={clsxm(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              type === 'github' 
                ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
            )}>
              {type === 'github' ? 'GitHub' : '商店'}
            </span>
          </div>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </Link>
    </div>
  )
} 