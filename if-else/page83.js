// 7 practice problem

// ১. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে?
const money = 4500
if(money > 6000) {
    const discount = money / 100 * 15
    const finalPrice = money - discount
    console.log(finalPrice)
}
else if(money > 3000) {
    const discount = money / 100 * 5
    const finalPrice = money - discount
    console.log(finalPrice)
}
else {
    console.log("Pay full money")
}




// ২. তুই একটা রেস্টুরেন্ট চালাচ্ছস, যেখানে 12 বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং 60 বছরের ওপরের মানুষকে 50% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হয়।
const age = 45
const foodBill = 500
if(age < 12) {
    console.log('Free Food')
}
else if(age > 60) {
    const discount = foodBill / 100 * 50
    const finalBill = foodBill - discount
    console.log(finalBill)
}
else{
    console.log('Pay full money')
}




// ৩. যদি কারো ব্যাংক অ্যাকাউন্টে ব্যালেন্স 1000 টাকার কম হয়, তাহলে বলবি, "ডিপোজিট কর।" 1000 থেকে 5000-এর মধ্যে হলে বলবি, "বিন্দাস লাইফ এনজয় কর।" আর 5000-এর বেশি হলে বলবি, "তুই ধনী, আমাকে বিয়া কর।"
const bankBalance = 4000
if(bankBalance < 1000){
    console.log('Deposit money')
}
else if(bankBalance < 5000){
    console.log('Enjoy life')
}
else{
    console.log('You are rich, marry me')
}




// ৪. একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস 50-এর কম হলে বলবি "Fail", 50 থেকে 80 এর মধ্যে হলে বলবি "Pass", আর 80 এর বেশি হলে বলবি "A+"।
const marks = 50
if(marks > 80){
    console.log('You got "A+"')
}
else if(marks >= 50){
    console.log('You got "Pass"')
}
else{
    console.log('You got "Fail"')
}




// ৫. কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"।
const pageNumber = 100
if(pageNumber > 500){
    console.log('heart-attack size book')
}
else if(pageNumber >= 100){
    console.log('You got "Mid-size book"')
}
else{
    console.log('You got "Small book"')
}




// ৬. একটা প্রোগ্রাম লিখ। যা চেক করবে, তাপমাত্রা ০ ডিগ্রির কম হলে বলবে "Ice", 0 থেকে 20-এর মধ্যে হলে বলবে "Cool Cool", আর 20-এর বেশি হলে বলবে "Hot Hot"।
const temperature = 10
if(temperature < 0){
    console.log('Ice')
}
else if(temperature <= 20){
    console.log('Cool Cool')
}
else{
    console.log('Hot Hot')
}




// ৭. তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10-এর কম হলে বলবি "novice", 10 থেকে 50-এর মধ্যে হলে বলবি "Expert", আর 50-এর বেশি হলে বলবি "Pro Gamer"।
const playerLevel = 30
if(playerLevel < 10){
    console.log('Novice')
}
else if(playerLevel <= 50){
    console.log('Expert')
}
else{
    console.log('Pro Gamer')
}