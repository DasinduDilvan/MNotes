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

{
  id: 4,
  title: 'Use Case Modeling',
  content: `
    <span class="lesson-badge">LESSON 04</span>
    <h1>Use Case Modeling</h1>
    <div class="meta-info">COURSE_CODE <span>•</span> 20 min read</div>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>By the end of this lesson, you should be able to:</p>
      <ul>
        <li>Define <strong>use case modeling</strong></li>
        <li>Tell apart <strong>functional</strong> and <strong>non-functional requirements</strong></li>
        <li>Define <strong>actor</strong>, <strong>scenario</strong>, <strong>use case</strong>, and <strong>system boundary</strong></li>
        <li>Identify <strong>primary</strong>, <strong>supporting</strong>, and <strong>offstage actors</strong></li>
        <li>Identify <strong>actors and their goals</strong> from a given scenario</li>
        <li>Turn <strong>user goals into use cases</strong></li>
        <li>Name a use case correctly using <strong>verb + object</strong></li>
        <li>Tell apart the <strong>main success scenario</strong> and its <strong>extensions</strong></li>
        <li>Explain the <strong>Brief</strong>, <strong>Casual</strong>, and <strong>Fully Dressed</strong> formats</li>
        <li>Write a <strong>fully dressed use case</strong> from a given scenario</li>
        <li>Identify <strong>Summary</strong>, <strong>User Goal</strong>, and <strong>Sub-function</strong> levels</li>
      </ul>
    </div>

    <div class="divider"></div>

    <h2>What is Use Case Modeling?</h2>
    <p><strong>Use Case Modeling</strong> is a <strong>requirements engineering technique</strong> used to identify, collect, and document the <strong>functional requirements</strong> of a system.</p>
    <p>It describes <strong>how users interact with a system to reach their goals</strong>.</p>
    <ul>
      <li>Focuses on <strong>user goals and interactions</strong></li>
      <li>Describes the system from the <strong>user's point of view</strong></li>
      <li>Use cases are mainly <strong>written descriptions</strong>, not diagrams</li>
      <li>A <strong>Use Case Diagram</strong> in UML visually shows actors, use cases, and how they relate</li>
    </ul>

    <h3>Functional vs Non-Functional Requirements</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Functional Requirement</strong> — a statement of <strong>what the system should do</strong>.</p>
      <p>Example: Validate ATM card. Validate PIN. Dispense cash.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Non-Functional Requirement</strong> — a <strong>constraint on how the system should operate or be built</strong>.</p>
      <p>Example: Validate PIN within 3 seconds. Use encryption. Use a specific programming language.</p>
    </div>

    <div class="divider"></div>

    <h2>What is a Use Case?</h2>
    <p>A <strong>use case is a story describing how an actor uses a system to achieve a goal</strong>.</p>
    <p><strong>Example: ATM</strong></p>
    <p><strong>Actor:</strong> Customer &nbsp; <strong>Goal:</strong> Withdraw money</p>
    <p>The customer:</p>
    <ol>
      <li>Inserts the ATM card</li>
      <li>Enters the PIN</li>
      <li>Selects "Withdraw Cash"</li>
      <li>Enters the amount</li>
      <li>System checks the account</li>
      <li>System dispenses cash</li>
    </ol>
    <p>This whole interaction represents the use case <strong>Withdraw Cash</strong>.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A use case is really a <strong>collection of different scenarios</strong> — both successful and unsuccessful ones.</p>
    </div>

    <h3>Use Case vs Scenario</h3>
    <ul>
      <li><strong>Use Case</strong> — a general goal or process</li>
      <li><strong>Scenario</strong> — one specific path through that use case</li>
    </ul>
    <p><strong>Example — Use Case: Withdraw Cash</strong></p>
    <ul>
      <li><strong>Scenario 1 — Successful withdrawal:</strong> Customer enters the correct PIN and withdraws Rs. 10,000</li>
      <li><strong>Scenario 2 — Wrong PIN:</strong> Customer enters an incorrect PIN</li>
      <li><strong>Scenario 3 — Insufficient balance:</strong> Customer requests Rs. 50,000 but has only Rs. 20,000</li>
      <li><strong>Scenario 4 — Daily limit exceeded:</strong> Customer has already withdrawn the maximum allowed amount</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Use Case = a collection of related scenarios.</strong></p>
    </div>

    <div class="divider"></div>

    <h2>Functional Requirement vs Use Case</h2>
    <p><strong>Functional Requirement</strong> describes <strong>what the system should do</strong>.</p>
    <pre><code>The ATM shall validate the customer's PIN.
The ATM shall dispense cash.
The ATM shall display the account balance.</code></pre>
    <p><strong>Use Case</strong> describes <strong>how an actor interacts with the system to achieve a goal</strong>.</p>
    <pre><code>Use Case: Withdraw Cash

Customer  -> Insert card
Customer  -> Enter PIN
System    -> Validate PIN
Customer  -> Enter amount
System    -> Check balance
System    -> Dispense cash</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Functional requirement</strong> = what the system does. <strong>Use case</strong> = how the actor uses the system to achieve a goal.</p>
    </div>

    <h3>Non-Functional Requirement (Revisited)</h3>
    <p>A non-functional requirement describes a <strong>constraint or quality requirement</strong>.</p>
    <p>Example for an ATM:</p>
    <ul>
      <li><strong>Functional:</strong> The ATM shall validate the PIN.</li>
      <li><strong>Non-functional:</strong> The ATM shall validate the PIN within 3 seconds.</li>
    </ul>
    <p>Other examples:</p>
    <ul>
      <li>Communication must use encryption</li>
      <li>System should be available 99.9% of the time</li>
      <li>Passwords must be securely stored</li>
      <li>The system should respond within 2 seconds</li>
    </ul>

    <div class="divider"></div>

    <h2>Actor</h2>
    <p>An <strong>actor interacts with the system to achieve a goal</strong>. An actor can be:</p>
    <ul>
      <li>A person</li>
      <li>An organization</li>
      <li>Another computer system</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>An actor is identified by its <strong>role</strong>, not necessarily its name.</p>
    </div>
    <p><strong>Example: University Library System</strong></p>
    <p>Possible actors: Student, Librarian, Payment System, University Authentication System.</p>
    <p>Not "Kamal" — instead, <strong>Student</strong>, because many different students can perform the same role.</p>

    <h3>Primary Actor</h3>
    <p>The <strong>primary actor has a goal that is fulfilled by using the system</strong>.</p>
    <p><strong>Example: Online Shopping System</strong> — <strong>Primary actor:</strong> Customer &nbsp; <strong>Goal:</strong> Purchase Product</p>
    <p>The customer directly uses the system to achieve the goal.</p>
    <pre><code>System              Primary Actor     Goal
------------------  ----------------  -------------------
ATM                 Customer          Withdraw Cash
Library             Student           Borrow Book
Hospital            Patient           Book Appointment
Online Shopping     Customer          Place Order
University System   Student           Register Course</code></pre>

    <h3>Supporting Actor</h3>
    <p>A <strong>supporting actor provides a service to the system</strong>.</p>
    <p><strong>Example: Online Shopping</strong> — the customer places an order, and the shopping system needs payment authorization.</p>
    <p><strong>Primary Actor:</strong> Customer &nbsp; <strong>Supporting Actor:</strong> Bank / Payment Gateway</p>
    <pre><code>Customer
   |
   v
Online Shopping System
   |
   v
Payment Gateway</code></pre>
    <p>The payment gateway is not using the shopping system to achieve its own goal — instead, it <strong>provides a service to the system</strong>.</p>

    <h3>Offstage Actor</h3>
    <p>An offstage actor <strong>has an interest in the system's behavior but does not directly take part in the interaction</strong>.</p>
    <p><strong>Example: Online Shopping</strong> — suppose the shopping system calculates and reports sales tax.</p>
    <ul>
      <li><strong>Customer</strong> → Primary actor</li>
      <li><strong>Payment Gateway</strong> → Supporting actor</li>
      <li><strong>Tax Authority</strong> → Offstage actor</li>
    </ul>
    <p>The tax authority may care whether the correct tax is calculated, even though it never directly interacts with the system during the purchase.</p>

    <div class="divider"></div>

    <h2>Actor Types in Practice</h2>
    <p><strong>Example: Restaurant Ordering System</strong> — a customer orders food using a restaurant POS system.</p>
    <pre><code>Actor              Type          Why?
-----------------  ------------  ------------------------------------
Customer           Primary       Wants to place an order
Cashier            Primary       Processes the order
Payment Gateway    Supporting    Authorizes payment
Kitchen System     Supporting    Receives order information
Tax Authority      Offstage      Has an interest in tax calculation</code></pre>

    <h3>Case Study: Online University Course Registration System</h3>
    <p>Students use the system to view available courses, register for courses, drop courses, and view their registered courses. <strong>Academic Staff</strong> use the system to manage course information and approve special course-registration requests.</p>
    <p>The system connects with the <strong>University Payment System</strong> to verify payments for courses that require fees, and with the <strong>University Student Information System</strong> to retrieve student information and academic records. The <strong>University Academic Administration</strong> cares about registration following university rules and records staying accurate, but does not directly use the system.</p>
    <pre><code>Actor                        Type              Reason
---------------------------  ----------------  -------------------------------------------
Student                      Primary Actor     Uses the system to register/drop courses
                                                and view courses
Academic Staff                Primary Actor     Manages courses and handles registration
                                                requests
University Payment System     Supporting Actor  Provides payment verification services
Student Information System    Supporting Actor  Provides student and academic information
Academic Administration       Offstage Actor    Has an interest in correct registration and
                                                university rules
University Management         Offstage Actor    Has an interest in registration reports and
                                                academic planning</code></pre>

    <h3>Case Study: Hospital Appointment and Prescription System</h3>
    <p>Patients search for doctors, book appointments, cancel appointments, and view their appointment history. <strong>Doctors</strong> use the system to view their appointments and issue electronic prescriptions.</p>
    <p>The system talks to the <strong>Hospital Payment System</strong> to process appointment payments, and to an <strong>SMS Notification Service</strong> to send appointment reminders. The <strong>Hospital Administration</strong> cares about appointments being properly managed and hospital policies being followed. The <strong>Ministry of Health</strong> cares about prescription and patient-service activities following healthcare regulations — but neither directly uses the system.</p>
    <pre><code>Actor                      Type              Reason
-------------------------  ----------------  -------------------------------------------
Patient                    Primary Actor     Books/cancels appointments and views
                                              appointment information
Doctor                     Primary Actor     Manages appointments and issues prescriptions
Hospital Payment System    Supporting Actor  Processes appointment payments
SMS Notification Service   Supporting Actor  Sends appointment reminders
Hospital Administration    Offstage Actor    Has an interest in proper appointment
                                              management and policies
Ministry of Health         Offstage Actor    Has an interest in regulatory compliance</code></pre>

    <div class="divider"></div>

    <h2>System Boundary</h2>
    <p>The <strong>system boundary defines what is inside the system and what is outside it</strong>.</p>
    <p><strong>Example: Online Shopping System</strong></p>
    <p><strong>Inside the boundary</strong> (the Online Shopping System): Search Products, Place Order, Make Payment, Track Order.</p>
    <p><strong>Outside the boundary:</strong> Customer, Payment Gateway, Delivery Company.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The <strong>actor is outside</strong> the system boundary. The <strong>use cases are inside</strong> the system boundary.</p>
    </div>

    <h3>Actor-Goal List</h3>
    <p>After identifying actors, work out what each actor wants to achieve.</p>
    <p><strong>Example: University Library System</strong></p>
    <pre><code>Actor            Goals
---------------  --------------------
Student          Search Books
Student          Borrow Books
Student          Return Books
Student          View Borrowed Books
Librarian        Add Book
Librarian        Remove Book
Librarian        Update Book
Payment System   Process Fine Payment</code></pre>
    <p>It's recommended to record primary actors and their user goals in an <strong>actor-goal list</strong>.</p>

    <h3>How to Identify Actors</h3>
    <p>Ask yourself:</p>
    <ul>
      <li><strong>Who directly uses the system?</strong> — e.g. Student</li>
      <li><strong>Who has different roles or permissions?</strong> — e.g. Student, Librarian, Administrator</li>
      <li><strong>Who interacts with the system during errors?</strong> — e.g. Customer Service Officer</li>
      <li><strong>Who provides a service to the system?</strong> — e.g. Payment Gateway</li>
      <li><strong>Who is affected by the system's results?</strong> — e.g. Tax Authority</li>
    </ul>
    <p>These questions line up directly with the actor types covered above.</p>

    <div class="divider"></div>

    <h2>One Use Case for Each User Goal</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The basic rule: <strong>one user goal → one use case.</strong></p>
    </div>
    <p><strong>Example — Student goals:</strong> Search Book, Borrow Book, Return Book, View Borrowed Books.</p>
    <pre><code>Student
  |
  +---- Search Book
  |
  +---- Borrow Book
  |
  +---- Return Book
  |
  +---- View Borrowed Books</code></pre>

    <h3>Exception: CRUD</h3>
    <p>Sometimes several goals can be combined. <strong>CRUD</strong> means <strong>Create, Read, Update, Delete</strong>.</p>
    <p>Instead of: Create User, View User, Update User, Delete User — we can use one use case: <strong>Manage Users</strong>.</p>

    <div class="divider"></div>

    <h2>Naming a Use Case</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Use <strong>Verb + Object</strong>.</p>
    </div>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Good names: <strong>Purchase Concert Ticket</strong>, <strong>Borrow Book</strong>, <strong>Search Book</strong>, <strong>Place Order</strong>, <strong>Register Course</strong>.</p>
    </div>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Avoid: Ticket Purchase, Ticket Order, Purchase, Pay — these are written as Object + Verb, or leave out the object entirely.</p>
    </div>
    <p>Why does this matter? A use case name should:</p>
    <ul>
      <li>Represent one clear goal</li>
      <li>Be written from the actor's point of view</li>
      <li>Use active voice</li>
      <li>Usually take the verb–object form</li>
    </ul>

    <div class="divider"></div>

    <h2>Main Success Scenario</h2>
    <p>This is <strong>what happens when everything goes correctly</strong>.</p>
    <p><strong>Example: Borrow Book</strong></p>
    <ol>
      <li>Student searches for a book</li>
      <li>System displays available books</li>
      <li>Student selects a book</li>
      <li>System checks availability</li>
      <li>System records the borrowing</li>
      <li>System displays the due date</li>
    </ol>
    <p>That's the <strong>normal, successful path</strong>.</p>

    <h3>Alternate / Failure Scenarios (Extensions)</h3>
    <p>This covers <strong>what can go wrong</strong>. For <strong>Borrow Book</strong>:</p>
    <ul>
      <li><strong>Extension 1 — Book unavailable:</strong> Student selects a book → system finds it's unavailable → system displays "Book currently unavailable."</li>
      <li><strong>Extension 2 — Student has unpaid fine:</strong> System checks the student's account → an unpaid fine exists → system prevents borrowing.</li>
      <li><strong>Extension 3 — Student has reached borrowing limit:</strong> System informs the student that the borrowing limit has been reached.</li>
    </ul>

    <div class="divider"></div>

    <h2>Use Case Formats</h2>
    <p>There are three formats:</p>
    <ul>
      <li><strong>Brief</strong> — a very short summary</li>
      <li><strong>Casual</strong> — an informal description covering several scenarios</li>
      <li><strong>Fully Dressed</strong> — a detailed, structured description with steps, variations, and supporting information</li>
    </ul>

    <h3>Brief Use Case Example</h3>
    <p><strong>Use Case: Borrow Book</strong></p>
    <p>A student searches for a book, selects an available book, and borrows it. The system records the borrowing and displays the due date.</p>
    <p>Very short — useful for simple, well-understood functionality.</p>

    <h3>Casual Use Case Example</h3>
    <p><strong>Use Case: Handle Return</strong></p>
    <p>A customer arrives at the checkout with items to return. The cashier records the returned items using the POS system. If the refund is approved, the system processes the refund. If the refund is rejected, the cashier uses another refund method. If the item cannot be identified, the system asks the cashier to enter the item code manually.</p>
    <p>More detailed than Brief, but still written as normal paragraphs.</p>

    <div class="divider"></div>

    <h2>Fully Dressed Use Case</h2>
    <p>This is the <strong>most important format</strong>. A fully dressed use case gives structured details such as:</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <ul>
        <li><strong>Use Case Name</strong></li>
        <li><strong>Primary Actor</strong></li>
        <li><strong>Stakeholders and Interests</strong></li>
        <li><strong>Preconditions</strong></li>
        <li><strong>Main Success Scenario</strong></li>
        <li><strong>Extensions</strong></li>
        <li><strong>Postconditions / Success Guarantees</strong></li>
      </ul>
    </div>

    <h3>Fully Dressed Example — Online Library</h3>
    <p><strong>Use Case: Search Book</strong></p>
    <p><strong>Primary Actor:</strong> Student</p>
    <p><strong>Precondition</strong></p>
    <ul>
      <li>Student is logged in</li>
      <li>Books are registered in the system</li>
    </ul>
    <p><strong>Main Success Scenario</strong></p>
    <ol>
      <li>Student enters book name, author name, or ISBN</li>
      <li>Student selects <strong>Search</strong></li>
      <li>System validates the search details</li>
      <li>System searches for matching books</li>
      <li>System displays book details</li>
    </ol>
    <p><strong>Extensions</strong></p>
    <p><strong>3a. Invalid search details</strong></p>
    <ol>
      <li>System detects invalid parameters</li>
      <li>System displays: "Please enter valid details."</li>
    </ol>
    <p><strong>4a. Book not found</strong></p>
    <ol>
      <li>System cannot find a matching book</li>
      <li>System displays: "No search results to show."</li>
    </ol>

    <div class="divider"></div>

    <h2>Preconditions</h2>
    <p>A <strong>precondition</strong> is something that must already be true <strong>before the use case starts</strong>.</p>
    <ul>
      <li><strong>Borrow Book:</strong> Student is logged in; book exists in the library system</li>
      <li><strong>Withdraw Cash:</strong> ATM is operational; customer has inserted a valid card</li>
      <li><strong>Place Order:</strong> Customer is logged in; products are available</li>
    </ul>

    <h3>Postconditions</h3>
    <p>A <strong>postcondition</strong> describes what should be true <strong>after the use case finishes</strong>.</p>
    <p><strong>Borrow Book</strong> — after successful completion:</p>
    <ul>
      <li>Book is marked as borrowed</li>
      <li>Student's borrowed-book list is updated</li>
      <li>Due date is recorded</li>
    </ul>
    <p><strong>Place Order</strong> — after successful completion:</p>
    <ul>
      <li>Order is created</li>
      <li>Payment is recorded</li>
      <li>Product quantity is updated</li>
      <li>Order confirmation is generated</li>
    </ul>

    <h3>Stakeholders and Interests</h3>
    <p>A <strong>stakeholder</strong> is anyone who has an interest in the outcome of the use case.</p>
    <p><strong>Example: Place Order</strong></p>
    <pre><code>Stakeholder        Interest
-----------------  ---------------------------------------
Customer           Wants order placed successfully
Store              Wants correct order and payment
Payment provider   Wants valid payment
Delivery company   Needs correct delivery information
Tax authority      Wants correct tax calculation</code></pre>

    <div class="divider"></div>

    <h2>Complete Example — Online Shopping</h2>
    <p>Let's put everything together.</p>
    <p><strong>System:</strong> Online Shopping System</p>
    <p><strong>System Boundary</strong></p>
    <p>Inside: Product search, Cart, Order placement, Payment processing, Order tracking.</p>
    <p>Outside: Customer, Payment Gateway, Delivery Company.</p>
    <p><strong>Actors</strong></p>
    <ul>
      <li><strong>Primary:</strong> Customer, Admin</li>
      <li><strong>Supporting:</strong> Payment Gateway, Delivery Service</li>
      <li><strong>Offstage:</strong> Tax Authority</li>
    </ul>
    <p><strong>Customer Goals:</strong> Browse Products, Place Order, Track Order</p>
    <p><strong>Admin Goals:</strong> Manage Products, View Sales Reports</p>
    <pre><code>Customer
  |
  +---- Browse Products
  |
  +---- Place Order
  |
  +---- Track Order

Admin
  |
  +---- Manage Products
  |
  +---- View Sales Reports</code></pre>

    <div class="divider"></div>

    <h2>How to Solve a Use Case (7-Step Method)</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <ol>
        <li><strong>Find the system</strong> — what system are we studying? e.g. University Library System</li>
        <li><strong>Find actors</strong> — who uses it? e.g. Student, Librarian</li>
        <li><strong>Find goals</strong> — what does each actor want to achieve? e.g. Student: Search Book, Borrow Book, Return Book</li>
        <li><strong>Convert goals into use cases</strong> using Verb + Object — e.g. Search Book, Borrow Book, Return Book, Manage Books</li>
        <li><strong>Find scenarios</strong> — what normally happens?</li>
        <li><strong>Find exceptions</strong> — what can go wrong?</li>
        <li><strong>Choose the required format</strong> — Brief (short paragraph), Casual (informal with scenarios), or Fully Dressed (structured template)</li>
      </ol>
    </div>

    <div class="divider"></div>

    <h2>Quick Comparison Table</h2>
    <pre><code>Concept           Simple Meaning                     Example
----------------  ---------------------------------  --------------------------
System            What we are studying                Library System
Actor             Who interacts with the system       Student
Primary Actor     Has the goal                        Student
Supporting Actor  Provides a service                  Payment Gateway
Offstage Actor    Has an interest                     Tax Authority
Goal              What the actor wants                Borrow Book
Use Case          Complete goal/process                Borrow Book
Scenario          One particular path                 Successfully borrow book
Main Success      Normal successful flow              Book available -> borrowed
Extension         Alternative/failure flow            Book unavailable
Precondition      Must be true before                 Student logged in
Postcondition     Result after completion             Book marked as borrowed
System Boundary   Separates system from outside       Library system boundary
Brief             Very short description              One paragraph
Casual            Informal, multiple scenarios        Short paragraphs
Fully Dressed     Detailed, structured description    Template</code></pre>

    <div class="divider"></div>

    <h2>Practice Activities</h2>
    <p>For each scenario below, write a <strong>fully dressed use case</strong> for the named target use case, using the 7-step method above.</p>
    <ol>
      <li><strong>Library Book Search</strong> — An Online Library System lets students search for books by title, author, or ISBN. The student must log in first. If login succeeds, the student can enter search details. If the details are valid and the book exists, the system shows the book details. If the details are invalid, the system shows an error message. If no matching book is found, the system shows a "No results found" message.<br>Target use case: <em>Search Book</em></li>
      <li><strong>ATM Cash Withdrawal</strong> — An ATM System lets customers withdraw cash. The customer inserts an ATM card and enters a PIN. If the PIN is correct, the customer enters the amount to withdraw. The system checks the account balance and daily withdrawal limit. If everything is valid, the ATM dispenses cash and updates the account balance. If the PIN is incorrect, the system shows an error; after three incorrect attempts, the card is blocked. If the account has insufficient funds or the daily limit is exceeded, the withdrawal is rejected.<br>Target use case: <em>Withdraw Cash</em></li>
      <li><strong>Online Shopping</strong> — An Online Shopping System lets customers purchase products. The customer searches for a product, selects it, adds it to the cart, and proceeds to checkout. The customer enters delivery details and selects a payment method. If payment succeeds, the system creates the order and shows a confirmation. If the product is out of stock, the system tells the customer. If payment fails, the customer is asked to pick another payment method.<br>Target use case: <em>Place Order</em></li>
      <li><strong>University Course Registration</strong> — A University Course Registration System lets students register for courses. The student logs in, views available courses, selects a course, and submits the registration request. The system checks whether the student meets the prerequisites and whether seats are available. If all conditions are met, the student is registered. If the prerequisite isn't met, registration is rejected. If the course is full, the system tells the student registration is unavailable.<br>Target use case: <em>Register for Course</em></li>
      <li><strong>Hospital Appointment Booking</strong> — A Hospital Appointment System lets patients book appointments with doctors. The patient logs in, selects a doctor and preferred date, and views available time slots. The patient picks a time slot and confirms the appointment. The system records the appointment and sends a confirmation. If no time slots are available, the system tells the patient. If the selected slot becomes unavailable before confirmation, the system asks the patient to choose another slot.<br>Target use case: <em>Book Appointment</em></li>
      <li><strong>Online Banking Login</strong> — An Online Banking System lets registered users securely access their accounts. The user enters a username and password, and the system verifies the credentials. If correct, the user is redirected to the account dashboard. If the password is wrong, the system shows an error and allows another attempt; after three consecutive failed attempts, the account is locked. If the user forgets the password, they can select "Forgot Password" and reset it by email or SMS verification.<br>Target use case: <em>Login to Online Banking</em></li>
      <li><strong>Food Delivery Order</strong> — A Food Delivery System lets customers order food from restaurants. The customer picks a restaurant, chooses food items, adds them to the cart, enters the delivery address, and confirms the order. The system processes the payment and sends the order to the restaurant. If a chosen food item becomes unavailable, the system asks the customer to remove or replace it. If payment fails, the order is not confirmed.<br>Target use case: <em>Place Food Order</em></li>
      <li><strong>Hotel Room Booking</strong> — An Online Hotel Booking System lets customers search for available rooms. The customer enters check-in and check-out dates and selects a room. The system shows available rooms and prices. The customer provides guest details and confirms the booking. After successful payment, the system confirms the reservation. If no rooms are available, the system shows an appropriate message. If payment fails, the booking is not completed.<br>Target use case: <em>Book Hotel Room</em></li>
      <li><strong>Prescription Refill</strong> — A Hospital System lets patients request prescription refills online. The patient logs in, views active prescriptions, selects one, and submits a refill request. The system checks whether the prescription is still valid and whether the refill limit has been exceeded. If eligible, the request goes to the doctor for approval. If the prescription is expired or the refill limit is exceeded, the system rejects the request. If the doctor approves it, the system updates the prescription status and notifies the patient.<br>Target use case: <em>Request Prescription Refill</em></li>
      <li><strong>Cinema Ticket Booking</strong> — An Online Cinema Booking System lets customers pick a movie, date, show time, and seats. The customer confirms the selected seats and makes payment. If payment succeeds, the system generates the ticket and sends a confirmation. If the selected seats are already booked, the system asks the customer to pick different seats. If payment fails, the booking is not completed.<br>Target use case: <em>Book Cinema Ticket</em></li>
      <li><strong>University Examination Registration</strong> — A University Examination System lets students register for upcoming exams. The student logs in, views eligible exams, selects exams, and submits the registration. The system checks whether the student has completed the required courses and whether registration is still open. If all conditions are met, the registration is recorded and confirmed. If the student isn't eligible for an exam, the registration is rejected. If the registration deadline has passed, the system doesn't allow registration. If the student has already registered, the system informs them.<br>Target use case: <em>Register for Examination</em></li>
      <li><strong>Bank Fund Transfer</strong> — An Online Banking System lets customers transfer money between accounts. The customer logs in, selects the source account, enters the recipient account and transfer amount, and confirms the transaction. The system verifies the customer's identity, checks the account balance, and processes the transfer. If successful, the system updates both accounts and shows a transaction confirmation. If the balance is insufficient, the transfer is rejected. If the recipient account is invalid, the system shows an error. If extra authentication is required and fails, the transaction is cancelled.<br>Target use case: <em>Transfer Money</em></li>
    </ol>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>These are in-class practice exercises. For each one, build the full structure: Use Case Name, Primary Actor, Stakeholders and Interests, Preconditions, Main Success Scenario, Extensions, and Postconditions.</p>
    </div>
  `,
  summary: {
    topic: 'Use Case Modeling in Requirements Engineering',
    subTopics: [
      'What is Use Case Modeling?',
      'Functional vs Non-Functional Requirements',
      'What is a Use Case?',
      'Use Case vs Scenario',
      'Functional Requirement vs Use Case',
      'Actor',
      'Primary Actor',
      'Supporting Actor',
      'Offstage Actor',
      'Actor Types in Practice',
      'System Boundary',
      'Actor-Goal List',
      'How to Identify Actors',
      'One Use Case for Each User Goal',
      'Exception: CRUD',
      'Naming a Use Case',
      'Main Success Scenario',
      'Alternate / Failure Scenarios (Extensions)',
      'Use Case Formats',
      'Brief Use Case Example',
      'Casual Use Case Example',
      'Fully Dressed Use Case',
      'Preconditions',
      'Postconditions',
      'Stakeholders and Interests',
      'Complete Example — Online Shopping',
      'How to Solve a Use Case (7-Step Method)',
      'Quick Comparison Table',
    ],
    definitions: [
      { term: 'Use Case Modeling', meaning: 'A requirements engineering technique for identifying and documenting the functional requirements of a system, from the user\u2019s point of view.' },
      { term: 'Functional Requirement', meaning: 'A statement of what the system should do (e.g., validate PIN, dispense cash).' },
      { term: 'Non-Functional Requirement', meaning: 'A constraint on how the system should operate or be built (e.g., respond within 3 seconds, use encryption).' },
      { term: 'Use Case', meaning: 'A story describing how an actor uses a system to achieve a goal; really a collection of related scenarios.' },
      { term: 'Scenario', meaning: 'One specific path through a use case, successful or unsuccessful.' },
      { term: 'Actor', meaning: 'A person, organization, or external system that interacts with the system to achieve a goal, identified by role rather than name.' },
      { term: 'Primary Actor', meaning: 'An actor whose goal is fulfilled by using the system directly.' },
      { term: 'Supporting Actor', meaning: 'An actor that provides a service to the system, rather than using it to reach its own goal.' },
      { term: 'Offstage Actor', meaning: 'An actor with an interest in the system\u2019s behavior who does not directly interact with it.' },
      { term: 'System Boundary', meaning: 'The line that separates what is inside the system (use cases) from what is outside it (actors).' },
      { term: 'Actor-Goal List', meaning: 'A record of each primary actor paired with the goals they want to achieve using the system.' },
      { term: 'CRUD', meaning: 'Create, Read, Update, Delete — related goals that can sometimes be combined into a single use case, like "Manage Users".' },
      { term: 'Main Success Scenario', meaning: 'The normal, successful path through a use case when everything goes correctly.' },
      { term: 'Extension', meaning: 'An alternate or failure branch off the main success scenario, describing what can go wrong.' },
      { term: 'Brief', meaning: 'A use case format that is a very short summary paragraph, used for simple, well-understood functionality.' },
      { term: 'Casual', meaning: 'A use case format that is an informal description covering several scenarios in normal paragraphs.' },
      { term: 'Fully Dressed', meaning: 'A detailed, structured use case format including name, primary actor, stakeholders, preconditions, main success scenario, extensions, and postconditions.' },
      { term: 'Precondition', meaning: 'Something that must already be true before a use case starts.' },
      { term: 'Postcondition', meaning: 'Something that must be true after a use case finishes successfully.' },
      { term: 'Stakeholder', meaning: 'Anyone who has an interest in the outcome of a use case, even if they are not the actor performing it.' },
    ],
    keyPoints: [
      'A use case is a collection of related scenarios, not just one path — some succeed, some fail.',
      'Actors are identified by role, not by name (e.g., "Student", not "Kamal").',
      'Primary actor: goal fulfilled by the system. Supporting actor: provides a service to the system. Offstage actor: has an interest but never directly interacts with the system.',
      'The actor sits outside the system boundary; the use cases sit inside it.',
      'Rule of thumb: one user goal → one use case — except CRUD operations, which can be merged into one use case (e.g., "Manage Users").',
      'Name use cases with Verb + Object (e.g., "Borrow Book"), never Object + Verb or a bare verb like "Pay".',
      'A fully dressed use case has seven parts: Use Case Name, Primary Actor, Stakeholders and Interests, Preconditions, Main Success Scenario, Extensions, Postconditions.',
      'Precondition = must be true before the use case starts. Postcondition = must be true after it finishes.',
      'Extensions are labeled by step number and letter (e.g., "3a. Invalid search details") to show exactly where they branch off the main scenario.',
      'The three use case formats — Brief, Casual, Fully Dressed — trade off detail for speed; Fully Dressed is the exam-critical one.',
      'The 7-step method for solving any use case problem: find the system → find actors → find goals → convert goals to use cases → find scenarios → find exceptions → choose the format.',
    ],
  },
},

