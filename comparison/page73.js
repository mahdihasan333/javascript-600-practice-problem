// 7 practice problem

// ১. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50 == "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে।
const myMoney = 50
const friendMoney = "50"
// output --- true
console.log(myMoney == friendMoney)
// output --- false
console.log(myMoney === friendMoney)




// ২. তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে চাস "JavaScript"== 'JavaScript' আর "JavaScript" === 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে।
// == এবং === এর মান এক হওয়ার কারন হলো ২ টাই String Type Data
const note1 = 'JavaScript'
const note2 = 'JavaScript'
console.log(note1 == note2)
console.log(note1 === note2)




// ৩. একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ।
// == টাইপ চেক করে না তাই এর মান true আসছে
console.log(25 == '25')
// === টাইপ চেক করে এর মান false আসছে
console.log(25 === '25')




// ৪. "apple" এবং "apple" লিখে তুলনা করলে, "apple" == "apple" এবং "apple" === "apple"-এর আউটপুট কী হবে।
// output --- true
console.log('apple' == 'apple')
// output --- true
console.log('apple' === 'apple')



// ৫. একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর আউটপুট কী হবে।
// output --- false  এর কারন হলো JavaScript Case Sensitive
console.log('test' == 'TEST')
// output --- false  এর কারন হলো JavaScript Case Sensitive
console.log('test' === 'TEST')




// ৬. variableX-এর মান 15 আর variableY-এর মান "20" দিলে variableX != variableY এবং variableX !== variable Y-এর আউটপুট কী হবে।
const variableX = 15
const variableY = "20"
// output --- true এর কারন হলো ২ টার Data type এবং মান ভিন্ন
console.log(variableX != variableY)
// output --- true এর কারন হলো ২ টার Data type এবং মান ভিন্ন
console.log(variableX !== variableY)




// ৭. variableA-এর মান hello আর variableB-এর মান "Hello"। এখন variableA == variableB এবং variableA === variableB চেক করার প্রোগ্রাম লিখ।
const variableA = 'hello'
const variableB = 'Hello'
// output --- false
console.log(variableA == variableB)
// output --- false
console.log(variableA === variableB)