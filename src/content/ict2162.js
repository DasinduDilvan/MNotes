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
      <li><strong>Course Unit</strong> - Management Information Systems (ICT2162)</li>
      <li><strong>Credits</strong> - 2</li>
      <li><strong>Lecture Hours</strong> - 30 hours</li>
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
      <li><em>Management Information Systems: Managing the Digital Firm</em> - K. C. Laudon, J. P. Laudon</li>
      <li><em>Essentials of MIS</em> - K. C. Laudon, J. P. Laudon</li>
    </ul>

    <h2>Evaluation Criteria</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>80% attendance</strong> is mandatory to be eligible for the final assessment.</p>
    </div>
    <ul>
      <li><strong>Continuous Assessment (CA)</strong> - 30% of the total grade (Assignments 20%, Quizzes 10%)</li>
      <li><strong>Final Assessment (FA)</strong> - 70% of the total grade, covering Learning Outcomes 1–4 (Theory 70%)</li>
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
      <p><strong>Data</strong> is raw, unorganized facts - like item numbers and prices from a supermarket checkout counter. <strong>Information</strong> is data that has been processed and organized into a meaningful form, such as total unit sales or total sales revenue for a specific store.</p>
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
    <p>An information system contains information about an organization and the environment around it. <strong>Feedback</strong> is output that is sent back to the right people or activities so the input can be checked and improved. Actors in the environment - such as customers, suppliers, competitors, stockholders, and regulatory agencies - interact with the organization and its information systems.</p>

    <p>There are three main activities in an information system:</p>
    <ul>
      <li><strong>Input</strong> - captures or collects raw data from within the organization or from its outside environment.</li>
      <li><strong>Processing</strong> - converts this raw input into a meaningful form.</li>
      <li><strong>Output</strong> - transfers the processed information to the people or activities that will use it.</li>
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
      <li><strong>Organizations</strong> - information systems are a core part of organizations. For some companies, such as credit reporting firms, there would be no business at all without an information system. The key elements of an organization are its people, structure, business processes, politics, and culture.</li>
      <li><strong>Management</strong> - organizations have a structure made up of different levels and specialties, showing a clear division of labor. Authority and responsibility in a business are organized as a hierarchy, or pyramid structure.</li>
    </ul>

    <pre><code>            Senior Management
   (long-range strategic decisions,
    ensures financial performance)
   -----------------------------------
          Middle Management
   (scientists & knowledge workers -
    carries out senior management's
         programs and plans)
   -----------------------------------
        Operational Management
 (production & service workers, data
   workers - monitors day-to-day
        business activities)</code></pre>
    <p>The upper levels of the hierarchy have managerial, professional, and technical employees, while the lower levels have operational staff.</p>

    <h3>Information Technology Components</h3>
    <ul>
      <li><strong>Computer hardware</strong> - the physical equipment used for input, processing, and output activities in an information system.</li>
      <li><strong>Computer software</strong> - the detailed, preprogrammed instructions that control and coordinate the computer hardware parts of an information system.</li>
      <li><strong>Data management technology</strong> - the software that organizes data on physical storage media.</li>
      <li><strong>Networking and telecommunications technology</strong> - physical devices and software that connect hardware together and move data from one location to another.</li>
    </ul>

    <div class="divider"></div>

    <h3>What's New in Management Information Systems?</h3>
    <ul>
      <li><strong>IT Innovations</strong> - for example, cloud computing (Google Drive, OneDrive).</li>
      <li><strong>New Business Models</strong> - for example, Netflix.</li>
      <li><strong>E-commerce Expansion</strong></li>
      <li><strong>Management Changes</strong></li>
      <li><strong>Changes in Firms and Organizations</strong></li>
    </ul>

    <h3>How Information Systems Are Transforming Business</h3>
    <p>Between 1999 and 2017, <strong>IT investment</strong> grew steadily as a share of total business investment - from about <strong>21%</strong> to about <strong>33%</strong> of total investment. This shows how deeply information systems have become part of everyday business.</p>
    <p><strong>Example:</strong> the mobile phone industry (e.g., Samsung Galaxy Note and Apple iPhone) - companies constantly invest in new technology to stay competitive.</p>
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
      <li>It is not just goods that move across borders - jobs move too.</li>
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
      <li><strong>Operational excellence</strong> - example: Wal-Mart</li>
      <li><strong>New products, services, and business models</strong> - example: Apple Inc.</li>
      <li><strong>Customer and supplier intimacy</strong> - example: The Mandarin Oriental hotel group</li>
      <li><strong>Improved decision making</strong></li>
      <li><strong>Competitive advantage</strong> - example: Toyota</li>
      <li><strong>Survival</strong> - example: HSBC</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>These <strong>six strategic business objectives</strong> are a common exam question - learn each objective together with its example company.</p>
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
      <li><strong>Computer science</strong> - builds theories of computability, methods of computation, and methods of efficient data storage and access.</li>
      <li><strong>Management science</strong> - focuses on developing models for decision-making and management practice.</li>
      <li><strong>Operations research</strong> - focuses on mathematical techniques for optimizing parts of an organization, such as transportation, inventory control, and transaction costs.</li>
    </ul>

    <h3>Behavioral Approach</h3>
    <p>The behavioral approach deals with the human and organizational issues that come up while building and maintaining information systems over the long term - issues such as strategic business integration, design, implementation, use, and management, which cannot be studied usefully with technical models alone.</p>

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
      <p>Organizations and information systems have a two-way, <strong>interdependent relationship</strong> - business needs shape IT systems, and existing IT systems shape what the business can do.</p>
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
      'Organizations and information systems are interdependent - business strategy shapes IT systems, and existing IT systems shape what a business can do.',
      'IT investment as a share of total business investment grew from about 21% (1999) to about 33% (2017), showing how deeply information systems have become embedded in business.',
      'Globalization example: about 80% of toys sold in the U.S. are made in China, while about 90% of PCs made in China use American-made Intel or AMD chips - goods, jobs, and technology all cross borders together.',
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
      <li><strong>Functional example:</strong> Human Resources - hiring employees.</li>
      <li><strong>Cross functional example:</strong> fulfilling a customer order (this touches sales, accounting, and production).</li>
      <li>Business processes can be <strong>assets</strong> (when they work well) or <strong>liabilities</strong> (when they are slow or broken).</li>
      <li>A business itself can be seen as a <strong>collection of business processes</strong>.</li>
    </ul>

    <h3>Examples of Functional Business Processes</h3>
    <ul>
      <li><strong>Manufacturing and production</strong> - assembling the product, checking for quality, producing bills of materials.</li>
      <li><strong>Sales and marketing</strong> - identifying customers, making customers aware of the product, selling the product.</li>
      <li><strong>Finance and accounting</strong> - paying creditors, creating financial statements, managing cash accounts.</li>
      <li><strong>Human resources</strong> - hiring employees, evaluating employees' job performance, enrolling employees in benefits plans.</li>
    </ul>

    <h3>The Order Fulfillment Process (Cross-Functional Example)</h3>
    <p>This example shows how one process - fulfilling a customer order - flows across three different departments:</p>

    <pre><code>SALES         : Generate order  → Submit order
                                        ↓
ACCOUNTING    : Check credit → Approve credit → Generate invoice
                                        ↓
MANUFACTURING &
PRODUCTION    : Assemble product → Ship product</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The Order Fulfillment Process is a classic exam example of a <strong>cross-functional business process</strong> - it needs Sales, Accounting, and Manufacturing to work together.</p>
    </div>

    <h3>How Information Technology Enhances Business Processes</h3>
    <p>Information technology (IT) enhances business processes in <strong>two main ways</strong>:</p>
    <ol>
      <li><strong>Increasing efficiency of existing processes</strong> - by automating steps that used to be done manually.</li>
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
      <p><strong>Examples:</strong> Kindle e-books from Amazon, and buying a computer online at Best Buy - both are new business models made possible by IT.</p>
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
      <li>Often use <strong>external information</strong> as well as data from TPS and MIS - for example, current stock prices or competitors' product prices.</li>
    </ul>

    <h3>2.7 Executive Support Systems (ESS)</h3>
    <ul>
      <li>Support <strong>senior management</strong>.</li>
      <li>Address <strong>non-routine decisions</strong> that require judgment, evaluation, and insight.</li>
      <li>Incorporate <strong>external data</strong> (e.g. new tax laws, competitors) as well as summarized internal data from MIS and DSS.</li>
      <li><strong>Example:</strong> a digital dashboard giving a real-time view of the firm's financial performance - working capital, accounts receivable, accounts payable, cash flow, and inventory.</li>
    </ul>

    <div class="divider"></div>

    <h3>Systems from a Constituency Perspective</h3>
    <ul>
      <li><strong>TPS</strong> - supports operational-level employees</li>
      <li><strong>MIS &amp; DSS</strong> - supports managers</li>
      <li><strong>ESS</strong> - supports executives</li>
    </ul>

    <h3>Relationship of Systems to One Another</h3>
    <ul>
      <li><strong>TPS</strong> is the major source of data for other systems.</li>
      <li><strong>ESS</strong> is the recipient of data from lower-level systems.</li>
      <li>Data may be exchanged between systems.</li>
    </ul>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>In reality, most businesses' systems are only <strong>loosely integrated</strong> - though this is getting better over time. Don't assume all systems in a real company are perfectly connected.</p>
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
      <li>Provide information to coordinate all business processes that deal with customers - <strong>sales, marketing, and service</strong> - to optimize revenue, customer satisfaction, and customer retention.</li>
      <li><strong>Integrate</strong> the firm's customer-related processes and consolidate customer information from multiple communication channels.</li>
    </ul>

    <h3>4. Knowledge Management Systems (KMS)</h3>
    <ul>
      <li>Support processes for <strong>acquiring, creating, storing, distributing, applying,</strong> and integrating knowledge - such as how to create, produce, and distribute products and services.</li>
      <li>Collect internal knowledge and experience within the firm and make it available to employees.</li>
      <li>Link to <strong>external sources</strong> of knowledge.</li>
    </ul>

    <div class="divider"></div>

    <h3>Intranets and Extranets</h3>
    <p>These are alternative tools that increase integration and speed up the flow of information:</p>
    <ul>
      <li><strong>Intranets</strong> - internal company websites accessible only by employees.</li>
      <li><strong>Extranets</strong> - company websites accessible externally, but only to vendors and suppliers. Often used to coordinate the supply chain.</li>
    </ul>

    <div class="divider"></div>

    <h2>E-business, E-commerce and E-government</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>E-business</strong> - the use of digital technology and the Internet to drive major business processes.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>E-commerce</strong> - a subset of e-business; buying and selling goods and services through the Internet.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>E-government</strong> - using Internet technology to deliver information and services to citizens, employees, and businesses.</p>
    </div>

    <div class="divider"></div>

    <h2>Lesson Summary</h2>
    <ul>
      <li>Business Processes and Information Systems</li>
      <li>Types of Information Systems
        <ul>
          <li>Systems for Different Management Groups - Transaction Processing Systems, Systems for Business Intelligence</li>
          <li>Systems for Linking the Enterprise - Enterprise Applications, Intranets and Extranets</li>
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
      'The four major enterprise applications are Enterprise Systems (ERP), SCM, CRM, and KMS - each spans functional areas and organizational levels, and may extend outside the firm.',
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

    <p>This lesson looks at what an <strong>organization</strong> actually is, the features every organization shares, and two powerful models - <strong>Porter's Five Forces</strong> and <strong>Porter's Value Chain Analysis</strong> - that companies use to build <strong>competitive advantage</strong> with information systems.</p>

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
    <p>Organizations and Information Technology have a <strong>two-way (reciprocal)</strong> relationship - each shapes the other. This relationship is filtered through several <strong>mediating factors</strong>:</p>
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
      <li><strong>Routines</strong> (Standard Operating Procedures) - precise rules, procedures, and practices developed to cope with virtually all expected situations.</li>
      <li><strong>Business processes</strong> - collections of routines.</li>
      <li><strong>Business firm</strong> - a collection of business processes.</li>
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
      <li>Information systems can be an instrument of <strong>environmental scanning</strong> - acting like a lens.</li>
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
      <li><strong>First movers</strong> - the inventors of disruptive technologies.</li>
      <li><strong>Fast followers</strong> - firms with the size and resources to capitalize on that technology.</li>
    </ul>
    <h4 style="margin:0 0 6px 0;">Examples of Disruptive Technologies</h4>
    <ul>
      <li><strong>Microprocessor chips (1971)</strong> - thousands, and eventually millions, of transistors on a silicon chip.</li>
      <li><strong>Personal computers (1975)</strong> - small, inexpensive, but fully functional desktop computers.</li>
      <li><strong>Digital photography (1975)</strong> - using CCD (charge-coupled device) image sensor chips to record images.</li>
      <li><strong>World Wide Web (1989)</strong> - a global database of digital files and "pages" instantly available.</li>
      <li><strong>Internet music, video, TV services (1998)</strong> - repositories of downloadable music, video, and TV broadcasts on the web.</li>
      <li><strong>PageRank algorithm</strong> - a method for ranking web pages by popularity to supplement keyword search.</li>
      <li><strong>Software as a web service</strong> - using the Internet to provide remote access to online software.</li>
    </ul>

    <h3>Organizational Structure</h3>
    <ul>
      <li><strong>Entrepreneurial structure</strong> - small start-up business.</li>
      <li><strong>Machine bureaucracy</strong> - midsize manufacturing firm.</li>
      <li><strong>Divisionalized bureaucracy</strong> - Fortune 500 firms, such as General Motors.</li>
      <li><strong>Professional bureaucracy</strong> - law firms, school systems, hospitals.</li>
      <li><strong>Adhocracy</strong> - consulting firms.</li>
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
      <li>Information technology helps firms <strong>contract in size</strong> because it can reduce <strong>transaction costs</strong> (the cost of participating in markets) - this leads to <strong>outsourcing</strong>.</li>
    </ul>

    <h3>Organizational and Behavioral Impacts</h3>
    <ul>
      <li><strong>IT flattens organizations</strong>:
        <ul>
          <li>Decision making pushed to lower levels</li>
          <li>Fewer managers needed (IT enables faster decision making and increases span of control)</li>
        </ul>
      </li>
      <li><strong>Postindustrial organizations</strong> - organizations flatten because in postindustrial societies, authority increasingly relies on <strong>knowledge and competence</strong> rather than formal positions.</li>
      <li><strong>Organizational resistance to change</strong>:
        <ul>
          <li>Information systems become bound up in organizational politics because they influence access to a key resource - <strong>information</strong>.</li>
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
      <p>The <strong>most common reason</strong> for the failure of large IT projects is <strong>organizational and political resistance to change</strong> - not the technology itself.</p>
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
      <li><strong>Competencies</strong> - Resources, Leadership, Brand, Innovation</li>
      <li><strong>Exit Barriers</strong> - Redundancy Payments, Effect of withdrawal on other operations, Reluctance of management to accept defeat, Government pressure</li>
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
      <li><strong>Low-cost leadership</strong> - use information systems to produce products and services at a lower price than competitors while enhancing quality and level of service.</li>
      <li><strong>Product differentiation</strong> - use information systems to differentiate products and enable new services and products.</li>
      <li><strong>Focus on market niche</strong> - use information systems to enable a focused strategy on a single market niche; specialize.</li>
      <li><strong>Customer and supplier intimacy</strong> - use information systems to develop strong ties and loyalty with customers and suppliers.</li>
    </ul>

    <h3>Impact of the Internet on Competitive Forces and Industry Structure</h3>
    <ul>
      <li><strong>Substitute products or services</strong> - enables substitutes to emerge with new approaches to meeting needs and performing functions.</li>
      <li><strong>Customers' bargaining power</strong> - availability of global price and product information shifts bargaining power to customers.</li>
      <li><strong>Suppliers' bargaining power</strong> - procurement over the Internet tends to raise bargaining power over suppliers; suppliers can also benefit from reduced barriers to entry and the elimination of distributors and other intermediaries.</li>
      <li><strong>Threat of new entrants</strong> - reduces barriers to entry, such as the need for a sales force, access to channels, and physical assets; provides technology that makes other things easier to do.</li>
      <li><strong>Positioning and rivalry among existing competitors</strong> - widens the geographic market, increasing the number of competitors and reducing differences among competitors; makes it harder to sustain operational advantages; puts pressure to compete on price.</li>
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
      <li><strong>Inbound Logistics</strong> - Receiving, Storing, Stock Control of Raw Materials</li>
      <li><strong>Operations</strong> - Conversion of Input to Finished Goods; Production System; Capacity Utilization</li>
      <li><strong>Outbound Logistics</strong> - Storing, Testing, Packaging, and Distribution of the Finished Goods</li>
      <li><strong>Marketing &amp; Sales</strong> - Promotional Activities; Informing customers and persuading them to buy</li>
      <li><strong>[After Sales] Services</strong> - Maintenance, Repairing, Guarantees, Advisory Services</li>
    </ul>

    <h3>Support Activities</h3>
    <ul>
      <li><strong>Procurement</strong> - Purchase of Inputs for Primary Activities</li>
      <li><strong>Technological Developments (R&amp;D)</strong> - Product and Process Design, Continuous Improvement, Innovation</li>
      <li><strong>Human Resources</strong> - Recruitment, Training and Development, Motivation and Rewarding</li>
      <li><strong>Firm Infrastructure</strong> - Structure, Culture, Management Planning, Finance</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The Value Chain splits activities into <strong>Primary Activities</strong> (directly create/deliver the product) and <strong>Support Activities</strong> (help the primary activities happen).</p>
    </div>

    <h3>Extending the Value Chain: The Value Web</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A <strong>value web</strong> is a collection of independent firms that use information technology to coordinate their value chains to produce a product or service for a market collectively. It is more <strong>customer driven</strong> and operates in a <strong>less linear</strong> fashion than the traditional value chain - synchronizing the value chains of business partners within an industry to respond rapidly to changes in supply and demand.</p>
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
      <li>What is an Organization - Technical and Behavioral definitions</li>
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


