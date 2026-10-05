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
      <p>An <strong>Abstract Data Type (ADT)</strong> is a collection of data together with a set of operations that work on that data. It is a mathematical model of the data objects and the functions that operate on them - without worrying about how it is actually built.</p>
    </div>

    <p>In simple words, an ADT only cares about <strong>what</strong> the data represents and <strong>what</strong> you can do with it. It does not care about <strong>how</strong> it will eventually be constructed (implemented).</p>

    <h3>How an ADT Works</h3>
    <ul>
      <li>The <strong>user</strong> interacts only with the <strong>interface</strong> - the operations the ADT has specified.</li>
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

    <p><strong>Integer, Float, Boolean,</strong> and <strong>Char</strong> are all data structures too - but they are called <strong>Primitive Data Structures</strong>.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Example</span>
      <p><strong>Integer</strong> - Describes a data type that stores numerical values. Its operations include addition, subtraction, division, and so on. How Integer is implemented internally is not something we usually worry about.</p>
    </div>

    <p>On the other hand, structures like <strong>Linked List, Tree, Graph, Stack,</strong> and <strong>Queue</strong> are called <strong>Abstract Data Structures</strong>. They give an implementation-independent view of data - you can use them without knowing exactly how they work inside.</p>

    <div class="divider"></div>

    <h2>Introduction to Stacks</h2>

    <p>Think about a stack of donuts, a stack of pancakes, a pile of coins, or a stack of plates. What do they all have in common? You can only add or remove items from the <strong>top</strong>.</p>

    <p>A <strong>stack</strong> data structure behaves exactly the same way. It only allows you to access <strong>one data item</strong> at a time - the last item that was inserted. Once you remove that item, you can then access the next-to-last item, and so on.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>stack</strong> is a linear data structure that can be accessed only at one of its ends (called the <strong>top</strong> of the stack) for storing and retrieving data. It behaves very much like a stack of plates or a stack of newspapers. A stack is a constantly changing object.</p>
    </div>

    <p>Stacks are not just a programming concept - most <strong>microprocessors</strong> use a stack-based architecture too. When a method is called, its return address and arguments are pushed onto a stack. When it returns, they're popped off. These stack operations are actually built into the microprocessor itself.</p>

    <div class="divider"></div>

    <h2>How Stacks Work: The LIFO Principle</h2>

    <p>A <strong>stack</strong> is a data structure - a list of data elements - where all <strong>insertions</strong> and <strong>deletions</strong> happen at just <strong>one end</strong>. This end is called the <strong>TOP</strong> (also referred to as the beginning) of the stack.</p>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Insertions and deletions are <strong>restricted</strong> from the middle and the end (bottom) of a stack - they can only happen at the top.</p>
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

    <p>One common way to implement a stack is with an <strong>array</strong>. But even though it's built on an array, a stack <strong>restricts access</strong> - you cannot access it the way you would access a normal array.</p>

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
      <li><strong>MAX_ITEMS</strong> - the maximum number of items that might be on the stack.</li>
      <li><strong>ItemType</strong> - the data type of the items on the stack.</li>
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
Initial (empty)  -1    -
stack.Push(2)     0    [0]=2
stack.Push(3)     1    [0]=2  [1]=3
stack.Push(5)     2    [0]=2  [1]=3  [2]=5
stack.Pop(x)      1    x = 5   (top now points at index 1)
stack.Pop(x)      0    x = 3   (top now points at index 0)
stack.Push(10)    1    [0]=2  [1]=10  [2]=5 (old 5 still sits in memory)</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Popping does not "erase" the old value in the array - it simply moves the <strong>top</strong> pointer down. The old value just gets overwritten the next time something is pushed into that slot.</p>
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

    <p>Which method to use depends on the application - you need to weigh the advantages and disadvantages of each.</p>

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

    <p>A stack is an object - more specifically, an <strong>Abstract Data Structure (ADT)</strong> - that supports these operations:</p>
    <ul>
      <li><strong>Push</strong> - add an element to the top of the stack.</li>
      <li><strong>Pop</strong> - remove an element from the top of the stack.</li>
      <li><strong>IsEmpty</strong> - check if the stack is empty.</li>
      <li><strong>IsFull</strong> - check if the stack is full.</li>
      <li><strong>Peek</strong> - get the value of the top element <strong>without</strong> removing it.</li>
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
    <p>Used to remove an item from the stack - first read the element, then decrease the TOP pointer.</p>
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
      <li><strong>Reversing a word</strong> - Put all the letters in a stack and pop them out one by one. Because of the stack's LIFO order, the letters come out in reverse order.</li>
      <li><strong>Compilers</strong> - Compilers use a stack to calculate the value of expressions like <code>2 + 4 / 5 * (7 - 9)</code>, by converting the expression into prefix or postfix form first.</li>
      <li><strong>Browsers</strong> - The back button in a browser saves all the URLs you've visited in a stack. Every new page is added on top. Pressing back removes the current URL from the stack and takes you to the previous one.</li>
    </ul>

    <div class="divider"></div>

    <h2>Infix, Prefix, and Postfix Expressions</h2>

    <p>Take the arithmetic expression <code>B * C</code>. The way it's written already tells you how to interpret it - here, <strong>B</strong> is being multiplied by <strong>C</strong>, because the multiplication operator <code>*</code> sits between them.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>This style, where the operator sits <strong>between</strong> the two operands it works on, is called <strong>infix</strong> notation - the notation we normally use in everyday math.</p>
    </div>

    <pre><code>Infix Expression      Prefix Expression      Postfix Expression
A + B                 + A B                  A B +
A + B * C             + A * B C              A B C * +</code></pre>

    <div class="divider"></div>

    <h2>Operator Precedence</h2>

    <p>Look at the expression <code>A + B * C</code>. Both <code>+</code> and <code>*</code> sit between operands, but which goes first - does <code>+</code> work on A and B, or does <code>*</code> take B and C? On its own, this looks ambiguous.</p>

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

    <p>When converting an infix expression to a fully parenthesized form, the operands with the <strong>higher precedence</strong> operator are grouped in parentheses first. If the same precedence appears more than once, the leftmost one is grouped first - except for exponentiation, which groups from <strong>right to left</strong>.</p>

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
      <p>A <strong>Stack</strong> follows <strong>LIFO (Last-In-First-Out)</strong> - the last item inserted is the first one removed. A <strong>Queue</strong> follows <strong>FIFO</strong> - the first item inserted is the first one removed.</p>
    </div>

    <p>Queues are working quietly behind the scenes inside a computer's operating system. Some common examples are:</p>
    <ul>
      <li><strong>Printer queue</strong> - holds print jobs in the order they were sent</li>
      <li><strong>Keystroke queue</strong> - stores the keys you press on the keyboard, in order</li>
      <li><strong>Pipeline</strong> - passes data between processes in sequence</li>
    </ul>

    <div class="divider"></div>

    <h2>What Does a Queue Do?</h2>
    <ul>
      <li>Stores a set of elements in a particular order</li>
      <li>Follows the <strong>FIFO</strong> principle - First In, First Out</li>
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
      <li><strong>Job Queue</strong> - in multi-user systems, processes wait in a queue for their turn on the CPU</li>
      <li><strong>Print Queue</strong> - one printer is often shared by several machines, so print jobs wait in a queue</li>
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
      <li><strong>Normal Queue (FIFO)</strong> - the basic linear queue</li>
      <li><strong>Circular Queue</strong> - a normal queue that wraps around itself</li>
      <li><strong>Double-Ended Queue (Deque)</strong> - insertion and deletion allowed at both ends</li>
      <li><strong>Priority Queue</strong> - elements are removed based on priority, not just order</li>
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
      <li><strong>enqueue</strong> - insert an element at the rear of the queue</li>
      <li><strong>dequeue</strong> - remove an element from the front of the queue</li>
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
      <p>Calling <code>dequeue()</code> on an empty queue produces an <strong>underflow error</strong> - it does not silently return nothing.</p>
    </div>

    <div class="divider"></div>

    <h2>Implementing a Queue with an Array</h2>
    <p>A queue implementation is usually based on an <strong>array with restricted access</strong>. The array is accessed the same way a real queue would be: new elements are inserted at the back, and elements are removed from the front.</p>

    <h2>Queue Algorithms</h2>

    <h3>peek() - look at the front element</h3>
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

    <h3>enqueue(data) - insert an element</h3>
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

    <h3>dequeue() - remove an element</h3>
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
      <p>Even though the queue is <strong>not full</strong> (indices 0–2 are empty), we <strong>cannot insert</strong> any more elements - because <code>rear</code> is already at the last index and a linear queue never reuses freed space at the front.</p>
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

    <h3>enQueue(value) - Inserting into a Circular Queue</h3>
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
      <p>Draw the array boxes on paper and physically move <code>front</code> and <code>rear</code> as you go through Exercise 1 and Exercise 2 - it makes wrap-around behavior in circular queues much easier to understand.</p>
    </div>
  `,
  summary: {
    topic: 'Queues - Linear and Circular Queue Data Structures',
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
      'enQueue(value) - Inserting into a Circular Queue',
    ],
    definitions: [
      { term: 'Queue', meaning: 'A linear data structure similar to a Stack, where the first element inserted is the first one removed (FIFO).' },
      { term: 'FIFO (First-In-First-Out)', meaning: 'The rule that the first element inserted into a queue is the first one removed.' },
      { term: 'LIFO (Last-In-First-Out)', meaning: 'The opposite rule used by a Stack - the last element inserted is removed first.' },
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
      'Insertions happen only at the rear; deletions happen only at the front - no middle access allowed.',
      'Number of elements in a queue = rear - front + 1.',
      'An empty queue starts with front = -1, rear = -1, and size = 0.',
      'Common real-world/OS queue examples: printer queue, job queue (CPU scheduling), keystroke buffer, network data packets.',
      'The four queue types covered are Normal (Linear), Circular, Deque, and Priority.',
      'Linear queues waste array space - once rear reaches the last index, no more elements can be enqueued even if front slots are free.',
      'Circular queues solve this by wrapping rear back to index 0 when space is available.',
      'A circular queue is empty when the read pointer equals the write pointer.',
      'Circular queue overflow check: (rear == SIZE-1 && front == 0) || (front == rear + 1).',
      'dequeue() on an empty queue produces an underflow error; enqueue() on a full queue produces an overflow error.',
    ],
  },
},

{
  id: 4,
  title: 'Linked Lists - 01',
  content: `
    <span class="lesson-badge">LESSON 04</span>
    <h1>Linked Lists</h1>
    <div class="meta-info">ICT2113 <span>•</span> 35 min read</div>

    <p>In this lesson, you will learn about <strong>Linked Lists</strong> - one of the most important data structures in computer science. We will compare linked lists with arrays, learn how to build them, and explore the two main types: <strong>Singly Linked Lists</strong> and <strong>Doubly Linked Lists</strong>.</p>

    <div class="divider"></div>

    <h2>What is a List?</h2>
    <p>A <strong>list</strong> is simply a sequence of elements. More formally, it is a <strong>finite sequence of elements</strong>.</p>
    <p>For example, a list of integers could look like this:</p>
    <pre><code>2   1   5   6   0</code></pre>
    <p>Lists can also store records (like a list of student details), not just numbers. Similar data can be stored in memory in two ways: using an <strong>array</strong> or using a <strong>linked list</strong>.</p>

    <div class="divider"></div>

    <h2>Implementation of a List</h2>
    <p>There are <strong>2 main ways</strong> to store a list in memory:</p>
    <ol>
      <li><strong>Contiguous storage (Array)</strong> - elements are placed physically next to each other in <strong>adjacent memory locations</strong>.</li>
      <li><strong>Non-contiguous storage (Linked List)</strong> - elements are <strong>not</strong> physically next to each other in memory.</li>
    </ol>

    <h3>Disadvantages of Arrays (Contiguous Storage)</h3>
    <ul>
      <li>The <strong>size of the array is fixed</strong> - you must decide the size in advance.</li>
      <li>It <strong>wastes space</strong> if the array is not fully used.</li>
      <li><strong>Inserting new elements at the front is expensive</strong> - existing elements must be shifted to make room.</li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In an array, <strong>inserting</strong> an element means moving elements <strong>'DOWN'</strong> by one position, and <strong>deleting</strong> an element means moving elements <strong>'UP'</strong> by one position. This shifting takes extra time and is a common source of exam questions.</p>
    </div>

    <p>Example - inserting 100 into an array:</p>
    <pre><code>Before insert:   2   5   1   8   3   10
Insert 100 at position 4:
After insert:    2   5   1  100  8   3   10   (elements shifted down)

Before delete:   2   5   8   9
Delete an element:
After delete:    2   5   9        (elements shifted up)</code></pre>

    <div class="divider"></div>

    <h2>Introduction to Linked Lists</h2>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>Linked List</strong> eliminates the problems found in arrays (fixed size, wasted space, expensive insertion).</p>
    </div>

    <p><strong>What is a Linked List?</strong> A linked list is a <strong>collection of nodes</strong>, where each <strong>node</strong> contains some <strong>data</strong> along with information about the <strong>next</strong> node.</p>

    <h3>How it Works</h3>
    <p>A linked list uses <strong>non-contiguous</strong> memory locations. This means each node must <strong>remember where the next node is</strong>.</p>
    <ul>
      <li>Individual elements are stored "somewhere" in memory (not next to each other).</li>
      <li>The <strong>order</strong> of the elements is maintained by <strong>explicit links</strong> between them (not by memory position).</li>
    </ul>

    <div class="divider"></div>

    <h2>Arrays vs Linked Lists</h2>
    <p>Arrays and linked lists are similar because they both store <strong>collections of data</strong>. However, they behave very differently.</p>

    <h3>Why Arrays Are Popular</h3>
    <ul>
      <li>Array elements are <strong>easily accessible</strong> using an index number.</li>
      <li>Arrays are the <strong>most common</strong> data structure used to store a collection of elements.</li>
      <li>Most languages make arrays convenient to declare and access.</li>
    </ul>

    <h3>Advantages of Linked Lists over Arrays</h3>
    <ul>
      <li><strong>Dynamic size</strong> - a linked list can grow and shrink during its lifetime.</li>
      <li><strong>Easy insertion/deletion</strong> - no shifting of elements is required.</li>
    </ul>

    <h3>Drawbacks of Linked Lists</h3>
    <ul>
      <li><strong>No random access</strong> - elements must be accessed sequentially starting from the first node. This means <strong>binary search is not possible</strong> on a linked list.</li>
      <li><strong>Extra memory</strong> is needed for the pointer in each node.</li>
      <li>Arrays have <strong>better cache locality</strong>, which can make a noticeable difference in performance.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Linked lists are <strong>dynamic data structures</strong>. Their maximum size does not need to be known in advance. They are most useful when you need to <strong>insert or delete</strong> elements in the <strong>middle</strong> of a group of elements, since no shifting is required.</p>
    </div>

    <div class="divider"></div>

    <h2>Structure of a Linked List</h2>
    <p>Each <strong>node</strong> in a linked list contains at least:</p>
    <ul>
      <li>A piece of <strong>data</strong> (any type)</li>
      <li>A <strong>pointer</strong> to the next node in the list</li>
    </ul>
    <p>Some key terms:</p>
    <ul>
      <li><strong>Head</strong> - a pointer to the <strong>first</strong> node in the list.</li>
      <li>The <strong>last node</strong> points to <strong>NULL</strong> to mark the end of the list.</li>
    </ul>

    <p>Visually, a linked list looks like this:</p>
    <pre><code>Head -> [ Data | Next ] -> [ Data | Next ] -> [ Data | Next ] -> NULL</code></pre>

    <ul>
      <li>A Linked List contains a link element called <strong>first/head</strong>.</li>
      <li>Each node carries a <strong>data field</strong> and a <strong>link field</strong> called <code>next</code>.</li>
      <li>Each node is linked to the next node using its <code>next</code> link.</li>
      <li>The <strong>last node</strong> carries a link of <code>null</code> to mark the end of the list.</li>
    </ul>

    <p>The C structure for a linked list node is:</p>
    <pre><code>struct Node
{
    int Data;
    struct Node *Next;
};</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>The pointer <code>next</code> inside <code>struct Node</code> is called a <strong>self-referencing pointer</strong> because it points to another node of the <strong>same</strong> type.</p>
    </div>

    <h3>Why Do We Need Pointers in a Linked List?</h3>
    <p>In a linked list, data elements are given memory <strong>at runtime</strong>, so the memory location of each node can be anywhere. To be able to access every node, the <strong>address</strong> of each node is stored inside the previous node - this forms the <strong>link</strong> between nodes. This is different from an array, where memory is allocated in a <strong>contiguous</strong> (side-by-side) manner.</p>

    <h3>Header Nodes</h3>
    <p>A <strong>header node</strong> is an extra node in the linked list that holds <strong>no data</strong>. It exists to satisfy the rule that every node containing an item must have a <strong>previous node</strong> in the list.</p>

    <div class="divider"></div>

    <h2>Types of Linked List</h2>
    <ul>
      <li><strong>Simple (Singly) Linked List</strong> - item navigation is <strong>forward only</strong>.</li>
      <li><strong>Doubly Linked List</strong> - items can be navigated <strong>forward and backward</strong>.</li>
      <li><strong>Circular Linked List</strong> - the last item links to the first element, and the first element can link back to the last element.</li>
    </ul>

    <p>Example of a circular linked list (nodes stored at addresses 1001, 1004, 1008, 1012):</p>
    <pre><code>head = 1001

