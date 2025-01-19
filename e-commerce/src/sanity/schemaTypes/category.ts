import { defineType, defineField } from "sanity";

export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string", 
    },
  ],
};
