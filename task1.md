# Task 1: House Robber - Maximum Non-Adjacent Sum

## Objective
You are a professional robber planning to steal from houses along a street.  
Each house contains a certain amount of money, but **you cannot rob two adjacent houses** because their security systems are linked.

Given an integer array `nums` where `nums[i]` represents the money in the \(i^{th}\) house, return the **maximum amount of money** you can rob without alerting the police.

---

## Input
- An array of integers `nums`.

---

## Output
- A single integer representing the maximum amount that can be robbed without taking money from two adjacent houses.

---

## Constraints
- 1 ≤ nums.length ≤ 100 
- 0 ≤ nums[i] ≤ 400


---

## Examples

### Example 1
**Input:**  
`nums = [1, 2, 3, 1]`

**Output:**  
`4`

**Explanation:**  
Rob house 1 (1) and house 3 (3).  
Total = 1 + 3 = 4.

---

### Example 2
**Input:**  
`nums = [2, 7, 9, 3, 1]`

**Output:**  
`12`

**Explanation:**  
Rob houses 1 (2), 3 (9), and 5 (1).  
Total = 2 + 9 + 1 = 12.

---

## Notes
- Adjacent houses cannot both be robbed.
- A dynamic programming approach is typically used to solve this problem efficiently.
- Participants may use any programming language.

---
## File Naming Instruction
Save your solution as: task1.extension
