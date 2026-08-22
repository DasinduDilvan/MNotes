// content/ict2113.js

export const courseName = 'Data Structures and Algorithms'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to DSA',
  content: `
<span class="lesson-badge">LESSON 01</span>
<h1>Introduction to DSA</h1>
<div class="meta-info">ICT2113 <span>&bull;</span> 25 min read</div>

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
  title: 'Stacks',
  content: `
    <span class="lesson-badge">LESSON 02</span>
    <h1>Stacks</h1>
    <div class="meta-info">Data Structures &amp; Algorithms <span>•</span> 34 min read</div>

    <p>Before we get into stacks, it helps to understand a bigger idea first: the <strong>Abstract Data Type (ADT)</strong>. A stack is actually one specific example of an ADT, so this idea will make everything else easier to follow.</p>

    <div class="divider"></div>

    <h2>What is an Abstract Data Type (ADT)?</h2>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An <strong>Abstract Data Type (ADT)</strong> is a collection of data together with a set of operations that work on that data. It is a mathematical model of the data objects and the functions that operate on them — without worrying about how it is actually built.</p>
    </div>

    <p>In simple words, an ADT only cares about <strong>what</strong> the data represents and <strong>what</strong> you can do with it. It does not care about <strong>how</strong> it will eventually be constructed (implemented).</p>

    <h3>How an ADT Works</h3>
    <ul>
      <li>The <strong>user</strong> interacts only with the <strong>interface</strong> — the operations the ADT has specified.</li>
      <li>The ADT is like a <strong>shell</strong> that the user sees and interacts with.</li>
      <li>The actual <strong>implementation</strong> is hidden one level deeper, inside that shell.</li>
      <li>The user is not concerned with the details of the implementation.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The implementation of an abstract data type is often referred to as a <strong>data structure</strong>.</p>
    </div>

    <div class="divider"></div>

    <h3>Primitive vs Abstract Data Structures</h3>

    <p><strong>Integer, Float, Boolean,</strong> and <strong>Char</strong> are all data structures too — but they are called <strong>Primitive Data Structures</strong>.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Example</span>
      <p><strong>Integer</strong> — Describes a data type that stores numerical values. Its operations include addition, subtraction, division, and so on. How Integer is implemented internally is not something we usually worry about.</p>
    </div>

    <p>On the other hand, structures like <strong>Linked List, Tree, Graph, Stack,</strong> and <strong>Queue</strong> are called <strong>Abstract Data Structures</strong>. They give an implementation-independent view of data — you can use them without knowing exactly how they work inside.</p>

    <div class="divider"></div>

    <h2>Introduction to Stacks</h2>

    <p>Think about a stack of donuts, a stack of pancakes, a pile of coins, or a stack of plates. What do they all have in common? You can only add or remove items from the <strong>top</strong>.</p>

    <p>A <strong>stack</strong> data structure behaves exactly the same way. It only allows you to access <strong>one data item</strong> at a time — the last item that was inserted. Once you remove that item, you can then access the next-to-last item, and so on.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>stack</strong> is a linear data structure that can be accessed only at one of its ends (called the <strong>top</strong> of the stack) for storing and retrieving data. It behaves very much like a stack of plates or a stack of newspapers. A stack is a constantly changing object.</p>
    </div>

    <p>Stacks are not just a programming concept — most <strong>microprocessors</strong> use a stack-based architecture too. When a method is called, its return address and arguments are pushed onto a stack. When it returns, they're popped off. These stack operations are actually built into the microprocessor itself.</p>

    <div class="divider"></div>

    <h2>How Stacks Work: The LIFO Principle</h2>

    <p>A <strong>stack</strong> is a data structure — a list of data elements — where all <strong>insertions</strong> and <strong>deletions</strong> happen at just <strong>one end</strong>. This end is called the <strong>TOP</strong> (also referred to as the beginning) of the stack.</p>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Insertions and deletions are <strong>restricted</strong> from the middle and the end (bottom) of a stack — they can only happen at the top.</p>
    </div>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Elements are inserted and removed according to the <strong>Last-In-First-Out (LIFO)</strong> principle. This means the <strong>last element inserted is the first one to be removed</strong>.</p>
    </div>

    <p>When we add an item to a stack, we say we <strong>PUSH</strong> it onto the stack. When we remove an item, we say we <strong>POP</strong> it from the stack. At any point, only the most recently inserted ("last") element can be removed.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Fun Fact</span>
      <p>The name <strong>"STACK"</strong> comes from the spring-loaded, cafeteria plate dispenser.</p>
    </div>

    <p>Real examples of stacks in software:</p>
    <ul>
      <li>Internet web browsers storing the addresses of recently visited sites.</li>
      <li>A text editor's <strong>"undo"</strong> function.</li>
    </ul>

    <div class="divider"></div>

    <h2>Implementing a Stack (Array Basics)</h2>

    <p>One common way to implement a stack is with an <strong>array</strong>. But even though it's built on an array, a stack <strong>restricts access</strong> — you cannot access it the way you would access a normal array.</p>

    <p>A stack built this way needs three fields:</p>
    <ul>
      <li>A variable to hold the <strong>maximum size</strong> of the array.</li>
      <li>The <strong>array</strong> itself, to hold the data.</li>
      <li>A variable called <strong>top</strong>, which holds the index of the top element of the stack.</li>
    </ul>

    <h3>Pushing an Item</h3>
    <p>To push a new item, we move the <strong>top</strong> pointer one step further and place the new item there. For example, pushing <code>49</code> onto a stack that already holds <code>27, 14, 3, 92, 64</code> places <code>49</code> above <code>27</code>, and <strong>top</strong> now points to <code>49</code>.</p>

    <h3>Popping an Item (Pop)</h3>
    <p>When removing an item, you can only remove the item currently at the <strong>top</strong> of the stack.</p>
    <ol>
      <li>First, check if the stack is <strong>empty</strong>.</li>
      <li>If it is not empty, return the element at the top.</li>
      <li>Decrement <strong>top</strong> by 1.</li>
    </ol>

    <div class="divider"></div>

    <h2>Stack ADT Specification</h2>

    <p>Like any ADT, a stack has definitions that the user provides, and a fixed set of operations.</p>

    <h3>Definitions (provided by the user)</h3>
    <ul>
      <li><strong>MAX_ITEMS</strong> — the maximum number of items that might be on the stack.</li>
      <li><strong>ItemType</strong> — the data type of the items on the stack.</li>
    </ul>

    <h3>Operations</h3>
    <ul>
      <li><strong>MakeEmpty</strong></li>
      <li><strong>Boolean IsEmpty</strong></li>
      <li><strong>Boolean IsFull</strong></li>
      <li><strong>Push(ItemType newItem)</strong></li>
      <li><strong>Pop(ItemType&amp; item)</strong></li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Push(ItemType newItem)</span>
      <p><strong>Function:</strong> Adds <code>newItem</code> to the top of the stack.<br>
      <strong>Precondition:</strong> The stack has been initialized and is not full.<br>
      <strong>Postcondition:</strong> <code>newItem</code> is now at the top of the stack.</p>
    </div>

    <div class="callout callout-blue">
      <span class="callout-label">Pop(ItemType&amp; item)</span>
      <p><strong>Function:</strong> Removes the top item from the stack and returns it in <code>item</code>.<br>
      <strong>Precondition:</strong> The stack has been initialized and is not empty.<br>
      <strong>Postcondition:</strong> The top element has been removed, and <code>item</code> is a copy of the removed element.</p>
    </div>

    <div class="divider"></div>

    <h2>Example: Tracing Push and Pop Operations</h2>

    <p>Let's trace a sequence of operations on an empty stack to see exactly how <strong>top</strong> changes at each step.</p>

    <pre><code>Operation        top   Stack contents (index : value)