{
id: 5,
title: 'Use Case Diagrams',
content: `
<span class="lesson-badge">LESSON 05</span>
<h1>Use Case Diagrams</h1>
<div class="meta-info">ICT2142 <span>•</span> 22 min read</div>

<p>Before building a system, we need to know <strong>who will use it</strong> and <strong>what it should do</strong>. A <strong>Use Case Diagram</strong> shows this in one simple picture. This lesson explains its components, relationships, drawing steps, and gives many case studies to practise.</p>

<div class="divider"></div>

<h2>1. What is a Use Case Diagram?</h2>
<p>A <strong>Use Case Diagram</strong> is a <strong>UML diagram</strong> used to show:</p>
<ul>
  <li><strong>Who</strong> interacts with a system</li>
  <li><strong>What</strong> the system can do</li>
  <li><strong>How</strong> actors and system functions are related</li>
</ul>

<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>A use case diagram gives a <strong>high-level view of the functional requirements</strong> of a system.</p>
</div>

<div class="divider"></div>

<h2>2. Main Components</h2>
<p>A use case diagram has <strong>four main components</strong>: Actor, Use Case, System Boundary and Relationship.</p>

<h3>2.1 Actor</h3>
<p>An <strong>actor</strong> is a person, system, device or other entity that interacts with the system.</p>
<p><strong>Examples:</strong> Customer, Student, Doctor, Bank Officer, Payment System, ATM.</p>
<p>An actor represents a <strong>role</strong>, not a specific person.</p>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p><strong>Correct:</strong> Doctor<br><strong>Incorrect:</strong> Dr. John<br>Always use the <strong>role</strong> name, never a personal name.</p>
</div>

<p>Actors can be drawn using:</p>
<ul>
  <li>A <strong>stick figure</strong> for a human/user</li>
  <li>A <strong>rectangle labelled &laquo;actor&raquo;</strong> for an external system</li>
</ul>

<h3>2.2 Use Case</h3>
<p>A <strong>use case</strong> represents something an actor wants the system to do.</p>
<p><strong>Examples:</strong> Login, Place Order, Check Balance, Withdraw Funds, Register Student, Generate Report.</p>
<ul>
  <li>Use case names should be <strong>short and meaningful</strong>.</li>
  <li>They usually describe an <strong>action</strong>.</li>
  <li><strong>Notation:</strong> a use case is drawn as an <strong>oval</strong>.</li>
</ul>

<h3>2.3 System Boundary</h3>
<p>The <strong>system boundary</strong> is a <strong>rectangle</strong> that surrounds the use cases.</p>
<ul>
  <li>It shows <strong>what belongs to the system</strong> and <strong>what is outside</strong> the system.</li>
  <li>The <strong>system name</strong> is normally written at the top of the rectangle.</li>
</ul>

<h3>2.4 Relationship</h3>
<p>Relationships show how actors and use cases are connected. The main relationships are:</p>
<ul>
  <li><strong>Association</strong></li>
  <li><strong>Include</strong></li>
  <li><strong>Extend</strong></li>
  <li><strong>Generalization</strong></li>
</ul>
<pre><code>+------------------ Online Shop (System Boundary) ------------------+ | | | ( Search Product ) | | / | | O / | | /|\\ -----------+----- ( Place Order ) | | / \\ Customer \\ | | ( Cancel Order ) | | | +--------------------------------------------------------------------+ O with arms/legs = Actor ( ) = Use Case --- = Association</code></pre>
<div class="divider"></div>

<h2>3. Association</h2>
<p>An <strong>association</strong> shows that an <strong>actor interacts with a use case</strong>.</p>
<p><strong>Notation:</strong> a <strong>solid line</strong>.</p>
<pre><code>Actor ---------- Use Case Customer ---------- Place Order</code></pre>
<p>One customer can be associated with several use cases, such as:</p>
<ul>
  <li>Search Product</li>
  <li>Place Order</li>
  <li>Cancel Order</li>
  <li>Check Order Status</li>
</ul>

<div class="divider"></div>

<h2>4. How to Identify Actors and Use Cases</h2>
<p>Use these two simple steps:</p>

<h3>Step 1: Identify the actors</h3>
<p>Ask: <strong>Who or what interacts with the system?</strong></p>

<h3>Step 2: Identify what each actor wants to do</h3>
<p>Ask: <strong>What does this actor want the system to do?</strong></p>
<p>These activities become <strong>candidate use cases</strong>.</p>

<h3>Example: University System</h3>
<ul>
  <li><strong>Actor:</strong> Student</li>
  <li><strong>Possible use cases:</strong> Enroll in Course, View Results, View Timetable, Request Transcript</li>
</ul>

<div class="divider"></div>

<h2>5. &lt;&lt;include&gt;&gt; Relationship</h2>

<h3>Meaning</h3>
<p><code>&lt;&lt;include&gt;&gt;</code> is used when one use case <strong>must use the behavior of another use case</strong>. The included behavior is <strong>mandatory</strong>.</p>

<h3>Example</h3>
<p>A customer wants to check an order:</p>
<pre><code>Check Order Status --&lt;&lt;include&gt;&gt;--&gt; Login</code></pre>
<p>This means <strong>Check Order Status</strong> always includes <strong>Login</strong>. The base use case cannot properly complete without the included use case.</p>

<h3>Direction</h3>
<p><strong>Base (client) → Included (supplier)</strong></p>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>INCLUDE = MUST happen.</strong></p>
</div>

<h3>Reusing common behavior</h3>
<p>If several functions need login, we can separate <strong>Login</strong> as a <strong>reusable use case</strong>:</p>
<ul>
  <li>Check Order Status → Login</li>
  <li>View Profile → Login</li>
  <li>Change Password → Login</li>
</ul>
<pre><code>Check Order Status --&lt;&lt;include&gt;&gt;--+ | View Profile -------&lt;&lt;include&gt;&gt;-----+--&gt; Login | Change Password ----&lt;&lt;include&gt;&gt;-----+</code></pre>
<div class="divider"></div>

<h2>6. &lt;&lt;extend&gt;&gt; Relationship</h2>

<h3>Meaning</h3>
<p><code>&lt;&lt;extend&gt;&gt;</code> is used when one use case <strong>adds extra behavior to another existing use case</strong>. The base use case should still <strong>work without</strong> the extending use case.</p>

<h3>Example</h3>
<pre><code>Issue Fine --&lt;&lt;extend&gt;&gt;--&gt; Return Book</code></pre>
<ul>
  <li>Returning a book is possible <strong>by itself</strong>.</li>
  <li>If the book is <strong>overdue</strong>, <strong>Issue Fine</strong> adds extra behavior.</li>
</ul>

<h3>Direction</h3>
<p><strong>Extension use case → Base use case</strong></p>
<pre><code>Extension --&lt;&lt;extend&gt;&gt;--&gt; Base</code></pre>
<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>EXTEND = ADD EXTRA BEHAVIOR.</strong> The base use case can work without the extension.</p>
</div>

<div class="divider"></div>

<h2>7. Generalization Relationship</h2>
<p><strong>Generalization</strong> represents an <strong>"is-a" relationship</strong>. It creates a <strong>parent-child relationship</strong>. The child is a more specific version (or enhancement) of the parent.</p>

<h3>Example</h3>
<pre><code> Search ^ / \\ / \\ Search by Author Search by Call Number</code></pre>
<ul>
  <li><strong>Search</strong> = Parent</li>
  <li><strong>Search by Author</strong> = Child</li>
  <li><strong>Search by Call Number</strong> = Child</li>
</ul>

<h3>Notation and Direction</h3>
<ul>
  <li><strong>Notation:</strong> a directed arrow with a <strong>triangular arrowhead</strong>.</li>
  <li><strong>Direction:</strong> <strong>Child → Parent</strong></li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>GENERALIZATION = IS-A.</strong></p>
</div>

<div class="divider"></div>

<h2>8. Relationship Summary</h2>
<pre><code>+----------------+---------------------------+-------------------+---------+ | Relationship | Meaning | Direction | Key idea| +----------------+---------------------------+-------------------+---------+ | Association | Actor interacts with a | Actor &lt;-&gt; Use Case| USES | | | use case | | | +----------------+---------------------------+-------------------+---------+ | &lt;&lt;include&gt;&gt; | Required behavior is | Base -&gt; Included | MUST | | | included | | | +----------------+---------------------------+-------------------+---------+ | &lt;&lt;extend&gt;&gt; | Additional behavior is | Extension -&gt; Base | EXTRA | | | added | | | +----------------+---------------------------+-------------------+---------+ | Generalization | Specialized one inherits | Child -&gt; Parent | IS-A | | | from the general one | | | +----------------+---------------------------+-------------------+---------+</code></pre>
<div class="divider"></div>

<h2>9. Important Difference: Include vs Extend</h2>
<pre><code>+--------------------------------+----------------------------------+ | &lt;&lt;include&gt;&gt; | &lt;&lt;extend&gt;&gt; | +--------------------------------+----------------------------------+ | Mandatory | Additional / supplementary | | Base use case needs the | Base use case can work | | included behavior | independently | | Used to reuse common behavior | Used to add extra behavior | | Base -&gt; Included | Extension -&gt; Base | | Think MUST | Think EXTRA | +--------------------------------+----------------------------------+</code></pre>
<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>The <strong>arrow directions are different</strong>. Include goes <strong>from the base to the included</strong> use case. Extend goes <strong>from the extension to the base</strong> use case. Mixing these up is a very common exam mistake.</p>
</div>

<h3>Simple Example: Online Banking</h3>
<ul>
  <li><strong>Deposit Funds → Update Balance</strong> is <code>&lt;&lt;include&gt;&gt;</code>, because updating the balance is <strong>required</strong>.</li>
  <li><strong>Calculate Bonus → Deposit Funds</strong> is <code>&lt;&lt;extend&gt;&gt;</code>, because bonus calculation happens only under a <strong>particular condition</strong>.</li>
</ul>
<pre><code>Deposit Funds --&lt;&lt;include&gt;&gt;--&gt; Update Balance Calculate Bonus --&lt;&lt;extend&gt;&gt;--&gt; Deposit Funds</code></pre>
<div class="divider"></div>

<h2>10. General Steps to Draw a Use Case Diagram</h2>
<ol>
  <li>Identify the <strong>system</strong>.</li>
  <li>Draw the <strong>system boundary</strong>.</li>
  <li>Identify all <strong>actors</strong>.</li>
  <li>Identify the <strong>use cases</strong> for each actor.</li>
  <li>Connect actors to use cases using <strong>association</strong>.</li>
  <li>Look for <strong>mandatory reusable behavior</strong> → <code>&lt;&lt;include&gt;&gt;</code></li>
  <li>Look for <strong>additional / supplementary behavior</strong> → <code>&lt;&lt;extend&gt;&gt;</code></li>
  <li>Look for <strong>is-a relationships</strong> → <strong>Generalization</strong></li>
</ol>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>When reading a case study, look for clue words. <strong>"must", "before", "every"</strong> usually mean <code>&lt;&lt;include&gt;&gt;</code>. <strong>"may", "if", "additional"</strong> usually mean <code>&lt;&lt;extend&gt;&gt;</code>. <strong>"There are two types of..."</strong> usually means <strong>Generalization</strong>.</p>
</div>

<div class="divider"></div>

<h2>11. Example: Online Banking System</h2>

<h3>Possible Actors</h3>
<ul>
  <li>Customer</li>
  <li>NRFC Customer</li>
  <li>Bank Officer</li>
</ul>

<h3>Possible Use Cases</h3>
<ul>
  <li>Open Account</li>
  <li>Check Balance</li>
  <li>Deposit Funds</li>
  <li>Withdraw Funds</li>
  <li>Transfer Funds</li>
  <li>Convert Currency</li>
  <li>Update Balance</li>
  <li>Calculate Bonus</li>
</ul>

<h3>Relationships</h3>
<ul>
  <li>Customer → Open Account</li>
  <li>Customer → Check Balance</li>
  <li>Customer → Deposit Funds</li>
  <li>Customer → Withdraw Funds</li>
  <li>Customer → Transfer Funds</li>
  <li>NRFC Customer → Convert Currency</li>
  <li>Bank Officer → Open Account</li>
  <li>Deposit Funds <code>&lt;&lt;include&gt;&gt;</code> Update Balance</li>
  <li>Withdraw Funds <code>&lt;&lt;include&gt;&gt;</code> Update Balance</li>
  <li>Transfer Funds <code>&lt;&lt;include&gt;&gt;</code> Update Balance</li>
  <li>Calculate Bonus <code>&lt;&lt;extend&gt;&gt;</code> Deposit Funds</li>
  <li>NRFC Customer <strong>generalizes</strong> from Customer (NRFC Customer is a special type of Customer)</li>
</ul>
<pre><code>+---------------------- Online Banking System -----------------------+ | | | ( Open Account ) | | ( Check Balance ) | | ( Deposit Funds ) --&lt;&lt;include&gt;&gt;--+ | | ( Withdraw Funds ) -&lt;&lt;include&gt;&gt;--+--&gt; ( Update Balance ) | | ( Transfer Funds ) -&lt;&lt;include&gt;&gt;--+ | | ( Calculate Bonus ) --&lt;&lt;extend&gt;&gt;--&gt; ( Deposit Funds ) | | ( Convert Currency ) | | | +--------------------------------------------------------------------+ Actors (outside the boundary): Customer -- Open Account, Check Balance, Deposit, Withdraw, Transfer NRFC Customer -- Convert Currency (NRFC Customer ---|&gt; Customer) Bank Officer -- Open Account</code></pre>
<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <ul>
    <li><strong>Association</strong> = USES (solid line)</li>
    <li><strong>Include</strong> = MUST (Base → Included)</li>
    <li><strong>Extend</strong> = EXTRA (Extension → Base)</li>
    <li><strong>Generalization</strong> = IS-A (Child → Parent)</li>
    <li>An actor represents a <strong>role</strong>, not a person's name.</li>
    <li>The <strong>system boundary</strong> is a rectangle with the system name on top.</li>
  </ul>
</div>

<div class="divider"></div>

<h2>12. Case Studies: In Class</h2>
<p>For each case study, draw a use case diagram. Find the <strong>actors</strong>, the <strong>use cases</strong> and the <strong>relationships</strong> (association, include, extend, generalization).</p>

<h3>Case 1: University Library System</h3>
<p>A university library system allows students to search for books, view book details, borrow books, return books, and view their borrowed books. A librarian can add new books, remove books, and update book information.</p>

<h3>Case 2: ATM</h3>
<p>An ATM allows a customer to check account balance, withdraw cash, deposit money, and transfer money. An ATM technician can perform maintenance and repair activities.</p>

<h3>Case 3: Restaurant System</h3>
<p>A restaurant system allows customers to view the menu, select food, place orders, and make payments. Restaurant staff can view orders and update order status.</p>
<p>Before placing an order, the customer must log in. Every order must include payment processing.</p>

<h3>Case 4: Online Shopping System</h3>
<p>An online shopping system allows customers to search products, view product details, add products to a shopping cart, place orders, and make payments. A store manager can add, update, and remove products.</p>
<p>Customers must log in before placing an order. Customers may apply a discount coupon when placing an order.</p>

<h3>Case 5: Cinema Booking System</h3>
<p>A cinema booking system allows customers to view movies, check showtimes, select seats, book tickets, and make payments. A cinema employee can manage movies, showtimes, and seat availability.</p>
<p>Customers must log in before booking a ticket. If a customer selects a premium seat, an additional premium-seat charge is applied.</p>

<h3>Case 6: University System</h3>
<p>A university system allows students to view courses, register for courses, drop courses, and view their registered courses. A lecturer can view students registered for their courses and enter grades. A department administrator can create, update, and remove courses.</p>
<p>Students must log in before registering. When registering, the system must check course availability. If a course is full, the system displays an appropriate notification.</p>

<h3>Case 7: Hotel Reservation System</h3>
<p>A hotel reservation system allows customers to search available rooms, view room details, make reservations, cancel reservations, and make payments. A receptionist can create and manage reservations and check guests in and out.</p>
<p>Customers must log in before making a reservation. The system must check room availability before confirming a reservation. Customers may request an additional airport pickup service during booking.</p>

<h3>Case 8: Online Banking System</h3>
<p>An online banking system allows customers to check balances, deposit money, withdraw money, transfer money, and request bank statements. A bank officer can verify customers and manage customer accounts.</p>
<p>Customers must be authenticated before performing banking transactions. Every deposit, withdrawal, or transfer must update the account balance.</p>
<p>If a transaction exceeds the permitted limit, additional verification by a bank officer is required.</p>

<h3>Case 9: Examination System</h3>
<p>An examination system allows students to log in, view available examinations, take examinations, submit answers, and view results. Lecturers can create examinations, add questions, publish examinations, and view student results. Administrators can manage student and lecturer accounts.</p>
<p>Before taking an examination, the system must verify the student's identity and examination eligibility. If a student submits an examination after the deadline, the system records it as a late submission.</p>

<h3>Case 10: Food Delivery System</h3>
<p>A food delivery system allows customers to search restaurants, view menus, place orders, make payments, track orders, and cancel orders. Restaurant staff can accept or reject orders and update order status. Delivery riders can view assigned deliveries and update delivery status.</p>
<p>Customers must log in before placing orders. The system must verify payment before confirming an order.</p>
<p>Customers may apply a promotional coupon when placing an order. If an order is cancelled after preparation has started, a cancellation charge may be applied.</p>

<h3>Case 11: Hospital System</h3>
<p>A hospital system allows patients to register, search for doctors, view doctor availability, book appointments, cancel appointments, and make payments. Doctors can view appointments, update availability, and access patient information. Receptionists can register patients and manage appointments.</p>
<p>Patients must log in before booking an appointment. The system must check doctor availability before confirming an appointment.</p>
<p>If a patient cancels an appointment after the allowed cancellation period, a cancellation fee is applied.</p>
<p>There are two types of patients: <strong>General Patients</strong> and <strong>Insurance Patients</strong>. Insurance patients can submit insurance claims.</p>

<h3>Case 12: Vehicle Rental System</h3>
<p>A vehicle rental system allows customers to search available vehicles, view vehicle details, make reservations, make payments, collect vehicles, and return vehicles. Rental staff can manage vehicles, approve rentals, and inspect returned vehicles.</p>
<p>Customers must be authenticated before making a reservation. The system must check vehicle availability before confirming a reservation.</p>
<p>Customers may request additional insurance during a rental. If a vehicle is returned late, a late-return charge is calculated.</p>
<p>There are two types of customers: <strong>Individual Customers</strong> and <strong>Corporate Customers</strong>. Corporate customers can request multiple vehicles under a corporate rental agreement.</p>

<h3>Case 13: E-Learning Platform</h3>
<p>An e-learning platform allows students to register for courses, view lessons, submit assignments, take quizzes, view results, and receive certificates. Instructors can create courses, upload lessons, create quizzes, evaluate assignments, and publish results. Administrators can manage users and courses.</p>
<p>Students must log in before accessing course content. A student must be enrolled in a course before accessing its lessons.</p>
<p>When submitting an assignment, the system records the submission. If the assignment is submitted after the deadline, it is marked as late.</p>
<p>There are two types of courses: <strong>Free Courses</strong> and <strong>Paid Courses</strong>. Paid courses require payment before enrollment.</p>

<h3>Case 14: Airline Reservation System</h3>
<p>An airline reservation system allows passengers to search flights, view flight details, select seats, make reservations, make payments, cancel reservations, and check in online. Airline staff can manage flights, seats, reservations, and passenger information.</p>
<p>Passengers must log in before completing a reservation. The system must check seat availability before confirming a seat selection.</p>
<p>Passengers may purchase additional baggage during reservation. If a passenger cancels a reservation after the permitted cancellation period, a cancellation fee is applied.</p>
<p>There are two types of passengers: <strong>Regular Passengers</strong> and <strong>Frequent Flyer Passengers</strong>. Frequent Flyer Passengers can redeem reward points when making a reservation.</p>

<h3>Case 15: University Management System</h3>
<p>A university management system supports students, lecturers, administrators, finance officers, and library staff.</p>
<p>Students can register for courses, view timetables, submit assignments, view results, pay fees, borrow library books, and request transcripts. Lecturers can manage courses, upload learning materials, create assessments, enter grades, and view student information.</p>
<p>Administrators can manage students, lecturers, courses, and academic records. Finance officers can manage student payments and verify fee payments. Library staff can manage books, borrowing, returns, and fines.</p>
<p>Students must authenticate before accessing academic services. Course registration requires checking course availability and prerequisite requirements. Fee payment must be verified before a student can complete certain registrations.</p>
<p>Students may request special approval from an administrator when they do not satisfy a normal registration condition. If a borrowed library book is returned late, a fine is calculated.</p>
<p>There are three types of students: <strong>Undergraduate Students</strong>, <strong>Postgraduate Students</strong>, and <strong>Exchange Students</strong>. Each type has some specialized services in addition to common student services.</p>

<div class="divider"></div>

<h2>13. Case Studies: Take Home</h2>
<p>Practise these at home using the same method: actors → use cases → association → include → extend → generalization.</p>

<h3>Case 16: Gym Management System</h3>
<p>A gym management system allows members to register for memberships, view available classes, book classes, cancel bookings, and make payments. Trainers can create classes, manage class schedules, and view registered members. Receptionists can register members and manage memberships.</p>
<p>Before booking a class, a member must log in. The system must check class availability before confirming a booking. Members may request personal training sessions. If a class is cancelled, registered members receive a cancellation notification.</p>

<h3>Case 17: Car Parking Management System</h3>
<p>A car parking management system allows drivers to view available parking spaces, reserve spaces, enter the parking area, and make payments. Parking staff can manage parking spaces and monitor vehicles.</p>
<p>Before making a reservation, a driver must log in. The system must check parking-space availability before confirming a reservation. Drivers may reserve premium parking spaces for an additional charge. If a vehicle stays beyond the reserved period, an additional parking fee is calculated.</p>

<h3>Case 18: Online Grocery Shopping System</h3>
<p>An online grocery shopping system allows customers to search products, view product details, add products to a cart, place orders, make payments, and track deliveries. Store staff can manage products and process orders. Delivery staff can view assigned deliveries and update delivery status.</p>
<p>Customers must log in before placing an order. The system must check product availability before confirming an order. Customers may apply discount coupons. If a product becomes unavailable after an order is placed, the system notifies the customer.</p>

<h3>Case 19: Doctor Consultation System</h3>
<p>A doctor consultation system allows patients to search for doctors, view doctor availability, book appointments, make payments, and view consultation details. Doctors can manage availability, view appointments, and update consultation records. Receptionists can register patients and manage appointments.</p>
<p>Patients must log in before booking an appointment. The system must check doctor availability before confirming an appointment. Patients may request an online video consultation. If an appointment is cancelled late, a cancellation charge is applied.</p>

<h3>Case 20: Movie Streaming System</h3>
<p>A movie streaming system allows users to search movies, view movie details, watch movies, create watchlists, and rate movies. Content managers can add, update, and remove movies.</p>
<p>Users must log in before watching restricted content. A user may download a movie for offline viewing. Premium movies require an additional payment before they can be watched.</p>

<h3>Case 21: Job Recruitment System</h3>
<p>A job recruitment system allows job seekers to create profiles, search jobs, view job details, apply for jobs, and track applications. Employers can create job vacancies, view applications, shortlist candidates, and schedule interviews. Administrators can manage users and job postings.</p>
<p>Job seekers must log in before applying for a job. The system must verify that the applicant satisfies the basic job requirements before accepting an application. Job seekers may upload additional documents with an application.</p>

<h3>Case 22: Hotel Management System</h3>
<p>A hotel management system allows guests to search rooms, view room details, make reservations, make payments, check in, check out, and request room services. Receptionists can manage reservations and guest check-in/check-out. Housekeeping staff can update room-cleaning status.</p>
<p>The system must check room availability before confirming a reservation. Guests must complete payment before checking in. Guests may request additional services such as breakfast or airport transportation. If a guest checks out late, an additional charge is applied.</p>

<h3>Case 23: School Examination Management System</h3>
<p>A school examination management system allows students to view examinations, register for examinations, take online examinations, submit answers, and view results. Teachers can create examinations, add questions, evaluate answers, and publish results. Administrators can manage student and teacher accounts.</p>
<p>Students must log in before accessing an examination. The system must verify examination eligibility before allowing registration. If a student submits an examination after the deadline, it is marked as a late submission.</p>
<p>There are two types of examinations: <strong>Online Examinations</strong> and <strong>Practical Examinations</strong>, each having specialized activities.</p>

<h3>Case 24: Travel Booking System</h3>
<p>A travel booking system allows customers to search flights and hotels, view available options, make bookings, make payments, cancel bookings, and view booking details. Travel agents can create and manage bookings on behalf of customers. Administrators can manage flights, hotels, and customer accounts.</p>
<p>The system must check availability before confirming a booking. Customers must complete payment before a booking is confirmed. Customers may add travel insurance to a booking. If a booking is cancelled after the permitted period, a cancellation fee is applied.</p>

<h3>Case 25: Smart Hospital Management System</h3>
<p>A smart hospital management system allows patients to register, book appointments, view medical records, make payments, request laboratory tests, and view test results. Doctors can view patient records, manage appointments, request tests, and update treatment records. Nurses can view assigned patients and update basic patient information. Laboratory staff can manage test requests and upload test results. Pharmacy staff can view prescriptions and manage medicine orders. Administrators can manage users and hospital services.</p>
<p>Patients must authenticate before accessing their medical information. An appointment must include checking doctor availability. A laboratory test request must be processed by laboratory staff before results can be added to the patient's record. Patients may request emergency appointments. If a patient has insurance coverage, the system can process an insurance claim.</p>
<p>There are different types of patients, including <strong>General Patients</strong> and <strong>Insurance Patients</strong>, with specialized services available to each type.</p>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>For each case study, first list the <strong>actors</strong>. Then list each actor's <strong>use cases</strong>. Finally, read the last paragraphs carefully to find the <strong>include</strong>, <strong>extend</strong> and <strong>generalization</strong> relationships.</p>
</div>

`,
summary: {
topic: 'Use Case Diagrams: actors, use cases, system boundary and relationships (UML)',
subTopics: [
'What is a Use Case Diagram?',
'Main Components (Actor, Use Case, System Boundary, Relationship)',
'Association',
'How to Identify Actors and Use Cases',
'<<include>> Relationship',
'<<extend>> Relationship',
'Generalization Relationship',
'Relationship Summary',
'Include vs Extend',
'General Steps to Draw a Use Case Diagram',
'Example: Online Banking System',
'Case Studies: In Class',
'Case Studies: Take Home',
],
definitions: [
{ term: 'Use Case Diagram', meaning: 'A UML diagram that shows who interacts with a system, what the system can do, and how actors and functions are related.' },
{ term: 'Actor', meaning: 'A person, system, device or other entity that interacts with the system. It represents a role, not a specific person.' },
{ term: 'Use Case', meaning: 'Something an actor wants the system to do, drawn as an oval with a short action name.' },
{ term: 'System Boundary', meaning: 'A rectangle around the use cases that shows what is inside and outside the system, with the system name on top.' },
{ term: 'Association', meaning: 'A solid line showing that an actor interacts with a use case.' },
{ term: '<<include>>', meaning: 'A relationship where a base use case must use the behavior of another use case. The included behavior is mandatory.' },
{ term: '<<extend>>', meaning: 'A relationship where a use case adds extra, optional behavior to a base use case that can work without it.' },
{ term: 'Generalization', meaning: 'An is-a relationship between a child and a parent, drawn as an arrow with a triangular head from child to parent.' },
{ term: 'Base Use Case', meaning: 'The main use case that uses or is extended by another use case.' },
{ term: 'Candidate Use Cases', meaning: 'Activities that actors want the system to do, found by asking what each actor wants from the system.' },
],
keyPoints: [
'A use case diagram gives a high-level view of the functional requirements of a system.',
'There are four main components: actor, use case, system boundary and relationship.',
'An actor is a role (Doctor), not a person name (Dr. John).',
'Humans are drawn as stick figures; external systems as a rectangle labelled <<actor>>.',
'Use cases are ovals with short, meaningful, action-based names.',
'The system boundary is a rectangle that separates the system from the outside.',
'The four relationships are association, include, extend and generalization.',
'Association uses a solid line between an actor and a use case.',
'To find actors ask who or what interacts with the system; to find use cases ask what each actor wants the system to do.',
'INCLUDE = MUST happen; direction is Base -> Included (e.g. Check Order Status -> Login).',
'EXTEND = EXTRA behavior; direction is Extension -> Base (e.g. Issue Fine -> Return Book).',
'The base use case works without an extension but cannot complete without an included use case.',
'GENERALIZATION = IS-A; direction is Child -> Parent, with a triangular arrowhead.',
'Use include to reuse common mandatory behavior such as Login across many use cases.',
'Drawing steps: system, boundary, actors, use cases, associations, include, extend, generalization.',
'Clue words: must/before/every suggest include; may/if/additional suggest extend; two types of suggests generalization.',
'In the banking example, Deposit, Withdraw and Transfer include Update Balance; Calculate Bonus extends Deposit Funds; NRFC Customer generalizes Customer.',
],
},
},


