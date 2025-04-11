// 7 practice problem

// ১. টেমপ্লেট স্ট্রিংয়ের মাধ্যমে দুটি সংখ্যার বিয়োগফল দেখা। যেমন: The difference between 100 and 20 is 80।
const num1 = 100
const num2 = 20
const math = `The difference between 100 and 20 is ${num1 - num2}`
console.log(math)




// ২. একটা অবজেক্ট employee তৈরি কর, যেখানে name, age এবং salary থাকবে। টেমপ্লেট স্ট্রিং দিয়ে তার নাম, বয়স এবং স্যালারি দেখা।
const employee = {
    name: 'Mahdi',
    age: 21,
    salary : 3000
}
const info = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`
console.log(info)




// ৩. fruits নামে একটা অ্যারে তৈরি কর। টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা যে, তোর পছন্দের তৃতীয় ফলটি কী।
const fruits = ['Apple', 'Mango', 'Banana', 'Guava']
const favoriteFruits = `My Favorite third fruit is ${fruits[2]}`
console.log(favoriteFruits)




// 8. const a = 50 এবং const b = 10 থাকলে টেমপ্লেট স্ট্রিং দিয়ে দেখা The division of a = 50 and b is 5।
const a = 50
const b = 10
const result = `The division of a = ${a} and b = ${b} is ${a / b}`
console.log(result)




// ৫. const person = { firstName: "Amit", lastName: "Kumar" }; টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা Full Name: Amit Kumarl
const person = {
    firstName: "Amit",
    lastName: "Kumar"
};
const fullName = `Full Name: ${person.firstName} ${person.lastName}`
console.log(fullName)




// ৬. একটা অ্যারে animals = ["Cat", "Dog", "Elephant"] তৈরি কর এবং টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা My favorite animals are Cat, Dog, Elephant।
const animals = ["Cat", "Dog", "Elephant"]
const favoriteAnimals = `My favorite animals are ${animals.join(', ')}`
console.log(favoriteAnimals)




// ৭. তোর কাছে স্টুডেন্ট নামে একটা অবজেক্ট আছে, সেই স্ট্রিংয়ের মধ্যে তার নাম আছে, তার বয়স আছে এবং তার তিনটা সাবজেক্টের মার্কস দেয়া আছে results নামক একটা প্রোপার্টির মধ্যে। যেটার মান একটা অ্যারে। এখন তোর কাজ হবে একটা টেমপ্লেট স্ট্রিং দিয়ে একটা স্ট্রিংয়ের মধ্যে এই স্টুডেন্টের নাম, তার তিনটা সাবজেক্টের রেজাল্টের গড় দেখানো। গড় দেখানোর জন্য তিনটা সাবজেক্টের মান যোগ করে তিন দিয়ে ভাগ করবি।
const student = {
    name: 'Mahdi',
    age: 22,
    results: [80, 90, 87]
}
const studentMarks = (student.results[0] + student.results[1] + student.results[2])
const average = studentMarks / student.results.length
const studentInfo = `Student name: ${student.name}, Average marks: ${average}`
console.log(studentInfo)