Initial (empty)  -1    —
stack.Push(2)     0    [0]=2
stack.Push(3)     1    [0]=2  [1]=3
stack.Push(5)     2    [0]=2  [1]=3  [2]=5
stack.Pop(x)      1    x = 5   (top now points at index 1)
stack.Pop(x)      0    x = 3   (top now points at index 0)
stack.Push(10)    1    [0]=2  [1]=10  [2]=5 (old 5 still sits in memory)</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Popping does not "erase" the old value in the array — it simply moves the <strong>top</strong> pointer down. The old value just gets overwritten the next time something is pushed into that slot.</p>
    </div>

    <div class="divider"></div>

    <h2>Stack Representation – Functions and Algorithms</h2>

    <p>Any working stack implementation needs to support these core functions:</p>
    <ul>
      <li><strong>Initialization</strong> of the stack.</li>
      <li><strong>Insertion</strong> into the stack (push operation).</li>
      <li><strong>Deletion</strong> from the stack (pop operation).</li>
      <li><strong>Check fullness</strong> of the stack.</li>
      <li><strong>Check emptiness</strong> of the stack.</li>
    </ul>

    <div class="divider"></div>

    <h2>Ways to Implement a Stack</h2>

    <p>There are at least three different ways to implement a stack:</p>
    <ol>
      <li><strong>Array</strong></li>
      <li><strong>Vector</strong></li>
      <li><strong>Linked List</strong></li>
    </ol>

    <p>Which method to use depends on the application — you need to weigh the advantages and disadvantages of each.</p>

    <h3>Array Implementation</h3>
    <ul>
      <li><strong>Advantage:</strong> best performance.</li>
      <li><strong>Disadvantage:</strong> fixed size.</li>
    </ul>
    <p><strong>Basic implementation:</strong></p>
    <ul>
      <li>Start with an initially empty array.</li>
      <li>Keep a field that records where the next piece of data should be placed.</li>
      <li>If the array is full, <code>push()</code> returns <strong>false</strong>.</li>
      <li>Otherwise, the item is added into the correct spot.</li>
      <li>If the array is empty, <code>pop()</code> returns <strong>null</strong>.</li>
      <li>Otherwise, it removes the next item in the stack.</li>
    </ul>

    <h3>Linked List Implementation</h3>
    <ul>
      <li><strong>Advantages:</strong> always constant time to push or pop an element; can grow to an infinite size.</li>
      <li><strong>Disadvantage:</strong> the common case is the slowest of all the implementations.</li>
    </ul>
    <p><strong>Basic implementation:</strong></p>
    <ul>
      <li>The list starts out empty.</li>
      <li>The <code>push()</code> method adds a new item to the <strong>head</strong> of the list.</li>
      <li>The <code>pop()</code> method removes the <strong>head</strong> of the list.</li>
    </ul>

    <div class="divider"></div>

    <h2>Stack ADT Operations (Revisited)</h2>

    <p>A stack is an object — more specifically, an <strong>Abstract Data Structure (ADT)</strong> — that supports these operations:</p>
    <ul>
      <li><strong>Push</strong> — add an element to the top of the stack.</li>
      <li><strong>Pop</strong> — remove an element from the top of the stack.</li>
      <li><strong>IsEmpty</strong> — check if the stack is empty.</li>
      <li><strong>IsFull</strong> — check if the stack is full.</li>
      <li><strong>Peek</strong> — get the value of the top element <strong>without</strong> removing it.</li>
    </ul>

    <div class="divider"></div>

    <h2>How the Stack Works: The TOP Pointer</h2>

    <ul>
      <li>A pointer called <strong>TOP</strong> is used to keep track of the top element in the stack.</li>
      <li>When we initialize the stack, we set <strong>TOP = -1</strong>, so we can check for an empty stack by comparing <code>TOP == -1</code>.</li>
      <li>When we <strong>push</strong> an element, we increase the value of TOP, then place the new element in the position TOP now points to.</li>
      <li>When we <strong>pop</strong> an element, we return the element pointed to by TOP, then reduce its value.</li>
      <li>Before pushing, we always check if the stack is already <strong>full</strong>.</li>
      <li>Before popping, we always check if the stack is already <strong>empty</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Stack Algorithms (Pseudocode)</h2>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>In this set of algorithms, stack element indices start from <strong>1</strong> and go up to <strong>MAX</strong>. TOP is still initialized to <strong>-1</strong> to represent an empty stack.</p>
    </div>

    <h3>Initializing the Stack</h3>
    <pre><code>INIT_STACK (STACK, TOP)
  Algorithm to initialize a stack using an array.
  TOP points to the top-most element of the stack.
  1) TOP := -1
  2) Exit</code></pre>

    <h3>Push Operation</h3>
    <p>Used to insert an element into the stack.</p>
    <pre><code>PUSH (STACK, TOP, MAX, ITEM)
  1) IF TOP = MAX THEN
        Print "Stack is full"
        Exit
  2) ELSE
        TOP := TOP + 1        // increment TOP
        STACK(TOP) := ITEM
  3) END IF
  4) Exit</code></pre>

    <h3>Pop Operation</h3>
    <p>Used to remove an item from the stack — first read the element, then decrease the TOP pointer.</p>
    <pre><code>POP_STACK (STACK, TOP, ITEM)
  1) IF TOP = -1 THEN
        Print "Stack is empty"
        Exit
  2) ELSE
        ITEM := STACK(TOP)
        TOP := TOP - 1
  3) END IF
  4) Exit</code></pre>

    <h3>Checking If the Stack Is Full</h3>
    <pre><code>IS_FULL (STACK, TOP, MAX, STATUS)
  1) IF TOP = MAX THEN
        STATUS := true
  2) ELSE
        STATUS := false
  3) END IF
  4) Exit</code></pre>

    <h3>Checking If the Stack Is Empty</h3>
    <pre><code>IS_EMPTY (STACK, TOP, MAX, STATUS)
  1) IF TOP = -1 THEN
        STATUS := true
  2) ELSE
        STATUS := false
  3) END IF
  4) Exit</code></pre>

    <div class="divider"></div>

    <h2>Visual Representation of a Stack (Worked Example)</h2>

    <p>Consider a stack with the following details:</p>

    <pre><code>Field                              Value
