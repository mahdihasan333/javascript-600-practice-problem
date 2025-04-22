// 9 practice problem

// ১. তোর একগাদা বন্ধুর নাম তোকে একটা স্ট্রিং আকারে দিছে "Raju, Rana, Hasan, Kabir, Mahi"। এদের নামগুলো আলাদা বের করে একটা অ্যারে বানিয়ে ফেল।
const friendsName = "Raju, Rana, Hasan, Kabir, Mahi"
const friendsArray = friendsName.split(',')
console.log(friendsArray)




// ২. তুই একটা অ্যারের মধ্যে তোর বন্ধুদের নাম লিখেছিস। এবার নামগুলো একটা স্ট্রিং আকারে বের করবি, আর প্রতিটা নামের মাঝে কমা(",") থাকবে।
const friends = ['Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi']
const friend = friends.join(', ')
console.log(friend)




// ৩. "function if else while" এই স্ট্রিংটাকে স্পেস দিয়ে ভাগ করে প্রতিটা কি-ওয়ার্ড আলাদা করে অ্যারেতে রাখ।
const keyWords = "function if else while"
const keyWordsArray = keyWords.split(' ')
console.log(keyWordsArray)




// ৪. একটা অ্যারে আছে languages=["JavaScript", "Python", "Java"]। এই অ্যারের প্রতিটা ভাষার নামকে একটা স্ট্রিং বানিয়ে প্রতিটার মাঝে সেমিকোলন যোগ কর।
const languages = ["JavaScript", "Python", "Java"]
const language = languages.join('; ')
console.log(language)




// ৫. একটা স্ট্রিং দেয়া আছে "for, while, for-in, for-of,do-while"। এই স্ট্রিং থেকে লুপগুলোর নাম আলাদা করার জন্য split ব্যবহার কর।
const loopNames = "for, while, for-in, for-of,do-while"
const loopName = loopNames.split(',')
console.log(loopName)




// ৬. একটা স্ট্রিং দেয়া আছে " console log debug "। এই স্ট্রিং থেকে শুরুর এবং শেষের ফাঁকা জায়গা রিমুভ করে ফেল।
const debugString = " console log debug "
console.log(debugString.trim())




// ৭. const str1 = "push"; const str2= "pop"; const str3 = "shift"; const str4 = "unshift" এই এই স্ট্রিংগুলোকে জোড়া দিয়ে একটা স্ট্রিং বানিয়ে ফেল। concat ইউজ করে।
const str1 = "push";
const str2= "pop";
const str3 = "shift";
const str4 = "unshift"
const arrayMethod = str1.concat(' ', str2, ' ', str3, ' ', str4)
console.log(arrayMethod)




// ৮. "Hello JavaScript Developers" এই স্ট্রিং থেকে "JavaScript" অংশটা বের কর।
const developerString = "Hello JavaScript Developers"
const javascriptWord = developerString.slice(6, 16)
console.log(javascriptWord)




// ৯. একটা স্ট্রিং আছে "Code more learn more"। স্ট্রিংটা থেকে "learn" অংশটা substring দিয়ে বের কর।
const learnString = "Code more learn more"
const learnWord = learnString.substring(10, 15)
console.log(learnWord)