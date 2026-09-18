export const courseName = 'Object Oriented Programming'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to OOP',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Introduction to Object-Oriented Programming</h1>
    <div class="meta-info">ICT2122 <span>•</span> 18 min read</div>

    <p>This lesson opens the <strong>Object-Oriented Programming (OOP)</strong> course. It introduces the OOP way of thinking, compares it with the older <strong>procedural</strong> style of programming, and explains the four core building blocks you will use throughout the course: <strong>classes</strong>, <strong>objects</strong>, <strong>instances</strong>, and <strong>instantiation</strong>.</p>

    <div class="divider"></div>

    <h2>Course Overview — ICT2122</h2>

    <h3>Course Outline</h3>
    <p>Over the semester, this course will cover:</p>
    <ul>
      <li>Primitive vs non-primitive data types</li>
      <li>Operators, statements, control structures</li>
      <li>APIs</li>
      <li>The influence of basic OO principles — <strong>abstraction</strong>, <strong>encapsulation</strong>, <strong>inheritance</strong>, and <strong>re-use</strong> — on the design and implementation of OO programs</li>
      <li><strong>Essentials of Class Diagrams and classes</strong>
        <ul>
          <li>classes, members, methods, constructors</li>
        </ul>
      </li>
      <li><strong>Inheritance, abstraction, polymorphism, encapsulation</strong>
        <ul>
          <li>subclasses, <code>this</code>, <code>super</code>, <code>Object</code>, etc.</li>
          <li>concrete vs abstract</li>
          <li>static and dynamic polymorphism</li>
          <li>getters and setters</li>
        </ul>
      </li>
      <li>Abstract classes and Interfaces</li>
      <li><strong>Access control</strong>
        <ul>
          <li>public, private, protected, default</li>
        </ul>
      </li>
      <li>String handling</li>
      <li><strong>Exception handling</strong>
        <ul>
          <li>exceptions, <code>throw</code>, <code>try</code>/<code>catch</code>, <code>throws</code></li>
        </ul>
      </li>
      <li>Interactions with DBMSs</li>
      <li>Introduction to GUI with AWT/Swing</li>
      <li><strong>Files and Streams handling</strong>
        <ul>
          <li>text input: <code>Scanner</code> / <code>Reader</code></li>
          <li>binary input: <code>DataInputStream</code>, <code>ObjectInputStream</code>, serialization</li>
          <li>output: <code>PrintStream</code>, <code>DataOutputStream</code>, <code>ObjectOutputStream</code>, <code>PrintWriter</code></li>
        </ul>
      </li>
      <li><strong>Introduction to Design Patterns</strong>
        <ul>
          <li>Singleton</li>
        </ul>
      </li>
      <li><strong>Introduction to Threads</strong>
        <ul>
          <li><code>Thread</code> class, <code>Runnable</code> interface</li>
        </ul>
      </li>
    </ul>

    <h3>Course Plan</h3>
    <ul>
      <li>Lectures — 02 hours per week</li>
      <li><strong>Evaluation</strong>
        <ul>
          <li>03 Quizzes</li>
          <li>Mid Term Evaluation</li>
        </ul>
      </li>
    </ul>

    <h3>Eligibility and Evaluation Criteria</h3>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>80% attendance</strong> is MANDATORY. Getting at least <strong>40% from CA (Continuous Assessment) marks</strong> is also MANDATORY.</p>
    </div>
    <p>The final mark is split like this:</p>
    <pre><code>CA (Continuous Assessment) — 30%
   10%  From Quizzes
   20%  Mid Term Theory Evaluation

ESA (End Semester Assessment) — 70%
   70%  Final Exam (Theory Paper)</code></pre>

    <div class="divider"></div>

    <h2>What You Will Learn in This Lesson</h2>
    <ul>
      <li>What is Object-Oriented Programming</li>
      <li>Fundamentals of Object Orientation</li>
      <li>Why Object Orientation? — Modularity, Information-hiding, Code re-use, Pluggability and debugging ease</li>
      <li>Understanding Classes and Objects</li>
      <li>A Real-World Scenario</li>
      <li>Class, Object, Instance, Instantiation</li>
    </ul>

    <div class="divider"></div>

    <h2>What is Programming?</h2>
    <p><strong>Programming</strong> is the process of writing computer programs. A programmer writes <strong>program code</strong>, which is then run on a computer.</p>

    <h2>Programming vs. Development vs. Engineering</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>These three words are often used loosely, but they describe different scopes of work. <strong>Programming</strong> is writing code to make a computer do something. <strong>Development</strong> is the broader process of building software — including planning, designing, coding, and testing. <strong>Engineering</strong> applies systematic, disciplined, and measurable methods to the development, operation, and maintenance of software. As you go through this course, keep asking yourself which of these three activities you are doing at each stage.</p>
    </div>

    <div class="divider"></div>

    <h2>What is Object-Oriented Programming?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Object-Oriented Programming (OOP)</strong> is a paradigm based on the idea of wrapping pieces of <strong>data</strong>, and the <strong>behavior</strong> related to that data, into special bundles called <strong>objects</strong>. Objects are constructed from a set of "blueprints" defined by a programmer, called <strong>classes</strong>.</p>
    </div>

    <h2>Fundamentals of Object Orientation</h2>
    <p>A program written in the OOP style is viewed as:</p>
    <ul>
      <li>A <strong>collection of objects</strong>
        <ul>
          <li>Objects pass messages to each other</li>
          <li>Each object decides what to do with a message it receives</li>
        </ul>
      </li>
    </ul>
    <p>Because of this, it is more meaningful to talk about an <strong>object-oriented system</strong> than a "program". An object-oriented system is a set of interacting objects organized into classes.</p>
    <p>In OOP, the <strong>focus is on data, not on function</strong>. Defining the data, its attributes, and how it will be manipulated is the main focus. The exact mechanism of manipulation — the procedure or algorithm — is not the primary focus.</p>

    <div class="divider"></div>

    <h2>Why Object Orientation?</h2>
    <p>Object orientation exists for keeping large software projects manageable by human programmers. It gives four main benefits:</p>

    <h3>Modularity</h3>
    <p>The source code for an object can be written and maintained independently of the source code for other objects. Once created, an object can be easily passed around inside the system.</p>

    <h3>Information-Hiding</h3>
    <p>By interacting only with an object's <strong>methods</strong>, the details of its internal implementation remain hidden from the outside world.</p>

    <h3>Code Re-use</h3>
    <p>If an object already exists — perhaps written by another software developer — you can use that object in your own program. This lets specialists implement, test, and debug complex, task-specific objects, which you can then trust to run inside your own code.</p>

    <h3>Pluggability and Debugging Ease</h3>
    <p>If a particular object turns out to be problematic, you can simply remove it from your application and plug in a different object as its replacement. This is similar to fixing mechanical problems in the real world — if a bolt breaks, you replace the bolt, not the entire machine.</p>

    <div class="divider"></div>

    <h2>Understanding Classes and Objects</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is like a cookie cutter — it defines the shape of objects. <strong>Objects</strong> are like the cookies themselves; they are <strong>instances</strong> of the class.</p>
    </div>

    <h2>A Real-World Scenario: The Bank Account System</h2>
    <p>Consider this requirement:</p>
    <pre><code>"...customers are allowed to have different types of bank accounts,
deposit money, withdraw money and transfer money between accounts."</code></pre>

    <h3>The Procedural Approach</h3>
    <p>Start by solving this the "procedural" way — write separate functions and a plain data structure:</p>
    <pre><code>bool MakeDeposit(int accountNum, float amount);
float Withdraw(int accountNum, float amount);

struct Account {
    char *name;
    int accountNum;
    float balance;
    char accountType;
};</code></pre>
    <p>The procedural approach has some drawbacks:</p>
    <ul>
      <li>Focus is on procedures, not on data</li>
      <li>All data is shared — there is no protection</li>
      <li>It is more difficult to modify</li>
      <li>It is hard to manage complexity as the program grows</li>
    </ul>

    <h3>The Object-Oriented Approach</h3>
    <p>Now solve the same requirement the object-oriented way. A simple trick helps identify the classes and methods you need directly from the requirement sentence:</p>
    <ul>
      <li><strong>Nouns</strong> in the sentence — customers, bank accounts, money, accounts — represent the <strong>objects (classes)</strong> in the domain</li>
      <li><strong>Verbs</strong> in the sentence — deposit, withdraw, transfer — represent the <strong>actions (methods)</strong> on those objects</li>
    </ul>
    <pre><code>Procedural            Object Oriented
------------          -------------------
Withdraw               Customer
Deposit                Money
Transfer                Account</code></pre>
    <p>Objects in the <strong>problem domain</strong> (the real world) are mapped to objects in <strong>software</strong>. In the object-oriented approach, data and the operations on that data are grouped together — for example, an <code>Account</code> class groups the account's data together with its <code>Withdraw</code>, <code>Deposit</code>, and <code>Transfer</code> operations.</p>

    <div class="divider"></div>

    <h2>Classes, Objects, Instances and Instantiation</h2>

    <h3>Objects and Classes</h3>
    <p><strong>Classes reflect concepts</strong>; <strong>objects reflect instances</strong> that embody those concepts. For example, "Girl" is a class (a concept). Jodie, Daria, Jane, and Brittany are objects — actual girls who embody that concept.</p>

    <h3>Objects as Instances of Classes</h3>
    <p>The world conceptually consists of objects. Many objects can be said to be of the same type, or class — for example, my bank account, your bank account, and Bill Gates's bank account are all different objects, but they share the same type. We call that object type a <strong>class</strong>. The type of my bank account is <code>BankAccount</code>, and the type of Bill Gates's bank account is also <code>BankAccount</code>.</p>

    <h3>What Is a Class?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is a blueprint of an object.</p>
    </div>
    <p>In the real world, you will often find many individual objects of the same kind. Take bicycles as an example — there may be thousands of other bicycles in existence, all of the same make and model. Each bicycle was built from the same set of blueprints, and therefore contains the same components. In object-oriented terms, your bicycle is an <strong>instance</strong> of the class of objects known as bicycles. A class is the blueprint from which individual objects are created.</p>

    <h3>What Is an Object?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An <strong>object</strong> is an instance of a class.</p>
    </div>

    <h3>Class vs Object</h3>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Class:</strong> visible in the source code; the code is not duplicated.<br>
      <strong>Object:</strong> has its own copy of data; is active in a running program; occupies memory; has the set of operations given in the class.</p>
    </div>

    <h3>Characteristics of Objects</h3>
    <ul>
      <li><strong>State</strong> — the properties of an object and their values.
        <ul>
          <li>Dog: name, color, breed, etc.</li>
          <li>Bank Account: balance, interest rate, etc.</li>
        </ul>
      </li>
      <li><strong>Behavior</strong> — defines how an object interacts with the outside world, through its methods.
        <ul>
          <li>Dog: making sound (barking), wagging tail, etc.</li>
          <li>Bank Account: withdraw, deposit, etc.</li>
        </ul>
      </li>
      <li><strong>Identity</strong> — how to tell apart two objects of the same class.
        <ul>
          <li>e.g. ID, Account Number, Serial No, etc.</li>
        </ul>
      </li>
    </ul>

    <h3>Instance</h3>
    <p>An <strong>instance</strong> is a specific realization of any object. An object may be different in several ways, and each realized variation of that object is an instance.</p>

    <h3>Instantiation</h3>
    <p>An object is <strong>instantiated</strong> from a class:</p>
    <pre><code>BankAccount myAccount;
myAccount = new BankAccount();