[10 | 1004] -> [15 | 1008] -> [22 | 1012] -> [50 | 1001] -> (back to head)</code></pre>

    <div class="divider"></div>

    <h2>Linked List Operations</h2>
    <p>The main operations you can perform on a linked list are:</p>
    <ul>
      <li><strong>Create</strong> a node and linked list</li>
      <li><strong>Traversal</strong> - visiting every node</li>
      <li><strong>Search</strong> for a node</li>
      <li><strong>Insert</strong> a node - at the beginning, at the end, or after/before a given node</li>
      <li><strong>Delete</strong> a node - at the beginning, at the end, or after/before a given node</li>
      <li><strong>Sort</strong> the list</li>
    </ul>

    <div class="divider"></div>

    <h2>Creating Nodes</h2>
    <p>A node is a structure data type. It can be created in <strong>two</strong> ways:</p>
    <ul>
      <li><strong>Static method</strong>
        <ul>
          <li>Using an array of structures</li>
          <li>Declared globally, outside functions</li>
          <li>Declared locally, inside a function</li>
        </ul>
      </li>
      <li><strong>Dynamic method</strong> (mostly used for linked lists)
        <ul>
          <li>Uses the <code>malloc(size)</code> function to get memory space at runtime</li>
        </ul>
      </li>
    </ul>
    <pre><code>struct node *np = (struct node*) malloc(sizeof(struct node));</code></pre>

    <h3>The malloc() Function</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><code>malloc()</code> is used to allocate a certain amount of memory <strong>during the execution</strong> of a program. It requests a block of memory from the <strong>heap</strong>. If the request is granted, the operating system reserves that amount of memory.</p>
    </div>
    <p><strong>Syntax:</strong></p>
    <pre><code>void *malloc(size_t size)</code></pre>
    <p>Here, <code>size</code> is the size of the memory block, in bytes.</p>

    <div class="divider"></div>

    <h2>Building a Linked List (Example)</h2>
    <p>Here is a full example that creates three nodes and links them together:</p>
    <pre><code>/* Initialize nodes */
struct node *head;
struct node *one   = NULL;
struct node *two   = NULL;
struct node *three = NULL;

/* Allocate memory */
one   = malloc(sizeof(struct node));
two   = malloc(sizeof(struct node));
three = malloc(sizeof(struct node));

/* Assign data values */
one->data   = 1;   // (one->data can also be written as (*one).data)
two->data   = 2;
three->data = 3;

/* Connect nodes */
one->next   = two;
two->next   = three;
three->next = NULL;

/* Save address of first node in head */
head = one;</code></pre>

    <p>This creates the list: <code>1 -> 2 -> 3 -> NULL</code></p>

    <p>A shorter way to build a list while adding to the end:</p>
    <pre><code>node_t * head = NULL;
head = malloc(sizeof(node_t));
head->val  = 1;
head->next = malloc(sizeof(node_t));
head->next->val  = 2;
head->next->next = NULL;</code></pre>

    <div class="divider"></div>

    <h2>Inserting a Node</h2>
    <p>There are many ways to insert a new node into a linked list:</p>
    <ul>
      <li>As the new <strong>first</strong> element</li>
      <li>As the new <strong>last</strong> element</li>
      <li><strong>Before</strong> a given node</li>
      <li><strong>After</strong> a given node</li>
      <li>Before or after a given <strong>value</strong></li>
    </ul>

    <p>The general idea for inserting a new node <code>x</code> right after a node called <code>current</code>:</p>
    <pre><code>tmp = new Node;
tmp->data = x;
tmp->next = current->next;
current->next = tmp;</code></pre>

    <h3>Inserting a Node at the Top (Beginning) of the List</h3>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>This is a <strong>4-step process</strong>:</p>
    </div>
    <ol>
      <li>Create the new node, let's call it <code>E</code>.</li>
      <li>Set the node's data field: <code>E->data = data</code></li>
      <li>Set the <code>next</code> pointer of the new node to the current head pointer: <code>E->next = head</code></li>
      <li>Set <code>head</code> to point to the new node: <code>head = E</code></li>
    </ol>

    <pre><code>/* Given a reference (pointer to pointer) to the head of a list
   and an int, inserts a new node on the front of the list. */
void insert(struct Node** head_ref, int new_data)
{
    /* 1. allocate node */
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));

    /* 2. put in the data */
    new_node->data = new_data;

    /* 3. Make next of new node as head */
    new_node->next = (*head_ref);

    /* 4. move the head to point to the new node */
    (*head_ref) = new_node;
}</code></pre>

    <h3>Adding a Node After a Given Node</h3>
    <pre><code>/* Given a node prev_node, insert a new node after the given prev_node */
void insertAfter(struct Node* prev_node, int new_data)
{
    /* 1. check if the given prev_node is NULL */
    if (prev_node == NULL)
    {
        printf("the given previous node cannot be NULL");
        return;
    }

    /* 2. allocate new node */
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));

    /* 3. put in the data */
    new_node->data = new_data;

    /* 4. Make next of new node as next of prev_node */
    new_node->next = prev_node->next;

    /* 5. move the next of prev_node as new_node */
    prev_node->next = new_node;
}</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Always check that <code>prev_node</code> is not <code>NULL</code> before inserting after it. Forgetting this check is a common mistake that leads to program crashes.</p>
    </div>

    <h3>Adding a Node at the End</h3>
    <p>To add a node at the end, you must <strong>traverse the list till the end</strong>, then change the <code>next</code> pointer of the last node to point to the new node.</p>
    <pre><code>/* Given a reference (pointer to pointer) to the head
   of a list and an int, appends a new node at the end */
void append(struct Node** head_ref, int new_data)
{
    /* 1. allocate node */
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    struct Node *last = *head_ref;   /* used in step 5 */

    /* 2. put in the data */
    new_node->data = new_data;

    /* 3. This new node is going to be the last node,
          so make its next as NULL */
    new_node->next = NULL;

    /* 4. If the Linked List is empty, then
          make the new node as head */
    if (*head_ref == NULL)
    {
        *head_ref = new_node;
        return;
    }

    /* 5. Else traverse till the last node */
    while (last->next != NULL)
        last = last->next;

    /* 6. Change the next of last node */
    last->next = new_node;
    return;
}</code></pre>

    <div class="divider"></div>

    <h2>Deleting a Node</h2>
    <p>To delete a node from a linked list, follow these steps:</p>
    <ol>
      <li>Find the <strong>previous node</strong> of the node to be deleted.</li>
      <li>Change the <code>next</code> pointer of the previous node.</li>
      <li><strong>Free the memory</strong> for the node being deleted.</li>
    </ol>

    <p>To remove element <code>x</code> from a linked list, we set <code>current</code> to be the node <strong>before</strong> <code>x</code>, and then make <code>current</code>'s next pointer <strong>skip past</strong> <code>x</code>:</p>
    <pre><code>current->next = current->next->next;</code></pre>
    <p>After this operation, a list that looked like <code>A, X, B</code> now appears as <code>A, B</code>.</p>

    <div class="divider"></div>

    <h2>Applications of Linked Lists</h2>
    <ul>
      <li>Linked lists are used to implement <strong>stacks, queues, graphs</strong>, and more.</li>
      <li>Linked lists let you insert elements at the <strong>beginning</strong> and <strong>end</strong> of the list easily.</li>
      <li>In linked lists, we <strong>don't need to know the size in advance</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Doubly Linked List (DLL)</h2>
    <p>A <strong>doubly linked list</strong> is one in which all nodes are linked together by <strong>multiple links</strong>. It allows going in <strong>both directions</strong> - forward and reverse.</p>

    <p>Every node in a doubly linked list has <strong>three fields</strong>:</p>
    <ol>
      <li><strong>LeftPointer (prev)</strong> - points to the previous node</li>
      <li><strong>RightPointer (next)</strong> - points to the next node</li>
      <li><strong>DATA</strong> - the value stored</li>
    </ol>

    <pre><code>NULL <- [prev|data|next] <-> [prev|data|next] <-> [prev|data|next] -> NULL</code></pre>

    <h3>Why Doubly Linked List?</h3>
    <ul>
      <li>Useful when moving in <strong>either direction</strong> is often necessary.</li>
      <li>Many applications need quick access to the <strong>predecessor node</strong> (the node before a given node).</li>
      <li>Each node has <strong>two</strong> link members: one pointing <strong>forward</strong> and one pointing <strong>backward</strong>.</li>
    </ul>

    <h3>Implementation of a DLL Node</h3>
    <pre><code>typedef struct node {
    int data;
    struct node* next;
    struct node* prev;
} node;</code></pre>

    <h3>Advantages of DLL over Singly Linked Lists</h3>
    <ul>
      <li>Can be traversed in <strong>both forward and backward</strong> directions.</li>
      <li><strong>Quick updates</strong> - insertions and deletions at both ends (head and tail), and also in the middle.</li>
      <li><strong>Deletion is more efficient</strong> if a pointer to the node to delete is already given. In a singly linked list, you would need the previous node's pointer, which sometimes means traversing the whole list to find it. A DLL avoids this using the <code>prev</code> pointer.</li>
    </ul>

    <h3>Disadvantages of DLL over Singly Linked Lists</h3>
    <ul>
      <li>Every node needs <strong>extra space</strong> for the previous pointer.</li>
      <li>All operations require an <strong>extra pointer</strong> to be maintained - for example, insertion needs to update <code>previous</code> pointers as well as <code>next</code> pointers.</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Sentinel Nodes:</strong> To simplify programming, two special dummy nodes - <strong>head</strong> and <strong>tail</strong> - are added at both ends of a doubly linked list. They do <strong>not</strong> store any data. The head sentinel has a <code>null</code> previous link, and the tail sentinel has a <code>null</code> next link.</p>
    </div>

    <p>A doubly-linked list object needs to store:</p>
    <ol>
      <li>A reference to the sentinel <strong>head</strong> node</li>
      <li>A reference to the sentinel <strong>tail</strong> node</li>
      <li>A <strong>size counter</strong> that tracks the number of real nodes (excluding the two sentinels)</li>
    </ol>

    <h3>Basic Operations on a Doubly-Linked List</h3>
    <ol>
      <li><strong>Add</strong> a node</li>
      <li><strong>Delete</strong> a node</li>
      <li><strong>Search</strong> for a node</li>
      <li><strong>Traverse</strong> (walk through) the list - useful for counting or other operations that touch every node</li>
    </ol>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The operations on a doubly-linked list are conceptually the <strong>same</strong> as those required for a singly-linked list, just with extra pointer bookkeeping.</p>
    </div>

    <div class="divider"></div>

    <h2>Inserting into a Doubly Linked List</h2>
    <p>Suppose a new node, <code>newnode</code>, needs to be inserted <strong>after</strong> the node <code>current</code>.</p>

    <p>There are <strong>4 steps</strong> to add a node to a doubly-linked list:</p>
    <ol>
      <li>Allocate memory for the new node.</li>
      <li>Determine the insertion point - right after <code>pCur</code>.</li>
      <li>Point the new node to its <strong>successor</strong> and <strong>predecessor</strong>.</li>
      <li>Point the predecessor and successor to the <strong>new node</strong>.</li>
    </ol>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>The current node pointer (<code>pCur</code>) can be in one of two states: it can hold the address of an existing node (you are adding somewhere after the first node), or it can be <code>NULL</code> (you are adding to an empty list, or at the very beginning).</p>
    </div>

    <h3>Adding a Node to an Empty Doubly-Linked List</h3>
    <pre><code>pNew = (struct node *) malloc(sizeof(struct dllnode));  /* create node */
pNew -> data  = 39;
pNew -> right = pHead;
pNew -> left  = pHead;
pHead = pNew;</code></pre>

    <h3>Adding a Node to the Middle of a Doubly-Linked List</h3>
    <pre><code>pNew = (struct node *) malloc(sizeof(struct dllnode));
pNew -> data  = 64;
pNew -> left  = pCur;
pNew -> right = pCur -> right;
pCur -> right -> left = pNew;
pCur -> right = pNew;</code></pre>

    <h3>Adding a Node to the End of a Doubly-Linked List</h3>
    <pre><code>pNew = (struct node *) malloc(sizeof(struct dllnode));
pNew -> data  = 84;
pNew -> left  = pCur;
pNew -> right = pCur -> right;
pCur -> right = pNew;</code></pre>

    <div class="divider"></div>

    <h2>Deleting from a Doubly Linked List</h2>
    <p>Deleting a node requires <strong>logically removing</strong> the node by changing links, and then <strong>physically deleting</strong> it (returning its memory to the heap).</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>To logically delete a node:</p>
    </div>
    <ol>
      <li>First, <strong>locate</strong> the node itself (<code>pCur</code>).</li>
      <li>Change the <strong>predecessor's</strong> and <strong>successor's</strong> link fields so they point to each other.</li>
      <li><strong>Recycle</strong> the node using the <code>free()</code> function.</li>
    </ol>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Before removing a node, always <strong>check for an empty list</strong>. Forgetting this check can cause errors, especially when removing the last remaining node.</p>
    </div>

    <h3>Deleting the First Node from a DLL</h3>
    <pre><code>pHead = pCur -> right;
pCur -> right -> left = NULL;
free(pCur);</code></pre>

    <h3>Deleting a Node - General Case</h3>
    <pre><code>// delete a node from a linked list
if (pCur -> left == NULL)
{
    // deletion is on the first node of the list
    pHead = pCur -> right;
    pCur -> right -> left = NULL;
}
else
{
    // deleting a node other than the first node of the list
    pCur -> left -> right = pCur -> right;
    pCur -> right -> left = pCur -> left;
}
free(pCur);</code></pre>

    <div class="divider"></div>

    <h2>Searching a Doubly-Linked List</h2>
    <p>Both insertion and deletion in a linked list often require <strong>searching</strong> the list - either to find the correct insertion point, or to locate the node that should be deleted.</p>
    <pre><code>// search the nodes in a linked list
pCur = pHead;

// search until the target value is found or the end of the list is reached
while (pCur != NULL && pCur -> data != target)
{
    pCur = pCur -> right;
}

// determine if the target is found or ran off the end of the list
if (pCur != NULL)
    found = 1;
else
    found = 0;</code></pre>

    <div class="divider"></div>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Quick summary for exams:</p>
      <ul>
        <li>A <strong>Linked List</strong> = non-contiguous nodes, each with data + a pointer to the next node.</li>
        <li>Advantage over arrays: <strong>dynamic size</strong>, easy insert/delete. Disadvantage: <strong>no random access</strong>, extra memory for pointers.</li>
        <li>A <strong>Doubly Linked List</strong> adds a <code>prev</code> pointer, allowing backward traversal and faster deletion, at the cost of extra memory and bookkeeping.</li>
      </ul>
    </div>
  `,
  summary: {
    topic: 'Linked Lists: Structure, Operations, and Doubly Linked Lists',
    subTopics: [
      'What is a List?',
      'Implementation of a List',
      'Disadvantages of Arrays (Contiguous Storage)',
      'Introduction to Linked Lists',
      'How it Works',
      'Arrays vs Linked Lists',
      'Advantages of Linked Lists over Arrays',
      'Drawbacks of Linked Lists',
      'Structure of a Linked List',
      'Why Do We Need Pointers in a Linked List?',
      'Header Nodes',
      'Types of Linked List',
      'Linked List Operations',
      'Creating Nodes',
      'The malloc() Function',
      'Building a Linked List (Example)',
      'Inserting a Node',
      'Inserting a Node at the Top (Beginning) of the List',
      'Adding a Node After a Given Node',
      'Adding a Node at the End',
      'Deleting a Node',
      'Applications of Linked Lists',
      'Doubly Linked List (DLL)',
      'Why Doubly Linked List?',
      'Implementation of a DLL Node',
      'Advantages of DLL over Singly Linked Lists',
      'Disadvantages of DLL over Singly Linked Lists',
      'Basic Operations on a Doubly-Linked List',
      'Inserting into a Doubly Linked List',
      'Adding a Node to an Empty Doubly-Linked List',
      'Adding a Node to the Middle of a Doubly-Linked List',
      'Adding a Node to the End of a Doubly-Linked List',
      'Deleting from a Doubly Linked List',
      'Deleting the First Node from a DLL',
      'Deleting a Node - General Case',
      'Searching a Doubly-Linked List',
    ],
    definitions: [
      { term: 'List', meaning: 'A finite sequence of elements, such as a list of integers or records.' },
      { term: 'Array (Contiguous Storage)', meaning: 'A way of storing a list where elements are placed physically next to each other in memory.' },
      { term: 'Linked List', meaning: 'A collection of nodes where each node contains data and a pointer to the next node, using non-contiguous memory.' },
      { term: 'Node', meaning: 'The basic building block of a linked list; contains a data field and a pointer (link) to the next node.' },
      { term: 'Head', meaning: 'A pointer that stores the address of the first node in a linked list.' },
      { term: 'malloc()', meaning: 'A C function that dynamically allocates a block of memory from the heap during program execution.' },
      { term: 'Header Node', meaning: 'An extra node with no data, added so every node in the list has a previous node.' },
      { term: 'Simple (Singly) Linked List', meaning: 'A linked list where each node only points to the next node, so navigation is forward only.' },
      { term: 'Doubly Linked List (DLL)', meaning: 'A linked list where each node has two pointers - one to the next node and one to the previous node - allowing forward and backward navigation.' },
      { term: 'Circular Linked List', meaning: 'A linked list where the last node links back to the first node instead of pointing to NULL.' },
      { term: 'Sentinel Nodes', meaning: 'Dummy head and tail nodes in a doubly linked list that hold no data and simplify insertion and deletion.' },
      { term: 'Traversal', meaning: 'The process of visiting every node in a linked list one by one, usually starting from the head.' },
      { term: 'Self-referencing pointer', meaning: 'A pointer inside a structure that points to another structure of the same type, such as the next pointer inside a Node.' },
    ],
    keyPoints: [
      'A list can be stored using contiguous storage (array) or non-contiguous storage (linked list).',
      'Arrays have a fixed size, waste space, and are expensive to insert into at the front because elements must shift.',
      'A linked list node stores data plus a pointer to the next node; the last node points to NULL.',
      'Linked lists offer dynamic size and easy insertion/deletion but do not allow random access, so binary search is not possible on them.',
      'Arrays have better cache locality than linked lists, which can affect performance.',
      'Nodes are usually created dynamically at runtime using malloc(sizeof(struct Node)).',
      'Inserting a node: allocate the node, set its data, set its next pointer, then update the previous node (or head) to point to it.',
      'Deleting a node: find the previous node, update its next pointer to skip the deleted node, then free the deleted node.',
      'The three types of linked lists are Simple (Singly), Doubly, and Circular.',
      'In a Doubly Linked List, each node has three fields: prev (left) pointer, data, and next (right) pointer.',
      'DLLs allow traversal in both directions and faster deletion when a pointer to the node is already known, but use more memory and need extra pointer updates.',
      'Sentinel (dummy) head and tail nodes in a DLL ensure every real node always has a previous and next node, simplifying code.',
      'Common linked list operations: Create, Traverse, Search, Insert (front/end/before/after), Delete (front/end/before/after), Sort.',
      'Linked lists are used to implement other data structures such as stacks, queues, and graphs.',
    ],
  },
},
  
{
  id: 5,
  title: 'Linked Lists - 02',
  content: `
    <span class="lesson-badge">LESSON 05</span>
    <h1>Circular Linked Lists, and Stack &amp; Queue Using Linked List</h1>
    <div class="meta-info">ICT2113 <span>•</span> 12 min read</div>

    <h2>What is a Circular Linked List?</h2>
    <p>A <strong>circular linked list</strong> is a linked list that has no beginning and no end.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>singly linked list</strong> can be turned into a circular linked list simply by storing the address of the very first node inside the <code>next</code> field of the last node, instead of leaving it as <code>NULL</code>.</p>
    </div>
    <pre><code>START
  |
  v
