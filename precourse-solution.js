// The Wait List
// You may have to research some new methods to use for these challenges
// You can use console.log statements to investigate whether your changes have succeeded as expected
// console.log(candidates)

const candidates = ["Alice", "Boris", "Carmen"]
// A promising new applicant, Diego, needs to be added to the end of the list
candidates.push('Diego');

// Alice has informed us of a typo on their application: change their name to "Alyce"
candidates[0] = 'Alyce'

// One of our generous donors has a nephew, Aaron, who should be added to the very front of the array
candidates.unshift('Aaron');

// Diego is upset by the priority given to relatives of donors, and has withdrawn their application. Remove the last item from the array
candidates.pop();

// Use a method to remove the very first student in the list, as they have now been accepted!
candidates.shift();

// We've been audited by the Board for Educational Fairness! console.log the list of candidates one last time.
// It should look like this: ["Alyce", Boris", "Carmen"]
console.log(candidates)

// Key Value Properties
// Use the object for the following challenges
const house = { "address": "123 Fake Street", "price": 750000, "bedrooms": 3}

// Buyers can't find the house without a zip code! Add a zip_code property equal to "95404"
house.zip_code = "95404"

// Our web designers want a statement reading: "This 3 bedroom house costs 750000"
// Console.log that statement by accessing the values from the object: do NOT "hard-code" the string!
console.log('This ' + house.bedrooms + ' bedroom house costs ' + house.price)

// We're getting a lot of interest in the house! Let's increase the price by 10%
house.price = house.price + (house.price * 0.1)


// Buyers are surprised at how small the house is. Let's add a square_feet property equal to 750
house.square_feet = 750

// After 2 long hours on the market, the house has finally sold! Add a status property equal to "sold"
house.status = 'sold'

// Print the entire listing. You should see an object similar to the following:
// {address: "123 Fake Street", price: 825000, bedrooms: 3, zip_code: "95404" square_feet: 750, status: "sold"}
console.log(house)

// If the Price is Right
// Translate the following logical decisions into javaScript conditionals, using the price variable:
let price = 25
// If the price is under 10, add 10% tax to the price. 
// Otherwise, add 15% luxury tax instead.

// We have a customer! 
customer = { "name": "Lisa Su", "status": "VIP" }
// If the customer's status is "VIP", lower the price by 20%

// Let's alter our advertising based on the price of the product, filling in the blank with the price
// i. If the price is less than 5, console.log the message "For less than a cup of coffee, buy now for _____"
// ii. Otherwise, if the price is less than 20, log the message "Good value. Great products. Buy now for _____"
// iii. Otherwise, log the message  "You get what you pay for. Get the most. Buy now for ______"
price = 25;

if (price < 5) {
    console.log('For less than a cup of coffee, buy now for ' + price)
} else if (price < 20) {
    console.log('Good value. Great products. Buy now for ' + price)
} else {
    console.log('You get what you pay for. Get the most. Buy now for ' + price)
}

// BONUS CHALLENGE:
// Given this list of products, use a conditional to figure out which has the lower price.
// Print a message saying "Your best value is the _____ for only ______"
// Fill in the blanks with the name and price of the cheaper item, respectively
const bargain_bin = [
    {"name": "90s Comedy DVD", "price": 2.99},
    {"name": "80s Drama DVD", "price": 3.99}
]

if (bargain_bin[0].price < bargain_bin[1].price) {
    console.log("Your best value is the " + bargain_bin[0].name + " for only $" + bargain_bin[0].price)
} else {
    console.log("Your best value is the " + bargain_bin[1].name + " for only $" + bargain_bin[1].price)	
}

// A numbers game
const numbers = [2,3,5,8];
// Console.log each number in the list using a for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

// Add each of the numbers to the sum variable.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum)

// Count how many numbers are less than four.
let lessThanFour = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 4) {
        lessThanFour++;
    }
}

console.log('Count of numbers less than four: ', lessThanFour)

// Use a while loop to continually add the number 7 until the numbers array contains 10 numbers
while (numbers.length < 10) {
    numbers.push(7);
}

console.log(numbers)

// Write a function that accepts one parameter, a string
// The function should simply console.log a greeting saying "Hello there, _____" 
// Insert the given string into the blank in the message being logged
function hello(name) {
    console.log('Hello there ' + name)
}

hello('CJ')

// Write a function that accepts two parameters, num1 and num2
// The function should return whichever of the two numbers is larger
function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(largerNumber(5, 3));
console.log(largerNumber(5, 10));

// Write a function that accepts one parameter, a list
// The function should return the sum total of all numbers in the list, using a loop
function totalSum(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    return sum;
}

console.log(totalSum([1, 2, 3, 4, 9]));

// BONUS FUNCTIONS: Write a function to solve each of the given problem statements
// Determine whether a given list contains a given value
function containsValue(arr, value) {
    return arr.includes(value);
}

console.log(containsValue([1, 2, 3], 3))

// Find the longest string in a given array of strings
function findLongestString(arr) {
    let longest = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

console.log(findLongestString(['mango', 'banana', 'cherry', 'plum']))

// Count how many times a given string contains a given letter
function countNumber(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

console.log(countNumber('hello world', 'o'));