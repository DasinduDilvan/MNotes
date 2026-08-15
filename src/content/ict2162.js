export const courseName = 'Management Information Systems'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to MIS',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Introduction to Management Information Systems</h1>
    <div class="meta-info">ICT2162 <span>•</span> 16 min read</div>

    <p>This lesson introduces the course <strong>Management Information Systems (ICT2162)</strong> and covers the first topic: <strong>Information Systems in Global Business Today</strong>. You will learn what an information system is, how it works, and why businesses invest heavily in it.</p>

    <h2>Course Overview</h2>
    <ul>
      <li><strong>Course Unit</strong> — Management Information Systems (ICT2162)</li>
      <li><strong>Credits</strong> — 2</li>
      <li><strong>Lecture Hours</strong> — 30 hours</li>
    </ul>

    <h2>Course Learning Outcomes</h2>
    <p>After finishing this course, you should be able to:</p>
    <ol>
      <li>Identify organizations, management, and the networked enterprise.</li>
      <li>Explore information technology infrastructure and the security of an organization.</li>
      <li>Explain key concepts related to operational excellence and customer intimacy.</li>
      <li>Identify how to build and manage information systems.</li>
    </ol>

    <h2>Course Content (Topics Covered)</h2>
    <ul>
      <li>Information Systems in Global Business Today</li>
      <li>Information Systems, Organizations, and Strategy</li>
      <li>Ethical and Social Issues in Information Systems</li>
      <li>IT Infrastructure and Emerging Technologies</li>
      <li>Foundations of Business Intelligence: Databases and Information Management</li>
      <li>Securing Information Systems</li>
      <li>Achieving Operational Excellence and Customer Intimacy: Enterprise Applications</li>
      <li>Managing Knowledge and Artificial Intelligence</li>
      <li>Enhancing Decision Making</li>
      <li>Building Information Systems</li>
      <li>Managing Global Systems</li>
    </ul>

    <h2>References</h2>
    <ul>
      <li><em>Management Information Systems: Managing the Digital Firm</em> — K. C. Laudon, J. P. Laudon</li>
      <li><em>Essentials of MIS</em> — K. C. Laudon, J. P. Laudon</li>
    </ul>

    <h2>Evaluation Criteria</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>80% attendance</strong> is mandatory to be eligible for the final assessment.</p>
    </div>
    <ul>
      <li><strong>Continuous Assessment (CA)</strong> — 30% of the total grade (Assignments 20%, Quizzes 10%)</li>
      <li><strong>Final Assessment (FA)</strong> — 70% of the total grade, covering Learning Outcomes 1–4 (Theory 70%)</li>
    </ul>

    <div class="divider"></div>

    <h2>Information Systems in Global Business Today</h2>
    <p>This chapter looks at what an information system is, how it works, and why it matters for running and managing a business today.</p>

    <h3>What You Will Learn</h3>
    <ul>
      <li>How information systems are transforming business, and why they are essential for running and managing a business today.</li>
      <li>What an information system is and how it works.</li>
      <li>The management, organization, and technology components of an information system.</li>
      <li>Why complementary assets are essential for information systems to provide real value to organizations.</li>
      <li>The academic disciplines used to study information systems, and how each one contributes.</li>
      <li>How MIS can help your career.</li>
    </ul>

    <h3>What is an Information System?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An <strong>information system</strong> is a set of interrelated components that collect, process, store, and distribute information to support decision making and control in an organization.</p>
    </div>
    <p>Besides supporting decision making, coordination, and control, information systems also help managers and workers analyze problems, picture complex subjects, and create new products.</p>

    <h3>Data vs Information</h3>
    <pre><code>RAW DATA                              →   INFORMATION SYSTEM   →     INFORMATION
