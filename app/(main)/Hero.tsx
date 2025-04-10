'use client'

import Link from 'next/link'
import React from 'react'

import { Container } from '~/components/ui/Container'
import { RainbowButton } from '~/components/ui/rainbow-button'

export function Hero() {
  return (
    <Container className="mt-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col space-y-8">
          {/* 引用文本 */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="font-inter text-sm tracking-[3.97%] text-black/50 dark:text-white/50">
                Our No. 1 enemy is ignorance. And I believe that is the No. 1 enemy for everyone is{' '}
                <br />
                not understanding what actually is going on in the world. ——Julian Assange
              </p>
            </div>
          </div>

          {/* 主要文本 */}
          <div className="font-silkscreen text-2xl leading-tight tracking-tighter text-[#8855FF]">
            Ahoy，冒险家们！我是Abel船长，欢迎来到我的数字航海
            <br />
            日志！在这里，我将与你分享我的互联网冒险故事和探索经
            <br />
            验。想知道如何在INTERNET找到最新的信息宝藏吗？或是如
            <br />
            何巧妙地申请海外订阅服务？不用担心，我都为你准备好了:)
            <br />
            我还有一家科技小店，里面藏着我发现的各种神奇工具。所
            <br />
            以，扬帆起航，一起探索这片充满奇迹的数字大陆吧！
          </div>

          {/* 按钮区域 */}
          <div className="flex flex-wrap gap-4">
            {/* Bilibili按钮 */}
            <Link
              href="https://space.bilibili.com/8683969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-[#1E1515] px-7 py-4 font-medium text-white"
            >
              关注我的Bilibili
            </Link>

            {/* 成为学徒按钮 (使用RainbowButton) */}
            <RainbowButton>
              成为学徒
            </RainbowButton>
          </div>

          {/* 正在招学生标志 */}
          <div className="relative mt-4 w-fit rounded-xl bg-[#F9F8F5] px-4 py-2">
            <div className="absolute inset-0 rounded-xl bg-[#28D774] opacity-10"></div>
            <span className="font-medium text-black/50">正在招学生</span>
          </div>
        </div>
      </div>
    </Container>
  )
} 