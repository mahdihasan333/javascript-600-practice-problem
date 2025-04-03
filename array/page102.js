// 6 practice problem

// ১. তুই একটা প্রোগ্রাম বানাতে চাস, যেটাতে 'আম' নামক একটা ফল লিস্টে আছে কি না, সেটা চেক করবে। যদি থাকে, তবে আউটপুটে বলবে, 'আম আছে', আর না থাকলে বলবে, 'আম নেই, গাছে উঠ'। ফলের অ্যারেতে 'আপেল', 'কলা', 'আম' ও 'লিচু' আছে।
const fruits = ['Apple', 'Banana', 'Mango', 'Litchi']
if(fruits.includes('Mango')){
    console.log('Mango is Available')
}
else{
    console.log('Mango is Not Available, climb the tree')
}




// ২. তুই একটা অ্যারে বানালি, যেখানে নামগুলো আছে- 'বাবুল', 'আলিফ', 'ছোটন'। এখন প্রোগ্রাম লিখে দেখ, বাবুলের ইনডেক্স নাম্বার কত।
const names = ['Babul', 'Alif', 'Chotan']
console.log(names.indexOf('Babul'))




// ৩. ধর, তুই বন্ধুদের নামের একটা লিস্ট বানিয়েছিস অ্যারেতে- 'রিমন', 'রিফাত', 'রাজিব'। এখন তোর মনে হলো, 'রিফাত'-এর অবস্থানটা ভুলে গেছিস। একটা প্রোগ্রাম লিখে রিফাতের ইনডেক্স বের কর।
const friends = ['Rimon', 'Rifat', 'Rajib']
console.log(friends.indexOf('Rifat'))




// ৪. তুই কিছু শহরের নাম লিখে রাখছিস- 'Dhaka', 'Chittagong', 'Sylhet'। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, Rajshahi আছে কি না।
const cityes = ['Dhaka', 'Chittagong', 'Sylhet', 'rajshahi']
console.log(cityes.includes('RajShahi'))




// ৫. একটা প্রোগ্রাম বানিয়ে 'বৃষ্টি' নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি 'I need umberalla', না থাকলে বলবি 'No rain no pain'। অ্যারেতে 'দীঘি', 'মেঘ', 'বৃষ্টি' ও 'বর্ষা' আছে।
const weather = ['Lake', 'Cloud', 'Rain', 'Monsoon']
if(weather.includes('Rain')){
    console.log('I need umberalla')
}
else{
    console.log('No rain no pain')
}




// ৬. তোর প্রিয় খেলাধুলার একটা অ্যারে আছে- 'ফুটবল', 'ক্রিকেট', 'ভলিবল'। এখন তুই চেক করতে চাস 'ব্যাডমিন্টন' নামক খেলাটি অ্যারেতে আছে কি না।
const favoriteSports = ['Football', 'Cricket', 'Volleyball']
console.log(favoriteSports.includes('Badminton'))