331  Brite Dish Soap   1.29                (collect, process,          Sales Region: Northwest
863  BL Hill Coffee    4.69                 organize, arrange)         Store: Superstore #122
173  Meow Cat            .79                                            Item No. 331 – Brite Dish Soap
331  Brite Dish Soap   1.29                                              Units Sold: 7,156
663  Country Ham       3.29                                              YTD Sales: $9,231.24
524  Fiery Mustard      1.49
113  Ginger Root         .85</code></pre>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Data</strong> is raw, unorganized facts — like item numbers and prices from a supermarket checkout counter. <strong>Information</strong> is data that has been processed and organized into a meaningful form, such as total unit sales or total sales revenue for a specific store.</p>
    </div>

    <h3>Functions of an Information System</h3>
    <pre><code>                          ENVIRONMENT
     Suppliers  ↔                                    ↔  Customers
               ┌───────────── ORGANIZATION ─────────────┐
               │            INFORMATION SYSTEM           │
               │  Input → Processing → Output            │
               │        (Classify, Arrange, Calculate)    │
               │              ↑                           │
               │              └───────── Feedback ────────┘
               └──────────────────────────────────────────┘
 Regulatory Agencies ↔          Stockholders          ↔  Competitors</code></pre>
    <p>An information system contains information about an organization and the environment around it. <strong>Feedback</strong> is output that is sent back to the right people or activities so the input can be checked and improved. Actors in the environment — such as customers, suppliers, competitors, stockholders, and regulatory agencies — interact with the organization and its information systems.</p>

    <p>There are three main activities in an information system:</p>
    <ul>
      <li><strong>Input</strong> — captures or collects raw data from within the organization or from its outside environment.</li>
      <li><strong>Processing</strong> — converts this raw input into a meaningful form.</li>
      <li><strong>Output</strong> — transfers the processed information to the people or activities that will use it.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Feedback</strong> is output that is sent back to the right members of the organization to help them check or correct the input stage. Example: Disney World's system for controlling crowds.</p>
    </div>

    <div class="divider"></div>

    <h3>Dimensions of Information Systems</h3>
    <p>Information systems have three main dimensions:</p>
    <pre><code>              Organizations
                    │
     Management ── Information ── Technology
                      Systems</code></pre>
    <ul>
      <li><strong>Organizations</strong> — information systems are a core part of organizations. For some companies, such as credit reporting firms, there would be no business at all without an information system. The key elements of an organization are its people, structure, business processes, politics, and culture.</li>
      <li><strong>Management</strong> — organizations have a structure made up of different levels and specialties, showing a clear division of labor. Authority and responsibility in a business are organized as a hierarchy, or pyramid structure.</li>
    </ul>

    <pre><code>            Senior Management
   (long-range strategic decisions,
    ensures financial performance)
   -----------------------------------
          Middle Management
   (scientists & knowledge workers —
    carries out senior management's
         programs and plans)
   -----------------------------------
        Operational Management
 (production & service workers, data
   workers — monitors day-to-day
        business activities)</code></pre>
    <p>The upper levels of the hierarchy have managerial, professional, and technical employees, while the lower levels have operational staff.</p>

    <h3>Information Technology Components</h3>
    <ul>
      <li><strong>Computer hardware</strong> — the physical equipment used for input, processing, and output activities in an information system.</li>
      <li><strong>Computer software</strong> — the detailed, preprogrammed instructions that control and coordinate the computer hardware parts of an information system.</li>
      <li><strong>Data management technology</strong> — the software that organizes data on physical storage media.</li>
      <li><strong>Networking and telecommunications technology</strong> — physical devices and software that connect hardware together and move data from one location to another.</li>
    </ul>

    <div class="divider"></div>

    <h3>What's New in Management Information Systems?</h3>
    <ul>
      <li><strong>IT Innovations</strong> — for example, cloud computing (Google Drive, OneDrive).</li>
      <li><strong>New Business Models</strong> — for example, Netflix.</li>
      <li><strong>E-commerce Expansion</strong></li>
      <li><strong>Management Changes</strong></li>
      <li><strong>Changes in Firms and Organizations</strong></li>
    </ul>

    <h3>How Information Systems Are Transforming Business</h3>
    <p>Between 1999 and 2017, <strong>IT investment</strong> grew steadily as a share of total business investment — from about <strong>21%</strong> to about <strong>33%</strong> of total investment. This shows how deeply information systems have become part of everyday business.</p>
    <p><strong>Example:</strong> the mobile phone industry (e.g., Samsung Galaxy Note and Apple iPhone) — companies constantly invest in new technology to stay competitive.</p>
    <ul>
      <li>Increased technology investments</li>
      <li>Information systems provide economic value to business</li>
      <li>Increased responsiveness to customer demands</li>
      <li>Shifts in media, advertising, and commerce</li>
      <li>New laws related to information systems</li>
    </ul>

    <div class="divider"></div>

    <h3>Globalization & Information Systems</h3>
    <ul>
      <li>About <strong>80%</strong> of the toys sold in the U.S. are made in China, while about <strong>90%</strong> of the PCs made in China use American-made Intel or AMD chips.</li>
      <li>It is not just goods that move across borders — jobs move too.</li>
      <li>A <strong>24 × 7 culture</strong> has developed.</li>
      <li>The internet lowers the cost of operating on a global scale.</li>
      <li>New technology-based companies have emerged, such as Google, eBay, Amazon.com, and Facebook (Meta).</li>
    </ul>

    <h3>Emergence of Digital Firms</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>digital firm</strong> is one where almost all of the organization's important business relationships with customers, suppliers, and employees are digitally enabled and managed. Any information needed to support key business decisions is available at any time, from anywhere in the firm.</p>
    </div>

    <div class="divider"></div>

    <h3>Why Business Firms Invest Heavily in Information Systems</h3>
    <p>Business firms invest heavily in information systems to reach six strategic business objectives:</p>
    <ul>
      <li><strong>Operational excellence</strong> — example: Wal-Mart</li>
      <li><strong>New products, services, and business models</strong> — example: Apple Inc.</li>
      <li><strong>Customer and supplier intimacy</strong> — example: The Mandarin Oriental hotel group</li>
      <li><strong>Improved decision making</strong></li>
      <li><strong>Competitive advantage</strong> — example: Toyota</li>
      <li><strong>Survival</strong> — example: HSBC</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>These <strong>six strategic business objectives</strong> are a common exam question — learn each objective together with its example company.</p>
    </div>

    <div class="divider"></div>

    <h3>Contemporary Approaches to Information Systems</h3>
    <p>Information systems are studied using two broad approaches, each combining several academic fields:</p>
    <pre><code>                              MIS
              ┌────────────────┴────────────────┐
      Technical Approaches               Behavioral Approaches
      • Computer Science                 • Sociology
      • Operations Research              • Economics
      • Management Science               • Psychology</code></pre>

    <h3>Technical Approach</h3>
    <ul>
      <li><strong>Computer science</strong> — builds theories of computability, methods of computation, and methods of efficient data storage and access.</li>
      <li><strong>Management science</strong> — focuses on developing models for decision-making and management practice.</li>
      <li><strong>Operations research</strong> — focuses on mathematical techniques for optimizing parts of an organization, such as transportation, inventory control, and transaction costs.</li>
    </ul>

    <h3>Behavioral Approach</h3>
    <p>The behavioral approach deals with the human and organizational issues that come up while building and maintaining information systems over the long term — issues such as strategic business integration, design, implementation, use, and management, which cannot be studied usefully with technical models alone.</p>

    <div class="divider"></div>

    <h3>The Interdependence Between Organizations and Information Systems</h3>
    <pre><code>        BUSINESS FIRM                        INFORMATION SYSTEM
 ┌──────────────────────┐                  ┌──────────────────────┐
 │ Business Strategic     │   ⇄⇄⇄⇄⇄⇄⇄⇄    │       Software         │
 │ Objectives & Business  │                  ├───────────┬──────────┤
 │ Processes               │                  │ Hardware  │ Data Mgmt │
 └──────────────────────┘                  │           ├──────────┤
                                              │           │ Telecoms  │
                                              └───────────┴──────────┘</code></pre>
    <p>Changes in strategy, rules, and business processes increasingly require changes in hardware, software, databases, and telecommunications. In turn, what an organization can do often depends on what its systems will allow it to do.</p>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Organizations and information systems have a two-way, <strong>interdependent relationship</strong> — business needs shape IT systems, and existing IT systems shape what the business can do.</p>
    </div>

    <div class="divider"></div>

    <h2>Lecture Summary</h2>
    <p>This lecture answered the following questions:</p>
    <ul>
      <li>What exactly is an information system? How does it work? What are its management, organization, and technology components?</li>
      <li>How are information systems transforming business, and what is their relationship to globalization?</li>
      <li>Why do business firms invest heavily in information systems?</li>
      <li>What academic disciplines are used to study information systems, and how does each one add to our understanding of information systems?</li>
    </ul>
  `,
  summary: {
    topic: 'Introduction to Management Information Systems and Information Systems in Global Business Today',
    subTopics: [
      'Course Overview',
      'Course Learning Outcomes',
      'Course Content (Topics Covered)',
      'References',
      'Evaluation Criteria',
      'What You Will Learn',
      'What is an Information System?',
      'Data vs Information',
      'Functions of an Information System',
      'Dimensions of Information Systems',
      'Information Technology Components',
      'What\'s New in Management Information Systems?',
      'How Information Systems Are Transforming Business',
      'Globalization & Information Systems',
      'Emergence of Digital Firms',
      'Why Business Firms Invest Heavily in Information Systems',
      'Contemporary Approaches to Information Systems',
      'Technical Approach',
      'Behavioral Approach',
      'The Interdependence Between Organizations and Information Systems',
      'Lecture Summary',
    ],
    definitions: [
      { term: 'Information System', meaning: 'A set of interrelated components that collect, process, store, and distribute information to support decision making and control in an organization.' },
      { term: 'Data', meaning: 'Raw, unorganized facts, such as item numbers and prices from a checkout counter, before they are processed.' },
      { term: 'Information', meaning: 'Data that has been processed and organized into a meaningful, useful form, such as total sales or revenue figures.' },
      { term: 'Input', meaning: 'The activity that captures or collects raw data from within the organization or from its external environment.' },
      { term: 'Processing', meaning: 'The activity that converts raw input into a meaningful form.' },
      { term: 'Output', meaning: 'The activity that transfers processed information to the people or activities that will use it.' },
      { term: 'Feedback', meaning: 'Output that is returned to the right members of an organization to help them evaluate or correct the input stage.' },
      { term: 'Computer Hardware', meaning: 'The physical equipment used for input, processing, and output activities in an information system.' },
      { term: 'Computer Software', meaning: 'Preprogrammed instructions that control and coordinate the computer hardware components of an information system.' },
      { term: 'Data Management Technology', meaning: 'Software that governs how data is organized on physical storage media.' },
      { term: 'Networking and Telecommunications Technology', meaning: 'Physical devices and software that link hardware together and transfer data between locations.' },
      { term: 'Digital Firm', meaning: 'An organization in which nearly all significant business relationships with customers, suppliers, and employees are digitally enabled and managed, with information available anytime, anywhere in the firm.' },
      { term: 'Computer Science (as a discipline)', meaning: 'Establishes theories of computability, methods of computation, and methods of efficient data storage and access.' },
      { term: 'Management Science', meaning: 'Develops models for decision-making and management practices.' },
      { term: 'Operations Research', meaning: 'Uses mathematical techniques to optimize organizational factors like transportation, inventory control, and transaction costs.' },
    ],
    keyPoints: [
      'MIS (ICT2162) is a 2-credit, 30-hour course; the grade is 30% Continuous Assessment (20% assignments + 10% quizzes) plus 70% Final Assessment (Theory); 80% attendance is mandatory to be eligible.',
      'An information system collects, processes, stores, and distributes information to support decision making and control in an organization.',
      'The three core activities of an information system are input, processing, and output; feedback loops back to correct the input stage.',
      'Information systems have three dimensions: organizations, technology, and management.',
      'Organizational hierarchy has three levels: senior management (strategic decisions), middle management (implements plans), and operational management (monitors daily operations).',
      'The four components of information technology are hardware, software, data management technology, and networking/telecommunications technology.',
      'Firms invest in information systems to achieve six strategic objectives: operational excellence, new products/services/business models, customer & supplier intimacy, improved decision making, competitive advantage, and survival.',
      'A digital firm conducts nearly all significant business relationships digitally, with information available anytime, anywhere in the firm.',
      'Two contemporary approaches are used to study information systems: the technical approach (computer science, management science, operations research) and the behavioral approach (sociology, economics, psychology).',
      'Organizations and information systems are interdependent — business strategy shapes IT systems, and existing IT systems shape what a business can do.',
      'IT investment as a share of total business investment grew from about 21% (1999) to about 33% (2017), showing how deeply information systems have become embedded in business.',
      'Globalization example: about 80% of toys sold in the U.S. are made in China, while about 90% of PCs made in China use American-made Intel or AMD chips — goods, jobs, and technology all cross borders together.',
    ],
  },
},
]