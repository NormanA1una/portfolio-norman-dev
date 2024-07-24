import { object, string } from "yup";

export const contactSchema = object().shape({
  name: string().required().min(3),
  email: string().email().required(),
  message: string(),
  address: string(),
});
