// [2,3,1,5]
/*
i , 
j = i + 1

nested for loop 

is j < i ?
if true create a temporary variable  temp 
temp = i
i = j
j = temp

swap methodology 

*/

// this is basically a bubble sort
const sortArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArray([1,3,5,2]));