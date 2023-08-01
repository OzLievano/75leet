const insertTheIth = (arr, arrSize, i) => {
    let key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j]
        j = j - 1;
    }
    arr[j+1] = key
}


const display = (arr) => {
    console.log(arr);
}
const insertionSort = (arr, arrSize) => {
    let i = 1;

    // starting from 1
    // assuming that some portion of the array is already sorted i.e the first item

    while ( i < arrSize) {
        insertTheIth(arr, arrSize, i);
        i++;
    }
    display(arr);
}

const myArray = [102,9,90,140,15,1251,1231,5522,4443,22,21,12,10];

insertionSort(myArray, myArray.length);