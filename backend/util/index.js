export const calculateTotalOrderAmount = (cart) => {
    let runningTotal = 0
    for(let product of cart.products){
        runningTotal = runningTotal + (product.price * product.quantity)
    }
    return runningTotal
}