{
id: 6,
title: 'Activity Diagrams',
content: `
<span class="lesson-badge">LESSON 06</span>
<h1>Activity Diagrams</h1>
<div class="meta-info">ICT2142 <span>•</span> 12 min read</div>

<div class="callout callout-blue">
  <span class="callout-label">Objectives</span>
  <p>After this lesson, you should be able to:</p>
  <ul>
    <li>Identify the <strong>notations</strong> used in activity diagrams.</li>
    <li><strong>Draw activity diagrams</strong> for given scenarios.</li>
  </ul>
</div>

<h2>Introduction</h2>
<p><strong>Activity diagrams</strong> are often called <strong>"OO flowcharts"</strong> (Object-Oriented flowcharts).</p>
<ul>
  <li>They can show both <strong>data flow</strong> and <strong>control flow</strong>.</li>
  <li>They let you model a process as a collection of <strong>activities</strong> and the <strong>transitions</strong> between those activities.</li>
  <li>They are especially useful for <strong>process modeling</strong>, <strong>behavior visualization</strong>, <strong>requirement analysis</strong>, <strong>process improvement</strong>, and <strong>communication among stakeholders</strong>.</li>
</ul>

<div class="callout callout-blue">
  <span class="callout-label">Main Purpose</span>
  <p>The main purpose of an activity diagram is to model the <strong>flow of activities and actions</strong> within a system or process.</p>
</div>

<h3>Elements of an Activity Diagram</h3>
<ul>
  <li><strong>Action nodes</strong></li>
  <li><strong>Control nodes</strong>
    <ul>
      <li><strong>Initial</strong> and <strong>final</strong> nodes (final nodes have two types: <strong>activity final</strong> and <strong>flow final</strong>)</li>
      <li><strong>Decision</strong> and <strong>merge</strong></li>
      <li><strong>Fork</strong> and <strong>join</strong></li>
    </ul>
  </li>
  <li><strong>Object nodes</strong></li>
</ul>

<h3>When to Use Activity Diagrams?</h3>
<ul>
  <li>To model <strong>flows of actions</strong>, <strong>decisions</strong>, and <strong>control logic</strong>.</li>
  <li>To show how actions are <strong>distributed across actors or components</strong> using <strong>swimlanes</strong>.</li>
</ul>

<div class="divider"></div>

<h2>Activity Diagram Notations</h2>

<h3>1. Activity</h3>
<p>An <strong>activity</strong> is a behavior made up of one or more actions. It is a network of <strong>nodes</strong> connected by <strong>edges</strong>.</p>
<ul>
  <li><strong>Action nodes</strong> — executable steps.</li>
  <li><strong>Control nodes</strong> — manage the flow of execution (e.g., decisions, forks).</li>
  <li><strong>Object nodes</strong> — objects or data used within the activity.</li>
  <li><strong>Edges</strong> — paths or flows of execution between nodes.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Every activity <strong>begins with an initial node</strong> and <strong>ends with a final node</strong>.</p>
</div>

<h3>2. Actions</h3>
<p><strong>Actions</strong> are the basic units of behavior in an activity diagram. They are drawn as <strong>rounded rectangles</strong>.</p>
<pre><code>  ( Write letter )      &lt;- rounded rectangle = action</code></pre>
<ul>
  <li>The label can be written in <strong>plain English</strong> or <strong>pseudo-code</strong>.</li>
  <li>In English, the label should be a <strong>verb or verb phrase</strong> (e.g., "Post letter"), because an action is something being performed.</li>
</ul>

<h3>Properties of Actions</h3>
<ul>
  <li><strong>Atomic</strong> — not broken down inside the activity; treated as a single step.</li>
  <li><strong>Uninterruptible</strong> — once it starts, it runs to completion.</li>
  <li><strong>Instantaneous</strong> — assumed to take negligible time compared to the whole activity.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Actions are <strong>Atomic</strong>, <strong>Uninterruptible</strong> and <strong>Instantaneous</strong>.</p>
</div>

<h3>3. Action Flow</h3>
<p>Action flows are also called <strong>edges</strong> or <strong>paths</strong>. They show the <strong>transition from one action to another</strong>, drawn as arrows.</p>
<pre><code>( Action A ) ------&gt; ( Action B )</code></pre>

<h3>4. Starting and Stopping</h3>
<ul>
  <li><strong>Initial node</strong> — the starting point. Drawn as a <strong>solid filled circle</strong>.</li>
  <li><strong>Activity final node</strong> — ends the <strong>entire activity</strong>. Drawn as a <strong>bull's-eye</strong> (filled circle inside an outer circle).</li>
  <li><strong>Flow final node</strong> — drawn as a <strong>circle with an X</strong>. It ends <strong>only the flow that reaches it</strong>, not the whole activity.</li>
</ul>
<pre><code>  (●)   Initial node

(◉) Activity final node (ends everything)
(⊗) Flow final node (ends one flow only)</code></pre>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>Do not mix up the two final nodes. <strong>Activity final</strong> stops the <strong>whole activity</strong>. <strong>Flow final</strong> stops <strong>only one path</strong>.</p>
</div>

<h3>5. Decision and Merge Nodes</h3>
<p>Both are drawn as a <strong>diamond</strong>. They control <strong>alternative flows</strong> inside an activity.</p>

<p><strong>Decision node</strong></p>
<ul>
  <li>Has <strong>one incoming flow</strong> and <strong>multiple outgoing flows</strong>.</li>
  <li>Each outgoing flow has a <strong>guard</strong> (a condition), written like <code>[is junk]</code>.</li>
  <li>Only <strong>one path</strong> is chosen at runtime.</li>
</ul>

<p><strong>Merge node</strong></p>
<ul>
  <li>Has <strong>multiple incoming flows</strong> and <strong>one outgoing flow</strong>.</li>
  <li>Joins alternative paths <strong>without synchronization</strong>.</li>
  <li><strong>Any one</strong> incoming flow can continue the execution.</li>
</ul>

<pre><code>               [condition 1] ---&gt; ( Action X ) ---

Decision <> > Merge <> --->
[condition 2] ---> ( Action Y ) ---</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Decision</strong> = 1 in, many out, only <strong>one</strong> path taken.<br><strong>Merge</strong> = many in, 1 out, <strong>no waiting</strong>.</p>
</div>

<div class="divider"></div>

<h2>Exercises on Basic Notations</h2>

<h3>Exercise 1 — Posting a Letter</h3>
<p>Draw an activity diagram for posting a letter using these actions: <strong>Write letter</strong>, <strong>Address letter</strong>, <strong>Post letter</strong>.</p>
<pre><code>(●) --&gt; ( Write letter ) --&gt; ( Address letter ) --&gt; ( Post letter ) --&gt; (◉)</code></pre>

<h3>Exercise 2 — Getting Mail</h3>
<ul>
  <li>The activity starts with the <strong>Get mail</strong> action.</li>
  <li>If the mail is junk, <code>[is junk]</code> is true. Go to <strong>Bin mail</strong>, then to the stop state.</li>
  <li>Otherwise, go to <strong>Open mail</strong>, then to the stop state.</li>
</ul>
<p><strong>Answer (text version):</strong></p>
<pre><code>(●) --&gt; ( Get mail ) --&gt; &lt;decision&gt;
                           |
        [is junk] ---------+--------- [else]
            |                           |
      ( Bin mail )                ( Open mail )
            |                           |
            +-----------&gt; (◉) &lt;---------+</code></pre>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Always <strong>label every outgoing arrow</strong> of a decision node with a guard. Use <code>[else]</code> for the remaining case.</p>
</div>

<div class="divider"></div>

<h2>Partitions (Swimlanes)</h2>
<p>Elements in an activity diagram can be organized using <strong>partitions</strong>, also called <strong>swimlanes</strong>. A partition shows <strong>who is responsible</strong> for performing each action.</p>

<h3>What Can a Partition Represent?</h3>
<ul>
  <li><strong>In business modeling:</strong> business units, departments or divisions, business actors or roles, organizations.</li>
  <li><strong>In system modeling:</strong> systems, subsystems, external systems.</li>
  <li><strong>In application modeling:</strong> objects, components, logical entities within the application.</li>
</ul>

<h3>Example — Airline Check-in</h3>
<p>The swimlanes are decided by <strong>who performs each action</strong>.</p>

<p><strong>Swimlane: Passenger</strong> (user / actor behaviors)</p>
<ul>
  <li>Showing ticket at check-in counter</li>
  <li>Checking luggage</li>
  <li>Paying fee</li>
</ul>

<p><strong>Swimlane: Passenger Services</strong> (airline staff / system responsibilities)</p>
<ul>
  <li>Verifying ticket</li>
  <li>Referring passenger to customer services</li>
  <li>Accepting luggage</li>
  <li>Issuing boarding pass</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>A <strong>swimlane</strong> = <strong>responsibility</strong>. Put each action in the lane of the person, role, or system that performs it.</p>
</div>

<div class="divider"></div>

<h2>Forks and Joins (Concurrent Threads)</h2>
<p>Activity diagrams can model <strong>concurrent flows</strong>. Concurrency means activities that can happen <strong>in parallel</strong>.</p>
<ul>
  <li>A <strong>fork node</strong> splits <strong>one flow into multiple concurrent flows</strong>.</li>
  <li>A <strong>join node</strong> <strong>synchronizes</strong> concurrent flows back into <strong>one flow</strong>.</li>
</ul>

<h3>Fork vs Decision</h3>
<ul>
  <li>Fork and join are similar to <strong>decision</strong> and <strong>merge</strong> nodes.</li>
  <li>The big difference is <strong>concurrency</strong>.</li>
  <li>A fork has <strong>one flow in</strong> and <strong>many flows out</strong>, like a decision node.</li>
  <li>A decision node selects <strong>only one</strong> outgoing flow. A fork makes <strong>all</strong> outgoing flows happen <strong>at the same time</strong>.</li>
</ul>

<h3>Join</h3>
<ul>
  <li>A join has <strong>many flows in</strong> and <strong>one flow out</strong>, like a merge node.</li>
  <li>With a join, <strong>all incoming flows must finish</strong> before the outgoing flow starts.</li>
</ul>

<pre><code>              +--&gt; ( Action A ) --+

( Start ) --|===== =====|--> ( Next )
fork bar +--> ( Action B ) --+ join bar</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Decision</strong> → picks <strong>one</strong> path. <strong>Fork</strong> → takes <strong>all</strong> paths together.<br><strong>Merge</strong> → <strong>any one</strong> incoming flow continues. <strong>Join</strong> → <strong>all</strong> incoming flows must arrive.</p>
</div>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>A common exam mistake is using a <strong>diamond</strong> for parallel work. Use a <strong>fork/join bar</strong> for concurrency and a <strong>diamond</strong> for alternatives.</p>
</div>

<div class="divider"></div>

<h2>Object Flow</h2>
<p><strong>Object flow</strong> shows the <strong>creation and modification of objects</strong> by activities.</p>
<ul>
  <li><strong>Action → Object:</strong> the action <strong>produces, creates, or updates</strong> the object.</li>
  <li><strong>Object → Action:</strong> the action <strong>uses, reads, or needs</strong> the object.</li>
</ul>
<pre><code>( Receive order ) ---&gt; [ Order ] ---&gt; ( Fill order )

creates the object uses the object</code></pre>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Show <strong>only the important objects</strong> on an object flow. Too many objects make the diagram messy.</p>
</div>

<h3>Showing Object State</h3>
<p>You can show an object's <strong>state</strong> by writing the state name in <strong>square brackets below the object's name</strong>.</p>
<pre><code>[ Order ]

[ accepted ]</code></pre>

<div class="divider"></div>

<h2>More Exercises</h2>

<h3>Exercise 3 — Creating a Document</h3>
<p>Draw an activity diagram for creating a document using a word processing package. The steps are:</p>
<ol>
  <li>Open the word processing package.</li>
  <li>Create a file.</li>
  <li>Save the file under a unique name within its directory.</li>
  <li>Type the document.</li>
  <li>If graphics are needed: open the graphics package, create the graphics, and paste them into the document.</li>
  <li>If a spreadsheet is needed: open the spreadsheet package, create the spreadsheet, and paste it into the document.</li>
  <li>Save the file.</li>
  <li>Print a hard copy of the document.</li>
  <li>Exit the word processing package.</li>
</ol>
<p><strong>Answer outline:</strong></p>
<pre><code>(●) -&gt; Open word processor -&gt; Create file -&gt; Save file (unique name)
-&gt; Type document -&gt; &lt;decision: graphics needed?&gt;
     [yes] Open graphics package -&gt; Create graphics -&gt; Paste graphics
     [no]  (skip)
   -&gt; &lt;merge&gt; -&gt; &lt;decision: spreadsheet needed?&gt;
     [yes] Open spreadsheet package -&gt; Create spreadsheet -&gt; Paste spreadsheet
     [no]  (skip)
   -&gt; &lt;merge&gt; -&gt; Save file -&gt; Print hard copy
   -&gt; Exit word processor -&gt; (◉)</code></pre>

<h3>Exercise 4 — Order Processing</h3>
<ul>
  <li><strong>Requested order</strong> is the input parameter of <strong>Receive order</strong>.</li>
  <li>If the order is accepted: fill in all required information, send the invoice, then accept the payment.</li>
  <li>When the payment is accepted, the order is shipped.</li>
  <li>This business flow allows <strong>shipment at the same time as</strong> sending the invoice and confirming payment.</li>
  <li>Finally, the order is <strong>closed</strong>.</li>
</ul>
<p><strong>Answer outline:</strong></p>
<pre><code>(●) -&gt; Receive order (input: Requested order)
-&gt; &lt;decision: order accepted?&gt;
    [accepted] -&gt; Fill order
          -&gt; FORK
              Thread 1: Ship order
              Thread 2: Send invoice -&gt; Accept payment
          -&gt; JOIN -&gt; Close order -&gt; (◉)
    [rejected] -&gt; Close order -&gt; (◉)</code></pre>

<h3>Exercise 5 — Client Engagement Process</h3>
<p>A company follows a structured process with prospective clients:</p>
<ul>
  <li>A <strong>sales person</strong> contacts a client to schedule an appointment.</li>
  <li><strong>Onsite meeting:</strong> a corporate <strong>technician</strong> prepares the meeting facilities.</li>
  <li><strong>Offsite meeting:</strong> a <strong>consultant</strong> prepares the required equipment.</li>
  <li>After preparation, the <strong>consultant</strong> meets the client.</li>
  <li>After the meeting, the <strong>sales person</strong> sends a follow-up letter.</li>
  <li>If the client gives a <strong>statement of the problem</strong>, the consultant creates a <strong>proposal</strong> and sends it to the client.</li>
  <li>If the client does <strong>not</strong> give a problem statement, the process ends.</li>
</ul>
<p>Construct a UML activity diagram for this workflow. Use <strong>swimlanes</strong> for Sales Person, Technician, and Consultant.</p>

<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>In this scenario, the <strong>client</strong> is an <strong>external participant</strong>. The client does <strong>not perform modeled actions</strong> and only <strong>triggers conditions</strong> (for example, "provides statement of problem").</p>
</div>

<pre><code>Sales Person : (●) -&gt; Contact client &amp; schedule appointment -&gt; &lt;decision: meeting type&gt;

Technician : [onsite] -> Prepare meeting facilities ----+
Consultant : [offsite] -> Prepare equipment -------------+-> <merge>
Consultant : Meet client
Sales Person : Send follow-up letter -> <decision>
Consultant : [problem statement provided] -> Create proposal -> Send proposal -> (◉)
Sales Person : [no statement] -> (◉)</code></pre>

<div class="divider"></div>

<h2>Quick Notation Summary</h2>
<pre><code>Initial node ........ solid filled circle

Activity final ...... bull's-eye (circle inside circle)
Flow final .......... circle with X
Action .............. rounded rectangle
Decision / Merge .... diamond
Fork / Join ......... thick bar
Object node ......... rectangle
Swimlane ............ vertical or horizontal partition</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Activity diagrams = <strong>OO flowcharts</strong> that show <strong>control flow and data flow</strong>. Always start with an <strong>initial node</strong> and end with a <strong>final node</strong>.</p>
</div>

`,
summary: {
topic: 'Activity Diagrams in UML: notations, control flow, swimlanes, concurrency and object flow',
subTopics: [
'Introduction',
'Elements of an Activity Diagram',
'When to Use Activity Diagrams?',
'Activity',
'Actions',
'Action Flow',
'Starting and Stopping',
'Decision and Merge Nodes',
'Exercises 1 and 2',
'Partitions (Swimlanes)',
'Forks and Joins',
'Object Flow',
'Exercises 3, 4 and 5',
'Quick Notation Summary',
],
definitions: [
{ term: 'Activity Diagram', meaning: 'A UML diagram, often called an OO flowchart, that models the flow of activities, decisions and control logic in a process.' },
{ term: 'Activity', meaning: 'A behavior made up of one or more actions, shown as a network of nodes connected by edges.' },
{ term: 'Action', meaning: 'The basic unit of behavior, drawn as a rounded rectangle. It is atomic, uninterruptible and instantaneous.' },
{ term: 'Action Flow (Edge)', meaning: 'An arrow showing the transition from one action or node to the next.' },
{ term: 'Initial Node', meaning: 'The starting point of an activity, drawn as a solid filled circle.' },
{ term: 'Activity Final Node', meaning: "Ends the entire activity. Drawn as a bull's-eye." },
{ term: 'Flow Final Node', meaning: 'Ends only the flow that reaches it, not the whole activity. Drawn as a circle with an X.' },
{ term: 'Decision Node', meaning: 'A diamond with one incoming flow and several guarded outgoing flows. Only one path is chosen.' },
{ term: 'Guard', meaning: 'A condition written in square brackets on a flow leaving a decision node, e.g. [is junk].' },
{ term: 'Merge Node', meaning: 'A diamond with many incoming flows and one outgoing flow. It joins alternative paths without synchronization.' },
{ term: 'Partition (Swimlane)', meaning: 'A section of the diagram showing who or what is responsible for performing the actions inside it.' },
{ term: 'Concurrency', meaning: 'Activities that can proceed in parallel at the same time.' },
{ term: 'Fork Node', meaning: 'Splits one incoming flow into multiple concurrent outgoing flows. All outgoing flows occur.' },
{ term: 'Join Node', meaning: 'Synchronizes concurrent flows into one. All incoming flows must finish before the outgoing flow starts.' },
{ term: 'Object Flow', meaning: 'Shows how objects are created, modified or used by actions.' },
{ term: 'Object State', meaning: 'The condition of an object, written in square brackets below the object name.' },
],
keyPoints: [
'Activity diagrams are "OO flowcharts" that show both control flow and data flow.',
'They are useful for process modeling, behavior visualization, requirement analysis, process improvement and stakeholder communication.',
'Elements: action nodes, control nodes (initial, final, decision, merge, fork, join) and object nodes.',
'Every activity begins with an initial node and ends with a final node.',
'Actions are rounded rectangles labeled with a verb or verb phrase. They are atomic, uninterruptible and instantaneous.',
'Activity final ends the whole activity. Flow final ends only one flow.',
'Decision and merge both use a diamond. Decision picks one guarded path; merge lets any one incoming flow continue.',
'Fork and join use a bar. Fork starts all outgoing flows concurrently; join waits for all incoming flows.',
'The key difference between decision and fork is concurrency.',
'Swimlanes (partitions) show responsibility for actions, such as actors, departments, systems or objects.',
'Object flow: action → object means create or update; object → action means use or read. Show only important objects.',
'Object state is shown in square brackets below the object name.',
'Exercises practice: sequential flow (posting a letter), decision (junk mail), sequence with decisions (document creation), fork and join (order processing), and swimlanes with decisions (client engagement).',
],
},
},


