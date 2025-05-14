'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { codeInput } from '@sanity/code-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { media } from 'sanity-plugin-media'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

interface SanityDocument {
  _type: string;
  slug?: {
    current: string;
  };
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    codeInput(),
  ],
  document: {
    productionUrl: async (prev: string, context: { document: SanityDocument }) => {
      const { document } = context
      if (document._type === 'post') {
        return Promise.resolve(`${window.location.origin}/blog/${document.slug?.current}`)
      }
      return Promise.resolve(prev)
    },
  },
})
