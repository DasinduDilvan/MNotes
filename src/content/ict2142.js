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
      <p>This course unit is worth <strong>2 credits</strong> and runs for <strong>45 hours</strong> in total - <strong>15 hours</strong> of theory and <strong>30 hours</strong> of practical work.</p>
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
      <li><strong>Theory Exam</strong> - 70%</li>
      <li><strong>Continuous Assessment</strong> - 30%</li>
      <li>&nbsp;&nbsp;Quizzes - 10%</li>
      <li>&nbsp;&nbsp;Mini Project - 20%</li>
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
      <p><strong>Electronic business (e-business)</strong> means doing business electronically - completing business processes over open networks, using information instead of physical business processes.</p>
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
    <p>E-business also connects to other areas such as <strong>enterprise resource management</strong>, <strong>online activities between businesses</strong>, and <strong>electronic transfer within a firm</strong> - all built around a central e-business hub.</p>

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
        <li>Anyone, good or bad, can easily start a business - many bad sites end up taking customers' money</li>
        <li>There is no guarantee of product quality</li>
        <li>No one can buy anything during a site crash</li>
        <li>There is little direct customer-to-company interaction, so customer loyalty is always uncertain</li>
        <li>Hackers constantly look for opportunities - e-commerce sites, services, and payment gateways are always prone to attack</li>
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
      <p>The digital component changes <strong>how</strong> value is created and delivered - not necessarily <strong>what</strong> is being sold.</p>
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
      <li><strong>Direct Network Effect</strong> - the value to a user increases as more users of the <em>same type</em> join the network.</li>
      <li><strong>Indirect Network Effect</strong> - the value for one group increases because the number of users in <em>another group</em> increases.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Platform businesses like Uber and Airbnb rely heavily on network effects - more riders attract more drivers (and vice versa), which is an example of an <strong>indirect network effect</strong>.</p>
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
      { term: 'Business Model', meaning: "A company's core strategy for how it creates, delivers, and captures value - covering what is sold, target customers, reach, and how it profits." },
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
      'Digital business does not require a digital product - Daraz, Uber, and Airbnb all combine physical products or services with a digital platform.',
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