[10]->[20]->[30]->[40]->[50]
  ^                        |
  |________________________|
</code></pre>

    <h2>Circular Doubly Linked List</h2>
    <p>A <strong>circular doubly linked list</strong> has both a successor pointer and a predecessor pointer, and both are arranged in a circular manner.</p>
    <pre><code>START
  |
  v
[10]<->[20]<->[30]
  ^               |
  |_______________|
(both the next and prev pointers wrap around)
</code></pre>

    <div class="divider"></div>

    <h2>Advantages of Circular Linked Lists</h2>
    <ul>
      <li><strong>Any node can be a starting point</strong> - we can traverse the whole list starting from any node. We just need to stop when the first visited node is visited again.</li>
      <li><strong>Useful for queue implementation</strong> - unlike the normal implementation, we don't need to maintain two separate pointers for front and rear. We can maintain a pointer to the last inserted node, and the front can always be obtained as "next of last".</li>
      <li><strong>Useful for applications that repeatedly go around the list</strong> - for example, when multiple applications are running on a PC, the operating system commonly keeps the running applications in a list and cycles through them, giving each a slice of time to execute, then moving on to the next. A circular list makes it convenient to jump back to the front of the list once the end is reached.</li>
    </ul>

    <h2>Applications of Circular Linked List</h2>
    <ul>
      <li><strong>Personal computers</strong> - all the running applications are kept in a circular linked list, and the operating system gives each one a fixed time slot, iterating over the list until all applications are completed.</li>
      <li><strong>Multiplayer games</strong> - all the players are kept in a circular linked list, and the pointer keeps moving forward as a player's turn ends.</li>
      <li><strong>Circular queues</strong> - a circular linked list can also be used to create a circular queue. In a normal queue, we have to keep two pointers, <code>FRONT</code> and <code>REAR</code>, in memory at all times. In a circular linked list, only one pointer is required.</li>
    </ul>

    <div class="divider"></div>

    <h2>Implementing a Circular Linked List</h2>
    <p>Implementing a circular linked list is very easy, and is almost identical to a linear linked list implementation. The only difference is that, in a circular linked list, the <strong>last node's <code>next</code> pointer points back to the Head</strong> of the list. In a linear linked list, the last node simply holds <code>NULL</code> in its <code>next</code> pointer.</p>
    <pre><code>HEAD
 |
 v
[3|next]->[10|next]->[2|next]
   ^                      |
   |______________________|
   (Last element points back to first)
</code></pre>

    <h3>Structure Definition for Circular Lists</h3>
    <p>The structure definition of a circular linked list is exactly the same as that of a linear linked list.</p>
    <pre><code>struct node{
  int info;
  struct node *next;
};
typedef struct node *NODEptr;
</code></pre>

    <div class="divider"></div>

    <h2>Stack and Queue Implementation Using Linked List</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Stacks and queues do not have to be built using arrays - they can also be implemented using linked lists.</p>
    </div>
    <ul>
      <li>The major problem with a stack/queue implemented using an <strong>array</strong> is that it only works for a <strong>fixed number of data values</strong>.</li>
      <li>A stack/queue implemented using an array is not suitable when we don't know the size of the data we are going to use in advance.</li>
      <li>A stack/queue implemented using a <strong>linked list</strong> can work for an <strong>unlimited number of values</strong>.</li>
      <li>There is <strong>no need to fix the size</strong> at the beginning of the implementation.</li>
      <li>A stack/queue implemented using a linked list can organize as many data values as we want.</li>
    </ul>

    <div class="divider"></div>

    <h2>Stack Implementation Using Linked List</h2>
    <p>In a linked list implementation of a stack, every new element is inserted as the <strong>'top'</strong> element. Every newly inserted element is pointed to by <code>top</code>.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Example: if elements are inserted in the order 25, 32, 50, 99 - the <strong>last inserted node is 99</strong> and the <strong>first inserted node is 25</strong>. The <code>top</code> pointer points to 99.</p>
    </div>

    <h3>Setting Up the Stack</h3>
    <p>The first thing required to make a stack using a linked list is the creation of the <code>top</code> pointer.</p>
    <pre><code>struct node
{
  int data;
  struct node *next;
};
typedef struct node node;
node *top;
</code></pre>
    <p>The <strong>initialize</strong> function sets up the stack by making <code>top</code> equal to <code>NULL</code>.</p>
    <pre><code>void initialize()
{
  top = NULL;
}
</code></pre>

    <h3>Push Operation</h3>
    <p>The most important operations on a stack are <strong>push</strong> and <strong>pop</strong>.</p>
    <p>Steps for the push operation:</p>
    <ol>
      <li>Make a new node.</li>
      <li>Give the <code>data</code> of the new node its value.</li>
      <li>Point the <code>next</code> of the new node to the current top of the stack.</li>
      <li>Make the <code>top</code> pointer point to this new node.</li>
    </ol>
    <pre><code>void push(int value)
{
    node *tmp;
    tmp = malloc(sizeof(node));
    tmp -> data = value;
    tmp -> next = top;
    top = tmp;
}
</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Order matters: set <code>tmp -> next = top</code> <strong>before</strong> updating <code>top = tmp</code>. If you update <code>top</code> first, the link to the rest of the stack is lost.</p>
    </div>

    <h3>Pop Operation</h3>
    <p>In the pop operation, we delete the topmost node and return its value.</p>
    <ol>
      <li>Make a temporary node.</li>
      <li>Point this temporary node to the top of the stack.</li>
      <li>Store the value of <code>data</code> of this temporary node in a variable.</li>
      <li>Point the <code>top</code> pointer to the node next to the current top node.</li>
      <li>Delete the temporary node using the <code>free</code> function.</li>
      <li>Return the value stored in step 3.</li>
    </ol>
    <pre><code>int pop()
{
    node *tmp;
    int n;
    tmp = top;
    n = tmp->data;
    top = top->next;
    free(tmp);
    return n;
}
</code></pre>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Always check <code>isempty()</code> before calling <code>pop()</code>. Calling <code>pop()</code> on an empty stack dereferences a <code>NULL</code> pointer.</p>
    </div>

    <h3>Other Stack Functions</h3>
    <p>Other useful functions include <code>Top</code> and <code>isempty</code>.</p>
    <pre><code>int Top()
{
  return top->data;
}
int isempty()
{
  return top==NULL;
}
</code></pre>

    <div class="divider"></div>

    <h2>Queue Implementation Using Linked List</h2>

    <h3>Setting Up the Queue</h3>
    <p>The first thing required to make a queue using a linked list is a node structure.</p>
    <pre><code>struct node
{
  int data;
  struct node *next;
};
typedef struct node node;
</code></pre>
    <p>Next, create a <code>queue</code> structure which stores the front node, the rear node, and the total number of nodes in the linked list. The <code>queue</code> structure has three parts - <strong>count</strong>, <strong>front</strong>, and <strong>rear</strong>.</p>
    <pre><code>struct queue
{ 
  int count;
  node *front;
  node *rear;
};
typedef struct queue queue;
</code></pre>
    <p>The <strong>initialize</strong> function sets the queue's <code>count</code> to 0, and points both <code>front</code> and <code>rear</code> to <code>NULL</code>.</p>
    <pre><code>void initialize(queue *q)
{
  q->count = 0;
  q->front = NULL;
  q->rear = NULL;
}
</code></pre>

    <h3>Checking If the Queue Is Empty</h3>
    <p>The <code>rear</code> (or <code>front</code>) will be <code>NULL</code> for an empty queue. So we can easily check whether a queue is empty by checking whether <code>rear</code> is <code>NULL</code>.</p>
    <pre><code>int isempty(queue *q)
{
  return (q->rear == NULL);
}
</code></pre>

    <h3>Enqueue Operation</h3>
    <p>Steps for the enqueue operation:</p>
    <ol>
      <li>Make a new node - <code>node *tmp; tmp = malloc(sizeof(node));</code></li>
      <li>Give the <code>data</code> of the new node its value - <code>tmp -> data = value;</code></li>
      <li>If the queue is empty, point both <code>front</code> and <code>rear</code> of the queue to this node - <code>q->front = q->rear = tmp;</code></li>
      <li>If it is not empty, point the <code>rear</code> of the queue to this new node, then make this new node the <code>rear</code> - <code>q->rear->next = tmp; q->rear = tmp;</code></li>
    </ol>
    <pre><code>void enqueue(queue *q, int value)
{
  node *tmp;
  tmp = malloc(sizeof(node));
  tmp->data = value;
  tmp->next = NULL;
  if(!isempty(q))
  {
    q->rear->next = tmp;
    q->rear = tmp;
  }
  else
  {
    q->front = q->rear = tmp;
  }
  q->count++; 
}
</code></pre>

    <h3>Dequeue Operation</h3>
    <p>Steps for the dequeue operation:</p>
    <ol>
      <li>Make a temporary node.</li>
      <li>Point this temporary node to the front node of the queue.</li>
      <li>Store the value of <code>data</code> of this temporary node in a variable.</li>
      <li>Point the <code>front</code> pointer to the node next to the current front node.</li>
      <li>Delete the temporary node using the <code>free</code> function.</li>
      <li>Return the value stored in step 3.</li>
    </ol>
    <pre><code>int dequeue(queue *q)
{
  node *tmp;
  int n = q->front->data;
  tmp = q->front;
  q->front = q->front->next;
  q->count--;
  free(tmp);
  return(n);
}
</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A <strong>stack</strong> follows <strong>LIFO</strong> (Last In, First Out) - <code>push</code> and <code>pop</code> both happen at <code>top</code>. A <strong>queue</strong> follows <strong>FIFO</strong> (First In, First Out) - <code>enqueue</code> happens at <code>rear</code>, <code>dequeue</code> happens at <code>front</code>.</p>
    </div>
  `,
  summary: {
    topic: 'Circular Linked Lists, and Stack & Queue Implementation Using Linked Lists',
    subTopics: [
      'What is a Circular Linked List?',
      'Circular Doubly Linked List',
      'Advantages of Circular Linked Lists',
      'Applications of Circular Linked List',
      'Implementing a Circular Linked List',
      'Structure Definition for Circular Lists',
      'Stack and Queue Implementation Using Linked List',
      'Stack Implementation Using Linked List',
      'Queue Implementation Using Linked List',
    ],
    definitions: [
      { term: 'Circular Linked List', meaning: 'A linked list with no beginning and no end; the last node\'s next pointer stores the address of the first node instead of NULL.' },
      { term: 'Circular Doubly Linked List', meaning: 'A doubly linked list where both the successor (next) and predecessor (prev) pointers are arranged in a circular manner.' },
      { term: 'Stack', meaning: 'A LIFO (Last In, First Out) data structure where insertion and deletion both happen at the top.' },
      { term: 'Queue', meaning: 'A FIFO (First In, First Out) data structure where insertion happens at the rear and deletion happens at the front.' },
      { term: 'push', meaning: 'The stack operation that inserts a new node at the top.' },
      { term: 'pop', meaning: 'The stack operation that removes and returns the value of the top node.' },
      { term: 'enqueue', meaning: 'The queue operation that inserts a new node at the rear.' },
      { term: 'dequeue', meaning: 'The queue operation that removes and returns the value of the front node.' },
    ],
    keyPoints: [
      'A circular linked list has no beginning or end - the last node\'s next pointer stores the address of the first node instead of NULL.',
      'A circular doubly linked list has both next and prev pointers wrapping around in a circular manner.',
      'Circular linked lists allow traversal starting from any node; you stop when the starting node is reached again.',
      'Circular linked lists are useful for queue implementation because only one pointer (to the last node) is needed instead of separate front and rear pointers.',
      'Operating systems use circular linked lists to cycle through running applications, giving each a time slice.',
      'Multiplayer games use circular linked lists to cycle through players\' turns.',
      'The struct definition for a circular linked list node is identical to that of a linear linked list node.',
      'Array-based stacks/queues have a fixed size; linked-list-based stacks/queues can grow to hold an unlimited number of values.',
      'Stack: push inserts at top, pop removes from top - LIFO order.',
      'Queue: enqueue inserts at rear, dequeue removes from front - FIFO order.',
      'A linked-list queue needs a queue structure holding count, front, and rear pointers.',
      'Always check isempty() before calling pop() (stack) or dequeue() (queue) to avoid NULL pointer errors.',
    ],
  },
},

{
  id: 6,
  title: 'Trees - 01',
  content: `
    <span class="lesson-badge">LESSON 06</span>
    <h1>Trees - 01</h1>
    <div class="meta-info">ICT2113 <span>•</span> 16 min read</div>

    <h2>Why Do We Need Trees?</h2>
    <p><strong>Arrays</strong> and <strong>Linked Lists</strong> are <strong>linear data structures</strong>. Searching in them takes a little too long.</p>
    <p>This is not good enough today, because the speed of completing operations is very important. So we need <strong>better (more efficient) data structures</strong> to store and search data.</p>
    <p>We can extend the idea of a linked structure (linked list, stack, queue) into a structure where nodes can have <strong>multiple relations</strong> with other nodes. Such a structure is called a <strong>tree</strong>.</p>

    <div class="divider"></div>

    <h2>What is a Tree?</h2>
    <ul>
      <li>A tree is a <strong>widely-used</strong> data structure.</li>
      <li>It is <strong>not a linear structure</strong>. Arrays, linked lists, stacks and queues are all linear.</li>
      <li>A tree has a <strong>set of nodes</strong> and a <strong>set of edges</strong>. Each edge connects a pair of nodes.</li>
      <li>A tree can be <strong>empty</strong> (no nodes at all).</li>
      <li>Trees are useful for showing <strong>hierarchical relationships</strong> among data items.</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Hierarchical</strong> means the data is arranged in levels, like a boss at the top and workers below. A folder with sub-folders is a good everyday example.</p>
    </div>

    <h3>Nature View vs Computer Scientist's View</h3>
    <p>A real tree has its <strong>root at the bottom</strong> and <strong>leaves at the top</strong>. In computer science we flip the picture upside down. The <strong>root is at the top</strong> and the <strong>leaves are at the bottom</strong>.</p>

    <pre><code>Nature view              Computer scientist's view

  leaves                       root
  branches                     branches / nodes
  root                         leaves</code></pre>

    <p>In the computer scientist's view, the parts are called <strong>root</strong>, <strong>branches</strong>, <strong>nodes</strong> and <strong>leaves</strong>.</p>

    <div class="divider"></div>

    <h2>Trees in Computing</h2>
    <p>A tree has <strong>one root at the top</strong> and <strong>many leaves at the bottom</strong>.</p>

    <h3>Example 1: A Fruit Tree</h3>
    <pre><code>              root node
             /    |    \\
        branches ...  ...
        /   |   \\
   durian apple cherry plum tomato banana strawberry
   (leaf nodes)</code></pre>
    <ul>
      <li>The top node is the <strong>root node</strong>.</li>
      <li>The nodes in the middle are <strong>intermediate nodes</strong> (they have branches below them).</li>
      <li>The fruits at the bottom (durian, apple, cherry, plum, tomato, banana, strawberry) are the <strong>leaf nodes</strong>.</li>
    </ul>

    <h3>Example 2: Restaurant Staff</h3>
    <p>The staff of a restaurant can be shown as a tree. The people are: Owner Jake, Manager Brad, Chef Carol, Waitress Joyce, Waiter Chris, Helper Len and Cook Max.</p>
    <pre><code>            Owner Jake
           /          \\
    Manager Brad    Chef Carol
      /      \\        /     \\
  Waitress  Waiter  Helper   Cook
   Joyce    Chris    Len     Max</code></pre>

    <h3>A Tree Has One Root Node</h3>
    <p>The <strong>root node</strong> is the top node. In the restaurant tree, <strong>Owner Jake</strong> is the root.</p>

    <h3>Leaf Nodes Have No Children</h3>
    <p><strong>Leaf nodes</strong> are nodes with no children. In the restaurant tree, the leaf nodes are Waitress Joyce, Waiter Chris, Helper Len and Cook Max.</p>

    <h3>A Subtree</h3>
    <p>A <strong>subtree</strong> is a smaller tree inside a bigger tree. Every child of the root is the root of its own subtree. So the root here has a <strong>left subtree</strong> and a <strong>right subtree</strong>.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A tree has <strong>exactly one root</strong>. Leaf nodes have <strong>no children</strong>. Every child of a node is the root of a <strong>subtree</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Basic Tree Concepts</h2>
    <p>A <strong>node</strong> is a user-defined data structure. It contains pointers to data and pointers to other nodes.</p>
    <ul>
      <li><strong>Root</strong> - the node from which all other nodes descend.</li>
      <li><strong>Parent</strong> - a node that has child nodes arranged in subtrees.</li>
      <li><strong>Child</strong> - nodes in a tree have 0 or more children.</li>
      <li><strong>Leaf</strong> - a node without descendants.</li>
      <li><strong>Degree</strong> - the number of direct children a tree or subtree has.</li>
    </ul>

    <pre><code>          Root
           O
         / | \\
   Parent  O   O
      / \\
 Child   Leaf
 (node)  (node)</code></pre>

    <div class="divider"></div>

    <h2>Tree Terminology</h2>
    <p>Use this tree for the examples below:</p>
    <pre><code>            A
         /  |  \\
        B   C   D
       / \\ / \\
      E  F G  H
        /|\\
       I J K</code></pre>
    <p>In this tree, <strong>B</strong> has children E and F. <strong>C</strong> has children G and H. <strong>F</strong> has children I, J and K.</p>

    <h3>Main Terms</h3>
    <ul>
      <li><strong>Root</strong> - the node without a parent (<code>A</code>).</li>
      <li><strong>Siblings</strong> - nodes that share the same parent.</li>
      <li><strong>Internal node</strong> - a node with at least one child (<code>A, B, C, F</code>).</li>
      <li><strong>External node (leaf)</strong> - a node without children (<code>E, I, J, K, G, H, D</code>).</li>
      <li><strong>Ancestors</strong> of a node - its parent, grandparent, grand-grandparent, and so on. In other words, all the nodes along the path from the root to that node.</li>
      <li><strong>Descendants</strong> of a node - its child, grandchild, grand-grandchild, and so on.</li>
      <li><strong>Depth</strong> of a node - the number of ancestors it has.</li>
      <li><strong>Height</strong> of a tree - the maximum depth of any node (here it is <code>3</code>).</li>
      <li><strong>Degree of a node</strong> - the number of its children.</li>
      <li><strong>Degree of a tree</strong> - the maximum degree of any of its nodes.</li>
      <li><strong>Subtree</strong> - a tree made of a node and its descendants. For example, C with G and H is a subtree.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Internal node</strong> = has at least one child. <strong>External node (leaf)</strong> = has no children. The <strong>degree of a tree</strong> is the biggest degree among all its nodes.</p>
    </div>

    <h3>Degree of a Node (Another Way to See It)</h3>
    <ul>
      <li>The <strong>degree of a node</strong> is the number of <strong>subtrees</strong> of the node. In the level diagram below, the degree of A is 3 and the degree of C is 1.</li>
      <li>A node with <strong>degree 0</strong> is a <strong>leaf</strong> or <strong>terminal node</strong>.</li>
      <li>A node that has subtrees is the <strong>parent</strong> of the roots of those subtrees.</li>
      <li>The roots of these subtrees are the <strong>children</strong> of that node.</li>
      <li>Children of the same parent are <strong>siblings</strong>.</li>
      <li>The <strong>ancestors</strong> of a node are all the nodes along the path from the root to that node.</li>
    </ul>

    <h3>Level and Depth</h3>
    <p>Here is a tree with <strong>13 nodes</strong>. The number in brackets is the degree of each node.</p>
    <pre><code>Level 0:               A(3)
                    /   |    \\
