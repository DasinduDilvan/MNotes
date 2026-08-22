export const courseName = 'Object Oriented Analysis and Design'

export const lessons = [
  {
  id: 1,
  title: 'OOAD : Basic Concepts',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Object-Oriented Analysis and Design: Basic Concepts</h1>
    <div class="meta-info">OOAD <span>•</span> 50 min read <span></div>

    <h2>Learning Objectives</h2>
    <p>After finishing this lesson, you should be able to:</p>
    <ol>
      <li>Explain <strong>Object Orientation</strong>.</li>
      <li>Describe the main principles of Object Orientation.</li>
      <li>Explain the concept of a <strong>class</strong>.</li>
      <li>Explain the concept of an <strong>object</strong> and <strong>instance</strong>.</li>
      <li>Explain <strong>message passing</strong> between objects.</li>
      <li>Explain <strong>high cohesion</strong> and <strong>low coupling</strong>.</li>
      <li>Identify these concepts in a real-world software system.</li>
    </ol>

    <div class="divider"></div>

    <h2>System Development Life Cycle</h2>
    <p>Before we look at Object-Oriented Analysis and Design, we need to know where analysis and design fit inside the bigger software development process.</p>
    <p>A typical software development process looks like this:</p>
    <pre><code>Analysis → Design → Development → Testing → Deployment → Maintenance</code></pre>

    <h3>Analysis</h3>
    <p>The goal here is to understand:</p>
    <ul>
      <li>What problem are we solving?</li>
      <li>Who are the users?</li>
      <li>What does the user actually need?</li>
      <li>What should the system do?</li>
    </ul>

    <h3>Design</h3>
    <p>The system is planned before anyone writes code. During design, we decide:</p>
    <ul>
      <li>Overall system architecture</li>
      <li>Database structure</li>
      <li>User interface</li>
      <li>System flow</li>
      <li>Components / modules</li>
      <li>Technologies to be used</li>
    </ul>
    <p>The design acts as a <strong>blueprint</strong> for development.</p>

    <h3>Development</h3>
    <p>The designed solution is built using a programming language and suitable technologies.</p>

    <h3>Testing</h3>
    <p>The developed system is checked to see whether it:</p>
    <ul>
      <li>Works correctly</li>
      <li>Satisfies requirements</li>
      <li>Handles errors properly</li>
      <li>Meets quality expectations</li>
    </ul>

    <h3>Deployment</h3>
    <p>The finished system is released to users. Modern deployment may involve:</p>
    <ul>
      <li>Cloud platforms</li>
      <li>Containers</li>
      <li>CI/CD pipelines</li>
      <li>App stores</li>
      <li>Web hosting</li>
    </ul>

    <h3>Maintenance</h3>
    <p>After deployment, the system may still need:</p>
    <ul>
      <li>Bug fixes</li>
      <li>Security updates</li>
      <li>Performance improvements</li>
      <li>New features</li>
      <li>Compatibility updates</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Modern software development is usually <strong>iterative</strong>. Analysis, design, development, and testing often happen repeatedly, rather than only once in a strict straight line.</p>
    </div>

    <div class="divider"></div>

    <h2>What is Object Orientation?</h2>
    <p><strong>Object Orientation (OO)</strong> is a way of thinking about and designing software as a collection of <strong>objects</strong> that interact with one another.</p>
    <p>Instead of only asking:</p>
    <p><em>"What functions should the program perform?"</em></p>
    <p>we also ask:</p>
    <p><em>"What objects exist in this system, what do they know, what can they do, and how do they interact?"</em></p>
    <p>In an object-oriented system:</p>
    <ul>
      <li>Software is organized around <strong>objects</strong>.</li>
      <li>Objects contain <strong>data</strong>.</li>
      <li>Objects provide <strong>behavior</strong>.</li>
      <li>Objects interact with other objects.</li>
      <li>Objects may represent real-world entities, concepts, or software responsibilities.</li>
    </ul>
    <p>For example, in a Library Management System, we may identify these objects:</p>
    <ul>
      <li>Book</li>
      <li>Member</li>
      <li>Librarian</li>
      <li>Loan</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Object Orientation</strong> is viewing a system as a set of interacting and interrelated objects, with each object encapsulating its own data and behavior.</p>
    </div>

    <div class="divider"></div>

    <h2>Objects as Self-Contained Components</h2>
    <p>An object can be thought of as a fairly self-contained software component. An object:</p>
    <p><strong>1. Has its own data</strong></p>
    <pre><code>Book
- title
- author
- ISBN
- availability</code></pre>
    <p><strong>2. Has its own functionality</strong></p>
    <pre><code>checkAvailability()
reserve()</code></pre>
    <p><strong>3. Interacts with other objects</strong></p>
    <pre><code>Member → borrows → Book</code></pre>
    <p><strong>Advantages</strong> — because responsibilities are organized into objects, components can potentially be:</p>
    <ul>
      <li>Reused</li>
      <li>Modified</li>
      <li>Replaced</li>
      <li>Tested independently</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>In modern software engineering, we usually think of objects as <strong>software abstractions</strong> rather than literally "real-world things." For example, <code>PaymentService</code> can be an object even though it is not a physical object.</p>
    </div>

    <div class="divider"></div>

    <h2>OOA, OOD and OOP</h2>
    <p>These three terms are very important and are easy to mix up.</p>

    <h3>OOA — Object-Oriented Analysis</h3>
    <p><strong>Question:</strong> What exists in the problem domain?</p>
    <p>OOA focuses on identifying:</p>
    <ul>
      <li>Objects</li>
      <li>Concepts</li>
      <li>Classes</li>
      <li>Relationships</li>
      <li>Requirements</li>
    </ul>
    <p>We look at the problem from the point of view of the problem domain. Example — in a Library System, we may identify: Book, Member, Librarian, Loan, Library.</p>

    <h3>OOD — Object-Oriented Design</h3>
    <p><strong>Question:</strong> How should the software objects work together?</p>
    <p>OOD takes the concepts identified during analysis and designs software structures that satisfy the requirements. We determine:</p>
    <ul>
      <li>Software classes</li>
      <li>Attributes</li>
      <li>Methods</li>
      <li>Relationships</li>
      <li>Object interactions</li>
      <li>Responsibilities</li>
    </ul>
    <pre><code>Book
----------------
title
author
ISBN
----------------
checkAvailability()
reserve()</code></pre>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>OOD</strong> focuses on defining software objects and how those objects collaborate to fulfill requirements.</p>
    </div>

    <h3>OOP — Object-Oriented Programming</h3>
    <p><strong>Question:</strong> How do we implement the design?</p>
    <p>OOP is the implementation of object-oriented concepts using a programming language. Examples of OO languages include Java, C#, C++, Python, Kotlin, Swift, and TypeScript.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>OOP</strong> is the implementation / coding / construction stage of the objects that were designed earlier.</p>
    </div>

    <h3>Simple Relationship</h3>
    <pre><code>OOA
  ↓
Identify the problem-domain objects

OOD
  ↓
Design software objects and their interactions

OOP
  ↓
Implement those objects using a programming language</code></pre>

    <div class="divider"></div>

    <h2>Traditional Development vs Object-Oriented Development</h2>
    <p>In a <strong>traditional</strong> approach, we often think mainly about:</p>
    <pre><code>Functions + Data</code></pre>
    <p>In <strong>OO development</strong>, we try to keep the:</p>
    <pre><code>Data + Behavior that operates on that data</code></pre>
    <p>together, inside appropriate objects or classes. For example, instead of having code like this spread throughout the system:</p>
    <pre><code>customerData
calculateCustomerBill()
updateCustomer()</code></pre>
    <p>we may instead have a single, self-contained class:</p>
    <pre><code>Customer
----------------
name
address
balance
----------------
calculateBill()
updateDetails()</code></pre>
    <p>This idea is closely related to <strong>encapsulation</strong>.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>OO development combines <strong>data / state</strong> and <strong>behavior / functions</strong> within objects, and groups similar objects into <strong>classes</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Why Object Orientation?</h2>
    <p>Object-oriented development can offer several advantages:</p>
    <ul>
      <li><strong>Simplicity</strong> — complex systems can be divided into understandable objects.</li>
      <li><strong>Reusability</strong> — existing classes and components can potentially be reused.</li>
      <li><strong>Increased Quality</strong> — modular designs can make testing and maintenance easier.</li>
      <li><strong>Faster Development</strong> — reusable components can reduce development effort.</li>
      <li><strong>Maintainability</strong> — changes can often be localized to particular classes or components.</li>
      <li><strong>Scalability</strong> — large systems can be divided into smaller components.</li>
      <li><strong>Modularity</strong> — each class can have a clear responsibility.</li>
      <li><strong>Modifiability</strong> — well-designed systems can accommodate changes more easily.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Modern perspective:</strong> these benefits are strongest when OO design is combined with principles such as high cohesion, low coupling, Single Responsibility, composition, Dependency Injection, and interface-based design.</p>
    </div>

    <div class="divider"></div>

    <h2>What is an Object?</h2>
    <p>The idea of objects in programming has historical roots in languages such as <strong>Simula</strong>. An object can be thought of as a software entity that:</p>
    <ul>
      <li><strong>Knows things</strong> — these are its attributes / state.</li>
      <li><strong>Does things</strong> — these are its methods / behavior.</li>
    </ul>
    <p>Example — a <strong>Car</strong> object:</p>
    <p><strong>Knows:</strong> color, manufacturer, model, cost, owner</p>
    <p><strong>Can do:</strong> drive, stop, lock, carry passengers</p>

    <div class="divider"></div>

    <h2>Attributes</h2>
    <p>An <strong>attribute</strong> represents a piece of data or a property of an object. Attributes describe the <strong>state</strong> of an object.</p>
    <p>Example — Car:</p>
    <pre><code>color
manufacturer
model
cost
owner</code></pre>
    <p>Different objects of the same class can have different attribute values. For example:</p>
    <pre><code>Car 1                Car 2
color = Red           color = Blue
model = Toyota        model = Honda</code></pre>

    <div class="divider"></div>

    <h2>Methods</h2>
    <p>A <strong>method</strong> represents what an object can do. A method implements some behavior of the object.</p>
    <p>Example — Car:</p>
    <pre><code>drive()
stop()
lock()
openDoor()</code></pre>
    <p>Putting it together:</p>
    <pre><code>Object        Attributes              Methods
Car           color, model, cost      drive(), stop()
Student       name, age, ID           study(), attendClass()
BankAccount   accountNo, balance      deposit(), withdraw()</code></pre>

    <div class="divider"></div>

    <h2>State and Behavior</h2>
    <p>This is a very important distinction to remember.</p>
    <p><strong>State</strong> — what the object is / knows at a particular time. Represented by attributes. Example:</p>
    <pre><code>Car
color = Red
manufacturer = Toyota
cost = 8,000,000</code></pre>
    <p><strong>Behavior</strong> — what the object can do. Represented by methods. Example:</p>
    <pre><code>drive()
stop()
openDoor()</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Easy way to remember: <strong>Attributes → What does it know?</strong> and <strong>Methods → What can it do?</strong></p>
    </div>

    <div class="divider"></div>

    <h2>Classes</h2>
    <p>A <strong>class</strong> is a blueprint / template used to describe a group of similar objects. A class defines:</p>
    <ul>
      <li>Attributes</li>
      <li>Methods</li>
      <li>Relationships</li>
      <li>Common behavior</li>
    </ul>
    <p>Example:</p>
    <pre><code>Employee
-------------------------
name
employeeID
salary
-------------------------
calculateSalary()
displayDetails()</code></pre>
    <p>The class does not represent one particular employee. It describes what an <code>Employee</code> object should contain and what it can do.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>class</strong> is a template / description for objects that share common attributes, methods, operations, and relationships.</p>
    </div>

    <div class="divider"></div>

    <h2>Class vs Object</h2>
    <p>This is one of the most important concepts in OOAD.</p>
    <ul>
      <li><strong>Class</strong> — a blueprint / template.</li>
      <li><strong>Object</strong> — an actual instance created from the class.</li>
    </ul>
    <p>Think about a house:</p>
    <pre><code>House Blueprint = Class
Actual House    = Object</code></pre>
    <p>Example — Class: <code>Employee</code>. Possible objects: <code>employee1</code> → John, <code>employee2</code> → Jane, <code>employee3</code> → Mark. All belong to the <code>Employee</code> class but have different values.</p>

    <div class="divider"></div>

    <h2>Instance</h2>
    <p>An <strong>instance</strong> is one particular object created from a class. Example — Class: <code>Student</code>. An instance:</p>
    <pre><code>Student
----------------
name = Peter
age = 15
----------------
study()
walk()</code></pre>
    <p>Peter is an instance of the <code>Student</code> class. Each instance has its own state.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An <strong>instance</strong> is a single person, thing, or concept in the application domain — another word for a single object.</p>
    </div>

    <div class="divider"></div>

    <h2>Message Passing</h2>
    <p>Objects need to communicate with one another. This communication is called <strong>message passing</strong>. A message is simply a request asking an object to perform some operation. For example:</p>
    <pre><code>Customer → placeOrder() → OrderService</code></pre>
    <p>The receiving object executes the matching method.</p>
    <p><strong>Simple analogy:</strong> A person says <em>"Prepare the soup."</em> The chef receives that request and performs <code>prepareSoup()</code>.</p>
    <pre><code>Message → "Prepare soup"
Method  → prepareSoup()</code></pre>

    <div class="divider"></div>

    <h2>How Message Passing Works</h2>
    <p>There are normally three steps:</p>
    <ol>
      <li><strong>Sender</strong> — one object sends a message.</li>
      <li><strong>Receiver</strong> — another object receives the message.</li>
      <li><strong>Method execution</strong> — the receiver executes the matching method. A result may then be returned.</li>
    </ol>
    <pre><code>Sender
  |
  | message
  ↓
Receiver
  |
  | executes method
  ↓
Return value</code></pre>

    <div class="divider"></div>

    <h2>Components of a Message</h2>
    <p>A message can contain:</p>
    <ol>
      <li><strong>Object reference</strong> — identifies which object should receive the message.</li>
      <li><strong>Method name</strong> — identifies what operation should be performed.</li>
      <li><strong>Parameters</strong> — provide the required input values.</li>
    </ol>
    <p>Example:</p>
    <pre><code>lawrence.takeOrder(
    "sofa",
    "1 Robinson Rd",
    120799
);</code></pre>
    <p>Here: Object reference → <code>lawrence</code>, Method name → <code>takeOrder</code>, Parameters → <code>"sofa"</code>, <code>"1 Robinson Rd"</code>, <code>120799</code>.</p>

    <div class="divider"></div>

    <h2>Client and Server Objects</h2>
    <p>In an object interaction:</p>
    <ul>
      <li><strong>Message Sender</strong> acts as the <strong>client</strong>.</li>
      <li><strong>Message Receiver</strong> acts as the <strong>server</strong> for that particular request.</li>
    </ul>
    <pre><code>Customer
  |
  | placeOrder()
  ↓
SalesPerson</code></pre>
    <p>The Customer requests a service, and the SalesPerson provides it. In this example, Alex is the customer / client, and Lawrence is the receiving / server object.</p>

    <div class="divider"></div>

    <h2>Method Signature</h2>
    <p>A method has a <strong>signature</strong> that identifies the operation. For example:</p>
    <pre><code>getMyFundsFromBank(String bankName)</code></pre>
    <p>The signature concept focuses on the method name and the parameter list:</p>
    <pre><code>getMyFundsFromBank(String)</code></pre>
    <p>Different programming languages define their own exact rules for what counts as a method signature. In this lesson, a signature is simply the combination of the <strong>method name</strong> and the <strong>parameter list</strong>.</p>

    <div class="divider"></div>

    <h2>Principles of Object Orientation</h2>
    <p>There are four major principles of Object Orientation:</p>
    <ol>
      <li>Abstraction</li>
      <li>Encapsulation</li>
      <li>Inheritance</li>
      <li>Polymorphism</li>
    </ol>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>These four principles are often called the <strong>four pillars of OOP</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Abstraction</h2>
    <p><strong>Abstraction</strong> means focusing on the important aspects of something while ignoring unnecessary details. It answers <em>"What does this object do?"</em> rather than <em>"How exactly does it do it?"</em></p>
    <p><strong>Real-world example — Map.</strong> A map is an abstraction. Different maps show different information depending on their purpose.</p>
    <ul>
      <li><strong>Road map</strong> shows: roads, cities, routes, distances.</li>
      <li><strong>Geological map</strong> shows: rock types, geological structures, geological boundaries.</li>
    </ul>
    <p>The same geographical area can be shown differently depending on what information matters for the task.</p>
    <p><strong>Software example.</strong> Think about a smartphone call. The user only sees:</p>
    <pre><code>Incoming Call
[ Accept ]  [ Reject ]</code></pre>
    <p>The user does not need to know how the network identifies the phone, how signalling works, how audio packets are transmitted, how the operating system manages the call, or how the network sets up the connection. All that complexity is hidden.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Abstraction</strong> hides unnecessary complexity and exposes only the essential functionality.</p>
    </div>

    <div class="divider"></div>

    <h2>Encapsulation</h2>
    <p><strong>Encapsulation</strong> means packaging data and the operations that work on that data together inside an object or class. It also involves controlling access to the object's internal state. For example:</p>
    <pre><code>BankAccount
-------------------------
private balance
private accountNumber
-------------------------
deposit()
withdraw()
getBalance()</code></pre>
    <p>Outside code should not normally change <code>balance</code> directly. Instead, <code>deposit()</code> and <code>withdraw()</code> control how the balance changes.</p>

    <div class="divider"></div>

    <h2>Data Hiding</h2>
    <p><strong>Data hiding</strong> means restricting direct access to internal data or implementation details. For example, instead of allowing:</p>
    <pre><code>private double balance;

account.balance = -500000;</code></pre>
    <p>we provide controlled operations instead:</p>
    <pre><code>account.deposit(5000);
account.withdraw(1000);</code></pre>
    <p>This lets the class enforce its own rules. For example:</p>
    <pre><code>withdraw(amount)
  if amount <= balance
    perform withdrawal
  else
    reject transaction</code></pre>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Encapsulation</strong> is separating an object's external interface from its hidden internal implementation.</p>
    </div>

    <div class="divider"></div>

    <h2>Advantages of Encapsulation</h2>
    <ul>
      <li><strong>Data Integrity</strong> — data can only be changed through controlled operations.</li>
      <li><strong>Security</strong> — sensitive internal information can be protected.</li>
      <li><strong>Control</strong> — the class decides which operations are allowed.</li>
      <li><strong>Flexibility</strong> — internal implementation can change without necessarily affecting users of the class.</li>
      <li><strong>Reduced Complexity</strong> — users do not need to understand the internal implementation.</li>
    </ul>

    <div class="divider"></div>

    <h2>Encapsulation vs Abstraction</h2>
    <p><strong>Encapsulation</strong> focuses on: How do we package and protect the data and implementation?</p>
    <p><strong>Abstraction</strong> focuses on: What should we expose, and what unnecessary complexity should we hide?</p>
    <p>Bank Account example:</p>
    <pre><code>BankAccount
------------------------
private balance
------------------------
deposit()
withdraw()
getBalance()</code></pre>
    <p><strong>Encapsulation</strong> — <code>balance</code> is protected from direct access.</p>
    <p><strong>Abstraction</strong> — the user only needs to know about <code>deposit()</code>, <code>withdraw()</code>, and <code>getBalance()</code>. They do not need to know exactly how the bank updates the balance internally.</p>

    <div class="divider"></div>

    <h2>Inheritance</h2>
    <p><strong>Inheritance</strong> is a relationship between classes where one class derives from another class.</p>
    <p>The existing class is usually called the <strong>Parent</strong>, <strong>Base</strong>, or <strong>Superclass</strong>. The new class is called the <strong>Child</strong>, <strong>Derived</strong>, or <strong>Subclass</strong>. Example:</p>
    <pre><code>Vehicle
   |
   -------------------
   |        |        |
  Car      Bike     Truck</code></pre>
    <p>The child classes can inherit common attributes and behavior from <code>Vehicle</code>.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Inheritance</strong> is a mechanism for sharing and reusing attributes and behaviors.</p>
    </div>

    <div class="divider"></div>

    <h2>Why Use Inheritance?</h2>
    <p>Suppose <code>Car</code>, <code>Bike</code>, and <code>Truck</code> all have <code>vehicleNumber</code>, <code>brand</code>, <code>speed</code>, <code>start()</code>, and <code>stop()</code>. Instead of repeating these in every class, we can define them once:</p>
    <pre><code>Vehicle
----------------
vehicleNumber
brand
speed
----------------
start()
stop()

Car extends Vehicle
Bike extends Vehicle
Truck extends Vehicle</code></pre>
    <p>The common functionality is written once and reused. Inheritance is most useful when there is a genuine <strong>"is-a"</strong> relationship — for example, <em>a Car is a Vehicle</em>.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Modern OO design often prefers <strong>composition over inheritance</strong> when appropriate, because too much inheritance can create rigid, hard-to-change class hierarchies.</p>
    </div>

    <div class="divider"></div>

    <h2>Polymorphism</h2>
    <p>The word <strong>polymorphism</strong> means "many forms" — <em>poly</em> = many, <em>morph</em> = form. In OO systems, polymorphism allows the same operation or interface to produce different behavior depending on which object is involved.</p>
    <p>Example:</p>
    <pre><code>Vehicle
   |
   -------------------
   |        |        |
  Car      Bike     Truck</code></pre>
    <p>Suppose every vehicle has <code>calculateParkingFee()</code>. A Car may calculate the fee one way, a Bike another way, and a Truck differently again. The caller can use the same operation, <code>vehicle.calculateParkingFee()</code>, but the actual behavior depends on the real vehicle type. This is polymorphism.</p>
    <p><strong>Modern example — Payment:</strong></p>
    <pre><code>Payment
   |
   ---------------------------
   |            |            |
 Card         PayPal    BankTransfer</code></pre>
    <p>Each payment type can implement <code>pay()</code>. The application can simply call <code>payment.pay()</code> without needing to know the detailed implementation.</p>

    <div class="divider"></div>

    <h2>Cohesion and Coupling</h2>
    <p>Two very important OO design concepts are:</p>
    <ul>
      <li><strong>Cohesion</strong> — how closely related the responsibilities inside a module/class are.</li>
      <li><strong>Coupling</strong> — how strongly one module/class depends on another.</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A good OO design generally aims for <strong>High Cohesion + Low Coupling</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Cohesion</h2>
    <p><strong>Cohesion</strong> measures how strongly the responsibilities, methods, and data of a class belong together around a single, meaningful purpose.</p>
    <p><strong>High cohesion</strong> — a class has a clear, focused responsibility. Example:</p>
    <pre><code>EmailService
----------------
validateEmail()
sendEmail()
formatEmail()</code></pre>
    <p>These operations are all related, so this is <strong>high cohesion</strong>.</p>
    <p><strong>Low cohesion</strong> — consider:</p>
    <pre><code>UserManager
----------------
createUser()
deleteUser()
validateEmail()
sendWelcomeEmail()
generateReport()
printReport()
calculateTax()
playMusic()</code></pre>
    <p>This class does too many unrelated things — it has <strong>low cohesion</strong>. We could split it into <code>UserService</code>, <code>EmailService</code>, <code>ReportService</code>, <code>TaxService</code>, and <code>MusicService</code>.</p>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Quick test: "Does this class have one clear purpose?" If <strong>YES</strong> → high cohesion. If <strong>NO</strong> → low cohesion.</p>
    </div>
    <p>Example — <code>StudentService</code> with <code>registerStudent()</code>, <code>updateStudent()</code>, <code>removeStudent()</code> → <strong>high cohesion</strong>. But <code>StudentService</code> with <code>printInvoice()</code>, <code>sendEmail()</code>, <code>calculateSalary()</code>, <code>playVideo()</code> → <strong>low cohesion</strong>.</p>

    <div class="divider"></div>

    <h2>Coupling</h2>
    <p><strong>Coupling</strong> refers to the degree of dependency between software modules or classes. If two classes depend heavily on each other, that is <strong>high coupling</strong>. If they are relatively independent, that is <strong>low coupling</strong>.</p>
    <p><strong>High coupling</strong> — imagine:</p>
    <pre><code>Class A → Class B → Class C → Class D</code></pre>
    <p>If changing Class B forces changes in A, C, and D, the system is tightly dependent. This makes the system difficult to maintain, difficult to test, difficult to modify, and more vulnerable to changes.</p>
    <p><strong>Low coupling</strong> — in a loosely coupled system:</p>
    <pre><code>Class A → Interface ← Class B</code></pre>
    <p>Classes depend less directly on implementation details. Advantages include easier maintenance, easier testing, easier replacement, easier modification, and better flexibility.</p>

    <h3>Example: Online Order System (High Coupling)</h3>
    <pre><code>class Order {
    void placeOrder() {
        MySQLDatabase db = new MySQLDatabase();
        db.connect();
        db.saveOrder();
    }
}

class MySQLDatabase {
    void connect() {
        System.out.println("Connected to MySQL");
    }
    void saveOrder() {
        System.out.println("Order saved");
    }
}</code></pre>
    <p>Here, <code>Order</code> is directly dependent on <code>MySQLDatabase</code>. If we switch from MySQL to MongoDB, we have to modify the <code>Order</code> class itself. This is <strong>high coupling</strong>.</p>

    <h3>Example: Same System, Loosely Coupled</h3>
    <pre><code>interface Database {
    void saveOrder();
}

class MySQLDatabase implements Database {
    public void saveOrder() {
        System.out.println("Order saved in MySQL");
    }
}

class MongoDatabase implements Database {
    public void saveOrder() {
        System.out.println("Order saved in MongoDB");
    }
}

class Order {
    private Database db;

    Order(Database db) {
        this.db = db;
    }

    void placeOrder() {
        db.saveOrder();
    }
}</code></pre>
    <p><strong>Loose coupling</strong> means classes depend on an abstraction / interface, rather than a specific implementation. Here the <code>Order</code> class does not care which database is actually being used.</p>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Real-world analogy: <strong>High coupling</strong> is like a phone charger that only works with one specific phone model. <strong>Loose coupling</strong> is like a USB-C standard charger that works with many compatible devices.</p>
    </div>

    <h3>Practice: High Coupling or Loose Coupling?</h3>
    <p>The original lecture poses these as discussion questions. Try to decide each one yourself first, using this rule: <strong>directly creating a concrete class with <code>new</code> = high coupling</strong>, while <strong>depending on an interface passed in from outside = loose coupling</strong>.</p>

    <pre><code>class Student {
    void register() {
        MySQLDatabase db = new MySQLDatabase();
        db.connect();
        db.saveStudent();
    }
}

class MySQLDatabase {
    void connect() { System.out.println("Connected"); }
    void saveStudent() { System.out.println("Student saved"); }
}</code></pre>
    <p><strong>Answer: High coupling</strong> — <code>Student</code> creates and depends directly on the concrete <code>MySQLDatabase</code> class.</p>

    <pre><code>interface Payment {
    void pay(double amount);
}

class CreditCardPayment implements Payment {
    public void pay(double amount) {
        System.out.println("Paid by Credit Card");
    }
}

class Order {
    private Payment payment;

    Order(Payment payment) {
        this.payment = payment;
    }

    void checkout(double amount) {
        payment.pay(amount);
    }
}</code></pre>
    <p><strong>Answer: Loose coupling</strong> — <code>Order</code> depends only on the <code>Payment</code> interface, not on a specific payment class.</p>

    <pre><code>class Report {
    void generate() {
        PDFPrinter printer = new PDFPrinter();
        printer.print();
    }
}

class PDFPrinter {
    void print() { System.out.println("Printing PDF"); }
}</code></pre>
    <p><strong>Answer: High coupling</strong> — <code>Report</code> directly creates and depends on the concrete <code>PDFPrinter</code> class.</p>

    <pre><code>interface Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    public void send(String message) { System.out.println("Email: " + message); }
}

class SMSNotification implements Notification {
    public void send(String message) { System.out.println("SMS: " + message); }
}

class UserService {
    private Notification notification;

    UserService(Notification notification) {
        this.notification = notification;
    }

    void notifyUser() {
        notification.send("Welcome!");
    }
}</code></pre>
    <p><strong>Answer: Loose coupling</strong> — <code>UserService</code> depends on the <code>Notification</code> interface, not on a specific notification class.</p>

    <pre><code>class ShoppingCart {
    private StripePayment payment = new StripePayment();

    void checkout() {
        payment.processPayment();
    }
}

class StripePayment {
    void processPayment() { System.out.println("Payment processed"); }
}</code></pre>
    <p><strong>Answer: High coupling</strong> — <code>ShoppingCart</code> directly creates and depends on the concrete <code>StripePayment</code> class, with no interface in between.</p>

    <div class="divider"></div>

    <h2>Cohesion vs Coupling</h2>
    <pre><code>Cohesion                          Coupling
Concerned with one class/module   Concerned with relationships between classes/modules
Measures internal relatedness     Measures external dependency
We want high cohesion             We want low coupling
One clear responsibility          Minimal unnecessary dependency</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>High Cohesion + Low Coupling = Good OO Design</strong></p>
    </div>
  `,
  summary: {
    topic: 'Object-Oriented Analysis and Design (OOAD): Basic Concepts',
    subTopics: [
      'Learning Objectives',
      'System Development Life Cycle',
      'What is Object Orientation?',
      'Objects as Self-Contained Components',
      'OOA, OOD and OOP',
      'Traditional Development vs Object-Oriented Development',
      'Why Object Orientation?',
      'What is an Object?',
      'Attributes',
      'Methods',
      'State and Behavior',
      'Classes',
      'Class vs Object',
      'Instance',
      'Message Passing',
      'How Message Passing Works',
      'Components of a Message',
      'Client and Server Objects',
      'Method Signature',
      'Principles of Object Orientation',
      'Abstraction',
      'Encapsulation',
      'Data Hiding',
      'Advantages of Encapsulation',
      'Encapsulation vs Abstraction',
      'Inheritance',
      'Why Use Inheritance?',
      'Polymorphism',
      'Cohesion and Coupling',
      'Cohesion',
      'Coupling',
      'Cohesion vs Coupling',
    ],
    definitions: [
      { term: 'Object Orientation (OO)', meaning: 'A way of designing software as a collection of interacting objects, each holding its own data and behavior.' },
      { term: 'OOA (Object-Oriented Analysis)', meaning: 'Identifying the objects, concepts, classes, relationships, and requirements that exist in the problem domain.' },
      { term: 'OOD (Object-Oriented Design)', meaning: 'Designing software classes, attributes, methods, and object interactions that satisfy the requirements found in OOA.' },
      { term: 'OOP (Object-Oriented Programming)', meaning: 'Implementing the designed objects using a programming language such as Java, C#, or Python.' },
      { term: 'Object', meaning: 'A software entity that knows things (attributes) and can do things (methods).' },
      { term: 'Attribute', meaning: 'A piece of data or property that describes the state of an object.' },
      { term: 'Method', meaning: 'An operation that implements a behavior of an object.' },
      { term: 'State', meaning: 'What an object is or knows at a particular time, represented by its attributes.' },
      { term: 'Behavior', meaning: 'What an object can do, represented by its methods.' },
      { term: 'Class', meaning: 'A blueprint or template that defines the attributes, methods, and relationships shared by a group of similar objects.' },
      { term: 'Instance', meaning: 'A single, particular object created from a class; another word for an individual object.' },
      { term: 'Message Passing', meaning: 'The way objects communicate by sending requests asking each other to perform operations.' },
      { term: 'Method Signature', meaning: 'The combination of a method name and its parameter list, used to identify an operation.' },
      { term: 'Client object', meaning: 'The object that sends a message, requesting a service.' },
      { term: 'Server object', meaning: 'The object that receives a message and provides the requested service.' },
      { term: 'Abstraction', meaning: 'Focusing on the important aspects of something while hiding unnecessary implementation details.' },
      { term: 'Encapsulation', meaning: 'Packaging data and the operations on that data together inside an object, while controlling access to its internal state.' },
      { term: 'Data Hiding', meaning: 'Restricting direct access to an object\'s internal data so changes only happen through controlled operations.' },
      { term: 'Inheritance', meaning: 'A relationship where one class (child) derives common attributes and behavior from another class (parent).' },
      { term: 'Polymorphism', meaning: 'The ability of the same operation or interface to produce different behavior depending on the actual object involved.' },
      { term: 'Cohesion', meaning: 'How closely related the responsibilities, methods, and data inside a single class are.' },
      { term: 'High Cohesion', meaning: 'A class with a clear, focused, single responsibility.' },
      { term: 'Coupling', meaning: 'The degree of dependency between different classes or modules.' },
      { term: 'Low (Loose) Coupling', meaning: 'Classes depend on abstractions or interfaces rather than on specific implementations, making the system easier to change.' },
    ],
    keyPoints: [
      'The typical SDLC order is Analysis, Design, Development, Testing, Deployment, then Maintenance, and it is usually iterative rather than strictly linear.',
      'Object Orientation organizes software as interacting objects, each bundling its own data and behavior.',
      'OOA asks what objects exist in the problem domain; OOD asks how software objects should work together; OOP asks how to implement that design in code.',
      'Traditional development separates functions and data; OO development keeps data and behavior together inside objects, which relates directly to encapsulation.',
      'Advantages of OO include simplicity, reusability, higher quality, faster development, maintainability, scalability, modularity, and modifiability.',
      'An object knows things (attributes / state) and does things (methods / behavior).',
      'A class is a blueprint; an object is an actual instance created from that class; an instance is simply another word for one particular object.',
      'Message passing has three steps: the sender sends a message, the receiver receives it, and the receiver executes the matching method, optionally returning a result.',
      'A message is made up of an object reference, a method name, and parameters.',
      'The message sender acts as the client; the message receiver acts as the server for that request.',
      'A method signature is the method name combined with its parameter list.',
      'The four pillars of OOP are Abstraction, Encapsulation, Inheritance, and Polymorphism.',
      'Abstraction hides unnecessary complexity and exposes only essential functionality (what something does, not how).',
      'Encapsulation packages data with the methods that operate on it and controls access to that data.',
      'Data hiding restricts direct access to internal data, forcing changes to go through controlled methods like deposit() or withdraw().',
      'Encapsulation is about protecting and packaging data; abstraction is about deciding what to expose and what complexity to hide.',
      'Inheritance lets a child/subclass reuse attributes and behavior from a parent/superclass, and works best for genuine "is-a" relationships.',
      'Modern OO design often favors composition over inheritance to avoid rigid class hierarchies.',
      'Polymorphism allows the same method call, such as calculateParkingFee() or pay(), to behave differently depending on the actual object type.',
      'Cohesion measures how related the responsibilities inside one class are; the goal is high cohesion (one clear purpose).',
      'Coupling measures how dependent classes are on each other; the goal is low coupling, often achieved by depending on interfaces rather than concrete classes.',
      'Directly creating a concrete class with new usually signals high coupling; depending on an interface passed into a constructor usually signals loose coupling.',
      'The overall goal of good OO design is High Cohesion + Low Coupling.',
    ],
  },
},

{
  id: 2,
  title: 'Object-Oriented Languages',
  content: `
    <span class="lesson-badge">LESSON 02</span>
    <h1>Object-Oriented Languages</h1>
    <div class="meta-info">ICT2152 <span>•</span> 18 min read <span></div>

    <h2>Learning Objectives</h2>
    <p>After finishing this lesson, you should be able to:</p>
    <ul>
      <li>Identify <strong>object-oriented languages</strong> and their features.</li>
      <li>Explain the <strong>limitations</strong> of object orientation.</li>
    </ul>

    <div class="divider"></div>

    <h2>Introduction</h2>
    <p>A number of <strong>OOP languages</strong> are available today, and there are differences between their capabilities and how closely they follow the OO paradigm.</p>
    <p>Common object-oriented languages include: <strong>Java</strong>, <strong>C++</strong>, <strong>C#</strong>, <strong>Python</strong>, <strong>Delphi</strong>, <strong>Objective-C</strong>, <strong>Ruby</strong>, <strong>PHP5</strong>, <strong>Perl</strong>, <strong>Eiffel</strong>, <strong>Ada</strong>, <strong>D</strong>, <strong>ActionScript</strong>, <strong>VB.NET</strong>, and several others.</p>

    <div class="divider"></div>

    <h2>Some Features of Object-Oriented Programming</h2>

    <h3>Strong Typing</h3>
    <p><strong>Strong typing</strong> is the degree of discipline that a language enforces on the programmer when declaring variables.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>"Every data value and object that is used must belong to an appropriate type for its context." Most modern languages are strongly typed.</p>
    </div>
    <pre><code>int x = "Hello"; // Compile-time error in Java</code></pre>
    <p>Strong typing has two main benefits:</p>
    <ul>
      <li>Prevents type mismatch errors</li>
      <li>Reduces runtime bugs</li>
    </ul>
    <p>Strong typing also applies to objects and inheritance, not just simple values. Consider this example:</p>
    <pre><code>class Vehicle {
    void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car starting");
    }
}

