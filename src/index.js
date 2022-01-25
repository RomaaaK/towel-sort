
module.exports = function towelSort (matrix) {
  if (!matrix) return []
  const result = []
  matrix.forEach((e, i) => {
    const currentElement = (i % 2 === 0) ? e : e.reverse()
    result.push(...currentElement)
  });
  return result;
}
