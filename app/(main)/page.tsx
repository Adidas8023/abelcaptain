import React from 'react'

import { Hero } from '~/app/(main)/Hero'
import { BlogPosts } from '~/app/(main)/blog/BlogPosts'
import { Newsletter } from '~/app/(main)/Newsletter'
import { AnimatedContent } from '~/app/components/AnimatedContent'
import { PencilSwooshIcon } from '~/assets'
import { Container } from '~/components/ui/Container'
import InfiniteSlider from '~/components/InfiniteSlider'

export default function BlogHomePage() {
  return (
    <>
      <Hero />
      
      <Container className="mt-6">
        <AnimatedContent>
          <div className="mx-auto max-w-2xl">
            <Newsletter />
          </div>
        </AnimatedContent>
      </Container>

      <Container className="mt-8 md:mt-12">
        <AnimatedContent>
          <div className="mb-12">
            <InfiniteSlider />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col gap-6">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <PencilSwooshIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">近期文章</span>
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <BlogPosts limit={4} />
              </div>
            </div>
          </div>
        </AnimatedContent>
      </Container>
    </>
  )
}

export const revalidate = 60
