/*
Given an array of intgers nums and an integer target , return indices of the two numbers such that they add up 
to targer
you may assume that each input would have exactly one solution , you may not use the same element twice 

input : nums = [2, 7, 11, 15] , target = 9
output: [0,1]

0 index -> 2
1 index -> 7 
2 + 7 = 9

two sum typically can do this with a hash map

we have the target, and we have a number at each iteration

we can use the map to store the index and the number as a key 

 if difference between currNum and target is in the map, return the currINdex and the value of the difference in the map which 
 is an index :D 
*/

const twoSum = (nums, target) => {
    const numsMap = {};

    for(let i = 0; i < nums.length; i++) {
        const currNum = nums[i]
        const diff = target - currNum;

        if(diff in numsMap) return [i, numsMap[diff]]

        numsMap[currNum] = i;
    }
}