// 10 practice problem

// ১. ধর, তুই 100 টাকা আয় করেছিস। তার মধ্যে 40 টাকা খরচ করছিস। বাকি টাকা কত রইল, সেটা বের করার একটা প্রোগ্রাম লিখ।
const earningMoney = 100
const spentMoney = 40
const remainingMoney = earningMoney - spentMoney
console.log(remainingMoney)




// ২. তোর কাছে 10টা পেন্সিল আছে। প্রতিবার তুই একসাথে ২টা পেন্সিল ব্যবহার করবি। কত বার ব্যবহার করতে পারবি? প্রোগ্রাম লিখে বের কর।
const totalPencils = 10
const pencilsUse = 2
const totalUsesPencils = totalPencils / pencilsUse
console.log(totalUsesPencils)



// ৩. তোর কাছে 60 টাকা আছে। তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে, সেটা বের করতে একটা প্রোগ্রাম লিখ।
const totalMoneys = 60
const moneyPerUse = 15
const totalUses = totalMoneys / moneyPerUse
const remaining = totalMoneys % moneyPerUse
console.log(totalUses, remaining)



// ৪. ধর, তুই দুইটা স্ট্রিং লিখলি "Hello" আর "World"। এই দুইটা স্ট্রিংকে একসাথে জোড়া দিয়ে কীভাবে "Hello World" বানানো যায়, সেটা দেখানোর জন্য একটা প্রোগ্রাম লিখ।
const firstString = 'Hello'
const secondString = 'World'
const connectedString = firstString + ' ' + secondString
console.log(connectedString)



// ৫. তুই যদি 153 কেজি চাল আর 261 কেজি ডাল কিনলি, তাহলে তুই কয় কেজি জিনিস কিনেছিস? মোট কেজি বের করার একটা প্রোগ্রাম লিখ।
const rice = 153
const dal = 261
const totalKg = rice + dal
console.log(totalKg)



// ৬. তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।
const moneys = 500
const perUse = 75
const totalUsesMoney = moneys / perUse
const remainingTotalMoney = moneys % perUse
console.log(totalUsesMoney, remainingTotalMoney)





// ৭. তুই ৪-কে 3 দিয়ে ভাগ দিলে ভাগফল কত আর ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।
const divided = 8
const devisor = 3
const quotient = divided / devisor
const remainder = divided % devisor
console.log(quotient, remainder)




// ৮. তুই 50-কে 9 দিয়ে ভাগ দিলে শুধু ভাগশেষ কত থাকে, সেটা বের করার একটা প্রোগ্রাম লিখ।
const firstNumber = 50
const secondNumber = 9
const remainderNumber = firstNumber % secondNumber
console.log(remainderNumber)



// ৯. তুই "Bangla" আর "desh" স্ট্রিং যোগ করে "Bangladesh" বানাতে চাস। কীভাবে করবি, সেটা দেখানোর একটা প্রোগ্রাম লিখ।
const first = 'Bangla'
const second = 'desh'
const combinedString = first + second
console.log(combinedString)



// ১০. ধর, একদিন ঘুম থেকে উঠে খিদার চোটে তুই ছোটখাটো একটা রাক্ষস হয়ে গেছস। তারপর থেকে প্রতিদিন 4 কেজি চালের ভাত খেয়ে ফেলস। এখন যদি তোকে 12 মন (480 কেজি) চাল দেয়া হয় থাকে, তাহলে এই চাল দিয়ে তোর কত দিন যাবে। আবার একমাস যদি 30 দিনে হয়, তাহলে এই 12 মন চাল দিয়ে তোর কত মাস যাবে।

const totalRice = 480
const ricePerDay = 4
const totalDaysRice = totalRice / ricePerDay
const month = totalDaysRice / 30
console.log(totalDaysRice ,month)