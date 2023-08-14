const sumArray = (arr) => {
    let currVal = 0;
    for(let i = 0; i < arr.length; i++) {
        currVal += arr[i]
    }
    return currVal;
}


const maxSubArray = (nums) => {
    // given an integer array nums , find the subarray with the larget sub
    //divide and conquer method 
    // return the sum , so we need to declare a MAX_VALUE 
    // each time we divide and conquer calculate a maxValue from our min to our max 
    // if its greater than our current MAX_VALUE then updated the MAX_VALUE
  

    /* lets take a step back 
    
    we are given an array [ 1, 2, 3, 4 , 5 ]

    we want to the sum of each sub array 
    maxVal = -infinity
    currVal = 12
    first iteration -> [1,2] = 3 [3,4,5] = 12
        is maxVal < currVal ? set maxVal = currVal
    
    second iteration -> [1] = 1 [2] = 2
        is leftCurrVal > maxVal? no ... do nothing
        is rightCurrval > maxVal? no ... do nothing

    third iteration -> [3] [4,5]
    leftCurrVal > maxVal ? no.. do nothing
    rightCurrval > max Val ? no .. doo nthing

    4th iteration -> [4] , [5]
    */
   

    if (nums.length <= 1) {
        return nums[0];
    }

    const mid = Math.floor(nums.length / 2);
    const leftArray = nums.slice(0, mid);
    const rightArray = nums.slice(mid);

    const maxLeft = maxSubArray(leftArray);
    const maxRight = maxSubArray(rightArray);

    const leftCurrVal = sumArray(leftArray);
    const rightCurrVal = sumArray(rightArray);

    let maxCrossing = 0;
    let leftSum = -Infinity;
    for (let i = mid - 1; i >= 0; i--) {
        maxCrossing += nums[i];
        leftSum = Math.max(leftSum, maxCrossing);
    }

    maxCrossing = 0;
    let rightSum = -Infinity;
    for (let i = mid; i < nums.length; i++) {
        maxCrossing += nums[i];
        rightSum = Math.max(rightSum, maxCrossing);
    }
    
   return Math.max(maxLeft, maxRight, leftSum + rightSum);
}
 