{
id: 4,
title: 'Ethical and Social Issues in Information Systems',
content: `
<span class="lesson-badge">LESSON 04</span>
<h1>Ethical and Social Issues in Information Systems</h1>
<div class="meta-info">ICT2162 <span>•</span> 9 min read</div>

<div class="callout callout-blue">
  <span class="callout-label">What We Discuss Today</span>
  <ol>
    <li>Introduction to ethical and social issues in information systems</li>
    <li>Relationship between ethical, social and political issues</li>
    <li>Ethics in a digital and AI-driven society</li>
    <li>Moral dimensions of information systems</li>
    <li>Emerging concerns: AI ethics, data governance and algorithmic bias</li>
  </ol>
</div>

<h2>Introduction</h2>
<p>Changes in technology bring both <strong>positive</strong> and <strong>negative</strong> results.</p>
<ul>
  <li>Information technology can be used for <strong>social progress</strong>.</li>
  <li>It can also be used to <strong>commit crimes</strong> and threaten cherished social values.</li>
  <li><strong>AI</strong>, <strong>Big Data</strong>, <strong>IoT</strong> and <strong>Blockchain</strong> raise complex ethical and regulatory challenges.</li>
  <li>Information systems raise new ethical questions for <strong>both individuals and societies</strong>.</li>
</ul>

<div class="divider"></div>

<h2>Ethics and Social Issues</h2>
<p>In simple words, <strong>ethics is about professional behavior</strong>.</p>

<div class="callout callout-blue">
  <span class="callout-label">Definition - Ethics</span>
  <p><strong>Ethics</strong> refers to the principles of <strong>right and wrong</strong> that individuals, acting as <strong>free moral agents</strong>, use to make choices that guide their behavior.</p>
</div>

<div class="callout callout-blue">
  <span class="callout-label">Definition - Social Issues</span>
  <p><strong>Social issues</strong> are matters of concern to <strong>governments and the community</strong>.</p>
</div>

<div class="divider"></div>

<h2>Relationship Between Ethical, Social and Political Issues</h2>
<p>New information technology has a <strong>ripple effect</strong>. It raises new <strong>ethical, social and political issues</strong>. These must be handled at the <strong>individual</strong>, <strong>social</strong> and <strong>political</strong> levels.</p>

<pre><code>Information Technology and Systems (centre)
    |
    +-- Ethical issues   --&gt; Individual
    +-- Social issues    --&gt; Society
    +-- Political issues --&gt; Polity (government level)

Surrounding these are the 5 moral dimensions:
Information Rights and Obligations
Property Rights and Obligations
System Quality
Quality of Life
Accountability and Control</code></pre>

<ul>
  <li><strong>Ethical issues</strong> → personal and professional conduct</li>
  <li><strong>Social issues</strong> → community and societal well-being</li>
  <li><strong>Political issues</strong> → regulation, digital rights and cybersecurity</li>
</ul>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>The <strong>modern intersection</strong> is about balancing <strong>innovation</strong>, <strong>human rights</strong> and <strong>AI regulation</strong>.</p>
</div>

<div class="divider"></div>

<h2>Key Technology Trends that Raise Ethical Issues</h2>
<ol>
  <li><strong>AI and ML expansion</strong> - bias and transparency concerns</li>
  <li><strong>Advanced data analytics</strong> - profiling and surveillance capitalism</li>
  <li><strong>Cloud and edge computing</strong> - data jurisdiction issues</li>
  <li><strong>IoT</strong> - massive data collection</li>
  <li><strong>Blockchain</strong> - privacy and inclusion ethics</li>
  <li><strong>Quantum computing</strong> - encryption risks</li>
  <li><strong>Sustainability</strong> - green IT and e-waste</li>
</ol>

<div class="divider"></div>

<h2>Ethics in an Information Society</h2>
<h3>Basic Concepts</h3>
<ul>
  <li><strong>Responsibility</strong> - accepting the potential costs, duties and obligations of your decisions.</li>
  <li><strong>Accountability</strong> - deciding <em>who</em> should take responsibility for decisions and actions.</li>
  <li><strong>Liability</strong> - <em>legally</em> placing responsibility on a person or group.</li>
  <li><strong>Due process</strong> - making sure laws are applied <em>fairly and correctly</em>.</li>
  <li><strong>Digital trust</strong> - transparency and data integrity.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Responsibility</strong> = you accept the duty.<br><strong>Accountability</strong> = who should take responsibility.<br><strong>Liability</strong> = responsibility placed by <strong>law</strong>.<br><strong>Due process</strong> = <strong>fair</strong> application of laws.</p>
</div>

<div class="divider"></div>

<h2>Five Moral Dimensions of the Information Age</h2>
<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <ol>
    <li><strong>Information rights and obligations</strong></li>
    <li><strong>Property rights and obligations</strong></li>
    <li><strong>Accountability and control</strong></li>
    <li><strong>System quality</strong></li>
    <li><strong>Quality of life</strong></li>
  </ol>
</div>

<h3>The Key Question for Each Dimension</h3>
<ol>
  <li><strong>Information rights and obligations</strong> - What information rights do individuals and organizations have about themselves? What can they protect?</li>
  <li><strong>Property rights and obligations</strong> - How will traditional intellectual property rights be protected in a digital society, where tracing and accounting for ownership is difficult and ignoring such rights is very easy?</li>
  <li><strong>Accountability and control</strong> - Who can and will be held accountable and liable for harm done to individual and collective information and property rights?</li>
  <li><strong>System quality</strong> - What standards of data and system quality should we demand to protect individual rights and the safety of society?</li>
  <li><strong>Quality of life</strong> - What values should be preserved in an information and knowledge-based society? Which institutions should we protect from violation? Which cultural values and practices are supported by new information technology?</li>
</ol>

<div class="divider"></div>

<h2>1. Information Rights and Obligations</h2>
<p>Main topics under this dimension:</p>
<ul>
  <li><strong>Privacy</strong></li>
  <li><strong>Web site policies</strong></li>
  <li><strong>Cookies</strong></li>
</ul>

<h2>2. Property Rights and Obligations</h2>
<h3>Intellectual Property Issues</h3>
<p><strong>Intellectual property</strong> means the <strong>tangible and intangible products of the mind</strong> created by individuals or corporations.</p>

<h3>Copyrights</h3>
<div class="callout callout-blue">
  <span class="callout-label">Definition - Copyright</span>
  <p><strong>Copyright</strong> is a <strong>statutory grant</strong> (given by law) that protects creators of intellectual property from having their work <strong>copied</strong> by others.</p>
</div>

<h3>Patents</h3>
<div class="callout callout-blue">
  <span class="callout-label">Definition - Patent</span>
  <p>A <strong>patent</strong> gives the owner an <strong>exclusive monopoly</strong> on the ideas behind an invention for <strong>20 years</strong>.</p>
</div>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Copyright</strong> protects the work from being <strong>copied</strong>. A <strong>patent</strong> protects the <strong>ideas behind an invention</strong> for <strong>20 years</strong>.</p>
</div>

<h2>3. Accountability and Control</h2>
<p>Many laws and court decisions on <strong>accountability, liability and control</strong> were set long <strong>before computers were invented</strong>.</p>
<p>Along with privacy and property laws, new information technologies are <strong>challenging existing liability law</strong> and social practices for holding individuals and institutions accountable.</p>

<h2>4. System Quality</h2>
<h3>Data Quality</h3>
<ul>
  <li>We depend heavily on information systems and trust them.</li>
  <li>So <strong>data quality issues</strong> are very important.</li>
  <li>These issues affect <strong>both customers and users</strong>.</li>
</ul>
<h3>System Errors</h3>
<ul>
  <li><strong>Software bugs and errors</strong></li>
</ul>

<h2>5. Quality of Life</h2>
<ul>
  <li>What <strong>values</strong> should be preserved in an information and knowledge-based society?</li>
  <li>Which <strong>institutions</strong> should we protect from violation?</li>
  <li>Which <strong>cultural values and practices</strong> are supported by new information technology?</li>
</ul>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>Do not mix up <strong>accountability</strong> (who should take responsibility) with <strong>liability</strong> (legal responsibility). Exams often ask you to tell them apart.</p>
</div>

<div class="divider"></div>

<h2>Reference</h2>
<p>Laudon, K. C., &amp; Laudon, J. P. <em>Management Information Systems</em>, 17th Edition.</p>

`,
summary: {
topic: 'Ethical and Social Issues in Information Systems',
subTopics: [
'Introduction',
'Ethics and Social Issues',
'Relationship Between Ethical, Social and Political Issues',
'Key Technology Trends that Raise Ethical Issues',
'Ethics in an Information Society',
'Five Moral Dimensions of the Information Age',
'Information Rights and Obligations',
'Property Rights and Obligations',
'Accountability and Control',
'System Quality',
'Quality of Life',
],
definitions: [
{ term: 'Ethics', meaning: 'Principles of right and wrong that free moral agents use to make choices and guide their behavior.' },
{ term: 'Social Issues', meaning: 'Matters of concern to governments and the community.' },
{ term: 'Responsibility', meaning: 'Accepting the potential costs, duties and obligations of your decisions.' },
{ term: 'Accountability', meaning: 'Determining who should take responsibility for decisions and actions.' },
{ term: 'Liability', meaning: 'Legally placing responsibility on a person or group.' },
{ term: 'Due Process', meaning: 'Ensuring that laws are applied fairly and correctly.' },
{ term: 'Digital Trust', meaning: 'Trust built on transparency and data integrity.' },
{ term: 'Intellectual Property', meaning: 'Tangible and intangible products of the mind created by individuals or corporations.' },
{ term: 'Copyright', meaning: 'A statutory grant that protects creators of intellectual property from having their work copied.' },
{ term: 'Patent', meaning: 'An exclusive monopoly on the ideas behind an invention for 20 years.' },
{ term: 'Data Quality', meaning: 'How accurate and reliable data is. It is vital because people depend on and trust information systems.' },
],
keyPoints: [
'Technology has both positive and negative consequences; it can drive social progress but also enable crime.',
'AI, Big Data, IoT and Blockchain raise complex ethical and regulatory challenges.',
'Ethical issues relate to personal and professional conduct; social issues to community well-being; political issues to regulation, digital rights and cybersecurity.',
'New technology has a ripple effect at the individual, social and political levels.',
'Trends raising ethical issues: AI/ML (bias), data analytics (profiling, surveillance capitalism), cloud/edge (data jurisdiction), IoT (massive data collection), blockchain, quantum computing (encryption risks), sustainability (e-waste).',
'Know the difference: responsibility, accountability, liability and due process.',
'The five moral dimensions: information rights and obligations, property rights and obligations, accountability and control, system quality, quality of life.',
'Information rights cover privacy, web site policies and cookies.',
'Property rights cover intellectual property, copyrights and patents (20-year monopoly).',
'Accountability laws existed before computers; new IT challenges existing liability law.',
'System quality covers data quality and system errors such as software bugs.',
'Quality of life asks which values, institutions and cultural practices we should protect.',
'Modern challenge: balance innovation, human rights and AI regulation.',
],
},
},

{
id: 5,
title: 'Operational Excellence and Customer Intimacy – Part I',
content: `
<span class="lesson-badge">LESSON 05</span>
<h1>Operational Excellence and Customer Intimacy – Part I</h1>
<div class="meta-info">ICT2162 <span>•</span> 12 min read</div>

<div class="callout callout-blue">
  <span class="callout-label">What We Discuss Today</span>
  <ul>
    <li><strong>Enterprise Systems (ERP)</strong> - characteristics, how it works, business value</li>
    <li><strong>Supply Chain Management (SCM) Systems</strong> - upstream and downstream, information and SCM, bullwhip effect, how IS facilitate SCM, SCM software, global supply chain issues, SCM system models, business value of SCM, the emerging internet-driven supply chain</li>
  </ul>
</div>

<div class="callout callout-green">
  <span class="callout-label">Objectives</span>
  <ul>
    <li>Understand how <strong>enterprise systems</strong> help businesses achieve <strong>operational excellence</strong>.</li>
    <li>Understand how <strong>supply chain management systems</strong> coordinate <strong>planning, production and logistics</strong> with suppliers.</li>
  </ul>
</div>

<div class="divider"></div>

<h2>Enterprise Systems</h2>
<p>Enterprise systems are also called <strong>Enterprise Resource Planning (ERP) systems</strong>.</p>

<div class="callout callout-blue">
  <span class="callout-label">Definition - Enterprise System</span>
  <p>A <strong>suite of integrated software modules</strong> with a <strong>common central database</strong>.</p>
</div>

<ul>
  <li>It collects data from <strong>many divisions</strong> of the firm.</li>
  <li>The data is used in nearly <strong>all internal business activities</strong>.</li>
  <li>Information entered in one process is <strong>immediately available</strong> to other processes.</li>
</ul>

<h3>Characteristics of an Enterprise System</h3>
<ol>
  <li><strong>Real-time operations</strong></li>
  <li><strong>Integration of all business activities</strong></li>
  <li><strong>Flow of information</strong></li>
</ol>

<h3>How Enterprise Systems Work</h3>
<p>All functional areas share one <strong>centralized database</strong>. Each area sends data to it and reads data from it.</p>
<pre><code>Finance &amp; Accounting  : cash on hand, accounts receivable,
                    customer credit, revenue

Sales & Marketing : orders, sales forecasts,
return requests, price changes
Human Resources : hours worked, labor cost, job skills
Manufacturing &
Production : materials, production schedules,
shipment dates, production capacity,
purchases

    All four areas  &lt;----&gt;  CENTRALIZED DATABASE</code></pre>

<h3>Enterprise Software</h3>
<ul>
  <li>Built around <strong>thousands of predefined business processes</strong> that reflect <strong>best practices</strong>.</li>
</ul>

<p><strong>Business processes supported:</strong></p>
<ul>
  <li><strong>Finance/accounting:</strong> general ledger, accounts payable, etc.</li>
  <li><strong>Human resources:</strong> personnel administration, payroll, etc.</li>
  <li><strong>Manufacturing/production:</strong> purchasing, shipping, etc.</li>
  <li><strong>Sales/marketing:</strong> order processing, billing, sales planning, etc.</li>
</ul>

<p><strong>To implement enterprise software, firms:</strong></p>
<ol>
  <li><strong>Select</strong> the functions of the system they want to use.</li>
  <li><strong>Map</strong> their business processes to the software processes. They use the software's <strong>configuration tables</strong> for customizing.</li>
</ol>

<h3>Business Value of Enterprise Systems</h3>
<ul>
  <li>Increase <strong>operational efficiency</strong>.</li>
  <li>Provide <strong>firm-wide information</strong> to support decision making.</li>
  <li>Enable <strong>rapid responses</strong> to customer requests for information or products.</li>
  <li>Include <strong>analytical tools</strong> to evaluate overall organizational performance.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>ERP = <strong>integrated modules</strong> + <strong>one central database</strong>. Data entered once is <strong>instantly shared</strong> across all processes.</p>
</div>

<div class="divider"></div>

<h2>Supply Chain Management Systems</h2>

<div class="callout callout-blue">
  <span class="callout-label">Definition - Supply Chain</span>
  <p>A <strong>network of organizations and business processes</strong> for:</p>
  <ul>
    <li><strong>Procuring</strong> raw materials</li>
    <li><strong>Transforming</strong> them into intermediate and finished products</li>
    <li><strong>Distributing</strong> the products</li>
  </ul>
</div>

<h3>Example - Nike's Supply Chain</h3>
<pre><code>UPSTREAM

Tier 3 suppliers -> Tier 2 suppliers -> Tier 1 suppliers (contract suppliers)
<----> NIKE <----> Distributor <----> Retailer <----> Customer
DOWNSTREAM

Upstream flows : capacity, inventory level, delivery schedule, payment terms
Downstream flows : orders, return requests, repair and service requests, payments</code></pre>

<h3>Upstream and Downstream</h3>
<ul>
  <li><strong>Upstream supply chain:</strong> the firm's <strong>suppliers</strong>, the suppliers' suppliers, and the processes for managing relationships with them.</li>
  <li><strong>Downstream supply chain:</strong> the organizations and processes responsible for <strong>distributing and delivering products to customers</strong>.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Upstream</strong> = suppliers side. <strong>Downstream</strong> = customers side.</p>
</div>

<h3>Information and Supply Chain Management</h3>
<ul>
  <li>Supply chain <strong>inefficiencies waste as much as 25 percent</strong> of a company's operating costs.</li>
  <li><strong>Just-in-time strategy:</strong> components arrive <strong>as they are needed</strong>, and finished goods are shipped <strong>after leaving the assembly line</strong>.</li>
  <li><strong>Safety stock:</strong> acts as a <strong>buffer</strong> for the lack of flexibility in the supply chain.</li>
  <li><strong>Bullwhip effect:</strong> information about product demand gets <strong>distorted</strong> as it passes from one entity to the next across the supply chain.</li>
</ul>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>The <strong>bullwhip effect</strong> is about <strong>distorted demand information</strong>. Small changes in customer demand become larger swings as they move upstream (see the diagram: the demand "peaks" grow bigger from customer back to Tier 3 suppliers).</p>
</div>

<h3>How Information Systems Facilitate Supply Chain Management</h3>
<p>Information systems help firms to:</p>
<ul>
  <li>Decide <strong>when and what to produce, store and move</strong>.</li>
  <li>Rapidly <strong>communicate orders</strong>.</li>
  <li><strong>Track the status</strong> of orders.</li>
  <li>Check <strong>inventory availability</strong> and monitor inventory levels.</li>
  <li>Reduce <strong>inventory, transportation and warehousing costs</strong>.</li>
  <li><strong>Track shipments</strong>.</li>
  <li>Plan production based on <strong>actual customer demand</strong>.</li>
  <li>Rapidly communicate <strong>changes in product design</strong>.</li>
</ul>

<h3>Supply Chain Management Software</h3>

<p><strong>1. Supply chain planning systems</strong></p>
<ul>
  <li><strong>Model</strong> the existing supply chain.</li>
  <li><strong>Optimize</strong> sourcing and manufacturing plans.</li>
  <li>Establish <strong>inventory levels</strong> (raw, intermediate, finished).</li>
  <li>Decide <strong>where to store</strong> finished products.</li>
  <li>Identify <strong>transportation modes</strong>.</li>
  <li>Facilitate <strong>demand planning</strong>.</li>
</ul>

<p><strong>2. Supply chain execution systems</strong></p>
<ul>
  <li>Manage the <strong>flow of products</strong> through distribution centers and warehouses.</li>
  <li>Make sure products are delivered to the <strong>right locations</strong> in the <strong>most efficient way</strong>.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Planning</strong> systems = <strong>plan</strong> (model, optimize, demand planning).<br><strong>Execution</strong> systems = <strong>deliver</strong> (manage product flow through warehouses).</p>
</div>

<h3>Global Supply Chains</h3>
<p>The <strong>Internet</strong> helps companies manage many parts of global supply chains: <strong>sourcing, transportation, communications, international finance</strong>, etc.</p>

<p><strong>Global supply chain issues:</strong></p>
<ul>
  <li>They span <strong>greater geographic distances and time differences</strong>.</li>
  <li><strong>More complex pricing</strong> issues (local taxes, transportation, etc.).</li>
  <li><strong>Foreign government regulations</strong>.</li>
  <li><strong>Cultural differences</strong>.</li>
</ul>

<h3>Types of Supply Chain Management Systems</h3>

<h3>Push-based vs Pull-based Models</h3>
<ul>
  <li><strong>Push-based model (build-to-stock):</strong> schedules are based on <strong>best guesses (forecasts) of demand</strong>.</li>
  <li><strong>Pull-based model (demand-driven):</strong> <strong>customer orders trigger</strong> events in the supply chain.</li>
</ul>
<pre><code>PUSH-BASED MODEL (based on forecasts)

Supplier : supply to forecast
Manufacturer : production based on forecasts
Distributor : inventory based on forecasts
Retailer : stock based on forecasts
Customer : purchase what is on shelves

PULL-BASED MODEL (based on orders)
Customer : customer orders
Retailer : automatically replenish stock
Distributor : automatically replenish warehouse
Manufacturer : produce to order
Supplier : supply to order</code></pre>

<h3>Sequential vs Concurrent Supply Chains</h3>
<ul>
  <li><strong>Sequential supply chains:</strong> information and materials flow <strong>sequentially</strong> from company to company.</li>
  <li><strong>Concurrent supply chains:</strong> information flows in <strong>many directions at the same time</strong> among members of a supply chain network.</li>
</ul>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Push</strong> = forecast-driven (build-to-stock).<br><strong>Pull</strong> = customer-order-driven (demand-driven).<br><strong>Sequential</strong> = one after another. <strong>Concurrent</strong> = many directions at once.</p>
</div>

<h3>Business Value of SCM Systems</h3>
<ul>
  <li><strong>Match supply to demand</strong>.</li>
  <li><strong>Reduce inventory levels</strong>.</li>
  <li><strong>Improve delivery service</strong>.</li>
  <li><strong>Speed up product time to market</strong>.</li>
  <li>Use <strong>assets more effectively</strong>.</li>
  <li>Reduced supply chain costs lead to <strong>increased profitability</strong>.</li>
  <li><strong>Increased sales</strong>.</li>
</ul>

<h3>The Emerging Internet-Driven Supply Chain</h3>
<p>The emerging Internet-driven supply chain works like a <strong>digital logistics nervous system</strong>. It provides <strong>multidirectional communication</strong> among firms, networks of firms, and e-marketplaces. So entire networks of supply chain partners can <strong>immediately adjust inventories, orders and capacities</strong>.</p>
<p>Partners in this network include suppliers, manufacturers, distributors, retailers, customers, logistics providers, virtual manufacturers, contract manufacturers, private industrial networks / net marketplaces, and logistics exchanges.</p>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Think of an ERP as the <strong>inside</strong> of one company (integrated departments) and SCM as the <strong>outside</strong> (linking suppliers, distributors and customers).</p>
</div>

<div class="divider"></div>

<h2>Summary</h2>
<ul>
  <li><strong>Enterprise Systems (ERP):</strong> characteristics, how it works, business value</li>
  <li><strong>Supply Chain Management Systems:</strong> upstream and downstream, information and SCM, bullwhip effect, how IS facilitate SCM, SCM software, global supply chain issues, push/pull and sequential/concurrent models, business value of SCM systems, the emerging internet-driven supply chain</li>
</ul>

<h2>Reference</h2>
<p>Laudon, K. C., &amp; Laudon, J. P. <em>Management Information Systems</em>, 17th Edition.</p>

`,
summary: {
topic: 'Operational Excellence and Customer Intimacy: Enterprise Systems (ERP) and Supply Chain Management Systems',
subTopics: [
'Enterprise Systems (ERP)',
'Characteristics of an Enterprise System',
'How Enterprise Systems Work',
'Enterprise Software',
'Business Value of Enterprise Systems',
'Supply Chain Management Systems',
'Upstream and Downstream Supply Chain',
'Information and Supply Chain Management',
'How Information Systems Facilitate SCM',
'Supply Chain Management Software',
'Global Supply Chains',
'Push-based vs Pull-based Models',
'Sequential vs Concurrent Supply Chains',
'Business Value of SCM Systems',
'The Emerging Internet-Driven Supply Chain',
],
definitions: [
{ term: 'Enterprise System (ERP)', meaning: 'A suite of integrated software modules with a common central database that shares data across all business functions.' },
{ term: 'Configuration Tables', meaning: "Tables in enterprise software used to customize the system to a firm's business processes." },
{ term: 'Supply Chain', meaning: 'A network of organizations and processes for procuring raw materials, turning them into products and distributing them.' },
{ term: 'Upstream Supply Chain', meaning: "The firm's suppliers, their suppliers, and the processes for managing those relationships." },
{ term: 'Downstream Supply Chain', meaning: 'Organizations and processes that distribute and deliver products to customers.' },
{ term: 'Just-in-Time Strategy', meaning: 'Components arrive as needed and finished goods ship right after leaving the assembly line.' },
{ term: 'Safety Stock', meaning: 'Extra inventory that acts as a buffer against lack of flexibility in the supply chain.' },
{ term: 'Bullwhip Effect', meaning: 'Distortion of product demand information as it passes from one entity to the next in the supply chain.' },
{ term: 'Supply Chain Planning System', meaning: 'Models the supply chain, optimizes sourcing and manufacturing, sets inventory levels and supports demand planning.' },
{ term: 'Supply Chain Execution System', meaning: 'Manages the flow of products through distribution centers and warehouses for efficient delivery.' },
{ term: 'Push-Based Model (Build-to-Stock)', meaning: 'Production schedules are based on best guesses (forecasts) of demand.' },
{ term: 'Pull-Based Model (Demand-Driven)', meaning: 'Customer orders trigger events in the supply chain.' },
{ term: 'Sequential Supply Chain', meaning: 'Information and materials flow one company after another.' },
{ term: 'Concurrent Supply Chain', meaning: 'Information flows in many directions at once among supply chain network members.' },
],
keyPoints: [
'ERP systems use integrated modules and one central database; data entered once is instantly available to other processes.',
'ERP characteristics: real-time operations, integration of all business activities, flow of information.',
'ERP covers finance/accounting, HR, manufacturing/production and sales/marketing.',
'Implementing ERP: select functions, then map business processes to software processes using configuration tables.',
'ERP business value: operational efficiency, firm-wide information for decisions, rapid customer response, analytical tools.',
'Upstream = suppliers side; downstream = distribution and customers side.',
'Supply chain inefficiencies can waste up to 25 percent of operating costs.',
'Just-in-time reduces inventory; safety stock buffers inflexibility.',
'The bullwhip effect distorts demand information across the supply chain.',
'SCM planning systems plan and optimize; SCM execution systems manage product flow through warehouses.',
'Global supply chains face distance, time differences, complex pricing, foreign regulations and cultural differences.',
'Push model = forecast-driven; pull model = customer-order-driven.',
'Sequential chains pass information step by step; concurrent chains share information in many directions at once.',
'SCM value: match supply to demand, lower inventory, better delivery, faster time to market, better asset use, higher profit and sales.',
'The internet-driven supply chain is a digital logistics nervous system allowing partners to adjust inventories, orders and capacities immediately.',
],
},
},


