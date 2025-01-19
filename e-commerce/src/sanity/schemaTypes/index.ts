import { type SchemaTypeDefinition } from 'sanity'
import {product} from "@/sanity/schemaTypes/product"
import {category} from "@/sanity/schemaTypes/category"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