{
id: 7,
title: 'Class Diagrams',
content: `
<span class="lesson-badge">LESSON 07</span>
<h1>Class Diagrams</h1>
<div class="meta-info">ICT2142 <span>•</span> 18 min read</div>

<div class="callout callout-blue">
  <span class="callout-label">Objectives</span>
  <p>After this lesson, you should be able to:</p>
  <ul>
    <li>Identify the <strong>difference between domain model and design model</strong> class diagrams.</li>
    <li><strong>Draw class diagrams</strong> by analyzing a given scenario.</li>
  </ul>
</div>

<h2>Domain Class Diagram vs Design Class Diagram</h2>

<h3>Domain Class Diagram</h3>
<ul>
  <li>Models the <strong>concepts in the problem domain</strong>.</li>
  <li>Usually shows only <strong>class names and relationships</strong>.</li>
  <li>Helps define the <strong>vocabulary</strong> of the problem domain.</li>
</ul>

<h3>Design Class Diagram</h3>
<ul>
  <li>Models the <strong>actual software design</strong>.</li>
  <li>Includes more detail: <strong>attributes</strong>, <strong>operations (methods)</strong> and <strong>visibility</strong>.</li>
  <li>Gives more detail than a domain class diagram.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Domain</strong> class diagram = class names + relationships only.<br><strong>Design</strong> class diagram = names + attributes + operations + visibility + relationships.</p>
</div>

<h3>From Analysis to Design</h3>
<p>Moving from analysis to design means moving from understanding <strong>what</strong> the system must do (requirements and domain understanding) to deciding <strong>how</strong> it will do it (implementation details). This makes sure business requirements become a structured, implementable software solution.</p>

<p>Two important diagrams are used in this transition:</p>
<ol>
  <li><strong>Design Class Diagram (Static View)</strong>
    <ul>
      <li>Shows the <strong>static structure</strong> of the system.</li>
      <li>Comes from the Domain Model, with extra design details such as methods, attributes and relationships.</li>
      <li>Focuses on object-oriented relationships, class hierarchies and encapsulation.</li>
    </ul>
  </li>
  <li><strong>Sequence Diagram (Dynamic View)</strong>
    <ul>
      <li>Shows the <strong>dynamic behavior</strong> of the system by modeling interactions between objects over time.</li>
      <li>Shows how objects work together to do a function by specifying <strong>message flows</strong>.</li>
    </ul>
  </li>
</ol>

<h3>Design Class Models</h3>
<ul>
  <li>They contain <strong>software classes</strong> with attributes and operations, together with detailed relationships between the classes.</li>
  <li>A design class model <strong>extends the domain class model</strong> by refining attributes, relationships and operations.</li>
</ul>

<div class="divider"></div>

<h2>Class Diagrams</h2>
<ul>
  <li>Give an <strong>overview of a system</strong> by showing its classes and the relationships between them.</li>
  <li>Show the <strong>attributes</strong> (data) and <strong>operations</strong> (methods/functions) of each class.</li>
  <li>Describe the <strong>overall structure and architecture</strong> of system components.</li>
</ul>

<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>A class diagram gives a <strong>static view</strong> of the system. It shows <strong>how the system is organized</strong>, not how it behaves while running.</p>
</div>

<div class="divider"></div>

<h2>Finding Classes</h2>
<p>There are two common ways to identify classes in a system:</p>
<ol>
  <li><strong>Noun–Verb Analysis</strong></li>
  <li><strong>CRC Analysis</strong> (Class–Responsibility–Collaboration)</li>
</ol>

<h3>Finding Classes Using Noun–Verb Analysis</h3>
<p>This method has been used for many years and works well because it is based on the <strong>direct analysis of the language</strong> used in the problem domain.</p>
<p>When a text description is given:</p>
<ul>
  <li><strong>Nouns and noun phrases</strong> usually point to <strong>classes or attributes</strong>.</li>
  <li><strong>Verbs and verb phrases</strong> point to <strong>responsibilities or operations (methods)</strong> of a class.</li>
</ul>

<h3>Hidden Classes</h3>
<p>Some classes are part of the problem domain but are <strong>not clearly mentioned</strong> in the description. These are called <strong>hidden classes</strong>.</p>

<div class="callout callout-blue">
  <span class="callout-label">Example — University Course Registration</span>
  <p>Description: <em>"Students enroll in courses offered by the university."</em></p>
  <p><strong>Identified nouns:</strong> Student, Course, University.</p>
  <p><strong>Hidden class:</strong> <code>Enrollment</code>. The system must track which student registered for which course, in which semester, with what grade.</p>
</div>
<pre><code>Enrollment
enrollmentID
semester
grade</code></pre> <div class="callout callout-red"> <span class="callout-label">Warning</span> <p>Be careful with <strong>synonyms</strong> (different words, same meaning) and <strong>homonyms</strong> (one word, many meanings). They can cause wrong classes or operations.<br>Example: <strong>Order</strong> can mean a purchase request (e-commerce) or a command/instruction (military or management).</p> </div> <h3>Noun–Verb Analysis: Step by Step</h3> <h3>Step 01 — Noun Phrase Identification</h3> <p>Find the nouns and noun phrases in the system definition. Example system definition:</p> <ul> <li>The <strong>Portfolio Manager</strong> shall be able to roll up <strong>portfolios</strong> on several <strong>levels</strong>.</li> <li>A <strong>Trader</strong> shall be able to place <strong>orders</strong>, on behalf of a <strong>portfolio</strong>, that generate one or more <strong>trades</strong>.</li> <li>A <strong>Portfolio Manager</strong> shall be able to select a <strong>purchase method</strong> in conjunction with placing a <strong>sell order</strong>.</li> <li>A <strong>trade entry</strong> shall generate <strong>forecasted cash flows</strong> associated with the given <strong>trade lot</strong>.</li> <li>The <strong>system</strong> shall match up <strong>actual cash flows</strong> with <strong>forecasted cash flows</strong>.</li> <li>The <strong>system</strong> shall automatically generate appropriate <strong>postings</strong> to the <strong>General Ledger</strong>.</li> <li>The <strong>system</strong> shall allow an <strong>Assistant Trader</strong> to modify <strong>trade data</strong> and propagate the <strong>results</strong> accordingly.</li> </ul> <h3>Step 02 — Noun Phrase Consolidation</h3> <p>After finding the nouns and noun phrases:</p> <ol> <li>Make plural terms <strong>singular</strong>.</li> <li>Remove <strong>duplicate</strong> terms.</li> <li>Combine <strong>synonyms</strong> into a single term.</li> <li>Put the list in <strong>alphabetical order</strong>.</li> </ol> <p>Result after consolidation:</p> <pre><code>Assistant Trader | Portfolio | System

Cash Flow | Portfolio Manager| Trade
General Ledger | Posting | Trade Data
Level | Purchase Method | Trade Entry
Order | Result | Trade Lot
Sell Order | Trader |</code></pre>

<h3>Step 03 — Noun Phrase Analysis</h3>
<p>Now <strong>remove</strong> the following from the list:</p>
<ul>
  <li>References to the <strong>system itself</strong> or its context.</li>
  <li>Nouns that are <strong>out of scope</strong> of the project.</li>
  <li>Nouns that are <strong>too vague</strong>.</li>
  <li>Nouns that represent <strong>actions</strong>.</li>
</ul>
<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p><strong>Actors</strong> (like Trader or Portfolio Manager) may be removed from the candidate classes and placed in <strong>use case diagrams</strong> instead.</p>
</div>

<h3>Step 04 — Draw the Initial Analysis Class Model</h3>
<ul>
  <li>Draw a model showing <strong>only class names, generalizations (inheritance) and associations</strong>.</li>
  <li>Just as noun phrase analysis finds candidate classes, <strong>verb phrase analysis finds relationships</strong> between classes.</li>
  <li>The result can be shown in a table of <strong>candidate associations</strong>.</li>
</ul>
<pre><code>Student   enrolls in   Course

Professor teaches Course</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>Noun–verb analysis steps: <strong>1. Identify</strong> nouns → <strong>2. Consolidate</strong> → <strong>3. Analyze</strong> (remove unwanted) → <strong>4. Draw</strong> the initial class model.<br><strong>Nouns → classes/attributes. Verbs → operations/relationships.</strong></p>
</div>

<h3>Finding Classes Using CRC Analysis</h3>
<ul>
  <li><strong>CRC</strong> stands for <strong>Class, Responsibilities and Collaborators</strong>.</li>
  <li>It uses a very simple tool: the <strong>sticky note</strong> (index card).</li>
  <li>You begin by marking up sticky notes, one for each candidate class.</li>
</ul>

<p>A <strong>CRC card</strong> has three compartments:</p>
<ul>
  <li><strong>Top:</strong> name of the candidate class.</li>
  <li><strong>Left:</strong> <strong>responsibilities</strong> of the class.</li>
  <li><strong>Right:</strong> <strong>collaborators</strong> of the class.</li>
</ul>
<pre><code>+---------------------------------+

| Class Name |
+----------------+----------------+
| Responsibilities| Collaborators |
| | |
+----------------+----------------+</code></pre>

<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p><strong>Collaborators</strong> are other classes that help a class fulfill its responsibilities. So the collaborators compartment records the <strong>relationships between classes</strong>.</p>
</div>

<p>CRC analysis is a <strong>two-phase activity</strong>:</p>
<ol>
  <li><strong>Brainstorming</strong> — gather information.</li>
  <li><strong>Analysis</strong> — examine and refine the information.</li>
</ol>

<div class="divider"></div>

<h2>Class Diagram Notations</h2>

<h3>1. Classes</h3>
<p>A <strong>class</strong> is a description (blueprint) of a set of objects that share the same <strong>attributes, operations (methods), relationships and behavior</strong>.</p>
<p>In UML, a class is a <strong>rectangle with three compartments</strong>:</p>
<pre><code>+-------------------+

| Class Name |
+-------------------+
| Attributes |
+-------------------+
| Operations |
+-------------------+</code></pre>

<h3>2. Visibility Modifiers</h3>
<p>Visibility modifiers show <strong>who can access</strong> an attribute or operation.</p>
<pre><code>Symbol | Visibility        | Meaning

-------+-------------------+------------------------------------------

| Public | Accessible from any other class
| Private | Accessible only within the same class
| Protected | Accessible within the class and its subclasses

~ | Package (Default) | Accessible only to classes in the same package</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>+</strong> Public &nbsp; <strong>−</strong> Private &nbsp; <strong>#</strong> Protected &nbsp; <strong>~</strong> Package</p>
</div>

<h3>Example — Student Class</h3>
<pre><code>+----------------------------------+

| Student |
+----------------------------------+
| + studentID : Integer |
| - password : String |
| # email : String |
| ~ address : String |
+----------------------------------+
| + registerCourse() : Void |
| + dropCourse() : Void |
| - calculateGPA() : Float |
+----------------------------------+</code></pre>

<h3>3. Attributes and Operations</h3>
<p><strong>Attributes</strong> (fields, instance variables) use this format:</p>
<pre><code>visibility name : data_type

Example: - balance : double</code></pre>
<p><strong>Operations / methods</strong> use this format:</p>
<pre><code>visibility name (parameters) : return_type
Example: + calDistance(p1: double) : double</code></pre>

<h3>4. Objects</h3>
<p>An <strong>object</strong> is an <strong>instance of a class</strong>. The top compartment holds the <strong>object identifier</strong>, which is <strong>always underlined</strong>.</p>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>Do not forget to <strong>underline</strong> the object name. This is how an <strong>object</strong> is told apart from a <strong>class</strong>.</p>
</div>

<div class="divider"></div>

<h2>Relationships</h2>

<h3>1. Association</h3>
<ul>
  <li>An <strong>association</strong> connects two classes and shows a meaningful relationship between them.</li>
  <li>It is drawn as a <strong>straight line</strong> between the classes.</li>
  <li>A class can be associated with itself. This is a <strong>reflexive association</strong>.</li>
  <li>Associations can be decorated with <strong>multiplicity</strong> to show how many objects take part.</li>
</ul>

<h3>2. Directed Association</h3>
<ul>
  <li>A simple relationship where one class is linked to another with an <strong>explicit direction</strong>.</li>
  <li>One class directly <strong>knows about or uses</strong> another class.</li>
  <li>Usually <strong>one-directional</strong>: one class depends on or refers to the other.</li>
  <li>Drawn as a <strong>line with an arrow</strong> pointing to the class being referenced.</li>
</ul>
<pre><code>Car ---------&gt; Engine</code></pre>
<p>Example: A <strong>Car</strong> knows about its <strong>Engine</strong>, but an Engine does not need to know about a specific Car.</p>

<h3>3. Multiplicity</h3>
<p><strong>Multiplicity</strong> tells how many instances of one class can be linked to one instance of another class. It is written at the <strong>target end</strong> of the association and shows the number of links between each instance of the source class and instances of the target class.</p>
<p>Example: one <strong>Vehicle</strong> can be linked to many <strong>Wheel</strong> instances.</p>

<p><strong>Multiplicity examples:</strong></p>
<ul>
  <li>A library can have <strong>zero or more</strong> books. (<code>0..*</code>)</li>
  <li>A person may or may not own a car. (<code>0..1</code>)</li>
  <li>A teacher can teach multiple students. (<code>1..*</code> or <code>*</code>)</li>
  <li>Each person has <strong>exactly one</strong> passport. (<code>1</code>)</li>
</ul>
<pre><code>Library  1 ----------- 0..* Book

Person 1 ----------- 0..1 Car
Teacher 1 ----------- 1..* Student
Person 1 ----------- 1 Passport</code></pre>

<h3>4. Generalization</h3>
<ul>
  <li>Shows a <strong>generalization / specialization</strong> relationship, the <strong>"is a"</strong> relationship.</li>
  <li>Drawn as an association with a <strong>closed (hollow triangle) arrowhead</strong>.</li>
  <li>The arrowhead points to the <strong>superclass</strong>. The other end is the <strong>subclass</strong>.</li>
</ul>
<pre><code>Student ---------|&gt; Person

(subclass) (superclass)</code></pre>

<h3>5. Dependency</h3>
<ul>
  <li>A <strong>temporary or weak</strong> relationship where one class depends on another but <strong>does not own</strong> it.</li>
  <li>Drawn as a <strong>dashed line with an arrow</strong> from the client class to the supplier class.</li>
</ul>
<pre><code>Client Class - - - - - - - -&gt; Supplier Class

Student - - - - - - - -> Library Card</code></pre>
<p>Example: A <strong>Student</strong> depends on a <strong>Library Card</strong> to access books. The Library Card does <strong>not</strong> depend on the Student. It exists independently and can be given to another student.</p>

<h3>6. Aggregation</h3>
<ul>
  <li>A constrained form of association, the <strong>"has-a"</strong> relationship.</li>
  <li>An association where one class <strong>belongs to a collection</strong>. Example: an Instructor is part of the Faculty.</li>
  <li>Shown with an <strong>empty (hollow) diamond</strong> on the side of the collection (the <strong>whole</strong>).</li>
</ul>
<pre><code>Faculty &lt;&gt;---------- Instructor</code></pre>

<h3>7. Composition</h3>
<ul>
  <li>A <strong>strong form of aggregation</strong>.</li>
  <li>The components <strong>cannot exist without</strong> the aggregate (the whole).</li>
  <li>Shown with a <strong>solid (filled) diamond</strong> on the side of the whole.</li>
  <li>The multiplicity at the whole's end is <strong>1</strong>, because the parts have no meaning outside the whole that owns them.</li>
  <li>It is an <strong>"is entirely made of"</strong> relationship.</li>
</ul>

<h3>Composition Example — House and Room</h3>
<pre><code>House ◆---------- Room
  1        1..*</code></pre>
<ul>
  <li>The diamond is on the <strong>whole/owner</strong> side (House).</li>
  <li>A House is composed of <strong>one or more</strong> Rooms.</li>
  <li>Each Room belongs to <strong>exactly one</strong> House.</li>
  <li>If the House is destroyed, the Rooms <strong>also cease to exist</strong>.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Aggregation</strong> = <strong>empty</strong> diamond (parts can exist alone).<br><strong>Composition</strong> = <strong>solid</strong> diamond (parts die with the whole).<br><strong>Generalization</strong> = <strong>closed arrowhead</strong> to the superclass.<br><strong>Dependency</strong> = <strong>dashed</strong> arrow.</p>
</div>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>A common exam mistake is mixing up aggregation and composition. Ask: <strong>"Can the part exist without the whole?"</strong> Yes → aggregation. No → composition.</p>
</div>

<h3>Composition / Aggregation Example</h3>
<p>A <strong>Box Office</strong> is a place where tickets for movies, plays, concerts or other events are sold. Use it as a scenario for practising both aggregation and composition.</p>

<div class="divider"></div>

<h2>Exercise — Hockey League</h2>
<p>Draw a UML class diagram for the problem domain of a hockey league. <strong>Label all associations with multiplicities.</strong></p>
<ul>
  <li>A hockey league is made up of <strong>at least four</strong> hockey teams.</li>
  <li>Each hockey team has <strong>six to twelve</strong> players, and <strong>one player captains</strong> the team.</li>
  <li>A team has a <strong>name</strong> and a <strong>record</strong>.</li>
  <li>Players have a <strong>number</strong> and a <strong>position</strong>.</li>
  <li>Hockey teams <strong>play games against each other</strong>. Each game has a <strong>score</strong> and a <strong>location</strong>.</li>
  <li>Teams are <strong>sometimes led by a coach</strong>. A coach has a <strong>level of accreditation</strong> and <strong>years of experience</strong>, and can coach <strong>multiple teams</strong>.</li>
  <li><strong>Coaches and players are people</strong>, and people have <strong>names and addresses</strong>.</li>
</ul>

<p><strong>Assumptions:</strong></p>
<ul>
  <li>Each player plays on only <strong>one team</strong>.</li>
  <li>Each captain captains only <strong>one team</strong>.</li>
  <li>Each team plays in only <strong>one league</strong>.</li>
</ul>

<div class="callout callout-blue">
  <span class="callout-label">Note</span>
  <p>A <strong>league</strong> is an association of sports teams that organizes matches for its members. The captain can also be shown as a <strong>second, named association</strong> between Player and Team.</p>
</div>

<p><strong>Answer (text version):</strong></p>
<pre><code>Person (name, address)

^ ^
| |
Player Coach
(number, (accreditationLevel,
position) yearsOfExperience)

League 1 ------------- 4..* Team (name, record)
Team 1 ------------- 6..12 Player (plays for)
Team 0..1 ---------- 1 Player (captain)
Coach 0..1 ---------- 0..* Team (coaches)
Team 2 ------------- 0..* Game (score, location) (plays in)</code></pre>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Use the <strong>"is a"</strong> phrases in the text to find <strong>generalizations</strong> (Coach is a Person, Player is a Person). Use <strong>"has / made up of"</strong> phrases to find <strong>associations</strong>, and read the numbers ("six to twelve", "at least four") to set <strong>multiplicities</strong>.</p>
</div>

`,
summary: {
topic: 'Class Diagrams: domain vs design models, finding classes, UML notations and relationships',
subTopics: [
'Domain Class Diagram vs Design Class Diagram',
'From Analysis to Design',
'Design Class Models',
'Class Diagrams',
'Finding Classes',
'Noun–Verb Analysis (Steps 01–04)',
'Hidden Classes',
'CRC Analysis',
'Class Diagram Notations',
'Classes',
'Visibility Modifiers',
'Attributes and Operations',
'Objects',
'Association',
'Directed Association',
'Multiplicity',
'Generalization',
'Dependency',
'Aggregation',
'Composition',
'Exercise — Hockey League',
],
definitions: [
{ term: 'Domain Class Diagram', meaning: 'Models concepts in the problem domain. Usually shows only class names and relationships.' },
{ term: 'Design Class Diagram', meaning: 'Models the actual software design with attributes, operations, visibility and relationships.' },
{ term: 'Class Diagram', meaning: 'A static UML view showing the classes of a system, their attributes, operations and relationships.' },
{ term: 'Noun–Verb Analysis', meaning: 'Finding classes from a text description. Nouns suggest classes or attributes; verbs suggest operations or relationships.' },
{ term: 'Hidden Class', meaning: 'A class inherent to the problem domain but not clearly mentioned in the description, e.g. Enrollment.' },
{ term: 'Synonym', meaning: 'Different words with the same meaning. Can cause duplicate or wrong classes.' },
{ term: 'Homonym', meaning: 'One word with multiple meanings, e.g. Order. Can cause wrong classes or operations.' },
{ term: 'CRC Analysis', meaning: 'Class–Responsibility–Collaboration technique that uses cards or sticky notes to find classes in two phases: brainstorming and analysis.' },
{ term: 'Collaborator', meaning: 'Another class that helps a class fulfill its responsibilities.' },
{ term: 'Class', meaning: 'A blueprint for objects sharing the same attributes, operations, relationships and behavior.' },
{ term: 'Object', meaning: 'An instance of a class. Its identifier is underlined.' },
{ term: 'Visibility', meaning: 'Shows accessibility: + public, - private, # protected, ~ package.' },
{ term: 'Association', meaning: 'A meaningful relationship between two classes, shown as a straight line.' },
{ term: 'Reflexive Association', meaning: 'An association between a class and itself.' },
{ term: 'Directed Association', meaning: 'A one-directional association where one class knows about or uses another. Shown with an arrow.' },
{ term: 'Multiplicity', meaning: 'Shows how many instances of one class can link to one instance of another, written at the target end.' },
{ term: 'Generalization', meaning: 'An "is a" relationship shown with a closed arrowhead pointing to the superclass.' },
{ term: 'Dependency', meaning: 'A temporary, weak relationship where one class uses another without owning it. Shown with a dashed arrow.' },
{ term: 'Aggregation', meaning: 'A "has-a" relationship where parts can exist without the whole. Shown with an empty diamond at the whole.' },
{ term: 'Composition', meaning: 'A strong aggregation where parts cannot exist without the whole. Shown with a solid diamond at the whole.' },
],
keyPoints: [
'Domain diagrams show class names and relationships; design diagrams add attributes, operations and visibility.',
'Analysis answers "what" the system does; design answers "how" it does it.',
'The class diagram is the static view; the sequence diagram is the dynamic view.',
'Design class model extends the domain class model by refining attributes, relationships and operations.',
'Two ways to find classes: Noun–Verb analysis and CRC analysis.',
'Noun–verb steps: identify noun phrases, consolidate, analyze (remove unwanted), draw the initial class model.',
'Remove from the candidate list: references to the system, out-of-scope nouns, vague nouns, nouns that are actions, and actors.',
'Watch for hidden classes, synonyms and homonyms.',
'CRC card: class name on top, responsibilities on the left, collaborators on the right.',
'Class rectangle has three compartments: name, attributes, operations.',
'Visibility symbols: + public, - private, # protected, ~ package.',
'Attribute format: visibility name : data_type. Operation format: visibility name(parameters) : return_type.',
'Object names are underlined.',
'Multiplicity examples: 0.., 0..1, 1.., 1.',
'Generalization arrow points to the superclass.',
'Dependency is dashed and weak; aggregation uses an empty diamond; composition uses a solid diamond.',
'Composition: if the whole is destroyed, the parts are destroyed too (House and Room).',
'Hockey league exercise combines generalization (Person), multiplicities (4..*, 6..12), a captain association and coach-team association.',
],
},
},







]