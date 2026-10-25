# Feature F1: House Robber Dynamic Programming Engine

## Overview & User-Facing Behavior

Feature F1 implements an optimal solver for the classic House Robber problem (LeetCode 198 / Task 1). The objective is to determine the maximum financial yield obtainable from a street of houses where no two adjacent houses can be robbed because their security systems are linked.

- **User-Facing Behavior**: Given an array of non-negative integers `nums` where each element represents the cash in a house, the function returns a single integer representing the maximum possible sum obtainable under the non-adjacent constraint.

---

## Technical Specifications & Code References

- **Source File**: [`1stquestion`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/1stquestion#L1-L24)
- **Primary Function**: `house_robber(nums)`
- **Line-by-Line Code Breakdown**:
  - `Line 1`: `def house_robber(nums):` - Function definition taking input array `nums`.
  - `Line 2`: `n = len(nums)` - Captures length $n$ to govern boundary conditions.
  - `Lines 4–5`: `if n == 0: return 0` - Base case guard for an empty array.
  - `Lines 6–7`: `if n == 1: return nums[0]` - Base case guard for a single-house street.
  - `Line 9`: `prev2 = nums[0]` - Represents the optimal profit for houses up to index $i-2$.
  - `Line 10`: `prev1 = max(nums[0], nums[1])` - Represents optimal profit for houses up to index $i-1$.
  - `Lines 12–17`: `for i in range(2, n): current_max = max(prev1, nums[i] + prev2)` - Dynamic programming state transition evaluating whether to skip house $i$ (yielding `prev1`) or rob house $i$ (yielding `nums[i] + prev2`).
  - `Lines 19–20`: `prev2 = prev1; prev1 = current_max` - Rolls the state forward in $O(1)$ space.
  - `Line 23`: `return prev1` - Returns the optimal yield for the entire street.

---

## Mandatory Mermaid Diagrams

### 1. Architectural Flowchart

```mermaid
flowchart TD
    Start([Input: nums]) --> LenCheck{Check len nums}
    LenCheck -->|n == 0| RetZero[Return 0]
    LenCheck -->|n == 1| RetOne[Return nums 0]
    LenCheck -->|n >= 2| Init[prev2 = nums 0<br/>prev1 = max nums 0, nums 1]
    Init --> Loop{i from 2 to n-1}
    Loop -->|Next i| Calc[current_max = max prev1, nums i + prev2]
    Calc --> Shift[prev2 = prev1<br/>prev1 = current_max]
    Shift --> Loop
    Loop -->|Exhausted| RetFinal[Return prev1]
```

### 2. Request / Execution Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor Caller
    participant Engine as 1stquestion:house_robber
    participant Stack as CPython Call Stack / Registers

    Caller->>Engine: house_robber([1, 2, 3, 1])
    Engine->>Stack: Evaluate n = 4
    Engine->>Stack: Set prev2 = 1
    Engine->>Stack: Set prev1 = max(1, 2) = 2
    Note over Engine,Stack: Iteration i = 2 (nums[2] = 3)
    Engine->>Stack: current_max = max(2, 3 + 1) = 4
    Engine->>Stack: Shift prev2 = 2, prev1 = 4
    Note over Engine,Stack: Iteration i = 3 (nums[3] = 1)
    Engine->>Stack: current_max = max(4, 1 + 2) = 4
    Engine->>Stack: Shift prev2 = 4, prev1 = 4
    Engine-->>Caller: 4
```

### 3. Data Structure & Memory Representation

```mermaid
erDiagram
    INPUT_ARRAY {
        int index PK
        int house_wealth
    }
    DP_REGISTERS {
        int prev2 "Max wealth up to index i-2"
        int prev1 "Max wealth up to index i-1"
        int current_max "Max wealth up to index i"
    }
    INPUT_ARRAY ||--|| DP_REGISTERS : "Feeds sequentially into"
```

### 4. Finite State Machine Diagram

```mermaid
stateDiagram-v2
    [*] --> EvaluatingBaseCases
    EvaluatingBaseCases --> ReturnEmpty: n == 0
    EvaluatingBaseCases --> ReturnSingle: n == 1
    EvaluatingBaseCases --> InitializingRegisters: n >= 2
    InitializingRegisters --> TransitionLoop: i = 2
    TransitionLoop --> TransitionLoop: i < n (evaluate max and shift)
    TransitionLoop --> Terminated: i == n
    ReturnEmpty --> [*]
    ReturnSingle --> [*]
    Terminated --> [*]: return prev1
```

### 5. Failure-Path & Exception Handling Diagram

```mermaid
flowchart TD
    Call[Call house_robber] --> CheckType{Is nums a valid sequence?}
    CheckType -->|None or non-iterable| E1[TypeError: object is not iterable]
    CheckType -->|Valid Sequence| CheckElements{Are all elements numeric?}
    CheckElements -->|Contains strings/None| E2[TypeError: unsupported operand for +]
    CheckElements -->|Contains negative values| W1[Computes mathematically valid DP without bounds alert]
    CheckElements -->|All non-negative integers| Success[Return Maximum Yield]
```

---

## Algorithmic & Mathematical Analysis

### Recurrence Relation
Let $dp[i]$ be the maximum money that can be robbed from the first $i+1$ houses (indices $0$ to $i$):
$$dp[i] = \max(dp[i-1], nums[i] + dp[i-2])$$

- **Decision 1 (Skip House $i$)**: The robber steals nothing from house $i$; the maximum yield equals $dp[i-1]$.
- **Decision 2 (Rob House $i$)**: The robber takes `nums[i]`; because house $i-1$ is alarmed, the previous permitted house is $i-2$, yielding `nums[i] + dp[i-2]`.

### Space Optimization Proof
In standard dynamic programming, storing an array $dp$ of length $N$ requires $O(N)$ memory. However, calculating $dp[i]$ requires strictly $dp[i-1]$ and $dp[i-2]$. Storing earlier states is completely redundant. By maintaining only two variables (`prev1` and `prev2`), the auxiliary space drops from $O(N)$ to $O(1)$ without affecting time complexity.

---

## Edge Cases, Security & Performance

| Edge Case | Code Handling | Result |
| :--- | :--- | :--- |
| **Empty List `[]`** | Guard on line 4 (`if n == 0: return 0`) | Returns `0` cleanly |
| **Single House `[5]`** | Guard on line 6 (`if n == 1: return nums[0]`) | Returns `5` cleanly |
| **Two Houses `[10, 20]`** | Handled before loop: `prev1 = max(10, 20)` | Loop range `(2, 2)` does not execute; returns `20` |
| **All Zeroes `[0, 0, 0]`** | Transitions evaluate $\max(0, 0+0) = 0$ | Returns `0` |
| **Maximum Constraints ($N=100$)** | Iterates 98 times in under 0.05 milliseconds | Negligible CPU footprint |

- **Security & DoS Resistance**: Because the loop executes strictly $N-2$ iterations with zero recursive stack calls, it is mathematically immune to stack overflow (`RecursionError`) and cannot trigger infinite loops.

---

## Say It Out Loud

I built this dynamic programming engine to solve the House Robber problem, which finds the maximum sum you can steal from a street of houses without robbing any two adjacent houses. 

When a user calls `house_robber` with a list of house values, the function first checks if the street is empty or has only one house, returning immediately. If there are two or more houses, I initialize two tracking variables: `prev2` with the first house value, and `prev1` with the maximum of the first two houses. Then I run a single for-loop from the third house to the end of the street. At each house, I calculate the current maximum by taking the larger of two choices: skipping the current house and keeping `prev1`, or robbing the current house and adding its value to `prev2`. I update my pointers forward and return `prev1` at the end.

I chose this rolling two-variable iterative approach over naive recursion or an explicit DP array because it reduces the space complexity from linear to completely constant O(1), and it eliminates the risk of call-stack overflow on large inputs. 

If the caller passes an empty array, my base guard handles it safely by returning zero, though passing non-numeric items would raise a standard Python TypeError. 

One limitation is that it assumes a straight street rather than a circular neighborhood; if the first and last houses were connected, I would need to run this function twice across two overlapping slices of the array.
