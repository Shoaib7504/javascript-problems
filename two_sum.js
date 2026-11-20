// Find two numbers in an array that add up to a target
const twoSum = (nums, target) => {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen[complement] !== undefined) {
            return console.log(`Indices [${seen[complement]}, ${i}] add up to ${target}`);
        }
        seen[nums[i]] = i;
    }
    return console.log(`No two numbers in [${nums}] add up to ${target}`);
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
twoSum([1, 2, 3], 10);
