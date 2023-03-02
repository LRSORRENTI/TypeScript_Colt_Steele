import _ from "lodash";
// were going to use the lodash add() to power 
// our add function, just as a demo to illustrate 
// more on dependencies
export function add(x, y) {
    return _.add(x, y);
}
export function subtract(x, y) {
    return x - y;
}
export function multiply(x, y) {
    return x * y;
}
export function divide(x, y) {
    return x / y;
}
