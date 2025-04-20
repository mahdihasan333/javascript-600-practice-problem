// 4 practice problem

// ১. অ্যারেটাকে ছোট থেকে বড় সাজিয়ে দে: const numbers = [50, 12, 25, 8, 15];
const numbers = [50, 12, 25, 8, 15];
numbers.sort((a, b) => a - b)
console.log(numbers);




// ২. একটা array numbers = [13, 2, 45, 9, 6]; ব্যবহার করে descending order-এ sort কর।
const numbersDescending = [13, 2, 45, 9, 6];
numbersDescending.sort((a, b) => b - a)
console.log(numbersDescending);




// ৩. বন্ধুদের age অনুসারে sorting করে দেখা const friends = [{name: 'Ali', age: 29}, {name: 'Sara', age: 22}, {name: 'Tariq', age: 35}];
const friends = [{name: 'Ali', age: 29}, {name: 'Sara', age: 22}, {name: 'Tariq', age: 35}];
friends.sort((a, b) => a.age - b.age)
console.log(friends);




// ৪. একটা নামের array দিয়ে প্রতিটি নামকে alphabetically সাজিয়ে দেখাও: const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
names.sort()
console.log(names);