{
  id: 3,
  title: 'E-Commerce Infrastructure and Technologies',
  content: `
    <span class="lesson-badge">LESSON 03</span>
    <h1>E-Commerce Infrastructure and Technologies</h1>
    <div class="meta-info">ICT2142 <span>•</span> 20 min read</div>

    <h2>What You Will Learn</h2>
    <p>By the end of this lesson, you should be able to do the following:</p>
    <ul>
      <li>Explain the <strong>Internet technologies</strong> that provide the foundation for e-commerce.</li>
      <li>Describe the role of <strong>DNS</strong>, <strong>TCP/IP</strong>, <strong>HTTP/HTTPS</strong>, browsers, and web technologies in online transactions.</li>
      <li>Explain <strong>web servers</strong>, hosting models, scalability, availability, and basic deployment considerations.</li>
      <li>Describe <strong>Web APIs</strong> and how third-party services support payments, logistics, authentication, and other business functions.</li>
      <li>Explain <strong>mobile commerce (m-commerce)</strong> architecture, technologies, benefits, and challenges.</li>
    </ul>

    <div class="divider"></div>

    <h2>Internet Technologies That Power E-Commerce</h2>
    <p>The <strong>Internet</strong> is the communication network that connects customers, businesses, banks, payment providers, and logistics (delivery) providers. It lets all of these parties talk to each other so that an online purchase can actually happen.</p>
    <p>The core technologies behind e-commerce include:</p>
    <ul>
      <li><strong>Internet Protocol (IP)</strong> - gives every device an address on the network.</li>
      <li><strong>DNS</strong> - turns website names into IP addresses.</li>
      <li><strong>TCP/IP</strong> - the rules that move data reliably across the Internet.</li>
      <li><strong>HTTP/HTTPS</strong>, web browsers, web servers, databases, and cloud services.</li>
    </ul>

    <h3>How a Transaction Flows Through These Layers</h3>
    <p>An e-commerce transaction usually passes through several layers before it is complete.</p>

    <div class="callout callout-blue">
      <span class="callout-label">Example</span>
      <p>A customer opens an online shop's website, searches for a product, adds it to the cart, and submits an order. Behind the scenes: <strong>DNS</strong> finds the destination server, <strong>HTTPS</strong> protects the communication, the <strong>application</strong> processes the business logic, <strong>data</strong> is saved or retrieved, and <strong>external APIs</strong> may complete the payment or delivery steps.</p>
    </div>

    <pre><code>Customer Device  -->  Internet / ISP  -->  DNS + Web Server  -->  Application Server  -->  Database / External APIs</code></pre>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A good e-commerce system must provide <strong>security</strong>, <strong>availability</strong>, an acceptable <strong>response time</strong>, <strong>scalability</strong>, and reliable <strong>data exchange</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Domain Name System (DNS)</h2>
    <p><strong>DNS</strong> changes easy-to-read domain names (like <code>shop.example.com</code>) into the <strong>IP addresses</strong> that network devices actually use to find each other.</p>
    <p>DNS matters for e-commerce because customers usually type a domain name, not a long string of numbers, to visit a store.</p>
    <ul>
      <li>DNS also helps with <strong>availability</strong> and traffic management using multiple records, routing policies, and failover setups (backup servers that take over if one fails).</li>
      <li><strong>Security note:</strong> DNS must be managed carefully. Poor management can lead to <strong>domain hijacking</strong> or <strong>DNS spoofing</strong> (tricking users into visiting a fake site).</li>
    </ul>

    <div class="divider"></div>

    <h2>TCP/IP: The Foundation of Internet Communication</h2>
    <p><strong>TCP/IP</strong> is the basic set of rules that lets data travel from one device to another across the Internet.</p>

    <h3>TCP - Transmission Control Protocol</h3>
    <ul>
      <li>TCP makes sure data is delivered <strong>reliably</strong>.</li>
      <li>When there is a lot of information to send, TCP breaks it into smaller pieces called <strong>segments</strong> and makes sure they arrive correctly and in the right order.</li>
    </ul>

    <h3>IP - Internet Protocol</h3>
    <ul>
      <li>IP handles <strong>addressing</strong> and <strong>routing</strong> of data.</li>
      <li>Every device on an IP network has an <strong>IP address</strong>, and IP uses these addresses to decide where data should go.</li>
    </ul>

    <div class="divider"></div>

    <h2>HTTP vs HTTPS</h2>
    <p><strong>HTTP</strong> and <strong>HTTPS</strong> are the protocols (rules) used for communication between a web browser (the client) and a web server.</p>

    <pre><code>Feature          | HTTP                                | HTTPS
-----------------|-------------------------------------|---------------------------------------
Full form        | Hypertext Transfer Protocol          | Hypertext Transfer Protocol Secure
Security         | Not encrypted                        | Encrypted
Encryption       | No TLS encryption                    | Uses TLS (Transport Layer Security)
Data protection  | Data can be intercepted or changed   | Data is protected during transmission
Authentication   | No server authentication via TLS     | TLS provides server authentication
Data integrity   | No TLS-based integrity protection    | Provides integrity protection
URL example      | http://example.com                   | https://example.com
E-commerce use   | Not suitable for sensitive data      | Essential for e-commerce</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Never use plain <strong>HTTP</strong> for sensitive e-commerce actions like logins, checkouts, or payments. Always use <strong>HTTPS</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Client-Side vs Server-Side Processing</h2>

    <h3>Client-Side</h3>
    <ul>
      <li>Runs mainly in the customer's <strong>browser or device</strong>.</li>
      <li>Examples: UI rendering, form validation, interactive product filters.</li>
      <li><strong>Advantage:</strong> fast interaction and less work for the server.</li>
      <li><strong>Limitation:</strong> cannot be trusted for security-sensitive business decisions.</li>
    </ul>

    <h3>Server-Side</h3>
    <ul>
      <li>Runs on <strong>web/application servers</strong>.</li>
      <li>Examples: authentication, order processing, pricing rules, inventory updates.</li>
      <li><strong>Advantage:</strong> centralized control and access to protected resources.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Security principle:</strong> always validate important inputs and business rules on the <strong>server</strong>, never trust the client alone.</p>
    </div>

    <div class="divider"></div>

    <h2>Web Browsers and Web Technologies</h2>
    <ul>
      <li><strong>HTML</strong> - defines the structure of a web page (forms, links, product information, images, tables, and semantic elements).</li>
      <li><strong>CSS</strong> - controls how a page looks and is laid out. <strong>Responsive design</strong> helps pages adapt to desktops, tablets, and smartphones.</li>
      <li><strong>JavaScript</strong> - adds interaction and dynamic behavior, such as client-side validation, asynchronous requests, cart updates, and rich user interfaces.</li>
    </ul>

    <div class="divider"></div>

    <h2>Web Application Architecture</h2>
    <p>A typical e-commerce web application is built from four layers:</p>

    <pre><code>Presentation Layer  -->  Application Layer  -->  Data Layer  -->  External Services
(Browser/Mobile UI)      (Business Logic)        (Database)      (Payments, Shipping, etc.)</code></pre>

    <ul>
      <li><strong>Presentation layer:</strong> displays products, carts, forms, accounts, and order information.</li>
      <li><strong>Application layer:</strong> implements authentication, shopping cart logic, pricing, promotions, inventory, and order management.</li>
      <li><strong>Data layer:</strong> stores customer, product, inventory, order, and transaction-related data.</li>
      <li><strong>External services:</strong> payment gateways, shipping/logistics, email/SMS, identity providers, analytics, and other APIs.</li>
    </ul>

    <div class="divider"></div>

    <h2>Caching and Content Delivery Networks (CDNs)</h2>
    <p><strong>Caching</strong> stores frequently requested data temporarily so it can be served faster the next time it is needed.</p>
    <ul>
      <li><strong>Browser cache</strong> - stores selected resources on the user's own device.</li>
      <li><strong>Server/application cache</strong> - stores frequently used data or computed results on the server side.</li>
      <li><strong>CDN (Content Delivery Network)</strong> - spreads static content such as images, CSS, JavaScript, and videos across servers in many geographic locations (called edge locations).</li>
    </ul>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Benefits of caching and CDNs: lower latency (delay), less load on the origin server, better scalability, and a better user experience.</p>
    </div>

    <p><strong>E-commerce example:</strong> product images and static files can be delivered from a nearby CDN edge server, while orders keep being processed by the application server.</p>

    <div class="divider"></div>

    <h2>Web Servers and Hosting Options</h2>
    <p>A <strong>web server</strong> receives HTTP/HTTPS requests and either returns web resources directly or forwards the request to application components. Common web-server software includes <strong>Apache HTTP Server</strong>, <strong>Nginx</strong>, and <strong>Microsoft IIS</strong>.</p>
    <ul>
      <li>Static websites can be served directly from a web server or from object storage/CDN.</li>
      <li>Dynamic e-commerce applications usually need an application runtime and a database behind the web server.</li>
      <li>The hosting choice affects cost, performance, scalability, security responsibilities, availability, and how much effort is needed to maintain it.</li>
    </ul>

    <h3>Static vs Dynamic Web Content</h3>
    <p><strong>Static Web Pages</strong> - the same stored resource is delivered to many users.</p>
    <ul>
      <li>Examples: HTML pages, images, CSS, JavaScript files.</li>
      <li>Easy to cache and distribute through CDNs.</li>
      <li>Good for informational pages and static product assets.</li>
    </ul>
    <p><strong>Dynamic Web Pages</strong> - generated or customized based on data, the user, the session, or the specific request.</p>
    <ul>
      <li>Examples: shopping cart, account page, stock availability, personalized recommendations.</li>
      <li>Usually needs application processing and database access.</li>
      <li>Needs careful performance and security management.</li>
    </ul>

    <h3>Web Hosting Options</h3>
    <ul>
      <li><strong>Shared Hosting</strong></li>
      <li><strong>VPS (Virtual Private Servers)</strong></li>
      <li><strong>Dedicated Servers</strong></li>
      <li><strong>Cloud-Based Servers</strong></li>
    </ul>

    <h3>Cloud Hosting for E-Commerce</h3>
    <ul>
      <li>Cloud platforms offer compute power, storage, networking, databases, monitoring, security, and other managed services.</li>
      <li>Infrastructure can scale <strong>horizontally</strong> by adding more application instances.</li>
      <li><strong>Load balancers</strong> spread requests across multiple application servers.</li>
      <li><strong>Auto-scaling</strong> can increase or decrease capacity automatically based on demand.</li>
      <li><strong>Managed databases</strong> reduce administrative work such as backups, patching, and high-availability setup.</li>
    </ul>

    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Key trade-offs of cloud hosting: cost control, dependency on the vendor, configuration complexity, security, where data is stored, and the operational skills a team needs.</p>
    </div>

    <div class="divider"></div>

    <h2>Scalability, Availability, and Performance</h2>

    <h3>Scalability</h3>
    <ul>
      <li>The ability to handle an increasing workload.</li>
      <li><strong>Vertical scaling</strong> - increase the resources (CPU, RAM) of one server.</li>
      <li><strong>Horizontal scaling</strong> - add more servers or instances.</li>
    </ul>

    <h3>Availability</h3>
    <ul>
      <li>The ability to stay accessible and operational.</li>
      <li>Improved through redundancy, health checks, failover, backups, and monitoring.</li>
    </ul>

    <h3>Performance</h3>
    <ul>
      <li>How quickly and efficiently the system responds.</li>
      <li>Improved by caching, CDNs, database optimization, efficient APIs, and choosing the right infrastructure.</li>
    </ul>

    <div class="divider"></div>

    <h2>Web APIs and Third-Party Integrations</h2>
    <p>An <strong>API (Application Programming Interface)</strong> defines how software components talk to each other and exchange data.</p>
    <ul>
      <li>E-commerce businesses rarely build every supporting service themselves - instead, they connect to specialized external providers.</li>
      <li>Common integrations: payment gateways, delivery/logistics, identity and authentication, email/SMS, maps, analytics, tax, and fraud detection.</li>
      <li>APIs reduce development effort and let businesses connect different systems together.</li>
      <li>The quality of an integration affects reliability, security, customer experience, and how smoothly the business runs.</li>
    </ul>

    <h3>Payment Gateway Integration</h3>
    <p>A <strong>payment gateway</strong> connects an e-commerce application with the infrastructure that processes payments.</p>
    <ul>
      <li>Integration approaches: hosted payment pages, redirect-based flows, embedded components, or direct API integrations.</li>
      <li>Important concepts: <strong>transaction ID</strong>, <strong>authorization</strong>, <strong>capture</strong>, <strong>refund</strong>, <strong>cancellation</strong>, <strong>webhook/callback</strong>, and <strong>reconciliation</strong>.</li>
      <li>Security considerations: HTTPS, authentication credentials, access control, secure secret storage, validation, fraud controls, logging, and compliance requirements.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>A good payment integration must correctly handle <strong>timeouts</strong>, <strong>duplicate requests</strong>, <strong>failed payments</strong>, <strong>delayed notifications</strong>, and <strong>retry scenarios</strong>.</p>
    </div>

    <h3>Logistics and Delivery APIs</h3>
    <p><strong>Logistics APIs</strong> let an e-commerce system exchange information with delivery or courier providers.</p>
    <ul>
      <li>Common functions: shipping-rate calculation, address validation, shipment creation, tracking, delivery status, and proof of delivery.</li>
    </ul>

    <pre><code>Order confirmed  -->  Shipment created  -->  Tracking number returned  -->  Tracking updates received  -->  Customer notified</code></pre>

    <ul>
      <li><strong>Webhooks</strong> let the logistics provider notify the e-commerce system whenever the shipment status changes.</li>
      <li>Benefits: automated order fulfillment, real-time tracking, fewer manual tasks, and better visibility for the customer.</li>
    </ul>

    <h3>Authentication and Identity APIs</h3>
    <ul>
      <li><strong>Authentication</strong> answers "Who is the user?" <strong>Authorization</strong> answers "What is the user allowed to do?"</li>
      <li>E-commerce systems may build their own identity service or integrate with an external identity provider.</li>
      <li>Common technologies/concepts: sessions, cookies, access tokens, <strong>OAuth 2.0</strong>, <strong>OpenID Connect</strong>, and multi-factor authentication.</li>
      <li><strong>Social login</strong> reduces friction by letting customers sign in using an identity provider they already have.</li>
      <li>Security practices: strong credential protection, short-lived tokens where appropriate, secure cookies, least privilege, and protection against session/token theft.</li>
    </ul>

    <div class="divider"></div>

    <h2>Mobile Commerce (M-Commerce)</h2>
    <p><strong>M-commerce</strong> is buying, selling, paying, and doing other business activities using mobile devices.</p>
    <ul>
      <li>Examples: mobile shopping websites, mobile apps, mobile banking, digital wallets, QR-based payments, and in-app purchases.</li>
      <li>Mobile users expect fast loading, simple navigation, touch-friendly controls, secure authentication, and reliable payments.</li>
      <li>M-commerce depends on mobile networks, smartphones, browsers/apps, APIs, cloud infrastructure, payment services, and location/notification features.</li>
    </ul>

    <h3>Mobile Commerce Technologies</h3>
    <ul>
      <li><strong>Responsive Web</strong> - one website adapts to different screen sizes, built with HTML + CSS + JavaScript, and accessible through any mobile browser.</li>
      <li><strong>Native Apps</strong> - built specifically for one mobile platform, can access device capabilities through platform APIs, and are useful for rich, frequent interactions.</li>
      <li><strong>Cross-Platform</strong> - a shared codebase can target multiple platforms, reducing development effort, using frameworks and platform bridges.</li>
      <li><strong>Mobile Payments</strong> - digital wallets, QR payments, cards, bank-based payments, and provider APIs. Security and user authentication are critical here.</li>
    </ul>

    <div class="divider"></div>

    <h2>Activity</h2>
    <p>Try answering these questions to check your understanding:</p>
    <ol>
      <li>What is a <strong>RESTful Web API</strong>?</li>
      <li>What are the <strong>mobile UX and performance considerations</strong> in m-commerce?</li>
      <li>How can security be maintained across e-commerce infrastructure on the <strong>network</strong>, <strong>application</strong>, <strong>data</strong>, and <strong>integration</strong> levels?</li>
    </ol>
  `,
  summary: {
    topic: 'E-Commerce Infrastructure and Technologies',
    subTopics: [
      'Internet Technologies That Power E-Commerce',
      'How a Transaction Flows Through These Layers',
      'Domain Name System (DNS)',
      'TCP/IP: The Foundation of Internet Communication',
      'HTTP vs HTTPS',
      'Client-Side vs Server-Side Processing',
      'Web Browsers and Web Technologies',
      'Web Application Architecture',
      'Caching and Content Delivery Networks (CDNs)',
      'Web Servers and Hosting Options',
      'Static vs Dynamic Web Content',
      'Web Hosting Options',
      'Cloud Hosting for E-Commerce',
      'Scalability, Availability, and Performance',
      'Web APIs and Third-Party Integrations',
      'Payment Gateway Integration',
      'Logistics and Delivery APIs',
      'Authentication and Identity APIs',
      'Mobile Commerce (M-Commerce)',
      'Mobile Commerce Technologies',
    ],
    definitions: [
      { term: 'DNS (Domain Name System)', meaning: 'Translates human-readable domain names into the IP addresses used by network devices.' },
      { term: 'TCP (Transmission Control Protocol)', meaning: 'Responsible for reliable delivery of data by dividing it into segments and ensuring they arrive correctly and in order.' },
      { term: 'IP (Internet Protocol)', meaning: 'Responsible for addressing and routing data using IP addresses assigned to every device on the network.' },
      { term: 'HTTP', meaning: 'An unencrypted protocol used for communication between a browser and a web server.' },
      { term: 'HTTPS', meaning: 'An encrypted version of HTTP that uses TLS to protect data and authenticate the server; essential for e-commerce.' },
      { term: 'Client-Side Processing', meaning: 'Code that runs in the browser or device used by the customer, such as UI rendering and form validation.' },
      { term: 'Server-Side Processing', meaning: 'Code that runs on web or application servers, such as authentication, order processing, and pricing rules.' },
      { term: 'Caching', meaning: 'Temporarily storing frequently requested data so it can be served faster.' },
      { term: 'CDN (Content Delivery Network)', meaning: 'A network of servers spread across many locations that delivers static content such as images, CSS, and JavaScript closer to users.' },
      { term: 'Web Server', meaning: 'Software that receives HTTP/HTTPS requests and returns resources or forwards requests to application components, such as Apache, Nginx, or IIS.' },
      { term: 'Static Web Page', meaning: 'A stored web page or resource that is delivered the same way to every user.' },
      { term: 'Dynamic Web Page', meaning: 'A web page generated or customized based on data, the user, the session, or the request.' },
      { term: 'Scalability', meaning: 'The ability of a system to handle an increasing workload, through vertical scaling (bigger server) or horizontal scaling (more servers).' },
      { term: 'Availability', meaning: 'The ability of a system to remain accessible and operational, supported by redundancy, failover, and monitoring.' },
      { term: 'Performance', meaning: 'How quickly and efficiently a system responds, improved by caching, CDNs, and database optimization.' },
      { term: 'API (Application Programming Interface)', meaning: 'Defines how software components communicate and exchange data with each other.' },
      { term: 'Payment Gateway', meaning: 'A service that connects an e-commerce application with payment processing infrastructure.' },
      { term: 'Webhook', meaning: 'A callback mechanism that lets an external service, such as a logistics or payment provider, notify a system when an event happens.' },
      { term: 'Authentication', meaning: 'The process of verifying who a user is.' },
      { term: 'Authorization', meaning: 'The process of determining what an authenticated user is allowed to do.' },
      { term: 'OAuth 2.0', meaning: 'A common framework used for secure authorization, such as allowing social login.' },
      { term: 'M-Commerce (Mobile Commerce)', meaning: 'Buying, selling, paying, and other commercial activities carried out using mobile devices.' },
      { term: 'Responsive Web Design', meaning: 'A design approach where one website adapts to different screen sizes using HTML, CSS, and JavaScript.' },
      { term: 'Native App', meaning: 'An app built specifically for one mobile platform that can access device features through platform APIs.' },
      { term: 'Cross-Platform App', meaning: 'An app built with a shared codebase that can run on multiple mobile platforms.' },
    ],
    keyPoints: [
      'An e-commerce transaction passes through several layers: customer device, internet/ISP, DNS and web server, application server, and database/external APIs.',
      'A good e-commerce system needs security, availability, acceptable response time, scalability, and reliable data exchange.',
      'DNS translates domain names into IP addresses and must be protected against domain hijacking and DNS spoofing.',
      'TCP ensures reliable, ordered delivery of data by breaking it into segments; IP handles addressing and routing.',
      'HTTPS, not HTTP, is essential for e-commerce because it encrypts data and authenticates the server using TLS.',
      'Client-side code cannot be trusted for security-sensitive decisions; important rules must always be validated on the server.',
      'A web application is typically built from four layers: presentation, application, data, and external services.',
      'Caching and CDNs reduce latency, lower the load on the origin server, and improve scalability and user experience.',
      'Static pages are delivered the same way to all users; dynamic pages are generated per user, session, or request.',
      'Scalability can be vertical (bigger server) or horizontal (more servers); availability relies on redundancy and failover.',
      'Web APIs let e-commerce systems integrate payment gateways, logistics providers, and identity providers instead of building everything in-house.',
      'A good payment integration must correctly handle timeouts, duplicate requests, failed payments, and retry scenarios.',
      'Authentication answers who the user is, while authorization answers what the user is allowed to do.',
      'M-commerce depends on mobile networks, apps/browsers, APIs, cloud infrastructure, and payment services.',
      'Mobile commerce technologies include responsive web, native apps, cross-platform apps, and mobile payments.',
      'Webhooks let external providers such as payment gateways and logistics services notify the system automatically when an event occurs.',
    ],
  },
},

