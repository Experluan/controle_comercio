const { Client, ClientAddress, ClientFone } = require('./Client')
const { Product, ComboProducts } = require('./Product')
const { Employee } = require('./Employee')
const { Sale, Order } = require('./Sale')


/*
force = {force: true}

Client.sync(force)
ClientAddress.sync(force)
ClientFone.sync(force)

Product.sync(force)
ComboProducts.sync(force)

Employee.sync(force)

Sale.sync(force)
Order.sync(foce)
*/

const db = require('./Connection')
db.sync()