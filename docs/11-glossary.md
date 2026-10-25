# Technical Glossary

This glossary defines key computational, algorithmic, and system design terminology utilized throughout this documentation and codebase.

---

### A
- **Amortized Analysis**: A method of analyzing an algorithm's complexity by averaging the time taken over a sequence of operations, guaranteeing that occasional expensive operations do not dominate the overall cost (e.g., dynamic array resizing).
- **Asymptotic Complexity**: The mathematical description of an algorithm's resource consumption (time or memory) as the input size grows toward infinity, expressed using Big-O notation.
- **Auxiliary Space**: The temporary or extra memory allocated by an algorithm during execution, excluding the memory occupied by the input itself.

### B
- **Bellman's Principle of Optimality**: The principle stating that an optimal policy has the property that whatever the initial state and decision are, the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision.
- **Big-O Notation**: A mathematical notation representing the upper bound of an algorithm's growth rate, describing its worst-case behavior.
- **BullMQ**: A NodeJS message queue library built on Redis, designed for background job processing, delayed scheduling, and distributed workers.

### C
- **Cache Locality**: The tendency of a processor to access the same set of memory locations repetitively over a short period (temporal locality) or access memory locations stored nearby (spatial locality).
- **Cgroups (Control Groups)**: A Linux kernel feature that limits, accounts for, and isolates resource usage (CPU, memory, disk I/O, network) of process groups.
- **Circular Queue**: A linear data structure that models a ring buffer by conceptually connecting the last position back to the first.
- **CPython**: The reference, standard implementation of the Python programming language written in C.

### D
- **Deque (Double-Ended Queue)**: A generalized sequence data structure supporting insertion and deletion from both the front and the back in $O(1)$ amortized time.
- **Dynamic Programming (DP)**: An algorithmic optimization technique that breaks down a complex problem into smaller overlapping subproblems, solving each subproblem once and storing its answer.

### E
- **Epoll**: An I/O event notification facility in Linux that scales efficiently to thousands of concurrent network connections compared to traditional `select` or `poll`.

### F
- **FIFO (First-In, First-Out)**: A queue processing model where the element that enters the queue first is the first to be extracted.
- **Floor Division (`//`)**: Mathematical division that rounds down to the nearest integer, discarding fractional remainders.

### G
- **Global Interpreter Lock (GIL)**: A mutex used in CPython to prevent multiple native OS threads from executing Python bytecode simultaneously, ensuring thread-safe memory management.
- **Greedy Algorithm**: An algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage in the hope of finding a global optimum.

### H
- **Heap Allocation**: The dynamic allocation of memory at runtime from the system's unreserved memory pool, requiring garbage collection or manual deallocation.
- **Hoare's Partitioning**: An algorithm used in QuickSort and QuickSelect that uses two pointers scanning from both ends toward the center, performing fewer swaps on average than Lomuto's partitioning.

### I
- **Idempotency**: The mathematical and architectural property of an operation whereby performing it multiple times with the same parameters yields the exact same state and result as a single execution.
- **In-Place Algorithm**: An algorithm that transforms its input using a small, constant amount of extra memory space ($O(1)$ auxiliary space) without allocating a separate copy.
- **IndexError**: A Python runtime exception raised when a sequence subscript is out of range.

### M
- **Median**: The middle value in an ordered statistical sequence, separating the higher half from the lower half of the data distribution.
- **Memoization**: An optimization technique used to speed up computer programs by caching the results of expensive function calls and returning the cached result when the same inputs recur.

### N
- **Nash Equilibrium**: A game theory concept where no participant has an incentive to unilaterally deviate from their chosen strategy after considering an opponent's choices.

### O
- **Off-By-One Error (OBOE)**: A logic error involving the boundary condition of a loop or sequence index, typically traversing one element too many or one element too few.
- **Online Judge**: An automated software system that receives source code submissions from users, compiles and runs them in a secure sandbox against test cases, and returns grading verdicts.
- **Optimal Substructure**: The property that an optimal solution to a problem contains within it optimal solutions to subproblems.

### Q
- **QuickSelect**: A selection algorithm to find the $k$-th smallest element in an unordered list in $O(N)$ expected linear time without fully sorting the list.

### R
- **RecursionError**: An exception in Python raised when maximum call-stack recursion depth is exceeded.
- **Ring Buffer**: A fixed-size circular memory buffer where writes wrap around to the beginning once capacity is reached.

### S
- **Seccomp (Secure Computing Mode)**: A Linux kernel security feature that restricts the system calls a process can invoke, isolating untrusted applications.
- **State Machine**: A mathematical abstraction consisting of a finite number of states, transitions between those states, and actions triggered by inputs.

### T
- **Time Limit Exceeded (TLE)**: A grading verdict indicating that a submitted program failed to conclude within the permitted execution duration.
- **Timsort**: A hybrid, stable sorting algorithm combining insertion sort and merge sort, designed by Tim Peters for CPython.
- **Tropical Geometry (Max-Plus Semiring)**: An algebraic structure where addition is replaced by maximum and multiplication is replaced by addition, frequently used to linearize dynamic programming recurrences.

### V
- **VitePress**: A Vue-powered static site generator built on Vite, designed for authoring high-performance, developer-focused documentation sites.
