import { defineField, defineType } from 'sanity';
import { BsCartCheckFill } from "react-icons/bs";

export const order = defineType({
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    defineField({
      name: 'customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      title: 'Customer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'orderItem' }],
      title: 'Items',
    }),
    defineField({
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shippingAddress',
      type: 'string',
      title: 'Shipping Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Order Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Delivered', value: 'delivered' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    // Muhammad Shahroz: Added custom orderId for each order
    defineField({
      name: 'orderId',
      type: 'string',
      title: 'Order ID',
      validation: (Rule) => Rule.required(),
    }),
  ],
  //Muhammad Shahroz Custom title field to display customer name in the order title
  preview: {
    select: {
      customerName: 'customer.fullName', // Customer name
      items: 'items', // All order items
      status: 'status', // Order status
      orderId: 'orderId', // Custom Order ID
    },
    prepare({ customerName, items, status, orderId }) {
      //Muhammad Shahroz Calculate total items and total quantity
      const totalItems = items ? items.length : 0; // Total number of items
      const totalQuantity = items
        ? items.reduce((sum: any, item: any) => sum + item.quantity, 0)
        : 0; // Total quantity of all items

      return {
        title: customerName ? `${customerName.toUpperCase()} - ${status.toUpperCase()}` : 'No Name Available',
        subtitle: `Order ID: ${orderId} | Items: ${totalItems} | Quantity: ${totalQuantity}`, // MuhAmmad Shahroz Show order ID, total items and quantity
        media: BsCartCheckFill,
      };
    },
  },
});
