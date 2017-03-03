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
const saleListings = [
  listing('detergent', 5),
  listing('hennessey', 50),
  listing('carlo rozzi', 10),
  listing('coffee', 2.5),
  listing('cookies', 3),
  listing('mountain dew', 1)
]
const cartExample = cart(
   'adam',
   'carlo rozzi',
   'carlo rozzi',
   'carlo rozzi',
   'carlo rozzi',
   'carlo rozzi',
   'carlo rozzi'
 )

const fork = (f, g, h) => x => (f(g(x), h(x)))
const cond = (p, t, o) => x => p(x) ? t(x) : o(x)

const listedFork = fork(listedPrice, cartExample.items, saleListings[0])
// const customerNames = [cart.customer]
console.log(listedFork)
// const total = (items, listings) => {
//   for (let i = 0; i < items.length; i++) {
//
//   }
// }

const calculateTotals =
  listings =>
    carts => {
      let arr = []
      carts.forEach(cart =>
      arr.push({
        customer: cart.customer,
        total: cart.items
      }))
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
