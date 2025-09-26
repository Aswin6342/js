let products = [
{pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led'},
{pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led'},
{pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led'},
{pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd'},
{pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd'}
];
// list all products
products.forEach((item)=>{
  console.log(item.pName); 

})
// .Display all products with an lcd display.
var found=products.filter((item)=>{
    return(item.display=="lcd")
})
console.log(found);
// 3.List the names of all products that support the 5g band.
var found=products.filter((item)=>{
    return(item.band=="5g")
})
console.log(found);
// 4.Filter out and display all products with a price below 50,000
var found=products.filter((item)=>{
    return(item.price<50000)
})
console.log(found);
// 5.Find and display the product with the highest price.
var found=products.reduce((high,current)=>{
    return(high.price>current.price)?high:current
})
//to Find and display the product with the highest price.
console.log(found.pName);
var found=products.reduce((high,current)=>{
    return(high.price<current.price)?high:current
})
console.log(found.pName);

