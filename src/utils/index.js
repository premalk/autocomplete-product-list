export const calculateRange = (data, rowsPerPage = 100) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) range.push(i);
  return range;
};

export const sliceData = (data, page, rowsPerPage = 100) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

export const imageArray = (images) => images && images.split(',');
