export const courseName = 'Object Oriented Analysis and Design'

export const lessons = [
  {
  id: 1,
  title: 'OO A & D: Basic Concepts',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Object Oriented Analysis and Design: Basic Concepts</h1>
    <div class="meta-info">ICT2142 <span>•</span> 35 min read</div>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>This lesson introduces the basic ideas behind <strong>Object Oriented Analysis and Design (OOAD)</strong>. You will learn what "object orientation" means, how classes and objects work together, how objects talk to each other through <strong>message passing</strong>, and the four main principles of OOP: <strong>Abstraction</strong>, <strong>Encapsulation</strong>, <strong>Inheritance</strong>, and <strong>Polymorphism</strong>.</p>
    </div>

    <h2>Lecture Objectives</h2>
    <p>After completing this lecture, you should be able to:</p>
    <ul>
      <li>Identify what <strong>object orientation</strong> is</li>
      <li>Describe the <strong>principles of object orientation</strong></li>
      <li>Describe the concept of <strong>class</strong> in detail</li>
      <li>Identify the concept of <strong>message passing</strong></li>
      <li>Identify <strong>high cohesion</strong> and <strong>low coupling</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>The Software Development Life Cycle (SDLC)</h2>
    <p>Before diving into object orientation, it helps to remember the general stages every software project goes through:</p>
    <pre><code>ANALYSIS → DESIGN → DEVELOPMENT → TESTING → DEPLOYMENT → MAINTENANCE</code></pre>
    <p>Object Oriented Analysis and Design fits into the early <strong>Analysis</strong> and <strong>Design</strong> stages of this cycle, before actual coding (Development) begins.</p>

    <div class="divider"></div>

    <h2>What is Object Orientation?</h2>
    <p><strong>Object orientation</strong> is about viewing and modeling any system as a set of <strong>interacting and interrelated objects</strong>.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>In an object-oriented environment:</p>
      <ul>
        <li>Software is composed of <strong>discrete objects</strong></li>
        <li>Each object <strong>encapsulates</strong> its own data and behaviour</li>
        <li>Objects represent <strong>real-world entities</strong></li>
      </ul>
    </div>

    <h3>Objects Are Self-Contained</h3>
    <p><strong>Object-oriented (OO) systems development</strong> builds software using self-contained modules called <strong>objects</strong>. Each object:</p>
    <ul>
      <li>Has its own data</li>
      <li>Has its own functionality</li>
      <li>Works independently but interacts with other objects</li>
    </ul>
    <p>Because objects are self-contained, they can be easily:</p>
    <ul>
      <li><strong>Replaced</strong> — swap one object without affecting others</li>
      <li><strong>Modified</strong> — update behavior without breaking the system</li>
      <li><strong>Reused</strong> — use the same object in different applications</li>
    </ul>

    <div class="divider"></div>

    <h2>Object Oriented Development Overview</h2>
    <p>Object oriented development happens in three connected stages:</p>

    <h3>OOA — Object Oriented Analysis</h3>
    <p>Emphasizes <strong>finding and describing the objects</strong> (or concepts) in the problem domain, i.e. <strong>domain objects</strong>.</p>

    <h3>OOD — Object Oriented Design</h3>
    <p>Emphasizes <strong>defining software objects</strong> and how they <strong>collaborate</strong> to fulfill the requirements.</p>

    <h3>OOP — Object Oriented Programming (Implementation)</h3>
    <p>Designed objects are implemented in a programming language. Implementation is also known as <strong>Coding</strong> or <strong>Construction</strong>.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>OO development offers a <strong>different model</strong> from the traditional software development approach. Functions (<strong>behaviour</strong>) and data (<strong>state</strong>) relating to a single object are self-contained, or <strong>encapsulated</strong>, in one place. Objects are grouped into <strong>classes</strong> — in object-oriented terms, we discover and describe classes involved in the problem domain.</p>
    </div>

    <h3>OOA vs OOD — Library Example</h3>
    <p><strong>OO Analysis</strong> examines requirements from the perspective of the classes and objects found in the vocabulary of the problem domain. The emphasis is on <strong>finding objects or concepts</strong> in the problem domain.</p>
    <p>Example — Library info system: concepts include <strong>Book</strong>, <strong>Library</strong>, and so on.</p>
    <p><strong>OO Design</strong> develops structures whereby sets of objects <strong>collaborate</strong> to provide the behaviours that satisfy the requirements of the problem. The emphasis is on defining software objects and how they collaborate.</p>
    <p>Example — In the library system, a <code>Book</code> object may have a <strong>title</strong> attribute and a <strong>getChapter</strong> method.</p>

    <div class="divider"></div>

    <h2>Why Use Object Orientation?</h2>
    <ul>
      <li><strong>Simplicity</strong></li>
      <li><strong>Reusability</strong></li>
      <li><strong>Increased quality</strong></li>
      <li><strong>Faster development</strong></li>
      <li><strong>Easily maintainable</strong></li>
      <li><strong>Scalable</strong></li>
      <li><strong>Modularity</strong></li>
      <li><strong>Modifiability</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>The OO Environment: Objects, Attributes & Methods</h2>

    <h3>What is an Object?</h3>
    <p>The term <strong>object</strong> was first formally used in the <strong>Simula</strong> language to simulate some aspect of reality.</p>
    <p>An object is a <strong>real-world entity</strong>:</p>
    <ul>
      <li>It <strong>knows</strong> things (has <strong>attributes</strong>)</li>
      <li>It <strong>does</strong> things (provides services, or has <strong>methods</strong>)</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Example</span>
      <p>Think of a <strong>Car</strong> object: "I am a Car. I know my color, manufacturer, cost, owner and model." Or a <strong>Fish</strong> object: "I am a Fish. I know my date of arrival and expiration." These are the object's <strong>attributes</strong>.</p>
      <p>Now think about what each object can do: a <strong>Person</strong> object says "I know how to compute my payroll," and a <strong>Car</strong> object says "I know how to stop." These are the object's <strong>methods</strong>.</p>
    </div>

    <h3>Attributes and Methods</h3>
    <ul>
      <li><strong>Attributes</strong>
        <ul>
          <li>Represented by a data type</li>
          <li>Describe the object's <strong>state</strong></li>
          <li>Car example: color, manufacturer, cost, owner, model, etc.</li>
        </ul>
      </li>
      <li><strong>Methods</strong>
        <ul>
          <li>Define the object's behavior and specify how an object's data is manipulated</li>
          <li>Car example: drive it, lock it, tow it, carry passenger in it</li>
        </ul>
      </li>
    </ul>

    <p><strong>Attributes represent state.</strong> For a car: Color, Manufacturer, Cost.</p>
    <p><strong>Methods represent behavior</strong> — what the object normally does, or what it can do on its own. A method <strong>implements</strong> the behavior of an object. Behavior denotes the collection of methods that abstractly describes what an object is capable of doing. For a car: Ride, Open doors.</p>

    <div class="divider"></div>

    <h2>Classes and Objects</h2>

    <h3>Objects Are Grouped Into Classes</h3>
    <p>A <strong>class</strong> represents a collection of objects that share the same characteristic properties.</p>
    <p>Example: the class <strong>Employee</strong> defines the property <strong>name</strong>. Each individual employee (object) will have a value for this property, such as "John," "Jane," or "Mark."</p>
    <pre><code>        Employee Class
        /      |      \\
   John obj  Jane obj  Mark obj</code></pre>

    <h3>What is a Class?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>class</strong> is a description of a set of objects that share the same attributes, operations, methods, and relationships.</p>
    </div>
    <ul>
      <li>The purpose of a class is to declare a collection of operations and attributes that fully describe the structure and behavior of objects</li>
      <li>Classes are <strong>templates</strong> for objects</li>
      <li>They are used to <strong>create</strong> objects</li>
      <li>Objects that are sufficiently similar to each other are said to belong to the same class</li>
    </ul>
    <p>An object represents a particular <strong>instance</strong> of a class. All objects of a given class share a common specification and definition of its methods and attributes, which is used to distinguish one type of object from another. The chief role of a class is to define the properties (state) and procedures (behavior), and applicability, of its instances.</p>

    <h3>What is an Instance?</h3>
    <ul>
      <li>Represents a single person, thing, or concept in the application domain</li>
      <li>Another word for a single <strong>object</strong></li>
      <li>Each instance of a class is <strong>unique</strong></li>
    </ul>
    <pre><code>Class: Student  --->  Instance:
                       Name: Peter
                       Age: 15
                       Studying
                       Walking</code></pre>

    <div class="divider"></div>

    <h2>Message Passing</h2>

    <h3>Messages and Methods</h3>
    <ul>
      <li><strong>Message</strong>: a function call</li>
      <li><strong>Method</strong>: a function / procedure</li>
    </ul>
    <p>In an object oriented system, you invoke a method of an object by <strong>sending the object a message</strong>.</p>
    <pre><code>Person --- Message: "Tell to make soup" ---> Soup
                                              Method: Prepare the soup</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Objects communicate with each other by sending <strong>messages</strong>. A message is a method call sent from a <strong>message-sending object</strong> to a <strong>message-receiving object</strong>.</p>
    </div>

    <h3>What Does a Message Consist Of?</h3>
    <ul>
      <li>An <strong>object reference</strong> that identifies the message receiver</li>
      <li>A <strong>method name</strong>, which corresponds to a method of the receiving object</li>
      <li><strong>Parameters</strong>, which correspond to the arguments of the calling method</li>
    </ul>
    <p>The <strong>message-receiving object</strong> acts as a <strong>server</strong>. The <strong>message-sending object</strong> acts as a <strong>client</strong> of the server.</p>

    <h3>Method Signatures</h3>
    <p>OO systems locate each function/method with the data it uses, as far as is practicable. These processes (functions/methods) are called <strong>operations</strong>, and each has a specific <strong>signature</strong>.</p>
    <ul>
      <li>A <strong>signature</strong> is the combination of the <strong>method name</strong> and the <strong>parameter list</strong></li>
      <li>To invoke an operation, its signature must be given</li>
    </ul>
    <pre><code>public double getMyFundsFromBank(String bankName)
                └──────────────┬──────────────┘
                signature = method name + parameters only</code></pre>

    <h3>Message Passing Example</h3>
    <p>Consider a customer, <strong>alex</strong>, placing an order with a salesperson, <strong>lawrence</strong>:</p>
    <pre><code>alex (Customer)                              lawrence (SalesPerson)
name = "Alex"                                name = "Lawrence"
address = "1 Robinson Rd"    --message-->    employeeNo = 15
budget = 2000                 takeOrder(     commission = 200
                             "sofa", name,
placeOrder(): void            address,       takeOrder(): int
                              "120799")
                              <-- 199 (return value)</code></pre>
    <p>Breaking the message down:</p>
    <pre><code>lawrence.takeOrder("sofa", "1 Robinson Rd", "120799")
   └─┬──┘   └───┬──┘  └───────────┬───────────────┘
 object    method              parameters
 reference   name</code></pre>
    <p>In UML class form, this looks like:</p>
    <pre><code>Customer                          SalesPerson
──────────────────────            ──────────────────────
- numCustomers = 0                - MAX_PRICE = 200
- MIN_BUDGET = 200                - name: String
- name: String                    - employeeNo: String
- address: String                 - commission: int
- budget: int
──────────────────────            ──────────────────────
+ printNumCustomer(): void        + takeOrder(): void
+ placeOrder(): void

   alex (client)  --- takeOrder --->  lawrence (server)</code></pre>
    <p>Alex places the order (client), and Lawrence takes the order (server).</p>

    <div class="divider"></div>

    <h2>Principles (Pillars) of Object Orientation</h2>
    <p>There are four core principles of object orientation:</p>
    <ol>
      <li><strong>Abstraction</strong></li>
      <li><strong>Encapsulation</strong></li>
      <li><strong>Polymorphism</strong></li>
      <li><strong>Inheritance</strong></li>
    </ol>

    <h3>1. Abstraction</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Abstraction</strong> is a form of representation that includes only what is important or interesting from a particular viewpoint. It includes the most important aspects of a given system while ignoring less important details.</p>
    </div>
    <p>Example: a <strong>map</strong> is an abstract representation — a geological map and a road map both represent the same place, but each highlights only the details relevant to its purpose.</p>
    <p>Another example: when you receive a phone call, you only see the option to pick it up or reject it. In reality, a lot of code runs in the background — you don't need to know the internal processing of how the call is generated. That hidden complexity is abstraction at work.</p>

    <h3>2. Encapsulation and Data Hiding</h3>
    <ul>
      <li><strong>Encapsulation</strong> — packaging related data and operations together</li>
      <li><strong>Information hiding</strong> — a principle of hiding the internal data and procedures of an object</li>
    </ul>
    <p>Encapsulation separates the <strong>external aspects</strong> of an object from the <strong>internal implementation details</strong> of the object, which are hidden from other objects. Typically, the structure of an object is hidden, as well as the implementation of its methods.</p>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Advantages of encapsulation:</strong></p>
      <ul>
        <li><strong>Ensures data integrity</strong> — access to the encapsulated data is limited to the operations defined on that data</li>
        <li><strong>Flexibility</strong> — you can change the implementation of an object without affecting its clients</li>
      </ul>
    </div>
    <p>Example — a <code>BankAccount</code> class:</p>
    <pre><code>------------------------
|      BankAccount      |
------------------------
| - accountNumber       |
| - balance             |  <-- private (encapsulated)
| - owner               |
------------------------
| + deposit(amount)     |  <-- public
| + withdraw(amount)    |  <-- public
| + getBalance()        |  <-- public
------------------------</code></pre>
    <p>The <strong>state variables</strong> (<code>theBalance</code>, <code>acctNumber</code>) make up the nucleus of the object. The <strong>methods</strong> (<code>balance()</code>, <code>withdraw()</code>, <code>deposit()</code>, <code>accountNumber()</code>) surround and hide — encapsulate — the state variables from the rest of the program.</p>

    <h3>3. Inheritance</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Inheritance</strong> is a relationship between classes where one class is the <strong>parent class</strong> of another (<strong>derived</strong>) class.</p>
    </div>
    <p>Inheritance allows classes to <strong>share and reuse</strong> behaviors and attributes. The real advantage of inheritance is that we can build upon what we already have, and reuse what we already have.</p>
    <p>Example:</p>
    <pre><code>                Employee (parent)
        name, address, phoneNumber, experience
             /                          \\
Programmer (child)                Manager (child)
name, address,                    name, address,
phoneNumber, experience,          phoneNumber, experience,
programmingLanguages              teamSize
writeCode()                       reportProjectStatus()</code></pre>

    <h3>4. Polymorphism</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>The word <strong>polymorphism</strong> means "having many forms" — from <strong>"poly"</strong> (many) and <strong>"morphs"</strong> (forms).</p>
    </div>
    <p>In simple words, polymorphism is the ability of a message to be displayed in more than one form. It allows us to perform a <strong>single action in different ways</strong>.</p>
    <p>Example: a person at the same time can have different characteristics. A man, at the same time, can be a <strong>father</strong>, a <strong>husband</strong>, and an <strong>employee</strong>. The same person shows different behavior in different situations — this is polymorphism.</p>

    <div class="divider"></div>

    <h2>Object Cohesion & Coupling</h2>

    <h3>What is Cohesion?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Cohesion</strong> is a measure of the strength of relationship between the methods and data of a class and some unifying purpose or concept served by that class. In other words, it measures the strength of the relationship between a class's methods and data themselves.</p>
    </div>

    <h3>High Cohesion</h3>
    <p>Everything an object <strong>knows</strong> is expressed by its attributes, and everything an object can <strong>do</strong> is expressed by its list of operations.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>If a module performs <strong>one task</strong> and nothing else, or has a clear purpose, it has <strong>high cohesion</strong>. If a module tries to encapsulate more than one purpose, or has an unclear purpose, it has <strong>low cohesion</strong>.</p>
    </div>
    <p>Example — splitting a low-cohesion class into high-cohesion classes:</p>
    <pre><code>// LOW COHESION — one class doing too many unrelated jobs
class UserManager {
  void createUser() { }
  void deleteUser() { }
  boolean validateEmail(String email) { }
  void sendWelcomeEmail(String email) { }
  void generateUserReport() { }
  void printReport() { }
}

// HIGH COHESION — split into focused classes
class UserService {
  void createUser() { }
  void deleteUser() { }
}

class EmailService {
  boolean validateEmail(String email) { }
  void sendWelcomeEmail(String email) { }
}

class ReportService {
  void generateUserReport() { }
  void printReport() { }
}</code></pre>

    <h3>What is Coupling?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Coupling</strong> is the degree of interdependence between software modules — a measure of how closely connected two routines or modules are, and the strength of the relationships between modules. It indicates the strength of interconnections between program units.</p>
    </div>

    <h3>Low Coupling</h3>
    <ul>
      <li>Attributes and operations only define their own abstraction, and no other</li>
      <li><strong>Highly coupled</strong> systems have strong interconnections, with program units dependent on each other (shared variables, interchange control function)</li>
      <li><strong>Loosely coupled</strong> systems are independent</li>
    </ul>

    <h3>Cohesion vs Coupling — Key Differences</h3>
    <pre><code>Cohesion                                    | Coupling
---------------------------------------------|--------------------------------------------
Indication of the relationship WITHIN        | Indication of the relationships BETWEEN
a module                                     | modules
---------------------------------------------|--------------------------------------------
Shows the module's relative functional       | Shows the relative independence among
strength                                     | the modules
---------------------------------------------|--------------------------------------------
Degree to which a component/module           | Degree to which a component/module is
focuses on a single thing                    | connected to other modules
---------------------------------------------|--------------------------------------------
Aim for HIGH cohesion — a cohesive module    | Aim for LOW coupling — dependency
focuses on a single task with little         | between modules should be minimal
interaction with other modules               |
---------------------------------------------|--------------------------------------------
A natural extension of data hiding, e.g. a   | Making private fields, private methods,
class having all members visible with a      | and non-public classes provides loose
package having default visibility            | coupling
---------------------------------------------|--------------------------------------------
Intra-Module Concept (within a module)       | Inter-Module Concept (between modules)</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Good OO design always aims for <strong>high cohesion</strong> and <strong>low coupling</strong>. This makes systems easier to understand, maintain, and change.</p>
    </div>

    <div class="divider"></div>

    <h2>Practice Problem: Smart Parking Management System</h2>
    <p>A city wants to implement a <strong>Smart Parking Management System</strong> to manage parking spaces in malls and public areas. The system should:</p>
    <ul>
      <li>Keep track of parking slots and vehicles</li>
      <li>Allocate slots when vehicles enter</li>
      <li>Calculate parking charges based on duration</li>
      <li>Handle different types of vehicles (Car, Bike, Truck)</li>
    </ul>
    <ol>
      <li>Identify a <strong>minimum of 7 classes/objects</strong> required for the system. For each class, list:
        <ul>
          <li><strong>Attributes</strong> (at least 3)</li>
          <li><strong>Methods</strong> (at least 2)</li>
        </ul>
      </li>
      <li>Select <strong>any two classes</strong>. For each class:
        <ul>
          <li>Identify data that must be hidden</li>
          <li>Explain why direct access to this data can cause problems</li>
          <li>Describe how methods help in controlling access</li>
        </ul>
      </li>
      <li>Identify a <strong>general parent class</strong> related to vehicles.</li>
      <li>Create <strong>at least three child classes</strong>.</li>
      <li>Explain how inheritance reduces redundancy in the system.</li>
      <li>Identify one behavior (method) that should:
        <ul>
          <li>Exist in the parent class</li>
          <li>Behave differently for different vehicle types</li>
        </ul>
      </li>
      <li>Explain how polymorphism helps in calculating parking fees.</li>
    </ol>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Try mapping each concept from this lecture to the scenario: <strong>classes</strong> (ParkingSlot, Vehicle, Car, Bike, Truck, ParkingTicket, PaymentService...), <strong>encapsulation</strong> (hiding slot availability or payment details), <strong>inheritance</strong> (Vehicle as parent, Car/Bike/Truck as children), and <strong>polymorphism</strong> (each vehicle type calculating its fee differently through the same method call).</p>
    </div>
  `,
  summary: {
    topic: 'Object Oriented Analysis and Design (OOAD) — Basic Concepts',
    subTopics: [
      'Lecture Objectives',
      'The Software Development Life Cycle (SDLC)',
      'What is Object Orientation?',
      'Objects Are Self-Contained',
      'Object Oriented Development Overview',
      'OOA — Object Oriented Analysis',
      'OOD — Object Oriented Design',
      'OOP — Object Oriented Programming (Implementation)',
      'OOA vs OOD — Library Example',
      'Why Use Object Orientation?',
      'The OO Environment: Objects, Attributes & Methods',
      'What is an Object?',
      'Attributes and Methods',
      'Classes and Objects',
      'Objects Are Grouped Into Classes',
      'What is a Class?',
      'What is an Instance?',
      'Message Passing',
      'Messages and Methods',
      'What Does a Message Consist Of?',
      'Method Signatures',
      'Message Passing Example',
      'Principles (Pillars) of Object Orientation',
      'Abstraction',
      'Encapsulation and Data Hiding',
      'Inheritance',
      'Polymorphism',
      'Object Cohesion & Coupling',
      'What is Cohesion?',
      'High Cohesion',
      'What is Coupling?',
      'Low Coupling',
      'Cohesion vs Coupling — Key Differences',
      'Practice Problem: Smart Parking Management System',
    ],
    definitions: [
      { term: 'Object Orientation', meaning: 'Viewing and modeling any system as a set of interacting and interrelated objects.' },
      { term: 'Object', meaning: 'A real-world entity that knows things (has attributes) and does things (has methods).' },
      { term: 'Attribute', meaning: "A piece of data, represented by a data type, that describes an object's state." },
      { term: 'Method', meaning: "A function that defines an object's behavior and how its data is manipulated." },
      { term: 'Class', meaning: 'A description or template of a set of objects that share the same attributes, operations, methods, and relationships.' },
      { term: 'Instance', meaning: 'A single, unique object — a single person, thing, or concept in the application domain.' },
      { term: 'OOA (Object Oriented Analysis)', meaning: 'Finding and describing the objects/concepts (domain objects) in the problem domain.' },
      { term: 'OOD (Object Oriented Design)', meaning: 'Defining software objects and how they collaborate to fulfill requirements.' },
      { term: 'OOP (Object Oriented Programming)', meaning: 'Implementing designed objects in a programming language; also called coding or construction.' },
      { term: 'Message', meaning: 'A method call sent from a message-sending object (client) to a message-receiving object (server).' },
      { term: 'Signature', meaning: "The combination of a method's name and its parameter list." },
      { term: 'Abstraction', meaning: 'A form of representation that includes only the important aspects of a system from a given viewpoint, while ignoring less important details.' },
      { term: 'Encapsulation', meaning: "Packaging related data and operations together, hiding an object's internal implementation from other objects." },
      { term: 'Information/Data Hiding', meaning: "The principle of hiding an object's internal data and procedures from other objects." },
      { term: 'Inheritance', meaning: 'A relationship where one class (the parent) is shared and reused by another (derived/child) class.' },
      { term: 'Polymorphism', meaning: 'The ability of a message or action to take many forms, letting a single action be performed in different ways.' },
      { term: 'Cohesion', meaning: "The strength of the relationship between the methods and data within a single class." },
      { term: 'Coupling', meaning: 'The degree of interdependence between different software modules.' },
    ],
    keyPoints: [
      'Object orientation models a system as interacting, interrelated objects, each holding its own data and behaviour.',
      'OOA finds objects in the problem domain; OOD defines how software objects collaborate; OOP implements them in code.',
      'Objects have attributes (state) and methods (behaviour); classes are templates that group objects sharing the same attributes and methods.',
      'An instance is a single, unique occurrence of a class.',
      'Objects communicate by sending messages; a message includes an object reference, a method name, and parameters.',
      'The message-receiving object acts as a server; the message-sending object acts as a client.',
      "A method's signature is its method name plus its parameter list — the signature must be given to invoke an operation.",
      'The four pillars of OOP are Abstraction, Encapsulation, Inheritance, and Polymorphism.',
      "Encapsulation hides an object's internal data and implementation, protecting data integrity and allowing flexibility to change implementation without affecting clients.",
      'Inheritance lets a child (derived) class reuse and build on the attributes and behaviour of a parent class, reducing redundancy.',
      'Polymorphism allows the same message/method call to behave differently depending on the object that receives it (e.g. the UserManager vs UserService/EmailService/ReportService example demonstrates cohesion, not polymorphism — keep these concepts distinct for exams).',
      'High cohesion means a class/module focuses on a single, clear task; low coupling means modules depend on each other as little as possible.',
      'Good OO design aims for high cohesion and low coupling — this makes systems easier to understand, maintain, and change.',
      'Making fields and methods private supports both encapsulation and loose coupling.',
    ],
  },
},
]