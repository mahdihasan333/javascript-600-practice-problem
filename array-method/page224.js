// 4 practice problem

// ১. একটা অ্যারে বানা, যেটার নাম numbers এবং দেখা, এই অ্যারেতে 100-এর বড় কোনো সংখ্যা আছে কি না।
const numbers = [10, 30, 40, 50, 60, 80]
const checkNumber = numbers.some(number => number > 100)
console.log(checkNumber)




// ২. একটা অ্যারে বানা, যেখানে সব এলিমেন্টের মান 5 দিয়ে ভাগ যায় কি না, তা চেক করার জন্য every মেথড ব্যবহার কর।
const numbersArray = [10, 13, 45, 65, 47, 84]
const dividedByFive = numbersArray.every(number => number % 5 === 0 )
console.log(dividedByFive)




// ৩. words নামের একটা অ্যারে তৈরি কর এবং চেক কর, অন্তত একটা শব্দ "hello"-এর সমান কি না।
const words = ['mahdi', 'football', 'cricket', 'laptop']
const checkWords = words.some(word => word === 'hello')
console.log(checkWords)




// ৪. ages নামের একটা অ্যারে তৈরি কর এবং দেখা, সবার বয়স 18-এর বেশি কি না।
const ages = [20, 45, 35, 24, 25, 28]
const ageCheck = ages.every(age => age > 18)
console.log(ageCheck)