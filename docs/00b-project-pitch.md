# Project Pitches: 30-Second & 2-Minute Spoken Walkthroughs

This document contains verbatim interview scripts designed to introduce this codebase to technical interviewers and hiring managers at top-tier software engineering companies.

---

## The 30-Second Elevator Pitch

> "In this project, I engineered and debugged a suite of high-efficiency algorithmic solutions in Python focused on dynamic programming, stateful game simulations, and statistical boundary analysis. Specifically, I built an optimal $O(N)$ time, $O(1)$ space solver for non-adjacent house optimization, implemented an $O(N)$ double-queue turn simulator for the Dota2 Senate game, and debugged an off-by-one boundary failure in array median calculations. The entire suite adheres to strict asymptotic bounds, eliminates unnecessary heap allocations, and is structured for direct integration into high-throughput online judge evaluation engines."

---

## The 2-Minute Deep Technical Walkthrough

> "Let me walk you through the motivation, architecture, and engineering trade-offs behind this algorithmic suite.
>
> The objective of this project was to implement mathematically optimal, edge-case-hardened solutions for three fundamental computer science problem classes: constrained optimization, round-based greedy simulation, and boundary-condition debugging.
>
> For the first feature, the House Robber problem, a naive recursive formulation suffers from $O(2^N)$ exponential time explosion due to overlapping subproblems. I formulated the optimal substructure using dynamic programming, but instead of allocating an $O(N)$ memoization table, I recognized that each house decision only depends on the two immediately preceding states. By maintaining two rolling scalar registers—`prev1` and `prev2`—I reduced the auxiliary space complexity to $O(1)$ while maintaining strict $O(N)$ linear time.
>
> For the second feature, the Dota2 Senate simulation, the challenge is simulating circular multi-round bans where senators act greedily to silence the earliest eligible opponent. An array-based simulation with deletions would degrade to $O(N^2)$ due to linear element shifts. To achieve $O(N)$ runtime, I utilized two `collections.deque` structures to track senator indices for each faction. Senators who exercise their voting right are re-queued with an index offset of $n$, naturally preserving circular round order and earliest-turn precedence without shifting arrays.
>
> For the third feature, I performed root-cause debugging on a junior developer's median counting algorithm. The original code contained an array index out-of-bounds error by assigning the median index as `len(nums)` rather than integer half `len(nums) // 2`, an off-by-one traversal error iterating past array bounds, and an incorrect non-strict comparison. I corrected the integer division index, bounded the iteration range cleanly to $N$, and enforced strict inequality, producing an $O(N \log N)$ solution with zero memory leaks.
>
> If I were extending this architecture to production, I would wrap these core algorithmic functions in an asynchronous evaluation microservice backed by Redis queues and isolated Linux cgroups to evaluate tens of thousands of candidate code submissions per second safely."

---

## Pitch Delivery Checklist

- [ ] **Pacing**: Spoken at ~130 words per minute without rushing.
- [ ] **Keywords Hit**: $O(N)$ time, $O(1)$ space, dynamic programming, `collections.deque`, off-by-one error, online judge.
- [ ] **Tone**: Confident, technical, and focused on algorithmic invariants and system constraints.
