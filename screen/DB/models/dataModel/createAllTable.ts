import Tables from "../../Tables"
import {  carts, ordersModel, productModel, systemDb } from "./modelSchema"



export const createProductTable = new Tables ('products', productModel)
export const createOrdersTable = new Tables ('orders', ordersModel)
export const createSystemDbTable = new Tables ('systemDb', systemDb)
export const cartTable = new Tables ('carts', carts)




   

    


