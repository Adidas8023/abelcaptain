import { parseDateTime } from '@zolplay/utils'
import Image from 'next/image'
import Link from 'next/link'

import {
  CalendarIcon,
  CursorClickIcon,
  HourglassIcon,
  ScriptIcon,
} from '~/assets'
import { prettifyNumber } from '~/lib/math'
import { type Post } from '~/sanity/schemas/post'

export function BlogPostCard({ post, views }: { post: Post; views: number }) {
  const { title, slug, mainImage, publishedAt, categories, readingTime } = post

  const hasImage = Boolean(mainImage?.asset?.url)
  const imageForeground = mainImage?.asset?.dominant?.foreground ?? '#000000'
  const imageBackground = mainImage?.asset?.dominant?.background ?? '#ffffff'

  return (
    <Link
      href={`/blog/${slug}`}
      prefetch={false}
      className="group relative flex w-full transform-gpu flex-col rounded-3xl bg-transparent ring-2 ring-[--post-image-bg] transition-transform hover:-translate-y-0.5"
      style={
        {
          '--post-image-fg': imageForeground,
          '--post-image-bg': imageBackground,
          '--post-image': hasImage ? `url(${mainImage.asset.url})` : 'none',
        } as React.CSSProperties
      }
    >
      <div className="relative aspect-[240/135] w-full">
        {hasImage ? (
          <Image
            src={mainImage.asset.url}
            alt={title}
            className="rounded-t-3xl object-cover"
            placeholder={mainImage.asset.lqip ? "blur" : "empty"}
            {...(mainImage.asset.lqip ? { blurDataURL: mainImage.asset.lqip } : {})}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        ) : (
          <div className="h-full w-full rounded-t-3xl bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900" />
        )}
      </div>
      <span className="relative z-10 flex w-full flex-1 shrink-0 flex-col justify-between gap-0.5 rounded-b-[calc(1.5rem+1px)] bg-cover bg-bottom bg-no-repeat p-4 bg-blend-overlay [background-image:var(--post-image)] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:select-none before:rounded-b-[calc(1.5rem-1px)] before:bg-[--post-image-bg] before:opacity-70 before:transition-opacity after:pointer-events-none after:absolute after:inset-0 after:z-10 after:select-none after:rounded-b-[calc(1.5rem-1px)] after:bg-gradient-to-b after:from-transparent after:to-[--post-image-bg] after:backdrop-blur after:transition-opacity group-hover:before:opacity-30 md:p-5">
        <h2 className="z-20 text-base font-bold tracking-tight text-[--post-image-fg] opacity-70 transition-opacity group-hover:opacity-100 md:text-xl">
          {title}
        </h2>

        <span className="relative z-20 flex items-center justify-between opacity-50 transition-opacity group-hover:opacity-80">
          <span className="inline-flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1 text-[12px] font-medium text-[--post-image-fg] md:text-sm">
              <CalendarIcon />
              <span>
                {parseDateTime({ date: new Date(publishedAt) })?.format(
                  'YYYY/MM/DD'
                )}
              </span>
            </span>

            {Array.isArray(categories) && categories.length > 0 && (
              <span className="inline-flex items-center space-x-1 text-[12px] font-medium text-[--post-image-fg] md:text-sm">
                <ScriptIcon />
                <span>{categories.join(', ')}</span>
              </span>
            )}
          </span>
          <span className="inline-flex items-center space-x-3 text-[12px] font-medium text-[--post-image-fg] md:text-xs">
            <span className="inline-flex items-center space-x-1">
              <CursorClickIcon />
              <span>{prettifyNumber(views, true)}</span>
            </span>

            <span className="inline-flex items-center space-x-1">
              <HourglassIcon />
              <span>{readingTime?.toFixed(0) ?? '0'}分钟阅读</span>
            </span>
          </span>
        </span>
      </span>
    </Link>
  )
}