{
id: 6,
title: 'Operational Excellence and Customer Intimacy – Part II',
content: `
<span class="lesson-badge">LESSON 06</span>
<h1>Operational Excellence and Customer Intimacy – Part II</h1>
<div class="meta-info">ICT2162 <span>•</span> 12 min read</div>

<div class="callout callout-blue">
  <span class="callout-label">What We Discuss Today</span>
  <ul>
    <li><strong>Customer Relationship Management (CRM) Systems</strong> - what, software, operational and analytical CRM, business value</li>
    <li>Enterprise applications - new opportunities and challenges</li>
    <li>Next-generation enterprise applications</li>
    <li>Social CRM</li>
    <li>Business Intelligence</li>
  </ul>
</div>

<div class="callout callout-green">
  <span class="callout-label">Recap of the Previous Lesson</span>
  <ul>
    <li><strong>Enterprise Systems (ERP):</strong> characteristics, how it works, business value</li>
    <li><strong>Supply Chain Management Systems:</strong> upstream and downstream, information and SCM, bullwhip effect, how IS facilitate SCM, SCM software, global supply chain issues, push/pull and sequential/concurrent models, business value, the emerging internet-driven supply chain</li>
  </ul>
</div>

<div class="divider"></div>

<h2>Customer Relationship Management (CRM) Systems</h2>

<h3>What Information Do You Need About Customers?</h3>
<p>To build and keep strong, long-lasting relationships with customers, you need to:</p>
<ul>
  <li>Know <strong>exactly who</strong> your customers are (KYC – Know Your Customer).</li>
  <li>Know <strong>how to contact</strong> them.</li>
  <li>Know whether they are <strong>costly to service and sell to</strong>.</li>
  <li>Know what <strong>products and services</strong> they are interested in.</li>
  <li>Know <strong>how much money</strong> they spend on your company.</li>
</ul>

<h3>What is a CRM System?</h3>
<p>In large businesses there are <strong>too many customers</strong> and <strong>too many ways</strong> customers interact with the firm. CRM systems solve this.</p>

<div class="callout callout-blue">
  <span class="callout-label">Definition - CRM Systems</span>
  <p>CRM systems <strong>capture and integrate</strong> customer data from all over the organization, <strong>consolidate and analyze</strong> it, and <strong>distribute</strong> customer information to various systems and <strong>customer touch points</strong>. They provide a <strong>single enterprise view of customers</strong>.</p>
</div>

<ul>
  <li>CRM systems examine customers from a <strong>multifaceted perspective</strong>.</li>
  <li>They use a <strong>set of integrated applications</strong> to address all aspects of the customer relationship: <strong>customer service, sales and marketing</strong>.</li>
</ul>

<pre><code>                 CUSTOMER

SALES MARKETING SERVICE

telephone sales - campaign data - call center data
web sales - content - web self-service data
retail store sales - data analysis - wireless data
field sales</code></pre> <h3>CRM Software</h3> <p>CRM packages range from <strong>niche tools</strong> to <strong>large-scale enterprise applications</strong>. More comprehensive packages have modules for:</p> <p><strong>1. Partner Relationship Management (PRM)</strong></p> <ul> <li>Enhances <strong>collaboration</strong> between a company and its <strong>selling partners</strong>.</li> <li>Lets them <strong>trade information</strong> and distribute <strong>leads and customer data</strong>, integrating lead generation, pricing, promotions, order configurations and availability.</li> <li>Provides tools to <strong>assess partners' performance</strong>.</li> </ul> <p><strong>2. Employee Relationship Management (ERM)</strong></p> <ul> <li>Deals with <strong>employee issues closely related to CRM</strong>.</li> <li>Examples: <strong>setting objectives, employee performance management, performance-based compensation, employee training</strong>.</li> </ul> <div class="callout callout-yellow"> <span class="callout-label">Remember</span> <p><strong>PRM</strong> = Partner Relationship Management (selling partners).<br><strong>ERM</strong> = Employee Relationship Management (employees).</p> </div> <h3>Main Tools in CRM Packages</h3> <ol> <li><strong>Sales Force Automation (SFA)</strong></li> <li><strong>Customer service</strong></li> <li><strong>Marketing</strong></li> </ol> <h3>1. Sales Force Automation (SFA)</h3> <p>Helps sales staff <strong>increase productivity</strong> by focusing sales efforts on the <strong>most profitable customers</strong>, those who are good candidates for sales and services.</p> <p>It provides:</p> <ul> <li>Sales <strong>prospect and contact</strong> information</li> <li><strong>Product</strong> information</li> <li>Product <strong>configuration</strong> capabilities</li> <li>Sales <strong>quote generation</strong> capabilities</li> </ul> <h3>2. Customer Service</h3> <p>Provides information and tools to increase the <strong>efficiency of call centers, help desks and customer support staff</strong>. Capabilities include:</p> <ul> <li><strong>Assigning and managing</strong> customer service requests</li> <li><strong>Web-based self-service</strong> capabilities</li> </ul> <h3>3. Marketing</h3> <p>Supports <strong>direct-marketing campaigns</strong> by:</p> <ul> <li><strong>Capturing</strong> prospect and customer data</li> <li>Providing <strong>product and service information</strong></li> <li><strong>Qualifying leads</strong> for targeted marketing</li> <li><strong>Scheduling and tracking</strong> direct-marketing mailings or e-mail</li> </ul> <p>It also includes tools for:</p> <ul> <li><strong>Analyzing</strong> marketing and customer data</li> <li>Identifying <strong>profitable and unprofitable</strong> customers</li> <li><strong>Designing products and services</strong> to satisfy specific customer needs and interests</li> <li>Identifying opportunities for <strong>cross-selling</strong></li> </ul> <h3>How CRM Supports Marketing</h3> <p>CRM software gives a <strong>single point</strong> for users to manage and evaluate marketing campaigns across <strong>multiple channels</strong>: e-mail, direct mail, telephone, the web and social media.</p> <p>Example: responses by channel for a January promotional campaign:</p> <pre><code>Telephone 30.8%

Direct mail 29.2%
E-mail 17.3%
Web 16.0%
Cell phone text 6.7%</code></pre>

<h3>CRM Software Capabilities</h3>
<p>All capabilities share one pool of <strong>customer data</strong>.</p>
<pre><code>SALES                 MARKETING              SERVICE

Account management Campaign management Service delivery
Lead management Channel promotions Customer satisfaction
Order management management management
Sales planning Events management Returns management
Field sales Market planning Service planning
Sales analytics Marketing operations Call center & help desk
Marketing analytics Service analytics</code></pre>

<h3>Customer Loyalty Management Process Map</h3>
<pre><code>Receive service request

-> Obtain customer information (from customer database)
-> <Customer information available?>
Yes -> Score customer -> <High value and loyalty?>
Yes -> Provide special offers and service
No -> Route to best agent
No -> Route to best agent
-> Resolve service issue</code></pre>

<h3>Operational CRM and Analytical CRM</h3>

<div class="callout callout-blue">
  <span class="callout-label">Operational CRM</span>
  <p>Includes <strong>customer-facing applications</strong> such as tools for <strong>sales force automation</strong>, <strong>call center and customer service support</strong>, and <strong>marketing automation</strong>.</p>
</div>

<div class="callout callout-blue">
  <span class="callout-label">Analytical CRM</span>
  <p>Includes applications that <strong>analyze customer data</strong> generated by operational CRM, to provide information for <strong>improving business performance</strong>. It provides <strong>Customer Lifetime Value (CLTV)</strong>.</p>
</div>

<p><strong>How analytical CRM works:</strong></p>
<pre><code>Customer data (channels: call center, web site, wireless, field sales,

direct mail, e-mail, retail store, partner;
other sources: legacy systems, demographic data, third-party data,
marketing campaign data)
-> CUSTOMER DATA WAREHOUSE <-> OLAP, data mining,
other data analysis tools
-> Output: profitable customers, market segments,
customer profiles, churn rates</code></pre>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p><strong>Operational CRM</strong> = customer-facing tools (SFA, call center, marketing automation).<br><strong>Analytical CRM</strong> = analyzes the data to improve performance (data warehouse, OLAP, data mining, CLTV).</p>
</div>

<h3>Business Value of CRM Systems</h3>
<ul>
  <li>Increased <strong>customer satisfaction</strong></li>
  <li>Reduced <strong>direct-marketing costs</strong></li>
  <li>More <strong>effective marketing</strong></li>
  <li>Lower costs for <strong>customer acquisition and retention</strong></li>
  <li>Increased <strong>sales revenue</strong></li>
  <li>Reduced <strong>churn rate</strong></li>
</ul>

<div class="callout callout-blue">
  <span class="callout-label">Definition - Churn Rate</span>
  <p>The <strong>number of customers who stop using or buying</strong> a company's products or services. It is an indicator of the <strong>growth or decline</strong> of the firm's customer base.</p>
</div>

<div class="divider"></div>

<h2>Enterprise Applications: New Opportunities and Challenges</h2>
<p>Enterprise applications bring benefits, but also challenges:</p>
<ul>
  <li><strong>Highly expensive</strong> to purchase and implement - about <strong>$3.5 million to over $12 million, over 16 months</strong>.</li>
  <li><strong>Technological</strong> changes.</li>
  <li><strong>Business process</strong> changes.</li>
  <li><strong>Organizational</strong> changes.</li>
  <li><strong>Switching costs</strong> and dependence on software vendors.</li>
  <li><strong>Data standardization, management and cleansing</strong>.</li>
</ul>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>Enterprise application challenges are <strong>not only technical</strong>. Exams often ask about <strong>business process and organizational changes</strong>, <strong>switching costs</strong> and <strong>data cleansing</strong> too.</p>
</div>

<div class="divider"></div>

<h2>Next-Generation Enterprise Applications</h2>
<p>The move is to make applications <strong>more flexible, Web-enabled and integrated</strong> with other systems.</p>

<ul>
  <li><strong>Enterprise suites:</strong> software that lets CRM, SCM and enterprise systems work together and with suppliers' and clients' systems. They use <strong>Web services</strong> and <strong>SOA</strong> (Service-Oriented Architecture).</li>
  <li><strong>Open source and on-demand</strong> solutions.</li>
  <li><strong>Mobile compatible</strong>; <strong>Web 2.0</strong> capabilities.</li>
  <li><strong>Complementary analytics</strong> products.</li>
  <li><strong>Cloud-based</strong> software and services.</li>
</ul>

<h3>Service Platform</h3>
<p>A <strong>service platform</strong> integrates multiple applications to deliver a <strong>seamless experience</strong> for all parties. Example: the <strong>order-to-cash</strong> process.</p>

<h3>Portal Software</h3>
<p><strong>Portal software</strong> integrates information from enterprise applications and legacy systems and presents it <strong>as if it comes from a single source</strong>.</p>

<h3>Order-to-Cash Example</h3>
<pre><code>Order-to-cash steps:

Customer order -> Order fulfillment -> Delivery -> Invoicing
-> Customer payments/collection -> Cash application

Composite process : Order-to-cash (leads, orders, availability,
fulfillment, billing)
^
Integration layer
^
Existing systems : CRM | SCM | ERP | Other systems</code></pre>

<div class="divider"></div>

<h2>Social CRM</h2>
<p><strong>Social CRM</strong> lets a business connect <strong>customer conversations and relationships from social networking sites</strong> to CRM processes.</p>
<p>Capabilities include:</p>
<ul>
  <li>Linking <strong>data from social networks</strong></li>
  <li><strong>Social media analytics</strong></li>
  <li><strong>Campaign management</strong></li>
  <li><strong>Social marketing</strong>, etc.</li>
</ul>

<div class="divider"></div>

<h2>Business Intelligence</h2>
<p><strong>Business intelligence (BI)</strong> helps managers get <strong>more meaningful information</strong> from the massive amounts of data generated by enterprise systems.</p>
<p>It includes tools for:</p>
<ul>
  <li><strong>Flexible reporting</strong></li>
  <li><strong>Ad-hoc analysis</strong></li>
  <li><strong>Interactive dashboards</strong></li>
  <li><strong>What-if scenario analysis</strong></li>
  <li><strong>Data visualization</strong> techniques, etc.</li>
</ul>
<p>BI comes in <strong>embedded</strong> and <strong>standalone</strong> versions in the market.</p>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Link the ideas: <strong>ERP</strong> runs internal processes, <strong>SCM</strong> links suppliers, <strong>CRM</strong> links customers, and <strong>BI</strong> turns all the data into useful decisions.</p>
</div>

<div class="divider"></div>

<h2>Summary</h2>
<ul>
  <li><strong>CRM:</strong> what it is; software (PRM, ERM; SFA, customer service, marketing); operational and analytical CRM; business value</li>
  <li>Enterprise applications: new opportunities and challenges</li>
  <li>Next-generation enterprise applications: service platform, portal, etc.</li>
  <li>Social CRM</li>
  <li>Business intelligence</li>
</ul>

<h2>Reference</h2>
<p>Laudon, K. C., &amp; Laudon, J. P. <em>Management Information Systems</em>, 17th Edition.</p>

`,
summary: {
topic: 'Operational Excellence and Customer Intimacy: CRM Systems, Next-Generation Enterprise Applications, Social CRM and Business Intelligence',
subTopics: [
'Customer Relationship Management (CRM) Systems',
'What Information Do You Need About Customers?',
'What is a CRM System?',
'CRM Software (PRM and ERM)',
'Sales Force Automation (SFA)',
'Customer Service',
'Marketing',
'How CRM Supports Marketing',
'CRM Software Capabilities',
'Customer Loyalty Management Process Map',
'Operational CRM and Analytical CRM',
'Business Value of CRM Systems',
'Enterprise Applications: Opportunities and Challenges',
'Next-Generation Enterprise Applications',
'Service Platform and Portal Software',
'Social CRM',
'Business Intelligence',
],
definitions: [
{ term: 'CRM System', meaning: 'A system that captures, integrates, analyzes and distributes customer data to give a single enterprise view of customers.' },
{ term: 'Partner Relationship Management (PRM)', meaning: 'A CRM module that improves collaboration between a company and its selling partners.' },
{ term: 'Employee Relationship Management (ERM)', meaning: 'A CRM module for employee issues such as objectives, performance management, compensation and training.' },
{ term: 'Sales Force Automation (SFA)', meaning: 'CRM tools that help sales staff be more productive by focusing on the most profitable customers.' },
{ term: 'Operational CRM', meaning: 'Customer-facing applications such as sales force automation, call center support and marketing automation.' },
{ term: 'Analytical CRM', meaning: 'Applications that analyze customer data from operational CRM to improve business performance.' },
{ term: 'Customer Lifetime Value (CLTV)', meaning: 'A measure provided by analytical CRM of the total value of a customer over time.' },
{ term: 'Churn Rate', meaning: 'Number of customers who stop using or buying from a company; shows growth or decline of the customer base.' },
{ term: 'Cross-selling', meaning: 'Selling additional products or services to existing customers.' },
{ term: 'Enterprise Suite', meaning: 'Software that lets CRM, SCM and enterprise systems work together with supplier and client systems.' },
{ term: 'Service Platform', meaning: 'Integrates multiple applications to give a seamless experience to all parties, e.g. order-to-cash.' },
{ term: 'Portal Software', meaning: 'Integrates information from enterprise applications and legacy systems and presents it as coming from one source.' },
{ term: 'Social CRM', meaning: 'Connects customer conversations and relationships on social networking sites to CRM processes.' },
{ term: 'Business Intelligence (BI)', meaning: 'Tools that help managers get meaningful information from the large amounts of data generated by enterprise systems.' },
],
keyPoints: [
'CRM gives a single enterprise view of the customer across sales, marketing and service.',
'CRM captures and integrates customer data, consolidates and analyzes it, and distributes it to touch points.',
'Comprehensive CRM packages include PRM and ERM modules.',
'CRM tools: sales force automation, customer service, marketing.',
'Marketing tools identify profitable customers and cross-selling opportunities and manage multichannel campaigns.',
'Operational CRM is customer-facing; analytical CRM analyzes data (data warehouse, OLAP, data mining) and provides CLTV.',
'Analytical CRM outputs: profitable customers, market segments, customer profiles, churn rates.',
'CRM business value: higher satisfaction, lower marketing and acquisition/retention costs, more effective marketing, higher sales, lower churn.',
'Enterprise applications are expensive ($3.5M to over $12M over 16 months) and need technology, process and organizational change.',
'Other challenges: switching costs, vendor dependence, data standardization and cleansing.',
'Next-generation applications are flexible, Web-enabled, mobile, cloud-based, use Web services and SOA, and come with analytics.',
'Service platforms (e.g. order-to-cash) and portal software integrate applications and present a unified view.',
'Social CRM links social network data, social analytics, campaign management and social marketing to CRM.',
'Business intelligence offers flexible reporting, ad-hoc analysis, dashboards, what-if analysis and data visualization.',
],
},
},

