'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { Tooltip } from '~/components/ui/Tooltip'
import { cn } from '~/lib/utils'

const PARTNERS = [
  {
    id: 1,
    src: '/images/partners/bilibili.svg',
    href: 'https://space.bilibili.com/233661707',
    name: 'Bilibili'
  },
  {
    id: 2,
    src: '/images/partners/youtube.svg',
    href: '',
    name: 'YouTube'
  },
  {
    id: 3,
    src: '/images/partners/zhihu.png',
    href: 'https://www.zhihu.com/people/abel-96-49',
    name: '知乎'
  },
  {
    id: 4,
    src: '/images/partners/wechat.svg',
    href: 'https://mp.weixin.qq.com/s/zG_uYsYCW-LopUcAW76L0w',
    name: '微信公众号'
  },
  {
    id: 5,
    src: '/images/partners/discord.png',
    href: 'https://discord.gg/cNAmcG3vXN',
    name: 'Discord'
  },
  {
    id: 6,
    src: '/images/partners/binance.svg',
    href: 'https://accounts.binance.com/register?ref=61330028',
    name: 'Binance'
  },
  {
    id: 7,
    src: '/images/partners/okx.png',
    href: 'https://okx.com/join/4560366',
    name: 'OKX'
  },
  {
    id: 8,
    src: '/images/partners/douyin.svg',
    href: '',
    name: '抖音'
  },
  {
    id: 9,
    src: '/images/partners/xiaohongshu.svg',
    href: '',
    name: '小红书'
  },
  {
    id: 10,
    src: '/images/partners/notion.svg',
    href: '',
    name: 'Notion'
  }
]

export default function InfiniteSlider() {
  const [scrollState, setScrollState] = useState<'fast' | 'slow' | 'paused'>('fast')
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      className="relative flex w-full select-none items-center justify-center overflow-hidden bg-white/80 dark:bg-zinc-900/80"
      onHoverStart={() => setScrollState('slow')}
      onHoverEnd={() => setScrollState('fast')}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: 'easeOut'
        }
      }}
    >
      {/* 渐变遮罩 */}
      <div className="absolute inset-y-0 left-0 w-[100px] md:w-[200px] bg-gradient-to-r from-white to-transparent dark:from-zinc-900 z-10" />
      <div className="absolute inset-y-0 right-0 w-[100px] md:w-[200px] bg-gradient-to-l from-white to-transparent dark:from-zinc-900 z-10" />
      
      {/* 动态光效 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 animate-pulse" />
      
      <div 
        ref={sliderRef}
        className="relative w-full overflow-hidden"
      >
        <div
          className={cn(
            "flex gap-6 md:gap-12 py-6",
            "animate-scroll",
            "transition-[--scroll-speed] duration-500 ease-in-out"
          )}
          style={{
            width: 'max-content',
            '--scroll-speed': scrollState === 'fast' ? '20s' : '40s',
            animationPlayState: scrollState === 'paused' ? 'paused' : 'running',
          } as React.CSSProperties}
        >
          {/* 第一组 Logo */}
          {PARTNERS.map((partner) => (
            <Tooltip.Provider key={partner.id}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  {partner.href ? (
                    <Link
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'relative h-12 w-24 md:h-16 md:w-32 flex-shrink-0 rounded-xl',
                        'bg-white/10 backdrop-blur-sm p-2',
                        'hover:bg-white/20 transition-colors duration-300'
                      )}
                      onMouseEnter={() => setScrollState('paused')}
                      onMouseLeave={() => setScrollState('slow')}
                      onClick={() => setScrollState('paused')}
                      onTouchStart={() => setScrollState('paused')}
                      onTouchEnd={() => setScrollState('slow')}
                    >
                      <Image
                        src={partner.src}
                        alt={`${partner.name}`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </Link>
                  ) : (
                    <div
                      className={cn(
                        'relative h-12 w-24 md:h-16 md:w-32 flex-shrink-0 rounded-xl',
                        'bg-white/10 backdrop-blur-sm p-2',
                        'hover:bg-white/20 transition-colors duration-300'
                      )}
                      onMouseEnter={() => setScrollState('paused')}
                      onMouseLeave={() => setScrollState('slow')}
                      onTouchStart={() => setScrollState('paused')}
                      onTouchEnd={() => setScrollState('slow')}
                    >
                      <Image
                        src={partner.src}
                        alt={`${partner.name}`}
                        fill
                        className="object-contain p-2 opacity-50"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                  )}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    {partner.name}
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}

          {/* 第二组 Logo (用于无缝循环) */}
          {PARTNERS.map((partner) => (
            <Tooltip.Provider key={`${partner.id}-clone`}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  {partner.href ? (
                    <Link
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'relative h-12 w-24 md:h-16 md:w-32 flex-shrink-0 rounded-xl',
                        'bg-white/10 backdrop-blur-sm p-2',
                        'hover:bg-white/20 transition-colors duration-300'
                      )}
                      onMouseEnter={() => setScrollState('paused')}
                      onMouseLeave={() => setScrollState('slow')}
                      onClick={() => setScrollState('paused')}
                      onTouchStart={() => setScrollState('paused')}
                      onTouchEnd={() => setScrollState('slow')}
                    >
                      <Image
                        src={partner.src}
                        alt={`${partner.name}`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </Link>
                  ) : (
                    <div
                      className={cn(
                        'relative h-12 w-24 md:h-16 md:w-32 flex-shrink-0 rounded-xl',
                        'bg-white/10 backdrop-blur-sm p-2',
                        'hover:bg-white/20 transition-colors duration-300'
                      )}
                      onMouseEnter={() => setScrollState('paused')}
                      onMouseLeave={() => setScrollState('slow')}
                      onTouchStart={() => setScrollState('paused')}
                      onTouchEnd={() => setScrollState('slow')}
                    >
                      <Image
                        src={partner.src}
                        alt={`${partner.name}`}
                        fill
                        className="object-contain p-2 opacity-50"
                        sizes="(max-width: 768px) 96px, 128px"
                      />
                    </div>
                  )}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content>
                    {partner.name}
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 