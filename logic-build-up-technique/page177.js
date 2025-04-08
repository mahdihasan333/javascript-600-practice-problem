// 1 practice problem

// ১. ডুপ্লিকেট রিমুভ করার পুরা কোড নিজে বুঝে বুঝে লিখে এই অ্যারে [1, 5, 61, 5, 87, 7, 5, 81, 61]; দিয়ে চেক করবি।
function noDuplicate(array){
    const newArray = []
    for(const arr of array){
        if(newArray.includes(arr) !== true){
            newArray.push(arr)
        }
    }
    return newArray

}
const array = noDuplicate([1, 5, 61, 5, 87, 7, 5, 81, 61])
console.log(array)