/*

Given an integer array nums return an array 'answer'

answer[i] is equal to the product of all elements nums except nums[i]


nums = [1, 2 , 3, 4]

output = [24,12,8,6]

first iteration 
nums[i] = 1 
answer[i] = 2 * 3 * 4 
[24]
2nd 
nums[i] = 2
answer[i] = 1 * 3 * 4
[24,12]
3rd 
nums[i] = 3
answer[i] = 1 * 2 * 4
[24,12,8]
4th
nums[i] = 4
answer[i] = 1 * 2 * 3
[24,12,8,6] 

we could use slice to create but this isnt necessarily ideal for space 

we could also a silly way 
start both iterations two loops where if i = j skip, multiple product , push to answer
*/


const productExceptSelf = (nums) => {
    const answers = [];
    let product = 1;
    
    for(let i = 0 ; i < nums.length; i++) {
        for(let j = 0 ; j < nums.length; j++){
            if(i === j){
                continue;
            } else {
                product *= nums[j]
            }
        }
        answers.push(product);
    }
    return answers;
}