Level 1:        B(2)   C(1)   D(3)
                / \\     |    / | \\
Level 2:     E(2) F(0) G(0) H(1) I(0) J(0)
             / \\              |
Level 3:  K(0) L(0)         M(0)</code></pre>
    <ul>
      <li>Number of nodes: <code>13</code></li>
      <li>Leaf (terminal) nodes: F, G, I, J, K, L, M</li>
      <li>Non-terminal nodes: A, B, C, D, E, H</li>
      <li>Degree of the tree: <code>3</code></li>
      <li>Height of the tree: <code>3</code></li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In the lecture picture, the level labels beside the nodes start from <strong>1</strong> (A = 1, B = 2, K = 4), but the level column on the right starts from <strong>0</strong>. Depth and level normally start from <strong>0 at the root</strong>. Check which one your lecturer expects in the exam.</p>
    </div>

    <h3>Depth</h3>
    <p>The <strong>depth</strong> of a node is the <strong>length of the path from the root to that node</strong>. The set of all nodes at a given depth is sometimes called a <strong>level</strong> of the tree. The root node is at <strong>depth zero</strong>.</p>
    <pre><code>Level 0:              A
                     / \\
Level 1:            B   C
                   / \\ /|\\
Level 2:          D  E F G H
                            |
Level 3:                    I</code></pre>
    <p>Example: the depth of <code>E</code> is <strong>2</strong>.</p>

    <h3>Height</h3>
    <p>The <strong>height</strong> of a tree is the <strong>length of the path from the root to the deepest node</strong> in the tree. A (rooted) tree with only one node (the root) has a height of <strong>zero</strong>.</p>
    <p>Example: the height of the tree above is <strong>3</strong>.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Depth</strong> is measured from the root <em>down to a node</em>. <strong>Height</strong> is measured from the root <em>to the deepest node</em>. The root is at depth 0. A tree with only a root has height 0.</p>
    </div>

    <h3>Practice: Tree Properties</h3>
    <p>Use the same tree (A to I) from the Depth example and fill in the table.</p>
    <pre><code>Property                 Value
-----------------------------------------------
Number of nodes          9
Height                   3
Root node                A
Leaves                   D, E, F, G, I
Interior nodes           A, B, C, H
Ancestors of H           C, A
Descendants of G         none (G is a leaf)
Siblings of E            D
Right subtree of A       subtree rooted at C (C, F, G, H, I)
Degree of this tree      3</code></pre>

    <div class="divider"></div>

    <h2>Application Areas of Trees</h2>
    <ul>
      <li><strong>Hierarchical data</strong> - operating systems store files in trees or tree-like structures. The <strong>directory structure</strong> of Windows, Unix and DOS is an example.</li>
      <li>As a <strong>workflow</strong> for compositing digital images for visual effects.</li>
      <li><strong>Router algorithms</strong></li>
      <li><strong>Compiler design</strong> and <strong>text processing</strong></li>
      <li><strong>Searching algorithms</strong></li>
      <li><strong>Evaluating mathematical expressions</strong></li>
      <li><strong>Analysis of electrical circuits</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Binary Tree</h2>
    <p>A tree whose elements have <strong>at most 2 children</strong> is called a <strong>binary tree</strong>. Each element can have only 2 children, so we name them the <strong>left child</strong> and the <strong>right child</strong>.</p>
    <p>Binary trees are excellent for <strong>searching large amounts of information</strong>. They are commonly used in <strong>database applications</strong> to organize key values that index database records.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>When a binary tree is used to make searching easier, it is called a <strong>binary search tree</strong>.</p>
    </div>

    <h3>Properties of Binary Trees</h3>
    <ul>
      <li>A binary tree can contain <strong>at most 2<sup>L</sup> nodes at level L</strong>.</li>
      <li>If a binary tree has <strong>m nodes at level L</strong>, then it has <strong>at most 2m nodes at level L+1</strong>.</li>
    </ul>
    <pre><code>Level 0  →  at most 1 node   = 2^0
Level 1  →  at most 2 nodes  = 2^1
Level 2  →  at most 4 nodes  = 2^2
Level L  →  at most 2^L nodes</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Maximum nodes at level <code>L</code> in a binary tree = <strong>2<sup>L</sup></strong>. Each node has at most <strong>2 children</strong>.</p>
    </div>

    <h3>Binary Tree Representation</h3>
    <p>A tree is represented by a <strong>pointer to the topmost node</strong> (the root). If the tree is empty, the value of root is <code>NULL</code>. A tree node has three parts:</p>
    <ol>
      <li><strong>Data</strong></li>
      <li><strong>Pointer to left child</strong></li>
      <li><strong>Pointer to right child</strong></li>
    </ol>
    <pre><code>struct node
{
    int data;
    struct node *left;
    struct node *right;
};</code></pre>

    <h3>Binary Tree in C</h3>
    <p>Let's build this tree:</p>
    <pre><code>tree
----
     1   &lt;-- root
    / \\
   2   3
  /
 4</code></pre>
    <p>First, the node structure and a helper function <code>newNode()</code>. It creates a new node with the given data and <code>NULL</code> left and right pointers.</p>
    <pre><code>struct node
{
    int data;
    struct node *left;
    struct node *right;
};

/* newNode() allocates a new node with the given data
   and NULL left and right pointers. */
struct node* newNode(int data)
{
    // Allocate memory for new node
    struct node* node = (struct node*)malloc(sizeof(struct node));

    // Assign data to this node
    node-&gt;data = data;

    // Initialize left and right children as NULL
    node-&gt;left = NULL;
    node-&gt;right = NULL;
    return(node);
}</code></pre>
    <p>Now the <code>main()</code> function builds the tree step by step:</p>
    <pre><code>int main()
{
    /* create root */
    struct node *root = newNode(1);
    /* following is the tree after above statement
            1
           / \\
        NULL NULL
    */

    root-&gt;left  = newNode(2);
    root-&gt;right = newNode(3);
    /* 2 and 3 become left and right children of 1
            1
           / \\
          2   3
         / \\ / \\
      NULL NULL NULL NULL
    */

    root-&gt;left-&gt;left = newNode(4);
    /* 4 becomes left child of 2
            1
           / \\
          2   3
         / \\ / \\
        4 NULL NULL NULL
       / \\
    NULL NULL
    */

    return 0;
}</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Read <code>root-&gt;left-&gt;left</code> step by step: go to the root, then its left child, then that node's left child. That is how <code>4</code> is attached below <code>2</code>.</p>
    </div>

    <div class="divider"></div>

    <h2>Binary Tree for Expressions (Expression Trees)</h2>
    <p>Binary trees can show <strong>mathematical expressions</strong>. Operators (<code>+ - * /</code>) are the internal nodes. The values (<code>a, b, c, d</code>) are the leaves.</p>

    <h3>(a) (a * b) + (c / d)</h3>
    <pre><code>        +
       / \\
      *   /
     / \\ / \\
    a  b c  d</code></pre>

    <h3>(b) ((a + b) + c) + d</h3>
    <pre><code>        +
       / \\
      +   d
     / \\
    +   c
   / \\
  a   b</code></pre>

    <h3>(c) ((-a) + (x + y)) / ((+b) * (c * a))</h3>
    <pre><code>              /
          ____/ \\____
         +           *
        / \\         / \\
       -   +       +   *
       |  / \\      |  / \\
       a  x  y     b  c   a</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>In tree (c), the unary signs <code>-</code> and <code>+</code> (as in <code>-a</code> and <code>+b</code>) have only <strong>one child</strong>. This shows that binary trees do not need every node to have 2 children.</p>
    </div>

    <div class="divider"></div>

    <h2>Binary Tree Representation Methods</h2>
    <p>There are two ways to represent a binary tree:</p>
    <ul>
      <li><strong>Array representation</strong></li>
      <li><strong>Linked representation</strong></li>
    </ul>

    <h3>Array Representation</h3>
    <p>The binary tree is stored in an array. Each element is stored at the array position that matches the <strong>number assigned to it</strong>. The nodes are numbered level by level, starting at 1 for the root.</p>
    <pre><code>Node numbers:
              a(1)
            /      \\
        b(2)        c(3)
        /  \\        /  \\
     d(4)  e(5)   f(6)  g(7)
     / \\    /
  h(8) i(9) j(10)

Array:
index:  0   1   2   3   4   5   6   7   8   9   10
tree[]: -   a   b   c   d   e   f   g   h   i   j</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Position 0 is not used. With this numbering, the left child of the node at position <code>i</code> is at <code>2i</code>, and the right child is at <code>2i + 1</code>. For example, <code>b</code> (2) has children <code>d</code> (4) and <code>e</code> (5).</p>
    </div>

    <h3>Linked Representation</h3>
    <ul>
      <li>This is the <strong>most popular way</strong> to represent a binary tree.</li>
      <li>Each element is a <strong>node</strong> with <strong>two link fields</strong> (<code>leftChild</code> and <code>rightChild</code>) plus an <code>element</code> field.</li>
      <li>Each binary tree node is an object whose data type is <code>binaryTreeNode</code>.</li>
      <li>The space needed for a binary tree with <code>n</code> nodes is <code>n * sizeof(binaryTreeNode)</code>.</li>
    </ul>
    <pre><code>Each node:  [ leftChild | element | rightChild ]

