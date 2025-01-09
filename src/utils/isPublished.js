export const isPublished = (date) => {
  const publishDate = new Date(date);
  const today = new Date();
  return publishDate <= today;
};
