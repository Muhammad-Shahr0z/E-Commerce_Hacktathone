import { type SchemaTypeDefinition } from 'sanity'
import Products from '@/sanity/schemaTypes/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products],
}