BankAccount gatesAccount;
gatesAccount = new BankAccount();</code></pre>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Instantiation</strong> is the creation of a real instance, or a particular realization, of an abstraction or template — such as a class of objects, or a computer process. In short: the creation of a realized instance is called instantiation.</p>
    </div>

    <div class="divider"></div>

    <h2>How to Identify Objects When Designing a Program</h2>
    <ol>
      <li>Think about the real world, and be natural about it</li>
      <li>Identify the objects involved</li>
      <li>For each object, think:
        <ul>
          <li>What possible states can this object be in?</li>
          <li>What possible behavior can this object perform?</li>
        </ul>
      </li>
    </ol>

    <h2>Alan Kay's Five Rules of Object-Oriented Programming</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <ol>
        <li>Everything is an object</li>
        <li>A program is a bunch of objects telling each other what to do, by sending messages</li>
        <li>Each object has its own memory, made up of other objects</li>
        <li>Every object has a type</li>
        <li>All objects of a particular type can receive the same messages (invoke the same methods)</li>
      </ol>
    </div>

    <div class="divider"></div>

    <h2>Advantages of OOP</h2>
    <ul>
      <li>Ease of modeling the real world in a software context</li>
      <li>Object-oriented systems can be easily upgraded from small to large scale</li>
      <li>It is easy to partition the work in a project based on objects</li>
      <li>Object-oriented programming offers a new and powerful model for writing computer software</li>
      <li>It reduces software maintenance and development costs</li>
    </ul>

    <h2>Tools: IntelliJ IDEA</h2>
    <p>This course will use <strong>IntelliJ IDEA</strong> as the IDE. Set up your account and install the IDE using:</p>
    <ul>
      <li><code>https://account.jetbrains.com/login</code></li>
      <li><code>https://www.jetbrains.com/help/idea/getting-started.html</code></li>
    </ul>

    <div class="divider"></div>

    <h2>References</h2>
    <ul>
      <li>Oracle Java Tutorials — Object-Oriented Programming Concepts (<code>docs.oracle.com/javase/tutorial/java/concepts</code>)</li>
      <li><strong>How To Program (Early Objects)</strong> — by H. Deitel and P. Deitel</li>
      <li><strong>Head First Java</strong> — by Kathy Sierra and Bert Bates</li>
    </ul>
  `,
  summary: {
    topic: 'Introduction to Object-Oriented Programming',
    subTopics: [
      'Course Overview: Outline, Plan, Eligibility and Evaluation Criteria',
      'What is Programming?',
      'Programming vs Development vs Engineering',
      'What is Object-Oriented Programming?',
      'Fundamentals of Object Orientation',
      'Why Object Orientation: Modularity, Information-hiding, Code re-use, Pluggability',
      'Understanding Classes and Objects',
      'A Real-World Scenario: The Bank Account System',
      'The Procedural Approach vs The Object-Oriented Approach',
      'Objects and Classes',
      'Objects as Instances of Classes',
      'What Is a Class?',
      'What Is an Object?',
      'Class vs Object',
      'Characteristics of Objects: State, Behavior, Identity',
      'Instance',
      'Instantiation',
      'How to Identify Objects When Designing a Program',
      'Alan Kay\'s Five Rules of Object-Oriented Programming',
      'Advantages of OOP',
      'Tools: IntelliJ IDEA',
    ],
    definitions: [
      { term: 'Object-Oriented Programming (OOP)', meaning: 'A programming paradigm that wraps data and the behavior related to that data into bundles called objects, built from blueprints called classes.' },
      { term: 'Class', meaning: 'A blueprint from which individual objects are created; visible in source code and not duplicated for each object.' },
      { term: 'Object', meaning: 'An instance of a class; has its own copy of data, occupies memory, and is active while a program runs.' },
      { term: 'Instance', meaning: 'A specific realization of an object; each different realized variation of an object is a separate instance.' },
      { term: 'Instantiation', meaning: 'The process of creating a real instance (an object) from a class or template, e.g. using the new keyword.' },
      { term: 'Modularity', meaning: 'The ability to write and maintain the source code of one object independently of other objects.' },
      { term: 'Information-Hiding', meaning: 'Keeping the internal implementation details of an object hidden, so the outside world interacts only through its methods.' },
      { term: 'Code Re-use', meaning: 'Using an already-built, tested object inside your own program instead of writing it from scratch.' },
      { term: 'Pluggability', meaning: 'The ability to remove a problematic object and replace it with another, without rebuilding the whole system.' },
      { term: 'State', meaning: 'The properties of an object and their current values, such as a bank account balance.' },
      { term: 'Behavior', meaning: 'What an object can do, defined by its methods, such as deposit or withdraw for a bank account.' },
      { term: 'Identity', meaning: 'What makes one object distinguishable from another object of the same class, such as an account number.' },
    ],
    keyPoints: [
      '80% attendance is mandatory, and at least 40% from CA marks is mandatory for eligibility.',
      'Final marks: CA 30% (10% quizzes + 20% mid-term theory evaluation) and ESA 70% (final theory exam).',
      'OOP wraps data and behavior together into objects, which are built from blueprints called classes.',
      'In OOP, the focus is on data and its attributes, not on the exact procedure used to manipulate it.',
      'Object orientation keeps large software projects manageable through modularity, information-hiding, code re-use, and pluggability.',
      'In the procedural approach, data is shared with no protection, making large programs hard to modify and manage.',
      'In the object-oriented approach, nouns in a requirement map to objects/classes, and verbs map to methods.',
      'A class is visible in source code and is not duplicated; an object has its own copy of data and occupies memory at runtime.',
      'Every object has state (properties), behavior (methods), and identity (what tells it apart from other objects of the same class).',
      'An instance is a specific realization of an object; instantiation is creating that instance, e.g. new BankAccount().',
      'Alan Kay\'s five rules: everything is an object, objects communicate by sending messages, each object holds its own memory of other objects, every object has a type, and objects of the same type can receive the same messages.',
    ],
  },
},

{
  id: 2,
  title: 'Classes and Objects - P01',
  content: `
    <span class="lesson-badge">LESSON 02</span>
    <h1>Classes and Objects - Part 01</h1>
    <div class="meta-info">ICT2122 <span>•</span> 13 min read</div>

    <h2>Quick Recap</h2>
    <p>Before we start, let's remember what we learned in Lesson 01:</p>
    <ul>
      <li>What <strong>Object-Oriented Programming</strong> is</li>
      <li>Why we use OOP — <strong>Modularity</strong>, <strong>Information-hiding</strong>, <strong>Code re-use</strong>, and <strong>Pluggability and debugging ease</strong></li>
      <li>A first look at <strong>Class</strong>, <strong>Object</strong>, <strong>Instance</strong>, and <strong>Instantiation</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>What You'll Learn Today</h2>
    <ul>
      <li>Core OOP concepts</li>
      <li>Understanding <strong>Objects</strong> and <strong>Classes</strong> in depth</li>
      <li><strong>Fields</strong> and <strong>Methods</strong></li>
      <li>Java <strong>Access Modifiers</strong></li>
      <li>How to <strong>create</strong> and <strong>initialize</strong> objects</li>
      <li><strong>Constructors</strong> — default and parameterized</li>
    </ul>

    <div class="divider"></div>

    <h2>Object-Oriented Programming — Core Concepts</h2>
    <p>OOP simplifies software development and maintenance by giving us these core concepts:</p>
    <ul>
      <li><strong>Object</strong></li>
      <li><strong>Class</strong></li>
      <li><strong>Inheritance</strong></li>
      <li><strong>Polymorphism</strong></li>
      <li><strong>Abstraction</strong></li>
      <li><strong>Encapsulation</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Classes and Objects — The Cookie Cutter Analogy</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is like a cookie cutter — it defines the shape of objects. <strong>Objects</strong> are like cookies — they are <strong>instances</strong> of the class.</p>
    </div>
    <p>Just like one cookie cutter can make many cookies with the same shape, one class can be used to create many objects with the same structure.</p>

    <div class="divider"></div>

    <h2>What Is an Object?</h2>
    <p>An <strong>object</strong> is an instance of a class.</p>

    <h3>Characteristics of an Object</h3>
    <ul>
      <li><strong>State</strong> — represents the data of an object</li>
      <li><strong>Behavior</strong> — represents the actions of an object, such as deposit, withdraw, etc.</li>
      <li><strong>Identity</strong> — used internally by the JVM to identify each object uniquely</li>
    </ul>

    <h3>Objects Have Four Properties</h3>
    <ul>
      <li>Objects have <strong>State</strong></li>
      <li>Objects have <strong>Behavior</strong></li>
      <li>Objects have <strong>Identity</strong></li>
      <li>Objects have <strong>Type</strong></li>
    </ul>

    <h3>Life Cycle of an Object</h3>
    <ol>
      <li>Before an object can be created from a class, the class must be <strong>loaded</strong>.</li>
      <li>An object is created from a class when you use the <code>new</code> keyword.</li>
      <li>The object lives its life, giving access to its public methods and fields to whoever needs them.</li>
      <li>When it's time for the object to die, it is removed from memory, and Java drops its internal reference to it.</li>
    </ol>

    <div class="divider"></div>

    <h2>What Is a Class?</h2>
    <p>A class is a <strong>blueprint</strong> of an object.</p>

    <h3>Declaring a Class — Basic Form</h3>
    <pre><code>class ClassName
{
    class body
}</code></pre>

    <h3>Declaring a Class — Extended Form</h3>
    <pre><code>Package declaration;
Import statements;

[access modifier] class ClassName extends [ClassName] implements [Interface Names]
{
    Fields
    Initializers
    Constructors
    Methods
    other Classes and Interfaces
}</code></pre>

    <h3>Body of a Class</h3>
    <ul>
      <li><strong>Fields</strong> — variable declarations that define the fields of a class</li>
      <li><strong>Initializers</strong> — stand-alone blocks of code that run only once, when the class is initialized. There are <strong>static initializers</strong> and <strong>instance initializers</strong></li>
      <li><strong>Constructors</strong> — a block of code similar to a method, but run to initialize an object when an instance is created</li>
      <li><strong>Methods</strong> — method declarations that define the methods of a class</li>
      <li><strong>Other classes and interfaces</strong> — a class can include another class, called an <strong>inner class</strong> or <strong>nested class</strong>. Classes can also contain interfaces</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Homework</span>
      <p>Think about it: Who are the <strong>members</strong> of a class?</p>
    </div>

    <h3>Ordering Elements in a Class</h3>
    <pre><code>Element               Example                  Required?   Where it goes
─────────────────────────────────────────────────────────────────────────
Package declaration   package abc;             No          First line in the file
Import statements     import java.util.*;      No          Immediately after the package
Class declaration     public class C           Yes         Immediately after the import
Field declarations    int value;               No          Anywhere inside a class
Method declarations   void method()            No          Anywhere inside a class</code></pre>

    <h3>Class Naming Convention</h3>
    <ul>
      <li>Begin the class name with a <strong>capital letter</strong> — Example: <code>Student</code>, <code>TennisBall</code></li>
      <li>Use <strong>nouns</strong> for your class names as much as possible</li>
      <li>Avoid using the names of Java <strong>keywords</strong>, API class names, or reserved words</li>
    </ul>

    <h3>Class — How to Save</h3>
    <ul>
      <li>A <strong>public</strong> class must be written in a source file that has the <strong>same name</strong> as the class, with the extension <code>.java</code>. Example: a public class named <code>Student</code> → <code>Student.java</code></li>
      <li>You <strong>cannot</strong> place two or more public classes in the same file</li>
    </ul>

    <div class="divider"></div>

    <h2>Understanding Fields</h2>
    <p>A <strong>field</strong> is a variable that's defined in the body of a class, outside any of the class's methods.</p>
    <p>Fields are also called <strong>class variables</strong>, and they are available to all the methods of a class.</p>

    <div class="divider"></div>

    <h2>Understanding Methods</h2>
    <p>A Java <strong>method</strong> is a collection of statements grouped together to perform an operation. A method only runs when it is <strong>called</strong>.</p>

    <h3>Method Signature</h3>
    <pre><code>public final void nap(int minutes) throws InterruptedException {
    // take a nap
}</code></pre>
    <ul>
      <li><code>public</code> — access modifier</li>
      <li><code>final</code> — optional specifier</li>
      <li><code>void</code> — return type</li>
      <li><code>nap</code> — method name</li>
      <li><code>(int minutes)</code> — parameter list, inside required parentheses</li>
      <li><code>throws InterruptedException</code> — optional exception</li>
      <li>Everything inside <code>{ }</code> is the <strong>method body</strong></li>
    </ul>

    <h3>Parts of a Method Declaration</h3>
    <pre><code>Element                  Value in nap() example         Required?
