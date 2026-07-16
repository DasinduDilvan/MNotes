export const courseName = 'Data Structures and Algorithms'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to Data Structures and Algorithms',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Introduction to Data Structures and Algorithms</h1>
    <div class="meta-info">ICT2113 <span>•</span> 9 min read <span>•</span> Beginner</div>

    <h2>What Is Data?</h2>
    <p><strong>Data</strong> is a collection of facts from which a conclusion may be drawn. For example, the fact "Temperature 38°C" is a piece of data.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Data can come in many forms. Understanding these types helps you decide how to store and process them.</p>
    </div>

    <ul>
      <li><strong>Textual</strong> — words, such as your name (e.g. Amal)</li>
      <li><strong>Numeric</strong> — numbers, such as your ID (e.g. TG/2025/0001)</li>
      <li><strong>Audio</strong> — sound, such as your voice</li>
      <li><strong>Video</strong> — moving pictures with sound, such as a recording of you speaking</li>
    </ul>

    <div class="divider"></div>

    <h2>Key Definitions</h2>
    <p>Before going further, you need to clearly understand three core terms that are often confused with each other.</p>

    <h3>Algorithm</h3>
    <p>An <strong>algorithm</strong> is a step-by-step procedure that can be applied to data to achieve a specific goal.</p>

    <h3>Program</h3>
    <p>A <strong>program</strong> is what actually implements an algorithm — it turns the step-by-step idea into working code.</p>

    <h3>Data Structure</h3>
    <p>A <strong>data structure</strong> is the way data is represented (organized) inside a computer so that an algorithm can access and manipulate it easily. In other words, it is the <strong>organization of data</strong> needed to solve a problem.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Algorithm</strong> = the plan/steps. <strong>Program</strong> = the actual code that carries out the plan. <strong>Data Structure</strong> = the way the data is organized so the plan can work efficiently.</p>
    </div>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>A common exam mistake is treating "algorithm" and "program" as the same thing. The algorithm is the abstract idea; the program is its concrete implementation in a programming language.</p>
    </div>

    <div class="divider"></div>

    <h2>What Is a Data Structure? (In More Detail)</h2>
    <p>A data structure is a particular way of storing and organizing data in a computer so it can be used <strong>efficiently and effectively</strong>. It is the logical or mathematical model of a particular organization of data — essentially, a group of data elements grouped together under one name.</p>
    <p>For example, an <strong>array of integers</strong> is a data structure: many integer values grouped together under a single name.</p>

    <div class="divider"></div>

    <h2>Types of Data Structures</h2>
    <p>There are many data structures, but a few common ones are introduced here. You will learn each of these in detail later in the course.</p>

    <ul>
      <li><strong>Array</strong> — a fixed-size collection of elements stored next to each other</li>
      <li><strong>Linked List</strong> — a chain of elements where each element points to the next one</li>
      <li><strong>Stack</strong> — elements are added and removed from only one end</li>
      <li><strong>Queue</strong> — elements are added at one end and removed from the other</li>
    </ul>

    <p>A few more structural types, based on how elements are arranged and connected:</p>

    <pre><code>(a) Matrix       → elements arranged in a grid of rows and columns, each linked to its neighbours
(b) Linear list  → o──o──o──o   (elements linked one after another, in a straight line)
(c) Tree         →        o
                        /  |  \
                       o   o   o
                      / \        \
                     o   o        o
(d) Graph        → o──o
                     |\/|
                     o──o        (nodes connected by edges — connections can even form loops)</code></pre>

    <div class="divider"></div>

    <h2>Data Structures Hierarchy</h2>
    <p>Data structures can be split into two big families: <strong>Primitive</strong> (built into the language) and <strong>Non-Primitive</strong> (defined by the user/programmer).</p>

    <pre><code>Data Structures
│
├── Primitive Data Structures (Built-in)
│      ├── Integer
│      ├── Float
│      ├── Character
│      └── Pointer
│
└── Non-Primitive Data Structures (User Defined)
       ├── Arrays
       ├── Files
       └── Lists
              ├── Linear Lists
              │      ├── Stacks
              │      └── Queues
              └── Non-Linear Lists
                     ├── Trees
                     └── Graphs</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Primitive data structures</strong> (Integer, Float, Character, Pointer) come ready-made in the language. <strong>Non-primitive data structures</strong> (Arrays, Lists, Files) are built by the programmer using those primitives.</p>
    </div>

    <div class="divider"></div>

    <h2>Basic Characteristics of Data Structures</h2>
    <p>Data structures can also be described using the following characteristics:</p>

    <pre><code>Characteristic    Description                                              Example
