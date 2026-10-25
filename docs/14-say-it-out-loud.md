# Say It Out Loud: Consolidated Spoken Interview Scripts

This document compiles the complete verbatim interview rehearsal scripts for every feature in the repository. These scripts are written in natural, first-person spoken English—free of bullet points, tables, and code snippets—allowing you to rehearse and speak fluently in technical interviews.

---

## 1. Project Pitches

### 30-Second Elevator Pitch
> "In this project, I engineered and debugged a suite of high-efficiency algorithmic solutions in Python focused on dynamic programming, stateful game simulations, and statistical boundary analysis. Specifically, I built an optimal O(N) time, O(1) space solver for non-adjacent house optimization, implemented an O(N) double-queue turn simulator for the Dota2 Senate game, and debugged an off-by-one boundary failure in array median calculations. The entire suite adheres to strict asymptotic bounds, eliminates unnecessary heap allocations, and is structured for direct integration into high-throughput online judge evaluation engines."

### 2-Minute Technical Overview
> "Let me walk you through the motivation, architecture, and engineering trade-offs behind this algorithmic suite.
>
> The objective of this project was to implement mathematically optimal, edge-case-hardened solutions for three fundamental computer science problem classes: constrained optimization, round-based greedy simulation, and boundary-condition debugging.
>
> For the first feature, the House Robber problem, a naive recursive formulation suffers from O(2^N) exponential time explosion due to overlapping subproblems. I formulated the optimal substructure using dynamic programming, but instead of allocating an O(N) memoization table, I recognized that each house decision only depends on the two immediately preceding states. By maintaining two rolling scalar registers—`prev1` and `prev2`—I reduced the auxiliary space complexity to O(1) while maintaining strict O(N) linear time.
>
> For the second feature, the Dota2 Senate simulation, the challenge is simulating circular multi-round bans where senators act greedily to silence the earliest eligible opponent. An array-based simulation with deletions would degrade to O(N^2) due to linear element shifts. To achieve O(N) runtime, I utilized two `collections.deque` structures to track senator indices for each faction. Senators who exercise their voting right are re-queued with an index offset of n, naturally preserving circular round order and earliest-turn precedence without shifting arrays.
>
> For the third feature, I performed root-cause debugging on a junior developer's median counting algorithm. The original code contained an array index out-of-bounds error by assigning the median index as `len(nums)` rather than integer half `len(nums) // 2`, an off-by-one traversal error iterating past array bounds, and an incorrect non-strict comparison. I corrected the integer division index, bounded the iteration range cleanly to N, and enforced strict inequality, producing an O(N log N) solution with zero memory leaks.
>
> If I were extending this architecture to production, I would wrap these core algorithmic functions in an asynchronous evaluation microservice backed by Redis queues and isolated Linux cgroups to evaluate tens of thousands of candidate code submissions per second safely."

---

## 2. Feature Scripts

### Feature F1: House Robber Dynamic Programming Engine
> "I built this dynamic programming engine to solve the House Robber problem, which finds the maximum sum you can steal from a street of houses without robbing any two adjacent houses.
>
> When a user calls `house_robber` with a list of house values, the function first checks if the street is empty or has only one house, returning immediately. If there are two or more houses, I initialize two tracking variables: `prev2` with the first house value, and `prev1` with the maximum of the first two houses. Then I run a single for-loop from the third house to the end of the street. At each house, I calculate the current maximum by taking the larger of two choices: skipping the current house and keeping `prev1`, or robbing the current house and adding its value to `prev2`. I update my pointers forward and return `prev1` at the end.
>
> I chose this rolling two-variable iterative approach over naive recursion or an explicit DP array because it reduces the space complexity from linear to completely constant O(1), and it eliminates the risk of call-stack overflow on large inputs.
>
> If the caller passes an empty array, my base guard handles it safely by returning zero, though passing non-numeric items would raise a standard Python TypeError.
>
> One limitation is that it assumes a straight street rather than a circular neighborhood; if the first and last houses were connected, I would need to run this function twice across two overlapping slices of the array."

---

### Feature F2: Dota2 Senate Turn Simulation Engine
> "I implemented this simulation engine to solve the Dota2 Senate problem, which determines which of two political parties wins a multi-round voting battle where each senator can eliminate an opponent's future votes.
>
> When the caller invokes `predict_senate_winner` with a string of senators, my function creates two double-ended queues using Python's `collections.deque`, one for Radiant and one for Dire, and populates them with the zero-based index of each senator. In the main loop, as long as both queues have senators remaining, I pop the front senator from each queue. Whichever senator has the smaller index acted earlier in the round, meaning that senator successfully bans the opponent. The winning senator is then re-queued with their index offset by the length of the string, which places them cleanly at the end of the line for the next round. Once one queue is empty, the party with remaining members is declared the winner.
>
> I chose this double-queue approach with index offsets over array manipulation or linked lists because array deletions take linear time and would degrade the simulation to an unacceptable O(N squared) runtime. With deques, every pop and push operation is constant time, guaranteeing an optimal O(N) linear time and linear space solution.
>
> If an empty string is provided, neither queue populates and it defaults to returning Dire, and passing non-string types raises a TypeError.
>
> One limitation is that any character other than capital R is treated as Dire by the fallback else statement, which in a production environment should be hardened with strict input validation."

---

### Feature F3: Median Boundary Debugger & Strict Inequality Engine
> "I debugged and optimized this feature to count how many elements in an integer array are strictly greater than its median.
>
> When a user calls `count_above_median` or pipes input through the command-line driver, the function first sorts the array in-place using Python's Timsort. Next, it computes the middle index by taking the length of the array and performing integer floor division by two. It extracts the value at that middle index as the median, initializes a counter to zero, and loops through the array from index zero to the length minus one. For every element that is strictly greater than the median value, it increments the count, returning the final integer.
>
> In the original code submitted by a junior developer, there were three critical bugs: the median index was assigned to the entire length of the array instead of half, the loop ran up to length plus one causing an immediate IndexError crash, and it used greater-than-or-equal-to instead of strict inequality. I fixed the division to floor by two, restricted the iteration range to valid array bounds, and enforced strict greater-than comparison.
>
> I chose in-place sorting for this sprint because it is clean, robust, and performs in O(N log N) time, though if we had millions of records, I would replace the sort with an O(N) QuickSelect partition to find the median without sorting the entire array.
>
> If an empty list is passed, an IndexError will occur when looking up index zero, which in production would be guarded with an explicit length check."

---

## 3. Spoken Rehearsal Checklist

Use this checklist to track your spoken fluency. Practice speaking each script aloud without looking at your notes, aiming for clear pacing, technical confidence, and crisp execution:

- [ ] **30-Second Elevator Pitch**: Rehearsed aloud in under 35 seconds without hesitation.
- [ ] **2-Minute Deep Technical Walkthrough**: Rehearsed aloud in ~110–125 seconds hitting all 3 features.
- [ ] **Feature F1 (House Robber DP)**: Explained aloud in ~60 seconds covering recurrence and $O(1)$ space.
- [ ] **Feature F2 (Dota2 Senate)**: Explained aloud in ~75 seconds covering $O(1)$ deques and $i + n$ circular offsets.
- [ ] **Feature F3 (Median Debugger)**: Explained aloud in ~70 seconds covering the 3 bugs, floor division, and Timsort.
- [ ] **Q&A Fluency**: Answered at least 10 random questions from [09-interview-qa.md](/09-interview-qa) smoothly.