{
  id: 4,
  title: 'Designing & Developing E-Commerce Websites',
  content: `
    <span class="lesson-badge">LESSON 04</span>
    <h1>Designing &amp; Developing E-Commerce Websites</h1>
    <div class="meta-info">ICT2142 <span>•</span> 18 min read</div>

    <h2>Learning Outcomes</h2>
    <p>By the end of this lesson, you should understand:</p>
    <ol>
      <li><strong>Core Functions of an E-Commerce System</strong> - the essential front-end and back-end building blocks every online store needs.</li>
      <li><strong>UX/UI Design Principles</strong> - design principles that build trust and guide customers smoothly toward purchase.</li>
      <li><strong>Information Architecture &amp; Navigation</strong> - structuring content and menus so products are easy to find.</li>
      <li><strong>Product Catalog, Search &amp; Filtering</strong> - designing listings, detail pages, search and faceted filtering.</li>
      <li><strong>Responsive &amp; Mobile-First Design</strong> - adapting layouts across devices, with mobile as the starting point.</li>
    </ol>

    <div class="divider"></div>

    <h2>What Is an E-Commerce Website?</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>A digital platform that lets a business showcase, sell and manage products or services online - covering the full customer journey from product discovery to payment and delivery.</p>
    </div>
    <ul>
      <li>Combines a customer-facing <strong>storefront</strong> with back-office systems for inventory, orders and payments.</li>
      <li>Must work reliably for many simultaneous users, across many devices and locations.</li>
      <li>Success depends as much on <strong>design and usability</strong> as on the underlying technology.</li>
    </ul>
    <p>Three key characteristics of an e-commerce website:</p>
    <ul>
      <li><strong>Always On</strong> - the storefront operates continuously, worldwide, with no fixed opening hours.</li>
      <li><strong>Data-Driven</strong> - clicks, searches and purchases can be tracked to continuously improve the experience.</li>
      <li><strong>Multi-Device</strong> - customers move between desktop, tablet and phone within a single shopping journey.</li>
    </ul>

    <div class="divider"></div>

    <h2>Core Functions of an E-Commerce System</h2>

    <h3>Front-End: Customer-Facing Functions</h3>
    <p>The features a shopper interacts with directly while browsing and buying.</p>
    <ul>
      <li><strong>Product Browsing &amp; Catalog</strong> - category pages and listings that display products with images, names and prices.</li>
      <li><strong>Search &amp; Filtering</strong> - tools that help shoppers locate specific products quickly within a large catalog.</li>
      <li><strong>Shopping Cart</strong> - a temporary holding area for items a customer intends to purchase.</li>
      <li><strong>Checkout &amp; Payment</strong> - the guided process that turns a cart into a confirmed, paid order.</li>
      <li><strong>User Accounts</strong> - registration, login, saved addresses, order history and wishlists.</li>
      <li><strong>Customer Support</strong> - live chat, FAQs and contact options that resolve doubts before they cause drop-off.</li>
    </ul>

    <h3>Back-End: Administrative &amp; System Functions</h3>
    <p>The behind-the-scenes systems that keep the storefront running and up to date.</p>
    <ul>
      <li><strong>Inventory Management</strong> - tracking stock levels in real time so unavailable items aren't sold.</li>
      <li><strong>Order Management</strong> - processing, packing, shipping and handling returns or exchanges.</li>
      <li><strong>Content Management (CMS)</strong> - updating product details, pricing, banners and promotions without new code.</li>
      <li><strong>Payment Gateway Integration</strong> - securely connecting to processors such as PayHere, Stripe or PayPal.</li>
      <li><strong>User &amp; Access Management</strong> - controlling admin roles, permissions and customer account data.</li>
      <li><strong>Analytics &amp; Reporting</strong> - measuring traffic, sales trends and conversion rates to guide decisions.</li>
    </ul>

    <h3>Payment Processing &amp; Security</h3>
    <pre><code>Browse -> Add to Cart -> Checkout -> Payment Gateway -> Confirmation</code></pre>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Every completed sale depends on this hand-off being both smooth for the customer and secure end-to-end.</p>
    </div>
    <ul>
      <li><strong>SSL / TLS Encryption</strong> - encrypts data in transit between the customer's browser and the server.</li>
      <li><strong>PCI-DSS Compliance</strong> - the industry standard for handling and storing cardholder data safely.</li>
      <li><strong>Tokenization</strong> - replaces sensitive card details with a non-reversible token for storage.</li>
      <li><strong>Fraud Detection</strong> - flags unusual transaction patterns before an order is confirmed.</li>
    </ul>

    <div class="divider"></div>

    <h2>UX/UI Design Principles for E-Commerce</h2>

    <h3>UX vs UI in E-Commerce</h3>
    <ul>
      <li><strong>UX (User Experience)</strong> - how easily and confidently a customer can complete a task. Example: finding a laptop, comparing options and checking out without confusion.</li>
      <li><strong>UI (User Interface)</strong> - the visual and interactive layer. Example: buttons, typography, colors, product cards, icons, spacing and form controls.</li>
    </ul>

    <h3>Core Design Principles</h3>
    <ul>
      <li><strong>Simplicity &amp; Clarity</strong> - minimise cognitive load: clear labels, short paths, no unnecessary steps.</li>
      <li><strong>Consistency</strong> - uniform colours, fonts and button styles across every page and screen.</li>
      <li><strong>Visual Hierarchy</strong> - guide the eye to what matters most: product, price, and call-to-action.</li>
      <li><strong>Immediate Feedback</strong> - loading states, confirmations and clear error messages at every action.</li>
      <li><strong>Accessibility</strong> - sufficient colour contrast, alt text and full keyboard navigation.</li>
      <li><strong>Trust &amp; Credibility</strong> - a professional, polished look signals a safe place to enter payment details.</li>
    </ul>

    <h3>Visual Design Elements</h3>
    <ul>
      <li><strong>Colour</strong> - use brand colour purposefully; reserve one strong accent colour exclusively for calls-to-action like "Add to Cart".</li>
      <li><strong>Typography</strong> - limit pages to two font families; keep prices and headings legible at a glance.</li>
      <li><strong>Whitespace</strong> - avoid clutter; generous spacing lets product images and key details breathe.</li>
      <li><strong>Imagery</strong> - high-quality, consistent product photography raises perceived value and trust.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p><strong>Good design:</strong> clear hierarchy, one CTA colour, plenty of whitespace. <strong>Poor design:</strong> competing colours, a crowded layout, and no clear indication of which button matters.</p>
    </div>

    <h3>Building Trust &amp; Reducing Friction</h3>
    <ul>
      <li>Trust badges &amp; secure checkout icons visible near payment fields.</li>
      <li>Genuine customer reviews and star ratings on product pages.</li>
      <li>Clear, prominent calls-to-action - one primary action per screen.</li>
      <li>Transparent pricing - shipping and tax shown early, not at the last step.</li>
      <li>Guest checkout available - registration is optional, not forced.</li>
      <li>Return and refund policy is easy to find before purchase.</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Example product page: <strong>Wireless Over-Ear Headphones</strong>, Rs. 12,500 (incl. tax, free shipping over Rs. 5,000), with 1,248 reviews, an "Add to Cart" button, and "Secure checkout • 30-day returns" shown directly beneath it.</p>
    </div>

    <div class="divider"></div>

    <h2>Information Architecture &amp; Navigation Design</h2>

    <h3>Structuring Content</h3>
    <p><strong>Information architecture (IA)</strong> is the practice of organising, structuring and labelling content so it is findable and usable.</p>
    <ul>
      <li>Logical categorisation that matches how customers think about products.</li>
      <li><strong>Shallow hierarchy</strong> - keep any product reachable within 2–3 clicks.</li>
      <li>Consistent labelling of categories, filters and navigation terms.</li>
      <li>Scalable structure that accommodates new products and categories.</li>
    </ul>
    <p>Example site hierarchy:</p>
    <pre><code>Home
 |-- Electronics
 |      \`-- Laptops
 |             \`-- Gaming Laptop X15
 |-- Fashion
 \`-- Home & Living

Breadcrumb: Home > Electronics > Laptops > Gaming Laptop X15
</code></pre>

    <h3>Navigation Design Patterns</h3>
    <ul>
      <li><strong>Global Navigation</strong> - primary categories stay visible on every page.</li>
      <li><strong>Mega Menus</strong> - multi-column dropdowns organise a large catalogue at a glance.</li>
      <li><strong>Breadcrumbs</strong> - shows the current location and lets users step back easily.</li>
      <li><strong>Sticky Navigation</strong> - menu and cart icon stay visible while the page is scrolled.</li>
      <li><strong>Footer Navigation</strong> - secondary links (policies, contact, sitemap) live in the footer.</li>
    </ul>
    <p>Example mega menu under "Electronics":</p>
    <pre><code>Laptops & PCs      Mobile & Tablets     Audio
- Laptops          - Smartphones        - Headphones
- Desktops         - Tablets            - Speakers
- Monitors         - Accessories        - Earbuds

Breadcrumb: Home > Electronics > Laptops > Gaming Laptops
</code></pre>

    <div class="divider"></div>

    <h2>Product Catalog, Search &amp; Filtering</h2>

    <h3>Listing &amp; Detail Page Design</h3>
    <p><strong>Product Listing Page (PLP):</strong></p>
    <ul>
      <li>Grid or list view of products within a category.</li>
      <li>Product image, name, price and rating snapshot.</li>
      <li>Quick-add-to-cart without opening the full page.</li>
      <li>Pagination or infinite scroll for large result sets.</li>
    </ul>
    <p><strong>Product Detail Page (PDP):</strong></p>
    <ul>
      <li>Image gallery with zoom, plus variant selectors.</li>
      <li>Title, price, stock status and a clear primary CTA.</li>
      <li>Description, specifications, and customer reviews.</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Example PDP: <strong>Gaming Laptop X15</strong>, Rs. 385,000, in stock, with colour and storage (512GB / 1TB) selectors, an "Add to Cart" button, tabs for Specifications, Description, Reviews (326) and Q&amp;A, plus a "Related products" section.</p>
    </div>

    <h3>Search Features - Making Products Findable</h3>
    <ul>
      <li><strong>Autocomplete</strong> - suggests matching products and categories as the user types, before pressing enter.</li>
      <li><strong>Typo Tolerance</strong> - a search for "sneekers" still returns results for "sneakers".</li>
      <li><strong>Relevance Ranking</strong> - ordered by relevance, popularity and current stock availability.</li>
      <li><strong>Visual &amp; Voice Search</strong> - emerging ways to search using a photo or a spoken query.</li>
      <li><strong>No-Results Handling</strong> - suggest close alternatives instead of a dead end.</li>
    </ul>
    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Prefix and fuzzy matching return relevant items instantly and keep the shopper in flow. For example, searching <code>run</code> matches "Running Shoes (Men)", "Running Shorts" and "Running Watch - GPS", even though only a partial word was typed.</p>
    </div>

    <h3>Filtering &amp; Sorting - Faceted Navigation</h3>
    <ul>
      <li><strong>Facets</strong> - price range, brand, size, colour, rating and availability.</li>
      <li><strong>Sorting</strong> - relevance, price (low–high), newest, best-selling.</li>
      <li><strong>Applied Filter Chips</strong> - active filters shown as removable tags above the results.</li>
      <li><strong>Live Result Count</strong> - the number of matching products updates instantly.</li>
    </ul>
    <div class="callout callout-blue">
      <span class="callout-label">Note</span>
      <p>Example: filtering the "Laptops" category by <strong>Brand: Dell</strong> and <strong>Price: 100k–300k</strong> narrows the catalog to 128 results, sorted by Price (Low to High), with both filters shown as removable chips above the results grid.</p>
    </div>

    <div class="divider"></div>

    <h2>Responsive &amp; Mobile-First Design</h2>

    <h3>Core Concepts</h3>
    <ul>
      <li><strong>Fluid Grid Layouts</strong> - proportional widths (%, fr) instead of fixed pixel columns.</li>
      <li><strong>Flexible Images &amp; Media</strong> - images and video scale to fit within their containers.</li>
      <li><strong>CSS Media Queries</strong> - breakpoints adapt the layout to the available screen width.</li>
    </ul>

    <h3>The Mobile-First Approach</h3>
    <p>Design for the smallest screen and the biggest constraints first - limited space, touch input, variable network speed - then progressively enhance the layout for larger screens.</p>
    <ul>
      <li><strong>Thumb-Friendly Tap Targets</strong> - buttons and links sized at least ~44×44px so they're easy to tap accurately.</li>
      <li><strong>Simplified Navigation</strong> - condensed, single-column layouts with a hamburger menu for secondary items.</li>
      <li><strong>Streamlined Checkout</strong> - fewer form fields, autofill, and mobile wallets like Apple Pay or Google Pay.</li>
      <li><strong>Fast Load Times</strong> - compressed images and lazy loading keep pages quick on mobile networks.</li>
    </ul>

    <h3>Comparison - Desktop vs. Mobile Layout</h3>
    <p>Desktop uses a multi-column grid, full top navigation, and shows more content per screen. Mobile adapts with these key differences:</p>
    <ul>
      <li>Columns collapse to one.</li>
      <li>Menu becomes a hamburger.</li>
      <li>CTA sticks to the bottom.</li>
      <li>Bigger tap targets, less on screen.</li>
    </ul>

    <div class="divider"></div>

    <h2>Summary</h2>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Core Functions</strong> - front-end browsing/checkout and back-end inventory/payments must work as one system.</p>
    </div>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>UX/UI Principles</strong> - simplicity, consistency and visible trust signals turn visits into completed purchases.</p>
    </div>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Information Architecture</strong> - a shallow, logical structure and clear navigation keep products findable.</p>
    </div>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Catalog, Search &amp; Filters</strong> - well-designed listings, forgiving search and faceted filters help users decide fast.</p>
    </div>
    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Responsive &amp; Mobile-First</strong> - design from the smallest screen up, since most shoppers arrive on a phone.</p>
    </div>
  `,
  summary: {
    topic: 'Designing & Developing E-Commerce Websites',
    subTopics: [
      'What Is an E-Commerce Website?',
      'Front-End: Customer-Facing Functions',
      'Back-End: Administrative & System Functions',
      'Payment Processing & Security',
      'UX vs UI in E-Commerce',
      'Core Design Principles',
      'Visual Design Elements',
      'Building Trust & Reducing Friction',
      'Structuring Content',
      'Navigation Design Patterns',
      'Listing & Detail Page Design',
      'Search Features - Making Products Findable',
      'Filtering & Sorting - Faceted Navigation',
      'Core Concepts (Responsive Design)',
      'The Mobile-First Approach',
      'Comparison - Desktop vs. Mobile Layout',
    ],
    definitions: [
      { term: 'E-Commerce Website', meaning: 'A digital platform that lets a business showcase, sell and manage products or services online, covering the full customer journey from discovery to payment and delivery.' },
      { term: 'Information Architecture (IA)', meaning: 'The practice of organising, structuring and labelling content so it is findable and usable.' },
      { term: 'UX (User Experience)', meaning: 'How easily and confidently a customer can complete a task on a website.' },
      { term: 'UI (User Interface)', meaning: 'The visual and interactive layer of a website - buttons, typography, colors, icons and spacing.' },
      { term: 'PCI-DSS Compliance', meaning: 'The industry standard for handling and storing cardholder data safely.' },
      { term: 'Tokenization', meaning: 'Replacing sensitive card details with a non-reversible token for storage.' },
      { term: 'Faceted Navigation', meaning: 'Filtering products by multiple attributes at once, such as price, brand, size, colour and rating.' },
      { term: 'Mobile-First Design', meaning: 'Designing for the smallest screen and biggest constraints first, then progressively enhancing the layout for larger screens.' },
    ],
    keyPoints: [
      'An e-commerce website combines a customer-facing storefront with back-office systems for inventory, orders and payments, and must be Always On, Data-Driven, and Multi-Device.',
      'Front-end functions include product browsing, search, shopping cart, checkout, user accounts and customer support.',
      'Back-end functions include inventory management, order management, CMS, payment gateway integration, user/access management and analytics.',
      'Payment flow: Browse to Add to Cart to Checkout to Payment Gateway to Confirmation - secured by SSL/TLS encryption, PCI-DSS compliance, tokenization and fraud detection.',
      'UX is about task completion; UI is the visual and interactive layer that supports it.',
      'Core design principles: simplicity & clarity, consistency, visual hierarchy, immediate feedback, accessibility, and trust & credibility.',
      'Trust is built through visible security badges, genuine reviews, transparent pricing, guest checkout, and an easy-to-find return policy.',
      'Good information architecture keeps any product reachable within 2–3 clicks using a shallow, logical, consistently labelled hierarchy.',
      'Navigation patterns include global navigation, mega menus, breadcrumbs, sticky navigation, and footer navigation.',
      'Product Listing Pages (PLP) show product grids with quick-add-to-cart; Product Detail Pages (PDP) show galleries, variants, price, stock status and reviews.',
      'Effective search includes autocomplete, typo tolerance, relevance ranking, visual/voice search, and no-results handling.',
      'Faceted navigation lets shoppers filter by price, brand, size, colour, rating, with applied filter chips and a live result count.',
      'Responsive design relies on fluid grid layouts, flexible images/media, and CSS media query breakpoints.',
      'Mobile-first design starts with thumb-friendly tap targets, simplified navigation, streamlined checkout, and fast load times, then scales up to desktop.',
    ],
  },
},







































