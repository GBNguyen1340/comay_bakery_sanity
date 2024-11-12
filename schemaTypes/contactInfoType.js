import { defineField, defineType } from 'sanity';

export const  contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'hotline',
      title: 'Hotline',
      type: 'string',
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Network Links',
      type: 'array',
      of: [
        defineType({
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Platform URL',
              type: 'url',
              validation: Rule => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        }),
      ],
    }),
  ],
});