{
  id: 7,
  title: 'Managing Knowledge and Artificial Intelligence',
  content: `
    <span class="lesson-badge">LESSON 07</span>
    <h1>Managing Knowledge and Artificial Intelligence</h1>
    <div class="meta-info">ICT2162 <span>•</span> 48 min read</div>

    <h2>What You Will Learn</h2>
    <ul>
      <li>The role of <strong>knowledge management (KM)</strong></li>
      <li>Knowledge management programs in business</li>
      <li>Types of systems used for <strong>enterprise-wide knowledge management</strong></li>
      <li>How KM systems provide value for businesses</li>
      <li>Major types of <strong>knowledge work systems</strong></li>
      <li>Business benefits of using <strong>intelligent techniques</strong> for knowledge management</li>
    </ul>

    <div class="divider"></div>

    <h2>Opening Case: Designing Drugs Virtually</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Case</span>
      <p><strong>Problem:</strong> The drug discovery process is <strong>ineffective and complicated</strong>.</p>
    </div>
    <p><strong>Solutions:</strong></p>
    <ul>
      <li>Use <strong>AI-driven structure-based design</strong> to find possible molecules for new drugs.</li>
      <li>Use <strong>digital twins</strong> (virtual copies) in healthcare to simulate effects.</li>
    </ul>
    <p>This case shows the role of IT in <strong>speeding up drug discovery</strong>, <strong>improving efficiency</strong>, and <strong>reducing costs</strong>.</p>

    <div class="divider"></div>

    <h2>The Role of Knowledge Management Systems in Business</h2>
    <p><strong>Knowledge management and collaboration platforms</strong> are among the fastest-growing investment areas in both corporate and government sectors.</p>

    <h3>The Knowledge Economy (2025)</h3>
    <ul>
      <li>Over <strong>30% of global GDP</strong> now comes from the information and digital knowledge sectors.</li>
      <li><strong>Intangible assets</strong> (knowledge, brand, reputation, proprietary processes) are still the core drivers of enterprise value.</li>
      <li>Well-executed <strong>AI-driven KM projects</strong> can give extraordinary <strong>ROI</strong> (return on investment).</li>
    </ul>

    <h3>Why Knowledge Gives a Firm Its Value</h3>
    <p>A modern firm's value depends on its <strong>ability to create and manage knowledge</strong>.</p>
    <p>Knowing how to do things <strong>effectively and efficiently</strong>, in ways that others cannot copy, is the prime source of <strong>profit and competitive advantage</strong>.</p>
    <div class="callout callout-green">
      <span class="callout-label">Example</span>
      <p>Having a <strong>unique build-to-order production system</strong> is knowledge that competitors cannot easily duplicate.</p>
    </div>

    <div class="divider"></div>

    <h2>What Is Knowledge? How Is It Generated?</h2>
    <p>Knowledge is created step by step. Each step adds more meaning.</p>
    <pre><code>Data
  ↓
Information
  ↓
Knowledge
  ↓
Wisdom</code></pre>
    <ul>
      <li><strong>Data → Information</strong></li>
      <li><strong>Information → Knowledge</strong></li>
      <li><strong>Knowledge → Wisdom</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Important Dimensions of Knowledge</h2>

    <h3>1. Knowledge Is a Firm Asset</h3>
    <ul>
      <li>Knowledge is <strong>intangible</strong> (you cannot touch it).</li>
      <li>Creating knowledge from data and information needs <strong>organizational resources</strong>.</li>
      <li>When knowledge is shared, it experiences <strong>network effects</strong>: its value increases as more people share it.</li>
      <li>Knowledge today includes <strong>AI-generated knowledge</strong> and <strong>knowledge graphs</strong> (maps of facts and how they connect).</li>
    </ul>

    <h3>2. Knowledge Has Different Forms</h3>
    <ul>
      <li><strong>Tacit</strong> — human expertise and experience</li>
      <li><strong>Explicit</strong> — codified (written down or recorded)</li>
      <li><strong>AI-generated</strong> — machine-assisted insights</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Three forms of knowledge: <strong>Tacit</strong> (human expertise), <strong>Explicit</strong> (codified), <strong>AI-generated</strong> (machine-assisted insights).</p>
    </div>

    <h3>3. Knowledge Has a Location</h3>
    <ul>
      <li>It is a <strong>cognitive event</strong> (it happens in the mind).</li>
      <li>It is both <strong>social and individual</strong>.</li>
      <li><strong>Sticky</strong> — hard to move.</li>
      <li><strong>Situated</strong> — enmeshed in the firm's culture.</li>
      <li><strong>Contextual</strong> — works only in certain situations.</li>
    </ul>

    <h3>4. Knowledge Is Situational</h3>
    <ul>
      <li><strong>Conditional</strong> — knowing <em>when</em> to apply a procedure.</li>
      <li><strong>Contextual</strong> — knowing the <em>circumstances</em> in which to use a certain tool.</li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Do not mix up <strong>tacit</strong> and <strong>explicit</strong> knowledge. Tacit knowledge lives in people's heads (expertise, experience). Explicit knowledge is already codified (documents, reports).</p>
    </div>

    <div class="divider"></div>

    <h2>Organizational Learning</h2>
    <p><strong>Organizational learning</strong> is the process in which organizations learn.</p>
    <p><strong>Organizations gain experience through:</strong></p>
    <ul>
      <li>Collection of data</li>
      <li>Careful measurement of planned activities</li>
      <li>Trial and error (<strong>experimentation</strong>)</li>
      <li>Feedback from customers and the environment</li>
    </ul>
    <p><strong>Then they adjust their behavior to reflect that experience by:</strong></p>
    <ul>
      <li>Creating new business processes with <strong>AI-driven insights</strong></li>
      <li>Changing patterns of <strong>management decision making</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Knowledge Management Value Chain</h2>

    <h3>What Is Knowledge Management?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Knowledge management</strong> is a set of business processes developed in an organization to <strong>create, store, transfer, and apply</strong> knowledge in its business processes.</p>
    </div>
    <p>The <strong>knowledge management value chain</strong> shows that each stage <strong>adds value</strong> to raw data and information as they are changed into usable knowledge.</p>
    <pre><code>Acquisition → Storage
   ↑              ↓
Application ← Dissemination</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>The four stages of the KM value chain: <strong>Knowledge Acquisition → Knowledge Storage → Knowledge Dissemination → Knowledge Application</strong>.</p>
    </div>

    <h3>Stage 1: Knowledge Acquisition</h3>
    <ul>
      <li><strong>Documenting tacit and explicit knowledge</strong>
        <ul>
          <li>Storing documents, reports, presentations, best practices</li>
          <li>Unstructured documents (e.g., e-mails)</li>
          <li>Developing <strong>online expert networks</strong></li>
        </ul>
      </li>
      <li><strong>Creating knowledge</strong></li>
      <li>Tracking data from <strong>TPS</strong> (transaction processing systems) and external sources</li>
    </ul>

    <h3>Stage 2: Knowledge Storage</h3>
    <ul>
      <li><strong>Databases</strong></li>
      <li><strong>Document management systems</strong></li>
    </ul>
    <p><strong>Role of management:</strong></p>
    <ul>
      <li>Support the development of <strong>planned knowledge storage systems</strong></li>
      <li>Encourage <strong>corporate-wide schemas</strong> for indexing documents</li>
      <li><strong>Reward employees</strong> for taking time to update and store documents properly</li>
    </ul>

    <h3>Stage 3: Knowledge Dissemination</h3>
    <ul>
      <li><strong>Portals</strong> and <strong>wikis</strong></li>
      <li><strong>E-mail</strong> and <strong>instant messaging</strong></li>
      <li><strong>Search engines</strong></li>
      <li><strong>Collaboration tools</strong></li>
    </ul>
    <p>Training programs, informal networks, and shared management experience help managers <strong>focus attention on important information</strong>.</p>

    <h3>Stage 4: Knowledge Application</h3>
    <p>To give a <strong>return on investment</strong>, organizational knowledge must become a <strong>systematic part of management decision making</strong>. It must also be placed inside <strong>decision-support systems</strong>.</p>
    <p>Applying knowledge leads to:</p>
    <ul>
      <li>New business practices</li>
      <li>New products and services</li>
      <li>New markets</li>
    </ul>

    <h3>The Full Value Chain Diagram</h3>
    <p>For each stage, the diagram shows two kinds of activities:</p>
    <ul>
      <li><strong>Acquire</strong>
        <ul>
          <li>Information system activities: business analytics, data mining, neural networks, machine learning, knowledge workstations, expert knowledge networks</li>
          <li>Management and organizational activities: knowledge culture, communities of practice, social networks</li>
        </ul>
      </li>
      <li><strong>Store</strong>
        <ul>
          <li>Information system activities: content management systems, knowledge databases, expert systems</li>
          <li>Management and organizational activities: organizational routines, organizational culture</li>
        </ul>
      </li>
      <li><strong>Disseminate</strong>
        <ul>
          <li>Information system activities: portals, search engines, collaboration and social business tools</li>
          <li>Management and organizational activities: training, collaboration</li>
        </ul>
      </li>
      <li><strong>Apply</strong>
        <ul>
          <li>Information system activities: decision support systems, enterprise applications, robotics</li>
          <li>Management and organizational activities: new IT-based business processes, new products and services, new markets</li>
        </ul>
      </li>
    </ul>
    <p>There is also a <strong>feedback loop</strong>. The results of applying knowledge go back to <strong>Data and Information Acquisition</strong> (collecting, storing, disseminating), so the cycle keeps repeating.</p>

    <div class="divider"></div>

    <h2>Organizational Roles and Responsibilities</h2>
    <ul>
      <li><strong>Chief knowledge officer (CKO)</strong> executives</li>
      <li><strong>Dedicated staff / knowledge managers</strong></li>
      <li><strong>Communities of Practice (COPs)</strong></li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Communities of Practice (COPs)</strong> are informal social networks of professionals and employees, inside and outside the firm, who have similar work-related activities and interests.</p>
    </div>
    <p><strong>COP activities include:</strong></p>
    <ul>
      <li>Education</li>
      <li>Online newsletters</li>
      <li>Sharing experiences and techniques</li>
    </ul>
    <p><strong>COPs help to:</strong></p>
    <ul>
      <li>Make it easier to <strong>reuse knowledge</strong> and hold discussions</li>
      <li><strong>Reduce the learning curve</strong> of new employees</li>
    </ul>

    <div class="divider"></div>

    <h2>Three Major Types of Knowledge Management Systems</h2>
    <ol>
      <li><strong>Enterprise-wide knowledge management systems</strong> — General-purpose, integrated, firm-wide efforts to <strong>collect, store, distribute, and apply</strong> digital content and knowledge.
        <ul>
          <li>Examples: enterprise content management systems, collaboration and social tools, learning management systems</li>
        </ul>
      </li>
      <li><strong>Knowledge work systems (KWS)</strong> — Specialized systems built for engineers, scientists, and other knowledge workers who <strong>discover and create new knowledge</strong>.
        <ul>
          <li>Examples: computer-aided design (CAD), virtual reality</li>
        </ul>
      </li>
      <li><strong>Intelligent techniques</strong> — A diverse group of tools (such as <strong>data mining</strong>) used for different goals: <strong>discovering knowledge, distilling knowledge, and discovering optimal solutions</strong>. They find patterns and apply knowledge to discrete decisions and knowledge domains.
        <ul>
          <li>Examples: data mining, neural networks, expert systems, machine learning, natural language processing, computer vision systems, robotics, genetic algorithms, intelligent agents</li>
        </ul>
      </li>
    </ol>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Three major types of KM systems: <strong>1) Enterprise-wide KM systems, 2) Knowledge work systems (KWS), 3) Intelligent techniques</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Enterprise-Wide Knowledge Management Systems</h2>

    <h3>Three Major Types of Knowledge in an Enterprise</h3>
    <ol>
      <li><strong>Structured documents</strong> — reports, presentations, formal rules</li>
      <li><strong>Semi-structured documents</strong> — e-mails, videos</li>
      <li><strong>Unstructured, tacit knowledge</strong></li>
    </ol>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>80%</strong> of an organization's business content is <strong>semi-structured or unstructured</strong>.</p>
    </div>

    <h3>Enterprise Content Management (ECM) Systems</h3>
    <p>ECM systems help to <strong>capture, store, retrieve, distribute, and preserve</strong>:</p>
    <ul>
      <li>Documents, reports, best practices</li>
      <li><strong>Semi-structured knowledge</strong> (e.g., e-mails)</li>
    </ul>
    <p>They also:</p>
    <ul>
      <li>Bring in <strong>external sources</strong> such as news feeds and research</li>
      <li>Provide tools for <strong>communication and collaboration</strong>, such as blogs and wikis</li>
    </ul>
    <p><strong>How an ECM system is organized:</strong></p>
    <pre><code>USERS
  ⇅
ECM FUNCTIONS
  1. Create / Capture
  2. Tag
  3. Store / Retrieve
  4. Manage / Review
  5. Distribute / Publish
  ⇅
UNIFIED REPOSITORY
  • Reports / presentations
  • Best practices
  • Memos
  • Digital slides
  • E-mail
  • Graphics
  • Video
  • News feeds
  • Wikis, blogs
  • Employee profiles</code></pre>

    <h3>Taxonomy and Digital Asset Management</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>The <strong>key problem</strong> in ECM is developing a <strong>taxonomy</strong>. Knowledge objects must be <strong>tagged with categories</strong> so they can be found later.</p>
    </div>
    <p><strong>Digital asset management systems</strong> are specialized content management systems for <strong>classifying, storing, and managing unstructured digital data</strong>, such as photographs, graphics, video, and audio.</p>

    <h3>Locating and Sharing Expertise</h3>
    <ul>
      <li>Provide an <strong>online directory of corporate experts</strong> in well-defined knowledge areas.</li>
      <li><strong>Search tools</strong> help employees find the right expert in the company.</li>
      <li><strong>Social networking and social business tools</strong> help find knowledge outside the firm.</li>
      <li>Saving, tagging, and sharing <strong>web pages</strong>.</li>
    </ul>

    <h3>Learning Management Systems (LMS)</h3>
    <p>An LMS provides tools for the <strong>management, delivery, tracking, and assessment</strong> of different types of employee learning and training.</p>
    <ul>
      <li>Supports <strong>multiple modes of learning</strong>: CD-ROM, web-based classes, online forums, live instruction, and so on</li>
      <li><strong>Automates</strong> the selection and administration of courses</li>
      <li><strong>Assembles and delivers</strong> learning content</li>
      <li><strong>Measures</strong> learning effectiveness</li>
      <li>Includes <strong>AI tutors</strong>, <strong>adaptive learning systems</strong>, and <strong>personalized pathways</strong></li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Massive Open Online Courses (MOOCs)</strong> are web courses that are open to a large number of participants.</p>
    </div>

    <div class="divider"></div>

    <h2>Knowledge Work Systems (KWS)</h2>
    <p><strong>Knowledge work systems</strong> are systems that help knowledge workers <strong>create new knowledge</strong> and <strong>integrate that knowledge into the business</strong>.</p>

    <h3>Knowledge Workers</h3>
    <p><strong>Knowledge workers</strong> are researchers, designers, architects, scientists, and engineers who create knowledge for the organization.</p>
    <p><strong>They have three key roles:</strong></p>
    <ol>
      <li>Keeping the organization <strong>current in knowledge</strong></li>
      <li>Serving as <strong>internal consultants</strong> about their areas of expertise</li>
      <li>Acting as <strong>change agents</strong>: evaluating, starting, and promoting change projects</li>
    </ol>

    <h3>Requirements of Knowledge Work Systems</h3>
    <ul>
      <li>Enough <strong>computing power</strong> for graphics and complex calculations</li>
      <li>Powerful <strong>graphics and analytical tools</strong></li>
      <li><strong>Communications and document management</strong></li>
      <li>Access to <strong>external databases</strong></li>
      <li><strong>User-friendly interfaces</strong></li>
      <li>Optimized for the <strong>tasks to be performed</strong> (design engineering, financial analysis)</li>
    </ul>
    <p><strong>How the parts fit together:</strong></p>
    <pre><code>EXTERNAL KNOWLEDGE BASE
  ↓
SOFTWARE
  Graphics → Visualization
  Modeling → Simulation
  Document management
  Communications
  ⇅
USER INTERFACE
  ↑
HARDWARE PLATFORM:
KNOWLEDGE WORKSTATION</code></pre>

    <h3>Examples of Knowledge Work Systems</h3>
    <ul>
      <li><strong>CAD (Computer-Aided Design)</strong>
        <ul>
          <li>Creation of engineering or architectural designs</li>
          <li><strong>3-D printing</strong> (additive manufacturing)</li>
        </ul>
      </li>
      <li><strong>Virtual reality systems</strong>
        <ul>
          <li>Simulate real-life environments</li>
          <li>3-D medical modeling for surgeons</li>
          <li><strong>Augmented reality (AR)</strong> systems</li>
          <li><strong>VRML</strong> (Virtual Reality Modeling Language)</li>
        </ul>
      </li>
      <li><strong>Investment workstations</strong>
        <ul>
          <li>Streamline the investment process</li>
          <li>Bring together internal and external data for brokers, traders, and portfolio managers</li>
        </ul>
      </li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Do not confuse <strong>enterprise-wide KM systems</strong> with <strong>KWS</strong>. Enterprise-wide systems are <em>general-purpose</em> for the whole firm. KWS are <em>specialized</em> for knowledge workers who <em>create</em> new knowledge.</p>
    </div>

    <div class="divider"></div>

    <h2>Intelligent Techniques</h2>
    <p>Intelligent techniques are used to <strong>capture individual and collective knowledge</strong> and to <strong>extend the knowledge base</strong>.</p>

    <h3>Traditional Approach</h3>
    <ul>
      <li><strong>Capture tacit knowledge:</strong> expert systems, case-based reasoning, fuzzy logic</li>
      <li><strong>Knowledge discovery:</strong> neural networks and data mining</li>
      <li><strong>Generating solutions to complex problems:</strong> genetic algorithms</li>
      <li><strong>Automating tasks:</strong> intelligent agents</li>
    </ul>

    <h3>Modern Approach</h3>
    <ul>
      <li><strong>Machine learning and deep learning</strong> (transformers, reinforcement learning)</li>
      <li><strong>Generative AI</strong> (GPT-5, Llama, Gemini, Claude)</li>
      <li><strong>Multimodal AI</strong> (text, image, video, speech)</li>
      <li><strong>Retrieval-Augmented Generation (RAG)</strong></li>
      <li><strong>Autonomous AI agents</strong> (AutoGPT, BabyAGI, CrewAI)</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Generative AI</strong> creates new content. <strong>Multimodal AI</strong> works with many data types at once. <strong>RAG</strong> lets an AI model look up information from outside sources before it answers. <strong>Autonomous AI agents</strong> can carry out tasks on their own.</p>
    </div>

    <div class="divider"></div>

    <h2>Expert Systems</h2>
    <p><strong>Expert systems</strong> capture <strong>tacit knowledge</strong> in a very specific and limited area of human expertise.</p>
    <ul>
      <li>They capture the knowledge of skilled employees as a <strong>set of rules</strong> in a software system that others in the organization can use.</li>
      <li>They usually perform <strong>limited tasks</strong> that may take a few minutes or hours. For example:
        <ul>
          <li>Diagnosing a malfunctioning machine</li>
          <li>Deciding whether to grant credit for a loan</li>
        </ul>
      </li>
      <li>They are used for <strong>discrete, highly structured decision making</strong>.</li>
    </ul>

    <h3>Rules in an Expert System</h3>
    <p>An expert system contains a number of rules to be followed. The rules are <strong>interconnected</strong>. The number of outcomes is <strong>known in advance and limited</strong>. There are <strong>multiple paths to the same outcome</strong>, and the system can consider <strong>multiple rules at the same time</strong>.</p>
    <p>The rules below are for a <strong>simple credit-granting expert system</strong>:</p>
    <pre><code>Rule 1: IF income &gt; 50,000
        → ask about car payments
        ELSE → EXIT

Rule 2: IF car payment &lt; 10% of income
        → ask about mortgage payment
        ELSE → EXIT

Rule 3: IF mortgage payment &lt; 20% of income
        → GRANT CREDIT (outcome D)
        ELSE → EXIT

Rule 4: IF D reached
        → ask about years employed

Rule 5: IF years employed &gt;= 4
        → grant 10,000 line (F)
        ELSE → go to Rule 6

Rule 6: IF years employed &lt; 4
        → ask about other debt

Rule 7: IF other debt &lt; 5% of income
        → do F (limit 10,000)
        ELSE → do I (limit 3,000)</code></pre>

    <h3>How Expert Systems Work</h3>
    <ul>
      <li><strong>Knowledge base</strong> — a set of hundreds or thousands of rules</li>
      <li><strong>Inference engine</strong> — the strategy used to search the knowledge base</li>
    </ul>
    <p>There are two main strategies for the inference engine:</p>
    <ul>
      <li><strong>Forward chaining</strong> — The inference engine <strong>begins with the information entered by the user</strong> and searches the knowledge base to reach a conclusion.</li>
      <li><strong>Backward chaining</strong> — The inference engine <strong>begins with a hypothesis</strong> and asks the user questions until the hypothesis is confirmed or disproved.</li>
    </ul>
    <div class="callout callout-red">
      <span class="callout-label">Exam Trap</span>
      <p>Do not mix up the two. <strong>Forward chaining</strong> starts from the <em>facts</em> and goes to a conclusion. <strong>Backward chaining</strong> starts from a <em>hypothesis</em> and checks it.</p>
    </div>

    <h3>Inference Engine Example</h3>
    <p>An inference engine searches through the rules and <strong>"fires"</strong> the rules that are triggered by the facts gathered and entered by the user. A collection of rules is like a series of <strong>nested IF statements</strong> in a traditional software program. But in an expert system, the number of statements and the amount of nesting are much greater.</p>
    <pre><code>INCOME RULES
 IF income &gt; $100,000
   → life insurance
 IF income $50,000–$100,000
   → term insurance

REAL ESTATE RULES
 IF real estate
   → further contact

THEN
 IF life insurance
   → send sales rep
 IF term insurance
   → send brochure
 IF real estate &gt; $1,000,000
   → send FinAdv
 IF sales rep OR term ins
    OR FinAdv
   → search database

OTHER ACCOUNTS
 IF not on database
   → add prospect file
 IF FinAdv
   → prepare sales kit</code></pre>
    <p><em>FinAdv = financial advisor.</em></p>

    <h3>Limits of Expert Systems</h3>
    <ul>
      <li>Most expert systems deal with problems of <strong>classification</strong>.
        <ul>
          <li>They have relatively <strong>few alternative outcomes</strong>.</li>
          <li>Possible outcomes are <strong>known in advance</strong>.</li>
        </ul>
      </li>
      <li>Many expert systems need <strong>large, lengthy, and expensive</strong> development and maintenance.</li>
      <li><strong>Hiring or training more experts</strong> may be less expensive.</li>
    </ul>

    <div class="divider"></div>

    <h2>Case-Based Reasoning (CBR)</h2>
    <ul>
      <li>Descriptions of <strong>past experiences of human specialists</strong> (called <strong>cases</strong>) are stored in a knowledge base.</li>
      <li>The system searches for cases with <strong>characteristics similar to the new one</strong> and applies the solution of the old case to the new case.</li>
      <li><strong>Successful and unsuccessful</strong> applications are grouped with the case.</li>
      <li>It stores <strong>organizational intelligence</strong>: the knowledge base is continuously expanded and refined by users.</li>
      <li>CBR is found in <strong>medical diagnostic systems</strong> and <strong>customer support</strong>.</li>
    </ul>
    <p>CBR represents knowledge as a <strong>database of past cases and their solutions</strong>. The system uses a <strong>six-step process</strong> to generate solutions to new problems:</p>
    <ol>
      <li>User <strong>describes the problem</strong>.</li>
      <li>System <strong>searches the database</strong> for similar cases.</li>
      <li>System asks the user <strong>additional questions</strong> to narrow the search.</li>
      <li>System finds the <strong>closest fit</strong> and retrieves the solution.</li>
      <li>System <strong>modifies the solution</strong> to better fit the problem.</li>
      <li>System <strong>stores the problem and the successful solution</strong> in the database.</li>
    </ol>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>After step 5, the system checks: <strong>Successful?</strong> If <strong>NO</strong>, it goes back and modifies the solution again. If <strong>YES</strong>, it stores the problem and solution in the case database (step 6).</p>
    </div>
    <div class="callout callout-red">
      <span class="callout-label">Exam Trap</span>
      <p><strong>Expert systems</strong> use <em>rules</em>. <strong>Case-based reasoning</strong> uses <em>past cases</em>. Do not mix them up.</p>
    </div>

    <div class="divider"></div>

    <h2>Fuzzy Logic Systems</h2>
    <p><strong>Fuzzy logic</strong> is a <strong>rule-based technology</strong> that represents imprecision. It uses words like <strong>"cold"</strong> and <strong>"cool"</strong> that stand for a <strong>range of values</strong>.</p>
    <ul>
      <li>It describes a process in everyday language, then represents that description in a <strong>small number of flexible rules</strong>.</li>
      <li>It solves problems that need expertise that is <strong>difficult to represent with IF-THEN rules</strong>.</li>
      <li>Examples: <strong>autofocus in cameras</strong> and <strong>detecting possible medical fraud</strong>.</li>
    </ul>

    <h3>Fuzzy Logic for Temperature Control</h3>
    <p>A thermostat uses <strong>membership functions</strong> for the input called <strong>temperature</strong>. The words <strong>Cold, Cool, Warm, and Hot</strong> each have a value between <strong>0 and 1</strong>. The ranges overlap, so one temperature can be partly "cool" and partly "warm" at the same time.</p>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p><strong>Membership functions</strong> translate words such as "warm" into numbers that the computer can use.</p>
    </div>

    <div class="divider"></div>

    <h2>Machine Learning</h2>
    <p><strong>Machine learning</strong> is how computer programs <strong>improve performance without explicit programming</strong>.</p>
    <p>They learn by:</p>
    <ul>
      <li>Recognizing <strong>patterns</strong></li>
      <li>Using <strong>experience</strong></li>
      <li>Using <strong>prior learnings</strong> (a database)</li>
    </ul>
    <p><strong>Contemporary examples:</strong></p>
    <ul>
      <li>Google searches</li>
      <li>Recommender systems on Amazon and Netflix</li>
    </ul>

    <div class="divider"></div>

    <h2>Neural Networks</h2>
    <ul>
      <li>Find <strong>patterns and relationships</strong> in massive amounts of data that are too complicated for humans to analyze.</li>
      <li>They <strong>"learn"</strong> patterns by searching for relationships, building models, and correcting over and over again.</li>
      <li>Humans <strong>"train"</strong> the network by giving it data inputs for which the outputs are known. This helps the network learn the solution <strong>by example</strong>.</li>
      <li>Used in medicine, science, and business for <strong>pattern classification, prediction, financial analysis, and control and optimization</strong>.</li>
    </ul>

    <h3>How a Neural Network Works</h3>
    <p>A neural network uses rules it "learns" from patterns in data to build a <strong>hidden layer of logic</strong>. The hidden layer then processes inputs and classifies them based on the <strong>experience of the model</strong>.</p>
    <p>In this example, the network is trained to tell <strong>valid</strong> and <strong>fraudulent</strong> credit card purchases apart.</p>
    <pre><code>INPUT DATA
 • Age
 • Income
 • Purchase history
 • Frequency of purchases
 • Average purchase size
      ↓
INPUT LAYER
      ↓
HIDDEN LAYER
(learned logic)
      ↓
OUTPUT LAYER
      ↓
RESULT:
 Valid purchase
 OR Fraudulent purchase</code></pre>

    <h3>"Deep Learning" Neural Networks</h3>
    <ul>
      <li>Deep learning networks are <strong>more complex</strong>. They have <strong>many layers</strong> of transformation of the input data to produce a target output.</li>
      <li>Collections of neurons are called <strong>nodes or layers</strong>.</li>
      <li>Deep learning networks are <strong>in their infancy</strong>. They are used almost only for <strong>pattern detection on unlabeled data</strong>. The system is not told what to look for. It simply <strong>discovers patterns</strong> in the data.</li>
    </ul>
    <p>Deep learning networks work in a <strong>hierarchical fashion</strong> (step by step, from simple to complex). The diagram shows an expanded look at <strong>Layer 1</strong>. The other layers have the same structure.</p>
    <pre><code>Inputs
  ↓
LAYER 1
 Level 1 → Feature 1: Lines
 Level 2 → Feature 2: Circles
 Outputs → Medium-level
           pattern: Facial shape
  ↓
LAYER 2
  ↓
LAYER 3</code></pre>

    <div class="divider"></div>

    <h2>Genetic Algorithms</h2>
    <ul>
      <li>Useful for finding the <strong>optimal solution</strong> for a specific problem by examining a <strong>very large number of possible solutions</strong>.</li>
      <li>Conceptually based on the <strong>process of evolution</strong>.
        <ul>
          <li>They search among solution variables by changing and reorganizing component parts using <strong>inheritance, mutation, and selection</strong>.</li>
        </ul>
      </li>
      <li>Used in <strong>optimization problems</strong> where hundreds or thousands of variables exist, such as minimizing costs, efficient scheduling, and optimal jet engine design.</li>
      <li>Able to <strong>evaluate many solution alternatives quickly</strong>.</li>
    </ul>

    <h3>Components of a Genetic Algorithm</h3>
    <p>The example below shows an initial <strong>population of "chromosomes"</strong>. Each chromosome represents a <strong>different solution</strong>. The algorithm uses an <strong>iterative process</strong> (repeating again and again) to refine the solutions. This way, the better ones, those with <strong>higher fitness</strong>, are more likely to become the best solution.</p>
    <pre><code>#  Code    Length Width  Weight     Fit
1  110110  Long   Wide   Light      55
2  101000  Short  Narrow Heavy      49
3  000101  Long   Narrow Heavy      36
4  101101  Short  Medium Light      61
5  010101  Long   Medium Very light  74</code></pre>
    <ul>
      <li><strong>Population of chromosomes</strong> — the codes (e.g., 110110)</li>
      <li><strong>Decoding of chromosomes</strong> — turning codes into features (length, width, weight)</li>
      <li><strong>Evaluation of chromosomes</strong> — giving each a fitness score</li>
    </ul>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Genetic algorithm processes: <strong>inheritance, mutation, and selection</strong>. In the example, chromosome 5 has the highest fitness (74).</p>
    </div>

    <div class="divider"></div>

    <h2>Natural Language Processing, Computer Vision Systems, and Robotics</h2>
    <ul>
      <li><strong>Natural language processing (NLP)</strong> makes it possible for a computer to <strong>understand and analyze natural language</strong>.</li>
      <li><strong>Computer vision systems</strong> deal with how computers can <strong>copy the human visual system</strong> to view and extract information from real-world images.</li>
      <li><strong>Robotics</strong> deals with the <strong>design, construction, operation, and use of movable machines</strong> that can substitute for humans. It also covers the computer systems that control them, give sensory feedback, and process information.</li>
    </ul>

    <div class="divider"></div>

    <h2>Intelligent Agents</h2>
    <p><strong>Intelligent agents</strong> work <strong>without direct human intervention</strong> to carry out specific, repetitive, and predictable tasks for a user, process, or application.</p>
    <ul>
      <li>Examples: <strong>deleting junk e-mail</strong> and <strong>finding the cheapest airfare</strong></li>
      <li>They use a <strong>limited built-in or learned knowledge base</strong>.</li>
      <li>Some can <strong>adjust themselves</strong>. For example: <strong>Siri</strong>.</li>
    </ul>
    <p><strong>Agent-based modeling applications:</strong></p>
    <ul>
      <li>Systems of <strong>autonomous agents</strong></li>
      <li>Model the behavior of consumers, stock markets, and supply chains</li>
      <li>Used to <strong>predict the spread of epidemics</strong></li>
    </ul>

    <h3>Example: Intelligent Agents in P&amp;G's Supply Chain Network</h3>
    <ol>
      <li><strong>Suppliers:</strong> Software agents schedule deliveries from suppliers. If a supplier cannot deliver on time, agents negotiate with other suppliers to create an alternative delivery schedule.</li>
      <li><strong>Retail stores:</strong> Software agents collect real-time sales data on each P&amp;G product from many retail stores. They pass the data to P&amp;G production for replenishing orders, and to sales and marketing for trend analysis.</li>
      <li><strong>Distributors:</strong> Software agents schedule shipments from distributors to retailers. They give priority to retailers whose inventories are low. If a shipment to a retailer is delayed, agents find an alternative trucker.</li>
    </ol>
    <p>Intelligent agents help P&amp;G <strong>shorten the replenishment cycles</strong> for products such as a box of Tide.</p>

    <div class="divider"></div>

    <h2>Hybrid AI Systems</h2>
    <p><strong>Hybrid AI systems</strong> combine <strong>genetic algorithms, fuzzy logic, neural networks, and expert systems</strong> in a single application. This takes advantage of the best features of each.</p>
    <div class="callout callout-green">
      <span class="callout-label">Example</span>
      <p>The <strong>Matsushita "neurofuzzy" washing machine</strong> combines <strong>fuzzy logic</strong> with <strong>neural networks</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Quick Comparison: Which Technique for Which Job?</h2>
    <ul>
      <li><strong>Expert systems</strong> — capture tacit knowledge as rules; discrete, highly structured decisions</li>
      <li><strong>Case-based reasoning</strong> — reuse the solutions of similar past cases</li>
      <li><strong>Fuzzy logic</strong> — handle imprecise words such as "cold" and "cool"</li>
      <li><strong>Neural networks</strong> — find patterns in massive amounts of data</li>
      <li><strong>Genetic algorithms</strong> — find the optimal solution among many possibilities</li>
      <li><strong>Intelligent agents</strong> — automate repetitive, predictable tasks</li>
      <li><strong>Hybrid AI</strong> — combine several techniques in one application</li>
    </ul>
  `,
  summary: {
    topic: 'Managing Knowledge and Artificial Intelligence',
    subTopics: [
      'What You Will Learn',
      'Opening Case: Designing Drugs Virtually',
      'The Role of Knowledge Management Systems in Business',
      'The Knowledge Economy (2025)',
      'Why Knowledge Gives a Firm Its Value',
      'What Is Knowledge? How Is It Generated?',
      'Important Dimensions of Knowledge',
      'Knowledge Is a Firm Asset',
      'Knowledge Has Different Forms',
      'Knowledge Has a Location',
      'Knowledge Is Situational',
      'Organizational Learning',
      'Knowledge Management Value Chain',
      'Knowledge Acquisition',
      'Knowledge Storage',
      'Knowledge Dissemination',
      'Knowledge Application',
      'Organizational Roles and Responsibilities',
      'Three Major Types of Knowledge Management Systems',
      'Enterprise-Wide Knowledge Management Systems',
      'Three Major Types of Knowledge in an Enterprise',
      'Enterprise Content Management (ECM) Systems',
      'Taxonomy and Digital Asset Management',
      'Locating and Sharing Expertise',
      'Learning Management Systems (LMS)',
      'Knowledge Work Systems (KWS)',
      'Knowledge Workers',
      'Requirements of Knowledge Work Systems',
      'Examples of Knowledge Work Systems',
      'Intelligent Techniques (Traditional and Modern Approach)',
      'Expert Systems',
      'Rules in an Expert System',
      'How Expert Systems Work',
      'Inference Engine Example',
      'Limits of Expert Systems',
      'Case-Based Reasoning (CBR)',
      'Fuzzy Logic Systems',
      'Machine Learning',
      'Neural Networks',
      'Deep Learning Neural Networks',
      'Genetic Algorithms',
      'Natural Language Processing, Computer Vision Systems, and Robotics',
      'Intelligent Agents',
      'Hybrid AI Systems',
    ],
    definitions: [
      { term: 'Knowledge Management (KM)', meaning: 'A set of business processes developed in an organization to create, store, transfer, and apply knowledge.' },
      { term: 'Intangible Assets', meaning: 'Non-physical assets such as knowledge, brand, reputation, and proprietary processes that drive enterprise value.' },
      { term: 'Tacit Knowledge', meaning: 'Human expertise and experience that is not written down.' },
      { term: 'Explicit Knowledge', meaning: 'Knowledge that has been codified, such as documents and reports.' },
      { term: 'AI-Generated Knowledge', meaning: 'Machine-assisted insights produced by AI systems.' },
      { term: 'Network Effects (of Knowledge)', meaning: 'The value of knowledge increases as more people share it.' },
      { term: 'Sticky Knowledge', meaning: 'Knowledge that is hard to move from one place to another.' },
      { term: 'Situated Knowledge', meaning: 'Knowledge that is enmeshed in the culture of the firm.' },
      { term: 'Contextual Knowledge', meaning: 'Knowledge that works only in certain situations; knowing the circumstances in which to use a tool.' },
      { term: 'Conditional Knowledge', meaning: 'Knowing when to apply a procedure.' },
      { term: 'Organizational Learning', meaning: 'The process in which organizations gain experience and adjust their behavior to reflect it.' },
      { term: 'Knowledge Management Value Chain', meaning: 'Four stages (acquisition, storage, dissemination, application) that each add value as raw data and information become usable knowledge.' },
      { term: 'Knowledge Acquisition', meaning: 'Documenting tacit and explicit knowledge, creating knowledge, and tracking data from TPS and external sources.' },
      { term: 'Knowledge Storage', meaning: 'Keeping knowledge in databases and document management systems with planned indexing schemas.' },
      { term: 'Knowledge Dissemination', meaning: 'Sharing knowledge through portals, wikis, e-mail, instant messaging, search engines, and collaboration tools.' },
      { term: 'Knowledge Application', meaning: 'Making knowledge a systematic part of decision making to create new practices, products, services, and markets.' },
      { term: 'Chief Knowledge Officer (CKO)', meaning: 'Senior executive responsible for the firm knowledge management program.' },
      { term: 'Communities of Practice (COPs)', meaning: 'Informal social networks of professionals with similar work-related activities and interests, inside and outside the firm.' },
      { term: 'Enterprise-Wide KM Systems', meaning: 'General-purpose, firm-wide systems to collect, store, distribute, and apply digital content and knowledge.' },
      { term: 'Knowledge Work Systems (KWS)', meaning: 'Specialized systems that help knowledge workers create new knowledge and integrate it into the business.' },
      { term: 'Knowledge Workers', meaning: 'Researchers, designers, architects, scientists, and engineers who create knowledge for the organization.' },
      { term: 'Intelligent Techniques', meaning: 'A diverse group of tools used to discover, distill, and apply knowledge and find optimal solutions.' },
      { term: 'Structured Documents', meaning: 'Documents such as reports, presentations, and formal rules.' },
      { term: 'Semi-Structured Documents', meaning: 'Documents such as e-mails and videos.' },
      { term: 'Enterprise Content Management (ECM) System', meaning: 'A system to capture, store, retrieve, distribute, and preserve documents, reports, best practices, and semi-structured knowledge.' },
      { term: 'Taxonomy', meaning: 'A set of categories used to tag knowledge objects so they can be retrieved.' },
      { term: 'Digital Asset Management System', meaning: 'A content management system for classifying, storing, and managing unstructured digital data such as photos, graphics, video, and audio.' },
      { term: 'Learning Management System (LMS)', meaning: 'A system for management, delivery, tracking, and assessment of employee learning and training.' },
      { term: 'MOOC', meaning: 'Massive Open Online Course: a web course open to large numbers of participants.' },
      { term: 'CAD (Computer-Aided Design)', meaning: 'A knowledge work system used to create engineering or architectural designs.' },
      { term: '3-D Printing', meaning: 'Additive manufacturing that builds objects from digital designs.' },
      { term: 'Virtual Reality System', meaning: 'A system that simulates real-life environments, such as 3-D medical modeling for surgeons.' },
      { term: 'Augmented Reality (AR)', meaning: 'A system that adds computer-generated information to the real-world view.' },
      { term: 'Investment Workstation', meaning: 'A system that combines internal and external data for brokers, traders, and portfolio managers.' },
      { term: 'Expert System', meaning: 'A system that captures the tacit knowledge of experts in a narrow domain as a set of rules.' },
      { term: 'Knowledge Base', meaning: 'The set of hundreds or thousands of rules in an expert system.' },
      { term: 'Inference Engine', meaning: 'The strategy used to search the knowledge base of an expert system.' },
      { term: 'Forward Chaining', meaning: 'Inference method that starts with user-entered facts and searches the rules to reach a conclusion.' },
      { term: 'Backward Chaining', meaning: 'Inference method that starts with a hypothesis and asks questions until it is confirmed or disproved.' },
      { term: 'Case-Based Reasoning (CBR)', meaning: 'A system that stores past cases and solutions and reuses the solution of the most similar case for a new problem.' },
      { term: 'Fuzzy Logic', meaning: 'Rule-based technology that represents imprecise ideas such as cold or cool as ranges of values.' },
      { term: 'Membership Function', meaning: 'A function that turns words such as warm into numbers a computer can use.' },
      { term: 'Machine Learning', meaning: 'Computer programs that improve performance from patterns and experience without explicit programming.' },
      { term: 'Neural Network', meaning: 'A system that learns patterns in large data by being trained on examples with known outputs.' },
      { term: 'Deep Learning', meaning: 'Neural networks with many layers that detect patterns, often in unlabeled data.' },
      { term: 'Genetic Algorithm', meaning: 'An optimization method based on evolution that uses inheritance, mutation, and selection to find the best solution.' },
      { term: 'Natural Language Processing (NLP)', meaning: 'Technology that lets computers understand and analyze natural language.' },
      { term: 'Computer Vision System', meaning: 'A system that copies the human visual system to extract information from real-world images.' },
      { term: 'Robotics', meaning: 'Design, construction, operation, and use of movable machines that can substitute for humans.' },
      { term: 'Intelligent Agent', meaning: 'Software that works without direct human intervention to do specific, repetitive, predictable tasks.' },
      { term: 'Agent-Based Modeling', meaning: 'Systems of autonomous agents used to model behavior of consumers, stock markets, supply chains, and epidemics.' },
      { term: 'Hybrid AI System', meaning: 'A single application that combines genetic algorithms, fuzzy logic, neural networks, and expert systems.' },
      { term: 'Generative AI', meaning: 'AI that creates new content, such as GPT-5, Llama, Gemini, and Claude.' },
      { term: 'Multimodal AI', meaning: 'AI that works with several data types such as text, image, video, and speech.' },
      { term: 'Retrieval-Augmented Generation (RAG)', meaning: 'A method where an AI model retrieves information from outside sources before generating an answer.' },
      { term: 'Autonomous AI Agents', meaning: 'AI systems such as AutoGPT, BabyAGI, and CrewAI that carry out tasks on their own.' },
    ],
    keyPoints: [
      'Knowledge management and collaboration platforms are among the fastest-growing investment areas.',
      'Over 30% of global GDP comes from information and digital knowledge sectors (2025).',
      'Knowledge is created in steps: Data → Information → Knowledge → Wisdom.',
      'Knowledge is an intangible firm asset, and sharing it increases its value (network effects).',
      'Three forms of knowledge: tacit, explicit, and AI-generated.',
      'Knowledge is sticky, situated, and contextual; it is also conditional and contextual (situational).',
      'Unique knowledge that others cannot duplicate is a prime source of profit and competitive advantage.',
      'Organizational learning comes from data collection, measurement, experimentation, and feedback.',
      'The KM value chain has four stages: acquisition, storage, dissemination, application.',
      'Management must support storage systems, corporate-wide indexing schemas, and reward employees for updating documents.',
      'Knowledge must be part of decision-support systems to give ROI.',
      'Communities of Practice reuse knowledge and reduce the learning curve of new employees.',
      'Three major KM system types: enterprise-wide KM systems, knowledge work systems, intelligent techniques.',
      '80% of business content is semi-structured or unstructured.',
      'ECM systems need a taxonomy so knowledge objects can be tagged and retrieved.',
      'LMS manages, delivers, tracks, and assesses training; MOOCs are open to large numbers of participants.',
      'Knowledge workers keep the firm current, act as internal consultants, and act as change agents.',
      'KWS need computing power, graphics and analytical tools, external database access, and user-friendly interfaces.',
      'Examples of KWS: CAD, 3-D printing, virtual reality, augmented reality, investment workstations.',
      'Traditional intelligent techniques: expert systems, CBR, fuzzy logic (tacit knowledge); neural networks and data mining (discovery); genetic algorithms (solutions); intelligent agents (automation).',
      'Modern intelligent techniques: machine learning, deep learning, generative AI, multimodal AI, RAG, autonomous AI agents.',
      'Expert systems use rules for discrete, highly structured decisions with few known outcomes; they can be costly to build and maintain.',
      'Inference engine: forward chaining starts from facts; backward chaining starts from a hypothesis.',
      'The credit-granting and insurance examples show how expert system rules work like nested IF statements.',
      'CBR follows six steps: describe problem, search, narrow, retrieve closest fit, modify solution, store successful solution.',
      'Fuzzy logic handles imprecise terms (cold, cool, warm, hot) using membership functions; used in camera autofocus and medical fraud detection.',
      'Machine learning improves with patterns and experience; examples are Google search and Amazon and Netflix recommenders.',
      'Neural networks have input, hidden, and output layers and are trained with known outputs (e.g., valid vs fraudulent purchases).',
      'Deep learning uses many layers to detect patterns in unlabeled data.',
      'Genetic algorithms use inheritance, mutation, and selection, and chromosomes with higher fitness are more likely to become the best solution.',
      'NLP understands language, computer vision interprets images, and robotics builds machines that substitute for humans.',
      'Intelligent agents do repetitive tasks without human intervention (e.g., P&G supply chain scheduling).',
      'Hybrid AI combines several techniques, e.g., the Matsushita neurofuzzy washing machine (fuzzy logic + neural networks).',
    ],
  },
},


