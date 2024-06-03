export default function updateUniqueItems(groceriesList) {
  try {
    groceriesList.forEach((value, key, theSet) => {
      if (value === 1) {
        theSet.set(key, 100);
      }
    });
  } catch (error) {
    throw new Error('Cannot process');
  }
}
