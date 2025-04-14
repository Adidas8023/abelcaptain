import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'
import { ProjectCard } from './ProjectCard'

const title = '关于我'
const description = '欢迎登上我的旗舰！在这里，你可以更深入地了解这位数字海洋中的船长。'

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

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          ⚓️ 船长的航海日志
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <div className="mt-16 sm:mt-20">
        <div className="space-y-12 text-base text-zinc-600 dark:text-zinc-400">
          {/* 个人简介 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              🎭 船长身份
            </h2>
            <div className="mt-6 space-y-4">
              <p>
                大家好，我是 AbelCaptain，一位在数字海洋中航行的独立开发者。
                我热衷于探索新技术的浪潮，同时也在寻找能够帮助他人的航线。
              </p>
              <p>
                作为一名全栈开发者，我擅长使用 React、Next.js、Node.js 等工具构建现代化的 Web 应用。
                同时，我也是一位数字游民，热爱自由工作的生活方式。
              </p>
            </div>
          </section>

          {/* 我的项目 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              🏗️ 我的港口
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ProjectCard
                title="DepositOne"
                description="一个安全的本地优先工具，帮助您在一个界面管理多个加密货币交易所的充值地址。告别在不同交易所 App 之间来回切换！"
                href="https://github.com/Adidas8023/DepositOne"
                icon="💎"
                type="github"
              />
              <ProjectCard
                title="Captain's Store"
                description="船长的数字工具商店，提供各种实用的加密货币工具和自动化解决方案。"
                href="https://abel.lemonsqueezy.com"
                icon="🏪"
                type="store"
              />
            </div>
          </section>

          {/* 技术栈 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              ⚔️ 装备清单
            </h2>
            <div className="mt-6 space-y-4">
              <p>
                在我的航海工具箱中，你可以找到：
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>前端海域：React、Next.js、TypeScript、Tailwind CSS</li>
                <li>后端港口：Node.js、PostgreSQL、Redis</li>
                <li>云端瞭望台：AWS、Vercel、Docker</li>
                <li>航海工具：VS Code、Git、Figma</li>
              </ul>
            </div>
          </section>

          {/* 个人经历 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              🗺️ 航海经历
            </h2>
            <div className="mt-6 space-y-4">
              <p>
                我的航海生涯始于大学时期的编程启蒙。毕业后，我选择了一条不同寻常的路：
                成为一名数字游民，在世界各地远程工作，同时开发自己的产品。
              </p>
              <p>
                这些年来，我经历过暴风雨，也见过彩虹。每一次的冒险都让我成长，
                每一个项目都是一次新的探索。现在，我正在专注于开发能够帮助他人的工具和服务。
              </p>
            </div>
          </section>

          {/* 联系方式 */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              📬 联系船长
            </h2>
            <div className="mt-6 space-y-4">
              <p>
                如果你想和我交流，或者有任何问题，欢迎通过以下方式联系我：
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Twitter: <a href="https://x.com/Cyrpto_Captain" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">@Cyrpto_Captain</a></li>
                <li>Email: <a href="mailto:abel@abelcaptain.com" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300">abel@abelcaptain.com</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Container>
  )
}