{
  id: 8,
  title: 'Enhancing Decision Making',
  content: `
    <span class="lesson-badge">LESSON 08</span>
    <h1>Enhancing Decision Making</h1>
    <div class="meta-info">ICT2162 <span>•</span> 14 min read</div>

    <p>This lesson explains how <strong>Management Information Systems (MIS)</strong> help managers make better decisions. We will look at types of decisions, the decision-making process, managerial roles, and how <strong>Business Intelligence (BI)</strong> and <strong>Business Analytics</strong> support decision-making in organizations.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>By the end of this lesson, you should be able to identify organizations, management, and the networked enterprise; explore IT infrastructure and security; explain key system applications for the digital age; and identify how to build and manage information systems.</p>
    </div>

    <h3>What We Discuss Today</h3>
    <ul>
      <li>Different types of decisions and how the decision-making process works</li>
      <li>How information systems support managers and management decision making</li>
      <li>How business intelligence and business analytics support decision-making</li>
      <li>How different decision-making groups in an organization use business intelligence</li>
      <li>The role of information systems in helping groups make decisions more efficiently</li>
    </ul>

    <div class="divider"></div>

    <h2>Understanding Decision Making with an Example</h2>
    <p>Imagine a supplier trying to decide which product is more profitable to sell.</p>
    <pre><code>Option 01: Casio wristwatch — Sales price: 10,000/=
Option 02: Citizen wristwatch — Sales price: 18,000/=</code></pre>
    <p>At first glance, it looks like the Citizen wristwatch is more profitable because it sells for more. But we need <strong>more information</strong> to decide correctly.</p>

    <pre><code>Option 01: Casio wristwatch
  Sales price: 10,000/=
  Cost: 6,000/=

Option 02: Citizen wristwatch
  Sales price: 18,000/=
  Cost: 10,000/=</code></pre>
    <p>Now we can see the <strong>profit per unit</strong>: Casio = 4,000/=, Citizen = 8,000/=. Citizen still looks better. But what about how many units will actually be sold?</p>

    <pre><code>Option 01: Casio wristwatch
  Sales price: 10,000/=, Cost: 6,000/=
  Sales forecast: 2,000 units

Option 02: Citizen wristwatch
  Sales price: 18,000/=, Cost: 10,000/=
  Sales forecast: 800 units</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Total profit = Profit per unit × Sales forecast. Casio: 4,000 × 2,000 = 8,000,000/=. Citizen: 8,000 × 800 = 6,400,000/=. The Casio wristwatch is actually more profitable overall! This shows why <strong>more and better information</strong> leads to better decisions.</p>
    </div>

    <div class="divider"></div>

    <h2>Business Value of Improved Decision Making</h2>
    <p>Improving hundreds of thousands of "small" decisions adds up to large annual value for a business. Decisions can be grouped into three types:</p>
    <ul>
      <li><strong>Unstructured</strong> — The decision maker must use judgment, evaluation, and insight to solve the problem. There is no fixed procedure.</li>
      <li><strong>Structured</strong> — Repetitive and routine decisions. They follow a definite procedure, so they don't need to be treated as new each time.</li>
      <li><strong>Semi-structured</strong> — Only part of the problem has a clear-cut answer provided by an accepted procedure.</li>
    </ul>

    <div class="divider"></div>

    <h2>Key Decision-Making Groups in a Firm</h2>
    <ul>
      <li><strong>Senior managers</strong> — Make many unstructured decisions. <em>Example: Should we enter a new market?</em></li>
      <li><strong>Middle managers</strong> — Make more structured decisions, but these may include unstructured components. <em>Example: Why is the order fulfillment report showing a decline in Colombo?</em></li>
      <li><strong>Operational managers</strong> — Make more structured decisions. <em>Example: Does a customer meet the criteria for credit?</em></li>
    </ul>

    <h3>Information Requirements by Level</h3>
    <pre><code>Decision Characteristics        Examples of Decisions
─────────────────────────────────────────────────────
Unstructured                    Decide entrance/exit from markets
(Senior Management)             Approve capital budget
                                 Decide long-term goals

Semistructured                  Design a marketing plan
(Middle Management)             Develop a departmental budget
                                 Design a new corporate website

Structured                      Determine overtime eligibility
(Operational Management/        Restock inventory
Individual Employees & Teams)   Offer credit to customers
                                 Determine special offers</code></pre>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>As we move up the management pyramid, decisions become less structured and more judgment-based. As we move down, decisions become more routine and rule-based.</p>
    </div>

    <div class="divider"></div>

    <h2>The 4 Stages of the Decision-Making Process</h2>
    <ol>
      <li><strong>Intelligence</strong> — Discovering, identifying, and understanding the problems occurring in the organization. <em>(Problem discovery: What is the problem?)</em></li>
      <li><strong>Design</strong> — Identifying and exploring solutions to the problem. <em>(Solution discovery: What are the possible solutions?)</em></li>
      <li><strong>Choice</strong> — Choosing among solution alternatives. <em>(Choosing solutions: What is the best solution?)</em></li>
      <li><strong>Implementation</strong> — Making the chosen alternative work and continuing to monitor how well the solution is working. <em>(Solution testing: Is the solution working? Can we make it work better?)</em></li>
    </ol>

    <pre><code>Intelligence → Design → Choice → Implementation
     ↑              ↑         ↑           │
     └──────────────┴─────────┴───────────┘
        (Process can loop back to earlier stages)</code></pre>

    <div class="divider"></div>

    <h2>Managers and Decision Making in the Real World</h2>
    <p>Information systems can only assist in <strong>some</strong> of the roles played by managers. IS cannot improve all the different kinds of decisions taking place in an organization.</p>

    <h3>Classical Model of Management</h3>
    <p>This model describes <strong>5 functions</strong> of a manager:</p>
    <ul>
      <li>Planning</li>
      <li>Organizing</li>
      <li>Coordinating</li>
      <li>Deciding</li>
      <li>Controlling</li>
    </ul>

    <h3>Contemporary Behavioral Models</h3>
    <p>In real life, the actual behavior of managers appears to be <strong>less systematic</strong>, more informal, less reflective, more reactive, and less well organized than the classical model suggests.</p>

    <div class="divider"></div>

    <h2>Mintzberg's 10 Managerial Roles</h2>
    <p>Management researcher Henry Mintzberg identified 10 roles that managers play, grouped into three categories.</p>

    <h3>Interpersonal Roles</h3>
    <ul>
      <li><strong>Figurehead</strong> — Represents the organization symbolically.</li>
      <li><strong>Leader</strong> — Motivates and directs staff.</li>
      <li><strong>Liaison</strong> — Connects people inside and outside the organization.</li>
    </ul>

    <h3>Informational Roles</h3>
    <ul>
      <li><strong>Monitor</strong> — Gathers information about the organization and environment.</li>
      <li><strong>Disseminator</strong> — Shares information with others in the organization.</li>
      <li><strong>Spokesperson</strong> — Shares information with people outside the organization.</li>
    </ul>

    <h3>Decisional Roles</h3>
    <ul>
      <li><strong>Entrepreneur</strong> — Looks for new opportunities and initiates change.</li>
      <li><strong>Disturbance handler</strong> — Deals with unexpected problems and conflicts.</li>
      <li><strong>Resource allocator</strong> — Decides where resources should be used.</li>
      <li><strong>Negotiator</strong> — Represents the organization in negotiations.</li>
    </ul>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Group Activity:</strong> Form three groups and research the roles above with real-world examples (Interpersonal, Informational, and Decisional). Present your findings to the class.</p>
    </div>

    <div class="divider"></div>

    <h2>Real World Decision Making</h2>
    <p>There are three main reasons why investments in information technology do not always produce positive results:</p>
    <ol>
      <li><strong>Information quality</strong> — High-quality decisions require high-quality information. Bad data leads to bad decisions.</li>
      <li><strong>Management filters</strong> — Managers have selective attention and various biases that cause them to reject information that doesn't match their prior beliefs.</li>
      <li><strong>Organizational inertia and politics</strong> — Strong forces within organizations resist making decisions that call for major change.</li>
    </ol>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Even with great information systems, decisions can still fail if the underlying data quality is poor, managers ignore unwelcome information, or the organization resists change.</p>
    </div>

    <div class="divider"></div>

    <h2>High Velocity Automated Decision Making</h2>
    <ul>
      <li>Made possible through <strong>computer algorithms</strong> that precisely define the steps for a highly structured decision.</li>
      <li>Humans are taken out of the decision entirely.</li>
      <li><strong>Example:</strong> High-speed computer trading programs that execute trades in just 30 milliseconds. These programs were responsible for the "Flash Crash" of 2010.</li>
      <li>Because of risks like this, automated systems require <strong>safeguards</strong> to ensure proper operation and regulation.</li>
    </ul>

    <div class="divider"></div>

    <h2>Business Intelligence, Business Analytics & BI Vendors</h2>
    <ul>
      <li><strong>Business Intelligence (BI)</strong> — The infrastructure for collecting, storing, and analyzing data produced by a business. This includes databases, data warehouses, and data marts.</li>
      <li><strong>Business Analytics</strong> — The tools and techniques used for analyzing data, such as <code>OLAP</code>, statistics, models, and data mining.</li>
      <li><strong>Business Intelligence vendors</strong> — Companies that create the BI and analytics software purchased by firms.</li>
    </ul>

    <div class="divider"></div>

    <h2>Six Elements in the Business Intelligence Environment</h2>
    <ol>
      <li>Data from the business environment (e.g. call centers, website, mobile devices, blogs, stores, suppliers, government employees)</li>
      <li>Business intelligence infrastructure (databases, data warehouses, data marts)</li>
      <li>Business analytics toolset (statistical models, data mining, OLAP, production reports)</li>
      <li>Managerial users and methods (business strategy, performance management, balanced scorecard, forecasts)</li>
      <li>Delivery platform — <code>MIS</code>, <code>DSS</code>, <code>ESS</code></li>
      <li>User interface (reports, dashboards, scorecards, desktop, mobile, web portal, social media)</li>
    </ol>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Data flows from the business environment, through the BI infrastructure and analytics tools, to managerial users, and finally reaches them through a delivery platform and user interface.</p>
    </div>

    <div class="divider"></div>

    <h2>Business Intelligence and Analytics Capabilities</h2>
    <p>The goal of BI systems is to deliver <strong>accurate, real-time information</strong> to decision-makers. The main functionalities of BI systems are:</p>
    <ol>
      <li>Production reports</li>
      <li>Parameterized reports</li>
      <li>Dashboards / scorecards</li>
      <li>Ad hoc query / search / report creation</li>
      <li>Drill down</li>
      <li>Forecasts, scenarios, models</li>
    </ol>

    <div class="divider"></div>

    <h2>Who Uses Business Intelligence?</h2>
    <ul>
      <li><strong>80%</strong> of users are casual users who rely on production reports.</li>
      <li><strong>Senior executives</strong> — Use monitoring functionalities to track overall performance.</li>
      <li><strong>Middle managers and analysts</strong> — Use ad-hoc analysis to investigate specific questions.</li>
      <li><strong>Operational employees</strong> — Use prepackaged reports. <em>Examples: sales forecasts, customer satisfaction, loyalty and attrition, supply chain backlog, employee productivity.</em></li>
    </ul>

    <div class="divider"></div>

    <h2>Examples of BI Applications</h2>
    <ul>
      <li><strong>Predictive Analytics</strong> — Uses patterns in data to predict future behavior. <em>Example: Credit card companies use predictive analytics to identify customers at risk of leaving.</em></li>
      <li><strong>Big Data Analytics</strong> — Analyzing very large and complex datasets for insights.</li>
      <li><strong>Data Visualization</strong> — Helps users see patterns and relationships that would be hard to notice in plain text lists.</li>
      <li><strong>Operational Intelligence and Analytics</strong> — Real-time analysis of day-to-day business operations.</li>
      <li><strong>Location Analytics</strong> — Gains business insight from the location component of data.</li>
      <li><strong>Geographic Information Systems (GIS)</strong> — Ties location-related data to maps for visual analysis.</li>
    </ul>

    <div class="divider"></div>

    <h2>Summary & Key Takeaways</h2>
    <ul>
      <li>Decisions can be unstructured, structured, or semi-structured, and different management levels handle different types.</li>
      <li>The decision-making process has 4 stages: Intelligence, Design, Choice, and Implementation.</li>
      <li>Managers play 10 different roles grouped into Interpersonal, Informational, and Decisional categories (Mintzberg's model).</li>
      <li>Good decisions depend on information quality, management openness, and organizational willingness to change.</li>
      <li>Business Intelligence and Business Analytics provide the infrastructure and tools to turn raw data into decision-ready information.</li>
      <li>Different user groups (executives, managers, employees) use BI tools differently, from monitoring dashboards to ad-hoc analysis and prepackaged reports.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>More information does not automatically mean a better decision — the example of the Casio vs Citizen wristwatch shows that <strong>sales forecast</strong> data was the missing piece needed to find the truly more profitable option.</p>
    </div>
  `,
  summary: {
    topic: 'Enhancing Decision Making with Management Information Systems',
    subTopics: [
      'Understanding Decision Making with an Example',
      'Business Value of Improved Decision Making',
      'Key Decision-Making Groups in a Firm',
      'Information Requirements by Level',
      'The 4 Stages of the Decision-Making Process',
      'Managers and Decision Making in the Real World',
      "Mintzberg's 10 Managerial Roles",
      'Real World Decision Making',
      'High Velocity Automated Decision Making',
      'Business Intelligence, Business Analytics & BI Vendors',
      'Six Elements in the Business Intelligence Environment',
      'Business Intelligence and Analytics Capabilities',
      'Who Uses Business Intelligence?',
      'Examples of BI Applications',
    ],
    definitions: [
      { term: 'Unstructured Decision', meaning: 'A decision where the decision maker must use judgment, evaluation, and insight to solve the problem; no fixed procedure exists.' },
      { term: 'Structured Decision', meaning: 'A repetitive, routine decision that follows a definite procedure, so it does not need to be treated as new each time.' },
      { term: 'Semi-structured Decision', meaning: 'A decision where only part of the problem has a clear-cut answer provided by an accepted procedure.' },
      { term: 'Intelligence (decision stage)', meaning: 'Discovering, identifying, and understanding problems occurring in the organization.' },
      { term: 'Design (decision stage)', meaning: 'Identifying and exploring possible solutions to a problem.' },
      { term: 'Choice (decision stage)', meaning: 'Choosing among the available solution alternatives.' },
      { term: 'Implementation (decision stage)', meaning: 'Making the chosen alternative work and continuing to monitor how well it performs.' },
      { term: 'Classical Model of Management', meaning: 'A model describing 5 manager functions: planning, organizing, coordinating, deciding, and controlling.' },
      { term: "Mintzberg's Managerial Roles", meaning: '10 roles managers play, grouped into Interpersonal, Informational, and Decisional categories.' },
      { term: 'High Velocity Automated Decision Making', meaning: 'Decision making done entirely by computer algorithms for highly structured decisions, without human involvement.' },
      { term: 'Business Intelligence (BI)', meaning: 'The infrastructure for collecting, storing, and analyzing data produced by a business, including databases, data warehouses, and data marts.' },
      { term: 'Business Analytics', meaning: 'Tools and techniques for analyzing data, such as OLAP, statistics, models, and data mining.' },
      { term: 'Business Intelligence Vendors', meaning: 'Companies that create business intelligence and analytics software purchased by firms.' },
      { term: 'Predictive Analytics', meaning: 'A BI application that uses patterns in data to predict future behavior.' },
      { term: 'Data Visualization', meaning: 'A technique that helps users see patterns and relationships in data that would be hard to notice in text lists.' },
      { term: 'Geographic Information Systems (GIS)', meaning: 'A system that ties location-related data to maps for analysis.' },
    ],
    keyPoints: [
      'Improving many small decisions adds up to large annual value for a business.',
      'Decisions are classified as unstructured, structured, or semi-structured.',
      'Senior managers handle unstructured decisions, middle managers handle semi-structured decisions, and operational managers handle structured decisions.',
      'The decision-making process has 4 stages: Intelligence, Design, Choice, Implementation — and it can loop back to earlier stages.',
      'In the wristwatch example, the Casio watch was actually more profitable overall because sales forecast data changed the decision, showing why complete information matters.',
      'The classical management model has 5 functions: planning, organizing, coordinating, deciding, controlling — but real managers behave less systematically than this model suggests.',
      "Mintzberg identified 10 managerial roles in 3 groups: Interpersonal (Figurehead, Leader, Liaison), Informational (Monitor, Disseminator, Spokesperson), and Decisional (Entrepreneur, Disturbance handler, Resource allocator, Negotiator).",
      'IT investments may fail to improve decisions due to poor information quality, management filters (bias), and organizational inertia/politics.',
      'High velocity automated decision making uses algorithms without humans — it caused the 2010 "Flash Crash" and needs safeguards.',
      'Business Intelligence (BI) is the infrastructure for data; Business Analytics is the toolset for analyzing that data.',
      'The BI environment has 6 elements: data from business environment, BI infrastructure, analytics toolset, managerial users/methods, delivery platform (MIS, DSS, ESS), and user interface.',
      'Main BI functionalities include production reports, parameterized reports, dashboards/scorecards, ad hoc queries, drill down, and forecasts/scenarios/models.',
      '80% of BI users are casual users relying on production reports; senior executives use monitoring tools, middle managers do ad-hoc analysis, and operational employees use prepackaged reports.',
      'Examples of BI applications include Predictive Analytics, Big Data Analytics, Data Visualization, Operational Intelligence, Location Analytics, and GIS.',
    ],
  },
},


