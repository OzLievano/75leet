// bubble sort also deals with swapping....
// the largest number will bubble up.


const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

const bubble = (arr, arrSize) => {
    let i = arrSize - 1;
    while(i > 0) {
        if(arr[i] < arr[i - 1]){
            swap(arr, i, i-1)
        }
        i--;
    }
}

const display = (arr, arrSize) => {
    console.log(arr);
}

const bubbleSort = (arr, arrSize) => {
    let i = 0;
 
    while(i < arrSize - 1) {
        bubble(arr, arrSize);
        i+=1
    }

    display(arr, arrSize);
}



const myArray = [102,9,90,140,15,1251,1231,5522,4443,22,21,12,10];

bubbleSort(myArray, myArray.length);