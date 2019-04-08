export const filterByCategory = (listOfItems, listOfCategories) => {
  let itemsByCategory = [];
  listOfCategories.forEach(category => {
    let categoryItems = listOfItems.filter(item => item.category === category);
    itemsByCategory.push(categoryItems);
  });
  return itemsByCategory
}

export const createListOfCategories = (listOfItems) => {
  let categories = [];
  listOfItems.forEach(item => {
    if (!categories.includes(item.category)) categories.push(item.category)
  })
  return categories;
}