{
  id: 5,
  title: 'Payment Systems for Electronic Commerce',
  content: `
    <span class="lesson-badge">LESSON 05</span>
    <h1>Payment Systems for Electronic Commerce</h1>
    <div class="meta-info">ICT2152 <span>•</span> 18 min read</div>

    <p>When you buy something online, you must <strong>pay</strong> for it in some way. This lesson explains the main <strong>online payment systems</strong> used in electronic commerce and how each one works.</p>

    <h2>Lesson Objectives</h2>
    <p>In this lesson, you will learn about:</p>
    <ul>
      <li>The basic functions of <strong>online payment systems</strong></li>
      <li>The use of <strong>payment cards</strong> in electronic commerce</li>
      <li>How <strong>electronic wallets</strong> work</li>
      <li>The use of <strong>stored-value cards</strong> in electronic commerce</li>
    </ul>

    <div class="divider"></div>

    <h2>Online Payment Basics</h2>

    <h3>Most Common Ways to Pay</h3>
    <p><strong>Cash</strong>, <strong>checks</strong>, <strong>credit cards</strong>, and <strong>debit cards</strong> account for more than <strong>90 percent</strong> of all consumer payments.</p>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Cash, checks, credit cards, and debit cards = <strong>more than 90%</strong> of all consumer payments.</p>
    </div>

    <h3>Automated Electronic Transfers</h3>
    <p>The most popular consumer electronic transfers are <strong>automated payments</strong> of:</p>
    <ul>
      <li><strong>Auto loans</strong></li>
      <li><strong>Insurance payments</strong></li>
      <li><strong>Mortgage payments</strong> made from consumers' checking accounts</li>
    </ul>

    <h3>Scrip</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Scrip</strong> is something that is <strong>not currency</strong> but can be used in the same way as money.</p>
    </div>
    <p>Popular examples of scrip are:</p>
    <ul>
      <li><strong>Gift cards</strong></li>
      <li><strong>Reward points</strong></li>
      <li><strong>Coupons</strong></li>
    </ul>

    <div class="divider"></div>

    <h2>Payment Cards</h2>
    <p><strong>Payment cards</strong> is a general term for all types of plastic cards used to make purchases. The three main types are the <strong>credit card</strong>, the <strong>debit card</strong>, and the <strong>charge card</strong>.</p>

    <h3>Credit Card</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>credit card</strong> is a card issued by a financial institution, typically a bank. It lets the cardholder <strong>borrow funds</strong> from that institution.</p>
    </div>
    <ul>
      <li>Cardholders agree to <strong>pay the money back with interest</strong>, according to the institution's terms.</li>
      <li>It has a <strong>spending limit</strong> based on the user's <strong>credit history</strong>.</li>
    </ul>

    <h3>Debit Card</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>debit card</strong> is a payment card that makes payments by <strong>deducting money directly from a consumer's checking account</strong>, rather than on loan from a bank.</p>
    </div>
    <p>In simple words: with a debit card you spend <strong>your own money</strong>, not borrowed money.</p>

    <h3>Charge Card</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>charge card</strong> works as a type of credit card that requires you to <strong>pay your balance in full at the end of each billing cycle</strong>. You cannot make small monthly minimum payments over several months.</p>
    </div>
    <p>Charge cards force you to be <strong>responsible with your spending</strong>, because you have to pay your balance off every single month.</p>

    <h3>Charge Cards vs Credit Cards</h3>
<pre><code>PAYMENT EACH MONTH
  Charge : Full payment required
  Credit : Minimum payment allowed

SPENDING LIMIT
  Charge : No hard limit
  Credit : Strict limit

ANNUAL FEES
  Charge : Usually high
  Credit : Low or none

INTEREST
  Charge : None (paid in full)
  Credit : High if not paid in full

ACCEPTANCE
  Charge : Not as widely accepted
  Credit : Accepted by most sellers

CREDIT NEEDED
  Charge : Typically very good credit
  Credit : Some cards available to
           people with lower scores</code></pre>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Do not mix up the three cards! <strong>Credit card</strong> = borrow money and pay it back later (with interest). <strong>Debit card</strong> = money taken straight from your checking account. <strong>Charge card</strong> = must pay the full balance every month.</p>
    </div>

    <h3>Advantages and Disadvantages of Payment Cards</h3>
    <p><strong>Advantages</strong></p>
    <ul>
      <li><strong>Worldwide acceptance</strong></li>
      <li><strong>Built-in security</strong> for merchants</li>
    </ul>
    <p><strong>Disadvantages</strong></p>
    <ul>
      <li>Payment card service companies charge merchants <strong>per-transaction fees</strong> and <strong>monthly processing fees</strong>.</li>
    </ul>

    <div class="divider"></div>

    <h2>Payment Acceptance and Processing</h2>
    <p>Once a merchant receives the consumer's payment card information, these steps are followed:</p>
    <ol>
      <li>The merchant <strong>authenticates</strong> the payment card.</li>
      <li>The merchant <strong>checks with the payment card issuer</strong> to make sure that credit or funds are available.</li>
      <li>The issuer puts a <strong>hold</strong> on the credit line (or on the funds) needed to cover the charge.</li>
      <li><strong>Settlement</strong> occurs.</li>
    </ol>

    <h3>Open Loop and Closed Loop Payment Cards</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Open Loop Card</span>
      <p>An <strong>open loop payment card</strong> is one that can be <strong>widely used</strong>. The most common example is a credit card from a major payment processor, such as <strong>Visa</strong> or <strong>MasterCard</strong>.</p>
    </div>
    <div class="callout callout-blue">
      <span class="callout-label">Closed Loop Card</span>
      <p><strong>Closed loop payment cards</strong> are <strong>limited</strong> in terms of where they can be used. The most common examples are <strong>store-specific credit cards</strong> and <strong>gift cards</strong>.</p>
    </div>
    <p>More about closed loop cards:</p>
    <ul>
      <li>Store credit cards are generally limited to purchases from the <strong>issuing retailer</strong>.</li>
      <li>They typically give benefits such as <strong>discounts</strong> and <strong>loyalty program points</strong> that can be redeemed on future purchases.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Open loop</strong> = can be used widely (Visa, MasterCard). <strong>Closed loop</strong> = limited to certain places (store credit cards, gift cards).</p>
    </div>

    <h3>Merchant Accounts</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>merchant account</strong> is a type of business bank account that allows a business to <strong>accept and process electronic payment card transactions</strong>.</p>
    </div>
    <ul>
      <li>A business must partner with a <strong>merchant acquiring bank</strong>. This bank handles all communications in an electronic payment transaction.</li>
      <li>Merchant account relationships are <strong>essential for online businesses</strong>.</li>
    </ul>

    <h3>Processing Payments Online</h3>
    <p><strong>InternetSecure</strong></p>
    <ul>
      <li>A provider of <strong>card processing systems</strong>.</li>
      <li>It offers a credit card processing system for <strong>ecommerce merchants</strong>, and also <strong>point of sale</strong> services for retail and mail order businesses.</li>
    </ul>
    <p><strong>First Data</strong></p>
    <ul>
      <li><strong>First Data Corporation</strong> is a financial services company headquartered in <strong>Atlanta, Georgia, United States</strong>.</li>
      <li>It handles <strong>45%</strong> of all US credit and debit transactions.</li>
      <li>It also handles <strong>prepaid gift card processing</strong> for many US brands, such as <strong>Starbucks</strong>.</li>
    </ul>

    <h3>How Online Payment Processing Works</h3>
<pre><code>1. Customer picks products or
   services and goes to checkout
        ↓
2. Customer selects a payment
   option
        ↓
3. Encrypted transaction data is
   sent to the payment processor
        ↓
4. Transaction details are sent to
   the issuing bank for approval
        ↓
5. Issuing bank authorizes the
   payment
        ↓
6. Acquiring bank is informed
   about the authorization
        ↓
7. Funds move from the customer's
   bank account to the merchant's
   account</code></pre>

    <div class="callout callout-green">
      <span class="callout-label">Tip</span>
      <p>Easy way to remember: <strong>Customer → Processor → Issuing bank (approves) → Acquiring bank → Merchant gets the money</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Electronic Cash</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Electronic cash</strong> is a digital money product. It gives a way to pay for products and services <strong>without paper or coin currency</strong>. It can serve as a <strong>substitute for government-issued physical currency</strong>.</p>
    </div>
    <p>Electronic cash is mainly used in <strong>micropayments</strong>.</p>

    <h3>Micropayments</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>micropayment</strong> is a small transaction, often carried out online, that can be as small as <strong>a fraction of a cent</strong>.</p>
    </div>
    <p>Depending on the payment system, a micropayment may be defined as any transaction smaller than <strong>$1.00</strong>, <strong>$5.00</strong>, or more.</p>

    <h3>Two Important Characteristics</h3>
    <p>Electronic cash should have two important things in common with physical currency:</p>
    <ol>
      <li>It must be possible to spend electronic cash <strong>only once</strong>.</li>
      <li>Electronic cash ought to be <strong>anonymous</strong>.</li>
    </ol>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p>Electronic cash must be <strong>spent only once</strong> and should be <strong>anonymous</strong>, just like physical cash.</p>
    </div>

    <h3>How eCash Works</h3>
    <ul>
      <li>An eCash user <strong>downloads electronic money from their bank account</strong> and stores it on their <strong>hard drive</strong>.</li>
      <li>When ready to pay an Internet merchant or shareware provider, the <strong>same software</strong> takes the amount from the user's eCash <strong>"wallet"</strong> and adds it to the merchant's <strong>"wallet"</strong>.</li>
    </ul>

    <h3>Holding Electronic Cash: Online and Offline</h3>
    <p><strong>Online cash storage</strong></p>
    <ul>
      <li>A <strong>trusted third party</strong> (an online bank) is involved in <strong>all transfers</strong> of electronic cash.</li>
      <li>It holds the consumers' cash accounts.</li>
    </ul>
    <p><strong>Offline cash storage</strong></p>
    <ul>
      <li>The <strong>virtual equivalent of money kept in a wallet</strong>.</li>
      <li><strong>No third party</strong> is involved in the transaction.</li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Exam trap! <strong>Offline</strong> cash storage is the virtual equivalent of money kept in a wallet (no third party). <strong>Online</strong> cash storage always involves a trusted third party such as an online bank.</p>
    </div>

    <h3>Advantages and Disadvantages of Electronic Cash</h3>
    <p><strong>Advantages</strong></p>
    <ul>
      <li>Transactions are <strong>more efficient</strong>.</li>
      <li>Transfer on the Internet <strong>costs less</strong> than processing credit card transactions.</li>
    </ul>
    <p><strong>Disadvantages</strong></p>
    <ul>
      <li>Its use provides <strong>no audit trail</strong>.</li>
      <li>True electronic cash is <strong>not traceable</strong>, so <strong>money laundering</strong> is a problem.</li>
    </ul>

    <h3>Providing Security for Electronic Cash</h3>
    <ul>
      <li><strong>Cryptographic algorithms</strong> - the keys to creating <strong>tamperproof</strong> electronic cash that can be traced back to its origins.</li>
      <li><strong>Anonymous electronic cash</strong> - electronic cash that <strong>cannot be traced back</strong> to the person who spent it.</li>
      <li><strong>Creating truly anonymous electronic cash</strong> - requires the bank to issue electronic cash with <strong>embedded serial numbers</strong>.</li>
    </ul>

    <h3>Double-Spending of Electronic Cash</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p><strong>Double-spending</strong> is the risk that a digital currency can be <strong>spent twice</strong>.</p>
    </div>
    <ul>
      <li>It is a problem <strong>unique to digital currencies</strong>, because digital information can be <strong>reproduced</strong> relatively easily by individuals.</li>
      <li>It occurs when a <strong>blockchain network</strong> is disrupted and cryptocurrency is essentially <strong>stolen</strong>.</li>
      <li>The thief may send a <strong>copy</strong> of the currency transaction to make it look legitimate, or may <strong>erase</strong> the transaction altogether.</li>
    </ul>

    <div class="callout callout-red">
      <span class="callout-label">Warning</span>
      <p>Double-spending means spending the <strong>same piece of electronic cash twice</strong> (for example, sending the same electronic currency to two different vendors).</p>
    </div>

    <h3>Electronic Cash Systems</h3>
    <p><strong>CheckFree</strong></p>
    <ul>
      <li>The <strong>largest online bill processor</strong> in the world.</li>
      <li>It lets you <strong>receive and pay your bills online</strong>.</li>
      <li>Provides online payment processing services.</li>
    </ul>
    <p><strong>Clickshare</strong></p>
    <ul>
      <li>An electronic cash system aimed at <strong>magazine and newspaper publishers</strong>.</li>
    </ul>
    <p><strong>InternetCash</strong></p>
    <ul>
      <li>Provides electronic currency that is very similar to <strong>traditional cash</strong>.</li>
      <li>Customers first <strong>buy an InternetCash card from a store</strong>.</li>
      <li>Then they go online and <strong>activate the card</strong> by entering a <strong>20-digit code</strong> and creating a <strong>PIN</strong>.</li>
      <li>After activation, they can pay at <strong>any site that accepts it</strong>.</li>
    </ul>
    <p><strong>PayPal</strong></p>
    <ul>
      <li>Provides <strong>payment processing services</strong> to businesses and to individuals.</li>
      <li>PayPal.com is a <strong>free service</strong> that earns a profit on the <strong>float</strong> - the money deposited in PayPal accounts.</li>
      <li>The free payment clearing service PayPal gives to individuals is called a <strong>peer-to-peer payment system</strong>.</li>
      <li>It lets customers send money <strong>instantly and securely</strong> to anyone with an <strong>e-mail address</strong>, including an online merchant.</li>
    </ul>

    <div class="divider"></div>

    <h2>Electronic Wallets</h2>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>An <strong>electronic wallet</strong> works like a physical wallet. It holds <strong>credit cards</strong>, <strong>electronic cash</strong>, <strong>owner identification</strong>, and <strong>owner contact information</strong>.</p>
    </div>
    <ul>
      <li>It provides the owner's contact information at an electronic commerce site's <strong>checkout counter</strong>.</li>
      <li>It makes <strong>shopping more efficient</strong>.</li>
    </ul>

    <h3>Types of Electronic Wallets</h3>
    <ul>
      <li><strong>Server-side electronic wallet</strong> - stores the customer's information on a <strong>remote server</strong> belonging to a particular merchant or wallet publisher.</li>
      <li><strong>Client-side electronic wallet</strong> - stores the consumer's information on <strong>his or her own computer</strong>.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Server-side</strong> wallet = information kept on a <strong>remote server</strong>. <strong>Client-side</strong> wallet = information kept on the <strong>user's own computer</strong>.</p>
    </div>

    <div class="divider"></div>

    <h2>Stored-Value Cards</h2>

    <h3>Stored-Value Card (SVC)</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>stored-value card (SVC)</strong> is a payment card with a <strong>monetary value stored on the card itself</strong>, not in an external account kept by a financial institution.</p>
    </div>
    <ul>
      <li>This means <strong>no network access</strong> is needed by the payment collection terminals. Funds can be withdrawn and deposited straight from the card.</li>
      <li><strong>Examples:</strong> a telephone card with prepaid minutes, or a gift card from a department store.</li>
    </ul>

    <h3>Magnetic Stripe Cards</h3>
    <ul>
      <li>A <strong>magnetic stripe card</strong> is a type of pass that lets the user <strong>complete electronic transactions</strong> or <strong>access a locked physical space</strong>.</li>
      <li>The <strong>"stripe"</strong> contains embedded information that <strong>identifies its user</strong>.</li>
      <li>Types in use today include <strong>driver's licenses</strong>, <strong>credit cards</strong>, and <strong>employee ID cards</strong>.</li>
    </ul>

    <h3>Smart Cards</h3>
    <div class="callout callout-blue">
      <span class="callout-label">Definition</span>
      <p>A <strong>smart card</strong> stores information on a <strong>microprocessor or memory chip</strong>, rather than on the magnetic stripe found on ATM and credit cards.</p>
    </div>
    <ul>
      <li>It can hold <strong>private user data</strong>, such as financial facts, <strong>encryption keys</strong>, and <strong>credit card numbers</strong>.</li>
      <li>It can store about <strong>100 times more information</strong> than a magnetic stripe plastic card.</li>
    </ul>

    <div class="callout callout-yellow">
      <span class="callout-label">Remember</span>
      <p><strong>Magnetic stripe card</strong> = data on a stripe. <strong>Smart card</strong> = data on a chip, and holds about <strong>100 times more</strong> information.</p>
    </div>

    <div class="divider"></div>

    <h2>Practice Questions</h2>
    <p>Test yourself. Try to answer before reading the answers below.</p>
    <ol>
      <li>______ is a general term for any value storage and exchange system created by a private (non-governmental) entity that does not use paper documents or coins, and can serve as a substitute for government-issued physical currency.</li>
      <li>Internet payments for items costing from a few cents to about a dollar are called ______.</li>
      <li>______ is spending a particular piece of electronic cash twice by submitting the same electronic currency to two different vendors.</li>
      <li>______ is a technique used by criminals to convert money they got illegally into cash they can spend without it being identified as the proceeds of an illegal activity.</li>
      <li>True or False: Online cash storage is the virtual equivalent of money kept in a wallet.</li>
      <li>______ is electronic cash that, like bills and coins, cannot be traced back to the person who spent it.</li>
    </ol>

    <div class="callout callout-green">
      <span class="callout-label">Answers</span>
      <p>1. <strong>Electronic cash</strong><br>2. <strong>Micropayments</strong><br>3. <strong>Double-spending</strong><br>4. <strong>Money laundering</strong><br>5. <strong>False</strong> - that describes <em>offline</em> cash storage<br>6. <strong>Anonymous electronic cash</strong></p>
    </div>
  `,
  summary: {
    topic: 'Payment Systems for Electronic Commerce',
    subTopics: [
      'Lesson Objectives',
      'Online Payment Basics',
      'Most Common Ways to Pay',
      'Automated Electronic Transfers',
      'Scrip',
      'Payment Cards',
      'Credit Card',
      'Debit Card',
      'Charge Card',
      'Charge Cards vs Credit Cards',
      'Advantages and Disadvantages of Payment Cards',
      'Payment Acceptance and Processing',
      'Open Loop and Closed Loop Payment Cards',
      'Merchant Accounts',
      'Processing Payments Online',
      'How Online Payment Processing Works',
      'Electronic Cash',
      'Micropayments',
      'Two Important Characteristics',
      'How eCash Works',
      'Holding Electronic Cash: Online and Offline',
      'Advantages and Disadvantages of Electronic Cash',
      'Providing Security for Electronic Cash',
      'Double-Spending of Electronic Cash',
      'Electronic Cash Systems',
      'Electronic Wallets',
      'Types of Electronic Wallets',
      'Stored-Value Cards',
      'Magnetic Stripe Cards',
      'Smart Cards',
      'Practice Questions',
    ],
    definitions: [
      { term: 'Scrip', meaning: 'Something that is not currency but can be used in the same way as money, such as gift cards, reward points, and coupons.' },
      { term: 'Payment Cards', meaning: 'A general term for all types of plastic cards used to make purchases.' },
      { term: 'Credit Card', meaning: 'A card issued by a financial institution that lets the cardholder borrow funds and pay them back with interest, within a spending limit based on credit history.' },
      { term: 'Debit Card', meaning: 'A payment card that pays by deducting money directly from a consumer\'s checking account instead of borrowing from a bank.' },
      { term: 'Charge Card', meaning: 'A type of credit card that requires the full balance to be paid at the end of each billing cycle.' },
      { term: 'Open Loop Payment Card', meaning: 'A payment card that can be widely used, such as a Visa or MasterCard credit card.' },
      { term: 'Closed Loop Payment Card', meaning: 'A payment card limited in where it can be used, such as a store-specific credit card or gift card.' },
      { term: 'Merchant Account', meaning: 'A business bank account that allows a business to accept and process electronic payment card transactions.' },
      { term: 'Merchant Acquiring Bank', meaning: 'The bank a business partners with to handle all communications in an electronic payment transaction.' },
      { term: 'InternetSecure', meaning: 'A provider of card processing systems for ecommerce merchants, plus point of sale services for retail and mail order businesses.' },
      { term: 'First Data', meaning: 'A financial services company based in Atlanta, Georgia that handles 45% of all US credit and debit transactions and prepaid gift card processing.' },
      { term: 'Electronic Cash', meaning: 'A digital money product used to pay without paper or coins; it can substitute for government-issued physical currency.' },
      { term: 'Micropayment', meaning: 'A small online transaction that can be as small as a fraction of a cent, often defined as less than $1.00 or $5.00.' },
      { term: 'Online Cash Storage', meaning: 'Electronic cash storage where a trusted third party (an online bank) is involved in all transfers and holds consumer cash accounts.' },
      { term: 'Offline Cash Storage', meaning: 'The virtual equivalent of money kept in a wallet, with no third party involved in the transaction.' },
      { term: 'Cryptographic Algorithms', meaning: 'The keys to creating tamperproof electronic cash that can be traced back to its origins.' },
      { term: 'Anonymous Electronic Cash', meaning: 'Electronic cash that cannot be traced back to the person who spent it.' },
      { term: 'Double-Spending', meaning: 'The risk that a digital currency can be spent twice, because digital information is easy to copy.' },
      { term: 'Money Laundering', meaning: 'A technique criminals use to convert illegally obtained money into cash that cannot be identified as the proceeds of illegal activity.' },
      { term: 'CheckFree', meaning: 'The largest online bill processor in the world; lets users receive and pay bills online.' },
      { term: 'Clickshare', meaning: 'An electronic cash system aimed at magazine and newspaper publishers.' },
      { term: 'InternetCash', meaning: 'An electronic currency system similar to traditional cash; users buy a card in a store, then activate it online with a 20-digit code and a PIN.' },
      { term: 'PayPal', meaning: 'A payment processing service for businesses and individuals that lets users send money instantly and securely to anyone with an e-mail address.' },
      { term: 'Float', meaning: 'Money deposited in PayPal accounts, on which PayPal earns a profit.' },
      { term: 'Peer-to-Peer Payment System', meaning: 'The free payment clearing service PayPal provides to individuals.' },
      { term: 'Electronic Wallet', meaning: 'A digital tool, like a physical wallet, that holds credit cards, electronic cash, owner identification, and contact information.' },
      { term: 'Server-Side Electronic Wallet', meaning: 'A wallet that stores customer information on a remote server belonging to a merchant or wallet publisher.' },
      { term: 'Client-Side Electronic Wallet', meaning: 'A wallet that stores consumer information on the consumer\'s own computer.' },
      { term: 'Stored-Value Card (SVC)', meaning: 'A payment card with monetary value stored on the card itself, not in an external account; no network access is needed.' },
      { term: 'Magnetic Stripe Card', meaning: 'A card with a stripe containing embedded user information, used for electronic transactions or to access locked spaces.' },
      { term: 'Smart Card', meaning: 'A card that stores information on a microprocessor or memory chip and can hold about 100 times more data than a magnetic stripe card.' },
    ],
    keyPoints: [
      'Cash, checks, credit cards, and debit cards account for more than 90% of all consumer payments.',
      'Popular automated electronic transfers include auto loans, insurance payments, and mortgage payments.',
      'Scrip is not currency but can be used like money (gift cards, reward points, coupons).',
      'Credit card = borrowed money repaid with interest; debit card = money taken directly from a checking account; charge card = full balance due every billing cycle.',
      'Charge cards: full monthly payment, no hard limit, usually high annual fees, no interest, less widely accepted, need very good credit.',
      'Credit cards: minimum payment allowed, strict limit, low or no annual fees, high interest if unpaid, accepted by most sellers.',
      'Payment card advantages: worldwide acceptance and built-in security for merchants. Disadvantage: merchants pay per-transaction and monthly processing fees.',
      'Card processing steps: merchant authenticates the card, checks with the issuer and a hold is placed on funds or credit, then settlement occurs.',
      'Open loop cards (Visa, MasterCard) are widely usable; closed loop cards (store cards, gift cards) are limited to specific places.',
      'A merchant account and a merchant acquiring bank are essential for online businesses to accept card payments.',
      'Online payment flow: customer checks out, picks a payment option, encrypted data goes to the processor, the issuing bank authorizes, the acquiring bank is informed, and funds move to the merchant.',
      'Electronic cash is mainly used for micropayments and must be spendable only once and should be anonymous.',
      'eCash is downloaded from a bank account, stored on the hard drive, and moved from the user wallet to the merchant wallet when paying.',
      'Online cash storage involves a trusted third party; offline cash storage is like money in a wallet with no third party. (Online cash storage being a wallet equivalent is FALSE.)',
      'Electronic cash is efficient and cheaper than credit card processing, but has no audit trail and makes money laundering a problem.',
      'Cryptographic algorithms make e-cash tamperproof; truly anonymous e-cash needs the bank to issue it with embedded serial numbers.',
      'Double-spending is a risk unique to digital currencies because digital information is easy to copy; thieves may copy or erase transactions.',
      'Electronic cash systems: CheckFree (bill payment), Clickshare (publishers), InternetCash (20-digit code and PIN), PayPal (peer-to-peer, earns profit on the float).',
      'Electronic wallets make shopping more efficient; server-side wallets store data on a remote server, client-side wallets store data on the user computer.',
      'Stored-value cards keep the money on the card itself, so no network access is needed (e.g. prepaid phone card, gift card).',
      'Magnetic stripe cards store identifying data on a stripe; smart cards use a chip and can store about 100 times more data, including encryption keys.',
    ],
  },
},


















































