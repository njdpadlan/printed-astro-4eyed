import { defineAction  } from 'astro:actions';
import { z } from 'zod';


export const server = {
  // Contact Us form
  submitContactForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string({
        invalid_type_error: "Please enter your full name.",
      }),
      phone: z.string({
        invalid_type_error: "Please enter your phone number.",
      }),
      message: z.string({
        invalid_type_error: "Additional message is required.",
      }),
      email: z.preprocess(
        (val) => (val == null || val === "" ? undefined : val),
        z.string().email("Please enter a valid email address").optional()
      ),
    }),
    handler: async ({ name, phone, message, email }) => {
      console.log("Contact Us submitted:", { name, phone, message, email });
    },
  }),

  // Request Quote form
  submitRequestQuote: defineAction({
    accept: "form",
    input: z.object({
      name: z.string({
        invalid_type_error: "Please enter your full name.",
      }),
      phone: z.string({
        invalid_type_error: "Please enter your phone number.",
      }),
      message: z.string({
        invalid_type_error: "Additional message is required.",
      }),
      email: z.preprocess(
        (val) => (val == null || val === "" ? undefined : val),
        z.string().email("Please enter a valid email address").optional()
      ),
      product_type: z.string({
        invalid_type_error: "Product type is required.",
      }),
      quantity: z.number({
        invalid_type_error: "Quantity is required.",
      }),
    }),
    handler: async ({ name, phone, message, email, product_type, quantity }) => {
      console.log("Request Quote submitted:", { name, phone, message, email, product_type, quantity });
    },
  }),
};