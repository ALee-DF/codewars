/* eslint-disable no-unused-vars */
function inArray(array1, array2) {
  return array2.reduce((result, element) => {
    for (let i = 0; i < array1.length; i++) {
      if (element.includes(array1[i]) && !result.includes(array1[i])) {
        return [...result, array1[i]]
      }
    }
    return result
  }, []).sort()
}
