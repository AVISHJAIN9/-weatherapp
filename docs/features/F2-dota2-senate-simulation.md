# Feature F2: Dota2 Senate Turn Simulation Engine

## Overview & User-Facing Behavior

Feature F2 implements a game-theoretic simulation for the Dota2 Senate voting procedure (LeetCode 649 / Task 2). The senate consists of senators from two opposing factions: **Radiant** (`'R'`) and **Dire** (`'D'`).

- **Game Rules**:
  - Voting proceeds in rounds in the order that senators appear.
  - A senator can exercise one of two rights:
    1. **Ban an opponent's right**: Choose one senator from the opposing party and eliminate their voting rights for all future rounds.
    2. **Announce victory**: If all remaining senators with voting rights belong to their party, declare victory and conclude the procedure.
  - Senators act with optimal greedy strategy: a senator always bans the *earliest eligible opponent* who would take an action in the current or upcoming rounds, neutralizing the opponent's upcoming ban power.
- **User-Facing Behavior**: Given a string `senate`, returns `"Radiant"` or `"Dire"` indicating which faction ultimately wins.

---

## Technical Specifications & Code References

- **Source File**: [`2ndquestion`](file:///Users/avishjain/avishjain9-repos/57-weatherapp-client/2ndquestion#L1-L26)
- **Primary Function**: `predict_senate_winner(senate: str) -> str`
- **Line-by-Line Code Breakdown**:
  - `Line 1`: `from collections import deque` - Imports double-ended queue primitive supporting $O(1)$ amortized popleft and append.
  - `Line 3`: `def predict_senate_winner(senate: str) -> str:` - Function declaration with type annotations.
  - `Line 4`: `n = len(senate)` - Stores string length $n$ used for circular offset indexing.
  - `Lines 5–6`: `qr = deque(); qd = deque()` - Initializes independent FIFO queues for Radiant and Dire indices.
  - `Lines 8–12`: `for i, party in enumerate(senate):` - Scans input string and populates initial 0-based indices into `qr` or `qd`.
  - `Lines 14–15`: `while qr and qd:` - Execution loop running until one faction is completely eliminated.
  - `Lines 16–17`: `r = qr.popleft(); d = qd.popleft()` - Extracts the earliest active senator from each faction.
  - `Lines 18–21`: Comparison and re-queueing:
    - If `r < d`: Radiant senator acts first, successfully bans Dire senator `d`, and re-enters the voting rotation for the next round at `r + n` (`qr.append(r + n)`).
    - Else (`d < r`): Dire senator acts first, bans Radiant senator `r`, and re-enters at `d + n` (`qd.append(d + n)`).
  - `Lines 23–26`: Final verdict evaluation returning `"Radiant"` if `qr` contains remaining senators, otherwise `"Dire"`.

---

## Mandatory Mermaid Diagrams

### 1. Architectural Flowchart

```mermaid
flowchart TD
    Start([Input: senate string]) --> InitQ[Initialize qr and qd via collections.deque]
    InitQ --> Partition[Loop i, party in enumerate senate:<br/>Append i to qr if 'R' else qd]
    Partition --> LoopCond{Both qr and qd non-empty?}
    LoopCond -->|Yes| Pop[r = qr.popleft<br/>d = qd.popleft]
    Pop --> Compare{r < d ?}
    Compare -->|Yes: Radiant Acts First| BanD[Dire d eliminated<br/>qr.append r + n]
    Compare -->|No: Dire Acts First| BanR[Radiant r eliminated<br/>qd.append d + n]
    BanD --> LoopCond
    BanR --> LoopCond
    LoopCond -->|No: One Queue Empty| CheckWinner{Is qr non-empty?}
    CheckWinner -->|Yes| RetR[Return 'Radiant']
    CheckWinner -->|No| RetD[Return 'Dire']
```

### 2. Request / Execution Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor Caller
    participant Fn as 2ndquestion:predict_senate_winner
    participant QR as Queue QR (Radiant)
    participant QD as Queue QD (Dire)

    Caller->>Fn: predict_senate_winner("RDD")
    Fn->>QR: append(0)
    Fn->>QD: append(1), append(2)
    Note over Fn,QD: Round 1: r=0 vs d=1
    Fn->>QR: popleft() -> r=0
    Fn->>QD: popleft() -> d=1
    Fn->>Fn: 0 < 1 -> Radiant bans Dire (index 1)
    Fn->>QR: append(0 + 3 = 3)
    Note over Fn,QD: Round 2: r=3 vs d=2
    Fn->>QR: popleft() -> r=3
    Fn->>QD: popleft() -> d=2
    Fn->>Fn: 3 > 2 -> Dire bans Radiant (index 3)
    Fn->>QD: append(2 + 3 = 5)
    Note over Fn,QD: Round 3: QR is empty!
    Fn-->>Caller: "Dire"
```

### 3. Queue State Data Diagram

```mermaid
erDiagram
    SENATE_STREAM {
        int original_index PK
        string faction
    }
    QUEUE_RADIANT {
        int queued_turn PK
        int original_id
    }
    QUEUE_DIRE {
        int queued_turn PK
        int original_id
    }
    SENATE_STREAM ||--o{ QUEUE_RADIANT : "R senators assigned to"
    SENATE_STREAM ||--o{ QUEUE_DIRE : "D senators assigned to"
```

### 4. Game State Machine

```mermaid
stateDiagram-v2
    [*] --> InitializingQueues
    InitializingQueues --> ActiveBattle: Both Queues Have Elements
    state ActiveBattle {
        [*] --> PopFrontSenators
        PopFrontSenators --> CompareTurns: r vs d
        CompareTurns --> RadiantRequeue: r < d (Bans d, re-queues r + n)
        CompareTurns --> DireRequeue: d < r (Bans r, re-queues d + n)
        RadiantRequeue --> [*]
        DireRequeue --> [*]
    }
    ActiveBattle --> RadiantWon: qd.empty() and qr.non_empty()
    ActiveBattle --> DireWon: qr.empty() and qd.non_empty()
    RadiantWon --> [*]: Return "Radiant"
    DireWon --> [*]: Return "Dire"
```

### 5. Failure-Path & Exception Handling Diagram

```mermaid
flowchart TD
    Call[Call predict_senate_winner] --> ValidType{Is senate a string?}
    ValidType -->|No| E1[TypeError: object has no len / cannot iterate]
    ValidType -->|Yes| ValidChars{Does string contain only R and D?}
    ValidChars -->|No, contains arbitrary chars| W1[Arbitrary chars routed to Dire queue by else branch]
    ValidChars -->|Yes| EmptyCheck{Is len senate == 0?}
    EmptyCheck -->|Yes| W2[Both queues empty -> falls through to return Dire]
    EmptyCheck -->|No| Execution[Executes in O N time]
    Execution --> Result[Returns Winning Faction]
```

---

## Complexity & Invariant Analysis

1. **Greedy Optimality Invariant**: A senator who gets a turn should ban the earliest available opposing senator. Why? An opposing senator whose turn is in the distant future cannot harm the team now; an opposing senator whose turn is *next* is an immediate existential threat. Banning the smallest index is mathematically dominant.
2. **Circular Offset Invariant ($i + n$)**: By adding the total initial count $n$ to the winner's index, the senator is positioned behind all currently living senators for round 2, without requiring array rebuilds or round counters.
3. **Time Complexity**: Each round iteration results in exactly one senator being permanently eliminated. Since there are at most $N$ senators, there can be at most $N$ eliminations. Queue pop and append are $O(1)$. Total runtime is strictly $O(N)$.
4. **Space Complexity**: The two deques hold at most $N$ elements combined at any time, requiring $O(N)$ auxiliary memory.

---

## Say It Out Loud

I implemented this simulation engine to solve the Dota2 Senate problem, which determines which of two political parties wins a multi-round voting battle where each senator can eliminate an opponent's future votes.

When the caller invokes `predict_senate_winner` with a string of senators, my function creates two double-ended queues using Python's `collections.deque`, one for Radiant and one for Dire, and populates them with the zero-based index of each senator. In the main loop, as long as both queues have senators remaining, I pop the front senator from each queue. Whichever senator has the smaller index acted earlier in the round, meaning that senator successfully bans the opponent. The winning senator is then re-queued with their index offset by the length of the string, which places them cleanly at the end of the line for the next round. Once one queue is empty, the party with remaining members is declared the winner.

I chose this double-queue approach with index offsets over array manipulation or linked lists because array deletions take linear time and would degrade the simulation to an unacceptable O(N squared) runtime. With deques, every pop and push operation is constant time, guaranteeing an optimal O(N) linear time and linear space solution.

If an empty string is provided, neither queue populates and it defaults to returning Dire, and passing non-string types raises a TypeError.

One limitation is that any character other than capital R is treated as Dire by the fallback else statement, which in a production environment should be hardened with strict input validation.
