import {  indexedProductList } from "./productData"

const key = 'uua3NpwFwA';

const getLocalStorageItems = () => {
  const localStorageList = JSON.parse(localStorage.getItem(key))
  return localStorageList
};

const getCartData = () => {
  const savedItems = getLocalStorageItems()
  const cartData = savedItems.map(item => indexedProductList[item]); 
  return cartData
}

const addQuantity = (id) => {
  console.log(localStorage)
  console.log(id)
}

const saveToLocalStorage = (e) => {
  let products = []
  if(localStorage.getItem(key)!==null){
    const localStorageList = getLocalStorageItems()
    products = products.concat(localStorageList)
  }
  const item = e.target.closest('.product-card').id;
  products.push(item)
  localStorage.setItem(key, JSON.stringify(products));
  addQuantity(e.target.value)
};



const localStorageLength = () => {
  const cart = getLocalStorageItems()
  if (cart === null) return 0
  return cart.length
}

export { getLocalStorageItems, saveToLocalStorage, localStorageLength, getCartData }