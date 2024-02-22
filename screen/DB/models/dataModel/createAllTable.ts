import Tables from "../../Tables"
import { ordersModel, productModel } from "./modelSchema"



export const createProductTable = new Tables ('products', productModel)
export const createOrdersTable = new Tables ('orders', ordersModel)


   

    


