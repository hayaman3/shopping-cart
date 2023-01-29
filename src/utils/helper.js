// import {  indexedProductList } from "./productData"

// const key = 'uua3NpwFwA';

// const getLocalStorageItems = () => {
//   const localStorageList = JSON.parse(localStorage.getItem(key))
//   return localStorageList
// };


// fix later commented out for testings
// const addQuantity = (id) => {
//   console.log(localStorage)
//   console.log(id)
// }

// const localStorageLength = () => {
//   const cart = getLocalStorageItems()
//   if (cart === null) return 0
//   return cart.length
// }

// export { getLocalStorageItems, saveToLocalStorage, localStorageLength, getCartData }

import {  indexedProductList } from "./productData"

const getCartData = () => {
  // const savedItems = getLocalStorageItems()
  // const cartData = savedItems.map(item => indexedProductList[item]); 
  // return cartData
}

const key = 'uua3NpwFwA';

const getLocalStorageData = () => {
  const localStorageData = JSON.parse(localStorage.getItem(key))
  // fix later
  console.log(localStorageData)
  console.log(indexedProductList)
  
  return localStorageData

}

const saveToLocalStorage = (e) => {
  let products = {}
  products = {"delete":"later"}
  const id = e.target.value

  // fix later commented out for testings

  // if(localStorage.getItem(key)!==null){
  //   const localStorageData = getLocalStorageData()
    
  //   const idExistst = 
  //   if(){}
  //   products = {...products, }
  // }


  console.log(id,products)

}


// obj = {...obj, ...pair, scalar};

// document.body.innerHTML = JSON.stringify(obj)

// const saveToLocalStorage = (e) => {
//   let products = []
//   if(localStorage.getItem(key)!==null){
//     const localStorageList = getLocalStorageItems()
//     products = products.concat(localStorageList)
//   }
//   const item = e.target.closest('.product-card').id;
//   products.push(item)
//   localStorage.setItem(key, JSON.stringify(products));
//   addQuantity(e.target.value)
// };


const localStorageLength = () => {
  const cart = getLocalStorageData()
  if (cart === null) return 0
  return cart.length
}

export { getLocalStorageData, saveToLocalStorage, localStorageLength, getCartData }
