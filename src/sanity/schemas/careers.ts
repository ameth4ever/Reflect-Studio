import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'department', title: 'Department', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['Full-time', 'Part-time', 'Contract', 'Internship'] } }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
  ],
})
