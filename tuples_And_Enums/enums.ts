// What are Enums? 

// Enums allow us to define a set of named constants, we 
// can give these values string or numeric values

// let's look at an example, if we have an e-commerce store, 
// let's say we have 4 possible statuses for any kind of order, 
// we can store those statuses in an enum

// So instead of using individual variables for each status, 
// we can group them together tidily

enum OrderStatus {
    PENDING, // if you hover over each of these you'll see they are assigned 
    SHIPPED,  // numbers: PENDING = 0, SHIPPED = 1, DELIVERED = 2, RETURNED = 3
    DELIVERED,
    RETURNED
}

// Now we can reference these status codes wherever:

const August21Order001 = OrderStatus.PENDING

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.DELIVERED)

// So in a nutshell that's what enums are, they are named constants 
// that we can reference in our code

// MORE ABOUT ENUMS :

// We can also change the numeric values assigned in our enums,
// remember if you hover over any of the values above like SHIPPED, 
 // it will display SHIPPED = 1, 

 // but we can assign a new value:

 enum NewOrderStatus {
    PENDING = 4, 
    SHIPPED, 
    DELIVERED ,
    RETURNED 
 }

 // We can also use strings as enums, and mix them:

 enum ArrowKeys {
    UP = 'up',
    DOWM = 'down',
     LEFT ='left',
      RIGHT = 'right',
      ERROR = 404
 }

 ArrowKeys.LEFT 


const order = {
   name: 'Luke Sorrenti',
   address: '555 N Main St.',
   city: 'New York',
   orderNum: 13543570,
   status: OrderStatus.PENDING
}

// we can also use const in front 
// of the enum to clean up the JS:

const enum newOrderStatus {
    PENDING, 
    SHIPPED, 
    DELIVERED,
    RETURNED
}

const newOrder= {
   orderNum: 12458635,
   status: newOrderStatus.DELIVERED
}