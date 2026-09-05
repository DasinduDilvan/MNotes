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

{
  id: 2,
  title: 'Global E-Business',
  content: `
    <span class="lesson-badge">LESSON 02</span>
    <h1>Global E-Business</h1>
    <div class="meta-info">ICT2162 <span>•</span> 18 min read</div>

    <p>This lesson introduces <strong>Global E-Business</strong> by looking at how businesses run their day-to-day work through <strong>business processes</strong>, and how different <strong>types of information systems</strong> support different levels of management within an organization.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>By the end of this lesson, you should be able to answer these questions:</p>
      <ul>
        <li>What are <strong>business processes</strong>?</li>
        <li>How are they related to <strong>information systems</strong>?</li>
        <li>How do systems serve the different <strong>management groups</strong> in a business?</li>
        <li>How do systems that <strong>link the enterprise</strong> improve organizational performance?</li>
      </ul>
    </div>

    <h2>What We Discuss Today</h2>
    <ol>
      <li>Business Processes and Information Systems</li>
      <li>Types of Information Systems
        <ul>
          <li>Systems for Different Management Groups (Transaction Processing Systems, Systems for Business Intelligence: MIS, Marketing IS, HRIS, FMIS, PMIS, DSS, ESS)</li>
          <li>Systems for Linking the Enterprise (Enterprise Applications: ERP, SCM, CRM, KMS)</li>
          <li>Intranets and Extranets</li>
          <li>E-business, E-commerce and E-government</li>
        </ul>
      </li>
    </ol>

    <div class="divider"></div>

    <h2>Business Processes and Information Systems</h2>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>business process</strong> is a set of activities or steps required to produce a product or service. It is a <strong>workflow</strong> of material, information, and knowledge moving through an organization.</p>
    </div>

    <ul>
      <li>Business processes may be tied to a single <strong>functional area</strong>, or they can be <strong>cross functional</strong> (crossing several departments).</li>
      <li><strong>Functional example:</strong> Human Resources — hiring employees.</li>
      <li><strong>Cross functional example:</strong> fulfilling a customer order (this touches sales, accounting, and production).</li>
      <li>Business processes can be <strong>assets</strong> (when they work well) or <strong>liabilities</strong> (when they are slow or broken).</li>
      <li>A business itself can be seen as a <strong>collection of business processes</strong>.</li>
    </ul>

    <h3>Examples of Functional Business Processes</h3>
    <ul>
      <li><strong>Manufacturing and production</strong> — assembling the product, checking for quality, producing bills of materials.</li>
      <li><strong>Sales and marketing</strong> — identifying customers, making customers aware of the product, selling the product.</li>
      <li><strong>Finance and accounting</strong> — paying creditors, creating financial statements, managing cash accounts.</li>
      <li><strong>Human resources</strong> — hiring employees, evaluating employees' job performance, enrolling employees in benefits plans.</li>
    </ul>

    <h3>The Order Fulfillment Process (Cross-Functional Example)</h3>
    <p>This example shows how one process — fulfilling a customer order — flows across three different departments:</p>

    <pre><code>SALES         : Generate order  → Submit order
                                        ↓
ACCOUNTING    : Check credit → Approve credit → Generate invoice
                                        ↓
MANUFACTURING &
PRODUCTION    : Assemble product → Ship product</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The Order Fulfillment Process is a classic exam example of a <strong>cross-functional business process</strong> — it needs Sales, Accounting, and Manufacturing to work together.</p>
    </div>

    <h3>How Information Technology Enhances Business Processes</h3>
    <p>Information technology (IT) enhances business processes in <strong>two main ways</strong>:</p>
    <ol>
      <li><strong>Increasing efficiency of existing processes</strong> — by automating steps that used to be done manually.</li>
      <li><strong>Enabling entirely new processes</strong> that can transform the business, by:
        <ul>
          <li>Changing the flow of information</li>
          <li>Replacing sequential steps with parallel steps</li>
          <li>Eliminating delays in decision-making</li>
          <li>Supporting new business models</li>
        </ul>
      </li>
    </ol>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Examples:</strong> Kindle e-books from Amazon, and buying a computer online at Best Buy — both are new business models made possible by IT.</p>
    </div>

    <div class="divider"></div>

    <h2>Types of Information Systems</h2>
    <p>Information systems can be grouped by which <strong>management group</strong> they serve: operational staff, middle managers, or senior executives.</p>

    <h3>1. Transaction Processing Systems (TPS)</h3>
    <ul>
      <li>Perform and record the <strong>daily routine transactions</strong> needed to run the business.</li>
      <li><strong>Examples:</strong> sales order entry, payroll, shipping.</li>
      <li>Let managers monitor the status of internal operations and relationships with the outside world.</li>
      <li>Serve the <strong>operational level</strong> of the organization.</li>
      <li>Handle <strong>predefined, structured</strong> goals and decisions.</li>
    </ul>

    <pre><code>Employee Data → Payroll System ← → Employee/File Database
                    │
    ┌───────────────┼────────────────┬───────────────────┐
    ▼               ▼                ▼                    ▼
To General      Management     To government         Employee
  Ledger          Reports        Agencies             Paychecks
                    ▲
              Online Queries

(A Payroll TPS keeps track of money paid to employees.)</code></pre>

    <h3>2. Business Intelligence (BI)</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Business Intelligence</strong> is a class of software applications that analyze current and historical data to find patterns and trends and help with decision-making.</p>
    </div>
    <ul>
      <li>Used in systems that support <strong>middle and senior management</strong>.</li>
      <li><strong>BI for Middle Management</strong> supports monitoring, controlling, decision-making, and administrative activities.</li>
      <li><strong>BI for Senior Management</strong> supports more <strong>non-routine</strong> decision-making.</li>
    </ul>

    <h3>2.1 Management Information Systems (MIS)</h3>
    <ul>
      <li>Serve <strong>middle management</strong>.</li>
      <li>Provide reports on the firm's current performance, based on data from the TPS.</li>
      <li>Answer <strong>routine questions</strong> using a predefined procedure.</li>
      <li>Typically have <strong>little analytic capability</strong>.</li>
    </ul>

    <pre><code>TRANSACTION PROCESSING SYSTEMS       MANAGEMENT INFORMATION SYSTEMS

Order file ↔ Order processing system ───→ Sales data     ┐
Production master file ↔ Materials                        │
   resource planning system ─────────────→ Unit product   ├──→ MIS ──→ Reports/
                                             cost data,    │           Online Displays
Accounting files ↔ General ledger system ─→ Product change│           & Dashboards
                                             data, Expense │              │
                                             data          ┘              ▼
                                                                       Managers</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>TPS feed <strong>summarized transaction data</strong> into the MIS at the end of a time period. Managers access this organizational data through MIS reports.</p>
    </div>

    <p>A <strong>sample MIS report</strong> might summarize annual sales data by product and region, comparing <strong>actual sales</strong> against <strong>planned sales</strong> so managers can see performance at a glance.</p>

    <h3>2.2 Marketing Information Systems</h3>
    <ul>
      <li>Help managers <strong>identify key customers</strong>.</li>
      <li>Help managers with <strong>market segmentation</strong>.</li>
      <li>Lead to accurately identifying the <strong>target market</strong>.</li>
    </ul>

    <h3>2.3 Human Resource Information Systems (HRIS)</h3>
    <p>Allow HR managers to make <strong>better and timely decisions</strong>. Common modules include:</p>
    <ul>
      <li><strong>Payroll</strong> module</li>
      <li><strong>Time and attendance</strong> module</li>
      <li><strong>Benefits administration</strong> module</li>
      <li><strong>HR management</strong> module</li>
      <li><strong>Training</strong> module</li>
      <li><strong>Employee self-service</strong> module</li>
    </ul>

    <h3>2.4 Finance Management Information Systems (FMIS)</h3>
    <p>Allow managers to evaluate:</p>
    <ul>
      <li>The sources of funds best suited for the firm</li>
      <li>Sources that carry the <strong>least risk</strong></li>
      <li>Sources that produce the <strong>most gain</strong></li>
    </ul>
    <p>This covers both <strong>equity</strong> and <strong>debt</strong> financing.</p>

    <h3>2.5 Production Management Information Systems (PMIS)</h3>
    <p>Concerned with the <strong>planning and control</strong> of all activities that transform input into output, adding value along the way. Covers:</p>
    <ul>
      <li>Production planning</li>
      <li>Production control</li>
      <li>Product design</li>
      <li>Product development</li>
      <li>Plant location and layout</li>
    </ul>

    <h3>2.6 Decision Support Systems (DSS)</h3>
    <ul>
      <li>Serve <strong>middle management</strong>.</li>
      <li>Support <strong>non-routine decision making</strong>.</li>
      <li><strong>Example:</strong> "What is the impact on the production schedule if December sales doubled?"</li>
      <li>Often use <strong>external information</strong> as well as data from TPS and MIS — for example, current stock prices or competitors' product prices.</li>
    </ul>

    <h3>2.7 Executive Support Systems (ESS)</h3>
    <ul>
      <li>Support <strong>senior management</strong>.</li>
      <li>Address <strong>non-routine decisions</strong> that require judgment, evaluation, and insight.</li>
      <li>Incorporate <strong>external data</strong> (e.g. new tax laws, competitors) as well as summarized internal data from MIS and DSS.</li>
      <li><strong>Example:</strong> a digital dashboard giving a real-time view of the firm's financial performance — working capital, accounts receivable, accounts payable, cash flow, and inventory.</li>
    </ul>

    <div class="divider"></div>

    <h3>Systems from a Constituency Perspective</h3>
    <ul>
      <li><strong>TPS</strong> — supports operational-level employees</li>
      <li><strong>MIS &amp; DSS</strong> — supports managers</li>
      <li><strong>ESS</strong> — supports executives</li>
    </ul>

    <h3>Relationship of Systems to One Another</h3>
    <ul>
      <li><strong>TPS</strong> is the major source of data for other systems.</li>
      <li><strong>ESS</strong> is the recipient of data from lower-level systems.</li>
      <li>Data may be exchanged between systems.</li>
    </ul>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In reality, most businesses' systems are only <strong>loosely integrated</strong> — though this is getting better over time. Don't assume all systems in a real company are perfectly connected.</p>
    </div>

    <div class="divider"></div>

    <h2>Systems for Linking the Enterprise</h2>

    <h3>Enterprise Applications</h3>
    <ul>
      <li><strong>Link the enterprise</strong> together.</li>
      <li><strong>Span functional areas</strong> (not limited to one department).</li>
      <li><strong>Execute business processes</strong> across the whole firm.</li>
      <li><strong>Include all levels</strong> of management.</li>
    </ul>
    <p>There are <strong>four major types</strong> of enterprise applications:</p>
    <ol>
      <li>Enterprise Systems</li>
      <li>Supply Chain Management (SCM) Systems</li>
      <li>Customer Relationship Management (CRM) Systems</li>
      <li>Knowledge Management Systems (KMS)</li>
    </ol>

    <pre><code>              Suppliers, Business Partners
                        ▲
                    Processes
                        │
        ┌───────────────────────────────┐
        │      Enterprise Systems        │
        │  ┌──────────┐   ┌───────────┐  │
        │  │  Supply  │   │ Customer  │  │
        │  │  Chain   │◄─►│Relationship│ │
        │  │Management│   │Management │  │
        │  │ Systems  │   │  Systems  │  │
        │  └──────────┘   └───────────┘  │
        │      Knowledge Management      │
        │             Systems            │
        └───────────────────────────────┘
                        │
                    Processes
                        ▼
                Customers, Distributors

Functional areas at the base: Sales & Marketing | Manufacturing &
Production | Finance & Accounting | Human Resources</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Enterprise applications automate processes</strong> that span multiple business functions and organizational levels, and may even extend outside the organization to suppliers and customers.</p>
    </div>

    <h3>1. Enterprise Systems (Enterprise Resource Planning – ERP)</h3>
    <ul>
      <li>Collect data from different firm functions and store it in a <strong>single central data repository</strong>.</li>
      <li>Resolve the problem of <strong>fragmented, redundant</strong> data sets and systems.</li>
      <li>Enable:
        <ul>
          <li>Coordination of daily activities</li>
          <li>Efficient response to customer orders (production, inventory)</li>
          <li>Valuable information for improving management decision-making</li>
        </ul>
      </li>
    </ul>

    <h3>2. Supply Chain Management (SCM) Systems</h3>
    <ul>
      <li>Manage the firm's relationships with <strong>suppliers</strong>.</li>
      <li>Share information about orders, production, inventory levels, and delivery of products and services.</li>
      <li><strong>Goal:</strong> get the right amount of products to their destination with the least time and lowest cost.</li>
    </ul>

    <h3>3. Customer Relationship Management (CRM) Systems</h3>
    <ul>
      <li>Provide information to coordinate all business processes that deal with customers — <strong>sales, marketing, and service</strong> — to optimize revenue, customer satisfaction, and customer retention.</li>
      <li><strong>Integrate</strong> the firm's customer-related processes and consolidate customer information from multiple communication channels.</li>
    </ul>

    <h3>4. Knowledge Management Systems (KMS)</h3>
    <ul>
      <li>Support processes for <strong>acquiring, creating, storing, distributing, applying,</strong> and integrating knowledge — such as how to create, produce, and distribute products and services.</li>
      <li>Collect internal knowledge and experience within the firm and make it available to employees.</li>
      <li>Link to <strong>external sources</strong> of knowledge.</li>
    </ul>

    <div class="divider"></div>

    <h3>Intranets and Extranets</h3>
    <p>These are alternative tools that increase integration and speed up the flow of information:</p>
    <ul>
      <li><strong>Intranets</strong> — internal company websites accessible only by employees.</li>
      <li><strong>Extranets</strong> — company websites accessible externally, but only to vendors and suppliers. Often used to coordinate the supply chain.</li>
    </ul>

    <div class="divider"></div>

    <h2>E-business, E-commerce and E-government</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>E-business</strong> — the use of digital technology and the Internet to drive major business processes.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>E-commerce</strong> — a subset of e-business; buying and selling goods and services through the Internet.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>E-government</strong> — using Internet technology to deliver information and services to citizens, employees, and businesses.</p>
    </div>

    <div class="divider"></div>

    <h2>Lesson Summary</h2>
    <ul>
      <li>Business Processes and Information Systems</li>
      <li>Types of Information Systems
        <ul>
          <li>Systems for Different Management Groups — Transaction Processing Systems, Systems for Business Intelligence</li>
          <li>Systems for Linking the Enterprise — Enterprise Applications, Intranets and Extranets</li>
        </ul>
      </li>
      <li>E-business, E-commerce and E-government</li>
    </ul>
  `,
  summary: {
    topic: 'Global E-Business: Business Processes and Types of Information Systems',
    subTopics: [
      'Business Processes and Information Systems',
      'Examples of Functional Business Processes',
      'The Order Fulfillment Process (Cross-Functional Example)',
      'How Information Technology Enhances Business Processes',
      'Types of Information Systems',
      'Transaction Processing Systems (TPS)',
      'Business Intelligence (BI)',
      'Management Information Systems (MIS)',
      'Marketing Information Systems',
      'Human Resource Information Systems (HRIS)',
      'Finance Management Information Systems (FMIS)',
      'Production Management Information Systems (PMIS)',
      'Decision Support Systems (DSS)',
      'Executive Support Systems (ESS)',
      'Systems from a Constituency Perspective',
      'Relationship of Systems to One Another',
      'Systems for Linking the Enterprise (Enterprise Applications)',
      'Enterprise Systems (ERP)',
      'Supply Chain Management (SCM) Systems',
      'Customer Relationship Management (CRM) Systems',
      'Knowledge Management Systems (KMS)',
      'Intranets and Extranets',
      'E-business, E-commerce and E-government',
    ],
    definitions: [
      { term: 'Business Process', meaning: 'A set of activities or steps required to produce a product or service; a workflow of material, information, and knowledge through an organization.' },
      { term: 'Functional Business Process', meaning: 'A business process tied to a single department, e.g. Human Resources hiring employees.' },
      { term: 'Cross-Functional Business Process', meaning: 'A business process that spans multiple departments, e.g. fulfilling a customer order across sales, accounting, and production.' },
      { term: 'Transaction Processing System (TPS)', meaning: 'A system that performs and records the daily routine transactions needed to run a business, serving operational-level employees.' },
      { term: 'Business Intelligence (BI)', meaning: 'A class of software applications that analyze current and historical data to find patterns and support decision-making.' },
      { term: 'Management Information System (MIS)', meaning: 'A system serving middle management that provides reports on firm performance based on TPS data, answering routine questions with little analytic capability.' },
      { term: 'Marketing Information System', meaning: 'A system that helps managers identify key customers and segment the market to target it accurately.' },
      { term: 'Human Resource Information System (HRIS)', meaning: 'A system that helps HR managers make timely decisions, covering payroll, attendance, benefits, training, and self-service modules.' },
      { term: 'Finance Management Information System (FMIS)', meaning: 'A system that helps managers evaluate the best funding sources by risk and return, covering equity and debt.' },
      { term: 'Production Management Information System (PMIS)', meaning: 'A system concerned with planning and controlling activities that transform input into output, including production planning, control, and product design.' },
      { term: 'Decision Support System (DSS)', meaning: 'A system serving middle management that supports non-routine decision making, often using external information alongside TPS and MIS data.' },
      { term: 'Executive Support System (ESS)', meaning: 'A system serving senior management that supports non-routine decisions requiring judgment, combining external data with internal MIS/DSS summaries.' },
      { term: 'Enterprise System (ERP)', meaning: 'A system that collects data from different firm functions into a single central repository, resolving fragmented and redundant data.' },
      { term: 'Supply Chain Management (SCM) System', meaning: "A system that manages a firm's relationships with suppliers, sharing information on orders, production, and inventory." },
      { term: 'Customer Relationship Management (CRM) System', meaning: "A system that coordinates business processes dealing with customers to optimize revenue, satisfaction, and retention." },
      { term: 'Knowledge Management System (KMS)', meaning: 'A system that supports acquiring, storing, distributing, and applying knowledge within a firm, and links to external knowledge sources.' },
      { term: 'Intranet', meaning: 'An internal company website accessible only to employees.' },
      { term: 'Extranet', meaning: 'A company website accessible externally, but only to vendors and suppliers, often used to coordinate the supply chain.' },
      { term: 'E-business', meaning: 'The use of digital technology and the Internet to drive major business processes.' },
      { term: 'E-commerce', meaning: 'A subset of e-business involving buying and selling goods and services through the Internet.' },
      { term: 'E-government', meaning: 'Using Internet technology to deliver information and services to citizens, employees, and businesses.' },
    ],
    keyPoints: [
      'A business can be seen as a collection of business processes, which can be functional (one department) or cross-functional (multiple departments).',
      'Business processes may act as assets or liabilities depending on how well they perform.',
      'IT enhances business processes in two ways: increasing efficiency of existing processes, and enabling entirely new processes.',
      'The Order Fulfillment Process is a classic cross-functional example spanning Sales, Accounting, and Manufacturing/Production.',
      'TPS serve operational staff with structured, routine transactions and are the major data source for other systems.',
      'MIS serve middle management with routine reports built from TPS data, but have little analytic capability.',
      'DSS support non-routine decisions for middle management and often pull in external data (e.g. stock prices, competitor prices).',
      "ESS support senior management's non-routine decisions, combining external data with internal MIS/DSS summaries (e.g. digital dashboards).",
      'The four major enterprise applications are Enterprise Systems (ERP), SCM, CRM, and KMS — each spans functional areas and organizational levels, and may extend outside the firm.',
      'Intranets serve employees only; extranets extend limited access to vendors and suppliers.',
      'E-commerce is a subset of e-business; e-government applies Internet technology to deliver public services.',
      'In practice, most organizational systems are only loosely integrated, even though integration is improving over time.',
    ],
  },
},