──────────────────────────────────────────────────────────────────
Access modifier          public                         No
Optional specifier       final                          No
Return type              void                           Yes
Method name              nap                            Yes
Parameter list           (int minutes)                  Yes, but can be empty parentheses
Optional exception list  throws InterruptedException    No
Method body              { // take a nap }              Yes, but can be empty braces</code></pre>

    <div class="divider"></div>

    <h2>JAVA — Access Modifiers</h2>
    <p>Java offers four choices of access modifiers:</p>
    <ul>
      <li><strong>public</strong> — the method can be called from any class</li>
      <li><strong>private</strong> — the method can only be called from within the same class</li>
      <li><strong>protected</strong> — the method can only be called from classes in the same package or subclasses</li>
      <li><strong>default</strong> (package-private) — the method can only be called from classes in the same package</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>There is <strong>no keyword</strong> for default access — you simply <strong>omit</strong> the access modifier.</p>
    </div>

    <div class="divider"></div>

    <h2>Creating Objects</h2>
    <p>Creating an object happens in three steps:</p>
    <ul>
      <li><strong>Declaration</strong> — a variable declaration that associates a variable name with an object type</li>
      <li><strong>Instantiation</strong> — the <code>new</code> keyword is a Java operator that creates the object</li>
      <li><strong>Initialization</strong> — the <code>new</code> operator is followed by a call to a <strong>constructor</strong>, which initializes the new object</li>
    </ul>

    <h3>Declaring and Instantiating an Object</h3>
    <p>The <code>new</code> keyword is used to instantiate an object. It creates the object in memory and returns a reference to the newly created object.</p>
    <pre><code>Employee e; // Declaration
e = new Employee(); // Instantiation</code></pre>
    <p>The reference <code>e</code> points to the <code>Employee</code> object in memory. The <code>new</code> operator allocates memory for the object.</p>
    <p>We can also declare the reference and instantiate the object in a single statement:</p>
    <pre><code>Employee e = new Employee();
// Declaration + Instantiation</code></pre>

    <h3>Creating Objects — Within the Same Class</h3>
    <pre><code>public class Employee
{
    // field or data member or instance variables
    int id;
    String name;

    public static void main(String args[])
    {
        Employee emp = new Employee();
        // creating an object of Employee

        System.out.println(emp.id);
        // accessing member through reference variable

        System.out.println(emp.name);
        // accessing member through reference variable
    }
}</code></pre>

    <h3>Creating Objects — Outside the Class (Driver Class)</h3>
    <pre><code>public class NewEmployee
{
    int id;
    String name;
}

public class TestEmployee
{
    public static void main(String args[])
    {
        NewEmployee emp = new NewEmployee();

        System.out.println(emp.id);
        System.out.println(emp.name);
    }
}</code></pre>

    <div class="divider"></div>

    <h2>Initializing Objects — Three Ways</h2>
    <p>There are three ways to initialize an object in Java:</p>
    <ol>
      <li>By <strong>reference variable</strong></li>
      <li>By <strong>method</strong></li>
      <li>By <strong>constructor</strong></li>
    </ol>

    <h3>1. Initialization Through Reference</h3>
    <p>Initializing an object simply means storing data into the object.</p>
    <pre><code>public class Employee
{
    int id;
    String name;
}

public class TestEmployee
{
    public static void main(String args[])
    {
        Employee emp = new Employee();
        emp.id = 101;
        emp.name = "Nimal";
        System.out.println("Employee id : " + emp.id + " ,Employee name : " + emp.name);
    }
}</code></pre>

    <h3>2. Initialization Through Method</h3>
    <p>We use a method to initialize objects and access their values.</p>
    <pre><code>public class Student
{
    String name;
    int id;

    public void insertRecord(String s, int i)
    {
        name = s;
        id = i;
    }

    public void displayInformation()
    {
        System.out.println("Student name : " + name + " ,Student id : " + id);
    }
}</code></pre>
    <pre><code>class TestStudent
{
    public static void main(String args[])
    {
        Student stu1 = new Student();
        Student stu2 = new Student();

        stu1.insertRecord(111, "Saman");
        stu2.insertRecord(222, "Amal");

        stu1.displayInformation();
        stu2.displayInformation();
    }
}</code></pre>

    <div class="divider"></div>

    <h2>Understanding Constructors</h2>
    <p>In Java, a <strong>constructor</strong> is a block of code similar to a method. A constructor is called when a new instance of an object is created — it's actually the <code>new</code> keyword that calls the constructor.</p>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>After creating the object, you <strong>cannot call the constructor again</strong>.</p>
    </div>
    <p>A constructor is a special type of method used to <strong>initialize the object</strong>.</p>

    <p>Every time an object is created using the <code>new()</code> keyword, at least one constructor is called — this is called a <strong>default constructor</strong>.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>It is called a <strong>constructor</strong> because it constructs the values at the time of object creation.</p>
    </div>
    <p>It is not necessary to write a constructor for a class — the Java compiler creates a default constructor if your class doesn't have one.</p>

    <h3>Rules for Creating a Constructor</h3>
    <ul>
      <li>Constructor name must be the <strong>same as its class name</strong></li>
      <li>Constructor must have <strong>no explicit return type</strong></li>
    </ul>

    <h3>Types of Constructors</h3>
    <ul>
      <li><strong>Default constructor</strong> (no-arg constructor)</li>
      <li><strong>Parameterized constructor</strong></li>
    </ul>

    <h3>3. Initialization Through Constructor</h3>
    <ul>
      <li>Constructors are used to initialize the <strong>instance variables</strong> of a given class</li>
      <li>They have the <strong>same name</strong> as their class</li>
      <li>They have <strong>no return type</strong>, because they implicitly return an object of their class</li>
    </ul>
    <pre><code>Employee emp = new Employee();</code></pre>
    <p>Here, the default constructor <code>Employee()</code> is being invoked to initialize <code>emp</code>.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A <strong>default constructor</strong> takes no parameters, and it initializes all instance variables to <strong>zero</strong> or <strong>null</strong>.</p>
    </div>

    <h3>Example — Default Constructor</h3>
    <pre><code>public class Employee
{
    private String Name;
    private int Age;
    private char Gender;

    Employee()
    {
        System.out.println("Default constructor executed…");
        System.out.println("Name : " + Name + " ,Age : " + Age + " ,Gender : " + Gender);
    }
}</code></pre>

    <h3>Example — Parameterized Constructor</h3>
    <pre><code>public class Employee
{
    private String Name;
    private int Age;
    private char Gender;

    Employee(String n, int a, char g)
    {
        Name = n;
        Age = a;
        Gender = g;
        System.out.println("Parameterized constructor executed…");
        System.out.println("Name : " + Name + " ,Age : " + Age + " ,Gender : " + Gender);
    }
}</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Try It Out</span>
      <p>Study this <code>Account</code> class. Can you spot why <code>setData()</code> won't actually store the values passed in? (Hint: look closely at the parameter names versus the field names.)</p>
    </div>
    <pre><code>class Account
{
    int a, b;

    public void setData(int a, int b)
    {
        a = a;
        b = b;
    }

    public void showData()
    {
        System.out.println("Value of A=" + a);
        System.out.println("Value of B=" + b);
    }

    public static void main(String[] args)
    {
        Account myAccount = new Account();
        myAccount.setData(2, 3);
        myAccount.showData();
    }
}</code></pre>

    <div class="divider"></div>

    <h2>Summary</h2>
    <ul>
      <li>Object-Oriented Programming — Concepts</li>
      <li>Understanding Objects and Classes</li>
      <li>Understanding Fields and Methods</li>
      <li>JAVA — Access Modifiers</li>
      <li>Creating and Initializing Objects (by reference, by method, by constructor)</li>
      <li>Understanding Constructors — Default and Parameterized</li>
    </ul>
  `,
  summary: {
    topic: 'Classes and Objects in Java (OOP Fundamentals)',
    subTopics: [
      'Object-Oriented Programming Core Concepts',
      'Understanding Objects: State, Behavior, Identity, Type',
      'Life Cycle of an Object',
      'What Is a Class? Declaring a Class',
      'Body of a Class: Fields, Initializers, Constructors, Methods',
      'Class Naming Convention and File Rules',
      'Understanding Fields',
      'Understanding Methods and Method Signatures',
      'Java Access Modifiers',
      'Creating Objects: Declaration, Instantiation, Initialization',
      'Initializing Objects: By Reference, By Method, By Constructor',
      'Understanding Constructors: Default and Parameterized',
    ],
    definitions: [
      { term: 'Object', meaning: 'An instance of a class.' },
      { term: 'Class', meaning: 'A blueprint of an object; defines the shape and structure of objects.' },
      { term: 'State', meaning: 'Represents the data held by an object.' },
      { term: 'Behavior', meaning: 'Represents the actions of an object, such as deposit or withdraw.' },
      { term: 'Identity', meaning: 'Used internally by the JVM to uniquely identify each object.' },
      { term: 'Field', meaning: 'A variable defined in the body of a class, outside any method; also called a class variable.' },
      { term: 'Method', meaning: 'A collection of statements grouped together to perform an operation; runs only when called.' },
      { term: 'Constructor', meaning: 'A block of code similar to a method that runs to initialize an object when an instance is created.' },
      { term: 'Default Constructor', meaning: 'A no-argument constructor that initializes instance variables to zero or null; auto-created by Java if none is written.' },
      { term: 'Parameterized Constructor', meaning: 'A constructor that accepts arguments to initialize instance variables with specific values.' },
      { term: 'Access Modifier', meaning: 'A keyword that controls the visibility of a class, field, or method: public, private, protected, or default.' },
      { term: 'Instantiation', meaning: 'The process of creating an object from a class using the new keyword.' },
    ],
    keyPoints: [
      'A class is like a cookie cutter; objects are like cookies made from it — objects are instances of a class.',
      'Objects have four properties: State, Behavior, Identity, and Type.',
      'The new keyword creates an object in memory and calls its constructor.',
      'A public class must be saved in a file with the same name as the class, ending in .java.',
      'Two or more public classes cannot exist in the same file.',
      'There are three ways to initialize an object: by reference variable, by method, or by constructor.',
      'Java has four access modifiers: public, private, protected, and default (default has no keyword — just omit the modifier).',
      'Every class gets a default (no-arg) constructor automatically if the programmer does not write one.',
      'A constructor name must match the class name exactly and must have no return type.',
      'Once an object is created, its constructor cannot be called again.',
    ],
  },
},

{
  id: 3,
  title: 'Classes and Objects - P02',
  content: `
    <span class="lesson-badge">LESSON 02 – PART 02</span>
    <h1>Classes and Objects - Part 02</h1>
    <div class="meta-info">ICT2122 <span>•</span> 16 min read</div>

    <h2>Recap — Part 01</h2>
    <p>Part 01 of this lesson covered:</p>
    <ul>
      <li>Object Oriented Programming — Concepts</li>
      <li>Understanding Objects</li>
      <li>Understanding Classes</li>
      <li>Understanding Fields</li>
      <li>Understanding Methods</li>
      <li>JAVA — Access Modifiers</li>
      <li>Creating Objects</li>
      <li>Initializing Objects (by reference variable, by method, by constructor)</li>
      <li>Understanding Constructors (Default, Parameterized)</li>
    </ul>

    <h2>Outline — Part 02</h2>
    <ul>
      <li>JAVA — <code>this</code> keyword (methods, constructors)</li>
      <li>JAVA — Constructor Chaining</li>
      <li>JAVA — Anonymous objects</li>
      <li>JAVA — Garbage Collection</li>
      <li>Static in Java (Static Fields, Static Methods, Static Initializers)</li>
      <li>Preventing instantiating a class</li>
    </ul>

    <div class="divider"></div>

    <h2>JAVA — <code>this</code> Keyword</h2>

    <h3>Have You Tried???</h3>
    <p>Consider this code:</p>
    <pre><code>class Account
{
    int a,b;
    public void setData(int a, int b)
    {
        a=a;
        b=b;
    }
    public void showData(){
        System.out.println("Value of A=" +a);
        System.out.println("Value of B=" +b);
    }
    public static void main(String[] args)
    {
        Account myAccount= new Account();
        myAccount.setData(2,3);
        myAccount.showData();
    }
}</code></pre>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p><strong>Why does this go wrong?</strong> Both the local parameters (<code>a</code>, <code>b</code>) and the instance fields (<code>a</code>, <code>b</code>) have the <strong>same names</strong>. Writing <code>a=a;</code> just assigns the local parameter to itself — the instance fields are never actually set.</p>
    </div>

    <h3>The Solution: The <code>this</code> Reference</h3>
    <ul>
      <li>Every object has a reference to itself, represented by the <strong><code>this</code></strong> keyword.</li>
      <li>Fix the code segment like this:</li>
    </ul>
    <pre><code>public void setData(int a, int b){
    this.a=a;
    this.b=b;
}</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>At compile time, <code>this</code> is replaced with the actual object reference (e.g. <code>myAccount</code>). The <strong>left-hand side</strong> variable (<code>this.a</code>) becomes the <strong>instance variable</strong>, and the <strong>right-hand side</strong> variable (<code>a</code>) becomes the <strong>local variable</strong>.</p>
    </div>

    <h3>Uses of the <code>this</code> Keyword</h3>
    <p>You can use <strong><code>this</code></strong> in the body of a class constructor or method to refer to the <strong>current object</strong> — that is, the class instance for which the constructor or method has been called.</p>

    <h3>Uses for <code>this</code> — Methods</h3>
    <pre><code>// Instance variables
String firstName, lastName;

public void setNames(String last, String first)
{
    this.lastName = last;
    this.firstName = first;
}

public void setNames(String lastName, String firstName)
{
    this.lastName = lastName;
    this.firstName = firstName;
}

public String getFullName()
{
    return this.firstName + " " + this.lastName;
}

System.out.println(this);  // What happens???</code></pre>

    <h3>Uses for <code>this</code> — Constructors</h3>
    <ul>
      <li>Can call another constructor <strong>only in the very first statement</strong> of a constructor, by using the <code>this</code> keyword.</li>
      <li>Each constructor can call only <strong>one</strong> other constructor, but you can chain constructors.</li>
      <li>You <strong>can't create loops</strong> in which constructors call one another.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Hands-on:</strong> try chaining constructors using <code>this()</code> in the very first line of a constructor.</p>
    </div>

    <h3>Uses for <code>this</code> — Try It</h3>
    <ul>
      <li>To call current class methods.</li>
      <li>To pass the current object as an argument.</li>
      <li>To return the current object.</li>
      <li><code>System.out.println(this);</code></li>
    </ul>

    <div class="divider"></div>

    <h2>JAVA — Constructor Chaining</h2>
    <p><strong>Constructor chaining</strong> refers to the ability to call a constructor inside another constructor. You can use a constructor chain either within the same class, or even with another one.</p>
    <ul>
      <li><strong>Constructor Chaining in the Same Class</strong> — using the <code>this</code> keyword (as discussed above).</li>
      <li><strong>Constructor Chaining to Another Class</strong> — using the <code>super</code> keyword (will be discussed under Inheritance).</li>
    </ul>

    <div class="divider"></div>

    <h2>JAVA — Initializer (Initializer Block)</h2>
    <ul>
      <li>An initializer block is a lonely block of code that's placed <strong>outside</strong> any method, constructor, or other block of code.</li>
      <li>Initializers are executed whenever an instance of a class is created, <strong>regardless of which constructor</strong> is used to create the instance.</li>
    </ul>
    <pre><code>public class InitializerTest
{
    {
        System.out.print("Initializer block executed...!!!");
    }
}</code></pre>
    <ul>
      <li>If a class contains more than one initializer, the initializers are executed <strong>in the order in which they appear</strong> in the program.</li>
      <li>Initializers are executed <strong>before any class constructors</strong>.</li>
      <li>A special kind of initializer block called a <strong>static initializer</strong> lets you initialize static fields.</li>
      <li>Initializers are sometimes used with anonymous classes.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Hands-on:</strong> let's try some initializer blocks.</p>
    </div>

    <div class="divider"></div>

    <h2>JAVA — Anonymous Objects</h2>
    <ul>
      <li><strong>Anonymous</strong> simply means nameless.</li>
      <li>An object which has <strong>no reference</strong> is known as an anonymous object.</li>
      <li>It can be used at the time of object creation only.</li>
      <li>If you have to use an object only once, an anonymous object is a good approach.</li>
    </ul>
    <pre><code>new Calculation(); //anonymous object</code></pre>
    <p>Calling a method through a reference:</p>
    <pre><code>Calculation c=new Calculation();
c.fact(5);</code></pre>
    <p>Calling a method through an anonymous object:</p>
    <pre><code>new Calculation().fact(5);</code></pre>

    <h3>How Can an Object Be Unreferenced?</h3>
    <ul>
      <li><strong>By nulling the reference:</strong>
<pre><code>Employee e=new Employee();
e=null;</code></pre>
      </li>
      <li><strong>By assigning a reference to another:</strong>
<pre><code>Employee e1=new Employee();
Employee e2=new Employee();
e1=e2; //now the first object referred by
       //e1 is available for garbage collection</code></pre>
      </li>
      <li><strong>By anonymous object, etc.:</strong>
<pre><code>new Employee();</code></pre>
      </li>
    </ul>

    <div class="divider"></div>

    <h2>JAVA — Garbage Collection</h2>
    <ul>
      <li>In Java, <strong>garbage</strong> means unreferenced objects.</li>
      <li><strong>Garbage Collection</strong> is the process of reclaiming runtime unused memory automatically — in other words, it is a way to destroy unused objects.</li>
      <li>The Java runtime environment deletes objects when it determines that they are no longer being used.</li>
      <li>In Java, this is performed automatically. So, Java provides better memory management.</li>
    </ul>

    <h3>Advantages of the JAVA Garbage Collector</h3>
    <ul>
      <li>It makes Java memory efficient, because the garbage collector removes unreferenced objects from heap memory.</li>
      <li>It is automatically done by the garbage collector (a part of the JVM), so we don't need to make extra efforts.</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Homework:</strong> what are the disadvantages of the JAVA garbage collector?</p>
    </div>

    <div class="divider"></div>

    <h2>JAVA — Working with Statics</h2>

    <h3>What Does the Term <code>static</code> Mean in Java?</h3>
    <ul>
      <li>It's used to describe a special type of field or method that <strong>isn't associated with a particular instance</strong> of a class — static fields and methods are associated with the class itself.</li>
      <li>You don't have to create an instance of the class to access a static field or method — you can access it by specifying the <strong>class name</strong>, not a variable that references an object.</li>
    </ul>

    <h3>Common Uses of Static Fields and Methods in Java</h3>
    <ul>
      <li>To provide constants or other values that aren't related to class instances.</li>
      <li>To keep count of how many instances of a class have been created.</li>
      <li>To keep track of a reference or serial number that's assigned to each new object instance.</li>
      <li>To provide an alternative way to create instances of the class.</li>
      <li>To provide utility functions that aren't associated with an object at all.</li>
    </ul>

    <h3>Static Fields</h3>
    <ul>
      <li>A static field is a field that's declared with the <code>static</code> keyword — e.g. <code>private static int age;</code> — following the pattern <code>&lt;access modifier&gt; static &lt;datatype&gt; &lt;field&gt;</code>.</li>
      <li>You can't use the <code>static</code> keyword within a class method — the code won't compile.</li>
      <li><strong>Fields can be static, but local variables can't.</strong></li>
      <li>You can provide an initial value for a static field — e.g. <code>private static int age = 20;</code></li>
      <li>Static fields are created and initialized when the class is first loaded — when a static member of the class is referred to, or when an instance of the class is created (whichever comes first), or using a static initializer.</li>
    </ul>

    <h3>Static Methods</h3>
    <ul>
      <li>A static method is a method declared with the <code>static</code> keyword. Like static fields, static methods are associated with the class itself, not with any particular object created from the class.</li>
      <li>The best-known static method is <strong><code>main</code></strong> — called by the Java runtime to start an application. Java applications are run in a static context by default.</li>
      <li>You <strong>can't</strong> access a non-static method or field from a static method, because the static method doesn't have an instance of the class to use to reference instance methods or fields.</li>
      <li>But you <strong>can</strong> access static methods and fields from an instance method.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Hands-on:</strong> try writing your own static fields and static methods.</p>
    </div>

    <h3>Counting Instances with Static</h3>
    <p>One common use for static variables is to keep track of how many instances of a class have been created. Note that an instance count reset to zero each time the application runs only keeps track of how many instances have been created during that particular execution of the program — not how many have ever been created.</p>

    <h3>What Can Call What? — Static vs. Instance Calls</h3>
    <pre><code>Type              Calling                       Legal?   How?
----------------- ----------------------------- -------- --------------------------------
Static method     Another static method/variable  Yes    Using the classname
Static method     An instance method/variable      No    -
Instance method   A static method/variable         Yes   Using the classname or a reference variable
Instance method   Another instance method/variable Yes   Using a reference variable</code></pre>

    <h3>Static Initializers</h3>
    <ul>
      <li>Java provides a feature called a <strong>static initializer</strong> that's designed specifically to let you initialize static fields.</li>
    </ul>
    <pre><code>static
{
    statements
}</code></pre>
    <ul>
      <li>An initializer block begins with the word <code>static</code>.</li>
      <li>You can have static initializers in the class body, outside any other block, such as the body of a method or constructor.</li>
      <li>The first time you access a static member (a static field or a static method), any static initializers in the class are executed.</li>
      <li>Static initializers are also executed the first time you create an instance — the static initializers are executed <strong>before</strong> the constructor is executed.</li>
      <li>If a class has more than one static initializer, they are executed in the order in which they appear in the program.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Hands-on:</strong> let's try some static initializers.</p>
    </div>

    <div class="divider"></div>

    <h2>Preventing Instantiating a Class</h2>
    <ul>
      <li>To create a class instance, you have to have at least one public constructor. If you don't provide a constructor in your class, Java automatically inserts a default constructor, which happens to be public.</li>
      <li>All you have to do <strong>to prevent a class instance from being created</strong> is provide a single <strong>private</strong> constructor:</li>
    </ul>
    <pre><code>public class MyClass
{
    private MyClass() {} // prevents instances
    // static methods and fields go here
}</code></pre>
    <p>Now, because the constructor is private, the class can't be instantiated.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Hands-on discussion:</strong> why would we need to prevent instantiating a class? Example: the <code>Math</code> class. This idea also connects to the <strong>Singleton Design</strong> pattern.</p>
    </div>

    <div class="divider"></div>

    <h2>Summary of Access Modifiers</h2>
    <pre><code>Can access                                  private?  default (package-private)?  protected?  public?
-------------------------------------------- --------- ---------------------------- ----------- --------
Member in the same class                       Yes                Yes                  Yes        Yes
Member in another class, same package          No                 Yes                  Yes        Yes
Member in a superclass, different package      No                 No                   Yes        Yes
Method/field in a non-superclass class,
different package                              No                 No                   No         Yes</code></pre>

    <div class="divider"></div>

    <h2>Homework — Order of Initialization</h2>
    <p>Try out your own coding to confirm this order:</p>
    <ol>
      <li>If there is a superclass, initialize it first.</li>
      <li>Static variable declarations and static initializers, in the order they appear in the file.</li>
      <li>Instance variable declarations and instance initializers, in the order they appear in the file.</li>
      <li>The constructor.</li>
    </ol>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Quiz 01</strong> is scheduled for 19th February 2026, 09.00 a.m. – 09.30 a.m., covering Lesson 01 (Introduction to OOP) and Lesson 02 (Classes and Objects — Part 01 and Part 02).</p>
    </div>

    <div class="divider"></div>

    <h2>Summary</h2>
    <ul>
      <li>JAVA — <code>this</code> keyword (methods, constructors)</li>
      <li>JAVA — Constructor Chaining</li>
      <li>JAVA — Anonymous objects</li>
      <li>JAVA — Garbage Collection</li>
      <li>Static in Java (Static Fields, Static Methods, Static Initializers)</li>
      <li>Preventing instantiating a class</li>
    </ul>

    <h3>References</h3>
    <ul>
      <li>Oracle Java Tutorials — "this" keyword and understanding class members</li>
      <li><em>How To Program (Early Objects)</em> — H. Deitel and P. Deitel</li>
      <li><em>Head First Java</em> — Kathy Sierra and Bert Bates</li>
    </ul>
  `,
  summary: {
    topic: 'Classes and Objects — Part 02: this Keyword, Constructor Chaining, Anonymous Objects, Garbage Collection & Statics',
    subTopics: [
      'JAVA — this Keyword',
      'JAVA — Constructor Chaining',
      'JAVA — Initializer (Initializer Block)',
      'JAVA — Anonymous Objects',
      'How Can an Object Be Unreferenced?',
      'JAVA — Garbage Collection',
      'JAVA — Working with Statics',
      'Static Fields',
      'Static Methods',
      'What Can Call What? — Static vs. Instance Calls',
      'Static Initializers',
      'Preventing Instantiating a Class',
      'Summary of Access Modifiers',
    ],
    definitions: [
      { term: 'this', meaning: 'A reference every object has to itself, used inside a constructor or method to refer to the current object instance.' },
      { term: 'Constructor Chaining', meaning: 'The ability to call one constructor from inside another — within the same class using this(), or to another class using super().' },
      { term: 'Initializer Block', meaning: 'A block of code placed outside any method or constructor that runs whenever an instance of the class is created, before any constructor runs.' },
      { term: 'Anonymous Object', meaning: 'An object created with no reference variable, usable only at the point of creation — e.g. new Calculation().fact(5);' },
      { term: 'Garbage Collection', meaning: 'The automatic process by which the Java runtime reclaims memory from unreferenced (unused) objects.' },
      { term: 'Static', meaning: 'A modifier describing a field or method that belongs to the class itself rather than to any particular instance.' },
      { term: 'Static Initializer', meaning: 'A block beginning with the word static that runs once, before any constructor, the first time a class is loaded or an instance is created, to initialize static fields.' },
      { term: 'Singleton Design', meaning: 'A design approach connected to preventing instantiation, in which a class allows only a single instance of itself to exist.' },
    ],
    keyPoints: [
      'The this keyword solves the "same-named local and instance variable" problem — this.a=a; assigns the parameter to the instance field.',
      'this can only be used to call another constructor in the very first statement of a constructor; constructors can be chained but not looped.',
      'Constructor chaining within the same class uses this(); chaining to another class uses super() (covered under Inheritance).',
      'Initializer blocks run before any constructor, in the order they appear, every time an instance is created.',
      'An anonymous object has no reference variable and can only be used once, at creation time — e.g. new Calculation().fact(5);.',
      'Objects become unreferenced (eligible for garbage collection) by nulling a reference, reassigning a reference elsewhere, or being created anonymously.',
      'Garbage collection is Java\'s automatic reclaiming of memory from unreferenced objects, making Java more memory-efficient without manual effort.',
      'Static fields and methods belong to the class itself, are accessed via the class name, and can be used without creating an instance.',
      'A static method cannot access non-static (instance) methods or fields directly, since it has no object instance to reference.',
      'Static initializers run before constructors, the first time a static member is accessed or an instance is created.',
      'A class can be prevented from being instantiated by giving it a single private constructor — relevant to utility classes like Math and to the Singleton design pattern.',
      'Order of initialization: superclass first, then static declarations/initializers in file order, then instance declarations/initializers in file order, then the constructor.',
      'Access modifier visibility: private members are visible only in the same class; default (package-private) adds same-package access; protected adds subclasses in other packages; public is visible everywhere.',
    ],
  },
},

{
  id: 4,
  title: 'Inheritance in Java',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Inheritance in Java</h1>
    <div class="meta-info">ICT2122 <span>•</span> 18 min read</div>

    <p>This lesson introduces <strong>Inheritance</strong>, one of the four main ideas in Object-Oriented Programming (OOP). You will learn what inheritance is, how to create subclasses in Java, the different types of inheritance, and important keywords like <code>extends</code>, <code>super</code>, <code>this</code>, and <code>final</code>.</p>

    <div class="divider"></div>

    <h2>Recap: What We Learned Before</h2>
    <p>Before starting this lesson, let's quickly remember what we studied earlier:</p>
    <ul>
      <li><strong>Java <code>this</code> keyword</strong> — used in methods and constructors</li>
      <li><strong>Constructor Chaining</strong> in Java</li>
      <li><strong>Anonymous objects</strong> in Java</li>
      <li><strong>Garbage Collection</strong> in Java</li>
      <li><strong>Static in Java</strong>
        <ul>
          <li>Static Fields</li>
          <li>Static Methods</li>
          <li>Static Initializers</li>
        </ul>
      </li>
      <li>Preventing a class from being instantiated</li>
    </ul>

    <div class="divider"></div>

    <h2>What You Will Learn Today</h2>
    <ul>
      <li>Inheritance (with examples and hands-on practice)</li>
      <li>Creating Subclasses</li>
      <li>Behavior of Java Access Modifiers</li>
      <li>Types of inheritance in Java</li>
      <li>Overriding Methods</li>
      <li>Hiding Methods</li>
      <li>Hiding Fields</li>
      <li>Usage of <code>this</code> and <code>super</code> in Subclasses</li>
      <li>Constructors in Subclasses</li>
      <li>Usage of the <code>final</code> keyword</li>
      <li>Casting Objects</li>
      <li>Determining an Object's Type</li>
    </ul>

    <div class="divider"></div>

    <h2>Object-Oriented Concepts</h2>
    <p><strong>Object-Oriented Programming (OOP)</strong> makes software development and maintenance easier by giving us some important concepts:</p>
    <ul>
      <li><strong>Object</strong></li>
      <li><strong>Class</strong></li>
      <li><strong>Inheritance</strong></li>
      <li><strong>Polymorphism</strong></li>
      <li><strong>Abstraction</strong></li>
      <li><strong>Encapsulation</strong></li>
    </ul>
    <p>This lesson focuses on <strong>Inheritance</strong>.</p>

    <div class="divider"></div>

    <h2>Classes and Objects</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is like a cookie cutter — it defines the shape of objects. <strong>Objects</strong> are like cookies — they are <strong>instances</strong> of the class.</p>
    </div>

    <div class="divider"></div>

    <h2>What is Inheritance?</h2>
    <p>Inheritance happens <strong>when one object (sub class) acquires all the properties and behaviors of another object (super class)</strong>. It lets you create classes that are derived from other classes.</p>
    <ul>
      <li>A class that is derived from another class is called a <strong>sub class</strong> (also called a derived class, extended class, or child class).</li>
      <li>The class from which the subclass is derived is called a <strong>super class</strong> (also called a base class or a parent class).</li>
    </ul>

    <pre><code>Super Class:   A
                |
Sub Class:     B</code></pre>

    <p>A derived class automatically takes on all the behavior and attributes of its base class:</p>
    <ul>
      <li>A subclass inherits all the members of its superclass — <strong>fields</strong>, <strong>methods</strong>, and <strong>nested classes</strong>.</li>
      <li>A derived class can add new features by defining its own methods and fields.</li>
      <li>A derived class can also change the behavior it got from the base class.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Inheritance is best used to build <strong>is-a</strong> type relationships. For example, a Car <em>is a</em> Vehicle.</p>
    </div>

    <p>The idea is to add what you want to the new class so it has more customized features than the original class. The subclass shows the behaviors of its superclass and can also add behaviors of its own. This is why inheritance is sometimes called <strong>specialization</strong>.</p>

    <ul>
      <li>The <strong>direct superclass</strong> is the superclass that the subclass explicitly inherits from.</li>
      <li>An <strong>indirect superclass</strong> is any class above the direct superclass in the class hierarchy.</li>
      <li>The Java class hierarchy begins with the class <code>Object</code> (found in the package <code>java.lang</code>). Every class in Java directly or indirectly extends (or "inherits from") <code>Object</code>.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Java supports only <strong>single inheritance</strong> for classes — each class is derived from exactly one direct superclass.</p>
    </div>

    <h3>Example: Animal Classification</h3>
    <p>Think of <strong>Animals</strong> as the super class. <strong>Amphibians</strong>, <strong>Reptiles</strong>, <strong>Mammals</strong>, and <strong>Birds</strong> are all sub classes of Animals — each one inherits the general features of an animal, while also adding its own special features.</p>

    <div class="divider"></div>

    <h2>Hands-On: Creating Subclasses</h2>
    <p>To create a subclass in Java, use the <code>extends</code> keyword:</p>

    <pre><code>public class ClassName extends BaseClass {
    // class body
}</code></pre>

    <p>Suppose you have a class named <code>Vehicle</code> with one method, <code>start()</code>, that prints "Starting….":</p>

    <pre><code>public class Vehicle {
    public void start(){
        System.out.println("Starting ….");
    }
}</code></pre>

    <p>There are many kinds of vehicles. If you want to specialize the <code>Vehicle</code> class into a <code>Car</code> class, you can use inheritance with the <code>extends</code> keyword:</p>

    <pre><code>public class Car extends Vehicle
{
    ……….
    ……….
    ……….
}</code></pre>

    <p><strong>Car</strong> is derived from the <strong>Vehicle</strong> class, so it will inherit the <code>start()</code> method from <code>Vehicle</code>.</p>

    <p>You can also add your own data members and methods in subclasses:</p>

    <pre><code>public class Car extends Vehicle {
    public void drive() {
        System.out.println("Driving ….");
    }
}</code></pre>

    <p>Now you can access both the <code>start()</code> method and the <code>drive()</code> method through an object of the <code>Car</code> class:</p>

    <pre><code>class VehicleDemo {
    public static void main(String[] args) {
        System.out.println("Creating a Car");
        Car c = new Car();
        c.start();
        c.drive();
    }
}</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Homework:</strong> Add a field <code>double speed = 40.0;</code> to the <code>Vehicle</code> class. Then try to access <code>speed</code> through a <code>Car</code> object using the dot (.) operator, changing the access modifier of <code>speed</code> to <code>public</code>, <code>private</code>, <code>protected</code>, and <code>default</code> inside the <code>VehicleDemo</code> class, and see what happens.</p>
    </div>

    <pre><code>public class Vehicle {
    double speed = 40.0 ;
    public void start(){
        System.out.println("Starting ….");
    }
}</code></pre>

    <div class="divider"></div>

    <h2>Behavior of Java Access Modifiers</h2>
    <p>This table shows where each access modifier can be used:</p>

    <pre><code>Access Modifier | Within Class | Within Package | Outside Package (Subclass Only) | Outside Package
----------------|--------------|-----------------|-----------------------------------|-----------------
Private         |     Yes      |       No        |                No                 |       No
Default         |     Yes      |       Yes       |                No                 |       No
Protected       |     Yes      |       Yes       |                Yes                |       No
Public          |     Yes      |       Yes       |                Yes                |       Yes</code></pre>

    <div class="divider"></div>

    <h2>Types of Inheritance in Java</h2>
    <p>Java supports several types of inheritance:</p>
    <ul>
      <li>Single Inheritance</li>
      <li>Multilevel Inheritance</li>
      <li>Hierarchical Inheritance</li>
      <li>Hybrid Inheritance</li>
      <li>Multiple Inheritance → <strong>Not supported</strong> in Java</li>
    </ul>

    <h3>Single Inheritance</h3>
    <p>One class extends one other class.</p>
    <pre><code>class A {
}
class B extends A {
}

   A
   |
   B
(Single Inheritance)</code></pre>

    <h3>Multilevel Inheritance</h3>
    <p>A class extends a class, which itself extends another class — forming a chain.</p>
    <pre><code>class A {
}
class B extends A {
}
class C extends B {
}

   A
   |
   B
   |
   C
(Multilevel Inheritance)</code></pre>

    <h3>Hierarchical Inheritance</h3>
    <p>Multiple classes extend the same single superclass.</p>
    <pre><code>class A {
}
class B extends A {
}
class C extends A {
}
class D extends A {
}

        A
      / | \\
     B  C  D
(Hierarchical Inheritance)</code></pre>

    <h3>Hybrid Inheritance</h3>
    <p>A mix of more than one type of inheritance, for example hierarchical combined with multilevel.</p>
    <pre><code>class A {
}
class B extends A {
}
class C extends A {
}
class D extends C {
}

        A
       / \\
      B   C
          |
          D
(Hybrid Inheritance)</code></pre>

    <h3>Multiple Inheritance</h3>
    <p>This means one class extends more than one class at the same time.</p>
    <pre><code>class A {
}
class B {
}
class C extends A, B {
}

   A       B
    \\     /
      C
(Multiple Inheritance — this is NOT allowed in Java)</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Java does <strong>not</strong> support multiple inheritance of classes (one class extending two or more classes at once). Writing <code>class C extends A, B</code> will not compile.</p>
    </div>

    <h3>Why Isn't Multiple Inheritance Allowed? (Diamond Problem)</h3>
    <p>The reason is called the <strong>Diamond Problem</strong>.</p>
    <p>Imagine <code>CDBurner</code> and <code>DVDBurner</code> both inherit from <code>DigitalRecorder</code>, and both override the <code>burn()</code> method. Both also inherit the same instance variable, <code>i</code>.</p>
    <p>Now imagine that <code>i</code> is used by both <code>CDBurner</code> and <code>DVDBurner</code>, but with different values. If a class called <code>ComboDrive</code> inherits from both of them, which value of <code>i</code> should it use? And when you call <code>burn()</code> on <code>ComboDrive</code>, which version of <code>burn()</code> should run — the one from <code>CDBurner</code> or the one from <code>DVDBurner</code>?</p>

    <pre><code>          DigitalRecorder
           (int i, burn())
          /                \\
    CDBurner            DVDBurner
     (burn())            (burn())
          \\                /
            ComboDrive</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>This confusion is called the <strong>Diamond Problem</strong>. Java avoids it by not allowing multiple inheritance of classes. If similar functionality is needed, <strong>Interfaces</strong> can be used instead.</p>
    </div>

    <div class="divider"></div>

    <h2>Overriding Methods (Instance Methods)</h2>
    <p>An instance method in a subclass <strong>overrides</strong> the superclass's method when it has:</p>
    <ul>
      <li>The same <strong>signature</strong> — the same name, plus the same number and type of parameters, and</li>
      <li>The same <strong>return type</strong></li>
      <li>as an instance method in the superclass.</li>
    </ul>
    <p>Use the <code>@Override</code> annotation to mark an overriding method.</p>

    <pre><code>public class Car extends Vehicle {
    @Override
    public void start(){
        System.out.println("Car is Starting ….");
    }

    public void drive() {
        System.out.println("Driving ….");
    }
}</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Return type:</strong> An overriding method can return a <strong>covariant return type</strong> (a subtype of the original return type).</p>
      <p><strong>Access modifier:</strong> An overriding method can allow <em>more</em> access than the overridden method, but not <em>less</em>. For example, a <code>protected</code> method in the superclass can be made <code>public</code> in the subclass ✓, but it cannot be made <code>private</code> in the subclass ✗.</p>
    </div>

    <div class="divider"></div>

    <h2>Hiding Methods (Static / Class Methods)</h2>
    <p>If a subclass defines a <strong>static method</strong> with the same signature as a static method in the superclass, the method in the subclass <strong>hides</strong> the one in the superclass — this is different from overriding.</p>

    <pre><code>// In Vehicle
public static void printTopSpeed(){
    System.out.println("Top speed of Vehicle is 50");
}

// In Car
public static void printTopSpeed(){
    System.out.println("Top speed of Car is 300");
}</code></pre>

    <p>Here is a summary of what happens when a subclass defines a method with the same signature as one in the superclass:</p>

    <pre><code>                          | Superclass Instance Method | Superclass Static Method
--------------------------|-----------------------------|---------------------------
Subclass Instance Method  | Overrides                   | Compile-time error
Subclass Static Method    | Compile-time error          | Hides</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Mixing an instance method with a static method of the same signature between a superclass and subclass causes a <strong>compile-time error</strong>. Only instance-instance (overriding) and static-static (hiding) combinations are allowed.</p>
    </div>

    <div class="divider"></div>

    <h2>Hiding Fields</h2>
    <p>Within a class, a field with the <strong>same name</strong> as a field in the superclass <strong>hides</strong> the superclass's field — even if their types are different.</p>
    <p>To access the superclass's hidden field, you must use the <code>super</code> keyword.</p>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>It is generally <strong>not recommended</strong> to hide fields, since it makes code harder to read.</p>
    </div>

    <div class="divider"></div>

    <h2>Usage of <code>this</code> and <code>super</code> in Subclasses</h2>

    <h3>The <code>this</code> keyword</h3>
    <ul>
      <li>Refers to the current object instance.</li>
      <li>Used to tell apart a local variable or parameter from a class field with the same name.</li>
    </ul>

    <h3>The <code>super</code> keyword</h3>
    <p>The <code>super</code> keyword is used when a subclass needs to access members of its superclass.</p>
    <ul>
      <li><code>super.fieldName</code> — refers to the immediate parent class's instance variable.</li>
      <li><code>super.methodName()</code> — invokes the immediate parent class's method.</li>
      <li><code>super()</code> — invokes the immediate parent class's constructor.</li>
    </ul>

    <p><strong>Referring to a parent class method:</strong></p>
    <pre><code>// In Car
@Override
public void start(){
    System.out.println("Car is Starting ….");
    super.start();
}</code></pre>
    <p>Use <code>super.methodName()</code> inside an overriding (subclass) method to also call the overridden (superclass) method.</p>

    <p><strong>Referring to a parent class instance variable:</strong></p>
    <pre><code>// In Vehicle
public String color = "White";

// In Car
public void printColor(){
    color = "Red";
    System.out.println("Car color : " + color);      // this.color
    System.out.println("Vehicle color : " + super.color);
}</code></pre>

    <div class="divider"></div>

    <h2>Constructors in Subclasses</h2>
    <p>Creating a subclass object begins a <strong>chain of constructor calls</strong>:</p>
    <ul>
      <li>Before doing its own work, the subclass constructor either explicitly uses <code>super</code> to call a constructor in its direct superclass, or implicitly calls the superclass's default (no-argument) constructor.</li>
      <li>If the superclass is itself a subclass, its constructor invokes the constructor of the next class up the hierarchy, and so on.</li>
      <li>The last constructor called in the chain is always the <code>Object</code> class's constructor.</li>
      <li>The original subclass constructor's body finishes executing <strong>last</strong>.</li>
      <li>Each superclass's constructor works on the superclass instance variables that the subclass object inherits.</li>
    </ul>

    <p>Suppose class <code>A</code> has a constructor with no parameters:</p>
    <pre><code>class A {
    A() {
        System.out.println("Inside A's Constructor");
    }
}</code></pre>

    <p>Now derive a subclass <code>B</code> from <code>A</code>:</p>
    <pre><code>class B extends A {
}</code></pre>

    <p>When you create an object of class <code>B</code>, the constructor in class <code>A</code> is called automatically:</p>
    <pre><code>public class App {
    public static void main(String[] args) {
        B obj = new B();
    }
}</code></pre>

    <p>Output:</p>
    <pre><code>Inside A's Constructor</code></pre>

    <p>Now suppose you add a constructor to class <code>B</code> that also takes no parameters:</p>
    <pre><code>class B extends A {
    B() {
        System.out.println("Inside B's Constructor");
    }
}</code></pre>

    <p>When you create an object of class <code>B</code>, the constructors from <strong>both</strong> <code>A</code> and <code>B</code> run:</p>
    <pre><code>Output:
Inside A's Constructor
Inside B's Constructor</code></pre>

    <p>Now suppose you change <code>B</code>'s constructor so it takes one parameter:</p>
    <pre><code>class B extends A {
    B(String s) {
        System.out.println("Inside B's Parameterized Constructor");
        System.out.println(s);
    }
}</code></pre>

    <pre><code>class App {
    public static void main(String arg[]) {
        B obj = new B("Hello");
    }
}</code></pre>
    <p>What do you think the output will be? Try it out and check your answer.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Things to remember about <code>super()</code>:</p>
      <ul>
        <li>The <code>super()</code> call must be the <strong>very first statement</strong> in the constructor.</li>
        <li>If you don't explicitly call <code>super</code>, the compiler automatically inserts a call to the base class's default constructor. In that case, the base class <strong>must have</strong> a default constructor — otherwise the compiler refuses to compile the program.</li>
        <li>If the superclass is itself a subclass, its constructor is called the same way. This continues all the way up the hierarchy until reaching the <code>Object</code> class, which has no superclass.</li>
      </ul>
    </div>

    <p><strong>Homework example:</strong></p>
    <pre><code>class Box {
    double width;
    double height;
    double depth;

    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }
}</code></pre>

    <p>Without using the <code>super</code> keyword:</p>
    <pre><code>public class BoxWeight extends Box {
    double weight;

    BoxWeight(double w, double h, double d, double m) {
        width = w;
        height = h;
        depth = d;
        weight = m;
    }
}</code></pre>

    <p>The same code written using the <code>super</code> keyword:</p>
    <pre><code>public class BoxWeight extends Box {
    double weight;

    BoxWeight(double w, double h, double d, double m) {
        super(w, h, d);
        weight = m;
    }
}</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Using <code>super(w, h, d)</code> is cleaner — it lets the parent class handle its own fields instead of repeating that logic in the subclass.</p>
    </div>

    <div class="divider"></div>

    <h2>Usage of the <code>final</code> Keyword</h2>
    <ul>
      <li><strong><code>final</code> with a variable</strong> — creates a constant whose value cannot be changed after it has been set.</li>
      <li><strong><code>final</code> with a method</strong> — a final method cannot be overridden by a subclass.
        <pre><code>public final void eat() { }</code></pre>
      </li>
      <li><strong><code>final</code> with a class</strong> — a final class cannot be used as a base class (it cannot be extended).
        <pre><code>public final class MyConstants { }</code></pre>
        In a final class, all of its methods are automatically considered final as well.
      </li>
    </ul>

    <div class="divider"></div>

    <h2>Casting Objects</h2>
    <p><strong>Casting</strong> means taking an object of one particular type and treating it as another object type. There are two ways to do this:</p>
    <ul>
      <li><strong>Implicit casting</strong> — known as <strong>up-casting</strong> (subclass to super class).</li>
      <li><strong>Explicit casting</strong> — known as <strong>down-casting</strong> (super class to subclass).</li>
    </ul>

    <h3>Implicit Casting (Up-Casting)</h3>
    <p>This shows the use of an object of one type in place of another type, among the objects allowed by inheritance:</p>
    <pre><code>Object obj = new Car();   // Object is an indirect super class of Car
Vehicle v = new Car();    // Vehicle is the direct super class of Car</code></pre>

    <h3>Explicit Casting (Down-Casting)</h3>
    <p>Java does not allow you to assign a super class object to a subclass variable implicitly. To do this, you need <strong>explicit casting</strong>:</p>
    <pre><code>Car myCar = obj;         // compile time error
Car myCar = (Car) obj;   // explicit casting - correct</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Down-casting requires explicit conversion using <code>(TypeName)</code>. Forgetting this causes a compile-time error.</p>
    </div>

    <div class="divider"></div>

    <h2>Determining an Object's Type</h2>
    <p>Use the <code>instanceof</code> operator to check an object's type:</p>

    <pre><code>Vehicle v = new Vehicle();
Car c = new Car();
Vehicle v2 = new Car();

c instanceof Car        // true
c instanceof Vehicle    // true
c instanceof Object     // true

v instanceof Car        // false</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Even though the variable <code>v2</code> is declared as type <code>Vehicle</code>, the actual object assigned to it is a <code>Car</code>. So <code>v2 instanceof Car</code> would be <strong>true</strong> — the declared type and the actual object type can be different because of inheritance.</p>
    </div>

    <div class="divider"></div>

    <h2>Lesson Summary</h2>
    <p>In this lesson, we covered:</p>
    <ul>
      <li>Inheritance — with examples and hands-on practice</li>
      <li>Creating Sub Classes</li>
      <li>Behavior of Java Access Modifiers</li>
      <li>Types of inheritance in Java (Single, Multilevel, Hierarchical, Hybrid, Multiple)</li>
      <li>Overriding Methods</li>
      <li>Hiding Methods</li>
      <li>Hiding Fields</li>
      <li>Usage of <code>this</code> and <code>super</code> in Subclasses</li>
      <li>Constructors in Subclasses</li>
      <li>Usage of the <code>final</code> keyword</li>
      <li>Casting Objects</li>
      <li>Determining an Object's Type</li>
    </ul>

    <div class="divider"></div>

    <h2>References</h2>
    <ul>
      <li><code>https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html</code></li>
      <li><code>https://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html</code></li>
      <li><strong>How To Program (Early Objects)</strong> — by H. Deitel and P. Deitel</li>
      <li><strong>Head First Java</strong> — by Kathy Sierra and Bert Bates</li>
    </ul>
  `,
  summary: {
    topic: 'Inheritance in Java',
    subTopics: [
      'Object-Oriented Concepts',
      'Classes and Objects',
      'What is Inheritance?',
      'Example: Animal Classification',
      'Creating Subclasses',
      'Behavior of Java Access Modifiers',
      'Types of Inheritance in Java',
      'Single Inheritance',
      'Multilevel Inheritance',
      'Hierarchical Inheritance',
      'Hybrid Inheritance',
      'Multiple Inheritance and the Diamond Problem',
      'Overriding Methods (Instance Methods)',
      'Hiding Methods (Static Methods)',
      'Hiding Fields',
      'Usage of this and super in Subclasses',
      'Constructors in Subclasses',
      'Usage of the final Keyword',
      'Casting Objects',
      "Determining an Object's Type (instanceof)",
    ],
    definitions: [
      { term: 'Class', meaning: 'A blueprint (like a cookie cutter) that defines the shape and structure of objects.' },
      { term: 'Object', meaning: 'An instance of a class, created from that class blueprint.' },
      { term: 'Inheritance', meaning: 'When one class (subclass) acquires the properties and behaviors of another class (superclass).' },
      { term: 'Subclass', meaning: 'A class derived from another class; also called a derived class, extended class, or child class.' },
      { term: 'Superclass', meaning: 'The class from which a subclass is derived; also called a base class or parent class.' },
      { term: 'Direct superclass', meaning: 'The superclass a subclass explicitly inherits from using extends.' },
      { term: 'Indirect superclass', meaning: 'Any class above the direct superclass in the class hierarchy.' },
      { term: 'Single inheritance', meaning: 'A class extends exactly one direct superclass; the only kind of class inheritance Java supports.' },
      { term: 'Multilevel inheritance', meaning: 'A chain of inheritance where a class extends a subclass, which itself extends another class.' },
      { term: 'Hierarchical inheritance', meaning: 'Multiple subclasses extend the same single superclass.' },
      { term: 'Hybrid inheritance', meaning: 'A combination of more than one type of inheritance, such as hierarchical and multilevel together.' },
      { term: 'Multiple inheritance', meaning: 'A class extending more than one class at the same time; not supported by Java for classes.' },
      { term: 'Diamond problem', meaning: 'The ambiguity that occurs when a class inherits the same member through two different paths, making it unclear which version to use; the reason Java disallows multiple inheritance of classes.' },
      { term: 'Overriding', meaning: 'Defining an instance method in a subclass with the same signature and return type as one in the superclass, replacing its behavior.' },
      { term: '@Override annotation', meaning: 'An annotation used to mark a method that overrides a superclass method.' },
      { term: 'Covariant return type', meaning: 'A return type in an overriding method that is a subtype of the return type in the overridden method.' },
      { term: 'Hiding', meaning: "When a subclass defines a static method or field with the same name as one in the superclass, hiding the superclass's version instead of overriding it." },
      { term: 'this keyword', meaning: 'Refers to the current object instance; used to distinguish a field from a local variable or parameter with the same name.' },
      { term: 'super keyword', meaning: 'Used by a subclass to access the fields, methods, or constructor of its immediate superclass.' },
      { term: 'final keyword', meaning: 'Used to create constants, prevent a method from being overridden, or prevent a class from being extended.' },
      { term: 'Casting', meaning: 'Treating an object of one type as another type, allowed only between related classes.' },
      { term: 'Up-casting (implicit casting)', meaning: 'Treating a subclass object as its superclass type; done automatically by Java.' },
      { term: 'Down-casting (explicit casting)', meaning: 'Treating a superclass-typed object as its subclass type; must be written explicitly using (TypeName).' },
      { term: 'instanceof operator', meaning: 'Checks whether an object is an instance of a particular class or its subclass.' },
    ],
    keyPoints: [
      'Inheritance lets a subclass acquire fields, methods, and nested classes from its superclass.',
      'Use the extends keyword to create a subclass: class Sub extends Super.',
      'Java supports only single inheritance for classes — a class can extend just one direct superclass.',
      'Every class in Java directly or indirectly inherits from the Object class.',
      'Java does NOT support multiple inheritance of classes because of the Diamond Problem; interfaces can be used instead.',
      'The types of inheritance are Single, Multilevel, Hierarchical, Hybrid, and Multiple (unsupported in Java).',
      'Overriding requires the same method signature and the same (or a covariant) return type as the superclass method; mark it with @Override.',
      "An overriding method's access modifier can be more open but never more restrictive than the superclass method's.",
      'Static methods with the same signature in subclass and superclass HIDE each other; they do not override.',
      'Mixing an instance method in one class with a static method of the same signature in the related class causes a compile-time error.',
      "Fields with the same name in subclass and superclass are hidden, not overridden; access the superclass field using super.fieldName.",
      "super.methodName() calls the immediate parent class's method; super() calls the immediate parent class's constructor.",
      'The super() call, if used, must be the first statement in a constructor.',
      "If a subclass constructor doesn't explicitly call super(), Java automatically calls the superclass's no-argument constructor.",
      'If the superclass has no default constructor and the subclass does not call a matching super(...), the code will not compile.',
      'final variables cannot be changed once initialized; final methods cannot be overridden; final classes cannot be extended.',
      'Up-casting (subclass to superclass) happens automatically; down-casting (superclass to subclass) needs explicit casting, like (Car) obj.',
      "Use the instanceof operator to check an object's actual type at runtime.",
    ],
  },
},

