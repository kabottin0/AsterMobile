
export const ordersModel = [
    { name: 'id', type: 'number' },
    { name: 'orderDate', type: 'string' },
    { name: 'note', type: 'string' },
    { name: 'total', type: 'number' },
    { 
      name: 'user_id', 
      type: 'number', 
      foreignKey: true,
      references: { table: 'users', column: 'id' }  
    },
    { name: 'created_at', type: 'Date' },
    { name: 'updated_at', type: 'Date' }
  ];

  export const productModel =[
    { name: 'id', type: 'number' },
    { name: 'eanId', type: 'string' },
    { name: 'productName', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'imagePath', type: 'string' },
    { name: 'price', type: 'number' },
    { 
      name: 'cart_id', 
      type: 'number', 
      foreignKey: true, 
      references: { table: 'carts', column: 'id' } 
    },
    { name: 'created_at', type: 'Date' },
    { name: 'updated_at', type: 'Date' }
  ];
