export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      return parseInt(value);
    });

  if (dateParts[1] === undefined || dateParts[2] === undefined) {
    return new Date();
  }

  return new Date(dateParts[2], dateParts[1] - 1);
}