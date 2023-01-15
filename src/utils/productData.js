/* eslint-disable global-require */
const images = {
  productImagePlaceholder: require('../assets/products/placeHolder.png'),
}

const productList =[
  {
    id:"product1",
    availability:"Available",
    name:"Fake Product",
    rating:0,
    price:100.00,
    img:images.productImagePlaceholder
  },
  {
    id:"product2",
    availability:"Sale",
    name:"Fake Product",
    rating:5,
    price:90.00,
    img:images.productImagePlaceholder
  },
  {
    id:"product3",
    availability:"Sold Out",
    name:"Fake Product",
    rating:3,
    price:110.00,
    img:images.productImagePlaceholder
  },
 {
    id:"product4",
    availability:"Available",
    name:"Fake Product",
    rating:2,
    price:20.00,
    img:images.productImagePlaceholder
  }
]

const indexedProductList ={
  "product1": {
      "id": "product1",
      "availability": "Available",
      "name": "Fake Product",
      "rating": 0,
      "price": 100,
      "img": images.productImagePlaceholder
  },
  "product2": {
      "id": "product2",
      "availability": "Sale",
      "name": "Fake Product",
      "rating": 5,
      "price": 90,
      "img": images.productImagePlaceholder
  },
  "product3": {
      "id": "product3",
      "availability": "Sold Out",
      "name": "Fake Product",
      "rating": 3,
      "price": 110,
      "img": images.productImagePlaceholder
  },
  "product4": {
      "id": "product4",
      "availability": "Available",
      "name": "Fake Product",
      "rating": 2,
      "price": 20,
      "img": images.productImagePlaceholder
  }
}

export {productList, indexedProductList};
