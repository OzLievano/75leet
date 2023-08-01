/*  
implementing a swap function

*/

const swap = (arr, x , y) => {
    let temp = arr[x];
    arr[x] = arr[y]
    arr[y] = temp;
}

/* Selection Sort

two input params 
arr , size of arr 
location index
*/

const locationOfSmallest = (arr, start, end) => {
    let i = start;
    let j = i;
    while(i <= end) {
        if(arr[i] < arr[j]){
            j = i;
        }
        i+=1;
    }
    return j;
}

const selectionSort = (arr, arrSize) => {
    let i = 0;

    while(i < arrSize - 1) {
        let j = locationOfSmallest(arr, i, arrSize-1);
        swap(arr, i, j);
        i++;
    }

    display(arr, arrSize)
}


const display =  (arr, arrSize) => {
    let i =0;
    while( i < arrSize) {
        console.log(arr[i]);
        i+=1;
    }
}

const myArray = [1,4,6,3,23,125]
selectionSort(myArray, myArray.length);