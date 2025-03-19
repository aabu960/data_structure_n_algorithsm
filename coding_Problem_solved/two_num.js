function twoSum(nums, target) {
    let map = new Map(); // Stores {number: index}
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // What number we need to find
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i); // Store current number with index
    }
    
    return [];
}