{
  id: 3,
  title: 'Using IS to Achieve Competitive Advantage',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>Using Information Systems to Achieve Competitive Advantage</h1>
    <div class="meta-info">ICT2162 <span>•</span> 22 min read</div>

    <p>This lesson looks at what an <strong>organization</strong> actually is, the features every organization shares, and two powerful models — <strong>Porter's Five Forces</strong> and <strong>Porter's Value Chain Analysis</strong> — that companies use to build <strong>competitive advantage</strong> with information systems.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>By the end of this lesson, you should be able to answer these questions:</p>
      <ul>
        <li>Which features of organizations do managers need to know about to build and use information systems successfully?</li>
        <li>What is the impact of information systems on organizations?</li>
        <li>How do Porter's competitive forces model and the value chain model help companies develop competitive strategies using information systems?</li>
        <li>What are the challenges posed by strategic information systems, and how should they be addressed?</li>
      </ul>
    </div>

    <h2>What We Discuss Today</h2>
    <ol>
      <li>What is an Organization</li>
      <li>Features of Organizations</li>
      <li>Porter's Five Forces Model</li>
      <li>Porter's Value Chain Analysis</li>
    </ol>

    <div class="divider"></div>

    <h2>Relationship Between Organizations and Information Technology</h2>
    <p>Organizations and Information Technology have a <strong>two-way (reciprocal)</strong> relationship — each shapes the other. This relationship is filtered through several <strong>mediating factors</strong>:</p>
    <pre><code>Organizations ⇄ [ Mediating Factors ] ⇄ Information Technology

Mediating Factors:
- Environment
- Culture
- Structure
- Business Processes
- Politics
- Management Decisions</code></pre>

    <div class="divider"></div>

    <h2>What is an Organization</h2>

    <h3>Technical Definition</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>An organization is a <strong>stable, formal social structure</strong> that takes resources from the environment and processes them to produce outputs. It is a <strong>formal legal entity</strong> with internal rules and procedures, as well as a social structure.</p>
    </div>
    <pre><code>Inputs from the environment → [ ORGANIZATION: Production process ] → Outputs to the environment</code></pre>

    <h3>Behavioral Definition</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A more realistic <strong>behavioral definition</strong>: an organization is a collection of <strong>rights, privileges, obligations, and responsibilities</strong> that is delicately balanced over a period of time through <strong>conflict and conflict resolution</strong>.</p>
    </div>
    <pre><code>Environmental resources → [ FORMAL ORGANIZATION ] → Environmental outputs

Structure:                  Process:
- Hierarchy                 - Rights/obligations
- Division of labor         - Privileges/responsibilities
- Rules, procedures         - Values
- Business processes        - Norms
- Culture                   - People</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Two definitions of an organization: <strong>Technical</strong> (a stable structure that turns inputs into outputs) and <strong>Behavioral</strong> (a balance of rights, privileges, obligations, and responsibilities).</p>
    </div>

    <div class="divider"></div>

    <h2>Features of Organizations</h2>
    <ul>
      <li>Use of <strong>hierarchical structure</strong></li>
      <li><strong>Accountability</strong> and <strong>authority</strong> in a system of impartial decision making</li>
      <li>Adherence to the principle of <strong>efficiency</strong></li>
      <li><strong>Routines</strong> and business processes</li>
      <li>Organizational <strong>politics, culture, environments,</strong> and <strong>structures</strong></li>
    </ul>

    <h3>Routines and Business Processes</h3>
    <ul>
      <li><strong>Routines</strong> (Standard Operating Procedures) — precise rules, procedures, and practices developed to cope with virtually all expected situations.</li>
      <li><strong>Business processes</strong> — collections of routines.</li>
      <li><strong>Business firm</strong> — a collection of business processes.</li>
    </ul>
    <pre><code>Routines
    ↓
Collections of routines        →  (Business Processes)
    ↓
Collection of business processes  →  (Business Firm)</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>New information system applications require that individual <strong>routines and business processes change</strong> to achieve high levels of organizational performance.</p>
    </div>

    <h3>Organizational Politics</h3>
    <ul>
      <li>Divergent viewpoints lead to <strong>political struggle, competition, and conflict</strong>.</li>
      <li><strong>Political resistance</strong> greatly hampers organizational change.</li>
    </ul>

    <h3>Organizational Culture</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>All organizations have <strong>bedrock, unassailable, unquestioned</strong> assumptions (by their members) that define their goals and products. <strong>Organizational culture</strong> covers assumptions about what products the organization should produce, how it should produce them, and where and for whom.</p>
    </div>

    <h3>Organizational Environments</h3>
    <ul>
      <li>Organizations and environments have a <strong>reciprocal relationship</strong>.</li>
      <li>Organizations are <strong>open to, and dependent on,</strong> the social and physical environment.</li>
      <li>Organizations can <strong>influence</strong> their environments.</li>
      <li><strong>Environments generally change faster</strong> than organizations.</li>
      <li>Information systems can be an instrument of <strong>environmental scanning</strong> — acting like a lens.</li>
    </ul>
    <pre><code>Environmental Resources & Constraints:
Governments, Competitors, Customers,
Financial Institutions, Culture, Knowledge, Technology
                    │
                    ▼
        ┌───────────────────────┐
        │   Information Systems  │  (the "lens")
        └───────────────────────┘
                    │
                    ▼
                The Firm</code></pre>

    <h3>Disruptive Technologies</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>disruptive technology</strong> brings about sweeping change to businesses, industries, and markets. Examples: personal computers, word processing software, the Internet, the PageRank algorithm.</p>
    </div>
    <ul>
      <li><strong>First movers</strong> — the inventors of disruptive technologies.</li>
      <li><strong>Fast followers</strong> — firms with the size and resources to capitalize on that technology.</li>
    </ul>
    <h4 style="margin:0 0 6px 0;">Examples of Disruptive Technologies</h4>
    <ul>
      <li><strong>Microprocessor chips (1971)</strong> — thousands, and eventually millions, of transistors on a silicon chip.</li>
      <li><strong>Personal computers (1975)</strong> — small, inexpensive, but fully functional desktop computers.</li>
      <li><strong>Digital photography (1975)</strong> — using CCD (charge-coupled device) image sensor chips to record images.</li>
      <li><strong>World Wide Web (1989)</strong> — a global database of digital files and "pages" instantly available.</li>
      <li><strong>Internet music, video, TV services (1998)</strong> — repositories of downloadable music, video, and TV broadcasts on the web.</li>
      <li><strong>PageRank algorithm</strong> — a method for ranking web pages by popularity to supplement keyword search.</li>
      <li><strong>Software as a web service</strong> — using the Internet to provide remote access to online software.</li>
    </ul>

    <h3>Organizational Structure</h3>
    <ul>
      <li><strong>Entrepreneurial structure</strong> — small start-up business.</li>
      <li><strong>Machine bureaucracy</strong> — midsize manufacturing firm.</li>
      <li><strong>Divisionalized bureaucracy</strong> — Fortune 500 firms, such as General Motors.</li>
      <li><strong>Professional bureaucracy</strong> — law firms, school systems, hospitals.</li>
      <li><strong>Adhocracy</strong> — consulting firms.</li>
    </ul>

    <div class="divider"></div>

    <h2>The Impact of Information Systems on Organizations</h2>
    <ol>
      <li>Economic Impacts</li>
      <li>Organizational and Behavioral Impacts</li>
      <li>Impact of the Internet</li>
      <li>Implications for the Design and Understanding of Information Systems</li>
    </ol>

    <h3>Economic Impacts</h3>
    <ul>
      <li>IT changes the <strong>relative costs of capital</strong> and the <strong>costs of information</strong>.</li>
      <li>Information systems technology is a <strong>factor of production</strong>, like capital and labor.</li>
      <li>IT affects the cost and quality of information and changes the <strong>economics of information</strong>.</li>
      <li>Information technology helps firms <strong>contract in size</strong> because it can reduce <strong>transaction costs</strong> (the cost of participating in markets) — this leads to <strong>outsourcing</strong>.</li>
    </ul>

    <h3>Organizational and Behavioral Impacts</h3>
    <ul>
      <li><strong>IT flattens organizations</strong>:
        <ul>
          <li>Decision making pushed to lower levels</li>
          <li>Fewer managers needed (IT enables faster decision making and increases span of control)</li>
        </ul>
      </li>
      <li><strong>Postindustrial organizations</strong> — organizations flatten because in postindustrial societies, authority increasingly relies on <strong>knowledge and competence</strong> rather than formal positions.</li>
      <li><strong>Organizational resistance to change</strong>:
        <ul>
          <li>Information systems become bound up in organizational politics because they influence access to a key resource — <strong>information</strong>.</li>
          <li>Information systems potentially change an organization's structure, culture, politics, and work.</li>
        </ul>
      </li>
    </ul>
    <pre><code>Traditional hierarchy (many levels)   →   Flattened organization
        ▲▲▲                                    ▲
      ▲▲▲▲▲▲▲                                ▲▲▲▲
    ▲▲▲▲▲▲▲▲▲▲▲                          ▲▲▲▲▲▲▲▲▲▲
  ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲                     (fewer layers of management)</code></pre>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>The <strong>most common reason</strong> for the failure of large IT projects is <strong>organizational and political resistance to change</strong> — not the technology itself.</p>
    </div>

    <h3>Impact of the Internet</h3>
    <ul>
      <li>The Internet <strong>increases the accessibility, storage, and distribution</strong> of information and knowledge for organizations.</li>
      <li>The Internet is capable of dramatically <strong>lowering transaction and agency costs</strong> facing most organizations.</li>
      <li>It is a <strong>key component</strong> of a firm's IT infrastructure.</li>
    </ul>

    <h3>Implications for the Design and Understanding of Information Systems</h3>
    <p>When designing an information system, managers must understand:</p>
    <ul>
      <li>The <strong>environment</strong> in which the organization must function</li>
      <li>The <strong>structure</strong> of the organization: hierarchy, specialization, routines, and business processes</li>
      <li>The organization's <strong>culture and politics</strong></li>
      <li>The <strong>type of organization</strong> and its style of leadership</li>
      <li>The principal <strong>interest groups</strong> affected by the system and the attitudes of the workers who will use it</li>
      <li>The kinds of <strong>tasks, decisions, and business processes</strong> the information system is designed to assist</li>
    </ul>

    <div class="divider"></div>

    <h2>Porter's Five Forces Model</h2>
    <p>This model helps a firm understand the competitive forces shaping its industry:</p>
    <pre><code>                Threat of new entrants
                         │
                         ▼
Bargaining power  →  Rivalry among   ←  Bargaining power
  of suppliers      existing competitors    of buyers
                         ▲
                         │
             Threat of substitute products/services</code></pre>

    <h3>1. Threat of New Entrants</h3>
    <p>Depends on <strong>barriers to entry</strong>:</p>
    <ul>
      <li>Economies of Scale</li>
      <li>Product Differentiation</li>
      <li>Capital Investments</li>
      <li>Switching Cost</li>
      <li>Government Policy</li>
      <li>Patent Right</li>
      <li>Brand Preference / Customer Loyalty</li>
    </ul>

    <h3>2. Rivalry Among Existing Competitors</h3>
    <ul>
      <li>Concentration Ratio</li>
      <li>Industry Growth</li>
      <li>Relationship between Competitors</li>
      <li><strong>Competencies</strong> — Resources, Leadership, Brand, Innovation</li>
      <li><strong>Exit Barriers</strong> — Redundancy Payments, Effect of withdrawal on other operations, Reluctance of management to accept defeat, Government pressure</li>
    </ul>

    <h3>3. Threat of Substitutes</h3>
    <p>Substitutes satisfy the same need. Depends on:</p>
    <ul>
      <li>Price</li>
      <li>Relative Performance</li>
      <li>Switching Cost</li>
      <li>Change of need/taste</li>
    </ul>

    <h3>4. Bargaining Power of Customers/Buyers</h3>
    <ul>
      <li>Product Variety</li>
      <li>Product Differentiation</li>
      <li>Pricing</li>
      <li>Income of Buyers</li>
      <li>Buyers' knowledge of Alternative Products</li>
      <li>Volume Purchased</li>
      <li>Price Sensitivity of Buyers</li>
    </ul>

    <h3>5. Bargaining Power of Suppliers</h3>
    <ul>
      <li>Number of Suppliers</li>
      <li>% of Suppliers' Business to the Company</li>
      <li>Market Share, Size of Suppliers</li>
      <li>Importance of the Suppliers' Product to the Buyer</li>
    </ul>

    <div class="divider"></div>

    <h3>Information System Strategies for Dealing with Competitive Forces</h3>
    <ul>
      <li><strong>Low-cost leadership</strong> — use information systems to produce products and services at a lower price than competitors while enhancing quality and level of service.</li>
      <li><strong>Product differentiation</strong> — use information systems to differentiate products and enable new services and products.</li>
      <li><strong>Focus on market niche</strong> — use information systems to enable a focused strategy on a single market niche; specialize.</li>
      <li><strong>Customer and supplier intimacy</strong> — use information systems to develop strong ties and loyalty with customers and suppliers.</li>
    </ul>

    <h3>Impact of the Internet on Competitive Forces and Industry Structure</h3>
    <ul>
      <li><strong>Substitute products or services</strong> — enables substitutes to emerge with new approaches to meeting needs and performing functions.</li>
      <li><strong>Customers' bargaining power</strong> — availability of global price and product information shifts bargaining power to customers.</li>
      <li><strong>Suppliers' bargaining power</strong> — procurement over the Internet tends to raise bargaining power over suppliers; suppliers can also benefit from reduced barriers to entry and the elimination of distributors and other intermediaries.</li>
      <li><strong>Threat of new entrants</strong> — reduces barriers to entry, such as the need for a sales force, access to channels, and physical assets; provides technology that makes other things easier to do.</li>
      <li><strong>Positioning and rivalry among existing competitors</strong> — widens the geographic market, increasing the number of competitors and reducing differences among competitors; makes it harder to sustain operational advantages; puts pressure to compete on price.</li>
    </ul>

    <div class="divider"></div>

    <h2>Porter's Value Chain Analysis</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Porter says <strong>"Competitive advantage arises out of the way in which firms organize themselves and perform their activities."</strong> Value Chain Analysis is the means by which a firm creates value in its products from the perspective of the end user. Management should analyze the business in terms of how it generates value for <strong>customers and shareholders</strong>.</p>
    </div>

    <pre><code>SUPPORT ACTIVITIES
- Administration and Management: Electronic scheduling & messaging systems
- Human Resources: Workforce planning systems
- Technology: Computer-aided design systems
- Procurement: Computerized ordering systems

PRIMARY ACTIVITIES
Inbound Logistics → Operations → Sales & Marketing → Service → Outbound Logistics
(Automated       (Computer-    (Computerized      (Equipment   (Automated shipment
 warehousing)     controlled    ordering)          maintenance)  scheduling)
                  machining)

Suppliers' Suppliers → Suppliers → Firm → Distributors → Customers
                     (Industry Value Chain)</code></pre>

    <h3>Primary Activities</h3>
    <ul>
      <li><strong>Inbound Logistics</strong> — Receiving, Storing, Stock Control of Raw Materials</li>
      <li><strong>Operations</strong> — Conversion of Input to Finished Goods; Production System; Capacity Utilization</li>
      <li><strong>Outbound Logistics</strong> — Storing, Testing, Packaging, and Distribution of the Finished Goods</li>
      <li><strong>Marketing &amp; Sales</strong> — Promotional Activities; Informing customers and persuading them to buy</li>
      <li><strong>[After Sales] Services</strong> — Maintenance, Repairing, Guarantees, Advisory Services</li>
    </ul>

    <h3>Support Activities</h3>
    <ul>
      <li><strong>Procurement</strong> — Purchase of Inputs for Primary Activities</li>
      <li><strong>Technological Developments (R&amp;D)</strong> — Product and Process Design, Continuous Improvement, Innovation</li>
      <li><strong>Human Resources</strong> — Recruitment, Training and Development, Motivation and Rewarding</li>
      <li><strong>Firm Infrastructure</strong> — Structure, Culture, Management Planning, Finance</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The Value Chain splits activities into <strong>Primary Activities</strong> (directly create/deliver the product) and <strong>Support Activities</strong> (help the primary activities happen).</p>
    </div>

    <h3>Extending the Value Chain: The Value Web</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>value web</strong> is a collection of independent firms that use information technology to coordinate their value chains to produce a product or service for a market collectively. It is more <strong>customer driven</strong> and operates in a <strong>less linear</strong> fashion than the traditional value chain — synchronizing the value chains of business partners within an industry to respond rapidly to changes in supply and demand.</p>
    </div>

    <div class="divider"></div>

    <h3>How Information Systems Can Improve the Overall Performance of Business Units</h3>
    <ul>
      <li><strong>Synergies</strong></li>
      <li><strong>Core Competencies</strong></li>
      <li><strong>Network-Based Strategies</strong></li>
    </ul>

    <h3>Challenges Posed by Strategic Information Systems</h3>
    <ul>
      <li><strong>Sustaining Competitive Advantage</strong></li>
      <li><strong>Aligning IT with Business Objectives</strong></li>
      <li><strong>Managing Strategic Transitions</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Lesson Summary</h2>
    <ul>
      <li>What is an Organization — Technical and Behavioral definitions</li>
      <li>Features of Organizations</li>
      <li>Porter's Five Forces Model</li>
      <li>Porter's Value Chain Analysis</li>
    </ul>
  `,
  summary: {
    topic: "Using Information Systems to Achieve Competitive Advantage",
    subTopics: [
      'Relationship Between Organizations and Information Technology',
      'What is an Organization (Technical and Behavioral Definitions)',
      'Features of Organizations',
      'Routines and Business Processes',
      'Organizational Politics',
      'Organizational Culture',
      'Organizational Environments',
      'Disruptive Technologies',
      'Organizational Structure',
      'The Impact of Information Systems on Organizations',
      'Economic Impacts',
      'Organizational and Behavioral Impacts',
      'Impact of the Internet',
      'Implications for the Design and Understanding of Information Systems',
      "Porter's Five Forces Model",
      'Information System Strategies for Dealing with Competitive Forces',
      'Impact of the Internet on Competitive Forces and Industry Structure',
      "Porter's Value Chain Analysis",
      'Extending the Value Chain: The Value Web',
      'How Information Systems Can Improve the Overall Performance of Business Units',
      'Challenges Posed by Strategic Information Systems',
    ],
    definitions: [
      { term: 'Organization (Technical Definition)', meaning: 'A stable, formal social structure that takes resources from the environment and processes them to produce outputs; a formal legal entity with internal rules and procedures.' },
      { term: 'Organization (Behavioral Definition)', meaning: 'A collection of rights, privileges, obligations, and responsibilities that is delicately balanced over time through conflict and conflict resolution.' },
      { term: 'Routine (Standard Operating Procedure)', meaning: 'Precise rules, procedures, and practices developed to cope with virtually all expected situations.' },
      { term: 'Business Process', meaning: 'A collection of routines.' },
      { term: 'Business Firm', meaning: 'A collection of business processes.' },
      { term: 'Organizational Culture', meaning: 'The set of bedrock assumptions about what products an organization should produce, how, where, and for whom.' },
      { term: 'Disruptive Technology', meaning: 'A technology that brings about sweeping change to businesses, industries, and markets, e.g. personal computers or the Internet.' },
      { term: 'First Mover', meaning: 'A firm that invents a disruptive technology.' },
      { term: 'Fast Follower', meaning: 'A firm with the size and resources to capitalize on a disruptive technology after it appears.' },
      { term: "Porter's Five Forces Model", meaning: 'A model analyzing industry competitiveness through five forces: threat of new entrants, rivalry among existing competitors, threat of substitutes, bargaining power of buyers, and bargaining power of suppliers.' },
      { term: 'Low-Cost Leadership', meaning: 'A strategy using information systems to produce products/services at a lower price than competitors while enhancing quality and service.' },
      { term: 'Product Differentiation', meaning: 'A strategy using information systems to differentiate products and enable new services and products.' },
      { term: 'Market Niche Focus', meaning: 'A strategy using information systems to enable a focused strategy on a single market niche.' },
      { term: 'Customer and Supplier Intimacy', meaning: 'A strategy using information systems to develop strong ties and loyalty with customers and suppliers.' },
      { term: "Porter's Value Chain Analysis", meaning: 'A model viewing the firm as a series of primary and support activities that add value to products, used to identify where competitive advantage can be added.' },
      { term: 'Primary Activities', meaning: 'Value chain activities most directly related to the production and distribution of a firm\'s products/services: inbound logistics, operations, outbound logistics, marketing & sales, and service.' },
      { term: 'Support Activities', meaning: "Value chain activities that make the delivery of primary activities possible: procurement, technology development, human resources, and firm infrastructure." },
      { term: 'Value Web', meaning: 'A collection of independent firms that use information technology to coordinate their value chains to collectively produce a product or service for a market.' },
    ],
    keyPoints: [
      'Organizations and information technology have a two-way relationship, mediated by environment, culture, structure, business processes, politics, and management decisions.',
      'An organization can be defined technically (a structure converting inputs to outputs) or behaviorally (a balance of rights, privileges, obligations, and responsibilities).',
      'Routines combine into business processes, and business processes combine into the business firm.',
      'The most common reason large IT projects fail is organizational and political resistance to change, not the technology itself.',
      'IT tends to flatten organizations by pushing decision-making to lower levels and reducing the number of managers needed.',
      "Porter's Five Forces (new entrants, existing rivals, substitutes, buyer power, supplier power) shape industry competitiveness.",
      'Four generic IS strategies for competitive forces: low-cost leadership, product differentiation, focus on market niche, and customer/supplier intimacy.',
      "The Internet generally increases competitive pressure by widening markets, empowering buyers with information, and lowering barriers to entry.",
      "Porter's Value Chain splits a firm's activities into Primary Activities (inbound logistics, operations, outbound logistics, marketing & sales, service) and Support Activities (procurement, technology development, HR, firm infrastructure).",
      'A value web extends the value chain across multiple independent firms, coordinated by IT, and is more customer-driven and less linear than a traditional value chain.',
      'Information systems can improve overall business performance through synergies, core competencies, and network-based strategies.',
      'Key strategic challenges include sustaining competitive advantage, aligning IT with business objectives, and managing strategic transitions.',
    ],
  },
},
]