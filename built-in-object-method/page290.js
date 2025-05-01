// 3 practice problem

// ১. একটা বাক্যে "I bought an orange" লেখা আছে, এখন "orange"-কে "grape" দিয়ে পরিবর্তন কর।
const fruit = "I bought an orange"
const newFruit = fruit.replace(/orange/g, 'grape')
console.log(newFruit)




// ২. "ana" শব্দটি "I like to have apple and banana" বাক্যে আছে কি না, চেক কর।
const text = "I like to have apple and banana"
const searchText = /ana/
console.log(searchText.test(text))




// ৩. "I am eating apple. apple is good. apple helps me a lot." এখানে "apple" শব্দটি পুরো টেক্সটের মধ্যে সব জায়গায় "JavaScript" দিয়ে পরিবর্তন কর। g ফ্ল্যাগের মাধ্যমে পুরো টেক্সটের সব চেইঞ্জ কর।
const sentence = "I am eating apple. apple is good. apple helps me a lot."
const newSentence = sentence.replace(/apple/g, "JavaScript")
console.log(newSentence)