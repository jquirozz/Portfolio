export const formatDate = (newDate) => {
  const date = new Date(newDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate() + 1).padStart(2, "0");

  return `${year}/${month}/${day}`;
};
