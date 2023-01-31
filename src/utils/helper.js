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

import productList  from "./productData"

  // fix later
  // console.log(localStorageData)
  console.log(productList)

const getCartData = () => {
  // const savedItems = getLocalStorageItems()
  // const cartData = savedItems.map(item => indexedProductList[item]); 
  // return cartData
}

const key = 'uua3NpwFwA';

const getLocalStorageData = () => JSON.parse(localStorage.getItem(key))
// return localStorageData

// const getProductDetails = (id) =>{
//   return  productList[id]

// }

const saveToLocalStorage = (e) => {
  let products = {}
  const id = e.target.value
  
  if(localStorage.getItem(key)!==null){
    const localStorageData = getLocalStorageData()
    const item = localStorageData[id]

    if(id in localStorageData){
      let {quanity} = localStorageData[id]
      quanity += 1
      item.quanity = quanity

      const saveItem = {id:item}
      products = {localStorageData, saveItem}
      localStorage.setItem(key, JSON.stringify(products));
    }else{
      const saveItem = {id:item}
      products = {localStorageData, saveItem}
      localStorage.setItem(key, JSON.stringify(products));
    }
  }else{
    const item = productList[id]
    products[id] = item
    localStorage.setItem(key, JSON.stringify(products));
  }

  //   const localStorageData = getLocalStorageData()
    
  //   // const idExistst = 
  //   // if(){}

  //   products = {...products, localStorageData}

  }


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


const quanityOfItems = () => {
  const cart = getLocalStorageData()
  console.log(cart)
  if (cart === null) return 0

  let total = 0
  const keys = Object.keys(cart);
  const values = Object.values(cart);
  for (let i = 0; i < keys.length; i += 1) {
      const {quanity} = values[i]
      total += quanity
  }
  console.log(total,"asda")
  return total 
  
}

export { getLocalStorageData, saveToLocalStorage, quanityOfItems, getCartData }
