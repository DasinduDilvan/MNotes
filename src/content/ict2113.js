// content/ict2113.js

export const courseName = 'Data Structures and Algorithms'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to DSA',
  content: `
<span class="lesson-badge">LESSON 01</span>
<h1>Introduction to DSA</h1>
<div class="meta-info">ICT2113 <span>&bull;</span> 15 min read <span>&bull;</span> Beginner</div>

<p>Before going further into <strong>Data Structures and Algorithms (DSA)</strong>, let's understand what "data" actually means and why organizing it well matters so much in computer science.</p>

<h2>What is Data?</h2>
<p><strong>Data</strong> is a collection of facts from which a conclusion may be drawn. For example, the fact "Temperature 38°C" is a piece of data.</p>
<p>Data can come in different types:</p>
<ul>
  <li><strong>Textual</strong> &mdash; for example, your name (Amal)</li>
  <li><strong>Numeric</strong> &mdash; for example, your ID (TG/2025/0001)</li>
  <li><strong>Audio</strong> &mdash; for example, your voice</li>
  <li><strong>Video</strong> &mdash; for example, your voice and picture together</li>
</ul>

<div class="divider"></div>

<h2>Key Definitions</h2>
<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p><strong>Algorithm</strong> &mdash; a step-by-step procedure which can be applied to data to achieve some goal.</p>
</div>
<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p><strong>Program</strong> &mdash; the implementation of an algorithm.</p>
</div>
<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p><strong>Data Structure</strong> &mdash; the manner in which data is represented in the computer so an algorithm can access and manipulate it easily. In other words, it is the <strong>organization of data</strong> needed to solve a problem.</p>
</div>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>These three definitions &mdash; <strong>Algorithm</strong>, <strong>Program</strong>, and <strong>Data Structure</strong> &mdash; are commonly asked in exams. An algorithm is the plan, a program is the plan written in code, and a data structure is how the data itself is organized.</p>
</div>

<div class="divider"></div>

<h2>What is a Data Structure?</h2>
<ul>
  <li>A particular way of <strong>storing and organizing data</strong> in a computer so it can be used <strong>efficiently and effectively</strong>.</li>
  <li>A data structure is the <strong>logical or mathematical model</strong> of a particular way of organizing data.</li>
  <li>It is a group of data elements grouped together under one name &mdash; for example, an <strong>array of integers</strong>.</li>
</ul>

<h2>Types of Data Structures</h2>
<p>There are many kinds of data structures. Some of the most common ones you will study in this course are:</p>
<ul>
  <li><strong>Array</strong></li>
  <li><strong>Linked List</strong></li>
  <li><strong>Stack</strong></li>
  <li><strong>Queue</strong></li>
</ul>
<p>Data can also be organized in these shapes:</p>
<ul>
  <li><strong>Matrix</strong> &mdash; data connected in a grid of rows and columns</li>
  <li><strong>Linear list</strong> &mdash; data connected one after another in a straight sequence</li>
  <li><strong>Tree</strong> &mdash; data connected in a branching, parent-child shape</li>
  <li><strong>Graph</strong> &mdash; data connected by links in any pattern, not only top-to-bottom</li>
</ul>
<p>There are many more, but these are the ones you'll learn in detail in this course.</p>

<div class="divider"></div>

<h2>Data Structures Hierarchy</h2>
<p>Data structures can be divided into two big groups: <strong>Primitive</strong> (built-in) and <strong>Non-Primitive</strong> (user defined).</p>
<pre><code>                              Data Structures
                                     |
            -------------------------------------------------
            |                                                |
      (Primitive DS)                                  (Non-Primitive DS)
  Built-in Data Structures                      User Defined Data Structures
            |                                                |
  --------------------------                 --------------------------------
  |      |        |        |                 |            |                 |
Integer Float Character  Pointer           Arrays        Lists              Files
                                                            |
                                              -----------------------------
                                              |                           |
                                        Linear Lists                Non-Linear Lists
                                              |                           |
                                       ---------------             -----------------
                                       |             |             |               |
                                    Stacks         Queues        Trees           Graphs</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Primitive data structures = built-in types (<code>Integer</code>, <code>Float</code>, <code>Character</code>, <code>Pointer</code>). Non-Primitive = user defined (<code>Arrays</code>, <code>Lists</code>, <code>Files</code>), where <strong>Lists</strong> split further into <strong>Linear Lists</strong> (Stacks, Queues) and <strong>Non-Linear Lists</strong> (Trees, Graphs).</p>
</div>

<div class="divider"></div>

<h2>Basic Characteristics of Data Structures</h2>
<pre><code>Characteristic    | Description
------------------|--------------------------------------------------------------
Linear            | Data items are arranged in a linear sequence. Example: Array
Non-Linear        | Data items are not arranged in sequence. Example: Tree, Graph
Homogeneous       | All elements are of the same type. Example: Array
Non-Homogeneous   | Elements may or may not be of the same type. Example: Structures
Static            | Size and memory locations are fixed at compile time. Example: Array
Dynamic           | Expands or shrinks based on program need; memory locations change.
                  | Example: Linked List created using pointers</code></pre>

<div class="divider"></div>

<h2>The Need for Data Structures</h2>
<ul>
  <li><strong>Goal</strong> &mdash; to organize data</li>
  <li><strong>Criteria</strong> &mdash; to make storage, retrieval, and manipulation of data efficient</li>
  <li><strong>Design Issue</strong> &mdash; select and design the right data types (this is the main reason we learn data structures)</li>
</ul>

<h2>Data Structure Operations</h2>
<ul>
  <li><strong>Traversing</strong> &mdash; accessing each data element exactly once so certain items can be processed</li>
  <li><strong>Searching</strong> &mdash; finding the location of a data element (the key) in the structure</li>
  <li><strong>Insertion</strong> &mdash; adding a new data element to the structure</li>
  <li><strong>Deletion</strong> &mdash; removing a data element from the structure</li>
  <li><strong>Sorting</strong> &mdash; arranging data elements in a logical order (ascending/descending)</li>
  <li><strong>Merging</strong> &mdash; combining data elements from two or more data structures into one</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Six operations to memorize: <strong>Traversing, Searching, Insertion, Deletion, Sorting, Merging</strong>.</p>
</div>

<div class="divider"></div>

<h2>What Are Data Structures and Algorithms Good For?</h2>
<ul>
  <li><strong>Real-world data storage</strong> &mdash; for example, keeping the details of a set of people</li>
  <li><strong>Programmer's tools</strong> &mdash; data structures meant for the program's own internal use, such as stacks and queues</li>
  <li><strong>Real-world modelling</strong> &mdash; using structures such as graphs and queues to model real-world situations</li>
</ul>

<div class="divider"></div>

<h2>Overall Picture: Design vs Implementation Goals</h2>
<p>When designing data structures and algorithms, we aim for two different sets of goals.</p>
<h3>Design Goals</h3>
<ul>
  <li><strong>Correctness</strong></li>
  <li><strong>Efficiency</strong></li>
</ul>
<h3>Implementation Goals</h3>
<ul>
  <li><strong>Robustness</strong></li>
  <li><strong>Adaptability</strong></li>
  <li><strong>Reusability</strong></li>
</ul>

<div class="divider"></div>

<h2>Data Structure Advantages and Disadvantages</h2>
<pre><code>Data Structure  | Advantages                                              | Disadvantages
----------------|----------------------------------------------------------|-------------------------------------
Array           | Quick insertion; very fast access if index is known       | Slow search, slow deletion, fixed size
Ordered array   | Quicker search than an unsorted array                     | Slow insertion and deletion, fixed size
Stack           | Provides last-in, first-out (LIFO) access                 | Slow access to other items
Queue           | Provides first-in, first-out (FIFO) access                | Slow access to other items
Linked List     | Quick insertion, quick deletion                           | Slow search
Binary Tree     | Quick search, insertion, deletion (if tree stays balanced) | Deletion algorithm is complex</code></pre>

<div class="divider"></div>

<h2>What is an Abstract Data Type (ADT)?</h2>
<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>An <strong>Abstract Data Type (ADT)</strong> is a collection of data and a set of operations on that data. It is a mathematical model of the data objects that make up a data type, along with the functions that operate on those objects &mdash; the data and operations are defined <strong>without regard to how they will be implemented</strong>.</p>
</div>
<p>In other words, with an ADT we only care about <strong>what</strong> the data represents, not <strong>how</strong> it will eventually be built (implemented).</p>

<pre><code>              User
               |
               v
        +-----------------+
        |    Interface     |   &lt;- operations specified by the ADT
        |  +-----------+   |
        |  |   Impl.   |   |   &lt;- hidden one level deeper
        |  +-----------+   |
        +-----------------+</code></pre>

<ul>
  <li>The user interacts with the <strong>Interface</strong>, using the operations specified by the ADT.</li>
  <li>The Interface is the "shell" the user interacts with; the <strong>Implementation</strong> is hidden one level deeper.</li>
  <li>The user is not concerned with implementation details.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>The implementation of an abstract data type is often referred to as a <strong>data structure</strong>.</p>
</div>

<div class="divider"></div>

<h2>Data Structures vs. Algorithms</h2>
<ul>
  <li><strong>Data Structures</strong> &mdash; represent objects of the Abstract Data Type</li>
  <li><strong>Algorithms</strong> &mdash; manipulate the data structures to implement the operations of the ADT</li>
</ul>
<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Data structures and algorithms are <strong>patterns for solving problems</strong>.</p>
</div>

<h2>Why Do We Need Data Structures?</h2>
<ul>
  <li>They help achieve an important object-oriented programming goal: <strong>component reuse</strong>.</li>
  <li>Once a data structure is implemented, it can be used over and over again in different applications.</li>
  <li>A data structure is a particular way of storing and organizing information in a computer so it can be retrieved and used most productively.</li>
</ul>

<h2>Why Study Data Structures and Algorithms?</h2>
<p>Every program is made up of two things: <strong>data</strong> and <strong>algorithms</strong>. We learn data structures because giving structure to our data makes the algorithms that work on it <strong>simpler, easier to maintain, and often faster</strong>.</p>

<div class="divider"></div>

<h2>Lab Practice: Lab Assignment 1</h2>
<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>This lab revises <strong>Arrays</strong>, <strong>Functions</strong>, <strong>struct</strong>, and <strong>Pointers</strong> in C &mdash; the basic building blocks behind most data structures.</p>
</div>

<h3>1. Arrays &mdash; Reading, Printing, and Summing</h3>
<p>Write the program below, save it as <code>ar1.c</code>, compile, and run it. Then modify it to also calculate and print the <strong>sum</strong> of the numbers. Finally, create a <code>char</code> array to store your name and print it out.</p>
<pre><code>#include &lt;stdio.h&gt;
int main()
{
    const int MAX_SIZE = 10;
    int arr[MAX_SIZE];   // Declares an array of MAX_SIZE
    int i;

    /* Reads size and elements in array */
    printf("Enter %d elements in the array: ", MAX_SIZE);
    for (i = 0; i &lt; MAX_SIZE; i++)
    {
        scanf("%d", &amp;arr[i]);
    }

    /* Prints all elements of array */
    printf("\\nElements in array are: ");
    for (i = 0; i &lt; MAX_SIZE; i++)
    {
        printf("%d, ", arr[i]);
    }
    return 0;
}</code></pre>
<p>Starting point for the modified (summation) version &mdash; continue from here to add a total variable and print it:</p>
<pre><code>#include &lt;stdio.h&gt;
int main()
{
    const int MAX_SIZE = 10;
    int arr[MAX_SIZE];
    int i, N;
    /* ...continue from here: add a variable to hold the running
       total, add each element to it inside the loop, then print
       the total after the loop finishes... */
}</code></pre>

<h3>2. Array of Pointers</h3>
<p>Type the program using an editor, compile, and run it. Observe the output carefully.</p>
<pre><code>#include &lt;stdio.h&gt;
const int MAX = 3;

int main() {
    int var[] = {10, 100, 200};
    int i, *ptr[MAX];

    for (i = 0; i &lt; MAX; i++) {
        ptr[i] = &amp;var[i];  /* assign the address of integer */
    }

    for (i = 0; i &lt; MAX; i++) {
        printf("Value of var[%d] = %d\\n", i, *ptr[i]);
    }
    return 0;
}</code></pre>

<h3>3. Pointers to int, float, and char</h3>
<p>Write a C program that follows these steps:</p>
<ul>
  <li>Declare <code>int</code>, <code>float</code>, and <code>char</code> variables called <code>num</code>, <code>fl</code>, and <code>ch</code></li>
  <li>Declare pointer variables <code>numptr</code>, <code>flptr</code>, and <code>chptr</code> for them</li>
  <li>Assign values <code>154</code>, <code>78.5</code>, and <code>'g'</code> to <code>num</code>, <code>fl</code>, and <code>ch</code></li>
  <li>Assign the address of <code>num</code> to <code>numptr</code>, <code>fl</code> to <code>flptr</code>, and <code>ch</code> to <code>chptr</code></li>
  <li>Print the value of <code>*numptr</code>, <code>numptr</code>, and <code>&amp;numptr</code> (repeat for the other two pointers)</li>
  <li>Add <code>(*chptr)++;</code> and print the value of <code>ch</code> &mdash; then do the same for the other two pointers and print <code>num</code> and <code>fl</code></li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><code>*pointer</code> gives the <strong>value</strong> stored at the address; the plain <code>pointer</code> gives the <strong>address</strong> it holds; <code>&amp;variable</code> gives the <strong>address of</strong> that variable.</p>
</div>

<h3>4. Struct with Array &mdash; Student Records</h3>
<p>Type the following code, save it as <code>student.c</code>, compile, run, and understand how the output relates to the code.</p>
<pre><code>#include &lt;stdio.h&gt;
#define SIZE 3

typedef struct _student {
    char name[50];
    int mark;
} student;

void print_list(student list[]);
void read_list(student list[]);

int main() {
    student list[SIZE];
    read_list(list);
    print_list(list);
    return 0;
}

void read_list(student list[]) {
    int i;
    printf("Please enter the student information:\\n");
    for (i = 0; i &lt; SIZE; i++) {
        printf("Name and the marks: ");
        scanf("%s %d", list[i].name, &amp;list[i].mark);
    }
}

void print_list(student list[]) {
    int i;
    printf("Students' information:\\n");
    for (i = 0; i &lt; SIZE; i++) {
        printf("name: %s, mark: %d\\n", list[i].name, list[i].mark);
    }
}</code></pre>

<h3>5. Pointers with Structures</h3>
<p>Try this code segment and understand how pointers are used with structures.</p>
<pre><code>#include &lt;stdio.h&gt;
typedef struct AA {
    int x;
} AA;

int main() {
    AA structure;
    AA *ptr;

    structure.x = 46;
    ptr = &amp;structure;   // &amp; is needed when dealing with structures

    printf("x is = %d\\n", ptr-&gt;x);
    return 0;
}</code></pre>

<h3>6. Pass by Reference &mdash; Doubling a Value</h3>
<p>Consider the following code sample and analyze the answers.</p>
<pre><code>#include &lt;stdio.h&gt;
void twice(int *val);

int main()
{
    /* &amp; = "Address of...."   * = "Content of....." */
    int x;
    int *y;

    x = 56;
    y = &amp;x;
    twice(&amp;x);

    printf("x value = %d\\n", x);
    printf("y memory address = %p\\n", y);
    printf("and value of y = %d\\n", *y);
}

void twice(int *val)
{
    *val = *val * 2;
}</code></pre>

<h3>7. Pass by Value vs. Pass by Reference</h3>
<p>Write two functions to interchange (swap) two integers &mdash; one passing parameters <strong>by reference</strong> (<code>pchange()</code>), and the other passing parameters <strong>by value</strong> (<code>change()</code>). Call both from <code>main()</code> and compare the results.</p>
<pre><code>void change(int x, int y);
void pchange(int *a, int *b);</code></pre>
<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>A common exam mistake: <code>change()</code> only swaps the <strong>copies</strong> inside the function, so the original values in <code>main()</code> stay unchanged. Only <code>pchange()</code>, which uses pointers, actually changes the originals.</p>
</div>

<h3>8. Struct &mdash; Book Records</h3>
<p>Write a C program to do the following:</p>
<ol>
  <li>Define a <code>struct</code> called <code>book</code> with: <code>title</code>, <code>author</code>, <code>ISBN</code> number, and <code>price</code></li>
  <li>Declare an array to store the details of <strong>10 books</strong></li>
  <li>Input the details of the books from the keyboard</li>
  <li>Write a function to display the titles of books priced <strong>below Rs. 2000.00</strong></li>
  <li>Write a separate function to display the titles and prices of books written by the author <strong>"Kernighan"</strong></li>
</ol>

<h3>9. Struct Pointers &mdash; Dot vs Arrow Notation</h3>
<p>Type the program below, compile, and run it. Observe the output.</p>
<pre><code>#include &lt;stdio.h&gt;
typedef struct person
{
    int age;
    float weight;
};

int main()
{
    struct person *personPtr, person1;
    personPtr = &amp;person1;  // Referencing pointer to memory address of person1

    printf("Enter integer: ");
    scanf("%d", &amp;(*personPtr).age);
    printf("Enter number: ");
    scanf("%f", &amp;(*personPtr).weight);

    printf("Displaying: ");
    printf("%d %f", (*personPtr).age, (*personPtr).weight);
    return 0;
}</code></pre>
<p>Here, the pointer <code>personPtr</code> is referenced to the address of <code>person1</code>, so structure members can only be accessed <strong>through the pointer</strong>.</p>
<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p><code>(*personPtr).age</code> is exactly the same as <code>personPtr->age</code>, and <code>(*personPtr).weight</code> is the same as <code>personPtr->weight</code>. Try modifying the program above to use the <code>-></code> operator instead.</p>
</div>

<h3>10. Struct Pointers with Functions &mdash; Item Billing</h3>
<p>The following program shows a structure pointer being passed into user-defined functions.</p>
<pre><code>#include &lt;stdio.h&gt;

struct item
{
    char itemName[30];
    int qty;
    float price;
    float amount;
};

/* readItem() - to read values of item and calculate total amount */
void readItem(struct item *i)
{
    printf("Enter product name: ");
    gets(i-&gt;itemName);
    printf("Enter price: ");
    scanf("%f", &amp;i-&gt;price);
    printf("Enter quantity: ");
    scanf("%d", &amp;i-&gt;qty);

    /* calculate total amount of all quantity */
    i-&gt;amount = (float)i-&gt;qty * i-&gt;price;
}

/* printItem() - to print values of item */
void printItem(struct item *i)
{
    printf("\\nName: %s", i-&gt;itemName);
    printf("\\nPrice: %f", i-&gt;price);
    printf("\\nQuantity: %d", i-&gt;qty);
    printf("\\nTotal Amount: %f", i-&gt;amount);
}

int main()
{
    struct item itm;      /* declare variable of structure item */
    struct item *pItem;   /* declare pointer of structure item */

    pItem = &amp;itm;   /* pointer assignment - assigning address of itm to pItem */

    readItem(pItem);
    printItem(pItem);
    return 0;
}</code></pre>
<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p><code>gets()</code> is unsafe and removed from modern C standards because it cannot check buffer size. In real projects, use <code>fgets(i->itemName, 30, stdin)</code> instead.</p>
</div>

  `,
  summary: {
    topic: 'Introduction to Data Structures and Algorithms',
    subTopics: [
      'What is Data?',
      'Key Definitions (Algorithm, Program, Data Structure)',
      'What is a Data Structure?',
      'Types of Data Structures',
      'Data Structures Hierarchy',
      'Basic Characteristics of Data Structures',
      'The Need for Data Structures',
      'Data Structure Operations',
      'What Are Data Structures and Algorithms Good For?',
      'Overall Picture: Design vs Implementation Goals',
      'Data Structure Advantages and Disadvantages',
      'What is an Abstract Data Type (ADT)?',
      'Data Structures vs. Algorithms',
      'Why Do We Need Data Structures?',
      'Why Study Data Structures and Algorithms?',
    ],
    definitions: [
      { term: 'Data', meaning: 'A collection of facts from which a conclusion may be drawn, such as textual, numeric, audio, or video facts.' },
      { term: 'Algorithm', meaning: 'A step-by-step procedure that can be applied to data to achieve some goal.' },
      { term: 'Program', meaning: 'The implementation of an algorithm.' },
      { term: 'Data Structure', meaning: 'The way data is represented in a computer so an algorithm can access and manipulate it easily; the organization of data needed to solve a problem.' },
      { term: 'Abstract Data Type (ADT)', meaning: 'A mathematical model of a data object plus the operations allowed on it, defined without regard to how it will be implemented.' },
      { term: 'Linear data structure', meaning: 'Data items are arranged in a sequence, for example an Array.' },
      { term: 'Non-Linear data structure', meaning: 'Data items are not arranged in sequence, for example a Tree or Graph.' },
      { term: 'Homogeneous data structure', meaning: 'All elements are of the same type, for example an Array.' },
      { term: 'Non-Homogeneous data structure', meaning: 'Elements may or may not be of the same type, for example a Structure.' },
      { term: 'Static data structure', meaning: 'Size and memory locations are fixed at compile time, for example an Array.' },
      { term: 'Dynamic data structure', meaning: 'Expands or shrinks depending on program need, with memory locations that change, for example a Linked List.' },
    ],
    keyPoints: [
      'A program is made up of data and algorithms; giving structure to data makes algorithms simpler, easier to maintain, and often faster.',
      'Data structures split into Primitive (built-in: Integer, Float, Character, Pointer) and Non-Primitive (user defined: Arrays, Lists, Files).',
      'Under Lists, Linear Lists split into Stacks and Queues, while Non-Linear Lists split into Trees and Graphs.',
      'There are six standard data structure operations: Traversing, Searching, Insertion, Deletion, Sorting, and Merging.',
      'Design goals are Correctness and Efficiency; Implementation goals are Robustness, Adaptability, and Reusability.',
      'Arrays allow fast access by index but have slow search, slow deletion, and a fixed size.',
      'Linked Lists allow quick insertion and deletion but have slow search.',
      'A Binary Tree allows quick search, insertion, and deletion only if the tree stays balanced; its deletion logic is complex.',
      'An ADT defines what data represents and what operations are allowed on it, while hiding how it is implemented (Interface vs Implementation).',
      'Data Structures represent the objects of an ADT; Algorithms manipulate those structures to carry out the ADT operations.',
      'Data structures matter because they enable component reuse: once built, a data structure can be reused across many applications.',
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