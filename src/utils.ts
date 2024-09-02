import dayjs from "dayjs";
import "dayjs/locale/vi";

export const formatDate = (date: Date): string => {
  return dayjs(date).format("DD-MM-YYYY");
};
