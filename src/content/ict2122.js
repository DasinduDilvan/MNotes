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
  title: 'Classes and Objects',
  content: `
    <span class="lesson-badge">LESSON 02</span>
    <h1>Classes and Objects</h1>
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
  id: 2,
  title: 'Classes and Objects — Part 02',
  content: `
    <span class="lesson-badge">LESSON 02 – PART 02</span>
    <h1>Classes and Objects — Part 02</h1>
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
]