// 7 practice problem

// ১. তুই একটা প্রোগ্রাম লিখে চেক কর, যদি true আর 1 ডাবল ইকুয়াল হয়, তবে "same" দেখাবে, আর না হলে "different" দেখাবে।
if(true == 1){
    console.log("same");
}else{
    console.log("different");
}




// ২. তুই দুইটা আলাদা object তৈরি কর, তারপর ট্রিপল ইকুয়াল দিয়ে চেক কর, তারা সমান কি না। যদি সমান না হয়, তাহলে কেন, তা চিন্তা কর।

const obj1 = {name: "Mahdi"};
const obj2 = {name: "Mahdi"};
if(obj1 === obj2){
    console.log("same");
}
else{
    console.log("different");
}




// ৩. একটা array তৈরি কর, তারপর আরেকটা ভেরিয়েবলে ওই array টাকে reference হিসেবে রাখ। এবার ট্রিপল ইকুয়াল দিয়ে চেক কর, এই দুইটা সমান কি না।
const numbersArray= [10, 20, 30]
const copyArray = numbersArray
if(numbersArray === copyArray){
    console.log('Same')
}
else{
    console.log('different')
}




// ৪. একটা ফাংশন লিখ, যেখানে প্রথম প্যারামিটার হলো, কোনো সংখ্যা আর দ্বিতীয় প্যারামিটার হলো boolean। ফাংশনটা চেক করবে, এই দুইটা মান ডাবল ইকুয়াল কি না, আর আউটপুট দেখাবে।
function checkValue(num, bool){
    console.log(num == bool)
}
checkValue(1, true)




// ৫. খালি string এবং false সমান কি না, সেটা ডাবল ইকুয়াল দিয়ে চেক করে দেখ।
const emptyString = ''
const boolValue = false
console.log(emptyString == boolValue)




// ৬. null এবং undefined-কে ট্রিপল ইকুয়াল দিয়ে তুলনা কর এবং এর আউটপুট কী হয়, তা দেখ।
console.log(null === undefined)




// ৭. 1 == '1' চেক কর এবং জাভাস্ক্রিপ্ট কীভাবে টাইপ কনভার্সন করে, তা ব্যাখ্যা কর।
console.log(1 == '1')
// টাইপ কনভার্সন ব্যাখ্যা : == চেক করার সময় জাভাস্ক্রিপ্ট টাইপ কনভার্সন করে। '1' String কে নাম্বারে কনভার্সন করলে 1 পাওয়া যায়।