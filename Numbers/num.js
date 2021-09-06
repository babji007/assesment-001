const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function number(){
    var greater = [];
    for(i=0;i<=numbers.length;i++){
        console.log(numbers[0])
       
        if (numbers[i] >= 5){
              greater.push(numbers[i])
             }
        document.getElementById("num").innerHTML=greater
        }
        
}

var z = numbers.filter(number => number>=5);
console.log(z)