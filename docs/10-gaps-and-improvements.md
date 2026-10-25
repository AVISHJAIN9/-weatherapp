# Gaps & Improvements: Technical Debt & Future Roadmap

This document catalogs existing implementation gaps, edge-case vulnerabilities, and technical debt in the codebase, ranked in priority order with concrete engineering remediation blueprints.

---

## Ranked Improvements Matrix

| Priority | Issue / Gap | Source Location | Severity | Estimated Effort | Impact |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P1** | **Missing Empty-List Guard in Median Counter** | [`3rdquestion:L4`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L4) | High | 10 mins | Eliminates unhandled `IndexError` on empty inputs |
| **P2** | **In-Place Input Mutation in `nums.sort()`** | [`3rdquestion:L2`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L2) | Medium | 15 mins | Prevents unexpected side-effects on caller lists |
| **P3** | **Permissive Input Validation in Senate Simulation** | [`2ndquestion:L11`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/2ndquestion#L11) | Medium | 20 mins | Prevents non-standard characters from defaulting to Dire |
| **P4** | **Suboptimal $O(N \log N)$ Sort for Median Selection** | [`3rdquestion:L2`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L2) | Low | 1 hour | Optimizes median discovery from $O(N \log N)$ to $O(N)$ via QuickSelect |
| **P5** | **Lack of Python Type Hints & PEP 484 Annotations** | `1stquestion`, `3rdquestion` | Low | 30 mins | Enables static analysis via `mypy` and IDE autocompletion |

---

## Detailed Gap Analysis & Remediation Plans

### P1: Empty-List Guard in `count_above_median`
- **Current State**: Passing an empty list `count_above_median([])` raises `IndexError: list index out of range` on line 6.
- **Remediation**:
  ```python
  def count_above_median(nums: list[int]) -> int:
      if not nums:
          return 0
      # ... rest of algorithm
  ```

---

### P2: In-Place Mutation of Caller Data
- **Current State**: `nums.sort()` alters the list in the caller's memory frame. If the caller depends on the original order, this causes subtle bugs.
- **Remediation**:
  ```python
  def count_above_median(nums: list[int]) -> int:
      sorted_nums = sorted(nums)  # Shallow copy preserving caller list
      # ...
  ```

---

### P3: Permissive Senate Character Validation
- **Current State**: In `2ndquestion:L11`, any character that is not `'R'` is pushed to Dire (`qd`). A string `"R X Y"` will route `' '`, `'X'`, `'Y'` into the Dire queue.
- **Remediation**:
  ```python
  def predict_senate_winner(senate: str) -> str:
      if not senate:
          raise ValueError("Senate string cannot be empty")
      invalid = set(senate) - {'R', 'D'}
      if invalid:
          raise ValueError(f"Invalid characters in senate: {invalid}")
  ```

---

### P4: Upgrading from Timsort to QuickSelect ($O(N)$)
- **Current State**: `nums.sort()` takes $O(N \log N)$.
- **Remediation**: Implement the QuickSelect algorithm to find the $k$-th smallest element in $O(N)$ expected time without full array ordering:
  ```python
  import random

  def quickselect(arr, k):
      if len(arr) == 1:
          return arr[0]
      pivot = random.choice(arr)
      lows = [el for el in arr if el < pivot]
      highs = [el for el in arr if el > pivot]
      pivots = [el for el in arr if el == pivot]
      
      if k < len(lows):
          return quickselect(lows, k)
      elif k < len(lows) + len(pivots):
          return pivots[0]
      else:
          return quickselect(highs, k - len(lows) - len(pivots))
  ```
