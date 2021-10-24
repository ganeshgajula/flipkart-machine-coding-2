export const isItemPresent = (array, id) =>
  !!array.find((product) => product.id === id);
