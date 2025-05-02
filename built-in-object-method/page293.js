// 4 practice problem

// ১. ডুপ্লিকেট বাদ দিয়ে একটা নতুন সেট তৈরি কর [1, 2, 2, 3, 4, 4, 5]।
const numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers)




// ২. নতুন একটা সেট বানিয়ে সেখানে 10, 20, 10, 30 এই উপাদানগুলো যোগ কর। তারপর সেটটাকে কনসোলে দেখাও।
const mySet = new Set()
mySet.add(10)
mySet.add(20)
mySet.add(10)
mySet.add(30)
console.log(mySet)




// ৩.Set { 10, 20, 30 } থেকে 10 উপাদানটি ডিলিট কর।
const setNumbers = new Set([10, 20, 30])
setNumbers.delete(10)
console.log(setNumbers)




// ৪. Array-এর মধ্যে [1, 2, 3, 4, 2, 1, 5, 5] উপাদানগুলো নিয়ে সেট তৈরি কর এবং সেই সেটকে array-তে রূপান্তর কর।
const numbersArray = [1, 2, 3, 4, 2, 1, 5, 5]
const array = [...new Set(numbersArray)]
console.log(array)