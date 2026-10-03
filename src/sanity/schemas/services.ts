import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'icon', title: 'Icon', type: 'string' }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image' }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'process',
      title: 'Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
})
