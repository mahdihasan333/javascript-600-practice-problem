// 8 practice problem

// ১. অবজেক্ট থেকে brand প্রোপার্টি আলাদা কর। const product = { name: "Laptop", price: 50000, brand: "Dell" };
const product = {
    laptopName: "Laptop",
    price: 50000,
    brand: "Dell"
};
const {brand} = product
console.log(brand)




// ২. Item অবজেক্ট থেকে phone এবং price প্রোপাটি ডিস্ট্রাকচারিং কর। const item = { name: "Mobile", price: 20000, phone: "Samsung" }|
const item = {
    name: "Mobile",
    price: 20000,
    ItemPhone: "Samsung"
}
const {ItemPhone, price} = item
console.log(ItemPhone, price)




// ৩. অ্যারে থেকে প্রথম দুইটা উপাদান বের কর। const colors = ["red", "blue", "green", "yellow"];
const colors = ["red", "blue", "green", "yellow"]
const [firstColor, secondColor] = colors
console.log(firstColor, secondColor)




// ৪. তিনটা সংখ্যার একটা অ্যারে থেকে 'destructuring' করে সেকেন্ড সংখ্যাটা আলাদা করে second নামক ভেরিয়েবলে রাখ।
const array = [10, 20, 30]
const [,second] = array
console.log(second)




// ৫. অ্যারের প্রথম এবং শেষ উপাদানকে destructuring করে two এবং eight নামের ভেরিয়েবলে রাখ। const digits = [2, 4, 6, 8]।
const digits = [2, 4, 6, 8]
const [two, , , eight] = digits
console.log(two, eight)




// ৬. ফাংশন রিটার্ন থেকে ডিস্ট্রাকচারিং করে প্রথম এবং দ্বিতীয় ভ্যালু আলাদা কর। function multiply(a, b) { return [a * 3, b * 3]; }।
function multiply(a, b) {
    return [a * 3, b * 3];
}
const [firstValue, secondValue] = multiply(2, 4)
console.log(firstValue, secondValue)




// ৭. person অবজেক্ট থেকে name এবং city আলাদা কর। আর phone না থাকলে ডিফল্ট ভ্যালু N/A সেট কর। const person = { name: "Rahim", city: "Dhaka" }|
const person = {
    personName: "Rahim",
    city: "Dhaka"
}
const {personName, city, phone = "N/A"} = person
console.log(personName, city, phone)




// ৮. teacher অবজেক্ট থেকে name এবং profession-এর ভ্যালু বের কর, যেখানে profession-এর নাম alias হিসেবে job রাখ। const teacher = { name: "Maria", profession: "Teacher" }|
const teacher = {
    name: "Maria",
    profession: "Teacher"
}
const {name, profession: job} = teacher
console.log(name, job)