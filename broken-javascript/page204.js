// 6 practice problem

// ১. একটা product অবজেক্ট আছে const product = { name: "Laptop", price: 50000, brand: "Dell" }; এইটা থেকে name বাদে বাকি প্রোপার্টিগুলো আলাদা একটা অবজেক্টে রাখ।
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
}
const {name, ...ProductDetails} = product
console.log(name)
console.log(ProductDetails)




// ২. const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" }; এখানে title বাদে বাকি প্রোপার্টিগুলো আলাদা একটা অবজেক্টে রাখ।
const project = {
    id: 101,
    title: "Web App",
    budget: 3000,
    client: "Tech Corp"
}
const {title, ...projectDetails} = project
console.log(title)
console.log(projectDetails)




// ৩. const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" }; এখানে language আর specialty আলাদা প্রোপার্টি হিসেবে রেখে বাকিগুলো details নামে একটা অবজেক্টে রাখ।
const programmer = {
    name: "Sophia",
    language: "JavaScript",
    experience: 5,
    specialty: "Frontend",
    tools: "React"
};
const {language, specialty, ...details} = programmer
console.log(language)
console.log(specialty)
console.log(details)




// ৪. একটা সংখ্যার array আছে। [10, 20, 3, 30, 300, 3000] এইটা থেকে প্রথম দুইটা উপাদান বাদে বাকিগুলো আলাদা আরেকটা array-এর মধ্যে রাখ।
const numbers = [10, 20, 3, 30, 300, 3000]
const [firstNumber, secondNumber, ...remainingNumber] = numbers
console.log(firstNumber)
console.log(secondNumber)
console.log(remainingNumber)




// ৫. একটা function লেখ, যেটা দুইটা প্যারামিটার বাদে বাকিসব প্যারামিটারকে রেস্ট অপারেটর দিয়ে ধরে রাখবে। ফাংশনটি সেই বাকি প্যারামিটারগুলোর যোগফল রিটার্ন করবে।
function calculateSum(num1, num2, ...num3){
    let sum = 0
    for(number of num3){
        sum += number
    }
    return sum
}
console.log(calculateSum(1, 2, 3, 4, 5, 6))



// ৬. একটা ফাংশন লেখ, যে সব প্যারামিটারকে রেস্ট অপারেটর দিয়ে একটা array-তে রাখবে, তারপর আর্গুমেন্টগুলো যোগ করবে। ফাংশনটি array-এর উপাদানগুলোর গড় রিটার্ন করবে।
function calculateAverage(...numbers){
    let sum = 0
    for(number of numbers){
        sum += number
    }
    return sum / numbers.length
}
console.log(calculateAverage(10, 20, 30))