{
id: 6,
title: 'E-Commerce Platforms and Tools',
content: `
<span class="lesson-badge">LESSON 06</span>
<h1>E-Commerce Platforms and Tools</h1>
<div class="meta-info">ICT2142 <span>•</span> 7 min read</div>

<p>Every online store needs a <strong>platform</strong> to run on. There are three main choices: <strong>open-source</strong>, <strong>SaaS</strong> and <strong>custom-built</strong> solutions. This lesson explains each one and shows you how to pick the right one for a business.</p>

<div class="callout callout-blue">
  <span class="callout-label">Learning Objectives</span>
  <ul>
    <li>Identify the main categories of e-commerce platforms: <strong>open-source</strong>, <strong>SaaS</strong> and <strong>custom-developed</strong> solutions.</li>
    <li>Explain the key <strong>features, benefits and limitations</strong> of each platform type.</li>
    <li>Describe situations where a <strong>custom-built solution</strong> is more suitable than an off-the-shelf platform.</li>
    <li>Apply practical criteria (<strong>cost, scalability, technical skill and business needs</strong>) to select the right e-commerce platform.</li>
  </ul>
</div>

<div class="divider"></div>

<h2>1. Open-Source E-Commerce Platforms</h2>
<p><strong>Open-source platforms</strong> provide free, publicly available <strong>source code</strong>. A business can download it, host it and customize it by itself.</p>
<p><strong>Examples:</strong> <code>WooCommerce</code>, <code>Magento Open Source</code>, <code>PrestaShop</code> and <code>OpenCart</code>.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Free to use</strong>, but hosting, development and maintenance still cost money.</li>
  <li><strong>Full control</strong> over source code, design and functionality.</li>
  <li>Needs <strong>in-house or hired technical expertise</strong> to build and maintain the store.</li>
  <li>Has a <strong>large plugin/extension ecosystem</strong> and strong community support.</li>
  <li>The business is <strong>responsible for security updates and scaling</strong>.</li>
</ul>

<div class="callout callout-green">
  <span class="callout-label">Best Suited For</span>
  <p>Businesses that have <strong>technical skills in-house</strong> and want <strong>complete ownership and customization</strong>.</p>
</div>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>"Open-source" does <strong>not</strong> mean "zero cost". The software is free, but <strong>hosting, development and maintenance</strong> still cost money. This is a common exam trap.</p>
</div>

<div class="divider"></div>

<h2>2. SaaS E-Commerce Platforms</h2>
<p><strong>Software-as-a-Service (SaaS)</strong> platforms are <strong>fully hosted and managed</strong> by a third-party provider. The business pays on a <strong>subscription basis</strong>.</p>
<p><strong>Examples:</strong> <code>Shopify</code>, <code>BigCommerce</code> and <code>Wix eCommerce</code>.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Quick to set up</strong> - no servers or infrastructure to manage.</li>
  <li>The <strong>provider handles</strong> hosting, security, updates and scalability.</li>
  <li><strong>Monthly or annual subscription fee</strong>; customization is <strong>more limited</strong>.</li>
  <li>Comes with <strong>built-in payment gateways, themes</strong> and an <strong>apps/add-ons marketplace</strong>.</li>
  <li><strong>Minimal technical expertise</strong> is needed to launch and run the store.</li>
</ul>

<div class="callout callout-green">
  <span class="callout-label">Best Suited For</span>
  <p><strong>Startups and SMEs</strong> that want to <strong>launch quickly</strong> with <strong>minimal technical overhead</strong>.</p>
</div>

<div class="divider"></div>

<h2>3. Custom-Developed E-Commerce Solutions</h2>
<p>A <strong>custom-developed solution</strong> is built <strong>from scratch</strong> (or heavily customized) using web frameworks and original code. This lets it <strong>precisely match</strong> a business's unique requirements and existing systems.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Complete flexibility</strong> - tailored features, workflows and UX (user experience).</li>
  <li><strong>Deep integration</strong> with existing <strong>ERP, CRM</strong> or <strong>legacy systems</strong>.</li>
  <li><strong>Higher development cost</strong> and <strong>longer time-to-market</strong>.</li>
  <li><strong>Full ownership</strong> of code and data, with <strong>no licensing limits</strong>.</li>
  <li>Needs a <strong>dedicated development and maintenance team</strong>.</li>
</ul>

<div class="callout callout-green">
  <span class="callout-label">Best Suited For</span>
  <p><strong>Large enterprises</strong> with <strong>unique, complex requirements</strong> that <strong>no existing platform can meet</strong>.</p>
</div>

<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <p>A custom-built solution is more suitable than an off-the-shelf platform when the business has <strong>unique needs</strong>, must <strong>deeply integrate</strong> with existing systems (ERP, CRM, legacy) and can afford a <strong>dedicated development team</strong>.</p>
</div>

<div class="divider"></div>

<h2>Comparing the Three Approaches</h2>
<pre><code>+-------------+--------------------+--------------------+--------------------+ | | Open-Source | SaaS | Custom-Built | +-------------+--------------------+--------------------+--------------------+ | Cost | Low license cost, | Subscription fee, | Highest cost and | | | DIY hosting | hosted for you | timeline | +-------------+--------------------+--------------------+--------------------+ | Customizing | High | Limited | Unlimited | +-------------+--------------------+--------------------+--------------------+ | Tech skill | Needs technical | Little technical | Requires a dev | | | skill | skill needed | team | +-------------+--------------------+--------------------+--------------------+ | Security / | You manage it | Provider manages | Full control and | | Updates | | it | ownership | +-------------+--------------------+--------------------+--------------------+</code></pre>
<div class="callout callout-yellow">
  <span class="callout-label">Remember</span>
  <ul>
    <li><strong>Open-Source</strong> → low license cost, high customization, you manage security/updates.</li>
    <li><strong>SaaS</strong> → subscription fee, limited customization, provider manages security/updates.</li>
    <li><strong>Custom-Built</strong> → highest cost, unlimited customization, full control and ownership.</li>
  </ul>
</div>

<div class="divider"></div>

<h2>Selecting the Right Platform</h2>
<p>When choosing a platform, a business should look at these <strong>six key decision factors</strong>:</p>

<ol>
  <li><strong>Budget</strong> - upfront cost versus ongoing subscription fees.</li>
  <li><strong>Technical Expertise</strong> - skills available in-house or through hiring.</li>
  <li><strong>Customization Needs</strong> - how unique the required features are.</li>
  <li><strong>Time-to-Market</strong> - how quickly the store must launch.</li>
  <li><strong>Scalability</strong> - expected growth in traffic and orders.</li>
  <li><strong>Integration Needs</strong> - connecting with ERP, CRM or other systems.</li>
</ol>

<div class="callout callout-green">
  <span class="callout-label">Tip</span>
  <p>Use the memory hook <strong>B-T-C-T-S-I</strong>: <strong>B</strong>udget, <strong>T</strong>echnical expertise, <strong>C</strong>ustomization, <strong>T</strong>ime-to-market, <strong>S</strong>calability, <strong>I</strong>ntegration.</p>
</div>

<div class="divider"></div>

<h2>Summary and Key Takeaways</h2>
<ul>
  <li><strong>Open-source</strong> platforms give full control and customization, but need in-house technical skill.</li>
  <li><strong>SaaS</strong> platforms let a business launch quickly with low technical overhead, but with less flexibility.</li>
  <li><strong>Custom-developed</strong> solutions give complete flexibility for unique needs, but need the biggest investment.</li>
  <li>The right choice depends on <strong>budget, technical expertise, customization needs, timeline, scalability and integration requirements</strong>.</li>
</ul>

<div class="callout callout-red">
  <span class="callout-label">Warning</span>
  <p>There is <strong>no single "best" platform</strong> in general. In exams, always justify your choice using the business's needs, not by saying one platform is always better.</p>
</div>

<div class="divider"></div>

<h2>Sample Questions</h2>

<h3>Question 1</h3>
<p>Briefly explain why a startup with limited technical staff and a need to launch quickly would typically prefer a SaaS platform over a custom-developed solution.</p>
<div class="callout callout-green">
  <span class="callout-label">Answer Hint</span>
  <ul>
    <li>SaaS is <strong>quick to set up</strong> with no servers or infrastructure to manage.</li>
    <li>It needs <strong>minimal technical expertise</strong>, which suits limited technical staff.</li>
    <li>The <strong>provider handles</strong> hosting, security, updates and scalability.</li>
    <li>Custom-built solutions have <strong>higher cost</strong> and <strong>longer time-to-market</strong>, and need a dedicated development team.</li>
  </ul>
</div>

<h3>Question 2</h3>
<p>List and briefly describe THREE factors a business should consider when choosing between an open-source, SaaS or custom-developed e-commerce platform.</p>
<div class="callout callout-green">
  <span class="callout-label">Answer Hint</span>
  <p>Pick any three from the six factors: <strong>Budget</strong>, <strong>Technical Expertise</strong>, <strong>Customization Needs</strong>, <strong>Time-to-Market</strong>, <strong>Scalability</strong>, <strong>Integration Needs</strong>. Give a one-line description for each, as shown in the list above.</p>
</div>

`,
summary: {
topic: 'E-Commerce Platforms and Tools: Open-Source, SaaS and Custom-Built solutions',
subTopics: [
'Learning Objectives',
'Open-Source E-Commerce Platforms',
'SaaS E-Commerce Platforms',
'Custom-Developed E-Commerce Solutions',
'Comparing the Three Approaches',
'Selecting the Right Platform',
'Summary and Key Takeaways',
'Sample Questions',
],
definitions: [
{ term: 'E-Commerce Platform', meaning: 'The software foundation on which an online store is built and run.' },
{ term: 'Open-Source Platform', meaning: 'A platform with free, publicly available source code that a business can download, host and customize itself.' },
{ term: 'SaaS (Software-as-a-Service)', meaning: 'A platform fully hosted and managed by a third-party provider on a subscription basis.' },
{ term: 'Custom-Developed Solution', meaning: 'A solution built from scratch (or heavily customized) with web frameworks and original code to match unique business needs.' },
{ term: 'WooCommerce', meaning: 'An example of an open-source e-commerce platform.' },
{ term: 'Shopify', meaning: 'An example of a SaaS e-commerce platform.' },
{ term: 'Time-to-Market', meaning: 'How quickly a store can be built and launched.' },
{ term: 'Scalability', meaning: 'The ability to handle growth in traffic and orders.' },
{ term: 'ERP', meaning: 'Enterprise Resource Planning system, a business system that a store may need to integrate with.' },
{ term: 'CRM', meaning: 'Customer Relationship Management system, a business system that a store may need to integrate with.' },
],
keyPoints: [
'There are three main platform types: open-source, SaaS and custom-developed.',
'Open-source examples: WooCommerce, Magento Open Source, PrestaShop, OpenCart.',
'Open-source is free to use, but hosting, development and maintenance still cost money.',
'Open-source gives full control but the business handles security updates and scaling, and needs technical expertise.',
'Open-source is best for businesses with in-house technical skills that want complete ownership and customization.',
'SaaS examples: Shopify, BigCommerce, Wix eCommerce.',
'SaaS is quick to set up; the provider handles hosting, security, updates and scalability.',
'SaaS has a monthly or annual fee and more limited customization, with built-in payment gateways, themes and add-on marketplace.',
'SaaS is best for startups and SMEs that want to launch quickly with minimal technical overhead.',
'Custom-built solutions give complete flexibility and deep integration with ERP, CRM or legacy systems.',
'Custom-built has the highest cost, longest time-to-market and needs a dedicated development and maintenance team.',
'Custom-built gives full ownership of code and data with no licensing limits.',
'Custom-built is best for large enterprises with unique, complex needs that no existing platform can meet.',
'Six selection factors: Budget, Technical Expertise, Customization Needs, Time-to-Market, Scalability, Integration Needs.',
'The right platform depends on business needs, not on which platform is "best" in general.',
],
},
},

]