{
  id: 9,
  title: 'Securing Information Systems',
  content: `<span class="lesson-badge">LESSON 9</span>
<h1>Securing Information Systems</h1>
<div class="meta-info">ICT2162 <span>•</span> 19 min read</div>

<p>Information systems hold some of an organization's most valuable assets — customer data, financial records, trade secrets, and intellectual property. This lesson explains <strong>why</strong> these systems are vulnerable, what kinds of threats and crimes exist, and the <strong>tools, technologies, and controls</strong> used to keep information safe.</p>

<div class="callout-blue">
<strong>What We Discuss Today:</strong>
<ul>
<li>Why information systems are vulnerable to destruction, error, and abuse</li>
<li>Business value of security and control</li>
<li>Components of an organizational framework for security and control</li>
<li>Tools and technologies used for safeguarding information resources</li>
</ul>
</div>

<div class="divider"></div>

<h2>Security and Controls: Key Definitions</h2>
<p>These two terms are closely related but mean different things.</p>

<div class="callout-blue">
<strong>Security:</strong> Policies, procedures, and technical measures used to prevent unauthorized access, alteration, theft, or physical damage to information systems.<br><br>
<strong>Controls:</strong> Methods, policies, and organizational procedures that ensure the safety of an organization's assets, the accuracy and reliability of its accounting records, and operational adherence to management standards.
</div>

<div class="divider"></div>

<h2>Why Information Systems Are Vulnerable</h2>
<p>Modern information systems are exposed on many fronts. Key reasons include:</p>
<ol>
<li><strong>Accessibility of networks</strong> — anyone can potentially reach them</li>
<li><strong>Hardware problems</strong> — breakdowns, configuration errors, damage from improper use or crime</li>
<li><strong>Software problems</strong> — programming errors, installation errors, unauthorized changes</li>
<li><strong>Disasters</strong> — fires, floods, power failures</li>
<li><strong>Use of networks/computers outside of the firm's control</strong></li>
<li><strong>Loss and theft of portable devices</strong></li>
</ol>

<div class="callout-yellow">
<strong>Remember (exam point):</strong> Systems are vulnerable because of a combination of <strong>technical</strong> factors (hardware/software flaws), <strong>environmental</strong> factors (disasters), and <strong>human/organizational</strong> factors (loss, theft, outside use of networks).
</div>

<h3>Contemporary Security Challenges and Vulnerabilities</h3>
<p>A typical Web-based application links a <strong>Web client</strong>, <strong>communication lines</strong>, <strong>corporate servers</strong>, and <strong>corporate systems/databases</strong>. Each layer has its own vulnerabilities, and floods, fires, and power failures can disrupt the network at any point.</p>

<pre><code>Client (User)       Communications Lines     Corporate Servers        Corporate Systems
--------------       --------------------     -----------------        -----------------
Unauthorized access   Tapping                  Hacking                  Theft of data
Errors                Sniffing                 Viruses and worms        Copying data
                      Message alteration      Theft and fraud          Alteration of data
                      Theft and fraud          Vandalism                Hardware failure
                      Radiation                Denial-of-service attacks  Software failure
                                                                        (Hardware/OS/Software +
                                                                         Databases)</code></pre>

<div class="divider"></div>

<h2>Internet and Wireless Security Challenges</h2>

<h3>Internet Vulnerabilities</h3>
<ul>
<li>The network is open to anyone</li>
<li>The sheer size of the Internet means abuses can have a wide impact</li>
<li>Fixed Internet addresses (cable/DSL modems) create fixed targets for hackers</li>
<li>Unencrypted VOIP calls can be intercepted</li>
<li>E-mail and P2P file sharing are vulnerable to: interception, attachments carrying malicious software, and transmission of trade secrets</li>
</ul>

<h3>Wireless Security Challenges</h3>
<ul>
<li>Radio frequency bands are easy to scan</li>
<li><strong>SSIDs</strong> (service set identifiers) identify access points and are broadcast multiple times — they can be picked up by sniffer programs</li>
<li><strong>War driving:</strong> eavesdroppers drive around buildings trying to detect an SSID and gain unauthorized access to the network</li>
<li>Once an access point is breached, an intruder can use the operating system to access networked drives and files</li>
</ul>

<pre><code>Legitimate User                Wireless Access Point              Intruder
----------------               ----------------------             -----------
Authentication request  --->
                        <---   Challenge
Response                --->
                        <---   Success (access granted)

                                      ^
                                      | (sniffer intercepts signal)
                                      |
                                  Intruder gains
                                unauthorized access</code></pre>

<div class="callout-red">
<strong>Warning:</strong> Many Wi-Fi networks can be penetrated easily by intruders using sniffer programs to obtain an address and access network resources without authorization.
</div>

<div class="divider"></div>

<h2>Malware: Viruses, Worms, Trojan Horses & More</h2>
<p><strong>Malware</strong> (malicious software) is one of the most common threats to information systems.</p>

<h3>Viruses and Worms</h3>
<ul>
<li><strong>Virus:</strong> A rogue software program that attaches itself to other software programs or data files in order to be executed, usually without the user's knowledge or permission.</li>
<li><strong>Worm:</strong> An independent program that copies itself from one computer to other computers over a network, without needing to attach to another file.</li>
</ul>
<p>Worms and viruses spread through drive-by downloads, e-mail/instant-messaging attachments, and downloads from websites and social networks.</p>

<div class="callout-red">
<strong>Common mistake:</strong> Don't confuse a <strong>virus</strong> (needs a host file to execute) with a <strong>worm</strong> (an independent program that spreads on its own over a network).
</div>

<h3>Trojan Horses, SQL Injection & Ransomware</h3>
<ul>
<li><strong>Trojan horse:</strong> Software that appears to be benign but then does something other than expected.</li>
<li><strong>SQL injection attacks:</strong> Hackers submit data to Web forms that exploits a site's unprotected software and sends a rogue SQL query to the database.</li>
<li><strong>Ransomware:</strong> Malware that locks or encrypts a victim's data/systems until a ransom is paid.</li>
<li>Smartphones are just as vulnerable as computers — studies have found over 13,000 types of smartphone malware.</li>
</ul>

<h3>Spyware and Key Loggers</h3>
<ul>
<li><strong>Spyware:</strong> Small programs that install themselves surreptitiously on computers to monitor a user's Web surfing activity and serve up advertising.</li>
<li><strong>Key loggers:</strong> Record every keystroke on a computer to steal serial numbers, passwords, or launch Internet attacks.</li>
<li>Other spyware types can reset the browser home page, redirect search requests, and slow computer performance by consuming memory.</li>
</ul>

<div class="divider"></div>

<h2>Hackers and Computer Crime</h2>
<p>A <strong>hacker</strong> is an individual who gains unauthorized access to a computer system; the term <strong>cracker</strong> is typically used for hackers with criminal intent. Common hacker activities include system intrusion, system damage, and <strong>cyber vandalism</strong> — the intentional disruption, defacement, or destruction of a website or corporate information system.</p>

<h3>Spoofing and Sniffing</h3>
<ul>
<li><strong>Spoofing:</strong> Misrepresenting oneself using fake e-mail addresses, masquerading as someone else, or redirecting a Web link to an address that masquerades as the intended destination.</li>
<li><strong>Sniffer:</strong> An eavesdropping program that monitors information traveling over a network, enabling hackers to steal proprietary information such as e-mail and company files.</li>
</ul>

<h3>Denial-of-Service Attacks and Botnets</h3>
<ul>
<li><strong>Denial-of-Service attack (DoS):</strong> Flooding a server with thousands of false requests to crash the network.</li>
<li><strong>Distributed Denial-of-Service attack (DDoS):</strong> Uses numerous computers to launch a DoS attack.</li>
<li><strong>Botnets:</strong> Networks of "zombie" PCs infiltrated by bot malware. They deliver about 90% of the world's spam and 80% of the world's malware. (Example: the Mirai botnet.)</li>
</ul>

<div class="callout-yellow">
<strong>Remember (exam point):</strong> A <strong>DoS</strong> attack comes from one source; a <strong>DDoS</strong> attack uses many compromised computers (a <strong>botnet</strong>) at once, making it much harder to block.
</div>

<h3>Computer Crime</h3>
<div class="callout-blue">
<strong>Computer crime:</strong> Any violations of criminal law that involve a knowledge of computer technology for their perpetration, investigation, or prosecution.
</div>
<p>A computer can be the <strong>target</strong> of a crime (e.g., breaching confidentiality of protected data, accessing a system without authority, knowingly causing damage to a protected computer) or the <strong>instrument</strong> of a crime (e.g., theft of trade secrets, unauthorized copying of software/intellectual property, schemes to defraud, using e-mail for threats or harassment, illegally intercepting communications, transmitting child pornography).</p>

<h3>Identity Theft, Phishing, Evil Twins, Pharming & Click Fraud</h3>
<ul>
<li><strong>Identity theft:</strong> Theft of personal information (social security ID, driver's license, or credit card numbers) to impersonate someone else.</li>
<li><strong>Phishing:</strong> Setting up fake websites or sending e-mail messages that look like legitimate businesses to ask users for confidential personal data.</li>
<li><strong>Evil twins:</strong> Wireless networks that pretend to offer trustworthy Wi-Fi connections to the Internet.</li>
<li><strong>Pharming:</strong> Redirects users to a bogus Web page, even when the individual types the correct Web address into the browser.</li>
<li><strong>Click fraud:</strong> Occurs when an individual or computer program fraudulently clicks on an online ad with no intention of learning more or making a purchase.</li>
<li><strong>Cyberterrorism and Cyberwarfare:</strong> Use of the Internet and digital attacks for politically or militarily motivated disruption.</li>
</ul>

<div class="callout-red">
<strong>Common mistake:</strong> Don't mix these up — <strong>Phishing</strong> tricks users via fake e-mails/websites; <strong>Pharming</strong> redirects users even when they type the correct address; an <strong>Evil Twin</strong> is a fake Wi-Fi network pretending to be legitimate.
</div>

<div class="divider"></div>

<h2>Internal Threats: Employees</h2>
<p>Security threats often originate <strong>inside</strong> an organization, not just from external hackers.</p>
<ul>
<li>Employees have inside knowledge of systems and procedures</li>
<li>Sloppy security procedures and lack of user knowledge create openings</li>
<li><strong>Social engineering:</strong> Tricking employees into revealing their passwords by pretending to be legitimate members of the company who need the information</li>
</ul>

<div class="divider"></div>

<h2>Software Vulnerability & Microprocessor Design Flaws</h2>
<p>Commercial software almost always contains hidden bugs (program code defects). <strong>Zero defects cannot be achieved</strong> because complete testing of large programs is not possible. These flaws can open networks to intruders.</p>
<ul>
<li><strong>Patches:</strong> Small pieces of software released to repair flaws — but exploits are often created faster than patches can be released and implemented.</li>
</ul>
<p>Beyond software, poor (faulty) designs in computer <strong>microprocessor chips</strong> can also enable hackers using malicious software to access data thought to be completely protected. These hardware-level vulnerabilities affect nearly every computer chip manufactured in the last 20 years.</p>

<div class="divider"></div>

<h2>Business Value of Security and Control</h2>
<p>Failed computer systems can lead to significant or total loss of business function. Firms today are more vulnerable than ever because they hold confidential personal/financial data and valuable trade secrets. A security breach can cut into a firm's market value almost immediately, and inadequate security raises issues of legal <strong>liability</strong>.</p>

<div class="callout-blue">
<strong>Key regulations requiring electronic records management and privacy protection:</strong>
<ul>
<li><strong>HIPAA:</strong> Medical security and privacy rules and procedures</li>
<li><strong>Gramm-Leach-Bliley Act:</strong> Requires financial institutions to ensure the security and confidentiality of customer data</li>
<li><strong>Sarbanes-Oxley Act:</strong> Imposes responsibility on companies and management to safeguard the accuracy and integrity of financial information used internally and released externally</li>
</ul>
</div>

<div class="divider"></div>

<h2>Electronic Evidence and Computer Forensics</h2>
<ul>
<li><strong>Electronic evidence:</strong> Evidence for white-collar crimes is often in digital form — data on computers, e-mail, instant messages, e-commerce transactions. Proper control of data saves time and money when responding to a legal discovery request.</li>
<li><strong>Computer forensics:</strong> The scientific collection, examination, authentication, preservation, and analysis of data from computer storage media for use as evidence in a court of law, including the recovery of ambient and hidden data.</li>
</ul>

<div class="divider"></div>

<h2>Information Systems Controls</h2>
<p>Information systems controls can be <strong>manual or automated</strong>, and are classified as <strong>general controls</strong> or <strong>application controls</strong>.</p>

<h3>General Controls</h3>
<p>General controls govern the design, security, and use of computer programs and the security of data files throughout the organization's entire IT infrastructure. They apply to all computerized applications and combine hardware, software, and manual procedures to create an overall control environment.</p>

<div class="callout-yellow">
<strong>Remember (exam point) — Types of General Controls:</strong>
<ol>
<li>Software controls</li>
<li>Hardware controls</li>
<li>Computer operations controls</li>
<li>Data security controls</li>
<li>Implementation controls</li>
<li>Administrative controls</li>
</ol>
</div>

<h3>Application Controls</h3>
<p>Application controls are specific to each computerized application (e.g., payroll or order processing). They include both automated and manual procedures that ensure only authorized data is completely and accurately processed. They include:</p>
<ul>
<li><strong>Input controls</strong></li>
<li><strong>Processing controls</strong></li>
<li><strong>Output controls</strong></li>
</ul>

<div class="divider"></div>

<h2>Risk Assessment</h2>
<p><strong>Risk assessment</strong> determines the level of risk to a firm if a specific activity or process is not properly controlled. It considers the type of threat, probability of occurrence during the year, potential losses/value of the threat, and the expected annual loss.</p>

<pre><code>EXPOSURE        PROBABILITY   LOSS RANGE (AVG)         EXPECTED ANNUAL LOSS
Power failure   30%           $5K–$200K ($102,500)     $30,750
Embezzlement    5%            $1K–$50K ($25,500)       $1,275
User error      98%           $200–$40K ($20,100)      $19,698</code></pre>

<div class="divider"></div>

<h2>Security Policy and Identity Management</h2>
<p>A <strong>security policy</strong> ranks information risks, identifies acceptable security goals, and identifies mechanisms for achieving these goals. It drives other policies:</p>
<ul>
<li><strong>Acceptable Use Policy (AUP):</strong> Defines acceptable uses of the firm's information resources and computing equipment.</li>
<li><strong>Authorization policies:</strong> Determine differing levels of user access to information assets.</li>
</ul>

<h3>Identity Management</h3>
<p><strong>Identity management</strong> covers the business processes and tools used to identify valid system users and control their access. It identifies/authorizes different categories of users, specifies which portions of the system each user can access, and authenticates users while protecting their identities. <strong>Identity management systems</strong> capture access rules for different levels of users.</p>

<pre><code>SECURITY PROFILE 1                          SECURITY PROFILE 2
User: Personnel Dept. Clerk                  User: Divisional Personnel Manager
Location: Division 1                         Location: Division 1
Access: All employee data (Division 1)       Access: All employee data (Division 1)
  - Medical history data: None                 - Type of Access: Read Only
  - Salary: None
  - Pensionable earnings: None
Type of Access: Read and Update</code></pre>

<div class="divider"></div>

<h2>Disaster Recovery and Business Continuity Planning</h2>
<ul>
<li><strong>Disaster recovery planning:</strong> Devises plans for the restoration of disrupted computing and communications services.</li>
<li><strong>Business continuity planning:</strong> Focuses on restoring actual business operations after a disaster.</li>
</ul>
<p>Both types of plans are needed to identify a firm's most critical systems. A <strong>business impact analysis</strong> determines the impact of an outage, and management must decide which systems should be restored first.</p>

<div class="divider"></div>

<h2>Information Systems Audit</h2>
<p>An information systems audit examines the firm's overall security environment as well as the controls governing individual information systems. It reviews technologies, procedures, documentation, training, and personnel, and may even simulate a disaster to test the response of technology, IS staff, and other employees. The audit lists and ranks all control weaknesses, estimates the probability of their occurrence, and assesses the financial and organizational impact of each threat. Auditors typically document findings (e.g., weaknesses in a bank's loan system) along with management's response and any corrective actions taken.</p>

<div class="divider"></div>

<h2>Tools and Technologies for Safeguarding Information Resources</h2>

<h3>1–2. Identity Management Software and Authentication</h3>
<p><strong>Identity management software</strong> automates keeping track of all users and privileges, authenticating users, protecting identities, and controlling access. Common authentication methods include:</p>
<ul>
<li>Password systems</li>
<li>Tokens</li>
<li>Smart cards</li>
<li>Biometric authentication</li>
<li>Two-factor authentication</li>
</ul>

<h3>3. Firewalls</h3>
<p>A <strong>firewall</strong> is a combination of hardware and software that prevents unauthorized users from accessing private networks. Key technologies include static packet filtering, stateful inspection, network address translation (NAT), and application proxy filtering.</p>

<pre><code>Internet ---> Outer Firewall ---> Web Server ---> Inner Firewall ---> Corporate Systems ---> Databases
                    |                                    |                    |
                    +----------- Policy Rules ------------                   LANs (internal computers)</code></pre>

<h3>4–5. Intrusion Detection and Antivirus/Antispyware Software</h3>
<ul>
<li><strong>Intrusion detection systems:</strong> Monitor "hot spots" on corporate networks to detect and deter intruders, examining events as they happen to catch attacks in progress.</li>
<li><strong>Antivirus and antispyware software:</strong> Checks computers for the presence of malware and can often eliminate it — but requires continual updating.</li>
<li><strong>Unified Threat Management (UTM) systems:</strong> Combine multiple security tools (firewall, antivirus, intrusion detection, etc.) into a single appliance.</li>
</ul>

<h3>6. Securing Wireless Networks</h3>
<ul>
<li><strong>WEP security</strong> provides some protection by assigning a unique name to the network's SSID (and not broadcasting it) and using it alongside VPN technology.</li>
<li>The Wi-Fi Alliance finalized the <strong>WPA2</strong> specification, replacing WEP with stronger standards — continually changing keys and an encrypted authentication system with a central server.</li>
</ul>

<h3>7. Encryption</h3>
<p><strong>Encryption</strong> transforms text or data into cipher text that cannot be read by unintended recipients. Two major network encryption methods:</p>
<ol>
<li><strong>Secure Sockets Layer (SSL)</strong> and its successor <strong>Transport Layer Security (TLS)</strong></li>
<li><strong>Secure Hypertext Transfer Protocol (S-HTTP)</strong></li>
</ol>

<div class="callout-yellow">
<strong>Remember (exam point) — Two Methods of Encryption:</strong>
<ul>
<li><strong>Symmetric key encryption:</strong> Sender and receiver use a single, shared key.</li>
<li><strong>Public key encryption:</strong> Uses two mathematically related keys — a public key and a private key. The sender encrypts the message with the recipient's public key; the recipient decrypts it with their own private key.</li>
</ul>
</div>

<pre><code>Sender --> [Encrypt with recipient's Public Key] --> Scrambled Message
                                                              |
                                                              v
Recipient <-- [Decrypt with own Private Key] <---------------</code></pre>

<h3>8. Digital Certificates and Public Key Infrastructure (PKI)</h3>
<ul>
<li><strong>Digital certificate:</strong> A data file used to establish the identity of users and electronic assets, protecting online transactions. It relies on a trusted third party called a <strong>Certification Authority (CA)</strong> to validate a user's identity.</li>
<li>The CA verifies the user's identity, stores the information on a CA server, and generates an encrypted digital certificate containing owner ID information and a copy of the owner's public key.</li>
<li><strong>Public Key Infrastructure (PKI):</strong> The use of public key cryptography working with a certificate authority — widely used in e-commerce.</li>
</ul>

<pre><code>Institution/Individual ---> Request Certificate ---> Certification Authority (CA)
         ^                                                      |
         |                                                      v
         +---------------- Certificate Received -----------------
                  (Contains: Serial Number, Version, Issuer Name,
                   Issuance/Expiration Date, Subject Name,
                   Subject Public Key, CA Signature)</code></pre>

<h3>9–10. Ensuring System Availability & Fault-Tolerant Systems</h3>
<ul>
<li>Online transaction processing requires <strong>100% availability</strong> with no downtime.</li>
<li><strong>Fault-tolerant computer systems</strong> provide continuous availability (e.g., for stock markets) by using redundant hardware, software, and power supply components to ensure uninterrupted service.</li>
</ul>

<h3>11–12. Controlling Network Traffic & Security Outsourcing</h3>
<ul>
<li><strong>Deep Packet Inspection (DPI):</strong> Examines data files, sorts low-priority material, and can block video and music downloads to manage network traffic.</li>
<li><strong>Security outsourcing:</strong> Many firms use <strong>Managed Security Service Providers (MSSPs)</strong> to handle security monitoring and management.</li>
</ul>

<h3>13. Security in the Cloud</h3>
<p>Responsibility for security ultimately resides with the company that owns the data. Firms must ensure cloud providers offer adequate protection regarding:</p>
<ul>
<li>Where data are stored</li>
<li>Meeting corporate requirements and legal privacy laws</li>
<li>Segregation of data from other clients</li>
<li>Audits and security certifications</li>
</ul>
<p>These expectations are typically formalized in <strong>Service Level Agreements (SLAs)</strong>.</p>

<h3>14. Securing Mobile Platforms</h3>
<p>Security policies should cover special requirements for mobile devices, including guidelines for platforms and applications. <strong>Mobile device management tools</strong> provide authorization, inventory records, control over updates, the ability to lock down or erase lost devices, and encryption. Software can also segregate corporate data from personal data on devices.</p>

<h3>15. Ensuring Software Quality</h3>
<ul>
<li><strong>Software metrics:</strong> Objective assessments of a system expressed as quantified measurements — e.g., number of transactions, online response time, payroll checks printed per hour, known bugs per hundred lines of code.</li>
<li>Early and regular testing is essential.</li>
<li><strong>Walkthrough:</strong> A review of a specification or design document by a small group of qualified people.</li>
<li><strong>Debugging:</strong> The process by which errors are eliminated.</li>
</ul>

<div class="callout-green">
<strong>Best practice:</strong> Combine multiple layers of defense — firewalls, encryption, strong authentication, employee training, and regular audits — rather than relying on a single safeguard. This is the principle of "defense in depth."
</div>

<div class="divider"></div>

<h2>Summary & Key Takeaways</h2>
<p>Information systems face threats from technical weaknesses, natural disasters, external hackers, and internal employees. Protecting these systems requires a combination of <strong>organizational controls</strong> (general and application controls, risk assessment, security policy, disaster recovery/business continuity planning, audits) and <strong>technical tools</strong> (firewalls, encryption, digital certificates, identity management, antivirus software, and mobile/cloud security measures).</p>

<div class="callout-yellow">
<strong>Remember (exam point):</strong>
<ul>
<li>Security = prevention of unauthorized access/damage; Controls = ensuring accuracy, reliability, and compliance.</li>
<li>Malware includes viruses, worms, Trojan horses, ransomware, and spyware — each behaves differently.</li>
<li>DoS = single-source attack; DDoS = multi-source (botnet) attack.</li>
<li>Phishing, Pharming, and Evil Twins are related but distinct identity/data theft techniques.</li>
<li>General controls apply organization-wide; Application controls apply to a specific system.</li>
<li>Symmetric key encryption uses one shared key; Public key encryption uses a public/private key pair.</li>
<li>Disaster recovery planning restores IT services; business continuity planning restores business operations.</li>
</ul>
</div>`,
  summary: {
    topic: 'Securing Information Systems: vulnerabilities, threats, controls, and safeguarding tools/technologies in organizational IT environments',
    subTopics: [
      'Security and Controls: Key Definitions',
      'Why Information Systems Are Vulnerable',
      'Contemporary Security Challenges and Vulnerabilities',
      'Internet and Wireless Security Challenges',
      'Malware: Viruses, Worms, Trojan Horses & More',
      'Hackers and Computer Crime',
      'Internal Threats: Employees',
      'Software Vulnerability & Microprocessor Design Flaws',
      'Business Value of Security and Control',
      'Electronic Evidence and Computer Forensics',
      'Information Systems Controls (General & Application)',
      'Risk Assessment',
      'Security Policy and Identity Management',
      'Disaster Recovery and Business Continuity Planning',
      'Information Systems Audit',
      'Tools and Technologies for Safeguarding Information Resources',
    ],
    definitions: [
      { term: 'Security', meaning: 'Policies, procedures, and technical measures used to prevent unauthorized access, alteration, theft, or physical damage to information systems.' },
      { term: 'Controls', meaning: 'Methods, policies, and organizational procedures that ensure safety of assets, accuracy of accounting records, and adherence to management standards.' },
      { term: 'Malware', meaning: 'Malicious software, including viruses, worms, trojan horses, spyware, and ransomware.' },
      { term: 'Virus', meaning: 'A rogue software program that attaches itself to other programs or files to execute, usually without user knowledge.' },
      { term: 'Worm', meaning: 'An independent program that copies itself from one computer to another over a network without needing a host file.' },
      { term: 'Trojan Horse', meaning: 'Software that appears benign but performs unexpected, often malicious, actions.' },
      { term: 'SQL Injection Attack', meaning: 'Hackers submit data to Web forms to exploit unprotected software and send rogue SQL queries to a database.' },
      { term: 'Ransomware', meaning: 'Malware that locks or encrypts a victim\'s data/system until a ransom is paid.' },
      { term: 'Spyware', meaning: 'Small programs that install themselves surreptitiously to monitor web activity and serve advertising.' },
      { term: 'Key Logger', meaning: 'Software that records every keystroke on a computer to steal passwords and other sensitive data.' },
      { term: 'Hacker/Cracker', meaning: 'An individual who gains unauthorized access to a computer system; "cracker" implies criminal intent.' },
      { term: 'Cyber Vandalism', meaning: 'Intentional disruption, defacement, or destruction of a website or corporate information system.' },
      { term: 'Spoofing', meaning: 'Misrepresenting oneself using fake e-mail addresses or redirecting a Web link to a masquerading destination.' },
      { term: 'Sniffer', meaning: 'An eavesdropping program that monitors information traveling over a network to steal data.' },
      { term: 'Denial-of-Service Attack (DoS)', meaning: 'Flooding a server with false requests from a single source to crash a network.' },
      { term: 'Distributed Denial-of-Service Attack (DDoS)', meaning: 'Using numerous computers (a botnet) to launch a coordinated DoS attack.' },
      { term: 'Botnet', meaning: 'A network of "zombie" PCs infiltrated by bot malware, used to deliver spam and malware or launch attacks.' },
      { term: 'Computer Crime', meaning: 'Any violation of criminal law involving knowledge of computer technology for its perpetration, investigation, or prosecution.' },
      { term: 'Identity Theft', meaning: 'Theft of personal information (SSN, license, credit card numbers) to impersonate someone else.' },
      { term: 'Phishing', meaning: 'Setting up fake websites or e-mails resembling legitimate businesses to collect confidential personal data.' },
      { term: 'Evil Twins', meaning: 'Wireless networks that pretend to offer trustworthy Wi-Fi connections to the Internet.' },
      { term: 'Pharming', meaning: 'Redirecting users to a bogus Web page even when they type the correct address into their browser.' },
      { term: 'Click Fraud', meaning: 'Fraudulently clicking an online ad without intent to learn more or purchase, inflating advertising costs.' },
      { term: 'Cyberterrorism/Cyberwarfare', meaning: 'Politically or militarily motivated attacks carried out via the Internet or digital systems.' },
      { term: 'Social Engineering', meaning: 'Tricking employees into revealing passwords or confidential information by posing as a legitimate company member.' },
      { term: 'Patch', meaning: 'A small piece of software released to repair a flaw in commercial software.' },
      { term: 'General Controls', meaning: 'Controls governing the design, security, and use of computer programs/data files across the entire IT infrastructure.' },
      { term: 'Application Controls', meaning: 'Controls unique to a specific computerized application, covering input, processing, and output.' },
      { term: 'Risk Assessment', meaning: 'Determines the level of risk to a firm if a specific activity/process is not properly controlled, based on threat type, probability, and potential loss.' },
      { term: 'Security Policy', meaning: 'Ranks information risks, identifies acceptable security goals, and defines mechanisms to achieve them.' },
      { term: 'Acceptable Use Policy (AUP)', meaning: 'Defines acceptable uses of a firm\'s information resources and computing equipment.' },
      { term: 'Identity Management', meaning: 'Business processes and tools to identify valid system users, authenticate them, and control their access.' },
      { term: 'Disaster Recovery Planning', meaning: 'Plans for restoring disrupted computing and communications services after a disaster.' },
      { term: 'Business Continuity Planning', meaning: 'Plans focused on restoring actual business operations after a disaster.' },
      { term: 'Information Systems Audit', meaning: 'Examination of a firm\'s overall security environment and controls governing individual information systems.' },
      { term: 'Firewall', meaning: 'Combination of hardware and software that prevents unauthorized users from accessing private networks.' },
      { term: 'Intrusion Detection System', meaning: 'Monitors hot spots on networks to detect and deter intruders in real time.' },
      { term: 'Unified Threat Management (UTM)', meaning: 'A system combining multiple security tools (firewall, antivirus, intrusion detection) into one appliance.' },
      { term: 'Encryption', meaning: 'Transforming text or data into cipher text that cannot be read by unintended recipients.' },
      { term: 'Symmetric Key Encryption', meaning: 'Encryption method where sender and receiver use a single, shared key.' },
      { term: 'Public Key Encryption', meaning: 'Encryption using two mathematically related keys — a public key (to encrypt) and a private key (to decrypt).' },
      { term: 'Digital Certificate', meaning: 'A data file used to establish identity of users/electronic assets for protecting online transactions, validated by a Certification Authority.' },
      { term: 'Public Key Infrastructure (PKI)', meaning: 'Use of public key cryptography working with a certificate authority, widely used in e-commerce.' },
      { term: 'Fault-Tolerant Computer Systems', meaning: 'Systems with redundant hardware, software, and power supplies providing continuous, uninterrupted service.' },
      { term: 'Deep Packet Inspection (DPI)', meaning: 'Examines data files and sorts low-priority network traffic, able to block video/music downloads.' },
      { term: 'Managed Security Service Provider (MSSP)', meaning: 'A third-party company that monitors and manages security services for client organizations.' },
      { term: 'Service Level Agreement (SLA)', meaning: 'A formal agreement defining the level of service (including security) a cloud provider must deliver to a client.' },
      { term: 'Software Metrics', meaning: 'Objective, quantified measurements used to assess system quality (e.g., bugs per hundred lines of code).' },
      { term: 'Walkthrough', meaning: 'A review of a specification or design document by a small group of qualified people.' },
      { term: 'Debugging', meaning: 'The process by which software errors are identified and eliminated.' },
    ],
    keyPoints: [
      'Security prevents unauthorized access/damage; Controls ensure accuracy, reliability, and compliance with standards.',
      'Systems are vulnerable due to network accessibility, hardware/software problems, disasters, uncontrolled network use, and loss/theft of devices.',
      'Web-based applications face security risks at every layer: client, communication lines, servers, and corporate systems/databases.',
      'Wi-Fi networks are easily penetrated via sniffer programs and war driving, since SSIDs broadcast repeatedly and radio bands are easy to scan.',
      'Viruses need a host file to execute; worms are independent programs that self-replicate across networks.',
      'Trojan horses look harmless but perform unexpected malicious actions; SQL injection exploits unprotected Web forms; ransomware locks data for payment.',
      'Spyware and key loggers secretly monitor user activity and steal sensitive data such as passwords.',
      'DoS attacks come from a single source; DDoS attacks use botnets (networks of zombie PCs) from multiple sources, making them harder to stop.',
      'Computer crime treats the computer as either the target (e.g., unauthorized access) or the instrument (e.g., theft of trade secrets) of a crime.',
      'Phishing, Pharming, and Evil Twins are related but distinct identity-theft techniques; don\'t confuse them.',
      'Security threats often originate internally through employee error or social engineering (tricking employees into revealing passwords).',
      'Zero software defects are impossible in large programs; patches fix known flaws but exploits can appear faster than patches are released.',
      'Microprocessor design flaws can affect nearly every chip made in the last 20 years, exposing data thought to be fully protected.',
      'Key regulations: HIPAA (medical data), Gramm-Leach-Bliley Act (financial data), and Sarbanes-Oxley Act (financial reporting integrity).',
      'Computer forensics scientifically collects, preserves, and analyzes digital evidence for use in court, including hidden/ambient data.',
      'General controls apply organization-wide across six types: software, hardware, computer operations, data security, implementation, and administrative controls.',
      'Application controls (input, processing, output) ensure a specific application processes only authorized, accurate data.',
      'Risk assessment calculates expected annual loss using threat probability and potential loss value.',
      'A security policy drives an Acceptable Use Policy (AUP) and authorization policies that define user access levels.',
      'Disaster recovery planning restores IT services; business continuity planning restores overall business operations — both require identifying critical systems via business impact analysis.',
      'Information systems audits rank control weaknesses and assess their financial/organizational impact.',
      'Firewalls combine hardware and software to block unauthorized access using static packet filtering, stateful inspection, NAT, and application proxy filtering.',
      'Intrusion detection systems and antivirus/antispyware software must be continually updated; UTM systems combine multiple tools in one appliance.',
      'WPA2 replaced WEP with stronger, continually changing encryption keys for wireless security.',
      'Symmetric key encryption uses one shared key; public key encryption uses a public key (encrypt) and private key (decrypt) pair — the basis of PKI and digital certificates.',
      'Digital certificates, validated by a Certification Authority (CA), establish identity and protect online transactions; PKI is widely used in e-commerce.',
      'Fault-tolerant systems use redundant hardware/software/power to guarantee 100% uptime for critical applications like stock markets.',
      'Cloud security responsibility lies with the data-owning company; SLAs define data location, legal compliance, segregation, and audit requirements.',
      'Mobile device management tools provide authorization, inventory tracking, update control, remote lock/erase, and encryption for mobile security.',
      'Software quality is ensured through metrics, early/regular testing, walkthroughs, and debugging.',
    ],
  },
},

