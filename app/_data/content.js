import { Card } from "primereact/card";

const frameworkCode = `
  module.exports = {
    async headers() {
      const headers = [];
      if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
        headers.push({
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex',
            },
          ],
          source: '/:path*',
        });
      }
      return headers;
    },
   };   
  `;

const noFrameworkCode = `
  {
    "headers": [
      {
        "source": "/",
        "has": [
          {
            "type": "host",
            "value": "example.com"
          }
        ],
        "headers" : [
          {
            "key" : "X-Robots-Tag",
            "value" : "noindex"
          }
        ]
      }
    ]
   }   
  `;

const content = [
  {
    id: 1,
    question: (
      <p>
        Describe how you solved a challenge that one of your previous teams
        faced. How did you determine your solution was successful?
      </p>
    ),
    answer: (
      <>
        <p>
          While supporting Jigsaw we often encountered common issues that could
          be resolved with simple browser or network configurations. I was
          always on the hunt for ways to help customers and improve our team’s
          responses. Whenever I would find a good way to communicate it to the
          customer we would create a macro for the team to use in future
          responses.
        </p>
        <p>
          I knew my solutions and the way I communicated them were successful
          because it became standard practice to use my responses. Our customers
          also frequently let us know of the ease and benefit of the fixes and
          communications provided.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: (
      <p>
        How would you compare Next.js with another framework? Feel free to
        compare with a framework of your choice.
      </p>
    ),
    answer: (
      <>
        <p>
          Next.js and Angular are both development frameworks for building
          scalable web applications. Both are javascript based and contain
          libraries that will jump start your project with features like
          routing, and client/server communications.
        </p>
        <p>
          While Angular is quite powerful, it has a high learning curve. Its
          feature richness is a great asset if you plan on using those features.
          If you don’t then you’re left with a ton of unnecessary boilerplate
          that slows down development.
        </p>
        <p>
          Next.js shines due in part to the fact that it is a React framework.
          React concepts, functions, and components can easily be implemented
          using Next.js. It’s lightweight, flexible, and easily deployable. In
          addition the Vercel ecosystem is a fantastic resource to be able to
          leverage. When you need to introduce a specific feature, there’s a
          package available for it.
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: (
      <p>
        When would you choose to use Edge Functions, Serverless Functions, or
        Edge Middleware with Vercel?
      </p>
    ),
    answer: (
      <>
        <p>
          Use Edge Functions:
          <ul>
            <li>
              When costs may be a concern. Edge functions have lower costs vs
              serverless functions
            </li>
            <li>When low latency global availability is a priority</li>
          </ul>
        </p>
        <p>
          Use Serverless Functions:
          <ul>
            <li>When node API is required</li>
          </ul>
        </p>
        <p>
          Use Edge Middleware:
          <ul>
            <li>For functions that need to be run before cache</li>
            <li>
              For providing personalization and speed to static site generation
            </li>
            <li>
              Removing need for 3rd party scripts, reducing code sent to client
              and improving site
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 4,
    question: (
      <p>
        A customer has a project on Vercel and they want to redirect the /blog
        path to another website. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.
      </p>
    ),
    answer: (
      <>
        <Card style={{ background: "var(--surface-200)" }}>
          <p>Hello Customer,</p>
          <p>
            I’d be happy to help you redirect the /blog path to xyz.com. There
            are a few different ways to set up a redirect.
          </p>
          <p>
            I’m going to ask you a few questions to help me better understand
            your setup so that I can help offer the best approach.
          </p>
          <ul>
            <li>Are you using an edge or serverless deployment?</li>
            <li>Will this be a temporary or permanent redirect?</li>
          </ul>
          <p>
            Details about redirect options can be found here:
            https://vercel.com/docs/edge-network/redirects
          </p>
          <p>I look forward to your response. </p>

          <div>
            <p>Thanks!</p>
            <p>Remy Z Romano</p>
            <p>Senior Customer Success Engineer</p>
          </div>
        </Card>
        <p>Documentation: https://vercel.com/docs/edge-network/redirects</p>
        <p>
          Feedback: I initially approached this request with a few questions to
          help me offer the best redirect option. I also included the redirect
          options documentation just in case they wanted to refer to it. I
          closed out by highlighting that I was waiting for their response so
          that the documentation link does not give them the impression that I
          am leaving it up to them to figure out.
        </p>
      </>
    ),
  },
  {
    id: 5,
    question: (
      <>
        <p>
          Imagine that the customer from Question 4 responds with the following
          email:
        </p>
        <p className="font-italic">
          “I’m so frustrated. I’ve been trying to make this work for hours and I
          just can’t figure it out. It must be a platform issue so why don’t you
          just fix it for me instead of asking me questions.”
        </p>
        <p>What response would you write back?</p>
      </>
    ),
    answer: (
      <>
        <Card style={{ background: "var(--surface-200)" }}>
          <p>Hello Customer,</p>
          <p>
            I completely understand your frustration. I want to ensure I get
            your issue fully resolved. These questions and your answers will be
            vital in helping me to identify the root of the problem and the
            source of any potential platform causes.
          </p>
          <p>
            I look forward to getting your responses and helping resolve your
            issue.
          </p>
          <div>
            <p>Thanks!</p>
            <p>Remy Z Romano</p>
            <p>Senior Customer Success Engineer</p>
          </div>
        </Card>
      </>
    ),
  },
  {
    id: 6,
    question: (
      <p>
        A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer.
        Separately, list any relevant documentation you found and any feedback
        or information you’d like to share about your decision making process.
      </p>
    ),
    answer: (
      <>
        <Card style={{ background: "var(--surface-200)" }}>
          <p>Hello Customer,</p>
          <p>
            I’d be happy to help you prevent search engine indexing across your
            site.
          </p>
          <p>
            To prevent indexing you will need to add this header to your site:
            <code>x-robots-tag: noindex</code>
          </p>
          <p>
            There are several ways to apply this header to prevent indexing that
            depend on your deployment. Let me ask you a few questions so I can
            help you determine the most appropriate option.
          </p>
          <ul>
            <li>What framework are you using?</li>
            <li>Do you know if it supports injecting response headers?</li>
          </ul>
          <p>
            If you are using a framework that can inject response headers you
            can use the built in methods. For example if you are using Next.js
            you can add this to your next.config.js:
          </p>

          <pre>
            <code>{frameworkCode}</code>
          </pre>

          <p>
            If you aren’t using a framework or it doesn’t support injecting
            response headers you can modify the Header object in your
            vercel.json file. Here’s an example:
          </p>
          <pre>
            <code>{noFrameworkCode}</code>
          </pre>
          <p>
            *Please keep in mind that using your framework’s built-in methods to
            inject headers is recommended. Doing so through vercel.json should
            only be used as a last resort and may lead to other issues.
          </p>
          <p>
            I look forward to your response. If you end up applying this
            successfully, or have any other questions please let me know.
          </p>

          <div>
            <p>Thanks!</p>
            <p>Remy Z Romano</p>
            <p>Senior Customer Success Engineer</p>
          </div>
        </Card>
        <div>
          <p>
            Source:
            https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
          </p>
          <p>
            Feedback: I adapted the steps from this guide. It focused on preview
            deployments, so I had to adapt it to production for the customer. A
            guide that is more specifically focused on using the header may be
            more beneficial than one that focuses on preview deployments only.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 7,
    question: (
      <p>How could we improve or alter this familiarization exercise?</p>
    ),
    answer: (
      <p>
        I really enjoyed this exercise. I wouldn’t change a thing. It seems like
        a good test of technical understanding while simultaneously gaining
        additional info about a person’s skills.
      </p>
    ),
  },
];

export default content;
