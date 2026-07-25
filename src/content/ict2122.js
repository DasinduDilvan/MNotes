export const courseName = 'Object Oriented Programming'

export const lessons = [
  {
    id: 1,
    title: 'Introduction to OOP',
    content: `
      <span class="lesson-badge">LESSON 01</span>
      <h1>Introduction to OOP</h1>
      <div class="meta-info">ICT2122 <span>•</span> 2 min read <span>•</span> Beginner</div>

      <h2>What is OOP?</h2>
      <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of
      <strong>objects</strong>, which contain data (attributes) and code (methods).</p>

      <h2>Four Pillars of OOP</h2>
      <ul>
        <li><strong>Encapsulation</strong> — Bundling data and methods within a single unit.</li>
        <li><strong>Abstraction</strong> — Hiding complex details, showing only necessary features.</li>
        <li><strong>Inheritance</strong> — Deriving new classes from existing ones.</li>
        <li><strong>Polymorphism</strong> — Same method behaving differently in different contexts.</li>
      </ul>

      <div class="callout callout-yellow">
        <span class="callout-label">Remember</span>
        <p>OOP makes code reusable, modular, and easier to maintain.</p>
      </div>
    `,
    summary: {
      topic: 'Introduction to Object-Oriented Programming',
      subTopics: [
        'What is OOP?',
        'Four Pillars of OOP',
        'Benefits of OOP',
      ],
      definitions: [
        { term: 'OOP', meaning: 'A programming paradigm based on objects containing data and methods.' },
        { term: 'Encapsulation', meaning: 'Bundling data and methods within a single unit (class).' },
        { term: 'Abstraction', meaning: 'Hiding complex details and exposing only necessary features.' },
        { term: 'Inheritance', meaning: 'Deriving new classes from existing ones.' },
        { term: 'Polymorphism', meaning: 'Same method behaving differently in different contexts.' },
      ],
      keyPoints: [
        'OOP organizes design around objects, not functions.',
        'Four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism.',
        'OOP promotes reusability, modularity, and maintainability.',
      ],
    },
  },
]