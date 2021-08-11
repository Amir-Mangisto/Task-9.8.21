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

// var Four = 1;
// function taskFour(number){
//     for(var i=1;i<=number;i++){
//         Four= Four*i;
//     }
//     return Four;
// }
// console.log(taskFour(5));


// //==================================
// //question 5