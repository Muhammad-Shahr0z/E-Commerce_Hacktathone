import { defineField, defineType } from "sanity";


export default defineType({
    type:"document",
    name:"products",
    title:"Products",
   fields:[defineField(
    {
        name:"name",
        type:"string",
        title:"Product Name",
        validation:Rule => Rule.required()
    }),


    defineField(
        {
            name:"price",
            type:"number",
            title:"Price",
            validation:Rule => Rule.required()
        }
    ),


    defineField(
        {
            name:"image",
            type:"image",
            title:"Image",
            validation:Rule => Rule.required()
        }
    ),

    defineField(
        {
            name:"category",
            type:"string",
            title:"Category",
            validation:Rule => Rule.required(),
            options:{
                list:[

                    { value: "tableware", title: "Tableware" },
                    { value: "decoration-items", title: "Decoration Items" },
                    { value: "tables", title: "Tables" },
                    { value: "chairs", title: "Chairs" },
                    { value: "cutlery", title: "Cutlery" },
                
    
                
                ]
        }
}),

defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "name",
      maxLength: 90,
    },
    validation: (Rule) => Rule.required(),
  }),
  

   defineField({
        name:"productDescription",
        type:"text",
        title:"Product Description",
        validation:Rule => Rule.required()
    }),
      

   ]
}


)



// { id: 1, name: "Candy Glaze", price: 250, image: "/products/1.png" },

