const sales = [
    { product: "Laptop", quantity: 2, price: 1200 },
    { product: "Mouse", quantity: 10, price: 25 },
    { product: "Keyboard", quantity: 5, price: 75 },
    { product: "Monitor", quantity: 3, price: 300 },
    { product: "Laptop", quantity: 1, price: 1200 },
    { product: "Mouse", quantity: 2, price: 25 },
    { product: "Keyboard", quantity: 1, price: 75 },
    { product: "Monitor", quantity: 2, price: 300 },
  ];

  

  const salesResult = sales.reduce((acc, item) => {
    const {product, quantity, price } = item;
    if(!acc[product]) {
        acc[product] = {totalQuantity:0, totalRevenue:0};
       
       
    }
    acc[product].totalQuantity += quantity;
    acc[product].totalRevenue += quantity * price;
    return acc;
  },{})
  console.log(salesResult);
 
  