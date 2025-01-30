import { type SchemaTypeDefinition } from 'sanity'
import {product} from "@/sanity/schemaTypes/product"
import {category} from "@/sanity/schemaTypes/category"
import { customer } from './customer'
import { order } from './order'
import { orderItem } from './orderItem'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,orderItem,customer,order],
}
