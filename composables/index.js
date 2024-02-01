import { format } from "date-fns";
export const dateFormat = (value) => {
  if (!value) return "";
  return format(new Date(value), "dd MMM yyyy");
};

export const getOriginalDate = (value) => {
  return new Date(value);
};
