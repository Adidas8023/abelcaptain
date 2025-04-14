'use client'

import { useState } from 'react'

import { type Post } from '~/sanity/schemas/post'

import { BlogPostCard } from './BlogPostCard'

interface BlogPostsProps {
  limit?: number
  initialPosts: Post[]
  initialViews: number[]
}

export function BlogPosts({ initialPosts = [], initialViews = [] }: BlogPostsProps) {
  const [posts] = useState<Post[]>(initialPosts || [])
  const [views] = useState<number[]>(initialViews || [])
  
  if (!posts || posts.length === 0) {
    return <div className="col-span-2 text-center py-10 text-zinc-500">暂无博客文章</div>
  }
  
  return (
    <>
      {posts.map((post, idx) => (
        <BlogPostCard post={post} views={views[idx] ?? 0} key={post._id} />
      ))}
    </>
  )
}
