# API & Function Reference

This document provides a comprehensive technical reference for all algorithmic interfaces, function signatures, data contracts, and input/output specifications across the project.

---

## 1. Algorithmic Function Specifications

### API-01: `house_robber(nums)`

Calculates the maximum possible robbery yield from a linear array of houses without picking any two adjacent houses.

- **Source**: [`1stquestion:L1-L24`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/1stquestion#L1-L24)
- **Signature**:
  ```python
  def house_robber(nums: list[int]) -> int
  ```
- **Parameters**:
  - `nums` (`list[int]`): List of non-negative integers where `nums[i]` represents money in the $i$-th house.
- **Constraints**:
  - $0 \le \text{len}(nums) \le 10^5$
  - $0 \le nums[i] \le 10^4$
- **Return Value**:
  - `int`: Maximum total monetary yield.
- **Exceptions & Errors**:
  - `TypeError`: Raised if `nums` is `None`, non-iterable, or contains elements that do not support addition or comparison.
- **Example Usage**:
  ```python
  house_robber([1, 2, 3, 1])  # Returns: 4 (rob house 0 and house 2)
  house_robber([2, 7, 9, 3, 1])  # Returns: 12 (rob houses 0, 2, and 4)
  house_robber([])  # Returns: 0 (empty input guard)
  ```

---

### API-02: `predict_senate_winner(senate)`

Simulates the turn-based elimination game between Radiant and Dire factions to predict the winning party.

- **Source**: [`2ndquestion:L3-L26`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/2ndquestion#L3-L26)
- **Signature**:
  ```python
  def predict_senate_winner(senate: str) -> str
  ```
- **Parameters**:
  - `senate` (`str`): String containing senator characters `'R'` (Radiant) and `'D'` (Dire).
- **Constraints**:
  - $1 \le \text{len}(senate) \le 10^4$
  - Valid characters: `'R'`, `'D'`
- **Return Value**:
  - `str`: Winning faction: `"Radiant"` or `"Dire"`.
- **Exceptions & Errors**:
  - `TypeError`: Raised if `senate` is not a sequence or iterable of characters.
- **Example Usage**:
  ```python
  predict_senate_winner("RD")   # Returns: "Radiant"
  predict_senate_winner("RDD")  # Returns: "Dire"
  predict_senate_winner("RRDDD") # Returns: "Radiant"
  ```

---

### API-03: `count_above_median(nums)`

Sorts an array, computes the central median element using integer floor division, and counts all values strictly greater than that median.

- **Source**: [`3rdquestion:L1-L15`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L1-L15)
- **Signature**:
  ```python
  def count_above_median(nums: list[int]) -> int
  ```
- **Parameters**:
  - `nums` (`list[int]`): List of integer values. Note: In-place sort mutates the order of `nums`.
- **Constraints**:
  - $1 \le \text{len}(nums) \le 10^5$
  - $-10^9 \le nums[i] \le 10^9$
- **Return Value**:
  - `int`: Count of elements satisfying `element > nums[len(nums)//2]`.
- **Exceptions & Errors**:
  - `IndexError`: Raised if `nums` is empty (`len == 0`).
  - `TypeError`: Raised if elements cannot be compared with `<` during Timsort.
- **Example Usage**:
  ```python
  count_above_median([1, 2, 3, 4, 5])     # Median = 3; Elements [4, 5] -> Returns 2
  count_above_median([1, 3, 2, 5, 4, 6])  # Sorted [1, 2, 3, 4, 5, 6]; mid=3; median=4; [5, 6] -> Returns 2
  ```

---

## 2. Command-Line (CLI) Driver Interface

### Driver: `3rdquestion` Interactive Stdin

- **Source**: [`3rdquestion:L18-L22`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L18-L22)
- **Execution**:
  ```bash
  python3 3rdquestion
  ```
- **Input Stream**:
  - Line 1: `n` (`int`): Size of the array.
  - Line 2: Space-separated integers representing the array contents.
- **Output Stream**:
  - Standard output prints the single integer result followed by a newline.
- **Shell Pipeline Example**:
  ```bash
  echo -e "5\n1 5 2 4 3" | python3 3rdquestion
  # Outputs: 2
  ```

---

## 3. External Web APIs & Network Integrations

- **External REST / GraphQL Endpoints**: **Not Applicable for Track E**.
  - **Rationale**: This project is a pure algorithmic library and local execution sprint. No HTTP daemons, REST controllers, or third-party web services are contacted or exposed.
- **API Keys / Secrets**: **Not Applicable**. Zero credentials or tokens are needed to execute the algorithmic suite.
