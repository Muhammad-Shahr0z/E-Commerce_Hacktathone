import { defineField, defineType } from 'sanity';

export const orderItem = defineType({
  name: 'orderItem',
  type: 'object',
  title: 'Order Item',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'url',
      title: 'Product Image URL',
      validation: (Rule) =>
        Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'unitPrice',
      type: 'number',
      title: 'Unit Price',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'totalPrice',
      type: 'number',
      title: 'Total Price',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
});
