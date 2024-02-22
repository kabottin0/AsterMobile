import Tables from "../../Tables"
import { ordersModel, productModel, systemDb } from "./modelSchema"



export const createProductTable = new Tables ('products', productModel)
export const createOrdersTable = new Tables ('orders', ordersModel)
export const createSystemDbTable = new Tables ('systemDb', systemDb)



   

    