root → a
       ├─ left:  b
       │         └─ left:  d
       │                   └─ left:  f
       └─ right: c
                 └─ right: e
                           └─ left:  g
                                     └─ right: h</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Linked representation node = <strong>leftChild + element + rightChild</strong>. Space for <code>n</code> nodes = <strong>n × size of one node</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Binary Search Tree (BST)</h2>
    <p>A <strong>binary search tree</strong> is a binary tree with these three properties:</p>
    <ol>
      <li>The <strong>left subtree</strong> of a node contains only nodes with data <strong>less than</strong> the node's data.</li>
      <li>The <strong>right subtree</strong> of a node contains only nodes with data <strong>greater than</strong> the node's data.</li>
      <li>Both the left and right subtrees are <strong>also binary search trees</strong>.</li>
    </ol>
    <pre><code>                50
             /      \\
          25          76
         /  \\        /  \\
       12    37    65    89
      / \\   / \\   / \\   / \\
     6  17 32 41 59 72 83 95</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>BST rule: <strong>left &lt; node &lt; right</strong>, and this rule must be true for <strong>every subtree</strong> too.</p>
    </div>

    <h3>BST Terminology (Using the Tree Above)</h3>
    <ul>
      <li><strong>Root node</strong> - <code>50</code></li>
      <li><strong>Parent</strong> of the node that contains 12 - <code>25</code></li>
      <li><strong>Left child</strong> of the node that contains 25 - <code>12</code></li>
      <li><strong>Right subtree</strong> of the tree whose root is 76 - the subtree with root <code>89</code> (nodes 89, 83, 95)</li>
      <li><strong>Leaf nodes</strong> - <code>6, 17, 32, 41, 59, 72, 83, 95</code></li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Binary trees <strong>do not have to be symmetrical</strong>. Nodes can have only a left child, only a right child, or none.</p>
    </div>

    <h3>Insertion Operation</h3>
    <p>We want to insert a new node <code>63</code> into the tree. Where should we put it? Start at the root and compare at each step.</p>
    <ol>
      <li><code>63</code> is <strong>bigger than 50</strong>, so go down the <strong>right</strong> subtree.</li>
      <li><code>63</code> is <strong>smaller than 76</strong>, so go down the <strong>left</strong> subtree.</li>
      <li><code>63</code> is <strong>smaller than 65</strong>, so go down the <strong>left</strong> subtree.</li>
      <li><code>63</code> is <strong>bigger than 59</strong>, and 59 has <strong>no right child</strong>, so that is where it goes.</li>
    </ol>
    <pre><code>Path taken:  50 → 76 → 65 → 59 → (right of 59)

                50
             /      \\
          25          76
         /  \\        /  \\
       12    37    65    89
      / \\   / \\   / \\   / \\
     6  17 32 41 59 72 83 95
                   \\
                    63   ← new node</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>To insert into a BST: <strong>compare, go left or right, repeat</strong>. Stop when you reach a place with no child. Put the new node there.</p>
    </div>

    <div class="divider"></div>

    <h2>Binary Tree Traversals</h2>
    <p>Traversal means visiting the nodes of a tree. There are <strong>three types</strong> of traversal:</p>
    <ul>
      <li><strong>Preorder</strong></li>
      <li><strong>Inorder</strong></li>
      <li><strong>Postorder</strong></li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The three binary tree traversals are <strong>Preorder, Inorder and Postorder</strong>.</p>
    </div>
  `,
  summary: {
    topic: 'Trees: Terminology, Binary Trees, Binary Search Trees and Insertion',
    subTopics: [
      'Why Do We Need Trees?',
      'What is a Tree?',
      'Nature View vs Computer Scientist View',
      'Trees in Computing (Fruit and Restaurant Examples)',
      'Basic Tree Concepts',
      'Tree Terminology',
      'Level and Depth',
      'Height',
      'Tree Properties Practice',
      'Application Areas of Trees',
      'Binary Tree',
      'Properties of Binary Trees',
      'Binary Tree Representation and Binary Tree in C',
      'Expression Trees',
      'Array Representation',
      'Linked Representation',
      'Binary Search Tree (BST)',
      'BST Terminology',
      'Insertion Operation',
      'Binary Tree Traversals',
    ],
    definitions: [
      { term: 'Tree', meaning: 'A non-linear data structure made of a set of nodes and a set of edges connecting pairs of nodes. It can be empty.' },
      { term: 'Hierarchical data', meaning: 'Data arranged in levels with parent-child relationships, which trees represent well.' },
      { term: 'Node', meaning: 'A user-defined data structure that contains pointers to data and pointers to other nodes.' },
      { term: 'Root', meaning: 'The top node without a parent, from which all other nodes descend.' },
      { term: 'Parent', meaning: 'A node that has child nodes arranged in subtrees.' },
      { term: 'Child', meaning: 'A node that comes directly below a parent. A node can have 0 or more children.' },
      { term: 'Siblings', meaning: 'Nodes that share the same parent.' },
      { term: 'Leaf (External / Terminal node)', meaning: 'A node without children (degree 0).' },
      { term: 'Internal node', meaning: 'A node with at least one child.' },
      { term: 'Subtree', meaning: 'A tree consisting of a node and all its descendants.' },
      { term: 'Ancestor', meaning: 'Any node on the path from the root to a given node: its parent, grandparent, and so on.' },
      { term: 'Descendant', meaning: 'A child, grandchild, grand-grandchild, and so on of a node.' },
      { term: 'Degree of a node', meaning: 'The number of children (subtrees) of that node.' },
      { term: 'Degree of a tree', meaning: 'The maximum degree of any node in the tree.' },
      { term: 'Depth of a node', meaning: 'The length of the path from the root to that node (the number of its ancestors). The root has depth 0.' },
      { term: 'Level', meaning: 'The set of all nodes at a given depth.' },
      { term: 'Height of a tree', meaning: 'The length of the path from the root to the deepest node (maximum depth). A tree with only a root has height 0.' },
      { term: 'Binary Tree', meaning: 'A tree in which every node has at most 2 children, called the left child and the right child.' },
      { term: 'Binary Search Tree', meaning: 'A binary tree where the left subtree has smaller data, the right subtree has greater data, and both subtrees are also binary search trees.' },
      { term: 'Expression Tree', meaning: 'A binary tree that represents a mathematical expression, with operators as internal nodes and values as leaves.' },
      { term: 'Array Representation', meaning: 'Storing a binary tree in an array, with each element at the position matching its node number.' },
      { term: 'Linked Representation', meaning: 'Storing each node with a leftChild link, an element field and a rightChild link. It is the most popular way.' },
      { term: 'Tree Traversal', meaning: 'Visiting the nodes of a binary tree. The three types are preorder, inorder and postorder.' },
    ],
    keyPoints: [
      'Arrays and linked lists are linear and slow to search, so trees are used for more efficient storage and searching.',
      'A tree is non-linear and hierarchical. It has nodes and edges, and it can be empty.',
      'In computer science, the root is drawn at the top and the leaves at the bottom.',
      'A tree has exactly one root. Leaf nodes have no children.',
      'Internal node = at least one child. External node (leaf) = no children.',
      'Degree of a node = number of its children. Degree of a tree = maximum degree of any node.',
      'Depth of a node = length of the path from the root. The root is at depth 0.',
      'Height of a tree = maximum depth. A single-node tree has height 0.',
      'Common applications: file directory structures, compilers, routers, searching, expression evaluation, and circuit analysis.',
      'A binary tree node has at most 2 children (left and right).',
      'A binary tree has at most 2^L nodes at level L. If a level has m nodes, the next level has at most 2m.',
      'A binary tree node has three parts: data, pointer to left child, pointer to right child. The C struct node demonstrates this.',
      'An empty tree has root = NULL. The newNode() function creates a node with NULL left and right pointers.',
      'Expression trees put operators in internal nodes and operands in leaves.',
      'Binary trees can be stored using an array representation or a linked representation.',
      'Linked representation of an n-node binary tree needs n * sizeof(binaryTreeNode) space.',
      'BST rule: left subtree less than node, right subtree greater than node, and every subtree is also a BST.',
      'Binary trees do not have to be symmetrical.',
      'BST insertion: compare with each node, go left if smaller and right if bigger, and place the new node where there is no child. Example: 63 goes to the right of 59.',
      'The three binary tree traversals are preorder, inorder and postorder.',
    ],
  },
},


{
  id: 7,
  title: 'Trees - 02',
  content: `
    <span class="lesson-badge">LESSON 07</span>
    <h1>Trees - 02</h1>
    <div class="meta-info">ICT2113 <span>•</span> 25 min read</div>

    <h2>Example Applications of Binary Trees</h2>
    <p>Binary trees are used in many places. Some common examples are:</p>
    <ul>
      <li><strong>Arithmetic Expression Tree</strong></li>
      <li><strong>Binary Search Tree</strong></li>
      <li><strong>Decision Tree</strong></li>
      <li><strong>AVL Tree</strong></li>
      <li><strong>Priority Queue</strong> (using a <strong>Binary Heap Tree</strong>)</li>
    </ul>

    <h3>Basic Operators of a Binary Tree</h3>
    <ul>
      <li><strong>Pre-order Traversal</strong> - visits the tree in pre-order.</li>
      <li><strong>In-order Traversal</strong> - visits the tree in in-order.</li>
      <li><strong>Post-order Traversal</strong> - visits the tree in post-order.</li>
      <li><strong>Search</strong> - finds an element in the tree.</li>
      <li><strong>Insert</strong> - adds an element to the tree.</li>
      <li><strong>Delete</strong> - removes an element from the tree.</li>
    </ul>

    <div class="divider"></div>

    <h2>Binary Tree Traversals</h2>
    <p>Many algorithms need to <strong>visit every node</strong> of a binary tree and process (or examine) the content of each node. This is called a <strong>traversal</strong>.</p>
    <p>There are <strong>three types</strong> of traversals:</p>
    <ul>
      <li><strong>Preorder traversal</strong> - process the <strong>root</strong>, then process all subtrees (left to right).</li>
      <li><strong>Inorder traversal</strong> - process the <strong>left subtree</strong>, then the <strong>root</strong>, then the <strong>right subtree</strong>.</li>
      <li><strong>Postorder traversal</strong> - process the <strong>left subtree</strong>, then the <strong>right subtree</strong>, then the <strong>root</strong>.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Preorder</strong> = Root, Left, Right. <strong>Inorder</strong> = Left, Root, Right. <strong>Postorder</strong> = Left, Right, Root. The name tells you <em>when the root is processed</em>: before, in the middle, or after.</p>
    </div>

    <h3>What to Do at Each Node</h3>
    <p><strong>Preorder:</strong> when you get to a node:</p>
    <ol>
      <li>Print the node's data.</li>
      <li>Then traverse its left subtree.</li>
      <li>Then traverse its right subtree.</li>
    </ol>
    <p><strong>Inorder:</strong> when you get to a node:</p>
    <ol>
      <li>Traverse its left subtree.</li>
      <li>Then print the node's data.</li>
      <li>Then traverse its right subtree.</li>
    </ol>
    <p><strong>Postorder:</strong> when you get to a node:</p>
    <ol>
      <li>Traverse its left subtree.</li>
      <li>Then traverse its right subtree.</li>
      <li>Then print the node's data.</li>
    </ol>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The <strong>inorder traversal of a binary search tree gives the data in sorted order</strong>.</p>
    </div>

    <h3>Visiting Order on a 3-Node Tree</h3>
    <p>The numbers show the <strong>order in which each position is visited</strong>.</p>
    <pre><code>Preorder          Inorder           Postorder
(Node, L, R)      (L, Node, R)      (L, R, Node)

     1                 2                 3
    / \\               / \\               / \\
   2   3             1   3             1   2

Node  = 1         Left  = 1         Left  = 1
Left  = 2         Node  = 2         Right = 2
Right = 3         Right = 3         Node  = 3</code></pre>

    <h3>Depth First and Breadth First Traversals</h3>
    <p>Arrays, linked lists, stacks and queues have only <strong>one logical way</strong> to be traversed. <strong>Trees can be traversed in different ways.</strong></p>
    <pre><code>        1
       / \\
      2   3
     / \\
    4   5</code></pre>
    <p><strong>Depth First Traversals:</strong></p>
    <ul>
      <li>(a) <strong>Preorder</strong> (Root, Left, Right): <code>1 2 4 5 3</code></li>
      <li>(b) <strong>Inorder</strong> (Left, Root, Right): <code>4 2 5 1 3</code></li>
      <li>(c) <strong>Postorder</strong> (Left, Right, Root): <code>4 5 2 3 1</code></li>
    </ul>
    <p><strong>Breadth First (Level Order) Traversal:</strong> <code>1 2 3 4 5</code></p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Level order</strong> visits the tree level by level, from top to bottom and left to right.</p>
    </div>

    <h3>Trick: Trace a Path Around the Tree</h3>
    <p>To find the result of a traversal, <strong>draw a path around the tree</strong>. Start on the left side of the root and trace around the tree. Keep the path close to the tree.</p>
    <pre><code>        12
       /  \\
     49    42
    /  \\
  13    5</code></pre>
    <ul>
      <li><strong>Preorder</strong>: process the node when you <strong>pass down the left side</strong> of it → <code>12 49 13 5 42</code></li>
      <li><strong>Inorder</strong>: process the node when you <strong>pass underneath</strong> it → <code>13 49 5 12 42</code></li>
      <li><strong>Postorder</strong>: process the node when you <strong>pass up the right side</strong> of it → <code>13 5 49 42 12</code></li>
    </ul>

    <h3>Traversals on a Binary Search Tree</h3>
    <p>Here is the tree used in the lecture:</p>
    <pre><code>41
├─ left: 9
│   ├─ left: 0
│   │   └─ right: 3
│   │       ├─ left: 2
│   │       └─ right: 4
│   └─ right: 37
│       └─ left: 32
│           └─ left: 21
└─ right: 73
    ├─ left: 54
    │   ├─ left: 46
    │   └─ right: 72
    │       └─ left: 65
    └─ right: 89
        └─ left: 74
            └─ right: 77</code></pre>
    <ul>
      <li><strong>Pre-order:</strong> <code>41 9 0 3 2 4 37 32 21 73 54 46 72 65 89 74 77</code></li>
      <li><strong>Post-order:</strong> <code>2 4 3 0 21 32 37 9 46 65 72 54 77 74 89 73 41</code></li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>In pre-order the <strong>root (41) comes first</strong>. In post-order the <strong>root (41) comes last</strong>. This is a quick way to check your answer.</p>
    </div>

    <h3>C Program: Traversals</h3>
    <p>Each traversal is a <strong>recursive function</strong>. It stops when the node is <code>NULL</code>. The only difference between the three is <strong>where the <code>printf</code> line is placed</strong>.</p>
    <pre><code>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct node {
    int data;
    struct node* left;
    struct node* right;
};

void inorder(struct node* root) {
    if (root == NULL) return;
    inorder(root-&gt;left);
    printf("%d -&gt;", root-&gt;data);
    inorder(root-&gt;right);
}

void preorder(struct node* root) {
    if (root == NULL) return;
    printf("%d -&gt;", root-&gt;data);
    preorder(root-&gt;left);
    preorder(root-&gt;right);
}

void postorder(struct node* root) {
    if (root == NULL) return;
    postorder(root-&gt;left);
    postorder(root-&gt;right);
    printf("%d -&gt;", root-&gt;data);
}

struct node* createNode(int value) {
    struct node* newNode = malloc(sizeof(struct node));
    newNode-&gt;data = value;
    newNode-&gt;left = NULL;
    newNode-&gt;right = NULL;
    return newNode;
}

struct node* insertLeft(struct node *root, int value) {
    root-&gt;left = createNode(value);
    return root-&gt;left;
}

struct node* insertRight(struct node *root, int value) {
    root-&gt;right = createNode(value);
    return root-&gt;right;
}

int main() {
    struct node* root = createNode(1);
    insertLeft(root, 12);
    insertRight(root, 9);

    insertLeft(root-&gt;left, 5);
    insertRight(root-&gt;left, 6);

    printf("Inorder traversal \\n");
    inorder(root);

    printf("\\nPreorder traversal \\n");
    preorder(root);

    printf("\\nPostorder traversal \\n");
    postorder(root);
}</code></pre>
    <p>The tree built by <code>main()</code> is:</p>
    <pre><code>        1
       / \\
     12    9
    /  \\
   5    6</code></pre>
    <ul>
      <li><strong>Inorder:</strong> <code>5 12 6 1 9</code></li>
      <li><strong>Preorder:</strong> <code>1 12 5 6 9</code></li>
      <li><strong>Postorder:</strong> <code>5 6 12 9 1</code></li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In the lecture slide, <code>createNode(value)</code> has no type for <code>value</code>, and one bracket is missing in the <code>malloc</code> line. The code above is written correctly as <code>createNode(int value)</code> so that it compiles.</p>
    </div>

    <div class="divider"></div>

    <h2>Infix, Prefix and Postfix Notation</h2>
    <p>Look at this expression: <code>4 * (3 + 8)</code></p>
    <p>This is written in <strong>infix notation</strong>. The <strong>operators</strong> (<code>+ - * /</code>) are written <strong>between</strong> their operands. This is the usual notation from mathematics.</p>
    <pre><code>Infix:    4 * (3 + 8)
Prefix:   * 4 + 3 8
Postfix:  4 3 8 + *</code></pre>
    <ul>
      <li><strong>Infix</strong> - operator between operands.</li>
      <li><strong>Prefix</strong> - operator <strong>before</strong> operands.</li>
      <li><strong>Postfix</strong> - operator <strong>after</strong> operands.</li>
    </ul>

    <h3>Practice: Convert to Prefix and Postfix</h3>
    <pre><code>Infix                      Prefix                Postfix
--------------------------------------------------------------------
1. 4 + 5                   + 4 5                 4 5 +
2. 4 / 3 + 7               + / 4 3 7             4 3 / 7 +
3. (5 + 2) * (3 + 1)       * + 5 2 + 3 1         5 2 + 3 1 + *
4. 4 / (3 + 6) + 5 * 9     + / 4 + 3 6 * 5 9     4 3 6 + / 5 9 * +</code></pre>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>The sign between 5 and 9 in question 4 did not show clearly in the slide. It is taken as a multiplication sign (×) here.</p>
    </div>

    <h3>Binary Tree with an Arithmetic Expression</h3>
    <p>In an expression tree, <strong>operators are internal nodes</strong> and <strong>operands are leaves</strong>.</p>
    <pre><code>+
├─ *
│   ├─ *
│   │   ├─ /
│   │   │   ├─ A
│   │   │   └─ B
│   │   └─ C
│   └─ D
└─ E</code></pre>
    <ul>
      <li><strong>Inorder</strong> traversal: <code>A/B*C*D+E</code> → <strong>infix</strong> form</li>
      <li><strong>Preorder</strong> traversal: <code>+**/ABCDE</code> → <strong>prefix</strong> form</li>
      <li><strong>Postorder</strong> traversal: <code>AB/C*D*E+</code> → <strong>postfix</strong> form</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Expression tree: <strong>Inorder → Infix</strong>, <strong>Preorder → Prefix</strong>, <strong>Postorder → Postfix</strong>.</p>
    </div>

    <h3>Another Expression Tree Example</h3>
    <pre><code>*
├─ +
│   ├─ A
│   └─ B
└─ -
    ├─ X
    └─ Y</code></pre>
    <ul>
      <li><strong>Infix 1</strong> (no brackets): <code>A+B*X-Y</code></li>
      <li><strong>Infix 2</strong> (with brackets): <code>((A+B) * (X-Y))</code></li>
      <li><strong>Prefix:</strong> <code>*+AB-XY</code></li>
      <li><strong>Postfix:</strong> <code>AB+XY-*</code></li>
    </ul>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>A plain inorder traversal (Infix 1) has <strong>no brackets</strong>, so it can show the wrong meaning. <code>A+B*X-Y</code> is not the same as <code>((A+B) * (X-Y))</code>. Use <strong>brackets</strong> when you write the infix form from a tree.</p>
    </div>

    <h3>Exercise 1</h3>
    <p>Draw an expression tree for <code>A + (B * (C / D))</code>.</p>
    <p><strong>Answer:</strong></p>
    <pre><code>+
├─ A
└─ *
    ├─ B
    └─ /
        ├─ C
        └─ D</code></pre>

    <h3>Exercise 2</h3>
    <p>Draw a binary tree for <code>A * B - (C + D) * (P / Q)</code>.</p>
    <p><strong>Answer:</strong></p>
    <pre><code>-
├─ *
│   ├─ A
│   └─ B
└─ *
    ├─ +
    │   ├─ C
    │   └─ D
    └─ /
        ├─ P
        └─ Q</code></pre>

    <h3>Home Exercises</h3>
    <p>Create binary trees for these expressions:</p>
    <ol>
      <li><code>( a + b ) / ( c - d * e ) + f + g * h / i</code></li>
      <li><code>(( A + B ) * ( C + D )) / ( E + F * H )</code></li>
      <li>Represent <code>[a + (b - c)] * [(d - e) / (f + g - h)]</code> in a binary tree.</li>
      <li>Write the <strong>pre-order</strong> and <strong>post-order</strong> traversals of the binary tree you got in question 3.</li>
    </ol>

    <div class="divider"></div>

    <h2>Height and Depth of a Node</h2>
    <p>Use this tree for the examples:</p>
    <pre><code>E
