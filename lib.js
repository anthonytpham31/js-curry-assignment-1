'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0
/**
  * transform carts into an array of { customer, total }
  */
// ==================================================Testing Values====================================================
// const saleListings = [
//   listing('detergent', 5),
//   listing('hennessey', 50),
//   listing('carlo rozzi', 10),
//   listing('coffee', 2.5),
//   listing('cookies', 3),
//   listing('mountain dew', 1)
// ]
// const cartExample2 = cart(
//   'adam',
//   'carlo rozzi',
//   'carlo rozzi',
//   'carlo rozzi',
//   'carlo rozzi',
//   'carlo rozzi',
//   'carlo rozzi'
// )
// const cartExample = cart(
//   'michael',
//   'coffee',
//   'hennessey',
//   'coffee',
//   'hennessey',
//   'coffee',
//   'mountain dew'
// )

// ============================================Testing Area===========================================================
// const addArray = [1, 2, 3, 4, 5, 6, 7, 8]
// const testReduce = addArray.reduce((p, c) => { return p + cartExample.items }, [])
// console.log(testReduce)
// const fork = (f, g, h) => x => (f(g(x), h(x)))
// const curry = f => x => (...args) => f(x, ...args)
// const concat = (a, b) => a + b

// const mapListedPrice = saleListings.map(listedPrice(cartExample2.items))
// this only takes first value of cart, need to run through all values of carts

// let array = []
// for (let n = 0; n < cartExample.items.length; n++) {
//   array.push(saleListings.map(listedPrice).reduce(
//     (result, current) => { return current(cartExample.items[n]) + result }, 0))
// }
// console.log(array)
// const testReduce = saleListings.map(listedPrice).reduce(
//   (previous, current) => { return current + previous('mountain dew') }, 0)
// console.log(testReduce)

// const total = array.reduce((p, c) => { return p + c }, 0)
// console.log(total)
// =============================================End of Tests==========================================================

const calculateTotals =
  listings =>
    carts => {
      let arr = []
      carts.forEach(cart => {
        let addArray = []
        for (let n = 0; n < cart.items.length; n++) {
          addArray.push(listings.map(listedPrice).reduce(
            (result, current) => { return current(cart.items[n]) + result }, 0))
        }
        const total = addArray.reduce((p, c) => { return p + c }, 0)
        // console.log(total)
        arr.push({
          customer: cart.customer,
          total: total
        })
      })
      return arr
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
