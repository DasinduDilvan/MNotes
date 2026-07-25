// content/ict2113.js

export const courseName = 'Data Structures and Algorithms'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to Data Structures and Algorithms',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Introduction to Data Structures and Algorithms</h1>
    <div class="meta-info">ICT2113 <span>•</span> 8 min read <span></div>

    <p>Welcome to <strong>Data Structures and Algorithms (DSA)</strong>. This lesson introduces the basic ideas of data, data structures, and algorithms, and explains why they matter so much in computer science.</p>

    <div class="divider"></div>

    <h2>What is Data?</h2>
    <p><strong>Data</strong> is a collection of facts from which a conclusion may be drawn. For example, the data "Temperature 38°C" tells us a fact about temperature.</p>

    <h3>Types of Data</h3>
    <ul>
      <li><strong>Textual</strong> — for example, your name (Amal)</li>
      <li><strong>Numeric</strong> — for example, your ID (TG/2025/0001)</li>
      <li><strong>Audio</strong> — for example, your voice</li>
      <li><strong>Video</strong> — for example, your voice and picture together</li>
    </ul>

    <div class="divider"></div>

    <h2>Key Definitions</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Algorithm</strong> — a step-by-step procedure which can be applied to data to achieve some goal.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Program</strong> — implements an algorithm.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Data Structure</strong> — the manner in which data is represented in the computer to facilitate its access and manipulation by an algorithm. In other words, it is the organization of data needed to solve a problem.</p>
    </div>

    <div class="divider"></div>

    <h2>What is a Data Structure?</h2>
    <ul>
      <li>A particular way of storing and organizing data in a computer so that it can be used <strong>efficiently</strong> and <strong>effectively</strong>.</li>
      <li>A data structure is the <strong>logical or mathematical model</strong> of a particular organization of data.</li>
      <li>It is a group of data elements grouped together under one name — for example, an <strong>array of integers</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Types of Data Structures</h2>
    <p>There are many types of data structures. Some common ones we will study in detail are:</p>
    <ul>
      <li><strong>Array</strong></li>
      <li><strong>Linked List</strong></li>
      <li><strong>Stack</strong></li>
      <li><strong>Queue</strong></li>
    </ul>

    <p>Data can also be organized in these forms:</p>
    <pre><code>(a) Matrix       - a grid of connected elements
(b) Linear list  - elements connected one after another
(c) Tree         - elements connected in a hierarchy (parent-child)
(d) Graph        - elements connected by edges, forming networks</code></pre>

    <div class="divider"></div>

    <h2>Data Structures Hierarchy</h2>
    <p>Data structures are divided into two main categories: <strong>Primitive</strong> and <strong>Non-Primitive</strong>.</p>
    <pre><code>                        Data Structures
                       /                \\
             Primitive DS            Non-Primitive DS
                  |                          |
       Built-in Data Structures     User Defined Data Structures
         - Integer                     - Arrays
         - Float                       - Lists
         - Character                   - Files
         - Pointer                          |
                                 -------------------------
                                 |                       |
                          Linear Lists          Non-Linear Lists
                            - Stacks               - Trees
                            - Queues                - Graphs</code></pre>

    <div class="divider"></div>

    <h2>Basic Characteristics of Data Structures</h2>
    <pre><code>Characteristic     | Description
-------------------|-------------------------------------------------
Linear             | Data items are arranged in a linear sequence.
                    | Example: Array
Non-Linear         | Data items are not in sequence.
                    | Example: Tree, Graph
Homogeneous        | All elements are of the same type.
                    | Example: Array
Non-Homogeneous    | Elements may or may not be of the same type.
                    | Example: Structures
Static             | Size and memory locations are fixed at compile
                    | time. Example: Array
