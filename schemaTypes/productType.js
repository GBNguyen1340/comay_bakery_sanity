import { defineType, defineField } from "sanity"

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tên sản phẩm',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Danh mục',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Hình đại diện',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Mô tả hình ảnh',
        })
      ]
    }),
    defineField({
      name: 'images',
      title: 'Hình sản phẩm',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Mô tả hình ảnh',
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'price',
      title: 'Giá',
      type: 'number',
      validation: Rule => Rule.required().positive()
    }),
    defineField({
      name: 'description',
      title: 'Mô tả bánh',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'ingredients',
      title: 'Thành phần',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'sizeOptions',
      title: 'Size bánh',
      type: 'array',
      of: [{ type: 'sizeOption' }],
      validation: Rule => Rule.required().min(1)
    })
  ]
})