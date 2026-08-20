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
]