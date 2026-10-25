# Confirm with Developer List

This document lists all assumptions and design choices inferred from codebase inspection that should be explicitly confirmed with the original developer.

---

## Inferred Decisions Requiring Developer Confirmation

| Item ID | Inferred Decision | Context / Source | Likely Rationale | Developer Action Required |
| :--- | :--- | :--- | :--- | :--- |
| **CONFIRM-01** | **Python Standard Library vs C++ Runtime** | Overall Project Stack | Developer prioritized rapid development velocity and concise code during a competitive programming contribution sprint over the microsecond execution speeds of C++ [CONFIRM WITH DEVELOPER]. | Confirm if C++ was considered or if the sprint specifically mandated Python. |
| **CONFIRM-02** | **Rolling Pointer Registers ($O(1)$) vs DP Array** | [`1stquestion:L9-L20`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/1stquestion#L9-L20) | Developer purposefully optimized space complexity to $O(1)$ by identifying that only the previous two house subproblems are needed [CONFIRM WITH DEVELOPER]. | Confirm whether space optimization was a stated sprint requirement or personal engineering refinement. |
| **CONFIRM-03** | **In-Place Timsort vs QuickSelect in Median Debugger** | [`3rdquestion:L2`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L2) | Developer utilized standard library Timsort ($O(N \log N)$) rather than implementing an $O(N)$ QuickSelect routine because Timsort is implemented in C and runs rapidly within sprint array bounds ($N \le 10^5$) [CONFIRM WITH DEVELOPER]. | Confirm if QuickSelect was avoided due to implementation time constraints. |
| **CONFIRM-04** | **Even-Length Median Floor Index Definition** | [`3rdquestion:L4`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L4) | Developer chose `len(nums) // 2` (lower-middle index) rather than calculating the floating-point mean of the two middle elements, adhering to competitive programming discrete integer standards [CONFIRM WITH DEVELOPER]. | Confirm whether problem test cases required integer indices or statistical floats. |
| **CONFIRM-05** | **Permissive Faction Routing in Senate Simulation** | [`2ndquestion:L11`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/2ndquestion#L11) | Developer routed all non-`'R'` characters into Dire queue via `else` clause under the assumption that problem inputs are pre-sanitized [CONFIRM WITH DEVELOPER]. | Confirm if strict input character validation was intended. |
