import productList  from "./productData"
  
  const key = 'uua3NpwFwA';

  const getLocalStorageData = () => JSON.parse(localStorage.getItem(key))
  
  const getCartData = () => {
    // const savedItems = getLocalStorageItems()
    // const cartData = savedItems.map(item => indexedProductList[item]); 
    // return cartData
  }

const saveToLocalStorage = (e) => {
  let products = {}
  const itemIdClicked = e.target.value
  
  // if cart/localstorage already has items
  if(localStorage.getItem(key)!==null){
    const localStorageData = getLocalStorageData()

    // add quantity if item already exists in cart
    if(itemIdClicked in localStorageData){
      const localStorageItem = localStorageData[itemIdClicked]
      const {quantity} = localStorageItem
      localStorageItem.quantity = quantity + 1
      localStorage.setItem(key, JSON.stringify(localStorageData));
    }else{
      const dataBaseItem = productList[itemIdClicked]
      const newItem = {[itemIdClicked]:dataBaseItem}
      products = {...localStorageData, ...newItem}
      localStorage.setItem(key, JSON.stringify(products));
    }
    
  }else{
    const item = productList[itemIdClicked]
    products[itemIdClicked] = item
    localStorage.setItem(key, JSON.stringify(products));
  }

}


const quanityOfItems = () => {
  const cart = getLocalStorageData()

  if (cart === null) return 0

  let total = 0
  const keys = Object.keys(cart);
  const values = Object.values(cart);
  for (let i = 0; i < keys.length; i += 1) {
      total += values[i].quantity
  }
  return total 
  
}

export { getLocalStorageData, saveToLocalStorage, quanityOfItems, getCartData }
