interface Product {
    price: number, 
    name: string,
    quantity: number

}

const printProduct = (product: Product): void =>{
    console.log(`Product is ${product.name} 
    quantity is ${product.quantity} and price 
    is $${product.price}`)
}