class Dog {
    void bark() {
        System.out.println("Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle();   // OK: Vehicle variable holds a Vehicle object
        v1.start();                   // Output: Vehicle starting

        Vehicle v2 = new Car();       // OK: Vehicle variable can hold a Car object (subclass)
        v2.start();                   // Output: Car starting

        Vehicle v3 = new Dog();       // Compile-time error: Dog is unrelated to Vehicle
    }
}</code></pre>
    <p>A <code>Vehicle</code> variable can hold a <code>Car</code> object because <code>Car</code> is a subclass of <code>Vehicle</code>, but it cannot hold a <code>Dog</code> object because <code>Dog</code> has no relationship to <code>Vehicle</code>. This is strong typing being enforced at compile time.</p>

    <h3>Static / Dynamic Typing</h3>
    <ul>
      <li><strong>Static typed</strong> — types are checked at compile time.</li>
      <li><strong>Dynamic typed</strong> — types are checked at run time.</li>
      <li>Some languages offer a <strong>hybrid</strong> approach.</li>
    </ul>
    <p>Examples of languages:</p>
    <ul>
      <li><strong>Static:</strong> Java, C++, C#</li>
      <li><strong>Dynamic:</strong> Python, Ruby, JavaScript</li>
      <li><strong>Hybrid:</strong> TypeScript, Kotlin</li>
    </ul>
    <pre><code>Typing     Advantages                                          Disadvantages
Static     Errors caught at compile time, better performance,  Less flexible, verbose code
           easier IDE support
Dynamic    Flexible, faster to write, less verbose             Errors occur at runtime, harder
                                                                 to debug, slower performance</code></pre>
    <p><strong>Static Typed (Java) — Verbose:</strong></p>
    <pre><code>String name = "Alice";                     // Must declare type
int age = 20;                              // Must declare type
Person p = new Person(name, age);          // Must declare exact type</code></pre>
    <p><strong>Dynamic Typed (Python) — Less Verbose:</strong></p>
    <pre><code>name = "Alice"          # No type declaration needed
age = 20
p = Person(name, age)</code></pre>

