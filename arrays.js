const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length);
console.log(shopping[0]);
shopping[0] = "tahini";
console.log(shopping.indexOf("cheese")); // 2
shopping.push("tomatoes");
const newLength = shopping.push("apples"); //this adds an item but also saves the returned new length into newLength!
shopping.unshift("I'll be the first item now");

shopping.pop(); //removes the last item
shopping.shift(); //removes the first (zero-th) item (here: "I'll be the..." thing)

//splice() removes by index. Here we first test if the item is in the array at all
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1); //1 = only remove item at specified index, 2 = that and one more, etc.
}

//loop through an array:
for (const item of shopping) {
  console.log(item);
}

//process each item with a function. Map() returns a NEW array.
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);

//filter array through a criterion and make a new array:
function isLong(city) {
  return city.length > 8;
}
const longer = cities.filter(isLong);

//from strings with seprator to array:
const citiesString = citiesString.split(",");

//from array to string:
const commaSeparatedString = citiesArray.join(",");
dogNames.toString(); // Rocket,Flash,Bella,Slugger

//big example
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

const products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99',
];

for (const product of products) {
  const subArray = product.split(':');
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;