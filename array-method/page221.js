// 9 practice problem

// ১. একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলোর দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই সবগুলো আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ।
const snackPrices = [30, 45, 20, 60, 10]
const updatedSnackPrices = snackPrices.map(price => price + 13)
console.log(updatedSnackPrices)




// ২. ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে।
const playerNames = [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']
const longNamedPlayers = playerNames.filter(player => player.length > 5)
console.log(longNamedPlayers)




// ৩. তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20-এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে।
const numbers = [10, 15, 20, 25, 30, 35]
const firstNumberAboveTwenty = numbers.find(number => number > 20)
console.log(firstNumberAboveTwenty)




// ৪. তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে।
const heights = [65, 70, 68, 72, 68, 73]
const tallPeople = heights.filter(height => height > 69)
console.log(tallPeople)




// ৫. তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map ইউজ করে প্রোগ্রাম লিখ।
const originalNumbers = [7, 10, 15, 20, 25, 30]
const dividedByThree = originalNumbers.map(number => number / 3)
console.log(dividedByThree)




// ৬. তোর বন্ধুদের নামের লিস্ট আবারও আছে ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল।
const friendsNames = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']
const friends = friendsNames.map(friend => friend[2])
console.log(friends)




// ৭. ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack'] এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর।
const names = ['Tom', 'Harry', 'Sam', 'Jack']
const nameStartsWithH = names.find(name => name[0] === 'H')
console.log(nameStartsWithH)




// ৮. তুই একটা array [1, 2, 3, 4, 5] নিয়া বসে আছিস। তুই একটা ফাংশন লিখ, যা forEach ইউজ করে প্রতিটা সংখ্যা console-এ প্রিন্ট করে।
const numberList = [1, 2, 3, 4, 5]
const number = numberList.forEach(item => console.log(item))
console.log(number)




// ৯. ['cow', 'goat', 'sheep', 'horse'] এই অ্যারে থেকে প্রতিটা নাম forEach দিয়ে console-এ প্রিন্ট কর।
const animalsArray = ['cow', 'goat', 'sheep', 'horse']
const animals = animalsArray.forEach(animal => console.log(animal))
console.log(animals)