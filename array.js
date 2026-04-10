// Set A


const cars = [
{
id: 1, make: "Toyota", model: "Camry", price: 24425, inStock: 'yes', features: {
engine: "2.5L 4-cylinder", horsepower: 203,}
},
{
id: 2, make: "Ford", model: "Mustang", price: 27470, inStock: 'No', features: {
engine: "2.3L turbo 4-cylinder", horsepower: 310}
},
{
id: 3, make: "Chevrolet", model: "Tahoe", price: 49900, inStock: 'yes', features: {
engine: "5.3L V8", horsepower: 355,}
},
{
id: 4, make: "Tesla", model: "Model 3", price: 39990, inStock: 'yes', features: {
engine: "Electric", horsepower: 283}
},
{
id: 5, make: "BMW", model: "3 Series", price: 41450, inStock: 'No', features: {
engine: "2.0L turbo 4-cylinder", horsepower: 255}
},
];
// print all car name
console.log(cars.map(a=>a.make));
// print all car model whose price greator than 30000
console.log(cars.filter(a=>a.price>30000).map(a=>a.model));
// print outof stocks car
// find car name whose horse power greator than 300
console.log(cars.filter(a=>a.features.horsepower>300).map(a=>a.make));
// what will be the revenue generated when the all available cars are soldout