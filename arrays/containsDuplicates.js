/*
given an integer array nums , return true if any value appears at least twice in the array and return false 
if every element is distinct 


input -> [1,2,3,1]
output true

we can have a hashmap

if we run into the key again, return true other wise return false 

*/


const containsDuplicate = (nums) => {
    const numsMap = {};

    for(let i = 0; i < nums.length; i++) {
        const currNum = nums[i];

        if(numsMap[currNum]) {
            return true;
        } 

        numsMap[currNum] = true;
    }

    return false;
}