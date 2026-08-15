export const courseName = 'E-Business Systems'

export const lessons = [
  {
  id: 1,
  title: 'Introduction to Electronic Commerce',
  content: `
    <span class="lesson-badge">LESSON 01</span>
    <h1>Introduction to Electronic Commerce</h1>
    <div class="meta-info">ICT2142 <span>•</span> 20 min read</div>

    <h2>Course Overview</h2>
    <p>This is the first lecture of <strong>ICT2142 – E-Business Systems</strong>, taught by Akila Brahmana, Department of ICT, Faculty of Technology, University of Ruhuna.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>This course unit is worth <strong>2 credits</strong> and runs for <strong>45 hours</strong> in total — <strong>15 hours</strong> of theory and <strong>30 hours</strong> of practical work.</p>
    </div>

    <h3>Aim of the Module</h3>
    <p>To give students a full understanding of modern <strong>e-business</strong> environments. This means exploring digital business models, technologies, and emerging trends. It also means building the practical skills needed to <strong>analyze</strong>, <strong>design</strong>, and <strong>manage</strong> e-business solutions, and to apply digital technologies effectively.</p>

    <h3>Course Content</h3>
    <ul>
      <li>Introduction to E-Business and E-Commerce</li>
      <li>E-Business Models and Digital Value Creation</li>
      <li>E-Commerce Infrastructure and Technologies</li>
      <li>E-Commerce Payment Systems</li>
      <li>Designing and Developing E-Commerce Websites</li>
      <li>E-Commerce Platforms and Tools</li>
      <li>Digital Marketing for E-Business</li>
      <li>Data Analytics for E-Commerce</li>
      <li>E-Business Security and Legal Aspects</li>
      <li>Logistics, Fulfilment and Supply Chain in E-Business</li>
      <li>Emerging Trends in E-Business</li>
    </ul>

    <h3>Practical Work</h3>
    <ul>
      <li>Technical evaluation of popular e-commerce platforms</li>
      <li>Building a simple prototype e-commerce store</li>
      <li>Basic integration with a payment gateway</li>
    </ul>

    <h3>Evaluation Criteria</h3>
    <ul>
      <li><strong>Theory Exam</strong> — 70%</li>
      <li><strong>Continuous Assessment</strong> — 30%</li>
      <li>&nbsp;&nbsp;Quizzes — 10%</li>
      <li>&nbsp;&nbsp;Mini Project — 20%</li>
    </ul>

    <h3>References</h3>
    <ul>
      <li><em>Electronic Commerce: A Managerial and Social Networks Perspective</em> by Efraim Turban, David King, Jae Kyu Lee, Ting-Peng Liang, Deborrah C. Turban (9th Edition, 2018)</li>
      <li><em>Introduction to Electronic Commerce and Social Commerce</em> by Efraim Turban, Judy Whiteside, David King, Jon Outland (4th Edition, 2017)</li>
    </ul>

    <div class="divider"></div>

    <h2>Objectives of This Lesson</h2>
    <ul>
      <li>Understand the <strong>evolution</strong> of electronic business</li>
      <li>Know the difference between <strong>e-business</strong> and <strong>e-commerce</strong></li>
      <li>Understand <strong>digital business ecosystems</strong></li>
      <li>Learn about current global and Sri Lankan <strong>e-commerce trends</strong></li>
      <li>Learn how to carry out a <strong>SWOT Analysis</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>What is E-Business and E-Commerce?</h2>

    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Electronic business (e-business)</strong> means doing business electronically — completing business processes over open networks, using information instead of physical business processes.</p>
    </div>

    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Electronic commerce (e-commerce)</strong> is the buying and selling of goods and services over an electronic network, mainly the internet.</p>
    </div>

    <h3>E-Business vs E-Commerce</h3>
    <p><strong>E-Business</strong> is bigger than <strong>E-Commerce</strong>. It is a collection of:</p>
    <ul>
      <li>E-commerce</li>
      <li>Customer relationship management (CRM)</li>
      <li>Supply chain management (SCM)</li>
      <li>Knowledge management</li>
      <li>Business intelligence</li>
      <li>Collaborative technologies</li>
    </ul>
    <p>E-business also connects to other areas such as <strong>enterprise resource management</strong>, <strong>online activities between businesses</strong>, and <strong>electronic transfer within a firm</strong> — all built around a central e-business hub.</p>

    <h3>Comparison Table</h3>
    <pre><code>BASIS                    | E-COMMERCE                 | E-BUSINESS
--------------------------------------------------------------------------
Meaning                   | Trading of merchandise      | Running a business using
                          | over the internet            | the internet
What is it?               | Subset                       | Superset
Limited to monetary       | Yes                          | No
transactions?
What they carry out       | Commercial transactions      | Business transactions
Requires                  | Website                      | Website, CRM, ERP, etc.
Network used               | Internet                     | Internet, Intranet, Extranet</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>E-Commerce</strong> is a <strong>subset</strong> of <strong>E-Business</strong>. All e-commerce is e-business, but not all e-business is e-commerce.</p>
    </div>

    <div class="divider"></div>

    <h2>Objectives of E-Commerce</h2>
    <p>The main objective is to increase the <strong>speed</strong> and <strong>efficiency</strong> of business transactions and processes.</p>
    <p>Other objectives include:</p>
    <ul>
      <li>Enhanced competitiveness</li>
      <li>Job creation</li>
      <li>Economic growth</li>
      <li>Lower prices for goods and services through competition</li>
      <li>Streamlined and simpler business processes</li>
    </ul>

    <div class="divider"></div>

    <h2>Categories of E-Commerce</h2>
    <p>There are six general categories of e-commerce:</p>
    <ol>
      <li><strong>Business-to-Business (B2B)</strong></li>
      <li><strong>Business-to-Consumer (B2C)</strong></li>
      <li><strong>Consumer-to-Consumer (C2C)</strong></li>
      <li><strong>Consumer-to-Business (C2B)</strong></li>
      <li><strong>Business-to-Administration (B2A)</strong></li>
      <li><strong>Consumer-to-Administration (C2A)</strong></li>
    </ol>

    <h3>Details of Each Category</h3>
    <pre><code>CATEGORY                     | DESCRIPTION                                    | EXAMPLES
------------------------------------------------------------------------------------------
Business-to-Business (B2B)    | All electronic transactions of goods or        | Producers and traditional
                               | services conducted between companies           | commerce wholesalers

Business-to-Consumer (B2C)    | The retail part of e-commerce, similar to      | Computers, software, books,
                               | traditional retail trade                       | shoes, cars, food, financial
                               |                                                 | products, digital publications

Consumer-to-Consumer (C2C)    | All electronic transactions of goods or        | eBay.com
                               | services conducted between consumers           |

Consumer-to-Business (C2B)    | Individuals offer services or products for     | Logo creation
                               | sale to companies looking for exactly that     |

Business-to-Administration    | All online transactions between companies      | Social security, employment,
(B2A)                          | and public administration                      | legal documents and registers

Consumer-to-Administration    | All electronic transactions between            | Distance learning, medical
(C2A)                          | individuals and public administration          | appointments, payment of
                               |                                                 | health services</code></pre>

    <div class="divider"></div>

    <h2>Evolution of E-Business</h2>
    <p>E-Business developed through five key stages:</p>
    <ol>
      <li><strong>Pre-Internet Era</strong> (1940s–1980s)</li>
      <li><strong>The Internet Boom</strong> (1990s)</li>
      <li><strong>Maturation and Gateways</strong> (2000s)</li>
      <li><strong>Mobile and Social Commerce</strong> (2010s)</li>
      <li><strong>Intelligent Digital Ecosystems</strong> (Present)</li>
    </ol>

    <h3>Pre-Internet Era (1940s–1980s)</h3>
    <ul>
      <li>Began with basic electronic messaging during the <strong>1948 Berlin airlift</strong>, sent via telex.</li>
      <li>In 1975, <strong>Computer-to-Computer Electronic Data Interchange (EDI)</strong> was introduced, letting businesses exchange invoices and orders securely.</li>
    </ul>

    <h3>The Internet Boom (1990s)</h3>
    <ul>
      <li>The <strong>World Wide Web</strong> launched in 1991, bringing business online.</li>
      <li>The first secure online <strong>credit card transaction</strong> took place in 1994.</li>
      <li>Retail giants like <strong>Amazon</strong> and <strong>eBay</strong> launched, changing consumer shopping.</li>
      <li><strong>IBM</strong> officially popularized the term "e-business" in 1997.</li>
    </ul>

    <h3>Maturation and Gateways (2000s)</h3>
    <ul>
      <li>E-business expanded rapidly after recovering from the <strong>dot-com bubble</strong> burst.</li>
      <li>Secure payment platforms like <strong>PayPal</strong> made online buying trusted and mainstream.</li>
    </ul>

    <h3>Mobile and Social Commerce (2010s)</h3>
    <ul>
      <li>Smartphone adoption shifted traffic to mobile apps (<strong>m-commerce</strong>).</li>
      <li>Social media platforms integrated direct purchasing options.</li>
    </ul>

    <h3>Intelligent Digital Ecosystems (Present)</h3>
    <ul>
      <li>Uses <strong>cloud computing</strong>, <strong>artificial intelligence</strong>, and <strong>big data</strong> for personalized shopping.</li>
      <li>Merges online and physical stores into smooth <strong>omnichannel</strong> experiences.</li>
    </ul>

    <div class="divider"></div>

    <h2>Advantages of E-Commerce</h2>
    <ul>
      <li>Faster buying and selling process, and products are easy to find</li>
      <li>Buying and selling <strong>24/7</strong></li>
      <li>More reach to customers, with no real geographic limitations</li>
      <li>No need for physical company set-ups</li>
      <li>Low operational costs and better quality of service</li>
      <li>Easy to start and manage a business</li>
      <li>Customers can easily pick products from different providers without moving around physically</li>
    </ul>

    <h2>Disadvantages of E-Commerce</h2>
    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>E-commerce also comes with real risks:</p>
      <ul>
        <li>Perishable grocery products are much harder to sell online</li>
        <li>Anyone, good or bad, can easily start a business — many bad sites end up taking customers' money</li>
        <li>There is no guarantee of product quality</li>
        <li>No one can buy anything during a site crash</li>
        <li>There is little direct customer-to-company interaction, so customer loyalty is always uncertain</li>
        <li>Hackers constantly look for opportunities — e-commerce sites, services, and payment gateways are always prone to attack</li>
      </ul>
    </div>

    <div class="divider"></div>

    <h2>SWOT Analysis</h2>
    <p>A <strong>SWOT Analysis</strong> is a tool used to study a business unit and its environment.</p>
    <ol>
      <li>First, the analyst looks into the business unit to identify its <strong>Strengths</strong> and <strong>Weaknesses</strong>.</li>
      <li>Then, the analyst reviews the operating environment to identify <strong>Opportunities</strong> and <strong>Threats</strong>.</li>
    </ol>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>In-Class Activity:</strong> Conduct a SWOT Analysis for <strong>DELL</strong>.</p>
    </div>
  `,
  summary: {
    topic: 'Introduction to E-Business and E-Commerce',
    subTopics: [
      'Course Overview',
      'Aim of the Module',
      'Course Content',
      'Practical Work',
      'Evaluation Criteria',
      'References',
      'Objectives of This Lesson',
      'What is E-Business and E-Commerce?',
      'E-Business vs E-Commerce',
      'Objectives of E-Commerce',
      'Categories of E-Commerce',
      'Evolution of E-Business',
      'Advantages of E-Commerce',
      'Disadvantages of E-Commerce',
      'SWOT Analysis',
    ],
    definitions: [
      { term: 'Electronic Business (E-Business)', meaning: 'Doing business electronically by completing business processes over open networks, using information instead of physical business processes.' },
      { term: 'Electronic Commerce (E-Commerce)', meaning: 'The buying and selling of goods and services over an electronic network, primarily the internet.' },
      { term: 'Electronic Data Interchange (EDI)', meaning: 'A 1975 technology that let computers exchange business invoices and orders securely between businesses.' },
      { term: 'Business-to-Business (B2B)', meaning: 'Electronic transactions of goods or services conducted between companies, such as producers and wholesalers.' },
      { term: 'Business-to-Consumer (B2C)', meaning: 'The retail side of e-commerce, where businesses sell goods directly to consumers.' },
      { term: 'Consumer-to-Consumer (C2C)', meaning: 'Electronic transactions of goods or services conducted directly between consumers, such as on eBay.' },
      { term: 'Consumer-to-Business (C2B)', meaning: 'Individuals offer their services or products for sale to companies, such as freelance logo creation.' },
      { term: 'Business-to-Administration (B2A)', meaning: 'Online transactions between companies and public administration, such as social security or legal registers.' },
      { term: 'Consumer-to-Administration (C2A)', meaning: 'Electronic transactions between individuals and public administration, such as distance learning or medical appointments.' },
      { term: 'M-Commerce', meaning: 'Buying and selling conducted through mobile devices and apps.' },
      { term: 'Omnichannel', meaning: 'A smooth, connected shopping experience that merges online and physical stores.' },
      { term: 'SWOT Analysis', meaning: 'A method of studying a business by identifying its Strengths, Weaknesses, Opportunities, and Threats.' },
    ],
    keyPoints: [
      'E-Commerce is a subset of E-Business; E-Business is the broader superset that includes CRM, SCM, knowledge management, business intelligence, and collaborative technologies.',
      'E-Commerce requires only a website; E-Business requires a website plus systems like CRM and ERP.',
      'E-Commerce runs on the internet only; E-Business runs on the internet, intranet, and extranet.',
      'There are six categories of e-commerce: B2B, B2C, C2C, C2B, B2A, and C2A.',
      'Key milestones: EDI (1975), World Wide Web (1991), first secure online credit card transaction (1994), the term "e-business" popularized by IBM (1997).',
      'E-Business evolved through five stages: Pre-Internet Era, Internet Boom, Maturation and Gateways, Mobile and Social Commerce, and Intelligent Digital Ecosystems.',
      'Advantages of e-commerce include 24/7 trading, wide reach, and low operating costs; disadvantages include security risks, no guarantee of product quality, and weaker customer loyalty.',
      'A SWOT Analysis first identifies internal Strengths and Weaknesses, then reviews the external environment for Opportunities and Threats.',
    ],
  },
},

{
  id: 2,
  title: 'E-Business Models and Digital Value Creation',
  content: `
    <span class="lesson-badge">LESSON 02</span>
    <h1>E-Business Models and Digital Value Creation</h1>
    <div class="meta-info">ICT2142 <span>•</span> 15 min read</div>

    <h2>Objectives</h2>
    <ul>
      <li>Define a <strong>business model</strong> and explain its main components</li>
      <li>Tell the difference between <strong>traditional</strong> and <strong>digital</strong> business models</li>
      <li>Explain the <strong>B2B, B2C, C2C, C2B, B2A, C2A</strong> e-business models</li>
      <li>Explain how <strong>platform-based</strong> business models work</li>
      <li>Describe <strong>subscription</strong>, <strong>freemium</strong>, <strong>on-demand</strong>, and <strong>marketplace</strong> models</li>
      <li>Explain <strong>digital value chains</strong> and <strong>network effects</strong></li>
      <li>Identify which business models real-world digital businesses use</li>
    </ul>

    <div class="divider"></div>

    <h2>What is a Business Model?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>business model</strong> is a company's core strategy for how it <strong>creates</strong>, <strong>delivers</strong>, and <strong>captures</strong> value.</p>
    </div>
    <p>It outlines:</p>
    <ul>
      <li>What product or service is sold</li>
      <li>Who the target customers are</li>
      <li>How the company reaches them</li>
      <li>The plan to cover costs and make a profit</li>
    </ul>
    <p><em>Example:</em> A traditional coffee shop.</p>

    <h2>What is a Digital Business Model?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>digital business model</strong> uses digital technologies to create, deliver, and/or capture value.</p>
    </div>
    <p>Examples:</p>
    <ul>
      <li>E-commerce</li>
      <li>Online marketplaces</li>
      <li>Digital subscriptions</li>
      <li>Mobile applications</li>
      <li>Cloud services</li>
      <li>Digital content</li>
      <li>Online platforms</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Digital business does <strong>not</strong> necessarily mean the product itself is digital. For example:</p>
      <ul>
        <li><strong>Daraz</strong> → physical products + digital platform</li>
        <li><strong>Uber</strong> → physical transportation + digital platform</li>
        <li><strong>Airbnb</strong> → physical accommodation + digital platform</li>
      </ul>
      <p>The digital component changes <strong>how</strong> value is created and delivered — not necessarily <strong>what</strong> is being sold.</p>
    </div>

    <div class="divider"></div>

    <h2>Traditional vs Digital Business Models</h2>
    <pre><code>DIMENSION              | TRADITIONAL MODEL              | DIGITAL MODEL
------------------------------------------------------------------------------------
Customer interaction    | Mainly physical                 | Mainly digital / omnichannel
Market reach             | Often geographically limited    | Potentially global
Distribution             | Physical channels                | Digital + physical / logistics
Operating hours           | Often limited                    | Often 24/7
Customer data              | Relatively limited                | Large volumes of behavioral data
Personalization             | Limited                            | Highly personalized
Scalability                   | Often requires physical capacity  | Often highly scalable
Intermediaries                 | Traditional distributors/retailers | Digital platforms/marketplaces
Revenue models                   | Sales, wholesale, retail            | Subscription, commission,
                                  |                                       advertising, freemium, etc.
Customer feedback                    | Relatively slow                       | Often real-time</code></pre>

    <div class="divider"></div>

    <h2>What is an E-Business Model?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>An <strong>e-business model</strong> describes how an organization uses electronic networks and digital technologies to conduct business activities and create value.</p>
    </div>
    <p>E-Business can include:</p>
    <ul>
      <li>Buying and selling</li>
      <li>Marketing</li>
      <li>Customer service</li>
      <li>Procurement</li>
      <li>Supply-chain management</li>
      <li>Electronic payments</li>
      <li>Partner collaboration</li>
      <li>Business information exchange</li>
    </ul>

    <h3>Categories of E-Business Models</h3>
    <ul>
      <li><strong>Business-to-Business (B2B)</strong></li>
      <li><strong>Business-to-Consumer (B2C)</strong></li>
      <li><strong>Consumer-to-Consumer (C2C)</strong></li>
      <li><strong>Consumer-to-Business (C2B)</strong></li>
      <li><strong>Business-to-Administration (B2A)</strong></li>
      <li><strong>Consumer-to-Administration (C2A)</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Digital Business Models</h2>

    <h3>Platform-Based Business Model</h3>
    <p>A <strong>digital platform</strong> is a digital service that helps two or more distinct but connected groups of users interact with each other.</p>
    <p><em>Examples:</em> Daraz, Uber, Airbnb</p>

    <h3>Subscription Business Model</h3>
    <p>A <strong>subscription model</strong> charges customers a recurring fee for continued access to a product or service.</p>
    <p><em>Examples:</em> Streaming services, cloud services, online learning platforms, digital newspapers</p>

    <h3>Freemium Business Model</h3>
    <p>Customers get a basic version for free, while advanced features require payment.</p>
    <p><em>Examples:</em> Software applications</p>

    <h3>On-Demand Business Model</h3>
    <p>An <strong>on-demand model</strong> provides a product or service exactly when the customer requests it.</p>
    <p><em>Examples:</em> Ride-hailing, food delivery, on-demand home services, cloud computing resources</p>

    <h3>Marketplace Business Model</h3>
    <p>A <strong>marketplace model</strong> creates a digital environment where multiple buyers and sellers can interact.</p>
    <p>Marketplace revenue can come from:</p>
    <ul>
      <li>Commission</li>
      <li>Transaction fees</li>
      <li>Seller fees</li>
      <li>Advertising</li>
      <li>Premium seller services</li>
    </ul>
    <p><em>Example:</em> Daraz</p>

    <div class="divider"></div>

    <h2>Digital Value Creation</h2>

    <h3>What is Value?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Value</strong> is the benefit a customer receives from a product, service, or experience, relative to what they give up to obtain it.</p>
    </div>
    <p>Digital businesses can create value through:</p>
    <ul>
      <li>Information</li>
      <li>Convenience</li>
      <li>Personalization</li>
      <li>Speed</li>
      <li>Connectivity, automation, data analytics, and network effects</li>
    </ul>

    <h3>What is a Digital Value Chain?</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>value chain</strong> represents the activities through which an organization creates value for customers.</p>
    </div>
    <ul>
      <li>Customer interactions generate data, which can be analyzed to improve products and services</li>
      <li>Data generated by customers can become an input into future value creation</li>
    </ul>

    <pre><code>Supplier
   ↓
Digital Inventory System
   ↓
Online Marketplace → Personalized Recommendations
   ↓
Online Order
   ↓
Digital Payment
   ↓
Logistics / Delivery
   ↓
Customer
   ↓
Ratings & Reviews
   ↓
Customer Data
   ↓
Analytics
   ↓
Improved Recommendations</code></pre>

    <div class="divider"></div>

    <h2>Network Effect</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>network effect</strong> occurs when the value or usefulness of a product or service changes as the number of users changes.</p>
    </div>

    <ul>
      <li><strong>Direct Network Effect</strong> — the value to a user increases as more users of the <em>same type</em> join the network.</li>
      <li><strong>Indirect Network Effect</strong> — the value for one group increases because the number of users in <em>another group</em> increases.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Platform businesses like Uber and Airbnb rely heavily on network effects — more riders attract more drivers (and vice versa), which is an example of an <strong>indirect network effect</strong>.</p>
    </div>
  `,
  summary: {
    topic: 'E-Business Models and Digital Value Creation',
    subTopics: [
      'Objectives',
      'What is a Business Model?',
      'What is a Digital Business Model?',
      'Traditional vs Digital Business Models',
      'What is an E-Business Model?',
      'Categories of E-Business Models',
      'Digital Business Models (Platform, Subscription, Freemium, On-Demand, Marketplace)',
      'Digital Value Creation',
      'What is a Digital Value Chain?',
      'Network Effect',
    ],
    definitions: [
      { term: 'Business Model', meaning: "A company's core strategy for how it creates, delivers, and captures value — covering what is sold, target customers, reach, and how it profits." },
      { term: 'Digital Business Model', meaning: 'A business model that uses digital technologies to create, deliver, and/or capture value.' },
      { term: 'E-Business Model', meaning: 'A description of how an organization uses electronic networks and digital technologies to conduct business activities and create value.' },
      { term: 'Digital Platform', meaning: 'A digital service that facilitates interactions between two or more distinct but interdependent groups of users.' },
      { term: 'Subscription Business Model', meaning: 'A model that charges customers a recurring fee for continued access to a product or service.' },
      { term: 'Freemium Business Model', meaning: 'A model where customers get a basic version for free, while advanced features require payment.' },
      { term: 'On-Demand Business Model', meaning: 'A model that provides a product or service exactly when the customer requests it.' },
      { term: 'Marketplace Business Model', meaning: 'A model that creates a digital environment where multiple buyers and sellers can interact.' },
      { term: 'Value', meaning: 'The benefit a customer receives from a product, service, or experience, relative to what they give up to obtain it.' },
      { term: 'Digital Value Chain', meaning: 'The set of activities through which a digital organization creates value for customers, often using customer data to improve future value creation.' },
      { term: 'Network Effect', meaning: 'A change in the value or usefulness of a product or service as the number of its users changes.' },
      { term: 'Direct Network Effect', meaning: 'Value to a user increases as more users of the same type join the network.' },
      { term: 'Indirect Network Effect', meaning: 'Value for one user group increases because the number of users in a different, connected group increases.' },
    ],
    keyPoints: [
      'A business model explains what is sold, who the customers are, how they are reached, and how the company makes a profit.',
      'Digital business does not require a digital product — Daraz, Uber, and Airbnb all combine physical products or services with a digital platform.',
      'The six categories of e-business models are B2B, B2C, C2C, C2B, B2A, and C2A.',
      'Digital models differ from traditional ones in reach, scalability, personalization, and revenue models (subscription, commission, advertising, freemium).',
      'Five common digital business models: platform-based, subscription, freemium, on-demand, and marketplace.',
      'Marketplace revenue can come from commission, transaction fees, seller fees, advertising, or premium seller services.',
      'Value is the benefit a customer gets relative to what they give up; digital businesses create value through information, convenience, personalization, speed, and connectivity.',
      'A digital value chain shows how customer data collected at each step (orders, payments, reviews) feeds back into analytics to improve future recommendations.',
      'A network effect changes a products value as its user base changes; it can be direct (same user group) or indirect (across different user groups).',
    ],
  },
},


]