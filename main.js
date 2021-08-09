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

// var main=[10,3,65,2,10,74,10,874,51,45];
// for(var i=0; i<main.length;i++){
//     console.log(main[i]);
// }



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