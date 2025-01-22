export default {
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
      {
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (Rule:any) => Rule.required().error("Full Name is required."),
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule:any) =>
          Rule.required()
            .email()
            .error("A valid email address is required."),
      },
      {
        name: "mobile",
        title: "Mobile Number",
        type: "string",
        validation: (Rule:any) =>
          Rule.required()
            .regex(/^(\+92|0)?3[0-9]{9}$/, {
              name: "Pakistan Mobile Number",
            })
            .error("Enter a valid mobile number."),
      },
      {
        name: "address1",
        title: "Address Line 1",
        type: "string",
        validation: (Rule:any) => Rule.required().error("Address Line 1 is required."),
      },
      {
        name: "address2",
        title: "Address Line 2 (Optional)",
        type: "string",
      },
      {
        name: "city",
        title: "City",
        type: "string",
        options: {
          list: [
            { title: "Karachi", value: "Karachi" },
            { title: "Lahore", value: "Lahore" },
            { title: "Islamabad", value: "Islamabad" },
            { title: "Peshawar", value: "Peshawar" },
            { title: "Quetta", value: "Quetta" },
            { title: "Multan", value: "Multan" },
            { title: "Faisalabad", value: "Faisalabad" },
            { title: "Rawalpindi", value: "Rawalpindi" },
            { title: "Hyderabad", value: "Hyderabad" },
            { title: "Sialkot", value: "Sialkot" },
          ],
        },
        validation: (Rule:any) => Rule.required().error("City is required."),
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        validation: (Rule:any) => Rule.required(),
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  