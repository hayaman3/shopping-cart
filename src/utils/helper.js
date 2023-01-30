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

  // products = {"delete":"later"}// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

  if(localStorage.getItem(key)!==null){
    const localStorageData = getLocalStorageData()

    if(id in localStorageData){
      let {quanity} = localStorageData[id]
      const item = localStorageData[id]
      quanity += 1
      item.quanity = quanity
      const saveThis = {id:item}
      products = {localStorageData, saveThis}
      localStorage.setItem(key, JSON.stringify(products));
    }else{
      products = {localStorageData, productList[id]}
      localStorage.setItem(key, JSON.stringify(products));
    }

    // const list = productList;
    // const pair = {id: list};

    // products = {...obj, ...pair};
  }
  //   const localStorageData = getLocalStorageData()
    
  //   // const idExistst = 
  //   // if(){}

  //   products = {...products, localStorageData}
  


    // console.log(id,products)
    // return "a"
  }


// obj = {...obj, ...pair, scalar};


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
