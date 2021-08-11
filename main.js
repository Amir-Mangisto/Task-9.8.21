//question1

// function upsideDown(numbers){
//     numbers.reverse();
//     return numbers;
// }
// console.log(upsideDown([10,20,30]));
// //==================================
//question 2

// function myArray(numbers){
//     if(numbers.length == 10){
// numbers.splice(3 , 0 , "-");//(index , kama , replace)
// numbers.splice(7 , 0 , "-");
// numbers.join();
// console.log(numbers.join(""));
//     }
//     else{
// numbers.splice(2 , 0 , "-");//(index , kama , replace)
// numbers.splice(6 , 0 , "-");
// numbers.join();
// console.log(numbers.join(""));
//     }

// }
// myArray([0,5,4,7,4,1,7,8,5,2]);
// myArray([0,8,4,7,4,1,7,8]);


// //==================================
// //question 3

// function mostCommon(array){
//     var counter =0, max =0, char;
//     for(var i=0; i<array.length;i++){
//         counter = 0;
//         for (var j=i+1;j<array.length;j++){
//             if(array[i] == array[j]){
//                 counter++;
//             }
//         }
//         if(counter>max){
//             max = counter;
//             char == array[i];
//         }

//         console.log(counter);
//     }
//     return char;
// }

//  array=[45,67,67,29,45,90,67];

// //==================================
// //question 4

var Four = 1;
function taskFour(number){
    for(var i=1;i<=number;i++){
        Four= Four*i;
    }
    return Four;
}
console.log(taskFour(5));


// //==================================
// //question 5
//1
// result  = 0;
// function sumNumber(a,b){
//     var result = a + b;
//     return result;
// }
// console.log(sumNumber(5,6));








// var numbers = [10, 20, 30, 40, 50];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }
// console.log(sum) ;

// var numbers = [10, 20, 30, 40, 50];
// var avg = 0;
// for (var i = 0; i < numbers.length; i++){
//     avg =numbers[i]
// }
// console.log(avg);



// function insertUser(array){
//     userInput = Number (prompt("insert a number"));
//     for(var i = 0; i<array.length;i++){
//         if(userInput == array[i]){
//             return[i];
//         }
//     }
//     return "notfound";

// }
// var x=insertUser([10, 20, 30, 40, 50]) ;
// console.log(x);

///==================exercise====

// myNumbers(123)
// function sumAllNumbers(num1) {
//     var sumAll=0;
//     while (num1 > 0) {
//         var modulu = num1 % 10 ;
//         var num1 = (num1 / 10) - (modulu / 10);
//         sumAll = modulu + sumAll ;
//     }
//     return(sumAll)
// }

// var modulu = sumAllNumbers(255)
// console.log(modulu);

//=====================================================
// var userInput;
// var arr = [];
//  var i = 0;

// while(i<3){
//     userInput=Number (prompt("enter a number"));
//     if(userInput/1 == userInput ){
//         i++
//         arr.push(userInput);
//     }
   
// }
// console.log(arr);


// var sum=1;
// for (var i = 0; i<arr.length; i++){
//     sum = sum * arr[i];
// }
// console.log(sum);

// var sum1 = 0;
// for(var i =0; i<arr.length; i++){
//     sum1 = sum1 + arr[i];
// }
// console.log(sum1);

// for (var i =0; i<arr.length; i++){
//     if (arr[i]%2 == 0){
//         console.log(`${arr[i]} זוגי`);
//     }
//     else{
//         console.log(`${arr[i]} אי זוגי`);
//     }
// }


var email = ["schbaj","hsb","nisxuc", "jsnc"];

function myEmail(){

}