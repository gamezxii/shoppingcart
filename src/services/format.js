export const sumtotal = (unit, price) => {
  let total = unit * price;
  let result = addComma(total);
  return result;
};

export const addComma = (num) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
