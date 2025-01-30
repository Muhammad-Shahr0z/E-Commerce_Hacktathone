import { defineField, defineType } from 'sanity';

export const customer = defineType({
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    defineField({
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
