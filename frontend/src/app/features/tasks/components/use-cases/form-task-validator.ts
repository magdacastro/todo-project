export const Validator = {
  Date: (value: string): boolean => {
    return value.length > 0 && Validator.Today() <= new Date(value).getTime() ? true : false;
  },
  Today: () => {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1).getTime();
  },
  Text: (value: string) => {
    return value.length > 0 ? true : false;
  }
};