Size of the Stack                  6
Maximum value of Stack Top         5
Minimum value of Stack Top         0
Value of Top when Stack is Empty   -1
Value of Top when Stack is Full    5</code></pre>

    <h3>View 1: When the Stack Is Empty</h3>
    <p>An empty stack has no elements inside it. Whenever the stack is empty, the position of the topmost element is <strong>-1</strong>.</p>

    <h3>View 2: When the Stack Is Not Empty</h3>
    <p>Whenever we add the very first element, the topmost position is incremented by 1. After adding the first element, <strong>top = 0</strong>.</p>

    <h3>View 3: After Deleting One Element</h3>
    <p>Top is decremented by 1 after every deletion.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Position of TOP and the status of the stack:</p>
    </div>

    <pre><code>Position of TOP      Status of the Stack
-1                    Stack is empty
0                     First element has just been added
N-1                   Stack is full
N                     Stack has overflowed</code></pre>

    <pre><code>Operation           Explanation
top = -1            Indicates an empty stack
top = top + 1       After a push, top is incremented by 1
top = top - 1       After a pop, top is decremented by 1</code></pre>

    <div class="divider"></div>

    <h2>Uses of Stacks</h2>

    <ul>
      <li>Converting a sequence of numeric characters into the equivalent integer.</li>
      <li>Reversing character strings.</li>
      <li>Evaluating arithmetic expressions.</li>
      <li>Implementing recursion.</li>
    </ul>

    <h3>A Few Real Examples</h3>
    <ul>
      <li><strong>Reversing a word</strong> — Put all the letters in a stack and pop them out one by one. Because of the stack's LIFO order, the letters come out in reverse order.</li>
      <li><strong>Compilers</strong> — Compilers use a stack to calculate the value of expressions like <code>2 + 4 / 5 * (7 - 9)</code>, by converting the expression into prefix or postfix form first.</li>
      <li><strong>Browsers</strong> — The back button in a browser saves all the URLs you've visited in a stack. Every new page is added on top. Pressing back removes the current URL from the stack and takes you to the previous one.</li>
    </ul>

    <div class="divider"></div>

    <h2>Infix, Prefix, and Postfix Expressions</h2>

    <p>Take the arithmetic expression <code>B * C</code>. The way it's written already tells you how to interpret it — here, <strong>B</strong> is being multiplied by <strong>C</strong>, because the multiplication operator <code>*</code> sits between them.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>This style, where the operator sits <strong>between</strong> the two operands it works on, is called <strong>infix</strong> notation — the notation we normally use in everyday math.</p>
    </div>

    <pre><code>Infix Expression      Prefix Expression      Postfix Expression
