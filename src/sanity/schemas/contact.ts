import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'text' }),
    defineField({
      name: 'location1',
      title: 'Location 1',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'mapsUrl', title: 'Google Maps URL', type: 'url' }),
        defineField({ name: 'embedUrl', title: 'Google Maps Embed URL', type: 'url' }),
      ],
    }),
    defineField({
      name: 'location2',
      title: 'Location 2',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'mapsUrl', title: 'Google Maps URL', type: 'url' }),
        defineField({ name: 'embedUrl', title: 'Google Maps Embed URL', type: 'url' }),
      ],
    }),
  ],
})