{
  id: 5,
  title: 'Polymorphism is Java',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Polymorphism is Java</h1>
    <div class="meta-info">ICT2122 <span>•</span> 22 min read</div>

    <h2>Quick Recap</h2>
    <p>Before starting this lesson, let's quickly recall what we learned in <strong>Part 01</strong> of OOP Concepts.</p>
    <ul>
      <li><strong>Inheritance</strong> — examples and hands-on practice</li>
      <li>Creating <strong>Sub Classes</strong></li>
      <li>Behavior of Java <strong>Access Modifiers</strong></li>
      <li>Types of inheritance in Java: <strong>Single</strong>, <strong>Multilevel</strong>, <strong>Hierarchical</strong>, <strong>Hybrid</strong>, and <strong>Multiple</strong> Inheritance</li>
      <li><strong>Overriding Methods</strong></li>
      <li><strong>Hiding Methods</strong></li>
      <li><strong>Hiding Fields</strong></li>
      <li>Usage of <code>this</code> and <code>super</code> in Subclasses</li>
      <li><strong>Constructors</strong> in Subclasses</li>
      <li>Usage of the <code>final</code> keyword</li>
      <li><strong>Casting Objects</strong></li>
      <li>Determining an Object's Type</li>
    </ul>

    <h2>What We Will Learn Today</h2>
    <ul>
      <li>Polymorphism</li>
      <li>Method Overloading</li>
      <li>Method Overriding</li>
      <li>Dynamic Polymorphism</li>
      <li>Static Polymorphism</li>
    </ul>

    <div class="divider"></div>

    <h2>Object Oriented Concepts</h2>
    <p>Object Oriented Programming (OOP) makes software development and maintenance simpler. It does this by providing some important concepts:</p>
    <ul>
      <li><strong>Object</strong></li>
      <li><strong>Class</strong></li>
      <li><strong>Inheritance</strong></li>
      <li><strong>Polymorphism</strong> — our focus for this lesson</li>
      <li><strong>Abstraction</strong></li>
      <li><strong>Encapsulation</strong></li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is like a cookie cutter — it defines the shape of objects. <strong>Objects</strong> are like cookies — they are instances created from that class.</p>
    </div>

    <div class="divider"></div>

    <h2>Inheritance — A Quick Reminder</h2>
    <p>Inheritance is a mechanism that allows a <strong>subclass</strong> to inherit the properties and behaviors of a <strong>superclass</strong>.</p>
    <ul>
      <li>The subclass can access and use all the methods and variables of the superclass, as well as add its own methods and variables.</li>
      <li>The subclass can also <strong>override</strong> methods from the superclass to provide its own implementation.</li>
      <li>Inheritance enables code reuse and makes it easier to manage and maintain complex systems by reducing duplication and providing a hierarchical structure for classes.</li>
      <li>It is a key feature of object-oriented programming and is widely used in Java.</li>
    </ul>
    <pre><code>Super Class:   A
                 ↑
Sub Class:     B      (B extends A)
</code></pre>

    <div class="divider"></div>

    <h2>What is Polymorphism?</h2>
    <p><strong>Poly-Morphism</strong> means the ability to have multiple forms (shapes) of the same thing.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>In Java, <strong>Polymorphism</strong> is the capability of an action or method to do different things based on the object that it is acting upon.</p>
    </div>
    <p>Think about a mobile <strong>Phone</strong>. The same device can act:</p>
    <ul>
      <li>As a Phone</li>
      <li>As a Camera</li>
      <li>As an MP3 Player</li>
    </ul>
    <p>The same object shows different behavior depending on how it is used. This everyday idea is the same one behind polymorphism in programming.</p>

    <div class="divider"></div>

    <h2>Types of Polymorphism in Java</h2>
    <p>In Java, polymorphism is achieved through <strong>method overriding</strong> and <strong>method overloading</strong>.</p>
    <pre><code>                    Polymorphism
                          |
          --------------------------------
          |                              |
   Compile Time                    Run-Time
   Polymorphism                   Polymorphism
 (Static Polymorphism,         (Dynamic Polymorphism,
    Early Binding)                Late Binding)
          |                              |
  Method Overloading              Method Overriding
</code></pre>
    <ul>
      <li><strong>Method Overriding</strong> — a subclass provides a different implementation of a method already defined in its superclass. Objects of different subclasses respond differently to the same method call. Resolved during <strong>Run Time</strong>.</li>
      <li><strong>Method Overloading</strong> — multiple methods with the same name exist in the same class, as long as they have different parameter lists. This gives more concise and readable code. Resolved during <strong>Compile Time</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Method Overloading</h2>
    <p><strong>Method overloading</strong> in Java is a technique for creating <strong>multiple methods with the same name within the same class</strong>, as long as they have <strong>different parameter lists</strong>.</p>
    <ul>
      <li>This allows the same method name to be used in different contexts, giving more concise and readable code.</li>
      <li>If we only need to perform one operation, using the same method name for all versions increases the readability of the program.</li>
      <li>It is similar to the concept of <strong>Constructor Overloading</strong> in Java.</li>
    </ul>

    <h3>Three Ways to Overload a Method</h3>
    <p>There are three ways to overload a method in Java:</p>
    <ol>
      <li><strong>By changing the number of arguments</strong> (different number of parameters)</li>
      <li><strong>By changing the data types of arguments</strong> (same number of parameters)</li>
      <li><strong>By changing the sequence (order) of data types of arguments</strong> (same number of parameters)</li>
    </ol>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In Java, method overloading is <strong>not possible by changing only the return type</strong> of the method.</p>
    </div>

    <h3>Example 1 — Changing the Number of Arguments</h3>
    <pre><code>class Calculation {
    void sum(int a, int b) {
        System.out.println(a+b);
    }

    void sum(int a, int b, int c) {
        System.out.println(a+b+c);
    }

    public static void main(String args[]) {
        Calculation obj = new Calculation();
        obj.sum(10, 10, 10);
        obj.sum(20, 20);
    }
}
</code></pre>

    <h3>Example 2 — Changing the Data Type of Arguments</h3>
    <pre><code>class Calculation {
    void sum(int a, int b) {
        System.out.println(a+b);
    }

    void sum(double a, double b) {
        System.out.println(a+b);
    }

    public static void main(String[] args) {
        Calculation obj = new Calculation();
        obj.sum(10.5, 10.5);
        obj.sum(20, 20);
    }
}
</code></pre>

    <h3>Example 3 — Changing the Sequence of Data Types</h3>
    <pre><code>class Calculation {
    void sum(double a, int b) {
        System.out.println(a+b);
    }

    void sum(int a, double b) {
        System.out.println(a+b);
    }

    public static void main(String[] args) {
        Calculation obj = new Calculation();
        obj.sum(10.5, 2);
        obj.sum(1, 20.5);
    }
}
</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Method overloading in Java is based on the <strong>number and types of parameters</strong>, not just the method name.</p>
      <p>Methods with the same name but <strong>different return types only</strong> are <strong>not</strong> considered overloaded methods. Methods with the same parameters but different return types are also not overloaded, since this would cause ambiguity in the code.</p>
    </div>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Homework:</strong> Find out what <strong>Type Promotion</strong> is in Java, and think about how it relates to method overloading.</p>
    </div>

    <div class="divider"></div>

    <h2>Method Overriding</h2>
    <p>An instance method in a subclass <strong>overrides</strong> the superclass's method when it has:</p>
    <ul>
      <li>The <strong>same signature</strong> (name, plus the number and type of its parameters), and</li>
      <li>The <strong>same return type</strong>, as an instance method in the superclass.</li>
    </ul>
    <p>Use the <code>@Override</code> annotation when overriding a method.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>For more detail and examples on method overriding, refer to slides 26–30 in "Lesson 03 – OOP Concepts – Part 01".</p>
    </div>

    <h3>Example — Method Overriding</h3>
    <pre><code>class Human {
    public void eat() {
        System.out.println("Human is eating");
    }
}

class Boy extends Human {
    public void eat() {
        System.out.println("Boy is eating");
    }

    public static void main(String args[]) {
        Boy nimal = new Boy();
        nimal.eat();
    }
}
</code></pre>

    <p>An easy way to remember the difference between the two:</p>
    <ul>
      <li><strong>Overloading</strong> is like an archer who can shoot arrows in several different directions using the same bow — many versions of the same method name, each doing something slightly different.</li>
      <li><strong>Overriding</strong> is like fitting a new arrowhead onto the same bow before firing — the subclass replaces the superclass's implementation with its own.</li>
    </ul>

    <div class="divider"></div>

    <h2>Dynamic Binding</h2>
    <p>How do Dynamic Binding and Static Binding relate to inheritance?</p>
    <p>In Java, any <strong>derived class object</strong> can be assigned to a <strong>base class variable</strong>. For example, consider a <code>Vehicle</code> superclass and a <code>Car</code> subclass:</p>
    <pre><code>Vehicle v = new Car();
</code></pre>
    <p>Here, the variable on the left (<code>v</code>) is of type <code>Vehicle</code>, but the object on the right is of type <code>Car</code>. As long as the variable's type is a base class of <code>Car</code>, this assignment is allowed.</p>

    <p>Being able to do assignments like this sets up what is called <strong>"polymorphic behavior"</strong>.</p>
    <ul>
      <li>If <code>Vehicle</code> has a method <code>start()</code> that is also defined in <code>Car</code>, then calling <code>v.start()</code> will run the version of <code>start()</code> defined in <strong>Car</strong>.</li>
      <li>Even though the variable type is <code>Vehicle</code>, the version of <code>start()</code> in the <code>Vehicle</code> class will <strong>not</strong> be executed.</li>
      <li>The <strong>type of the object</strong> assigned to the variable determines which method is called.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>When the compiler scans <code>v.start();</code>, it knows <code>v</code> is of type <code>Vehicle</code>, but it also knows <code>v</code> could reference any class derived from <code>Vehicle</code>. So the compiler cannot know which version of <code>start()</code> is being called just by reading the code.</p>
      <p>It is only when <code>Vehicle v = new Car();</code> actually runs that the version of <code>start()</code> is determined. Since this assignment happens at <strong>runtime</strong>, the correct version of <code>start()</code> is only known at runtime.</p>
    </div>

    <p>This is known as <strong>"dynamic binding"</strong> or <strong>"late binding"</strong>.</p>
    <ul>
      <li>It is not until the program performs some operation at runtime that the correct version of a method can be determined. In Java, most uses of inheritance involve dynamic binding.</li>
      <li><strong>Dynamic binding</strong> is deciding at run time which method to invoke.</li>
      <li>With dynamic binding, the method that gets invoked is determined by the <strong>class of the object</strong>, not the type of the reference variable.</li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In Java, instance methods (with a few exceptions) are dynamically bound. The exceptions are: <strong>private methods</strong>, <code>&lt;init&gt;</code> methods (constructors), <strong>super</strong> invocations, and <strong>final methods</strong>.</p>
    </div>

    <h3>Hands-On Practice</h3>
    <p>Add the following code to your <code>Demo</code> class and test it:</p>
    <pre><code>Car c = new Car();
c.start();

Vehicle v = new Car();
v.start();
</code></pre>

    <div class="divider"></div>

    <h2>Static Binding</h2>
    <p><strong>"Static binding"</strong> or <strong>"early binding"</strong> occurs when the compiler can readily determine the correct version of something during <strong>compile time</strong> — that is, before the program is executed.</p>
    <ul>
      <li>All instance method calls are always resolved at <strong>runtime</strong>.</li>
      <li>All <strong>static method calls</strong> are resolved at <strong>compile time</strong> itself, so static method calls use static binding.</li>
      <li>In Java, <strong>member variables have static binding</strong>, because Java does not allow dynamic binding with member variables.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>If both the <code>Vehicle</code> class and the <code>Car</code> class have a member variable with the same name, it is the <strong>base class version</strong> that is used, because the value of a member variable is determined at <strong>compile time</strong>, not at runtime.</p>
    </div>

    <h3>Hands-On Practice</h3>
    <p>Add a <code>String color</code> field to both <code>Vehicle</code> (set it to <code>"white"</code>) and <code>Car</code> (set it to <code>"Red"</code>). Then check the following in your <code>Demo</code> class:</p>
    <pre><code>Car c = new Car();
c.color        // ??

Vehicle v = new Car();
v.color        // ??
</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Try running both lines yourself and compare the results with what you learned about dynamic vs static binding above.</p>
    </div>

    <div class="divider"></div>

    <h2>Summary</h2>
    <p><strong>Polymorphism</strong> is a fundamental concept in object-oriented programming that allows objects of different classes to respond to the same method call in different ways.</p>
    <p>There are two types of polymorphism in Java:</p>
    <ul>
      <li><strong>Static polymorphism</strong> (method overloading)</li>
      <li><strong>Dynamic polymorphism</strong> (method overriding)</li>
    </ul>

    <h3>Method Overloading</h3>
    <ul>
      <li>Is a form of <strong>static polymorphism</strong>.</li>
      <li>Allows multiple methods with the same name to exist in a single class, as long as they have different parameter lists.</li>
      <li>The method to be called is determined at <strong>compile time</strong>, based on the number and type of arguments passed.</li>
    </ul>

    <h3>Method Overriding</h3>
    <ul>
      <li>Is a form of <strong>dynamic polymorphism</strong>.</li>
      <li>Allows a subclass to provide its own implementation of a method that is already defined in its superclass.</li>
      <li>The method to be called is determined at <strong>runtime</strong>, based on the actual type of the object, rather than the reference type.</li>
    </ul>

    <h3>Dynamic Binding</h3>
    <ul>
      <li>Allows objects of different subclasses to respond differently to the same method call, based on their own implementation.</li>
      <li>Makes the program more flexible and dynamic, since the behavior of objects can change based on their actual type, rather than being limited by the reference type.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The <code>@Override</code> annotation is used to indicate that a method in a subclass is intended to override a method in the superclass. This helps prevent mistakes and improves code readability.</p>
    </div>

    <p>Polymorphism is a powerful tool for creating more flexible and reusable code. By using polymorphism, it is possible to write code that handles objects of different types in a generic way, without having to know the exact type of the object.</p>

    <div class="divider"></div>

    <h2>References</h2>
    <ul>
      <li>Oracle Java Tutorials — Polymorphism (docs.oracle.com)</li>
      <li><strong>How To Program (Early Objects)</strong> — by H. Deitel and P. Deitel</li>
      <li><strong>Head First Java</strong> — by Kathy Sierra and Bert Bates</li>
    </ul>
  `,
  summary: {
    topic: 'Polymorphism in Java: Method Overloading and Method Overriding',
    subTopics: [
      'Recap of Inheritance Concepts',
      'Object Oriented Concepts Overview',
      'What is Polymorphism?',
      'Types of Polymorphism in Java (Static vs Dynamic)',
      'Method Overloading',
      'Ways to Overload a Method',
      'Method Overriding',
      'Dynamic Binding (Late Binding)',
      'Static Binding (Early Binding)',
      'Summary of Polymorphism Concepts',
    ],
    definitions: [
      { term: 'Polymorphism', meaning: 'The ability of an action or method to do different things based on the object it is acting upon. The word means having multiple forms of the same thing.' },
      { term: 'Method Overloading', meaning: 'A technique in Java for creating multiple methods with the same name in the same class, as long as they have different parameter lists.' },
      { term: 'Method Overriding', meaning: 'When an instance method in a subclass has the same signature and return type as a method in its superclass, replacing the superclass version.' },
      { term: 'Static Polymorphism (Compile Time Polymorphism)', meaning: 'Polymorphism where the method to call is decided at compile time. Achieved in Java through method overloading, also called early binding.' },
      { term: 'Dynamic Polymorphism (Run-Time Polymorphism)', meaning: 'Polymorphism where the method to call is decided at runtime, based on the actual object type. Achieved in Java through method overriding, also called late binding.' },
      { term: 'Dynamic Binding (Late Binding)', meaning: 'Deciding at runtime which method to invoke, based on the class of the object rather than the reference variable type.' },
      { term: 'Static Binding (Early Binding)', meaning: 'Deciding at compile time which version of something to use, before the program is executed. Applies to static methods and member variables in Java.' },
      { term: '@Override Annotation', meaning: 'An annotation used to indicate that a method in a subclass is intended to override a method in the superclass, helping prevent mistakes.' },
      { term: 'Class', meaning: 'Like a cookie cutter, a class defines the shape of objects that can be created from it.' },
      { term: 'Object', meaning: 'Like a cookie made from a cookie cutter, an object is an instance created from a class.' },
    ],
    keyPoints: [
      'Polymorphism means an object or method can take multiple forms and behave differently depending on the object it acts upon.',
      'Java achieves polymorphism through method overloading (static) and method overriding (dynamic).',
      'Method overloading is resolved at compile time; method overriding is resolved at runtime.',
      'A method can be overloaded by changing the number of arguments, the data types of arguments, or the sequence of data types, but never by changing only the return type.',
      'Overloaded methods must differ in their parameter list; having the same parameters with only a different return type causes ambiguity and is not allowed.',
      'Method overriding requires the same method signature (name and parameters) and the same return type as the superclass method.',
      'Always use the @Override annotation when overriding a method to catch mistakes early.',
      'A superclass reference variable can hold a subclass object, for example Vehicle v = new Car(); this is the basis of polymorphic behavior.',
      'With dynamic binding, the actual object type, not the reference variable type, determines which overridden method runs at runtime.',
      'Member variables and static methods use static binding, so they are resolved at compile time based on the reference type, not the object type.',
      'Instance methods are dynamically bound in Java, except for private methods, constructors, super invocations, and final methods.',
    ],
  },
},

{
  id: 6,
  title: 'Abstraction in Java',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Abstraction in Java</h1>
    <div class="meta-info">ICT2122 <span>•</span> 14 min read</div>

    <h2>Quick Recap</h2>
    <p>Before starting this lesson, let's quickly recall what we learned in <strong>Part 02</strong> of OOP Concepts.</p>
    <ul>
      <li><strong>Polymorphism</strong></li>
      <li><strong>Method Overloading</strong></li>
      <li><strong>Method Overriding</strong></li>
      <li><strong>Dynamic Polymorphism</strong></li>
      <li><strong>Static Polymorphism</strong></li>
    </ul>

    <h2>What We Will Learn Today</h2>
    <ul>
      <li>Abstraction</li>
      <li>Abstraction in Java</li>
      <li>Abstract Methods</li>
      <li>Abstract Classes</li>
      <li>Hands-On</li>
    </ul>

    <div class="divider"></div>

    <h2>Object Oriented Concepts</h2>
    <p>Object Oriented Programming (OOP) makes software development and maintenance simpler. It does this by providing some important concepts:</p>
    <ul>
      <li><strong>Object</strong></li>
      <li><strong>Class</strong></li>
      <li><strong>Inheritance</strong></li>
      <li><strong>Polymorphism</strong></li>
      <li><strong>Abstraction</strong> — our focus for this lesson</li>
      <li><strong>Encapsulation</strong></li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is like a cookie cutter — it defines the shape of objects. <strong>Objects</strong> are like cookies — they are instances created from that class.</p>
    </div>

    <div class="divider"></div>

    <h2>Quick Reminders — Inheritance and Polymorphism</h2>
    <p>Inheritance is a mechanism that allows a <strong>subclass</strong> to inherit the properties and behaviors of a <strong>superclass</strong>. It enables code reuse and makes it easier to manage complex systems by reducing duplication and providing a hierarchical structure for classes. It is a key feature of object-oriented programming and is widely used in Java.</p>
    <p><strong>Poly-Morphism</strong> means the ability to have multiple forms (shapes) of the same thing. Polymorphism is the capability of an action or method to do different things based on the object that it is acting upon.</p>

    <div class="divider"></div>

    <h2>What is Abstraction?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>"We (humans) have developed an exceptionally powerful technique for dealing with complexity. We abstract from it. Unable to master the entirety of a complex object, we choose to ignore its inessential details, dealing instead with the generalized, idealized model of the object." (Ref: Wulf)</p>
    </div>
    <p>In simple words, <strong>abstraction</strong> means extracting only the necessary details, and hiding away the rest.</p>
    <p>Think about a <strong>cat</strong>:</p>
    <ul>
      <li>A <strong>nonmedical person</strong> thinks of a cat in terms of things like purring, being petted, and being fed.</li>
      <li>A <strong>medical person</strong> (such as a veterinary surgeon) thinks of the same cat in terms of its heart, lungs, kidneys, stomach, and other internal organs.</li>
    </ul>
    <p>Both people are looking at the <strong>same object</strong> (the cat), but each one models it differently, keeping only the details that matter for their own purpose.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A <strong>class</strong> represents a real-world entity. The class contains only the <strong>essential details matching the problem domain</strong> — it leaves out everything that is not relevant to the task at hand.</p>
    </div>

    <div class="divider"></div>

    <h2>Abstraction in Java</h2>
    <p><strong>Abstraction</strong> in Java is a mechanism that helps to reduce the complexity of a system by <strong>hiding its implementation details from the user</strong>.</p>
    <p>This means that the user only sees what is necessary to perform a certain task, and does not need to know about the underlying implementation.</p>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Example:</strong> When sending an SMS, you just type the text and send the message. You don't know (and don't need to know) the internal processing that happens behind the scenes to deliver that message.</p>
    </div>
    <p>Abstraction can be achieved in Java using two mechanisms:</p>
    <ul>
      <li><strong>Abstract class</strong> — provides 0% to 100% abstraction</li>
      <li><strong>Interface</strong> — provides 100% abstraction</li>
    </ul>

    <div class="divider"></div>

    <h2>Abstract Method</h2>
    <p>A method that is <strong>declared as abstract</strong> and <strong>does not have an implementation</strong> is known as an <strong>abstract method</strong>.</p>
    <pre><code>abstract void printStatus();
</code></pre>
    <p>Note the following about an abstract method:</p>
    <ul>
      <li>It has <strong>no body</strong>.</li>
      <li>It must be marked with the <code>abstract</code> keyword.</li>
    </ul>

    <div class="divider"></div>

    <h2>Abstract Class</h2>
    <p>Use the <code>abstract</code> keyword to declare a class abstract. The keyword <code>abstract</code> appears in the class declaration somewhere before the <code>class</code> keyword.</p>
    <pre><code>public abstract class Employee
</code></pre>
    <ul>
      <li>An abstract class is a class that <strong>cannot be instantiated</strong>, but <strong>can be extended</strong> by other classes.</li>
      <li>An abstract class can have <strong>both abstract and concrete methods</strong>.</li>
      <li><strong>Abstract methods</strong> are methods that have no implementation, and must be <strong>overridden</strong> by any concrete (non-abstract) subclass.</li>
      <li>All other functionality of the class still exists — its fields, methods, and constructors are all accessed in the same manner as in any other class.</li>
    </ul>

    <h3>Hands-On — Abstract Class and Subclass</h3>
    <pre><code>public abstract class Bike {
    abstract void run();
}

public class Honda extends Bike {
    void run() {
        System.out.println("running safely..");
    }

    public static void main(String args[]) {
        Bike obj = new Honda4();
        obj.run();
    }
}
</code></pre>

    <h3>Hands-On — Adding a Constructor and a Concrete Method</h3>
    <pre><code>public abstract class Bike {
    Bike() { //Constructor
        System.out.println("bike is created");
    }

    abstract void run(); //abstract method

    void changeGear() { //concrete method
        System.out.println("gear changed");
    }
}

public class Honda extends Bike {
    void run() {
        System.out.println("running safely..");
    }
}
</code></pre>

    <h3>Hands-On — Testing the Abstract Class</h3>
    <pre><code>class TestAbstraction {
    public static void main(String args[]) {
        Bike obj = new Honda();
        obj.run();
        obj.changeGear();
    }
}
</code></pre>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Notice that <code>obj</code> is declared as type <code>Bike</code> (the abstract superclass), but it is holding a <code>Honda</code> object. This is the same polymorphic behavior you learned about in the previous lesson — the object's actual type decides which <code>run()</code> is executed.</p>
    </div>

    <div class="divider"></div>

    <h2>Abstract Class — Rules</h2>
    <ol>
      <li>An abstract class must be declared with an <code>abstract</code> keyword.</li>
      <li>It can have abstract and non-abstract (concrete) methods.</li>
      <li>It <strong>cannot be instantiated</strong>.</li>
      <li>It can have <strong>final methods</strong>.</li>
      <li>It can have <strong>constructors and static methods</strong> as well.</li>
    </ol>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>If there is <strong>any abstract method</strong> in a class, that <strong>class must be abstract</strong> too.</p>
      <p>If you are extending an abstract class that has an abstract method, you must either <strong>provide the implementation of that method</strong>, or <strong>make your subclass abstract</strong> as well.</p>
    </div>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Forgetting to implement all inherited abstract methods in a concrete subclass — and forgetting to mark the subclass itself as <code>abstract</code> in that case — is a common exam mistake.</p>
    </div>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Homework:</strong></p>
      <ul>
        <li>Identify the difference between "Abstract Classes" and "Concrete Classes".</li>
        <li>Can an abstract class have a constructor? Why?</li>
        <li>How can we access "Concrete" methods that are inside an abstract class?</li>
      </ul>
    </div>

    <div class="divider"></div>

    <h2>Summary</h2>
    <ul>
      <li><strong>Abstraction</strong> means extracting only the essential details of a real-world entity for the problem at hand, and hiding away everything else.</li>
      <li><strong>Abstraction in Java</strong> hides implementation details from the user, so the user only sees what is necessary to perform a task.</li>
      <li>Abstraction is achieved in Java through <strong>abstract classes</strong> (0% to 100% abstraction) and <strong>interfaces</strong> (100% abstraction).</li>
      <li>An <strong>abstract method</strong> has no body and must be declared with the <code>abstract</code> keyword.</li>
      <li>An <strong>abstract class</strong> cannot be instantiated but can be extended, and may contain both abstract and concrete methods, fields, constructors, and static methods.</li>
      <li>If a class contains even one abstract method, the class itself must be declared <code>abstract</code>.</li>
    </ul>

    <div class="divider"></div>

    <h2>References</h2>
    <ul>
      <li>Oracle Java Tutorials — Abstraction (docs.oracle.com)</li>
      <li><strong>How To Program (Early Objects)</strong> — by H. Deitel and P. Deitel</li>
      <li><strong>Head First Java</strong> — by Kathy Sierra and Bert Bates</li>
    </ul>
  `,
  summary: {
    topic: 'Abstraction in Java',
    subTopics: [
      'Recap of Polymorphism Concepts',
      'Object Oriented Concepts Overview',
      'What is Abstraction?',
      'Abstraction in Java',
      'Abstract Methods',
      'Abstract Classes',
      'Abstract Class Rules and Hands-On Examples',
      'Summary of Abstraction Concepts',
    ],
    definitions: [
      { term: 'Abstraction', meaning: 'The technique of extracting only the necessary, essential details of a real-world entity while hiding away everything that is not relevant to the problem at hand.' },
      { term: 'Abstraction in Java', meaning: 'A mechanism that reduces the complexity of a system by hiding its implementation details, so the user only sees what is necessary to perform a task.' },
      { term: 'Abstract Method', meaning: 'A method that is declared with the abstract keyword and has no body or implementation. It must be overridden by any concrete subclass.' },
      { term: 'Abstract Class', meaning: 'A class declared with the abstract keyword that cannot be instantiated directly, but can be extended by other classes. It may contain both abstract and concrete methods.' },
      { term: 'Concrete Method', meaning: 'A method that has a full implementation (a body), as opposed to an abstract method.' },
      { term: 'Interface', meaning: 'A way to achieve full (100%) abstraction in Java, alongside abstract classes which can provide anywhere from 0% to 100% abstraction.' },
    ],
    keyPoints: [
      'Abstraction means showing only necessary information and hiding the implementation details, like sending an SMS without knowing how it is delivered internally.',
      'A class represents a real-world entity but contains only the essential details that match the problem domain, not every possible detail.',
      'Abstraction is achieved in Java using abstract classes (0% to 100% abstraction) and interfaces (100% abstraction).',
      'An abstract method has no body and must be marked with the abstract keyword.',
      'An abstract class is declared using the abstract keyword before the class keyword, and it cannot be instantiated directly.',
      'An abstract class can have both abstract and concrete methods, along with fields, constructors, and static methods.',
      'If a class has even one abstract method, that class itself must be declared abstract.',
      'A subclass that extends an abstract class must implement all of its abstract methods, or the subclass must also be declared abstract.',
      'An abstract class object reference (like Bike obj = new Honda();) demonstrates the same polymorphic behavior seen with method overriding.',
    ],
  },
},

