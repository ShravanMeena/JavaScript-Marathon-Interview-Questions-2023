#  Memory Management & Garbage Collection

Memory allocation is done automatically as long as references exist there will not be any cleaning or garbage collenctig.
When a location is unreachable than that will be collected/released as garbage.


## Relative questions
- How does GC work in javascript? 
    - `Mark and Sweep Algorithm` is used for garbage collection. The algorithm will start from the `Global` object & it marks the references values & unreachable location are cleared

- Explain `Mark & Sweep` algorithm pattern?
    - The algorithm begins with root element and then it starts marking the referenced values & unmarked values will be cleared
