import { z } from "zod";

const ServiceCreateValidation = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    duration: z.number(),
  }),
});

export default ServiceCreateValidation;