A + B                 + A B                  A B +
A + B * C             + A * B C              A B C * +</code></pre>

    <div class="divider"></div>

    <h2>Operator Precedence</h2>

    <p>Look at the expression <code>A + B * C</code>. Both <code>+</code> and <code>*</code> sit between operands, but which goes first — does <code>+</code> work on A and B, or does <code>*</code> take B and C? On its own, this looks ambiguous.</p>

    <p>To solve this, each operator is given a <strong>precedence level</strong>.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <ul>
        <li>Operators with <strong>higher precedence</strong> are applied before operators with lower precedence.</li>
        <li><strong>Parentheses</strong> are the only thing that can override this order.</li>
        <li>If two operators have <strong>equal precedence</strong>, they are evaluated left-to-right (this is called associativity).</li>
      </ul>
    </div>

    <pre><code>Order of Precedence (highest to lowest)
Exponentiation             ^
Multiplication / Division  *, /
Addition / Subtraction     +, -</code></pre>

    <p>When converting an infix expression to a fully parenthesized form, the operands with the <strong>higher precedence</strong> operator are grouped in parentheses first. If the same precedence appears more than once, the leftmost one is grouped first — except for exponentiation, which groups from <strong>right to left</strong>.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Example</span>
      <p><code>A + B + C</code> is grouped as <code>(A + B) + C</code>.</p>
    </div>

    <div class="divider"></div>

    <h2>Expression Evaluation Examples</h2>

    <p>Here's a worked example converting <code>A * B + C/D</code> into postfix, step by step:</p>

    <pre><code>A * B + C/D
= (A * B) + (C/D)
= (AB*) + (CD/)
= AB*CD/+</code></pre>

    <p>A few more examples of infix expressions and their equivalent prefix and postfix forms:</p>

    <pre><code>Infix Expression          Prefix Expression        Postfix Expression
A + B * C + D             + + A * B C D             A B C * + D +
(A + B) * (C + D)         * + A B + C D              A B + C D + *
A * B + C * D             + * A B * C D              A B * C D * +
A + B + C + D             + + + A B C D              A B + C + D +</code></pre>

    <div class="divider"></div>

    <h2>Evaluating Postfix Expressions Using a Stack</h2>

    <p>A stack makes it easy to evaluate an expression by scanning it from <strong>left to right</strong>:</p>
    <ol>
      <li>When you see an <strong>operand</strong>, push it onto the stack.</li>
      <li>When you see an <strong>operator</strong>, pop two operands off the stack, apply the operator, then push the result back on.</li>
    </ol>

    <p>Let's evaluate the postfix expression <code>1 2 4 * + 3 +</code>:</p>

    <pre><code>Input   Operation          Stack (after operation)
