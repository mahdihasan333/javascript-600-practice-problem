// 5 practice problem

// ১. সংখ্যার একটা অ্যারে আছে: [10, 20, 30, 40, 50]। এখন এই অ্যারেতে 60 যোগ করে অ্যারেটি আউটপুটে দেখা।
const numbers = [10, 20, 30, 40, 50]
numbers.push(60)
console.log(numbers)




// ২. তুই কিছু নাম লিখে রাখছিস অ্যারেতে: 'সজিব', 'সাগর', 'সাকিব', 'সোহেল'। এখন তোর মনে হলো নতুন বন্ধু 'সুমন'কে এই অ্যারেতে যোগ করতে হবে। একটা প্রোগ্রাম লিখে দেখ, সুমনকে সবার শেষে যোগ কর।
const friends = ['Sojib', 'Sagor', 'Sakib', 'Sohel']
friends.push('Sumon')
console.log(friends)




// ৩. তোর মোবাইলে যে যে গেম ইনস্টল করা আছে, সেগুলো একটা অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেয়া আছে, সেটা রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলো আউটপুট হিসেবে দেখা।
const games = ['Free fire', 'PUBG', 'Candy Crush', 'Temple Run']
games.pop()
console.log(games)




// ৪. এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12-কে যোগ করে পুরা অ্যারেটা আউটপুট হিসেবে দেখা।
const arrayNumbers = [24, 36, 48, 60]
arrayNumbers.unshift(12)
console.log(arrayNumbers)




// ৫. তোর কাছে ১টি বইয়ের নাম দিয়ে একটা অ্যারে আছে। এখন তুই সবার প্রথম বইটা পড়ে শেষ করে ফেলছস। তাই প্রথম বইয়ের নামটা অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুটে দেখা।
const books = ['The Alchemist', 'Atomic Habits', 'Rich Dad Poor Dad']
books.shift()
console.log(books)