# Task 3 - Debugging Challenge (Python)

## Problem Statement

You are given an array of integers.  
Your task is to determine **how many elements are strictly greater than the median** of the array.

A junior developer attempted to solve this task but introduced multiple logical and indexing errors.  
Your job is to **debug and correct the given Python code**.

Do **not** rewrite the entire solution, fix only what is required.

---

## Buggy Code (to be fixed)

```python
def count_above_median(nums):
    nums.sort()
    
    mid = len(nums)
    
    median = nums[mid] 

    count = 0
    for i in range(len(nums) + 1):     
        if nums[i] >= median:        
            count = count + 1

    return count


# Driver Code (do not modify)
n = int(input())
arr = list(map(int, input().split()))

print(count_above_median(arr))
