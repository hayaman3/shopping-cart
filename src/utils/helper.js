import productList  from "./productData"
  
const key = 'uua3NpwFwA';

const getLocalStorageData = () => JSON.parse(localStorage.getItem(key))

const getTotal = () => {
  const localStorageData = getLocalStorageData()
  const arrayData = Object.values(localStorageData); 
  const total = arrayData.reduce((accumulator,obj)=>accumulator + (obj.quantity * obj.price),0)
  return total
}

const getCartData = () => {
  const localStorageData = getLocalStorageData()
  const cartData = Object.values(localStorageData); 
  return cartData
}

const updateQuanity = (amount, itemId) => {
  const localStorageData = getLocalStorageData()  
  const localStorageItem = localStorageData[itemId]
  const {quantity} = localStorageItem
  localStorageItem.quantity = quantity + amount
  localStorage.setItem(key, JSON.stringify(localStorageData));
}

const removeItem = (itemId) =>{
  const localStorageData = getLocalStorageData()
  delete localStorageData[itemId]
  localStorage.setItem(key, JSON.stringify(localStorageData));
}

const saveToLocalStorage = (e) => {
  let products = {}
  const itemIdClicked = e.target.value
  
  // if cart/localstorage already has items
  if(localStorage.getItem(key)!==null){
    const localStorageData = getLocalStorageData()

    // add quantity if item already exists in cart
    if(itemIdClicked in localStorageData) updateQuanity(1, itemIdClicked)
    else {
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
  const localStorageData = getLocalStorageData()

  if (localStorageData === null) return 0

  let total = 0
  const keys = Object.keys(localStorageData);
  const values = Object.values(localStorageData);
  for (let i = 0; i < keys.length; i += 1) {
      total += values[i].quantity
  }
  return total 
}

export { getLocalStorageData, saveToLocalStorage, quanityOfItems, getCartData, updateQuanity, getTotal, removeItem }