├─ B
│   ├─ A
│   └─ D
│       └─ C
└─ F
    └─ H
        ├─ G
        └─ I</code></pre>
    <ul>
      <li><strong>Height of a node</strong> - the path length to its <strong>most distant descendant</strong>.</li>
      <li><strong>Height of a tree</strong> - the height of the <strong>root node</strong>.</li>
      <li><strong>Depth of a node</strong> - the path length <strong>from the node up to the root</strong>.</li>
    </ul>
    <p>Examples from this tree:</p>
    <ul>
      <li>Height of <code>E</code> is <strong>3</strong></li>
      <li>Height of <code>B</code> is <strong>2</strong></li>
      <li>Height of <code>D</code> is <strong>1</strong></li>
      <li>Depth of <code>C</code> is <strong>3</strong></li>
      <li>Depth of <code>F</code> is <strong>1</strong></li>
    </ul>

    <h3>Levels</h3>
    <p>The <strong>number of levels</strong> counts the <strong>number of nodes along any path</strong>. The tree above has <strong>4 levels</strong>, because there are 4 nodes along the longest path (E, B, D, C).</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Height</strong> counts <em>links</em> (edges) in the longest path. <strong>Levels</strong> counts <em>nodes</em> in the longest path. So <strong>Levels = Height + 1</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Binary Tree Complexity Analysis</h2>
    <ul>
      <li>For a binary tree of height <code>H</code> and <code>L = H + 1</code> levels, there are <strong>2<sup>L</sup> − 1 = N</strong> nodes.</li>
      <li>When searching for a target, we must visit <strong>at most L levels</strong>.</li>
      <li>The worst-case search for a <strong>completely balanced tree</strong> is <strong>log<sub>2</sub>(N + 1) = L</strong>.</li>
      <li>The time needed is proportional to <strong>log<sub>2</sub> N</strong>.</li>
      <li>In contrast, the worst-case search time in a <strong>linked list</strong> is proportional to <strong>N</strong>.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Balanced binary tree search: <strong>O(log<sub>2</sub> N)</strong>. Linked list search: <strong>O(N)</strong>. This is true only when the tree is <strong>balanced</strong>.</p>
    </div>

    <h3>Example: A Tree with 4 Levels</h3>
    <ul>
      <li>2<sup>4</sup> − 1 = <strong>15 nodes</strong> in total.</li>
      <li><strong>4 levels</strong> = the number of nodes in the longest path.</li>
      <li><strong>Height is 3</strong> = the number of links in the longest path.</li>
      <li>Levels = log<sub>2</sub>(15 + 1) = 4.</li>
    </ul>

    <h3>Linked List vs Balanced Binary Tree</h3>
    <pre><code>N        log2 N
--------------
2          1
4          2
8          3
16         4
32         5
64         6
128        7
256        8
512        9
1024      10
2048      11
4096      12
8192      13
16384     14
32768     15</code></pre>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>This table <strong>assumes the tree is balanced</strong>! Also, the lecture slide shows 8192 → 14 and 16384 → 13. These two are swapped by mistake. The correct values are 8192 → 13 and 16384 → 14, as shown above.</p>
    </div>
    <p>Look at how slowly <code>log<sub>2</sub> N</code> grows. Searching among 32768 items in a balanced tree needs only about <strong>15 steps</strong>. A linked list may need up to <strong>32768</strong>.</p>

    <div class="divider"></div>

    <h2>Types of Binary Trees</h2>
    <p>Binary trees are classified into:</p>
    <ul>
      <li><strong>Strictly binary tree</strong></li>
      <li><strong>Complete binary tree</strong></li>
      <li><strong>Almost complete binary tree</strong></li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>This classification is important when we <strong>evaluate the efficiency of processing</strong>.</p>
    </div>

    <h3>Strictly Binary Tree</h3>
    <p>In a <strong>strictly binary tree</strong>, <strong>every non-leaf node has two children</strong>. In other words, every node other than the leaves branches to two children.</p>
    <p>For <strong>n leaves</strong>, there are always <strong>2n − 1 nodes</strong>. Example: 4 leaves → 2 × 4 − 1 = <strong>7 nodes</strong>.</p>
    <pre><code>Strictly binary tree (4 leaves, 7 nodes):

         D
       /   \\
      B     F
     / \\   / \\
    A   C E   G</code></pre>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>If <strong>even one non-leaf node has only one child</strong>, the tree is <strong>not</strong> strictly binary.</p>
    </div>

    <h3>Complete Binary Tree</h3>
    <p>A <strong>complete binary tree of depth d</strong> is a strictly binary tree with <strong>all of its leaves at level d</strong>. It is also called a <strong>completely balanced tree</strong>.</p>
    <ul>
      <li>A balanced tree of depth <code>d</code> contains <strong>2<sup>d</sup> leaves</strong> and <strong>2<sup>d</sup> − 1 non-leaf nodes</strong>.</li>
    </ul>
    <p>Example: depth <code>d = 2</code></p>
    <pre><code>         D
       /   \\
      B     F
     / \\   / \\
    A   C E   G

Leaf nodes     = 2^2     = 4
Non-leaf nodes = 2^2 - 1 = 3</code></pre>

    <h3>Almost Complete Binary Tree</h3>
    <pre><code>            F
          /   \\
        D       H
       / \\     / \\
      B   E   G   I
     / \\
    A   C</code></pre>
    <ul>
      <li>Each <strong>leaf</strong> is at <strong>level d or level d − 1</strong>.</li>
      <li>If a node has a <strong>right descendant at level d</strong>, then <strong>all the left descendants that are leaves are also at level d</strong>.</li>
    </ul>

    <h3>Is This Tree "Almost Complete"?</h3>
    <pre><code>            F
          /   \\
        D       J
       / \\
      B   E
     / \\
    A   C</code></pre>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p><strong>NO!</strong> <code>F</code> has a right descendant at level d, but <strong>not all its left leaf descendants are at level d</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Balanced vs Unbalanced Trees</h2>
    <p>Compare these two binary trees. They hold the <strong>same 7 letters</strong> (A to G), but the shape is different.</p>
    <pre><code>Balanced tree:            Degenerate tree:

        D                 A
      /   \\                \\
     B     F                B
    / \\   / \\                \\
   A   C E   G                C
                               \\
                                D
                                 \\
                                  E
                                   \\
                                    F
                                     \\
                                      G</code></pre>
    <ul>
      <li><strong>Same:</strong> both are binary trees with the same 7 data items.</li>
      <li><strong>Different:</strong> the shape. The right one is a long chain, like a linked list.</li>
      <li><strong>More efficient:</strong> the balanced tree.</li>
    </ul>

    <h3>How Good? How Bad?</h3>
    <ul>
      <li>Worst-case search for the <strong>balanced tree</strong> is <code>L = log<sub>2</sub>(7 + 1) = 3</code>.</li>
      <li>Worst-case search for the <strong>degenerate tree</strong> is <code>L = 7</code>.</li>
      <li>Insert and delete need to work towards <strong>producing balanced trees</strong>!</li>
    </ul>

    <h3>Producing Balanced Trees</h3>
    <ul>
      <li>Inserting in <strong>random order</strong> generally produces <strong>roughly balanced</strong> trees.</li>
      <li>If the data is inserted <strong>in order</strong> (sorted), the tree <strong>degenerates into a linked list</strong>!</li>
      <li>Sometimes, if the tree becomes unbalanced, it is right to <strong>rebuild</strong> the tree.</li>
      <li>Inserting in a way that keeps the tree balanced is complex. It will be covered in a <strong>later module</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Binary Search Trees (BST)</h2>
    <p>A <strong>binary search tree</strong> is a binary tree that satisfies the <strong>search order property</strong>:</p>
    <ul>
      <li>The <strong>left subtree</strong> of a node contains only nodes with keys <strong>less than</strong> the node's key.</li>
      <li>The <strong>right subtree</strong> of a node contains only nodes with keys <strong>greater than</strong> the node's key.</li>
      <li>Both the left and right subtrees must <strong>also be binary search trees</strong>.</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A BST <strong>does not allow duplicates</strong>.</p>
    </div>

    <h3>BST Examples</h3>
    <p><strong>A binary search tree:</strong></p>
    <pre><code>8
├─ left: 3
│   ├─ left: 1
│   └─ right: 6
│       ├─ left: 4
│       └─ right: 7
└─ right: 10
    └─ right: 14
        └─ left: 13</code></pre>
    <p><strong>Another binary search tree:</strong></p>
    <pre><code>5
├─ left: 4
│   └─ left: 1
│       └─ right: 3
└─ right: 8
    ├─ left: 7
    └─ right: 11</code></pre>

    <h3>BST or Not?</h3>
    <p><strong>Not a BST</strong> (the value 10 is in the right subtree of 15, but 10 is less than 15):</p>
    <pre><code>20
├─ left: 15
│   ├─ left: 14
│   └─ right: 10     ← wrong side!
└─ right: 25
    └─ left: 22</code></pre>
    <p><strong>A BST</strong> (both are valid):</p>
    <pre><code>30                         60
├─ left: 5                 └─ right: 70
│   └─ left: 2                 ├─ left: 65
└─ right: 40                   └─ right: 80</code></pre>
    <p><strong>A BST:</strong> 6 with left child 2 (children 1 and 4, where 4 has left child 3) and right child 8.</p>
    <p><strong>Not a BST:</strong> the same tree, but with 7 added as the right child of 4. The value 7 is bigger than 6, but it is inside the <strong>left subtree</strong> of 6.</p>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Checking only a node and its direct children is <strong>not enough</strong>. Every node in the <strong>whole left subtree</strong> must be smaller, and every node in the <strong>whole right subtree</strong> must be bigger.</p>
    </div>

    <h3>Why Use a Binary Search Tree?</h3>
    <ul>
      <li><strong>Inorder traversal</strong> gives a <strong>sorted list</strong>.</li>
      <li><strong>Searching becomes faster.</strong></li>
    </ul>
    <p><strong>But...</strong> insert and delete can be <strong>slow</strong>.</p>

    <div class="divider"></div>

    <h2>BST Operation: Search</h2>
    <ul>
      <li>To search for a key <code>k</code>, we trace a <strong>downward path starting at the root</strong>.</li>
      <li>The next node we visit depends on the result of <strong>comparing k with the key of the current node</strong>.</li>
      <li>If we reach a leaf (an empty position), the key is <strong>not found</strong> and we return <code>NULL</code>.</li>
    </ul>
    <pre><code>Algorithm TreeSearch(k, v)
    if (v == NULL)
        return v
    if k &lt; key(v)
        return TreeSearch(k, T.left(v))
    else if k = key(v)
        return v
    else { k &gt; key(v) }
        return TreeSearch(k, T.right(v))</code></pre>
    <p><strong>Example: find(4)</strong> - call <code>TreeSearch(4, root)</code></p>
    <pre><code>6
├─ left: 2
│   ├─ left: 1
│   └─ right: 4
└─ right: 9
    └─ left: 8</code></pre>
    <ol>
      <li><code>4 &lt; 6</code> → go left to 2.</li>
      <li><code>4 &gt; 2</code> → go right to 4.</li>
      <li><code>4 = 4</code> → <strong>found</strong>.</li>
    </ol>

    <h2>BST Operation: Insertion</h2>
    <ul>
      <li>To perform <code>insert(k, o)</code>, we <strong>search for key k</strong> (using <code>TreeSearch</code>).</li>
      <li>Assume <code>k</code> is <strong>not already in the tree</strong>. Let <code>w</code> be the leaf (empty position) reached by the search.</li>
      <li>We <strong>insert k at node w</strong> and expand <code>w</code> into an internal node.</li>
    </ul>
    <p><strong>Example: insert 5</strong> into the tree above.</p>
    <ol>
      <li><code>5 &lt; 6</code> → go left to 2.</li>
      <li><code>5 &gt; 2</code> → go right to 4.</li>
      <li><code>5 &gt; 4</code> → go right. There is nothing there, so this is <code>w</code>.</li>
      <li>Put <code>5</code> as the <strong>right child of 4</strong>.</li>
    </ol>

    <h3>Building a BST by Inserting Values</h3>
    <p>Start with an empty tree and insert these values in order: <code>5, 9, 7, 3, 8, 12, 6, 4, 20</code></p>
    <pre><code>Step by step:
Insert 5   → 5 becomes the root
Insert 9   → right of 5
Insert 7   → left of 9
Insert 3   → left of 5
Insert 8   → right of 7
Insert 12  → right of 9
Insert 6   → left of 7
Insert 4   → right of 3
Insert 20  → right of 12

Final tree:
5
├─ left: 3
│   └─ right: 4
└─ right: 9
    ├─ left: 7
    │   ├─ left: 6
    │   └─ right: 8
    └─ right: 12
        └─ right: 20</code></pre>

    <h3>Insert Node: Code</h3>
    <pre><code>void InsertNode(node* &amp;root, node *newnode)
{
    if (root == NULL)
        root = newnode;
    else
        if (root-&gt;data &gt; newnode-&gt;data)
            InsertNode(root-&gt;l, newnode);
        else
            if (root-&gt;data &lt; newnode-&gt;data)
                InsertNode(root-&gt;r, newnode);
}</code></pre>
    <ul>
      <li>If <code>root == NULL</code>, the new node <strong>becomes the root</strong> (this is the <strong>base case</strong>).</li>
      <li>If the new data is <strong>smaller</strong>, insert in the <strong>left</strong> subtree (recursive call).</li>
      <li>If the new data is <strong>bigger</strong>, insert in the <strong>right</strong> subtree (recursive call).</li>
      <li>If the data is <strong>equal</strong>, nothing happens. This is why a BST has <strong>no duplicates</strong>.</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>The parameter <code>node* &amp;root</code> is a <strong>reference</strong> to the pointer (C++ style). This lets the function change the actual pointer when it sets <code>root = newnode</code>. Each recursive call goes one level down until it reaches an empty (<code>NULL</code>) position.</p>
    </div>

    <h3>Insert Order Matters</h3>
    <p>The <strong>same data</strong> can make <strong>different tree shapes</strong>, depending on the order of insertion.</p>
    <pre><code>(a) Input: D B F A C E G   → balanced tree
        D
      /   \\
     B     F
    / \\   / \\
   A   C E   G

(b) Input: B A D C G F E   → unbalanced (skewed) tree
    B
    ├─ left: A
    └─ right: D
        ├─ left: C
        └─ right: G
            └─ left: F
                └─ left: E

(c) Input: A B C D E F G   → a chain (like a linked list)
    A → B → C → D → E → F → G  (each is the right child of the previous)</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Inserting <strong>sorted data</strong> (A B C D E F G) produces a <strong>degenerate tree</strong> that behaves like a linked list, so searching becomes O(N).</p>
    </div>

    <div class="divider"></div>

    <h2>BST Operation: Delete Node</h2>
    <p>Deleting a node has <strong>3 cases</strong>:</p>
    <ol>
      <li>Deletion of a node with <strong>no child</strong></li>
      <li>Deletion of a node with <strong>one child</strong></li>
      <li>Deletion of a node with <strong>two children</strong></li>
    </ol>
    <p>In the diagrams, <code>x</code> is the node to delete and <code>y</code> is its <strong>parent</strong>.</p>

    <h3>Case 1: Node with No Child</h3>
    <ul>
      <li>Set the <strong>left of y to NULL</strong> (the pointer in the parent that points to x).</li>
      <li><strong>Dispose</strong> of (free) the node pointed to by <code>x</code>.</li>
    </ul>
    <pre><code>Example: x = 52 (a leaf) under y = 60