Linear            Data items arranged in a sequence                         Array
Non-Linear        Data items not arranged in sequence                       Tree, Graph
Homogeneous       All elements are of the same type                        Array
Non-Homogeneous   Elements may or may not be of the same type               Structures
Static            Size & memory locations fixed at compile time             Array
Dynamic           Expands/shrinks at run time; memory locations can change  Linked List (using pointers)</code></pre>

    <div class="divider"></div>

    <h2>The Need for Data Structures</h2>
    <ul>
      <li><strong>Goal</strong> — to organize data</li>
      <li><strong>Criteria</strong> — to facilitate efficient storage, retrieval, and manipulation of data</li>
      <li><strong>Design Issue</strong> — selecting and designing the appropriate data type for the problem</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Choosing the right data type/structure for a problem is the <strong>main motivation</strong> for learning and understanding data structures — this is a key exam point.</p>
    </div>

    <div class="divider"></div>

    <h2>Data Structure Operations</h2>
    <p>These are the common operations you can perform on almost any data structure:</p>

    <ul>
      <li><strong>Traversing</strong> — accessing each data element exactly once so certain items can be processed</li>
      <li><strong>Searching</strong> — finding the location of a data element (the key) within the structure</li>
      <li><strong>Insertion</strong> — adding a new data element to the structure</li>
      <li><strong>Deletion</strong> — removing a data element from the structure</li>
      <li><strong>Sorting</strong> — arranging elements in a logical order (ascending or descending)</li>
      <li><strong>Merging</strong> — combining elements from two or more data structures into one</li>
    </ul>

    <div class="divider"></div>

    <h2>What Are Data Structures and Algorithms Good For?</h2>

    <ul>
      <li><strong>Real-world data storage</strong> — e.g. keeping the details of a set of people</li>
      <li><strong>Programmer's tools</strong> — data structures meant for the program's own internal use, such as stacks and queues</li>
      <li><strong>Real-world modelling</strong> — used to model real-world situations, such as graphs and queues</li>
    </ul>

    <div class="divider"></div>

    <h2>Design Goals: The Overall Picture</h2>
    <p>When designing data structures and algorithms, two sets of goals matter:</p>

    <pre><code>Data Structure & Algorithm      Implementation
Design Goals                    Goals
─────────────────────────      ─────────────────────
Correctness                     Robustness
Efficiency                      Adaptability
                                 Reusability</code></pre>

    <div class="divider"></div>

    <h2>Advantages and Disadvantages of Common Data Structures</h2>

    <pre><code>Data Structure   Advantages                                     Disadvantages
Array            Quick insertion; fast access if index known    Slow search; slow deletion; fixed size
Ordered Array    Quicker search than an unsorted array           Slow insertion/deletion; fixed size
Stack            Fast Last-In-First-Out (LIFO) access             Slow access to other items
Queue            Fast First-In-First-Out (FIFO) access            Slow access to other items
Linked List      Quick insertion; quick deletion                  Slow search
Binary Tree      Quick search, insertion, deletion (if balanced)  Deletion algorithm is complex</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Don't assume one data structure is "best" — every choice trades something off. Arrays are fast to access but have a fixed size; linked lists grow freely but are slow to search; balanced binary trees are fast but complex to maintain.</p>
    </div>

    <div class="divider"></div>

    <h2>What Is an Abstract Data Type (ADT)?</h2>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An <strong>Abstract Data Type (ADT)</strong> is a collection of data and a set of operations on that data. It is a mathematical model of the data objects that make up a data type, along with the functions that operate on those objects.</p>
    </div>

    <p>An ADT defines the data and the allowed operations <strong>without regard to how they will be implemented</strong>. This means we are concerned only with <strong>what</strong> the data represents, not <strong>how</strong> it will eventually be built.</p>

    <p>The diagram below shows how an ADT operates, as a set of layers:</p>

    <pre><code>        User
         ↕
     Interface        (the operations the user is allowed to call)
         ↕
  Implementation      (hidden — the actual data structure and code)</code></pre>

    <p>The user interacts only with the <strong>interface</strong>, using the operations specified by the ADT. The <strong>implementation</strong> is hidden one level deeper, and the user does not need to worry about those details.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The implementation of an abstract data type is often referred to as a <strong>data structure</strong>. ADT is the "what"; data structure is the "how".</p>
    </div>

    <div class="divider"></div>

    <h2>Data Structures vs. Algorithms</h2>

    <ul>
      <li><strong>Data Structures</strong> — represent the objects of the Abstract Data Type</li>
      <li><strong>Algorithms</strong> — manipulate the data structures to implement the operations of the ADT</li>
    </ul>

    <p>Data structures and algorithms are, together, patterns for solving problems.</p>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>A simple way to remember this: data structures are like the <strong>nouns</strong> (the things being organized), and algorithms are like the <strong>verbs</strong> (the actions performed on them).</p>
    </div>

    <div class="divider"></div>

    <h2>Why Do We Need Data Structures?</h2>
    <p>Using well-designed data structures helps us achieve an important object-oriented programming goal: <strong>component reuse</strong>. Once a data structure has been implemented, it can be used over and over again in different applications.</p>
    <p>In short, a data structure is a particular way of storing and organizing information in a computer so it can be retrieved and used most productively.</p>

    <div class="divider"></div>

    <h2>Why Study Data Structures and Algorithms?</h2>
    <p>Every program is made up of two things: <strong>data</strong> and <strong>algorithms</strong>. Adding good structure to our data makes algorithms much simpler, easier to maintain, and often faster.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Good data structures don't just organize data — they directly make your algorithms simpler and more efficient. This connection between data structures and algorithm quality is the core idea of this whole course.</p>
    </div>
  `,
},
  {
    id: 2,
    title: 'Arrays and Linked Lists',
    content: `
      <span class="lesson-badge">LESSON 02</span>
      <h1>Arrays and Linked Lists</h1>
      <div class="meta-info">ICT2113 <span>•</span> 8 min read <span>•</span> Beginner</div>

      <p>Arrays and Linked Lists are the two most fundamental <strong>linear data structures</strong>. Every developer must understand their trade-offs.</p>

      <h2>Arrays</h2>
      <p>An array stores elements in <strong>contiguous memory</strong> locations. Access is fast, but insertion/deletion in the middle is slow.</p>

      <pre><code>// Declare an array