    <h3>Garbage Collection</h3>
    <p><strong>Garbage collection</strong> is important for memory management in systems that create and delete many objects during their execution. Objects are removed from memory once they are no longer needed — otherwise the system may run out of memory in which to execute.</p>
    <p>Example problem without garbage collection:</p>
    <pre><code>for (int i = 0; i < 100000; i++) {
    Person p = new Person("Name" + i); // many objects created
    // Without GC, old objects remain in memory → may run out of memory
}</code></pre>

    <h3>Types of Garbage Objects in Java</h3>
    <p><strong>Nullified Objects</strong> — the object becomes garbage once its reference is set to <code>null</code>:</p>
    <pre><code>Person p = new Person("Alice");
p = null; // "Alice" object is now garbage</code></pre>
    <p><strong>Out of Scope Objects</strong> — the object becomes garbage once its reference variable goes out of scope:</p>
    <pre><code>public void createPerson() {
    Person p = new Person("Bob");
} // p goes out of scope → "Bob" object is garbage</code></pre>
    <p><strong>Unreachable Objects via Reassignment</strong> — the object becomes garbage once its only reference is reassigned elsewhere:</p>
    <pre><code>Person p1 = new Person("Alice");
Person p2 = new Person("Bob");

p1 = p2; // "Alice" object is now unreachable → garbage</code></pre>

