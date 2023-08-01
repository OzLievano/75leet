const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];
        if(leftEl < rightEl) {
            output.push(leftEl)
            leftIndex += 1;
        } else {
            output.push(rightEl)
            rightIndex += 1;
        }
    }
    display([...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]);
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

const display = (arr) => {
    console.log(arr);
}

const mergeSort = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    return merge( mergeSort(leftArr), mergeSort(rightArr) );
}

// recursively split arr into sub arrays until they are arr
// of 1 
// merge ecah array of 1 to produce the final sorted array
const myArray = [102,9,90,140,15,1251,1231,5522,4443,22,21,12,10];

mergeSort(myArray);