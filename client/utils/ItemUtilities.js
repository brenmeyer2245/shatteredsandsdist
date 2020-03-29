export const filterByCategory = (listOfItems, category) => {
 return listOfItems.filter(item => {
   if (item.category) return item.category === category
   else return false
  });
}

export const createListOfCategories = (listOfItems) => {
  let categories = [];
  listOfItems.forEach(item => {
    if (!categories.includes(item.category)) categories.push(item.category)
  })
  return categories;
}


export const numberToArray = (num) => {
  return new Array(num).fill("");
}
