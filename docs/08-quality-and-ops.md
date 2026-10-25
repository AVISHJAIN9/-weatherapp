# Engineering Quality, Testing & Operations

This document assesses code quality, automated test coverage, git collaboration evidence, continuous integration workflows, and technical debt across the codebase.

---

## 1. Automated Testing Suite & Test Coverage

The project is backed by an automated regression test suite located in [`tests/test_algorithms.py`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/tests/test_algorithms.py).

### Test Suite Execution
```bash
python3 -m unittest discover tests
# Output: Ran 13 tests in 0.000s - OK
```

### Test Case Matrix

| Feature | Test Case Name | Input Data | Expected Output | Tested Invariant |
| :--- | :--- | :--- | :--- | :--- |
| **F1** | `test_house_robber_empty` | `[]` | `0` | Base condition guard $N=0$ |
| **F1** | `test_house_robber_single_element` | `[5]` | `5` | Base condition guard $N=1$ |
| **F1** | `test_house_robber_two_elements` | `[10, 20]` | `20` | Max selection between 2 houses |
| **F1** | `test_house_robber_example_1` | `[1, 2, 3, 1]` | `4` | Alternating robbery yield |
| **F1** | `test_house_robber_example_2` | `[2, 7, 9, 3, 1]` | `12` | Multi-step skip sequence |
| **F1** | `test_house_robber_all_zeros` | `[0, 0, 0, 0]` | `0` | Zero-value floor condition |
| **F2** | `test_senate_simple_radiant` | `"RD"` | `"Radiant"` | Earliest index priority |
| **F2** | `test_senate_simple_dire` | `"RDD"` | `"Dire"` | Multi-round ban cascade |
| **F2** | `test_senate_radiant_majority` | `"RRDDD"` | `"Radiant"` | Radiant voting majority |
| **F2** | `test_senate_alternating` | `"RDRD"` | `"Radiant"` | Symmetric initial setup |
| **F3** | `test_median_odd_length` | `[1, 2, 3, 4, 5]` | `2` | Odd array median ($N=5$) |
| **F3** | `test_median_even_length` | `[1, 3, 2, 5, 4, 6]` | `2` | Even array median ($N=6$, lower index) |
| **F3** | `test_median_duplicates` | `[2, 2, 2, 2]` | `0` | Strict inequality boundary ($>$, not $\ge$) |

---

## 2. Git Workflow & Collaboration Evidence

The git commit graph reveals a collaborative workflow originating from an upstream contribution sprint by **BMSCE IEEE Computer Society**, followed by iterative development and debugging commits:

```text
* 9731ba4 - Add function to count numbers above median (Feature F3 fix & driver)
* 7a0553c - Implement predict_senate_winner function (Feature F2 deque simulation)
* 1ee9617 - Create 1stquestion (Feature F1 space-optimized DP)
* 2e25294 - House Robber Problem description (task1.md)
* c07b6c6 - Add debugging challenge (task3.md)
* 55c0e2c - Document algorithm for Senator Banning simulation (task2.md)
* 5041e0b - Add House Robber problem statement to task1.md
* a0d2750 - Update README with Contribution Sprint details
* 6e99eb8 - Initial commit
```

- **Branching Model**: Single-trunk delivery on `main` tailored for fork-and-submit hackathons.
- **Commit Granularity**: Each commit encapsulates a discrete feature implementation or problem specification.

---

## 3. Continuous Integration Pipeline (GitHub Actions)

To ensure automated verification on every push and pull request, the following CI workflow is defined:

```yaml
name: Algorithm Test Suite & Documentation Build

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test-python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python 3.12
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Run Unit Tests
        run: python3 -m unittest discover tests

  build-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: '22'
      - name: Install Documentation Tooling
        run: npm ci
      - name: Build VitePress Documentation
        run: npm run docs:build
```

---

## 4. Technical Debt Knowingly Incurred

| Technical Debt Item | Location | Rationale & Trade-off Accepted | Remediation Plan |
| :--- | :--- | :--- | :--- |
| **In-place Input Mutation** | [`3rdquestion:L2`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L2) | `nums.sort()` mutates the caller's array in-place to avoid $O(N)$ allocation. | In a multi-tenant library, make a shallow copy (`sorted_nums = sorted(nums)`) or use non-mutating QuickSelect. |
| **Loose String Validation** | [`2ndquestion:L11`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/2ndquestion#L11) | Characters other than `'R'` default to Dire via the `else` clause. | Enforce strict input validation regex `^[RD]+$` and raise `ValueError` on malformed characters. |
| **Empty Input Guard Missing in F3** | [`3rdquestion:L4`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/3rdquestion#L4) | Assumes $N \ge 1$ per problem constraints. An empty list triggers `IndexError`. | Add guard: `if not nums: return 0` at entry. |