Before:               After:
    50                    50
   /  \\                  /  \\
  30   60               30   60
      /  \\                     \\
    52    65                    65</code></pre>

    <h3>Case 2: Node with One Child</h3>
    <ul>
      <li>Make <code>y-&gt;left = x-&gt;right</code> (the parent skips over x and points to x's only child).</li>
      <li><strong>Dispose</strong> of the node pointed to by <code>x</code>.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Think of it as <strong>"bypassing" the node</strong>. The child of the deleted node moves up and takes its place.</p>
    </div>

    <h3>Case 3: Node with Two Children</h3>
    <p>We can delete a node with two child nodes in <strong>two ways</strong>:</p>
    <ul>
      <li><strong>In-order Predecessor</strong> - the <strong>largest element of the left subtree</strong> (the <strong>rightmost</strong> node of the left subtree).</li>
      <li><strong>In-order Successor</strong> - the <strong>smallest element of the right subtree</strong> (the <strong>leftmost</strong> node of the right subtree).</li>
    </ul>
    <p>The idea: <strong>replace the deleted node's value</strong> with its predecessor or successor. Then <strong>delete that predecessor/successor node</strong> (which is easy, because it has at most one child).</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Two children → use the <strong>in-order predecessor</strong> (largest in LEFT subtree) or the <strong>in-order successor</strong> (smallest in RIGHT subtree).</p>
    </div>

    <h3>Example: Remove 12 from a BST</h3>
    <pre><code>Before:
5
├─ left: 2
│   ├─ left: -4
│   └─ right: 3
└─ right: 12
    ├─ left: 9
    └─ right: 21
        ├─ left: 19
        └─ right: 25</code></pre>
    <ol>
      <li>12 has two children. The smallest value in its right subtree is <code>19</code> (the in-order successor).</li>
      <li>Copy <code>19</code> into the node where 12 was.</li>
      <li>Remove the old <code>19</code> node from the right subtree.</li>
    </ol>
    <pre><code>After:
5
├─ left: 2
│   ├─ left: -4
│   └─ right: 3
└─ right: 19
    ├─ left: 9
    └─ right: 21
        └─ right: 25</code></pre>

    <h3>Deletion: Using Inorder Traversal (Remove 3)</h3>
    <p>Here the key <code>k</code> to be removed is stored at a node <code>v</code> whose <strong>children are both internal</strong> (real nodes).</p>
    <ul>
      <li>Find the internal node <code>w</code> that <strong>follows v in an inorder traversal</strong>.</li>
      <li><strong>Copy key(w) into node v</strong>.</li>
      <li>Remove node <code>w</code> and its left child <code>z</code> (which must be a leaf) using the operation <code>removeExternal(z)</code>.</li>
    </ul>
    <pre><code>Before (remove 3, so v = 3):
1
└─ right: 3   (v)
    ├─ left: 2
    └─ right: 8
        ├─ left: 6
        │   └─ left: 5   (w)
        └─ right: 9

Inorder: 1 2 3 5 6 8 9  → the node after 3 is 5, so w = 5

After:
1
└─ right: 5
    ├─ left: 2
    └─ right: 8
        ├─ left: 6
        └─ right: 9</code></pre>

    <h3>Deletion Exercise 1: Remove 16</h3>
    <pre><code>12
├─ left: 8
│   ├─ left: 6
│   └─ right: 10
└─ right: 16
    ├─ left: 13
    │   └─ right: 14
    └─ right: 20
        └─ right: 24</code></pre>
    <p><strong>Solution:</strong> 16 has two children. The smallest node in its right subtree is <code>20</code>, so 20 replaces 16.</p>
    <pre><code>12
├─ left: 8
│   ├─ left: 6
│   └─ right: 10
└─ right: 20
    ├─ left: 13
    │   └─ right: 14
    └─ right: 24</code></pre>

    <h3>Deletion Exercise 2: Remove 16</h3>
    <pre><code>12
├─ left: 8
│   ├─ left: 6
│   └─ right: 10
└─ right: 16
    ├─ left: 13
    │   └─ right: 14
    └─ right: 20
        ├─ left: 19
        │   └─ left: 17
        │       └─ right: 18
        └─ right: 24</code></pre>
    <p><strong>Solution:</strong> the smallest node in the right subtree of 16 is <code>17</code> (the leftmost node). 17 replaces 16, and 18 moves up to take the place of 17.</p>
    <pre><code>12
├─ left: 8
│   ├─ left: 6
│   └─ right: 10
└─ right: 17
    ├─ left: 13
    │   └─ right: 14
    └─ right: 20
        ├─ left: 19
        │   └─ left: 18
        └─ right: 24</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>A common exam mistake is to <strong>forget to remove the successor/predecessor node</strong> after copying its value. Also make sure you pick the <strong>smallest in the right subtree</strong> (go right once, then go left as far as possible) and not just the right child.</p>
    </div>
  `,
  summary: {
    topic: 'Trees (Continued): Traversals, Expression Trees, Types of Binary Trees and Binary Search Tree Operations',
    subTopics: [
      'Example Applications of Binary Trees',
      'Basic Operators of a Binary Tree',
      'Binary Tree Traversals (Preorder, Inorder, Postorder)',
      'Depth First and Breadth First Traversals',
      'Traversals on a Binary Search Tree',
      'C Program for Traversals',
      'Infix, Prefix and Postfix Notation',
      'Expression Trees and Exercises',
      'Height and Depth of a Node',
      'Levels',
      'Binary Tree Complexity Analysis',
      'Types of Binary Trees (Strictly, Complete, Almost Complete)',
      'Balanced vs Unbalanced Trees',
      'Binary Search Trees',
      'BST Search',
      'BST Insertion and Insert Order',
      'BST Deletion (Three Cases)',
      'Deletion Examples and Exercises',
    ],
    definitions: [
      { term: 'Traversal', meaning: 'Visiting every node of a tree and processing the content of each node.' },
      { term: 'Preorder traversal', meaning: 'Process the root first, then the left subtree, then the right subtree (Root, Left, Right).' },
      { term: 'Inorder traversal', meaning: 'Process the left subtree, then the root, then the right subtree (Left, Root, Right). On a BST it gives sorted order.' },
      { term: 'Postorder traversal', meaning: 'Process the left subtree, then the right subtree, then the root (Left, Right, Root).' },
      { term: 'Depth First Traversal', meaning: 'A traversal that goes deep down a branch before moving on. Preorder, inorder and postorder are depth first.' },
      { term: 'Breadth First (Level Order) Traversal', meaning: 'A traversal that visits the tree level by level, from top to bottom and left to right.' },
      { term: 'Infix notation', meaning: 'Operators are written between their operands, for example 4 * (3 + 8).' },
      { term: 'Prefix notation', meaning: 'Operators are written before their operands, for example * 4 + 3 8.' },
      { term: 'Postfix notation', meaning: 'Operators are written after their operands, for example 4 3 8 + *.' },
      { term: 'Expression Tree', meaning: 'A binary tree where operators are internal nodes and operands are leaves. Inorder gives infix, preorder gives prefix, postorder gives postfix.' },
      { term: 'Height of a node', meaning: 'The path length from the node to its most distant descendant. The height of a tree is the height of its root.' },
      { term: 'Depth of a node', meaning: 'The path length from the node up to the root.' },
      { term: 'Levels', meaning: 'The number of nodes along the longest path. Levels = height + 1.' },
      { term: 'Strictly Binary Tree', meaning: 'A binary tree where every non-leaf node has two children. With n leaves it always has 2n - 1 nodes.' },
      { term: 'Complete Binary Tree', meaning: 'A strictly binary tree of depth d with all leaves at level d. It has 2^d leaves and 2^d - 1 non-leaf nodes. Also called a completely balanced tree.' },
      { term: 'Almost Complete Binary Tree', meaning: 'A binary tree where each leaf is at level d or d - 1, and if a node has a right descendant at level d, all its left leaf descendants are also at level d.' },
      { term: 'Balanced Tree', meaning: 'A tree whose shape keeps the height small, so search takes about log2 N steps.' },
      { term: 'Degenerate Tree', meaning: 'An unbalanced tree that looks like a linked list, giving O(N) search. It happens when data is inserted in sorted order.' },
      { term: 'Binary Search Tree', meaning: 'A binary tree where the left subtree has smaller keys, the right subtree has greater keys, both subtrees are also BSTs, and duplicates are not allowed.' },
      { term: 'TreeSearch', meaning: 'The BST search algorithm. Compare k with the current key, go left if smaller, right if bigger, and stop when found or when NULL is reached.' },
      { term: 'In-order Predecessor', meaning: 'The largest element of the left subtree (the rightmost node of the left subtree).' },
      { term: 'In-order Successor', meaning: 'The smallest element of the right subtree (the leftmost node of the right subtree).' },
    ],
    keyPoints: [
      'Binary tree applications: arithmetic expression trees, BST, decision trees, AVL trees, and priority queues (binary heap).',
      'Basic binary tree operators: three traversals, search, insert and delete.',
      'Preorder = Root, Left, Right. Inorder = Left, Root, Right. Postorder = Left, Right, Root.',
      'Inorder traversal of a BST gives the keys in sorted order.',
      'Traversal tracing trick: preorder when passing down the left side of a node, inorder when passing underneath, postorder when passing up the right side.',
      'Example traversals: for the tree 1, 2, 3, 4, 5, preorder is 1 2 4 5 3, inorder is 4 2 5 1 3, postorder is 4 5 2 3 1, and level order is 1 2 3 4 5.',
      'The recursive C traversal functions differ only in where the printf line is placed. They stop when the node is NULL.',
      'Expression tree: inorder gives infix, preorder gives prefix, postorder gives postfix. Infix from a tree needs brackets to keep the correct meaning.',
      'Height counts links in the longest path; levels count nodes in the longest path, so levels = height + 1.',
      'A tree with L levels has at most 2^L - 1 nodes, so a balanced tree search takes log2(N + 1) steps, which is O(log N). A linked list search is O(N).',
      'Strictly binary tree: every non-leaf node has two children, and n leaves give 2n - 1 nodes.',
      'Complete binary tree of depth d: all leaves at level d, with 2^d leaves and 2^d - 1 non-leaf nodes.',
      'Inserting data in sorted order makes a BST degenerate into a linked list. Random order gives a roughly balanced tree.',
      'BST rule: left subtree keys are less, right subtree keys are greater, every subtree is also a BST, and no duplicates are allowed.',
      'BST search and insert both follow a downward path from the root, comparing at each node. A new key is added at the empty position where the search ends.',
      'BST deletion has three cases: no child (set the parent pointer to NULL), one child (parent skips to the child), two children (replace with the in-order predecessor or successor, then delete that node).',
      'BST advantages: inorder gives a sorted list and searching is faster. Disadvantage: insert and delete can be slow.',
    ],
  },
},

{
id: 8,
title: 'AVL and Red-Black Trees',
content: `
<span class="lesson-badge">LESSON 08</span>
<h1>AVL and Red-Black Trees</h1>
<div class="meta-info">ICT2113 <span>•</span> 15 min read</div>

<p>A normal <strong>binary search tree (BST)</strong> can become lopsided and slow. <strong>Balanced search trees</strong> fix this by keeping the tree's shape even. This lesson focuses on two of them: <strong>AVL Trees</strong> and <strong>Red-Black Trees</strong>.</p>

<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>Balanced search trees covered in this topic area: <strong>AVL Trees</strong>, <strong>2-3 Trees</strong>, <strong>2-3-4 Trees</strong>, <strong>B-Trees</strong> and <strong>Red-Black Trees</strong>. This lesson explains AVL and Red-Black trees in detail.</p>
</div>

<div class="divider"></div>

<h2>Part 1: AVL Trees</h2>

<h3>What is an AVL Tree?</h3>
<p>An <strong>AVL tree</strong> is a <strong>self-balancing binary search tree</strong>. It is a BST, but it also keeps itself balanced.</p>
<ul>
  <li>The <strong>balance factor</strong> of every node is no more than 1.</li>
  <li>The balance factor is often <strong>stored at each node</strong>.</li>
  <li>It can also be <strong>calculated from the heights</strong> of a node's subtrees.</li>
</ul>

<h3>History</h3>
<ul>
  <li>AVL trees were introduced in <strong>1962</strong>.</li>
  <li>They are named after two Russian mathematicians: <strong>Georgii Adelson-Velsky</strong> (born 1922) and <strong>Evgenii Mikhailovich Landis</strong> (1921-1997).</li>
</ul>

<h3>Balance Factor</h3>
<p>A binary tree is <strong>balanced</strong> if, for every node, the heights of its left and right subtrees differ by at most one. In an AVL tree, the balance factor of every node must be <strong>-1, 0 or 1</strong>.</p>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Balance factor = heightOfLeftSubtree - heightOfRightSubtree</strong></p>
  <p>If every node has a balance factor of -1, 0 or 1, the tree is an <strong>AVL tree</strong>. If any node has another value, the tree is <strong>not balanced</strong> and <strong>not an AVL tree</strong>.</p>
</div>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>Some books use <code>heightOfRight - heightOfLeft</code>. The examples in this lesson use <strong>Left - Right</strong>, so stay consistent with one formula in your answers.</p>
</div>

<h3>Balance Factor Calculation (Example)</h3>
<p>The balance factor is written above each node in the tree below.</p>
<pre><code>Balance factor shown in [ ] 25 [0] / \\ 20 [1] 36 [0] / \\ / \\ 10 [-1] 22 [0] 30 [1] 40 [0] \\ / / \\ 12 [0] 28 [0] 38 [0] 48 [0]</code></pre>
<p>This tree is a binary search tree and every node satisfies the balance factor condition. So it is an <strong>AVL tree</strong>.</p>

<h3>Examples of AVL Trees</h3>
<pre><code>Tree 1 Tree 2 Tree 3 0 -1 1 / \\ / \\ / \\ 0 0 -1 0 -1 0 / / / \\ 0 0 -1 1 / \\ 0 0</code></pre>
<p>The numbers are balance factors. All values are -1, 0 or 1, so all three are AVL trees.</p>

<h3>AVL Tree or Not?</h3>
<pre><code>AVL tree NOT an AVL tree 12 12 / \\ / \\ 8 18 8 18 / \\ / / \\ / 5 11 17 5 11 17 / / \\ 4 4 7 / 2</code></pre>
<ul>
  <li><strong>Left tree:</strong> each left subtree has a height 1 greater than each right subtree. This is an AVL tree.</li>
  <li><strong>Right tree:</strong> the subtree with root 8 has height 3 and the subtree with root 18 has height 1. The difference is 2, so this is <strong>not an AVL tree</strong>.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Every AVL tree is a binary search tree, but not every binary search tree is an AVL tree.</strong></p>
</div>

<div class="divider"></div>

<h2>Maintaining Balance</h2>
<p>To keep an AVL tree balanced, remember these two facts:</p>
<ul>
  <li><strong>Inserting</strong> a node can increase the height of a tree by <strong>at most 1</strong>.</li>
  <li><strong>Removing</strong> a node can decrease the height of a tree by <strong>at most 1</strong>.</li>
</ul>

<h3>Example: Inserting 15 (no height change)</h3>
<p>Consider inserting <strong>15</strong> into the tree below. It becomes the left child of 17. The heights of none of the trees change, so the tree stays balanced.</p>
<pre><code> 36 / \\ 12 44 / \\ / \\ 7 17 38 45 / \\ / \\ 3 10 15* 27 (* = newly inserted node)</code></pre>
<h3>Practice: Are these trees AVL?</h3>
<pre><code>Tree A Tree B 6 6 / \\ / \\ 4 9 4 9 / \\ / \\ / 1 5 1 5 8</code></pre>
<p><strong>Question:</strong> Insert <strong>7</strong> into both trees. Are they still AVL trees?</p>
<pre><code>Tree A (AVL) Tree B (NOT AVL) 6 6 / \\ / \\ 4 9 4 9 &lt;- imbalanced / \\ / / \\ / 1 5 7 1 5 8 / 7</code></pre>
<ul>
  <li><strong>Tree A</strong> stays an AVL tree after inserting 7.</li>
  <li><strong>Tree B</strong> is no longer an AVL tree. Node 9 becomes imbalanced.</li>
</ul>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>The lecture slide writes the balance factor of node 9 as <code>0 - 2 = -2</code> (right minus left). With the <strong>Left - Right</strong> formula, node 9 has left height 2 and right height 0, so its balance factor is <strong>2 - 0 = 2</strong>. Either way, the value is <strong>2 or -2</strong>, so the tree is imbalanced.</p>
</div>

<h3>What Happens After an Insertion?</h3>
<ul>
  <li>An insert operation may cause the balance factor of some nodes to become <strong>2 or -2</strong>.</li>
  <li>Only the nodes on the <strong>path from the insertion point up to the root</strong> can change in height.</li>
  <li>So after insertion, go back up towards the root, node by node, and <strong>update the heights</strong>.</li>
  <li>If a new balance factor is <strong>2 or -2</strong>, fix the tree by a <strong>rotation</strong> around that node.</li>
</ul>

<div class="divider"></div>

<h2>Insertion and Rotation in AVL Trees</h2>

<h3>AVL Tree Data Structure</h3>
<ul>
  <li>An AVL tree is an <strong>extension of a binary search tree</strong>.</li>
  <li>It keeps the AVL property by using <strong>rotations</strong>.</li>
  <li>Rotations happen when the tree becomes <strong>unbalanced</strong> because of an insertion or deletion.</li>
  <li>At each node, we keep track of the <strong>height of the subtree</strong> rooted at that node. This is used to compute balance factors.</li>
</ul>

<h3>AVL Tree Rotations</h3>
<ul>
  <li>After every operation (insertion or deletion), we must check the <strong>balance factor of every node</strong>.</li>
  <li>If every node satisfies the balance factor condition, the operation is complete.</li>
  <li>Otherwise, we must <strong>make the tree balanced again</strong>.</li>
  <li>We use <strong>rotation operations</strong> to balance the tree whenever an operation makes it imbalanced.</li>
</ul>

<div class="callout callout-blue">
  <span class="callout-label">Definition</span>
  <p><strong>Rotation</strong> is the process of moving nodes to the left or right to make the tree balanced.</p>
</div>

<h3>Types of Rotations</h3>
<p>There are <strong>four rotations</strong>, classified into <strong>two types</strong>.</p>
<pre><code>Rotations | |-- Single Rotation | |-- Left Rotation (LL Rotation) | |-- Right Rotation (RR Rotation) | |-- Double Rotation |-- Left Right Rotation (LR Rotation) |-- Right Left Rotation (RL Rotation)</code></pre>
<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>In this lecture, rotations are <strong>named by the direction the nodes move</strong>. LL means nodes move left. RR means nodes move right. Other textbooks may name rotations by the shape of the imbalance instead. Use the names given in this lecture for your exams.</p>
</div>

<h3>1. Single Left Rotation (LL Rotation)</h3>
<p>In <strong>LL Rotation</strong>, every node moves <strong>one position to the left</strong> from its current position.</p>
<p>Example: insert <strong>1, 2 and 3</strong> into an AVL tree.</p>
<pre><code>Insert 1, 2, 3 Imbalanced After LL Rotation (balanced) 1 [-2] 2 [0] \\ / \\ 2 [-1] 1 [0] 3 [0] \\ 3 [0]</code></pre>
<p>Node 1 has balance factor -2, so the tree is imbalanced. LL Rotation moves the nodes one position to the left, and the tree becomes balanced.</p>

<h3>2. Single Right Rotation (RR Rotation)</h3>
<p>In <strong>RR Rotation</strong>, every node moves <strong>one position to the right</strong> from its current position.</p>
<p>Example: insert <strong>3, 2 and 1</strong> into an AVL tree.</p>
<pre><code>Insert 3, 2, 1 Imbalanced After RR Rotation (balanced) 3 [2] 2 [0] / / \\ 2 [1] 1 [0] 3 [0] / 1 [0]</code></pre>
<p>The tree is imbalanced because node 3 has balance factor 2. RR Rotation moves the nodes one position to the right, and the tree becomes balanced.</p>

<h3>3. Left Right Rotation (LR Rotation)</h3>
<p><strong>LR Rotation</strong> is a combination of a <strong>single left rotation followed by a single right rotation</strong>. First the nodes move one position to the left, then one position to the right.</p>
<p>Example: insert <strong>3, 1 and 2</strong> into an AVL tree.</p>
<pre><code>Insert 3, 1, 2 Imbalanced After LL Rotation After RR Rotation 3 [2] 3 [2] 2 [0] / / / \\ 1 [-1] 2 [1] 1 [0] 3 [0] \\ / 2 [0] 1 [0]</code></pre>
<p>The tree is imbalanced because node 3 has balance factor 2. After an LL rotation and then an RR rotation, the tree is balanced.</p>

<h3>4. Right Left Rotation (RL Rotation)</h3>
<p><strong>RL Rotation</strong> is a combination of a <strong>single right rotation followed by a single left rotation</strong>. First the nodes move one position to the right, then one position to the left.</p>
<p>Example: insert <strong>1, 3 and 2</strong> into an AVL tree.</p>
<pre><code>Insert 1, 3, 2 Imbalanced After RR Rotation After LL Rotation 1 [-2] 1 [-2] 2 [0] \\ \\ / \\ 3 [1] 2 [-1] 1 [0] 3 [0] / \\ 2 [0] 3 [0]</code></pre>
<p>The tree is imbalanced because node 1 has balance factor -2. After an RR rotation and then an LL rotation, the tree is balanced.</p>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <ul>
    <li><strong>4 rotations</strong> in total: LL, RR, LR, RL.</li>
    <li><strong>Single rotations:</strong> LL and RR.</li>
    <li><strong>Double rotations:</strong> LR (left then right) and RL (right then left).</li>
    <li>Rotations are needed when a balance factor becomes <strong>2 or -2</strong>.</li>
  </ul>
</div>

<div class="divider"></div>

<h2>Operations on an AVL Tree</h2>
<p>There are three main operations:</p>
<ol>
  <li><strong>Search</strong></li>
  <li><strong>Insertion</strong></li>
  <li><strong>Deletion</strong></li>
</ol>

<h3>Search Operation in AVL Tree</h3>
<p>Search works exactly like <strong>searching in a Binary Search Tree</strong>.</p>
<ol>
  <li>Read the search element from the user.</li>
  <li>Compare the search element with the value of the root node.</li>
  <li>If both match, display "Given node found!!!" and stop.</li>
  <li>If they do not match, check whether the search element is smaller or larger than that node's value.</li>
  <li>If the search element is <strong>smaller</strong>, continue the search in the <strong>left subtree</strong>.</li>
  <li>If the search element is <strong>larger</strong>, continue the search in the <strong>right subtree</strong>.</li>
  <li>Repeat until the exact element is found or a leaf node is reached.</li>
  <li>If we reach the node with the search value, display "Element is found" and stop.</li>
  <li>If we reach a leaf node and it also does not match, display "Element not found" and stop.</li>
</ol>

<h3>Insertion Operation in AVL Tree</h3>
<p>Insertion in an AVL tree takes <strong>O(log n)</strong> time. A new node is <strong>always inserted as a leaf node</strong>.</p>
<ol>
  <li>Insert the new element using normal <strong>BST insertion logic</strong>.</li>
  <li>After insertion, check the <strong>balance factor of every node</strong>.</li>
  <li>If every balance factor is 0, 1 or -1, go to the next operation.</li>
  <li>If any balance factor is anything other than 0, 1 or -1, the tree is <strong>imbalanced</strong>. Perform the suitable <strong>rotation</strong> to balance it, then go to the next operation.</li>
</ol>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>AVL insertion is <strong>O(log n)</strong>. New nodes are always inserted as <strong>leaf nodes</strong>.</p>
</div>

<h3>Example: Construct an AVL Tree by Inserting 1 to 8</h3>
<p>Balance factors are shown in [ ].</p>

<p><strong>Insert 1:</strong> the tree is balanced.</p>
<pre><code>1 [0]</code></pre>
<p><strong>Insert 2:</strong> the tree is balanced.</p>
<pre><code>1 [-1] \\ 2 [0]</code></pre>
<p><strong>Insert 3:</strong> imbalanced at node 1. Use <strong>LL Rotation</strong>.</p>
<pre><code>Before After LL Rotation 1 [-2] 2 [0] \\ / \\ 2 [-1] 1 [0] 3 [0] \\ 3 [0]</code></pre>
<p><strong>Insert 4:</strong> the tree is balanced.</p>
<pre><code> 2 [-1] / \\ 1 [0] 3 [-1] \\ 4 [0]</code></pre>
<p><strong>Insert 5:</strong> imbalanced at node 3. Use <strong>LL Rotation at 3</strong>.</p>
<pre><code>Before After LL Rotation at 3 2 [-2] 2 [-1] / \\ / \\ 1 [0] 3 [-2] 1 [0] 4 [0] \\ / \\ 4 [-1] 3 [0] 5 [0] \\ 5 [0]</code></pre>
<p><strong>Insert 6:</strong> imbalanced at node 2. Use <strong>LL Rotation at 2</strong>. Node 3 becomes the <strong>right child of 2</strong>.</p>
<pre><code>Before After LL Rotation at 2 2 [-2] 4 [0] / \\ / \\ 1 [0] 4 [-1] 2 [0] 5 [-1] / \\ / \\ \\ 3 [0] 5 [-1] 1 [0] 3 [0] 6 [0] \\ 6 [0]</code></pre>
<p><strong>Insert 7:</strong> imbalanced at node 5. Use <strong>LL Rotation at 5</strong>.</p>
<pre><code>Before After LL Rotation at 5 4 [-1] 4 [0] / \\ / \\ 2 [0] 5 [-2] 2 [0] 6 [0] / \\ \\ / \\ / \\ 1[0] 3[0] 6 [-1] 1[0] 3[0] 5[0] 7[0] \\ 7 [0]</code></pre>
<p><strong>Insert 8:</strong> the tree is balanced. No rotation is needed. This is the final tree.</p>
<pre><code> 4 [-1] / \\ 2 [0] 6 [-1] / \\ / \\ 1 [0] 3 [0] 5 [0] 7 [-1] \\ 8 [0]</code></pre>
<h3>Example: Insert 135</h3>
<p>Consider the following tree and insert <strong>135</strong>.</p>
<pre><code>Before inserting 135 60 / \\ 40 80 / / \\ 20 70 100 / \\ 90 130</code></pre>
<p>After inserting 135, the tree is <strong>not balanced</strong>. Node 80 has a left subtree of height 1 and a right subtree of height 3.</p>
<pre><code>After inserting 135 (imbalanced) 60 / \\ 40 80 / / \\ 20 70 100 / \\ 90 130 \\ 135</code></pre>
<p>After the rotation at node 80 (nodes move one position to the left), the tree is balanced.</p>
<pre><code>After rotating (balanced) 60 / \\ 40 100 / / \\ 20 80 130 / \\ \\ 70 90 135</code></pre>
<h3>Practice Question</h3>
<p>Construct an AVL tree by inserting these numbers in order:</p>
<pre><code>14, 17, 11, 7, 53, 4, 13, 12, 8, 60, 19, 16, 20</code></pre>
<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>After <strong>every single insertion</strong>, go back up towards the root and check balance factors. Rotate as soon as you find a factor of 2 or -2.</p>
</div>

<h3>Deletion Operation in AVL Tree</h3>
<ul>
  <li>Deletion in an AVL tree is <strong>similar to deletion in a BST</strong>.</li>
  <li>After every deletion, check the <strong>balance factor condition</strong>.</li>
  <li>If the tree is balanced after deletion, go to the next operation.</li>
  <li>Otherwise, perform the suitable <strong>rotation</strong> to make the tree balanced.</li>
</ul>

<div class="divider"></div>

<h2>Part 2: Red-Black Trees</h2>

<h3>What is a Red-Black Tree?</h3>
<p>A <strong>Red-Black Tree</strong> is another variant of the Binary Search Tree. Every node is coloured either <strong>RED</strong> or <strong>BLACK</strong>.</p>
<ul>
  <li>A red-black tree "colours" each node either red or black.</li>
  <li>In <strong>AVL trees</strong>, balancing limits the height difference to at most one.</li>
  <li>In <strong>red-black trees</strong>, we use a <strong>different set of rules based on node colours</strong>.</li>
</ul>

<h3>Red-Black Tree Properties</h3>
<p>The colour of a node is decided by the red-black tree properties. Every red-black tree has these properties:</p>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <ol>
    <li><strong>Property 1:</strong> A red-black tree must be a <strong>Binary Search Tree</strong>.</li>
    <li><strong>Property 2:</strong> The <strong>ROOT</strong> node must be coloured <strong>BLACK</strong>.</li>
    <li><strong>Property 3:</strong> The children of a <strong>RED</strong> node must be <strong>BLACK</strong>. (There must not be two consecutive RED nodes.)</li>
    <li><strong>Property 4:</strong> In <strong>all paths</strong> of the tree, there must be the <strong>same number of BLACK nodes</strong>.</li>
    <li><strong>Property 5:</strong> Every <strong>new node</strong> must be inserted with <strong>RED</strong> colour.</li>
    <li><strong>Property 6:</strong> Every <strong>leaf</strong> (that is, a <strong>NULL node</strong>) must be coloured <strong>BLACK</strong>.</li>
  </ol>
</div>

<h3>Examples of Red-Black Trees</h3>
<p>The slide shows two example trees. Every node in them satisfies all the red-black properties. In the first example the root is black, no red node has a red child, and every path has the same number of black nodes.</p>
<pre><code>Example 1 (B = Black, R = Red) B / \\ R B / \\ \\ B B R / \\ R R</code></pre>
<h3>Practice: Is this a Red-Black Tree?</h3>
<p>Red nodes: <strong>12, 50, -5, 135, -6, 80</strong>. All other nodes are black.</p>
<pre><code> 19 / \\ 12 35 / \\ 0 50 / \\ -10 75 \\ \\ -5 135 / / -8 100 \\ / -6 80</code></pre>
<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Check each property one by one. Then count the black nodes on different paths, for example the path 19 → 12 → NULL and the path 19 → 35 → 50 → 75 → 135 → 100 → 80. Do they match?</p>
</div>

<div class="divider"></div>

<h2>Insertion into a Red-Black Tree</h2>
<ul>
  <li>Every new node must be inserted with the colour <strong>RED</strong>.</li>
  <li>Insertion is <strong>similar to BST insertion</strong>, but the node also gets a colour.</li>
  <li>After every insertion, we must <strong>check all red-black properties</strong>.</li>
  <li>If all properties are satisfied, go to the next operation.</li>
  <li>Otherwise, fix the tree using one of these operations:
    <ul>
      <li><strong>Recolor</strong></li>
      <li><strong>Rotation followed by Recolor</strong></li>
    </ul>
  </li>
</ul>

<h3>Insertion Steps</h3>
<ol>
  <li>Check whether the tree is <strong>empty</strong>.</li>
  <li>If the tree is empty, insert the <code>newNode</code> as the <strong>root</strong> with colour <strong>BLACK</strong> and exit.</li>
  <li>If the tree is not empty, insert the <code>newNode</code> as a <strong>leaf</strong> with colour <strong>RED</strong>.</li>
  <li>If the <strong>parent</strong> of <code>newNode</code> is <strong>BLACK</strong>, exit the operation.</li>
  <li>If the parent of <code>newNode</code> is <strong>RED</strong>, check the colour of the parent's <strong>sibling</strong> (the uncle of <code>newNode</code>).</li>
  <li>If the sibling is <strong>BLACK or NULL</strong>, make a suitable <strong>Rotation</strong> and <strong>Recolor</strong>.</li>
  <li>If the sibling is <strong>RED</strong>, perform <strong>Recolor</strong> and <strong>recheck</strong>. Repeat until the tree becomes a valid red-black tree.</li>
</ol>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Uncle BLACK or NULL</strong> → Rotation + Recolor.<br><strong>Uncle RED</strong> → Recolor and recheck.</p>
</div>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>A common exam mistake is forgetting that the <strong>root must always be BLACK</strong> and that a <strong>new node is always RED</strong>. Also remember: two RED nodes can never be next to each other (parent and child).</p>
</div>

<div class="divider"></div>

<h2>AVL vs Red-Black: Quick Comparison</h2>
<ul>
  <li><strong>AVL tree:</strong> balance is controlled by the <strong>balance factor</strong> (-1, 0, 1). It uses <strong>rotations</strong> to fix imbalance.</li>
  <li><strong>Red-Black tree:</strong> balance is controlled by <strong>node colours</strong> and 6 properties. It uses <strong>recolouring and rotations</strong>.</li>
</ul>

`,
summary: {
topic: 'Self-balancing binary search trees: AVL Trees and Red-Black Trees',
subTopics: [
'Balanced Search Trees (AVL, 2-3, 2-3-4, B-Trees, Red-Black)',
'Part 1: AVL Trees',
'What is an AVL Tree?',
'History of AVL Trees',
'Balance Factor',
'Examples of AVL and Non-AVL Trees',
'Maintaining Balance',
'Insertion and Rotation in AVL Trees',
'AVL Tree Rotations (LL, RR, LR, RL)',
'Operations on an AVL Tree (Search, Insertion, Deletion)',
'Constructing an AVL Tree from 1 to 8',
'Part 2: Red-Black Trees',
'Red-Black Tree Properties',
'Insertion into a Red-Black Tree',
],
definitions: [
{ term: 'AVL Tree', meaning: 'A self-balancing binary search tree in which the balance factor of every node is -1, 0 or 1.' },
{ term: 'Balance Factor', meaning: "The height of a node's left subtree minus the height of its right subtree." },
{ term: 'Balanced Tree', meaning: 'A binary tree in which, for every node, the heights of its left and right subtrees differ by at most one.' },
{ term: 'Rotation', meaning: 'Moving nodes to the left or right to make a tree balanced.' },
{ term: 'Single Left Rotation (LL)', meaning: 'A rotation in which every node moves one position to the left.' },
{ term: 'Single Right Rotation (RR)', meaning: 'A rotation in which every node moves one position to the right.' },
{ term: 'Left Right Rotation (LR)', meaning: 'A double rotation: a single left rotation followed by a single right rotation.' },
{ term: 'Right Left Rotation (RL)', meaning: 'A double rotation: a single right rotation followed by a single left rotation.' },
{ term: 'Red-Black Tree', meaning: 'A binary search tree in which every node is coloured red or black and the tree follows colour-based balancing rules.' },
{ term: 'Recolor', meaning: 'Changing the colour of nodes (red to black or black to red) to restore red-black properties.' },
{ term: 'NULL node', meaning: 'An empty leaf position in a red-black tree, which is always considered black.' },
],
keyPoints: [
'Every AVL tree is a BST, but not every BST is an AVL tree.',
'AVL balance factor = heightOfLeftSubtree - heightOfRightSubtree, and must be -1, 0 or 1 for every node.',
'AVL trees were introduced in 1962 by Adelson-Velsky and Landis.',
'Insertion can increase a tree height by at most 1; removal can decrease it by at most 1.',
'After insertion, only nodes on the path from the new node to the root can change height.',
'If a balance factor becomes 2 or -2, fix it using a rotation around that node.',
'There are four AVL rotations: LL, RR (single) and LR, RL (double).',
'LR = left rotation then right rotation; RL = right rotation then left rotation.',
'AVL search works the same as BST search.',
'AVL insertion takes O(log n) time; new nodes are always inserted as leaves.',
'AVL deletion is like BST deletion, followed by a balance check and rotation if needed.',
'Inserting 1 to 8 in order needs LL rotations at 3, 2 and 5 and gives a balanced tree with root 4.',
'Red-Black tree property 1: it must be a Binary Search Tree.',
'Red-Black tree property 2: the root must be BLACK.',
'Red-Black tree property 3: a RED node cannot have a RED child (no two consecutive reds).',
'Red-Black tree property 4: every path must have the same number of BLACK nodes.',
'Red-Black tree property 5: every new node is inserted as RED.',
'Red-Black tree property 6: every NULL leaf is BLACK.',
'Red-Black insertion: if the parent is BLACK, stop; if the parent is RED and the uncle is BLACK or NULL, rotate and recolor; if the uncle is RED, recolor and recheck.',
'AVL trees balance using height differences; Red-Black trees balance using colour rules.',
],
},
},




]