{
  id: 7,
  title: 'Encapsulation in Java',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Encapsulation in Java</h1>
    <div class="meta-info">ICT2122 <span>•</span> 13 min read</div>

    <h2>Quick Recap</h2>
    <p>Before starting this lesson, let's quickly recall what we learned in <strong>Part 03</strong> of OOP Concepts.</p>
    <ul>
      <li><strong>Abstraction</strong></li>
      <li><strong>Abstraction in Java</strong></li>
      <li><strong>Abstract Methods</strong></li>
      <li><strong>Abstract Classes</strong></li>
      <li><strong>Hands-On</strong> examples</li>
    </ul>

    <h2>What We Will Learn Today</h2>
    <ul>
      <li>Encapsulation</li>
      <li>Encapsulation — Hands-On</li>
      <li>Encapsulation — Advantages</li>
      <li>Abstraction vs Encapsulation</li>
    </ul>

    <div class="divider"></div>

    <h2>Object Oriented Concepts</h2>
    <p>Object Oriented Programming (OOP) makes software development and maintenance simpler. It does this by providing some important concepts:</p>
    <ul>
      <li><strong>Object</strong></li>
      <li><strong>Class</strong></li>
      <li><strong>Inheritance</strong></li>
      <li><strong>Polymorphism</strong></li>
      <li><strong>Abstraction</strong></li>
      <li><strong>Encapsulation</strong> — our focus for this lesson</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is like a cookie cutter — it defines the shape of objects. <strong>Objects</strong> are like cookies — they are instances created from that class.</p>
    </div>

    <div class="divider"></div>

    <h2>Quick Reminders — Inheritance, Polymorphism, and Abstraction</h2>
    <p>Inheritance is a mechanism that allows a <strong>subclass</strong> to inherit the properties and behaviors of a <strong>superclass</strong>, enabling code reuse and a hierarchical structure for classes.</p>
    <p><strong>Polymorphism</strong> is the capability of an action or method to do different things based on the object it is acting upon.</p>
    <p><strong>Abstraction</strong> in Java is a mechanism that helps reduce the complexity of a system by hiding its implementation details from the user. For example, when sending an SMS, you just type the text and send it — you don't know the internal processing behind the message delivery.</p>

    <div class="divider"></div>

    <h2>What is Encapsulation?</h2>
    <p><strong>Encapsulation</strong> in Java is a process of <strong>wrapping code and data together into a single unit</strong>.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Example:</strong> Think of a medicine <strong>capsule</strong> — it is a mix of several medicines wrapped together into a single unit. In the same way, a class wraps its data (fields) and code (methods) together.</p>
    </div>
    <p>In a class, this wrapping looks like this:</p>
    <pre><code>Class
 ├── Variables  (the data)
 └── Methods    (the code)
</code></pre>
    <p>Together, the variables and methods bundled inside a class form the basis of <strong>encapsulation</strong>.</p>

    <div class="divider"></div>

    <h2>Encapsulation — The Details</h2>
    <p><strong>Encapsulation</strong> is the technique of making the fields in a class <strong>private</strong>, and providing access to those fields via <strong>public methods</strong>.</p>
    <ul>
      <li>If a field is declared <strong>private</strong>, it cannot be accessed by anyone outside the class — this hides the field within the class.</li>
      <li>For this reason, encapsulation is also referred to as <strong>data (information) hiding</strong>.</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The <strong>get</strong> methods that allow a field to be viewed are known as <strong>accessor</strong> methods.</p>
      <p>The <strong>set</strong> methods that allow a field to be changed are known as <strong>mutator</strong> methods.</p>
    </div>

    <h3>Hands-On — A Simple Encapsulated Class</h3>
    <pre><code>public class MyEncapsulator {

    //Private member, accessible only within the class
    private String name;

    //public setter (mutator) method to set the value
    public void setName(String name) {
        this.name = name;
    }

    //public getter (accessor) method to get the value
    public String getName() {
        return name;
    }
}
</code></pre>

    <div class="divider"></div>

    <h2>Encapsulation — Try It Yourself</h2>
    <p>The following <code>SalesPerson</code> class demonstrates encapsulation. Each of its fields is marked <strong>private</strong>, and there are <strong>public</strong> methods to access the fields.</p>

    <pre><code>public class SalesPerson {

    private String name;
    private int id;
    private float commissionRate;
    private double sales;

    SalesPerson(String name, int id, double commissionRate) {
        setName(name);
        this.id = id;
        setCommissionRate(commissionRate);
    }

    public void setName(String n) {
        name = n;
    }

    public String getName() {
        return name;
    }

    public void setCommissionRate(double newRate) {
        if (newRate >= 0.0 && newRate <= 0.20) {
            commissionRate = (float) newRate;
        } else {
            System.out.println("Rate must be between 0 and 20%");
        }
    }

    public double getCommisssionRate() {
        return commissionRate;
    }

    public int getId() {
        return id;
    }

    public void addToSales(double s) {
        sales += s;
    }

    public double computeCommission() {
        double commission = 0.0;
        if (sales > 0.0) {
            commission = sales * commissionRate;
        }
        sales = 0.0; // start over
        return commission;
    }
}
</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Notice how <code>setCommissionRate()</code> checks that the new rate is between <code>0.0</code> and <code>0.20</code> before accepting it. This validation logic is only possible because the field is <strong>private</strong> — no one can bypass it and set <code>commissionRate</code> directly.</p>
    </div>

    <div class="divider"></div>

    <h2>Encapsulation — Advantages</h2>
    <ul>
      <li>By providing only a setter or only a getter method, you can make a class <strong>read-only</strong> or <strong>write-only</strong>.</li>
      <li>It gives you <strong>control over the data</strong>. For example, if you want to allow the value of <code>id</code> to be set only when it is greater than 100, you can write that logic inside the setter method.</li>
      <li>A class can have <strong>total control</strong> over what is stored in its fields. The <code>SalesPerson</code> class demonstrates this with the <code>commissionRate</code> field, which can only ever be a value between <code>0.0</code> and <code>0.20</code>.</li>
      <li>The users of a class do <strong>not need to know</strong> how the class stores its data internally. A class can change the data type of a field, and users of the class do not need to change any of their own code.</li>
    </ul>

    <div class="divider"></div>

    <h2>Abstraction vs. Encapsulation</h2>
    <p>Encapsulation is often confused with Abstraction, but they solve different problems:</p>
    <ul>
      <li><strong>Encapsulation</strong> is more about <strong>"How"</strong> to achieve a functionality.</li>
      <li><strong>Abstraction</strong> is more about <strong>"What"</strong> a class can do.</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A simple example to understand this difference is a <strong>mobile phone</strong>: the complex logic in the circuit board is <strong>encapsulated</strong> inside the phone, while the touch screen (the user interface) is provided to <strong>abstract</strong> that complexity out, so the user only sees simple icons and taps.</p>
    </div>

    <h3>Abstraction vs. Encapsulation — Comparison</h3>
    <table>
      <tr><th>Abstraction</th><th>Encapsulation</th></tr>
      <tr><td>Solves the issues at the <strong>design level</strong>.</td><td>Solves the issues at the <strong>implementation level</strong>.</td></tr>
      <tr><td>Is about hiding <strong>unwanted details</strong> while showing the most essential information.</td><td>Means hiding the <strong>code and data</strong> into a single unit.</td></tr>
      <tr><td>Allows focusing on <strong>what</strong> the information object must contain.</td><td>Means hiding the internal details or mechanics of <strong>how</strong> an object does something, for security reasons.</td></tr>
    </table>

    <div class="divider"></div>

    <h2>Summary</h2>
    <ul>
      <li><strong>Encapsulation</strong> wraps code (methods) and data (fields) together into a single unit — like a capsule mixing several medicines together.</li>
      <li>It is achieved by making fields <strong>private</strong> and exposing them only through <strong>public</strong> accessor (getter) and mutator (setter) methods, which is why it is also called <strong>data hiding</strong>.</li>
      <li>Encapsulation gives a class <strong>control over its own data</strong>, allows fields to be made read-only or write-only, and lets internal implementation change without affecting the code that uses the class.</li>
      <li><strong>Abstraction</strong> is about "What" a class can do (the design level); <strong>Encapsulation</strong> is about "How" it does it (the implementation level).</li>
    </ul>

    <div class="divider"></div>

    <h2>References</h2>
    <ul>
      <li><strong>How To Program (Early Objects)</strong> — by H. Deitel and P. Deitel</li>
      <li><strong>Head First Java</strong> — by Kathy Sierra and Bert Bates</li>
    </ul>
  `,
  summary: {
    topic: 'Encapsulation in Java, and Abstraction vs Encapsulation',
    subTopics: [
      'Recap of Abstraction Concepts',
      'Object Oriented Concepts Overview',
      'What is Encapsulation?',
      'Encapsulation — Private Fields and Public Methods',
      'Accessor (Getter) and Mutator (Setter) Methods',
      'Encapsulation Hands-On (SalesPerson Example)',
      'Advantages of Encapsulation',
      'Abstraction vs Encapsulation',
    ],
    definitions: [
      { term: 'Encapsulation', meaning: 'The process of wrapping code (methods) and data (fields) together into a single unit, typically by making fields private and exposing them through public methods.' },
      { term: 'Data Hiding', meaning: 'Another name for encapsulation, referring to the fact that private fields cannot be accessed directly from outside their class.' },
      { term: 'Accessor Method (Getter)', meaning: 'A public method that allows a private field to be viewed or read from outside the class.' },
      { term: 'Mutator Method (Setter)', meaning: 'A public method that allows a private field to be changed or updated, often including validation logic.' },
      { term: 'Abstraction vs Encapsulation', meaning: 'Abstraction focuses on "What" a class can do and hides unwanted details at the design level; Encapsulation focuses on "How" it works and hides internal details at the implementation level.' },
    ],
    keyPoints: [
      'Encapsulation wraps data (fields) and code (methods) together into a single unit, like a capsule containing several medicines.',
      'Encapsulation is achieved by declaring fields private and providing access through public getter (accessor) and setter (mutator) methods.',
      'Because private fields cannot be accessed directly from outside the class, encapsulation is also called data (information) hiding.',
      'Providing only a getter makes a field effectively read-only; providing only a setter makes it effectively write-only.',
      'Setter methods can include validation logic, such as only allowing a commissionRate between 0.0 and 0.20, giving the class full control over its own data.',
      'Because users only interact with a class through its public methods, the internal data representation can be changed later without breaking the code that uses the class.',
      'Encapsulation is about "How" a class implements its functionality; Abstraction is about "What" a class can do.',
      'Example: in a mobile phone, the complex circuit board logic is encapsulated, while the touch screen abstracts that complexity away from the user.',
      'Abstraction operates at the design level (hiding unwanted details); Encapsulation operates at the implementation level (hiding internal mechanics for security).',
    ],
  },
},

]