{
  id: 10,
  title: 'Managing Global Systems',
  content: `<span class="lesson-badge">LESSON 10</span>
<h1>Managing Global Systems</h1>
<div class="meta-info">ICT2162 <span>•</span> 16 min read</div>

<div class="callout-blue">
<strong>What We'll Cover Today</strong>
<ul>
<li>What major factors are driving the internationalization of business?</li>
<li>What are the alternative strategies for developing global businesses?</li>
<li>What are the challenges posed by global information systems, and what management solutions address them?</li>
<li>What are the issues and technical alternatives to consider when developing international information systems?</li>
</ul>
</div>

<div class="divider"></div>

<h2>Why Businesses Are Going Global</h2>
<p>Modern businesses increasingly operate across national borders. Products are designed in one country, manufactured in another, and sold worldwide — all coordinated through information systems and networks.</p>

<h3>Key Drivers of Internationalization</h3>
<ul>
<li><strong>Globalization</strong> - Businesses increasingly operate across national boundaries, creating a connected global economy.</li>
<li><strong>International trade</strong> - Products are designed, sourced, and manufactured in different countries.</li>
<li><strong>Global collaboration</strong> - Companies depend on international suppliers and partners.</li>
</ul>

<h3>Real-World Example: Apple iPhone's Global Supply Chain</h3>
<p>The iPhone is <strong>designed</strong> by Apple engineers in the United States, with components <strong>sourced</strong> from countries such as Japan, South Korea, Taiwan, France, Germany, and Italy. <strong>Manufacturing and assembly</strong> are handled by Foxconn in China. Networks and information systems help coordinate global suppliers, production processes, and business operations across these countries.</p>

<div class="callout-blue">
<strong>Case Reference:</strong> The Bel Group (maker of <em>The Laughing Cow</em> cheese) is cited as a well-known example of a company achieving international success by effectively managing its global operations and brand across many countries.
</div>

<div class="divider"></div>

<h2>Developing an International Information Systems Architecture</h2>
<p>An <strong>international information systems architecture</strong> consists of the basic information systems required by organizations to coordinate worldwide trade and other activities.</p>

<h3>Basic Strategy</h3>
<ul>
<li>Understand the global environment in which your firm is operating</li>
<li>Identify the business drivers</li>
</ul>
<p>The architecture is then built around:</p>
<ul>
<li>Corporate strategy</li>
<li>Structure of the organization</li>
<li>Management issues</li>
<li>Technology platform</li>
</ul>

<pre><code>International Information Systems Architecture (funnel, top to bottom)

Global Environment: Business Drivers and Challenges
         ↓
Corporate Global Strategies
         ↓
Organization Structure
         ↓
Management and Business Processes
         ↓
Technology Platform
</code></pre>

<div class="divider"></div>

<h2>Business Drivers and Challenges</h2>
<p>Global business drivers fall into two categories: <strong>General Cultural Factors</strong> and <strong>Specific Business Factors</strong>.</p>

<h3>General Cultural Factors</h3>
<ul>
<li>Global communication and transportation technologies
  <ul>
    <li>Global Village</li>
    <li>Global Culture</li>
  </ul>
</li>
<li>Development of global culture</li>
<li>Emergence of global social norms</li>
<li>Political stability</li>
<li>Global knowledge base</li>
</ul>

<h3>Specific Business Factors</h3>
<ul>
<li>Global markets</li>
<li>Global production and operations</li>
<li>Global coordination</li>
<li>Global workforce</li>
</ul>

<div class="divider"></div>

<h2>Challenges and Obstacles to Global Business Systems</h2>

<h3>Global Challenges</h3>
<ul>
<li><strong>Cultural particularism:</strong> Regionalism, nationalism, language differences</li>
<li><strong>Social expectations:</strong> Brand-name expectations, work hours</li>
<li><strong>Political laws:</strong> Transborder data and privacy laws, commercial regulations</li>
</ul>

<h3>Specific (Technical) Challenges</h3>
<ul>
<li><strong>Standards:</strong> Different Electronic Data Interchange (EDI), e-mail, and telecommunications standards</li>
<li><strong>Reliability:</strong> Phone networks not uniformly reliable</li>
<li><strong>Speed:</strong> Different data transfer speeds, many slower than the United States</li>
<li><strong>Personnel:</strong> Shortages of skilled consultants</li>
</ul>

<div class="callout-red">
<strong>Common Mistake:</strong> Assuming that systems and processes that work smoothly in the home country will work identically abroad. Cultural, legal, and technical differences must always be planned for in global systems design.
</div>

<div class="divider"></div>

<h2>Global Strategies and Business Organization</h2>
<p>Companies choose one of <strong>four main global business strategies</strong>, depending on how centralized they want their decisions and operations to be.</p>

<pre><code>1. Domestic Exporter  — Centralized business activities in the home country.
   Example: Caterpillar Corporation

2. Multinational       — Central financial control, decentralized foreign operations.
   Example: General Motors, Chrysler, Intel

3. Franchiser          — Home-country product/business model replicated via foreign franchisees.
   Example: McDonald's, Mrs. Fields Cookies, KFC

4. Transnational       — Globally integrated operations managed beyond national boundaries.
</code></pre>

<h3>Organizational Structures</h3>
<ul>
<li><strong>Centralized:</strong> Decisions and activities managed mainly from the home country</li>
<li><strong>Decentralized:</strong> Decisions and activities distributed to local foreign units</li>
<li><strong>Coordinated:</strong> Units across countries work together as an integrated organization</li>
</ul>

<pre><code>Global Business Strategy and Structure

BUSINESS FUNCTION      DOMESTIC EXPORTER   MULTINATIONAL   FRANCHISER    TRANSNATIONAL
Production              Centralized         Dispersed       Coordinated   Coordinated
Finance/Accounting      Centralized         Centralized     Centralized   Coordinated
Sales/Marketing         Mixed               Dispersed       Coordinated   Coordinated
Human Resources         Centralized         Centralized     Coordinated   Coordinated
Strategic Management    Centralized         Centralized     Centralized   Coordinated
</code></pre>

<div class="divider"></div>

<h2>Global Systems to Fit the Strategy</h2>
<p>Once a company picks its global strategy, it must adopt a matching <strong>systems configuration</strong> — defining how systems are developed and who operates them.</p>

<pre><code>Four Types of Systems Configuration

1. Centralized Systems    — Developed and operated at the domestic home base.
2. Duplicated Systems     — Developed at home base, replicated/operated by autonomous foreign units.
3. Decentralized Systems  — Each foreign unit develops its own systems based on local needs.
4. Networked Systems      — Development and operations integrated and coordinated across all units.
</code></pre>

<pre><code>SYSTEM CONFIGURATION    Domestic Exporter   Multinational   Franchiser   Transnational
Centralized                   X
Duplicated                                                       X
Decentralized                 x                X                x
Networked                                       x                            X

(X = dominant pattern, x = emerging pattern)
</code></pre>

<div class="callout-yellow">
<strong>Remember for exams:</strong> Domestic Exporters rely mainly on <strong>Centralized</strong> systems, Multinationals favor <strong>Decentralized</strong> systems, Franchisers rely on <strong>Duplicated</strong> systems, and Transnationals use fully <strong>Networked</strong> systems. Each strategy also shows an "emerging" pattern pushing toward more decentralization or networking over time.
</div>

<div class="divider"></div>

<h2>Management Challenges in Developing Global Systems</h2>
<ul>
<li>Agreeing on common user requirements</li>
<li>Introducing changes in business processes</li>
<li>Coordinating applications development</li>
<li>Coordinating software releases</li>
<li>Encouraging local users to support global systems</li>
</ul>

<h3>The Management Solution: Implementation</h3>
<p><strong>Agreeing on Common User Requirements</strong></p>
<ul>
<li>Identify core business processes and common support systems across all divisions</li>
<li>Develop a common language for discussing the business</li>
</ul>

<p><strong>Introducing Changes in Business Processes</strong></p>
<ul>
<li>Involve users in change design and explain the benefits of change</li>
</ul>

<p><strong>Coordinating Applications Development</strong></p>
<ul>
<li>Use an incremental approach — implement changes in small steps toward a long-term vision</li>
</ul>

<p><strong>Coordinating Software Releases</strong></p>
<ul>
<li>Establish procedures to ensure all units update their software at the same time</li>
</ul>

<p><strong>Encouraging Local Users to Support Global Systems</strong></p>
<ul>
<li>User Involvement — <strong>Cooptation:</strong> include opposing groups in designing and implementing solutions without giving up control over the direction of change</li>
<li>Shared Ownership</li>
<li>Centers of Excellence</li>
</ul>

<div class="divider"></div>

<h2>Technical Issues in Developing International Information Systems</h2>
<ol>
<li>Finding some way to standardize a global computing platform</li>
<li>Finding specific, user-friendly software applications</li>
<li>Networking problems</li>
<li>Systems integration and connectivity</li>
</ol>

<h3>Computing Platforms and Systems Integration</h3>
<ul>
<li>Diverse computing platforms</li>
<li>Integration of existing systems</li>
<li>Global technical standards</li>
<li>Cultural challenges to building global businesses</li>
<li>Acceptable interfaces between systems</li>
<li>Communication speeds</li>
</ul>

<h3>Connectivity</h3>
<p><strong>Network Security and Reliability</strong></p>
<ul>
<li>Public Internet services do not guarantee consistent performance or security</li>
<li>Firms often use private networks or <strong>Virtual Private Networks (VPNs)</strong></li>
</ul>

<p><strong>Global Intranets and Extranets</strong></p>
<ul>
<li><strong>Intranets</strong> support internal communication</li>
<li><strong>Extranets</strong> enable information sharing with external business partners</li>
</ul>

<ul>
<li>Infrastructure differences across countries</li>
<li>Impact on e-commerce</li>
</ul>

<h3>Challenges of International Networks</h3>
<ul>
<li>Quality of service</li>
<li>Security costs and tariffs</li>
<li>Network management</li>
<li>Installation delays</li>
<li>Poor quality of international service</li>
<li>Regulatory constraints</li>
<li>Network capacity</li>
</ul>

<div class="callout-green">
<strong>Tip:</strong> Internet penetration still varies widely by country, so always check local infrastructure and connectivity realities before rolling out a global information system.
</div>

<div class="divider"></div>

<h2>Summary & Key Takeaways</h2>
<p>Globalization, international trade, and global collaboration are pushing businesses to operate across borders. Building an <strong>international information systems architecture</strong> requires understanding the global environment, choosing a matching corporate strategy, organization structure, and systems configuration, and solving management and technical challenges along the way.</p>

<div class="callout-yellow">
<strong>Remember for exams:</strong>
<ul>
<li>Internationalization is driven by globalization, international trade, and global collaboration</li>
<li>The international information systems architecture funnel: Global Environment → Corporate Global Strategies → Organization Structure → Management and Business Processes → Technology Platform</li>
<li>Global business drivers = General Cultural Factors + Specific Business Factors</li>
<li>Four global business strategies: Domestic Exporter, Multinational, Franchiser, Transnational</li>
<li>Four systems configurations: Centralized, Duplicated, Decentralized, Networked systems — each strategy has a dominant and an emerging configuration pattern</li>
<li>Management solutions include Cooptation, Shared Ownership, and Centers of Excellence to gain local user support</li>
<li>Technical issues include standardizing platforms, user-friendly software, networking problems, and systems integration/connectivity</li>
</ul>
</div>`,
  summary: {
    topic: 'Managing Global Systems: drivers, strategies, and the management and technical challenges of building international information systems',
    subTopics: [
      'Why Businesses Are Going Global',
      'Key Drivers of Internationalization',
      "Real-World Example: Apple iPhone's Global Supply Chain",
      'Developing an International Information Systems Architecture',
      'Business Drivers and Challenges',
      'General Cultural Factors',
      'Specific Business Factors',
      'Challenges and Obstacles to Global Business Systems',
      'Global Strategies and Business Organization',
      'Organizational Structures',
      'Global Systems to Fit the Strategy',
      'Management Challenges in Developing Global Systems',
      'The Management Solution: Implementation',
      'Technical Issues in Developing International Information Systems',
      'Computing Platforms and Systems Integration',
      'Connectivity',
      'Challenges of International Networks',
    ],
    definitions: [
      { term: 'Globalization', meaning: 'Businesses increasingly operate across national boundaries, creating a connected global economy.' },
      { term: 'International trade', meaning: 'Products are designed, sourced, and manufactured in different countries.' },
      { term: 'Global collaboration', meaning: 'Companies depend on international suppliers and partners to operate.' },
      { term: 'International information systems architecture', meaning: 'The basic information systems required by organizations to coordinate worldwide trade and other activities.' },
      { term: 'Domestic Exporter', meaning: 'A global strategy with centralized business activities in the home country (e.g., Caterpillar Corporation).' },
      { term: 'Multinational', meaning: 'A global strategy with central financial control but decentralized foreign operations (e.g., General Motors, Chrysler, Intel).' },
      { term: 'Franchiser', meaning: 'A global strategy where a home-country product and business model is replicated through foreign franchisees (e.g., McDonald\'s, Mrs. Fields Cookies, KFC).' },
      { term: 'Transnational', meaning: 'A global strategy with globally integrated operations managed beyond national boundaries.' },
      { term: 'Centralized (organizational structure)', meaning: 'Decisions and activities are managed mainly from the home country.' },
      { term: 'Decentralized (organizational structure)', meaning: 'Decisions and activities are distributed to local foreign units.' },
      { term: 'Coordinated (organizational structure)', meaning: 'Units across countries work together as an integrated organization.' },
      { term: 'Centralized Systems', meaning: 'Systems configuration where systems are developed and operated at the domestic home base.' },
      { term: 'Duplicated Systems', meaning: 'Systems configuration where systems are developed at the home base and replicated or operated by autonomous foreign units.' },
      { term: 'Decentralized Systems', meaning: 'Systems configuration where each foreign unit develops its own systems based on local needs.' },
      { term: 'Networked Systems', meaning: 'Systems configuration where systems development and operations are integrated and coordinated across all units.' },
      { term: 'Cultural particularism', meaning: 'Resistance to global standardization caused by regionalism, nationalism, and language differences.' },
      { term: 'Electronic Data Interchange (EDI)', meaning: 'A standard for exchanging business documents electronically; differs across countries, creating integration challenges.' },
      { term: 'Cooptation', meaning: 'Including opposing groups in designing and implementing solutions without giving up control over the direction of change.' },
      { term: 'Shared Ownership', meaning: 'A management solution approach where ownership of global systems is distributed among stakeholders to gain local buy-in.' },
      { term: 'Centers of Excellence', meaning: 'Dedicated units recognized for excellence in specific systems or processes, used to encourage global systems adoption.' },
      { term: 'Virtual Private Network (VPN)', meaning: 'A private network built over the public internet to provide secure, reliable connectivity between global locations.' },
      { term: 'Intranet', meaning: 'A private network that supports internal communication within an organization.' },
      { term: 'Extranet', meaning: 'A network that enables information sharing with external business partners.' },
      { term: 'Quality of service', meaning: 'A measure of network performance reliability, which is a key challenge for international networks.' },
    ],
    keyPoints: [
      'Internationalization of business is driven by globalization, international trade, and global collaboration',
      'The Apple iPhone supply chain illustrates design in the US, components sourced from multiple countries, and assembly by Foxconn in China, all coordinated via IS',
      'International information systems architecture funnel: Global Environment (Business Drivers and Challenges) → Corporate Global Strategies → Organization Structure → Management and Business Processes → Technology Platform',
      'Global business drivers split into General Cultural Factors (communication/transport tech, global village, global culture, social norms, political stability, global knowledge base) and Specific Business Factors (global markets, production/operations, coordination, workforce)',
      'Global challenges to business systems include cultural particularism, social expectations, and political laws',
      'Specific/technical challenges include differing standards (EDI, e-mail, telecom), unreliable phone networks, slower data transfer speeds, and shortages of skilled personnel',
      'Common mistake: assuming home-country systems/processes will work identically abroad without accounting for cultural, legal, and technical differences',
      'Four main global business strategies: Domestic Exporter, Multinational, Franchiser, Transnational — each with real company examples',
      'Organizational structures can be Centralized, Decentralized, or Coordinated across business functions (production, finance, sales, HR, strategic management)',
      'Four systems configurations: Centralized, Duplicated, Decentralized, Networked Systems',
      'Exam point: Domestic Exporters dominantly use Centralized systems, Multinationals use Decentralized systems, Franchisers use Duplicated systems, Transnationals use Networked systems, with emerging patterns pushing further decentralization/networking',
      'Management challenges in global systems: agreeing on common user requirements, introducing process changes, coordinating applications development and software releases, and encouraging local user support',
      'Management solutions: identify core processes and common language, involve users in change design, use incremental development, synchronize software releases, and apply Cooptation, Shared Ownership, and Centers of Excellence',
      'Technical issues: standardizing a global computing platform, finding user-friendly software, solving networking problems, and achieving systems integration and connectivity',
      'Computing platform/integration issues include diverse platforms, integrating existing systems, global technical standards, cultural challenges, system interfaces, and communication speeds',
      'Connectivity concerns: public internet lacks guaranteed performance/security so firms use private networks or VPNs; intranets handle internal communication while extranets support external partner collaboration',
      'International network challenges include quality of service, security costs/tariffs, network management, installation delays, poor international service quality, regulatory constraints, and network capacity',
      'Tip: Internet penetration varies significantly by country, so infrastructure realities must be checked before deploying global systems',
    ],
  },
}




]