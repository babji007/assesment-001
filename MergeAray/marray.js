//Merging arrays
var firstArray = [1, 2, 3, 'Shinchan']
var secondArray = ['Nohara', 4, 5, 6]
var thirdArray = [7, 8, 9, 'Himawari']

var combinedArray3 = []


var combinedArray1 = [...firstArray, ...secondArray]
var combinedArray2 = firstArray.concat(thirdArray)
combinedArray3.push(...firstArray, ...secondArray, ...thirdArray)

console.log(`CombinedArray = `+[combinedArray3])

function ram(){
    document.getElementById("array1").innerHTML=combinedArray1
    document.getElementById("array2").innerHTML=combinedArray2
    document.getElementById("array3").innerHTML=combinedArray3
}


//String to array
const string = 'word';
console.log(...string)
console.log(string.split(''))
console.log(Array.from(string))
z = Object.assign([], string);
console.log(z)