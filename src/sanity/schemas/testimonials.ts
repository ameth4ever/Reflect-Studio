import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'clientName', title: 'Client Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image' }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'review', title: 'Review', type: 'text' }),
  ],
})
