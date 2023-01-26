// TUPLES

// Tuples are are a special type exclusive to TS, JS doesn't include 
// them

// Tuples are arrays of fixed lengths and ordered with specific types 
// set to each index of the array like: 

let tuple: [number, string];

// the above is rigid in structure now, tuple can now have 
// any number at 0 index tuple[0] and any string at 1 index tuple[1]
// but no other data-types are allowed in those specified indexes

tuple = [29, 'twenty-nine'];

// the above is valid, below is not

tuple = ['yes', 2];

// the above throws an error: can't assign string to 
// type number, but we can change the indexed values to whatever, 
// as long as they match our type definition order of number then 
// string

tuple = [22, 'twenty-two'];

let stuff: (string | number) [] = ['yes', 'no', 7, 10]

// the above is the unstructured way of storing strings and nums, 
// where as if we wanted to accomplish the above with a tuple:

let stuffTwo: [string, string, number, number]

stuffTwo = ['yes', 'yes', 12, 12]

// the above works but if we alter the array structure like:

stuffTwo = [12, true, 'two', 'two']

// TS says 'can't assign type number to type string, can't assign
// type boolean to type string etc..

stuffTwo = ['yes', 'yes', 12, 12, 'yes']

// also can't add any additional values since we specifed the length 
// to be 4

stuffTwo = ['no', 'yes', 23, 8]

