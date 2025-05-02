import { defineField, defineType } from 'sanity'

import { ScriptIcon } from '~/assets'

export default defineType({
  name: 'category',
  title: '分类',
  type: 'document',
  icon: ScriptIcon,
  fields: [
    defineField({
      name: 'title',
      title: '名称',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '链接标识符',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: '简单介绍',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
  ],
})
