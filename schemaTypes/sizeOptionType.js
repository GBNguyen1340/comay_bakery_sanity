import { defineField, defineType } from "sanity";

export const sizeOptionType = defineType({
  name: 'sizeOption',
  title: 'Size Option',
  type: 'object',
  fields: [
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().positive()
    }),
  ]
})