1       Push operand       1
2       Push operand       2, 1
4       Push operand       4, 2, 1
*       Multiply           8, 1
+       Add                9
3       Push operand       3, 9
+       Add                12</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The final result, <strong>12</strong>, is left sitting on the top of the stack once the whole expression has been processed.</p>
    </div>
  `,
  summary: {
    topic: 'Stacks: A Linear Data Structure Based on LIFO',
    subTopics: [
      'What is an Abstract Data Type (ADT)?',
      'Primitive vs Abstract Data Structures',
      'Introduction to Stacks',
      'How Stacks Work: The LIFO Principle',
      'Implementing a Stack (Array Basics)',
      'Stack ADT Specification',
      'Example: Tracing Push and Pop Operations',
      'Stack Representation – Functions and Algorithms',
      'Ways to Implement a Stack (Array vs Linked List)',
      'Stack ADT Operations (Revisited)',
      'How the Stack Works: The TOP Pointer',
      'Stack Algorithms (Pseudocode)',
      'Visual Representation of a Stack (Worked Example)',
      'Uses of Stacks',
      'Infix, Prefix, and Postfix Expressions',
      'Operator Precedence',
      'Expression Evaluation Examples',
      'Evaluating Postfix Expressions Using a Stack',
    ],
    definitions: [
      { term: 'Abstract Data Type (ADT)', meaning: 'A collection of data and a set of operations on that data, defined by what it does rather than how it is implemented.' },
      { term: 'Data Structure', meaning: 'The actual implementation of an abstract data type.' },
      { term: 'Primitive Data Structure', meaning: 'A basic data type built into a language, such as Integer, Float, Boolean, or Char.' },
      { term: 'Abstract Data Structure', meaning: 'A structure like Linked List, Tree, Graph, Stack, or Queue that gives an implementation-independent view of data.' },
      { term: 'Stack', meaning: 'A linear data structure where insertions and deletions can only happen at one end, called the top.' },
      { term: 'LIFO (Last-In-First-Out)', meaning: 'The rule that the last element inserted into a stack is the first one removed.' },
      { term: 'Push', meaning: 'The operation of adding a new item to the top of the stack.' },
      { term: 'Pop', meaning: 'The operation of removing the item currently at the top of the stack.' },
      { term: 'TOP', meaning: 'A pointer or variable that tracks the index of the topmost element in the stack; it is set to -1 when the stack is empty.' },
      { term: 'Peek', meaning: 'An operation that returns the value of the top element of the stack without removing it.' },
      { term: 'Overflow', meaning: 'The condition where an attempt is made to push an item onto a stack that is already full.' },
      { term: 'Infix Expression', meaning: 'An expression where the operator is written between its two operands, for example A + B.' },
      { term: 'Prefix Expression', meaning: 'An expression where the operator is written before its operands, for example + A B.' },
      { term: 'Postfix Expression', meaning: 'An expression where the operator is written after its operands, for example A B +.' },
      { term: 'Operator Precedence', meaning: 'The priority order that decides which operator is applied first in an expression, such as multiplication before addition.' },
    ],
    keyPoints: [
      'An Abstract Data Type (ADT) defines what data represents and what operations it supports, not how it is implemented; the implementation is called a data structure.',
      'A stack allows insertions and deletions only at one end, called the TOP, never in the middle or at the bottom.',
      'Stacks follow the Last-In-First-Out (LIFO) principle: the last element added is the first one removed.',
      'Push adds an item to the top of the stack; Pop removes and returns the item at the top.',
      'TOP is initialized to -1 to represent an empty stack; TOP increases on push and decreases on pop.',
      'Always check IsFull before pushing and IsEmpty before popping to avoid overflow or errors.',
      'A stack can be implemented using an array, a vector, or a linked list.',
      'Array-based stacks give the best performance but have a fixed size; linked-list-based stacks can grow indefinitely and always push or pop in constant time, but are generally slower overall.',
      'Peek returns the value of the top element without removing it.',
      'Common real-world uses of stacks include reversing strings, evaluating arithmetic expressions, implementing recursion, undo functions, and browser back-button history.',
      'Infix notation places the operator between operands (A + B); prefix places it before (+ A B); postfix places it after (A B +).',
      'Operator precedence order from highest to lowest is: Exponentiation, Multiplication/Division, Addition/Subtraction; parentheses override this order.',
      'Postfix expressions can be evaluated with a stack: push operands, and on seeing an operator, pop two operands, compute the result, and push it back onto the stack.',
    ],
  },
},


{
  id: 3,
  title: 'Queues',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Queues</h1>
    <div class="meta-info">ICT2113 <span>•</span> 15 min read</div>

    <p>A <strong>Queue</strong> is a linear data structure that is similar to a Stack, but it works in the opposite order. In a Queue, the <strong>first item inserted is the first item to be removed</strong>. This rule is called <strong>FIFO (First-In-First-Out)</strong>.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>Stack</strong> follows <strong>LIFO (Last-In-First-Out)</strong> — the last item inserted is the first one removed. A <strong>Queue</strong> follows <strong>FIFO</strong> — the first item inserted is the first one removed.</p>
    </div>

    <p>Queues are working quietly behind the scenes inside a computer's operating system. Some common examples are:</p>
    <ul>
      <li><strong>Printer queue</strong> — holds print jobs in the order they were sent</li>
      <li><strong>Keystroke queue</strong> — stores the keys you press on the keyboard, in order</li>
      <li><strong>Pipeline</strong> — passes data between processes in sequence</li>
    </ul>

    <div class="divider"></div>

    <h2>What Does a Queue Do?</h2>
    <ul>
      <li>Stores a set of elements in a particular order</li>
      <li>Follows the <strong>FIFO</strong> principle — First In, First Out</li>
      <li>Insertions happen at the <strong>rear</strong> end</li>
      <li>Deletions happen at the <strong>front</strong> end</li>
      <li>Elements can only be <strong>accessed from the front</strong></li>
      <li>Insertion and deletion in the <strong>middle</strong> of the queue is not allowed</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Queue rule: elements are inserted and removed strictly according to the <strong>First-In-First-Out (FIFO)</strong> principle.</p>
    </div>

    <h3>Real-Life FIFO Examples</h3>
    <p>Think of a queue like standing in line at a bank or a bus stop:</p>
    <ul>
      <li>The <strong>first</strong> person in line at the bank is the <strong>first</strong> to be served by the next available teller</li>
      <li>The <strong>first</strong> person in line at the bus stop is the <strong>first</strong> to get on the bus</li>
    </ul>

    <div class="divider"></div>

    <h2>Queue Operations</h2>
    <p>These are the standard operations every queue supports:</p>

    <pre><code>Operation    | Description
-------------|-------------------------------------------------
enqueue      | Adds an element to the rear of the queue
dequeue      | Removes an element from the front of the queue
First (peek) | Examines the element at the front of the queue
isEmpty      | Determines whether the queue is empty
size         | Determines the number of elements in the queue
toString     | Returns a string representation of the queue</code></pre>

    <div class="divider"></div>

    <h2>Real-World Examples of Queues</h2>
    <p>In the real world, a queue is simply a <strong>waiting line</strong>. For example:</p>
    <ul>
      <li>At grocery stores</li>
      <li>At banks</li>
      <li>Aeroplanes waiting at airports</li>
      <li>Internet data packets</li>
    </ul>

    <p>Inside computer systems:</p>
    <ul>
      <li><strong>Job Queue</strong> — in multi-user systems, processes wait in a queue for their turn on the CPU</li>
      <li><strong>Print Queue</strong> — one printer is often shared by several machines, so print jobs wait in a queue</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>The number of elements currently in a queue is equal to:</p>
      <pre><code>rear - front + 1</code></pre>
    </div>

    <h3>Real-World Applications of Queue Data Structures</h3>
    <ul>
      <li>Computer simulation programs</li>
      <li>Printer spooling (Simultaneous Peripheral Operations Online)</li>
      <li>Computer and video games</li>
      <li>Processor scheduling algorithms</li>
      <li>Queue of packets in data communication</li>
    </ul>

    <div class="divider"></div>

    <h2>Types of Queues</h2>
    <ul>
      <li><strong>Normal Queue (FIFO)</strong> — the basic linear queue</li>
      <li><strong>Circular Queue</strong> — a normal queue that wraps around itself</li>
      <li><strong>Double-Ended Queue (Deque)</strong> — insertion and deletion allowed at both ends</li>
      <li><strong>Priority Queue</strong> — elements are removed based on priority, not just order</li>
    </ul>

    <div class="divider"></div>

    <h2>Front and Rear of a Queue</h2>
    <p>Every queue has a <strong>front</strong> and a <strong>rear</strong>. Items are deleted from the front and inserted at the rear.</p>

    <pre><code>Front                                   Rear
  ↓                                       ↓
[    ][    ][    ][    ][    ][    ][    ]
  ↑                                       ↑
Remove                                 Insert</code></pre>

    <ul>
      <li><strong>enqueue</strong> — insert an element at the rear of the queue</li>
      <li><strong>dequeue</strong> — remove an element from the front of the queue</li>
    </ul>

    <div class="divider"></div>

    <h2>How Enqueue and Dequeue Work</h2>
    <p>Suppose we have an empty, static integer queue that can hold a maximum of <strong>three</strong> values. Let's trace through some operations.</p>

    <h3>Enqueue Example</h3>
    <pre><code>Enqueue(3):   Front→[ 3][  ][  ]←Rear (index 0)
Enqueue(6):   Front→[ 3][ 6][  ]      Rear→(index 1)
Enqueue(9):   Front→[ 3][ 6][ 9]              Rear→(index 2)</code></pre>

    <h3>Dequeue Example</h3>
    <pre><code>Dequeue():   [ 6][ 9][  ]  Front→index1  Rear→index2
Dequeue():   [ 9][  ][  ]  Front = Rear = index 2
Dequeue():   [  ][  ][  ]  Front = -1   Rear = -1 (queue is empty)</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>For an <strong>empty queue</strong>, <code>rear</code> must be initialized to <code>front - 1</code>. So the standard starting values are <code>front = -1</code>, <code>rear = -1</code>, and <code>size = 0</code>.</p>
    </div>

    <div class="divider"></div>

    <h2>Full Trace Example</h2>
    <p>Here is a longer trace of enqueue and dequeue operations, and what each one returns:</p>

    <pre><code>Operation      Output    Queue contents (front → rear)
enqueue(5)     -         5
enqueue(3)     -         5 3
dequeue()      5         3
enqueue(7)     -         3 7
dequeue()      3         7
front()        7         7
dequeue()      7         (empty)
dequeue()      "error"   (empty)
isEmpty()      true      (empty)
enqueue(9)     -         9
enqueue(7)     -         9 7
size()         2         9 7
enqueue(3)     -         9 7 3
enqueue(5)     -         9 7 3 5
dequeue()      9         7 3 5</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Calling <code>dequeue()</code> on an empty queue produces an <strong>underflow error</strong> — it does not silently return nothing.</p>
    </div>

    <div class="divider"></div>

    <h2>Implementing a Queue with an Array</h2>
    <p>A queue implementation is usually based on an <strong>array with restricted access</strong>. The array is accessed the same way a real queue would be: new elements are inserted at the back, and elements are removed from the front.</p>

    <h2>Queue Algorithms</h2>

    <h3>peek() — look at the front element</h3>
    <p>Gets the element at the front of the queue <strong>without removing it</strong>.</p>
    <pre><code>procedure peek
   return queue[front]
end procedure</code></pre>

    <h3>isFull()</h3>
    <p>Since a single-dimension array is used to implement the queue, we just check whether the <code>rear</code> pointer has reached <code>MAXSIZE</code>.</p>
    <pre><code>procedure isfull
   if rear equals to MAXSIZE - 1
      return true
   else
      return false
   endif
end procedure</code></pre>

    <h3>isEmpty()</h3>
    <pre><code>procedure isempty
   if front is less than MIN OR front is greater than rear
      return true
   else
      return false
   endif
end procedure</code></pre>

    <h3>enqueue(data) — insert an element</h3>
    <ol>
      <li>Check if the queue is full</li>
      <li>If full, produce an <strong>overflow error</strong> and exit</li>
      <li>If not full, increment the <code>rear</code> pointer to the next empty space</li>
      <li>Add the data element to the queue location where <code>rear</code> is pointing</li>
      <li>Return success</li>
    </ol>
    <pre><code>procedure enqueue(data)
   if queue is full
      return overflow
   endif

   rear ← rear + 1
   queue[rear] ← data

   return true
end procedure</code></pre>

    <h3>dequeue() — remove an element</h3>
    <ol>
      <li>Check if the queue is empty</li>
      <li>If empty, produce an <strong>underflow error</strong> and exit</li>
      <li>If not empty, access the data where <code>front</code> is pointing</li>
      <li>Increment the <code>front</code> pointer to the next available element</li>
      <li>Return success</li>
    </ol>
    <pre><code>procedure dequeue
   if queue is empty
      return underflow
   endif

   data = queue[front]
   front ← front + 1

   return true
end procedure</code></pre>

    <div class="divider"></div>

    <h2>Practice Exercise 1</h2>
    <p>Perform the following operations on a queue with a size of <strong>6</strong>, and trace the front/rear values after each step:</p>
    <ol>
      <li>Enqueue 5, 4, 7</li>
      <li>Dequeue</li>
      <li>Dequeue</li>
      <li>Enqueue 8, 9</li>
      <li>Dequeue</li>
      <li>Enqueue 1, 2</li>
    </ol>

    <div class="divider"></div>

    <h2>The Problem with Linear Queues</h2>
    <p>So far, we've discussed <strong>linear queues</strong>, where removing items only increases <code>front</code> and reduces the queue's usable size. This causes a problem.</p>

    <p>For example, if a queue has 8 slots (indices 0–7) and we remove 3 elements from the front:</p>

    <pre><code>Before removal:              After removing 3 elements:
0: 777  ← Front               0: (empty)
1: 2                           1: (empty)
2: 5                           2: (empty)
3: 525                         3: 525  ← Front
4: 22                          4: 22
5: 55                          5: 55
6: 77                          6: 77
7: 90   ← Rear                 7: 90   ← Rear</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Even though the queue is <strong>not full</strong> (indices 0–2 are empty), we <strong>cannot insert</strong> any more elements — because <code>rear</code> is already at the last index and a linear queue never reuses freed space at the front.</p>
    </div>

    <div class="divider"></div>

    <h2>Circular Queues (The Solution)</h2>
    <p><strong>Circular queues</strong> are queues that wrap around themselves. They are also called <strong>ring buffers</strong>. This solves the wasted-space problem of a linear queue.</p>
    <p>When we want to insert a new element and the queue is not full, we can wrap <code>rear</code> back around to the <strong>beginning</strong> of the array instead of treating it as full.</p>

    <pre><code>If rear was 2, the next element is stored at index 3
If rear was 4, the next element is stored at index 5
If rear was 7, the next element wraps around to index 0</code></pre>

    <h3>Implementing a Circular Queue with an Array</h3>
    <p>Picture the array bent into a circle. A <strong>read pointer</strong> marks the index used for the next <code>dequeue</code> (read), and a <strong>write pointer</strong> marks the index used for the next <code>enqueue</code> (write).</p>

    <pre><code>Index:   0   1   2   3   4   5   6   7 ... 15
Value:      [ 9] [ 4] [ 8] [ 2] [ 6]
               ↑                       ↑
            read=2                 write=7</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>In the example above, a <strong>read</strong> operation returns the value <strong>9</strong> stored at <code>buf[2]</code>, because <code>read = 2</code>.</p>
    </div>

    <p>After reading (removing) two more data items from the circular buffer, the read pointer moves forward until it catches up with the write pointer.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A circular array (buffer) is <strong>empty</strong> when: <code>read pointer == write pointer</code></p>
    </div>

    <div class="divider"></div>

    <h2>Circular Queue Walkthrough (Front/Rear Style)</h2>
    <p>Here's a circular queue of size 5, tracked using <code>front</code> and <code>rear</code> instead of read/write pointers:</p>

    <pre><code>Empty Queue:            front = -1, rear = -1   [ _ , _ , _ , _ , _ ]
Enqueue first element:  front =  0, rear =  0   [ 1 , _ , _ , _ , _ ]
Enqueue:                front =  0, rear =  1   [ 1 , 2 , _ , _ , _ ]
Enqueue x3 more:        front =  0, rear =  4   [ 1 , 2 , 3 , 4 , 5 ]
Dequeue:                front =  2, rear =  4   [ _ , _ , 3 , 4 , 5 ]
Enqueue (wraps):        front =  2, rear =  0   [ 6 , _ , 3 , 4 , 5 ]
Enqueue:                front =  2, rear =  1   [ 6 , 7 , 3 , 4 , 5 ]  ← Queue Full</code></pre>

    <div class="divider"></div>

    <h2>Steps to Implement a Circular Queue</h2>
    <ol>
      <li>Include all header files used in the program and define a constant <code>SIZE</code> with a specific value</li>
      <li>Declare all user-defined functions used in the circular queue implementation</li>
      <li>Create a one-dimensional array with the defined <code>SIZE</code>: <code>int cQueue[SIZE]</code></li>
      <li>Define two integer variables <code>front</code> and <code>rear</code>, and initialize both to <code>-1</code></li>
      <li>Implement the main method: display a menu of operations and call the right function for whatever the user selects</li>
    </ol>

    <h3>enQueue(value) — Inserting into a Circular Queue</h3>
    <ol>
      <li>Check whether the queue is <strong>FULL</strong>: <code>(rear == SIZE-1 && front == 0) || (front == rear + 1)</code></li>
      <li>If FULL, display "Queue is FULL!!! Insertion is not possible!!!" and stop</li>
      <li>If NOT FULL, check <code>rear == SIZE - 1 && front != 0</code>. If true, set <code>rear = -1</code> (wrap around)</li>
      <li>Increment <code>rear</code> by one, set <code>queue[rear] = value</code>, then check if <code>front == -1</code>. If true, set <code>front = 0</code></li>
    </ol>

    <div class="divider"></div>

    <h2>Practice Exercise 2</h2>
    <p>Perform the following operations on a <strong>circular queue</strong> with a size of <strong>4</strong>, and trace the front/rear values after each step:</p>
    <ol>
      <li>Enqueue 5, 4, 7</li>
      <li>Dequeue</li>
      <li>Enqueue 8, 9</li>
      <li>Dequeue</li>
      <li>Enqueue 1, 2</li>
    </ol>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Draw the array boxes on paper and physically move <code>front</code> and <code>rear</code> as you go through Exercise 1 and Exercise 2 — it makes wrap-around behavior in circular queues much easier to understand.</p>
    </div>
  `,
  summary: {
    topic: 'Queues — Linear and Circular Queue Data Structures',
    subTopics: [
      'What Does a Queue Do?',
      'Real-Life FIFO Examples',
      'Queue Operations',
      'Real-World Examples of Queues',
      'Real-World Applications of Queue Data Structures',
      'Types of Queues',
      'Front and Rear of a Queue',
      'How Enqueue and Dequeue Work',
      'Full Trace Example',
      'Implementing a Queue with an Array',
      'Queue Algorithms (peek, isFull, isEmpty, enqueue, dequeue)',
      'The Problem with Linear Queues',
      'Circular Queues (The Solution)',
      'Implementing a Circular Queue with an Array',
      'Circular Queue Walkthrough (Front/Rear Style)',
      'Steps to Implement a Circular Queue',
      'enQueue(value) — Inserting into a Circular Queue',
    ],
    definitions: [
      { term: 'Queue', meaning: 'A linear data structure similar to a Stack, where the first element inserted is the first one removed (FIFO).' },
      { term: 'FIFO (First-In-First-Out)', meaning: 'The rule that the first element inserted into a queue is the first one removed.' },
      { term: 'LIFO (Last-In-First-Out)', meaning: 'The opposite rule used by a Stack — the last element inserted is removed first.' },
      { term: 'Front', meaning: 'The end of the queue where elements are removed (dequeued).' },
      { term: 'Rear', meaning: 'The end of the queue where new elements are inserted (enqueued).' },
      { term: 'Enqueue', meaning: 'The operation that inserts an element at the rear of a queue.' },
      { term: 'Dequeue', meaning: 'The operation that removes an element from the front of a queue.' },
      { term: 'Peek (First)', meaning: 'An operation that returns the front element of the queue without removing it.' },
      { term: 'isEmpty', meaning: 'An operation that checks whether the queue has no elements.' },
      { term: 'isFull', meaning: 'An operation that checks whether the queue has reached its maximum capacity.' },
      { term: 'Circular Queue (Ring Buffer)', meaning: 'A queue where the rear wraps back to the start of the array once space frees up, avoiding the wasted space of a linear queue.' },
      { term: 'Read Pointer', meaning: 'The index of a circular array used by a read (dequeue) operation.' },
      { term: 'Write Pointer', meaning: 'The index of a circular array used by a write (enqueue) operation.' },
      { term: 'Deque (Double-Ended Queue)', meaning: 'A queue that allows insertion and deletion at both ends.' },
      { term: 'Priority Queue', meaning: 'A queue where elements are removed based on priority rather than arrival order.' },
    ],
    keyPoints: [
      'A Queue follows FIFO (First-In-First-Out); a Stack follows LIFO.',
      'Insertions happen only at the rear; deletions happen only at the front — no middle access allowed.',
      'Number of elements in a queue = rear - front + 1.',
      'An empty queue starts with front = -1, rear = -1, and size = 0.',
      'Common real-world/OS queue examples: printer queue, job queue (CPU scheduling), keystroke buffer, network data packets.',
      'The four queue types covered are Normal (Linear), Circular, Deque, and Priority.',
      'Linear queues waste array space — once rear reaches the last index, no more elements can be enqueued even if front slots are free.',
      'Circular queues solve this by wrapping rear back to index 0 when space is available.',
      'A circular queue is empty when the read pointer equals the write pointer.',
      'Circular queue overflow check: (rear == SIZE-1 && front == 0) || (front == rear + 1).',
      'dequeue() on an empty queue produces an underflow error; enqueue() on a full queue produces an overflow error.',
    ],
  },
},


  
]