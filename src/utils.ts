import dayjs, { Dayjs } from "dayjs";

export const formatDate = (date: Date): string => {
  return dayjs.tz(date).format("DD-MM-YYYY");
};
