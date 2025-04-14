'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Container } from '~/components/ui/Container'
import { RainbowButton } from '~/components/ui/rainbow-button'

import { AnimatedContent } from '../components/AnimatedContent'

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const quoteVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
}

const imageVariants = {
  hidden: { 
    opacity: 0,
    x: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.2
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

export function Hero() {
  return (
    <Container className="mt-6 bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8">
          <div className="flex flex-col space-y-8 w-full md:w-3/5">
            <AnimatedContent>
              {/* 引用文本 */}
              <motion.div 
                className="flex items-center"
                variants={quoteVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-col">
                  <p className="font-inter text-sm tracking-[3.97%] text-black/50 dark:text-white/50 italic">
                    Our No. 1 enemy is ignorance. And I believe that is the No. 1 enemy for everyone is{' '}
                    <br className="hidden md:block" />
                    not understanding what actually is going on in the world. ——Julian Assange
                  </p>
                </div>
              </motion.div>

              {/* 主要文本 */}
              <motion.div 
                className="relative font-silkscreen text-xl md:text-2xl leading-relaxed md:leading-relaxed tracking-tighter"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 blur-xl" />
                <p className="whitespace-pre-line bg-gradient-to-r from-[#8855FF] to-[#c299ff] bg-clip-text text-transparent hover:from-[#c299ff] hover:to-[#8855FF] transition-all duration-500">
                  Ahoy，冒险家们！我是Abel船长，欢迎来到我的数字航海日志！

在这里，我将与你分享我的互联网冒险故事和探索经验。想知道如何在INTERNET找到最新的信息宝藏吗？或是如何巧妙地申请海外订阅服务？

不用担心，我都为你准备好了:) 我还有一家科技小店，里面藏着我发现的各种神奇工具。所以，扬帆起航，一起探索这片充满奇迹的数字大陆吧！
                </p>
              </motion.div>

              {/* 按钮区域 */}
              <motion.div 
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Bilibili按钮 */}
                <Link
                  href="https://space.bilibili.com/8683969"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RainbowButton className="text-sm !bg-[#8855FF] hover:!bg-[#9f75ff]">
                    关注我的Bilibili
                  </RainbowButton>
                </Link>

                {/* 成为学徒按钮 */}
                <RainbowButton className="text-sm">
                  成为学徒
                </RainbowButton>
              </motion.div>
            </AnimatedContent>
          </div>

          {/* 船长图片 */}
          <motion.div
            className="relative flex-shrink-0 group md:w-2/5 md:flex md:justify-end mt-8 md:mt-12"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {/* 背景动效 */}
            <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700">
              {/* 科技黑洞效果 */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
                {/* 中心黑洞 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-purple-900/30 backdrop-blur-xl animate-pulse"
                    style={{
                      boxShadow: '0 0 60px rgba(147, 51, 234, 0.5), inset 0 0 30px rgba(147, 51, 234, 0.5)',
                      filter: 'blur(8px)',
                    }}
                  />
                  <div className="absolute inset-2 rounded-full bg-purple-600/20 animate-[spin_10s_linear_infinite]"
                    style={{
                      filter: 'blur(4px)',
                    }}
                  />
                </div>

                {/* 外围光环 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-purple-500/15 animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-purple-500/10 animate-[spin_25s_linear_infinite]" />

                {/* 发散光束 */}
                <div className="absolute inset-0">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2 w-1 h-32 origin-bottom"
                      style={{
                        transform: `rotate(${i * 30}deg)`,
                        animation: 'techBeam 3s ease-in-out infinite',
                        animationDelay: `${i * 0.25}s`,
                        background: 'linear-gradient(to top, rgba(147, 51, 234, 0.5), transparent)',
                        filter: 'blur(4px)',
                        '--rotation': `${i * 30}deg`,
                      } as React.CSSProperties}
                    />
                  ))}
                </div>

                {/* 粒子效果 */}
                <div className="absolute inset-0">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-purple-400"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: 'techParticle 2s ease-in-out infinite',
                        animationDelay: `${Math.random() * 2}s`,
                        opacity: 0.6,
                        '--tx': `${Math.random() * 40 - 20}px`,
                        '--ty': `${Math.random() * 40 - 20}px`,
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* 图片 */}
            <div className="relative">
              <Image
                src="/hero-image.png"
                alt="Abel船长"
                width={240}
                height={320}
                className="relative drop-shadow-xl transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  )
} 