int numbers[] = {10, 20, 30, 40, 50};

// Access element at index 2
int value = numbers[2];  // 30

// Time Complexity
// Access:  O(1)
// Search:  O(n)
// Insert:  O(n)
// Delete:  O(n)</code></pre>

      <h2>Linked Lists</h2>
      <p>A linked list stores elements in <strong>nodes</strong>, where each node points to the next. Insertion/deletion is fast, but access is slow.</p>

      <pre><code>class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Time Complexity
// Access:  O(n)
// Search:  O(n)
// Insert:  O(1)  (at head)
// Delete:  O(1)  (at head)</code></pre>

      <div class="callout callout-yellow">
        <span class="callout-label">Remember</span>
        <p>Use <strong>arrays</strong> when you need fast access by index. Use <strong>linked lists</strong> when you need frequent insertions/deletions.</p>
      </div>

      <h2>Comparison Table</h2>
      <pre><code>| Feature        | Array  | Linked List |
|----------------|--------|-------------|
| Access         | O(1)   | O(n)        |
| Insert (head)  | O(n)   | O(1)        |
| Delete (head)  | O(n)   | O(1)        |
| Memory         | Fixed  | Dynamic     |</code></pre>

      <div class="callout callout-green">
        <span class="callout-label">Tip</span>
        <p>In interviews, always discuss the trade-offs between arrays and linked lists.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: 'Stacks and Queues',
    content: `
      <span class="lesson-badge">LESSON 03</span>
      <h1>Stacks and Queues</h1>
      <div class="meta-info">ICT2113 <span>•</span> 7 min read <span>•</span> Beginner</div>

      <p>Stacks and Queues are <strong>abstract data types</strong> that restrict how elements are added and removed.</p>

      <h2>Stack (LIFO)</h2>
      <p>Last In, First Out. Think of a stack of plates.</p>

      <pre><code>Stack operations:
  push(item)  → Add to top
  pop()       → Remove from top
  peek()      → View top without removing

// Example
stack.push(10)   // [10]
stack.push(20)   // [10, 20]
stack.push(30)   // [10, 20, 30]
stack.pop()      // returns 30 → [10, 20]</code></pre>

      <h2>Queue (FIFO)</h2>
      <p>First In, First Out. Think of a line at a counter.</p>

      <pre><code>Queue operations:
  enqueue(item)  → Add to rear
  dequeue()      → Remove from front
  peek()         → View front without removing

// Example
queue.enqueue(10)   // [10]
queue.enqueue(20)   // [10, 20]
queue.enqueue(30)   // [10, 20, 30]
queue.dequeue()     // returns 10 → [20, 30]</code></pre>

      <div class="callout callout-red">
        <span class="callout-label">Warning</span>
        <p>Don't confuse LIFO (Stack) with FIFO (Queue). This is a common exam mistake.</p>
      </div>
    `,
  },
]