    <h3>Standardized Class Libraries</h3>
    <p>A <strong>standardized class library</strong> is a collection of predefined classes and interfaces provided by the language, so programmers can reuse tested code instead of writing everything from scratch.</p>
    <p>Key features:</p>
    <ul>
      <li>Cross-platform compatibility</li>
      <li>Pre-tested and reliable</li>
    </ul>

    <h3>Dynamic Loading</h3>
    <p><strong>Dynamic loading</strong> is the ability of a program to load classes or libraries into memory at runtime, rather than at compile time.</p>

    <div class="divider"></div>

    <h2>Limitations of Object Orientation</h2>
    <p>Object orientation is powerful, but it is not always the best fit for every kind of application.</p>

    <h3>Applications Which Are Not Ideally Suited to OO Development</h3>
    <p><strong>1. Systems that are strongly database oriented</strong></p>
    <ul>
      <li>Systems that have a record-based structure of data appropriate to a <strong>Relational Database Management System (RDBMS)</strong>.</li>
      <li>Systems whose main processing requirement centers on the storage and retrieval of data.</li>
    </ul>
    <p><strong>2. Applications that are strongly algorithmic in their operation</strong></p>
    <ul>
      <li>Some scientific applications that involve large and complex calculations may be neither desirable nor feasible to split into smaller parts.</li>
      <li>If such a system is implemented using OOP, there might end up being more objects, and they can become very complex.</li>
      <li>Example: <strong>satellite orbit calculations</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Exercise</h2>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>In what scenarios might Object-Oriented (OO) development not be the best choice, and what are the limitations or mismatches with the nature of the problem being solved that contribute to this?</p>
    </div>
  `,
  summary: {
    topic: 'Object-Oriented Languages: Features and Limitations',
    subTopics: [
      'Learning Objectives',
      'Introduction',
      'Some Features of Object-Oriented Programming',
      'Strong Typing',
      'Static and Dynamic Typing',
      'Garbage Collection',
      'Types of Garbage Objects in Java',
      'Standardized Class Libraries',
      'Dynamic Loading',
      'Limitations of Object Orientation',
      'Applications Which Are Not Ideally Suited to OO Development',
    ],
    definitions: [
      { term: 'Strong Typing', meaning: 'The degree of discipline a language enforces on the programmer when declaring variables; every data value and object must belong to an appropriate type for its context.' },
      { term: 'Static Typing', meaning: 'Variable types are checked at compile time, before the program runs.' },
      { term: 'Dynamic Typing', meaning: 'Variable types are checked at run time, while the program is executing.' },
      { term: 'Hybrid Typing', meaning: 'A language approach that combines elements of both static and dynamic typing, such as TypeScript or Kotlin.' },
      { term: 'Garbage Collection', meaning: 'The automatic process of removing objects from memory once they are no longer needed, freeing up space for the program to keep running.' },
      { term: 'Nullified Object', meaning: 'An object that becomes garbage because its reference variable has been set to null.' },
      { term: 'Out-of-Scope Object', meaning: 'An object that becomes garbage because its reference variable has gone out of scope.' },
      { term: 'Unreachable Object (via Reassignment)', meaning: 'An object that becomes garbage because its only reference variable has been reassigned to point to something else.' },
      { term: 'Standardized Class Library', meaning: 'A collection of predefined, reusable, pre-tested classes and interfaces provided by a programming language.' },
      { term: 'Dynamic Loading', meaning: 'The ability of a program to load classes or libraries into memory at runtime instead of at compile time.' },
    ],
    keyPoints: [
      'Many object-oriented languages exist today (Java, C++, C#, Python, Ruby, Delphi, and others), and they differ in how closely they follow the OO paradigm.',
      'Strong typing requires every value and object to belong to an appropriate type; this catches mismatches like int x = "Hello"; at compile time in Java.',
      'A superclass variable can hold a subclass object (Vehicle v2 = new Car();), but it cannot hold an unrelated class object (Vehicle v3 = new Dog(); fails to compile).',
      'Static typing checks types at compile time and is used by languages like Java, C++, and C#.',
      'Dynamic typing checks types at run time and is used by languages like Python, Ruby, and JavaScript.',
      'Hybrid languages such as TypeScript and Kotlin combine static and dynamic typing.',
      'Static typing catches errors early and performs better but is more verbose; dynamic typing is more flexible and concise but errors surface later, at runtime.',
      'Garbage collection automatically frees memory from objects that are no longer needed, which matters most in systems that create and delete many objects.',
      'An object can become garbage in three main ways: being nullified, going out of scope, or becoming unreachable after its reference is reassigned.',
      'Standardized class libraries let programmers reuse pre-tested, cross-platform code instead of writing everything from scratch.',
      'Dynamic loading allows classes or libraries to be loaded into memory at runtime rather than compile time.',
      'OO development is not ideally suited to strongly database-oriented systems, where data is record-based and best handled by an RDBMS.',
      'OO development is also not ideally suited to strongly algorithmic applications, such as satellite orbit calculations, where splitting the logic into many objects can add unnecessary complexity.',
    ],
  },
},


{
  id: 3,
  title: 'Modelling Concepts and UML',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Modelling Concepts and UML</h1>
    <div class="meta-info">Week 3 <span>•</span> 26 min read</div>

    <h2>What Is a Model?</h2>
    <p>A <strong>model</strong> is a simplified, abstract representation of a system. It leaves out unnecessary detail and focuses on the important parts.</p>
    <p>Models are needed because <strong>software systems are complex</strong>. A model helps us to:</p>
    <ul>
      <li><strong>Simplify</strong> the complexity of a system</li>
      <li><strong>Understand</strong> how the system works</li>
      <li><strong>Communicate</strong> ideas clearly with others</li>
      <li><strong>Manage</strong> that complexity as the system grows</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A model is a <strong>simplified representation of a real-world system</strong>. It shows the key elements in the system and how they are related — without going into implementation detail.</p>
    </div>

    <div class="divider"></div>

    <h2>What Is a Diagram?</h2>
    <p>A <strong>diagram</strong> is a particular view of a model. While a model represents the <strong>whole system</strong> with all its important elements and relationships, a diagram shows <strong>only one part or aspect</strong> of that model.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Model = the whole blueprint.</strong> It represents the entire system.<br><strong>Diagram = one view of that model.</strong> It shows only a selected part.</p>
    </div>

    <h3>An Everyday Example: A House</h3>
    <p>Think about a house. The <strong>model</strong> is the complete idea or representation of the house — it tells us about its rooms, the relationships between rooms, doors, windows, structure, and how everything is organized.</p>
    <p>A <strong>diagram</strong> is one visual way of showing part of that model. For example:</p>
    <ul>
      <li><strong>Floor plan</strong> → shows how the rooms are arranged</li>
      <li><strong>Electrical diagram</strong> → shows the electrical connections</li>
      <li><strong>Plumbing diagram</strong> → shows the water connections</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Model = WHAT</strong> we are representing.<br><strong>Diagram = HOW</strong> we represent or show it.</p>
    </div>

    <h3>The Same Idea in Software Engineering</h3>
    <p>Suppose we are developing a <strong>Library System</strong>. The <strong>model</strong> represents the system's important concepts and relationships:</p>
    <pre><code>Student   -- borrows -->   Book
Librarian -- manages -->  Book
Book      -- belongs to --> Library</code></pre>
    <p>We can represent different parts of that same model using different diagrams:</p>
    <ul>
      <li><strong>Class Diagram</strong> → shows classes and their relationships</li>
      <li><strong>Use Case Diagram</strong> → shows actors and their interactions with the system</li>
      <li><strong>Sequence Diagram</strong> → shows how objects interact over time</li>
    </ul>
    <pre><code>Model
  |
  |  can be represented using
  v
Diagrams</code></pre>

    <div class="divider"></div>

    <h2>A Worked Example: Model vs Diagram</h2>
    <p>Here is a fuller example based on a <strong>Library Management System</strong>, showing the difference between a complete model and a single diagram drawn from it.</p>

    <h3>The Full Model</h3>
    <p>The model below represents the <strong>entire system</strong> with its important classes, attributes, and relationships:</p>
    <pre><code>Member (Student)              Loan                       Book
- memberId          1     *   - loanId          *     1   - bookId
- name        -- borrows -->  - issueDate  -- for -->     - title
- address                     - dueDate                   - author
- email                       - returnDate                - isbn
- phone                                                    - category
                                                               |
                                                          1    | has
                                                               v  *
Library                                                    Book Copy
- libraryId  -- managed by (1..*) --> Member                - copyId
- name       -- managed by (1..*) --> Book Copy              - barcode
- location                                                    - status</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Explanation:</strong> A member borrows books through a loan. Each book can have many copies. The library manages members and book copies.</p>
    </div>

    <h3>An Extended Model</h3>
    <p>A model can grow to include more classes and relationships as the system is understood in more detail — for example, adding <strong>Librarian</strong> and <strong>Fine</strong>:</p>
    <pre><code>Librarian                Loan               Book Copy            Book
- librarianId  -- processes --> (Loan)  -- for --> (Book Copy) -- of --> (Book)
- name         -- works in --> Library
- phone

Library                 Fine
- libraryId  -- owns --> - fineId
- name                   - amount
- location               - paymentDate

Book Copy -- may have --> Fine</code></pre>

    <h3>One Diagram Drawn From the Model</h3>
    <p>A diagram then shows just <strong>one selected view</strong>. For example, a "Loans" Class Diagram might only include:</p>
    <pre><code>Member                Loan                  Book Copy
- memberId    1   *   - loanId       *   1   - copyId
- name  -- borrows --> - issueDate -- for --> - barcode
- email                - dueDate                - status
                       - returnDate</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <ul>
        <li><strong>A model shows:</strong> all major elements, all important relationships, and the complete structure of the system.</li>
        <li><strong>A diagram shows:</strong> only selected elements, only the relationships relevant to that view, and one specific perspective of the model.</li>
      </ul>
    </div>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Think of it like this: <strong>Model = the complete building blueprint.</strong> <strong>Diagram = one floor plan from that blueprint.</strong></p>
    </div>

    <div class="divider"></div>

    <h2>Purpose of Diagrams</h2>
    <ul>
      <li>Communicate ideas</li>
      <li>Understand structure and relationships</li>
      <li>Test ideas</li>
      <li>Generate new ideas</li>
    </ul>

    <div class="divider"></div>

    <h2>General Rules of Modeling</h2>
    <ul>
      <li><strong>Simplicity</strong> — keep the model as simple as possible while still being useful.</li>
      <li><strong>Consistency</strong> — the model should not contradict itself.</li>
      <li><strong>Completeness</strong> — the model should include everything important.</li>
      <li><strong>Hierarchical representation</strong> — complex systems should be organized into layers or levels.</li>
    </ul>

    <div class="divider"></div>

    <h2>What Is UML?</h2>
    <p><strong>UML</strong> stands for <strong>Unified Modeling Language</strong>.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>UML is a <strong>standard language</strong> used for <strong>specifying, visualizing, constructing, and documenting</strong> software systems.</p>
    </div>

    <div class="divider"></div>

    <h2>UML Basics</h2>
    <h3>Types of UML Diagrams</h3>
    <ul>
      <li><strong>Structure diagrams</strong></li>
      <li><strong>Behavior diagrams</strong></li>
    </ul>

    <h3>Three UML Building Blocks</h3>
    <ul>
      <li><strong>Things</strong> — the basic elements being modeled (such as classes and objects)</li>
      <li><strong>Relationships</strong> — how those elements connect to each other</li>
      <li><strong>Diagrams</strong> — the visual views built from things and relationships</li>
    </ul>

    <div class="divider"></div>

    <h2>UML Diagram Types</h2>
    <p>UML diagrams can be grouped into two broad categories.</p>

    <h3>1. Structural Diagrams</h3>
    <p>Show <strong>what the system is made of</strong> — its structure, components, and relationships.</p>
    <ul>
      <li><strong>Class Diagram</strong> → classes, attributes, methods, relationships</li>
      <li><strong>Object Diagram</strong> → objects and their relationships at a particular time</li>
      <li><strong>Component Diagram</strong> → software components and their dependencies</li>
      <li><strong>Deployment Diagram</strong> → hardware/devices and where software components are deployed</li>
    </ul>

    <h3>2. Behavioral Diagrams</h3>
    <p>Show <strong>how the system behaves or works</strong>.</p>
    <ul>
      <li><strong>Use Case Diagram</strong> → actors and their goals/interactions</li>
      <li><strong>Sequence Diagram</strong> → order of interactions between objects</li>
      <li><strong>Activity Diagram</strong> → workflow/process of activities</li>
      <li><strong>State Machine Diagram</strong> → how an object changes from one state to another</li>
    </ul>

    <div class="divider"></div>

    <h2>Case Studies</h2>
    <p>Use these case studies to practice identifying a model and choosing the right diagram for it.</p>

    <h3>Case Study 1 — University Library</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Scenario</span>
      <p>A university library system keeps information about <strong>Students, Books, Librarians and Loans</strong>. A student can borrow several books. Each book can be borrowed by different students at different times. Librarians manage books and loans.</p>
    </div>
    <p><strong>Students identify:</strong></p>
    <ol>
      <li>What is the model?</li>
      <li>What important things should the model contain?</li>
      <li>Which diagram could represent the model?</li>
      <li>What information would that diagram show?</li>
    </ol>
    <p><strong>Answer:</strong></p>
    <ol>
      <li><strong>Model:</strong> A model of the University Library System, including students, books, librarians, loans, and their relationships.</li>
      <li><strong>Important things:</strong> Student, Book, Librarian, Loan, "Student borrows Book", "Librarian manages Book/Loan".</li>
      <li><strong>Suitable diagram:</strong> Class Diagram.</li>
      <li><strong>What it shows:</strong> The classes, their attributes/methods, and the relationships between them.</li>
    </ol>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Use a Class Diagram when you want to show the <strong>structure</strong> of a system.</p>
    </div>

    <h3>Case Study 2 — Online Shopping</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Scenario</span>
      <p>An online shopping system allows customers to <strong>browse products, add products to a cart, place orders and make payments</strong>. Administrators manage products and orders. A payment gateway is an external system.</p>
    </div>
    <p><strong>Students identify:</strong></p>
    <ol>
      <li>What aspects of the system need to be modeled?</li>
      <li>What is the model?</li>
      <li>Which diagram could represent the system's structure, user interactions, and the sequence of interactions?</li>
      <li>Explain why each diagram is suitable.</li>
    </ol>
    <p><strong>Answer:</strong></p>
    <ol>
      <li><strong>Aspects to model:</strong> Customers, Products, Shopping Cart, Orders, Payments, Administrator, Payment Gateway, and the interactions between these entities.</li>
      <li><strong>Model:</strong> A model of the Online Shopping System, representing its structure and behavior.</li>
      <li><strong>Suitable diagrams:</strong>
        <pre>What we want to show                Diagram
-----------------------------------------------------------
System structure                    Class Diagram
User interactions                   Use Case Diagram
Order/payment interaction sequence  Sequence Diagram</pre>
      </li>
      <li><strong>Why:</strong> Each diagram provides a different view of the same system model.</li>
    </ol>

    <h3>Case Study 3 — Hospital Appointment System</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Scenario</span>
      <p>A hospital system contains <strong>Patients, Doctors and Appointments</strong>. Patients can search for doctors and book appointments. Doctors can view their appointments. An appointment has a date, time, and status.</p>
    </div>
    <p><strong>Students identify:</strong></p>
    <ol>
      <li>What is being modeled?</li>
      <li>What are the important concepts/entities in the model?</li>
      <li>Which diagram would best represent the relationships between these concepts?</li>
      <li>What would the diagram show?</li>
    </ol>
    <p><strong>Answer:</strong></p>
    <ol>
      <li><strong>What is modeled:</strong> The hospital appointment system, including patients, doctors, appointments, and their relationships.</li>
      <li><strong>Important concepts:</strong> Patient, Doctor, Appointment, Date, Time, Status.</li>
      <li><strong>Best diagram:</strong> Class Diagram.</li>
      <li><strong>What it shows:</strong> The structure of the system and relationships such as:
        <pre>Patient  -- books -->  Appointment
Doctor   -- has -->    Appointments</pre>
      </li>
    </ol>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Use a Class Diagram when you want to show <strong>what the system is made of and how its elements are related</strong>.</p>
    </div>

    <h3>Case Study 4 — ATM System</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Scenario</span>
      <p>An ATM allows a customer to <strong>insert a card, enter a PIN, check balance, withdraw money and receive a receipt</strong>. The ATM communicates with the bank system.</p>
    </div>
    <p><strong>Students identify:</strong></p>
    <ol>
      <li>What is the system model?</li>
      <li>Who/what interacts with the system?</li>
      <li>Which diagram would show actors and their goals/interactions?</li>
      <li>Which diagram would show the sequence of interactions during cash withdrawal?</li>
    </ol>
    <p><strong>Answer:</strong></p>
    <ol>
      <li><strong>Model:</strong> A model of the ATM system, including customers, the ATM, the bank system, transactions, and their interactions.</li>
      <li><strong>Who/what interacts with the system:</strong> Customer, Bank System.</li>
      <li><strong>Diagram for actors and goals:</strong> Use Case Diagram. For example:
        <pre>Customer --> Withdraw Cash
Customer --> Check Balance
Customer --> Change PIN</pre>
      </li>
      <li><strong>Diagram for sequence of interactions:</strong> Sequence Diagram. For example:
        <pre>Customer -> ATM -> Bank System -> ATM -> Customer</pre>
        It shows the <strong>order in which the interactions happen</strong>.
      </li>
    </ol>

    <h3>Case Study 5 — Food Delivery System</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Scenario</span>
      <p>A food delivery system involves <strong>Customers, Restaurants, Delivery Drivers and Orders</strong>. A customer places an order from a restaurant. The restaurant accepts the order and prepares the food. A delivery driver collects and delivers it.</p>
    </div>
    <p><strong>Students identify:</strong></p>
    <ol>
      <li>What important aspects of the system should be included in the model?</li>
      <li>Which diagram would represent the structural relationships?</li>
      <li>Which diagram would represent the interaction sequence?</li>
      <li>Which diagram would represent customer interactions with the system?</li>
    </ol>
    <p><strong>Answer:</strong></p>
    <ol>
      <li><strong>Aspects to include:</strong> Customer, Restaurant, Delivery Driver, Order, Payment, Delivery, and the relationships between them.</li>
      <li><strong>Structural relationships:</strong> Class Diagram. For example:
        <pre>Customer   -- places -->   Order
Restaurant -- prepares --> Order
Driver     -- delivers --> Order</pre>
      </li>
      <li><strong>Interaction sequence:</strong> Sequence Diagram. For example:
        <pre>Customer -> Restaurant -> Order System -> Driver</pre>
        It shows how the participants communicate step-by-step.
      </li>
      <li><strong>Customer interactions with the system:</strong> Use Case Diagram. For example:
        <pre>Customer --> Browse Restaurants
Customer --> Place Order
Customer --> Make Payment
Customer --> Track Delivery</pre>
      </li>
    </ol>
  `,
  summary: {
    topic: 'Modelling Concepts and the Unified Modeling Language (UML)',
    subTopics: [
      'What is a Model?',
      'What is a Diagram?',
      'A Worked Example: Model vs Diagram',
      'Purpose of Diagrams',
      'General Rules of Modeling',
      'What is UML?',
      'UML Basics',
      'UML Diagram Types',
      'Case Study 1 — University Library',
      'Case Study 2 — Online Shopping',
      'Case Study 3 — Hospital Appointment System',
      'Case Study 4 — ATM System',
      'Case Study 5 — Food Delivery System',
    ],
    definitions: [
      { term: 'Model', meaning: 'A simplified, abstract representation of a system that shows its important elements and relationships, without implementation detail.' },
      { term: 'Diagram', meaning: 'A particular view of a model; it shows only a selected part or aspect of the model, not the whole system.' },
      { term: 'UML (Unified Modeling Language)', meaning: 'A standard language for specifying, visualizing, constructing, and documenting software systems.' },
      { term: 'Structural Diagram', meaning: 'A type of UML diagram that shows what a system is made of — its structure, components, and relationships.' },
      { term: 'Behavioral Diagram', meaning: 'A type of UML diagram that shows how a system behaves or works.' },
      { term: 'Class Diagram', meaning: 'A structural diagram showing classes, their attributes, methods, and relationships.' },
      { term: 'Object Diagram', meaning: 'A structural diagram showing objects and their relationships at a particular point in time.' },
      { term: 'Component Diagram', meaning: 'A structural diagram showing software components and their dependencies.' },
      { term: 'Deployment Diagram', meaning: 'A structural diagram showing hardware/devices and where software components are deployed.' },
      { term: 'Use Case Diagram', meaning: 'A behavioral diagram showing actors and their goals or interactions with a system.' },
      { term: 'Sequence Diagram', meaning: 'A behavioral diagram showing the order of interactions between objects over time.' },
      { term: 'Activity Diagram', meaning: 'A behavioral diagram showing the workflow or process of activities.' },
      { term: 'State Machine Diagram', meaning: 'A behavioral diagram showing how an object changes from one state to another.' },
      { term: 'Things (UML building block)', meaning: 'The basic elements being modeled in UML, such as classes and objects.' },
      { term: 'Relationships (UML building block)', meaning: 'The connections that show how UML elements relate to and interact with each other.' },
    ],
    keyPoints: [
      'A model is a simplified representation of a system; a diagram is one particular view of that model.',
      'Models are needed because software systems are complex, and models help simplify, understand, communicate, and manage that complexity.',
      'The purpose of diagrams includes communicating ideas, understanding structure and relationships, testing ideas, and generating new ideas.',
      'The general rules of modeling are simplicity, consistency, completeness, and hierarchical representation.',
      'UML stands for Unified Modeling Language, a standard language for specifying, visualizing, constructing, and documenting software systems.',
      'UML diagrams are grouped into Structural diagrams (what the system is made of) and Behavioral diagrams (how the system behaves).',
      'The three UML building blocks are Things, Relationships, and Diagrams.',
      'Class Diagrams show system structure, Use Case Diagrams show actor interactions, and Sequence Diagrams show the order of interactions over time.',
      'The same system model can be represented using several different diagrams, each giving a different view of the same model.',
      'Across the case studies, a Class Diagram is used to show structure, a Use Case Diagram to show actor interactions, and a Sequence Diagram to show the order of interactions.',
    ],
  },
},

]