Dynamic            | Expands or shrinks depending on program need;
                    | memory locations change. Example: Linked List
                    | (created using pointers)</code></pre>

    <div class="divider"></div>

    <h2>The Need for Data Structures</h2>
    <ul>
      <li><strong>Goal</strong> — to organize data</li>
      <li><strong>Criteria</strong> — to facilitate efficient storage, retrieval, and manipulation of data</li>
      <li><strong>Design Issue</strong> — select and design appropriate data types</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Selecting and designing appropriate data types is the main motivation to learn and understand data structures.</p>
    </div>

    <div class="divider"></div>

    <h2>Data Structure Operations</h2>
    <ul>
      <li><strong>Traversing</strong> — accessing each data element exactly once so that certain items may be processed</li>
      <li><strong>Searching</strong> — finding the location of a data element (key) in the structure</li>
      <li><strong>Insertion</strong> — adding a new data element to the structure</li>
      <li><strong>Deletion</strong> — removing a data element from the structure</li>
      <li><strong>Sorting</strong> — arranging the data elements in a logical order (ascending/descending)</li>
      <li><strong>Merging</strong> — combining data elements from two or more data structures into one</li>
    </ul>

    <div class="divider"></div>

    <h2>What are Data Structures and Algorithms Good For?</h2>
    <ul>
      <li><strong>Real-world data storage</strong> — to keep the details of a set of people</li>
      <li><strong>Programmer's tools</strong> — data structures meant for the access of the program itself, such as stacks and queues</li>
      <li><strong>Real-world modelling</strong> — to model real world situations, using structures such as graphs and queues</li>
    </ul>

    <div class="divider"></div>

    <h2>Overall Picture: Design vs Implementation Goals</h2>
    <p><strong>Data Structure and Algorithm Design Goals:</strong></p>
    <ul>
      <li>Correctness</li>
      <li>Efficiency</li>
    </ul>
    <p><strong>Implementation Goals:</strong></p>
    <ul>
      <li>Robustness</li>
      <li>Adaptability</li>
      <li>Reusability</li>
    </ul>

    <div class="divider"></div>

    <h2>Advantages and Disadvantages of Common Data Structures</h2>
    <pre><code>Data Structure  | Advantages                          | Disadvantages
----------------|--------------------------------------|-----------------------------
Array           | Quick insertion, very fast access     | Slow search, slow deletion,
                | if index known.                       | fixed size.
Ordered array   | Quicker search than unsorted array.   | Slow insertion and deletion,
                |                                        | fixed size.
