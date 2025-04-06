import { defineField, defineType } from 'sanity'

import { FilterHorizontalIcon } from '~/assets'

export default defineType({
  name: 'settings',
  title: '网站设置',
  type: 'document',
  icon: FilterHorizontalIcon,
  fields: [
    defineField({
      name: 'projects',
      title: '项目展示列表',
      description: '在 `/projects` 页面展示的项目列表',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'project' } }],
    }),
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: '网站设置',
    }),
  },
})
