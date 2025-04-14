import { Container } from '~/components/ui/Container'
import { NavigationCard } from './NavigationCard'

const title = '航海图'
const description = '这里是船长为你精心绘制的航海图，收录了我在数字海洋中发现的各个神奇港口。无论你是想学习技术、寻找工具，还是探索有趣的内容，这份航海图都能指引你找到目的地。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function NavigationPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          ⚓️ 数字海洋航海图
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          亲爱的水手，欢迎查阅这份航海图！在这里，你可以找到通往各个神奇港口的航线。
          这些都是我在漫长的航海生涯中，精心标注的值得一访的目的地。
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          {/* 技术海域 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              🌊 技术海域
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <NavigationCard
                title="React 官方文档"
                description="React 官方文档，最权威的 React 学习资源。"
                href="https://react.dev"
                icon="⚛️"
              />
              <NavigationCard
                title="Next.js 学习"
                description="Next.js 官方文档和教程，从入门到精通。"
                href="https://nextjs.org/learn"
                icon="📚"
              />
            </div>
          </section>

          {/* 工具港湾 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              ⚓️ 工具港湾
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <NavigationCard
                title="Vercel"
                description="最好的前端部署平台，提供极致的开发体验。"
                href="https://vercel.com"
                icon="▲"
                isAffiliate
              />
              <NavigationCard
                title="Tailwind CSS"
                description="实用至上的 CSS 框架，让样式开发更高效。"
                href="https://tailwindcss.com"
                icon="🎨"
              />
            </div>
          </section>

          {/* 资源群岛 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              🏝️ 资源群岛
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <NavigationCard
                title="数字游民指南"
                description="探索远程工作和数字游民生活方式的终极指南。"
                href="#"
                icon="🌴"
                isAffiliate
              />
              <NavigationCard
                title="独立开发者社区"
                description="连接全球独立开发者，分享经验与资源。"
                href="#"
                icon="🚀"
              />
            </div>
          </section>

          {/* 娱乐湾 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              🎮 娱乐湾
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <NavigationCard
                title="Steam 游戏推荐"
                description="精选游戏推荐，带你探索虚拟世界的无限可能。"
                href="#"
                icon="🎮"
                isAffiliate
              />
              <NavigationCard
                title="创意工具集"
                description="激发创意的工具集合，让创作更有趣。"
                href="#"
                icon="🎨"
              />
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
