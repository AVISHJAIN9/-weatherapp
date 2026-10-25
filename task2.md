# Task 2 - Algorithm-Based Simulation Problem

## Problem Statement

You are given a string `senate` representing senators from two parties:
- `'R'` → Radiant  
- `'D'` → Dire  

Each senator takes turns in rounds. A senator may **ban** another senator from the opposite party. Banned senators lose all future turns.

You must **simulate the process exactly as described in the algorithm below** and return which party wins.

Do **NOT** change the algorithm.  
Just follow it exactly.

---

## Algorithm to Follow

You are given an integer queue for Radiant (QR) and one for Dire (QD).

1. Create two empty queues: QR (Radiant) and QD (Dire)
2. For each index i in senate:
     * if senate[i] == 'R':
     * push i into QR
     * else:
     * push i into QD

3. While both QR and QD are not empty:
     * r = pop front from QR
     * d = pop front from QD
     * If r < d:
        - // Radiant senator acts first
        - push (r + n) into QR
     * Else:
        - // Dire senator acts first
        - push (d + n) into QD
4. If QR is non-empty → Return "Radiant" Else → Return "Dire"


Where **n = length of the senate string**.

---

## Input Format
- A string `senate` consisting of characters `'R'` and `'D'`.

## Output Format
- `"Radiant"` or `"Dire"`

---

## Example

**Input:**  
`senate = "RDD"`

**Output:**  
`"Dire"`

**Explanation:**  
Following the algorithm, Dire ultimately bans all Radiant senators.

---

## Your Task
Implement the algorithm and output the winning party exactly.

---


