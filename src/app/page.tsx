import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Vercel Familiarization Project</h1>
      <h2>
        1. From this list, rank your 5 most favourite and 5 least favourite
        support tasks. Provide a brief explanation for each.
      </h2>
      <div className={styles.description}>
        <h4>Favorite</h4>
        <ol>
          <li>
            Identify, file (and, where possible, resolve) bugs in private and
            public Vercel/Next.js repos on GitHub
          </li>
          <li>
            Work with the product team to develop a new feature based on
            feedback from customers
          </li>
          <li>
            Work with engineering teams during incidents and provide updates to
            internal and external stakeholders
          </li>
          <li>
            Work with people to figure out if Vercel is suitable for their use
            case
          </li>
          <li>Help train and onboard new support teammates</li>
        </ol>
        <h4>Least Favorite</h4>
        <ol>
          <li>Respond to 50+ support requests via email every day</li>
          <li>
            Create video tutorials to help teach users a specific feature or use
            case
          </li>
          <li>Find and recruit teammates for the support team</li>
          <li>Manage a support team</li>
          <li>Run ticket review sessions to make sure tone is consistent</li>
        </ol>
      </div>
      <h2>2. What do you want to learn or do more of at work?</h2>
      <div className={styles.description}>
        <p>
          I want to do more of highly technical troubleshooting and working with
          engineers to identify and fix issues. I love working in and
          troubleshooting code and working in a wide range of languages is my
          greatest strength. My ability to understand the context of code and
          figure out possible issues along with suggesting a solution is a
          strength I can bring to this role.
        </p>
      </div>
      <h2>
        3. Describe how you solved a challenge or technical issue that you faced
        in a previous role (preferably in a previous support role). How did you
        determine that your solution was Successful?
      </h2>
      <div className={styles.description}>
        <p>
          One ticket I received was by a customer claiming that they were
          receiving the incorrect difficulty of content when playing challenges
          on our training platform. To solve this issue for the user I had to
          follow my typical troubleshooting process of:
        </p>
        <ol>
          <li>Verify issue on Platform</li>
          <li>Confirm Platform functionality</li>
          <li>Decide steps to fix</li>
        </ol>
        <p>
          First I verified that the issue was present and it looked like they
          were receiving incorrect difficulties.
        </p>
        <p>
          Next I researched into our documentation on how our platform serves
          content. I discovered that it uses an algorithm that takes a number of
          inputs into consideration when serving content. This functionality was
          poorly documented, but I was able to piece together how it should
          function by looking at the code as well as what comments there were. I
          also verified with the engineers that were online, even though the
          original creator was not present.
        </p>
        <p>
          Finally I researched the users account history to verify all of the
          inputs that could affect the algorithm, which included looking at
          every challenge the user has played over the last 3 years. I took
          notes on all of my research and created a technical write-up as I
          went.
        </p>
        <p>
          In the end I was able to use my process to confirm that the algorithm
          was working as intended, and I gave proof using the technical write-up
          that I did to give our engineers the full explanation. I then gave a
          separate customer write up that included less technical jargon, but
          explained it in terms that would apply to them.
        </p>
        <p>
          Overall there was nothing to fix with this issue, I still was able to
          create a solution by generating more documentation for both our
          engineers and our support team to avoid having to do this in-depth of
          research, while also teaching my co-workers about this situation.
        </p>
      </div>
      <h2>
        4. When would you choose to use Edge Functions, Serverless Functions, or
        Edge Middleware with Vercel?
      </h2>
      <div className={styles.description}>
        <p>
          I would choose Serverless functions when you need to run
          computationally intensive workloads with bundles up to 250 MB in size.
          Overall serverless takes longer since its region-first and will have a
          longer travel distance for the request, but it allows for more RAM and
          CPU power along with complete compatibility with the Node.js API.
        </p>
        <p>
          I would choose Edge functions for smaller and more lightweight tasks
          that need the ability to scale in a cost-effective manner. Edge
          functions run closer to the user as they are deployed globally to the
          distributed edge network, which means they will have quicker
          responses. They provide less computational power than serverless
          functions, but they are cheaper as they are charged for time
          processing requests. Edge function responses can also be cached and
          streamed in real-time which makes for even faster and cheaper
          responses.
        </p>
        <p>
          I would choose Edge Middleware if you want the same benefits of edge
          functions, but if you need to run code before the request is processed
          if you need to modify the response. This can include authentication,
          modifying request headers, and more.
        </p>
      </div>
      <h2>
        5. Imagine a customer writes in requesting help with a build issue on a
        framework or technology that you{"'"}ve not seen before. How would you
        begin troubleshooting this and what questions would you ask the customer
        to understand the situation better?
      </h2>
      <div className={styles.description}>
        <p>
          If this situation happened I would first start with gaining
          information to help me gain context around the issue. I assume there’s
          most likely some logs that support can access to look further into the
          issue without asking them anything, so I would start there first. If
          somehow I couldn’t access logs for this, I would ask for screenshots
          and the full text of any errors for the issue.
        </p>
        <p>
          Now with some context, I’d begin researching on my end to see if I can
          use the error message to find a solution. I’d start with any help
          articles that we provide for these errors, then look at previous
          tickets that also included this error and perhaps even the
          framework/technology I don’t know.
        </p>
        <p>
          If that doesn’t help me, I would search to get more context around
          what the error means and what common issues it’s caused by. This way I
          can familiarize myself enough to discuss the issue with the user.
        </p>
        <p>
          Based on my above research I would then get back to the customer to
          give them a summary of my research and initial troubleshooting steps.
          I’d ask them to test a few things out
        </p>
        <p>
          I would also earmark this ticket for the future and use some downtime
          to learn about this framework since I wasn’t familiar with it.
        </p>
      </div>
      <h2>
        6. The customer from question 5 replies to your response with the below:
        “I’m so frustrated. I’ve been trying to make this work for hours and I
        just can’t figure it out. It must be a platform issue so just fix it for
        me instead of asking me questions.” Please write a follow-up reply to
        the customer.
      </h2>
      <div className={styles.description}>
        <div>
          Hi {"<"}customer{">"}
        </div>
        <div>
          I’m sorry to hear that has been causing issues for you. I looked into
          this on my end and I was able to determine (..insert brief on research
          to show I’ve put in effort to help..). From what I can see it looks
          like
        </div>
        <div>
          I’d be happy to jump on a call and get this issue resolved quickly.
          Otherwise could please try the following steps? These will help me
          determine the root cause to help get you moving again ASAP: (..insert
          clear troubleshooting steps we need the user to do..) Let me know if
          you can do that and I’d love to get this issue resolved for you as
          soon as I can!
        </div>
        <div>Thanks,</div>
        <div>Matt</div>
        <p>
          My reasoning for above: Yes, we should absolutely understand that
          users are having a frustrating time and may not want to attempt things
          on their end. However with it being my goal to help users and resolve
          any issues, I believe it’s best to kindly push back to make sure we
          get what we need while also providing them clear steps to easily do
          that. This requires anticipating the information I’ll need to resolve
          the issue a few steps ahead so that we don’t turn this into a long
          back and forth email chain which would be frustrating. Also giving the
          option to join a call will make some users very happy as it shows
          immediacy.
        </p>
      </div>
      <h2>
        7. A customer writes in to the Helpdesk asking "How do I do a redirect
        from the /blog path to https://example.com?" Please write a reply to the
        customer. Feel free to add any information about your decision making
        process after the reply.
      </h2>
      <div className={styles.description}>
        <div>
          Hi {"<"}customer{">"}
        </div>
        <div>
          Thanks for sending this in. Redirecting from the /blog path to
          https://example.com is really dependent on the framework you are
          using. Could you let me know what framework you are using? I’d be
          happy to look into this further on my end and get you an answer.
        </div>
        <div>Thanks,</div>
        <div>Matt</div>
        <p>
          My reasoning for above: I believe that I need the context of the
          framework that the user is using to answer the question. As soon as I
          know what they are using I can easily answer it by researching a
          little bit.
        </p>
      </div>
      <h2>
        8. A customer is creating a site and would like their project not to be
        indexed by search engines. Please write a reply to the customer. Feel
        free to add any information about your decision making process after the
        reply.
      </h2>
      <div className={styles.description}>
        <div>
          Hi {"<"}customer{">"}
        </div>
        <div>
          That’s a great question. To make sure your project is not being
          indexed by search engines, you can set the X-Robots-Tag header to
          “noindex”.
        </div>
        <div>
          Here’s a helpful article talks more about how to do this in your :
          https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines#x-robots-tag-header
        </div>
        <div>
          Please note that if you are using Preview Deployments this header is
          already included by default. But if you are using Production
          Deployments then you will have to add this header on your own.
        </div>
        <div>
          Let me know if that helps and if you have any other questions on how
          to do this in a specific framework, I’d love to help!
        </div>
        <div>Thanks,</div>
        <div>Matt</div>
        <p>
          My reasoning for above: This sounds like a standard/common question
          and I was able to find a help article for it. Because of this I think
          it’s a good focus to serve the help article to give them more
          information as well as to promote self service in the future.
        </p>
      </div>
      <h2>
        9. What do you think is one of the most common problems which customers
        ask Vercel for help with? How would you help customers to overcome
        common problems, short-term and long-term?
      </h2>
      <div className={styles.description}>
        <p>
          From my experience I would think that one of the most common problems
          users will send in tickets for would be for errors related to building
          their project including environment variables and build configurations
          as this is something I’ve had trouble with and I can see how there can
          be confusion with not understanding how to build your code properly
          for deployment.{" "}
        </p>
        <p>
          I think the best way to overcome this in the short term is to create
          easy and clear documentation for common error messages that the user
          can search for. I think in the long term the best solution could even
          be to improve the UI to make the build process more approachable. For
          example to directly link help articles when certain errors appear or
          to improve the UX based on common user pitfalls to help them avoid
          them in the future by analyzing behavioral trends.
        </p>
      </div>
      <h2>10. How could we improve or alter this familiarisation exercise?</h2>
      <div className={styles.description}>
        <p>You could improve this exercise by</p>
      </div>
    </main>
  );
}