Stack           | Provides last-in, first-out access.   | Slow access to other items.
Queue           | Provides first-in, first-out access.  | Slow access to other items.
Linked List     | Quick insertion, quick deletion.      | Slow search.
Binary Tree     | Quick search, insertion, deletion     | Deletion algorithm is complex.
                | (if tree remains balanced).           |</code></pre>

    <div class="divider"></div>

    <h2>What is an Abstract Data Type (ADT)?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An <strong>Abstract Data Type (ADT)</strong> is a collection of data and a set of operations on that data. It is defined as a mathematical model of the data objects that make up a data type, along with the functions that operate on those objects.</p>
    </div>

    <p>An ADT describes the data and the operations that are allowed <strong>without regard to how they will be implemented</strong>. This means we care only about what the data represents, not how it will eventually be built (implemented).</p>

    <h3>How an ADT Works</h3>
    <pre><code>        User
         |
     Interface
         |
   Implementation
         |
    Operations</code></pre>
    <ul>
      <li>The <strong>user</strong> interacts with the <strong>interface</strong>, using the operations specified by the ADT.</li>
      <li>The abstract data type is the <strong>shell</strong> that the user interacts with.</li>
      <li>The <strong>implementation</strong> is hidden one level deeper — the user is not concerned with implementation details.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The implementation of an abstract data type is often referred to as a <strong>data structure</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Data Structures vs. Algorithms</h2>
    <ul>
      <li><strong>Data Structures</strong> — represent objects of the abstract data type</li>
      <li><strong>Algorithms</strong> — manipulate the data structures to implement the operations of the ADT</li>
    </ul>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Data structures and algorithms are patterns for solving problems.</p>
    </div>

    <div class="divider"></div>

    <h2>Why Do We Need Data Structures?</h2>
    <ul>
      <li>They help achieve an important object-oriented programming goal: <strong>component reuse</strong>.</li>
      <li>Once a data structure has been implemented, it can be used over and over again in various applications.</li>
      <li>A data structure is a particular way of storing and organizing information in a computer, so it can be retrieved and used most productively.</li>
    </ul>

    <div class="divider"></div>

    <h2>Why Study Data Structures and Algorithms?</h2>
    <p>Programs are made up of two things: <strong>data</strong> and <strong>algorithms</strong>.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Adding structure to our data can make algorithms much simpler, easier to maintain, and often faster.</p>
    </div>
  `,
  summary: {
    topic: 'Introduction to Data Structures and Algorithms',
    subTopics: [
      'What is Data?',
      'Key Definitions',
      'What is a Data Structure?',
      'Types of Data Structures',
      'Data Structures Hierarchy',
      'Basic Characteristics of Data Structures',
      'The Need for Data Structures',
      'Data Structure Operations',
      'What are Data Structures and Algorithms Good For?',
      'Overall Picture: Design vs Implementation Goals',
      'Advantages and Disadvantages of Common Data Structures',
      'What is an Abstract Data Type (ADT)?',
      'Data Structures vs. Algorithms',
      'Why Do We Need Data Structures?',
      'Why Study Data Structures and Algorithms?',
    ],
    definitions: [
      { term: 'Data', meaning: 'A collection of facts from which a conclusion may be drawn.' },
      { term: 'Algorithm', meaning: 'A step-by-step procedure which can be applied to data to achieve some goal.' },
      { term: 'Program', meaning: 'Implements an algorithm.' },
      { term: 'Data Structure', meaning: 'The manner in which data is represented in the computer to facilitate its access and manipulation by an algorithm; the organization of data needed to solve a problem.' },
      { term: 'Linear Data Structure', meaning: 'A structure where data items are arranged in a sequence, e.g. Array.' },
      { term: 'Non-Linear Data Structure', meaning: 'A structure where data items are not arranged in sequence, e.g. Tree, Graph.' },
      { term: 'Homogeneous Data Structure', meaning: 'A structure where all elements are of the same type, e.g. Array.' },
      { term: 'Non-Homogeneous Data Structure', meaning: 'A structure where elements may or may not be of the same type, e.g. Structures.' },
      { term: 'Static Data Structure', meaning: 'A structure whose size and memory locations are fixed at compile time, e.g. Array.' },
      { term: 'Dynamic Data Structure', meaning: 'A structure that expands or shrinks depending on program need, with changing memory locations, e.g. Linked List created with pointers.' },
      { term: 'Traversing', meaning: 'Accessing each data element exactly once so it can be processed.' },
      { term: 'Searching', meaning: 'Finding the location of a data element (key) in the structure.' },
      { term: 'Insertion', meaning: 'Adding a new data element to the structure.' },
      { term: 'Deletion', meaning: 'Removing a data element from the structure.' },
      { term: 'Sorting', meaning: 'Arranging data elements in a logical order (ascending or descending).' },
      { term: 'Merging', meaning: 'Combining data elements from two or more data structures into one.' },
      { term: 'Abstract Data Type (ADT)', meaning: 'A collection of data and a set of operations on the data, defined without regard to how it is implemented.' },
    ],
    keyPoints: [
      'Data is a collection of facts; common types are textual, numeric, audio, and video.',
      'An algorithm is a step-by-step procedure, a program implements an algorithm, and a data structure organizes data for efficient access.',
      'Data structures split into Primitive (built-in: integer, float, character, pointer) and Non-Primitive (user-defined: arrays, lists, files).',
      'Non-primitive linear lists include stacks and queues; non-linear lists include trees and graphs.',
      'Data structures can be classified as Linear/Non-Linear, Homogeneous/Non-Homogeneous, and Static/Dynamic.',
      'The core goal of studying data structures is efficient storage, retrieval, and manipulation of data.',
      'The six core data structure operations are traversing, searching, insertion, deletion, sorting, and merging.',
      'Arrays give fast access but slow search/deletion and a fixed size; linked lists give quick insertion/deletion but slow search; balanced binary trees give quick search, insertion, and deletion.',
      'Design goals for data structures and algorithms are correctness and efficiency; implementation goals are robustness, adaptability, and reusability.',
      'An Abstract Data Type (ADT) defines data and operations without specifying implementation; its implementation is called a data structure.',
      'Data structures represent ADT objects, and algorithms manipulate data structures to implement ADT operations.',
      'Data structures enable component reuse, a key object-oriented programming goal.',
      'Adding structure to data makes algorithms simpler, easier to maintain, and often faster.',
    ],
  },
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