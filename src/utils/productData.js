/* eslint-disable global-require */
const images = {
  productImagePlaceholder: require('../assets/products/placeHolder.png'),
}

const productList ={
  "product1": {
      "id": "product1",
      "availability": "Available",
      "name": "Fake Product",
      "rating": 0,
      "price": 100,
      "img": images.productImagePlaceholder,
      "quantity":0
  },
  "product2": {
      "id": "product2",
      "availability": "Sale",
      "name": "Fake Product",
      "rating": 5,
      "price": 90,
      "img": images.productImagePlaceholder,
      "quantity":0
  },
  "product3": {
      "id": "product3",
      "availability": "Sold Out",
      "name": "Fake Product",
      "rating": 3,
      "price": 110,
      "img": images.productImagePlaceholder,
      "quantity":0
  },
  "product4": {
      "id": "product4",
      "availability": "Available",
      "name": "Fake Product",
      "rating": 2,
      "price": 20,
      "img": images.productImagePlaceholder,
      "quantity":0
  }
}

export default productList ;
