webpackJsonp([0xb55a00967a2e],{520:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Matthew Brown's JS Blog",author:"Matthew Brown"}},markdownRemark:{id:"/Users/travis/build/mbrown333/mbrown333.github.io/src/pages/20180613-why-you-should-be-doing-code-reviews/index.md absPath of file >>> MarkdownRemark",html:"<p>I believe that code reviews are one of the best things a development team can do for adding value to their development process.  I know from my experience that not every development shop does reviews and those that do aren’t doing them in a way that gets maximum benefits.  In this article I’m going to outline what I think are the greatest benefits of code reviews, how to get the most value out of them, and common mistakes teams make when doing code reviews.</p>\n<blockquote>\n<p>Code is like humor. When you have to explain it, it’s bad. – Cory House</p>\n</blockquote>\n<h2>Code Reviews</h2>\n<p>Code reviews can be done formally or informally as a vital step in the development process.  It usually takes place after a developer has completed coding and testing a feature and before their code is merged into the main branch.  This offers an opportunity for the rest of the team to look over their work.  Now the goal of the review isn’t to give the rest of the opportunity to skewer the writer for all the mistakes they made, but is mean to help share knowledge through the team.  Programming is after all a team sport.  The best teams know how to do reviews productively.</p>\n<p>Now especially for more junior developers but this happens to senior developers as well.  There can be some fear in sharing your work with the rest of the group.  I’ll point you to any of the many articles about Imposter Syndrome out there on programming blogs.  This is a natural fear, but becomes easier to overcome when you realize that everybody is in the same boat.  No matter what your experience level is you have something unique to contribute to the team and to review discussions.  So don’t let a review intimidate you.  It is an opportunity to not only correct mistakes, but also to learn and grow as a team.</p>\n<p>Let’s start by going through a list of benefits of doing code reviews.</p>\n<h2>1. Extra set(s) of eyes on your code.</h2>\n<p>Human beings make mistakes.  It’s a fact of life.  No one is perfect.  It’s why we have QA and user testing.  For that extra level of assurance that we are catching our mistakes as early as possible when they are the cheapest to fix.  Everyone thinks differently so it is very helpful to have others on your team look at your code because they’ll likely think of scenarios or corner cases that you didn’t think about while you were writing it.  </p>\n<h2>2. A greater shared understanding.</h2>\n<p>If you’ve ever worked on a team where everyone is siloed to their own little fiefdoms you know that is not a good situation.  Especially when someone decides to leave the team.  Now because no one else left understands what they were working on they just have to pray that everything keeps working or rewrite their work.</p>\n<p>After a code review all of the reviewers should be able to answer these questions:</p>\n<ol>\n<li>What is the code trying to accomplish?</li>\n<li>How does it accomplish it?</li>\n</ol>\n<p>Reviewers should ask as many clarifying questions as necessary for them to understand what is going on if something is unclear.</p>\n<h2>3. Share individual knowledge with the team.</h2>\n<p>There is a lot to learn in our field and the goal of everyone should be to continually learn.  Everyone is busy and everyone gets exposed to different articles or podcasts to stay current and the more you can share that knowledge with others the stronger your team will be.  Code reviews are a great opportunity to share the knowledge you have or benefit from the knowledge of others.  Someone may offer up an obscure language feature that reduces the amount of code you write while making it easier to understand.  Someone may offer up a totally different way to do solve the problem that hadn’t even crossed your mind.  Either way the more great minds you have thinking about solving a problem the more likely it is that you’re going to arrive at an optimal solution.</p>\n<h2>4. Team chemistry</h2>\n<p>Code reviews done properly can be a great exercise for team building.  Done improperly it can also have the opposite effect.  There are two sides to this.  If your code is being reviewed you have to remove your ego from your code and not take anything that is said about it personally.  Everyone is trying to achieve the same goal after all.  The other side is any comments by the reviewers should be critiquing the code and not the writer.  <em>“How could you be this stupid?”</em> would be an example of a comment that would probably not endear you to your teammates and is not particularly helpful if the goal is to improve code quality.  Instead of assuming stupidity on the part of someone else is to ask clarifying questions because you may not fully understand their situation.  The result will be they enlighten you to their special circumstances or your questions may lead them to rethink their approach.</p>\n<h2>5. Craft the team’s best practices</h2>\n<p>Reviews often spur discussions on best practices.  This is a good opportunity to get input or take a vote from everyone on which best practices they want to use for the team going forward.  That way if the same issues comes up again they can fall back on the decision reached previously by the team or it may cause the team to re-think what their previous decision.</p>\n<p><em>I’ll also outline common mistakes I see with the way teams do reviews.</em></p>\n<blockquote>\n<p>Before software can be reusable it first has to be usable. – Ralph Johnson</p>\n</blockquote>\n<h2>Skipping them altogether</h2>\n<p>Now that there are great Git tools like Github or Bitbucket that make it super simple to do peer reviews and share code changes with the team there really is no excuse to skip this step.  I know there are always managers who want to skip every step besides writing code because they don’t see the benefit, but as a developer you should be an advocate for reviews.  It really is the simplest way to improve the overall code quality produced by your team.</p>\n<h2>Having a single person review everyone’s code</h2>\n<p>This does nothing to remove the single point of failure as discussed above.  You’re also at the same time creating a bottleneck for getting code merged in especially if it is a large team with a lot of code to review.  It’s very difficult for one person to keep up with that and they likely won’t be able to as in depth a review on all the code as if they were sharing the reviewing responsibilities with their team.</p>\n<h2>Using reviews as punishment</h2>\n<p>It’s never a good situation when more inexperienced programmers get singled out for reviews and the more senior members of the team don’t have to follow the same protocol.  This creates a hierarchy unnecessarily and can easily wreck a team’s chemistry.  Instead it’s better if everyone is subject to the same process.  After all senior developers make mistakes too just like everyone else.</p>\n<p>Also if someone feels their code is continually singled out for reviews they’re going to be more and more reluctant to submit to reviews and will likely be looking for a new team.</p>\n<h2>Waiting to long to do reviews</h2>\n<p>You get the most benefit out of a review by doing it right after the code has been written.  I’ve seen teams that wait until a release is finished and there is no way to do an effective review on that massive landslide of code.  By that point everyone has moved on to other features/problems so it isn’t fresh in their minds what they were trying to accomplish.</p>\n<blockquote>\n<p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler (author and speaker on software development)</p>\n</blockquote>\n<h2>Review</h2>\n<p>I’m a big fan of code reviews done properly and hope this article gives you some practical advice on how your team can benefit from incorporating code reviews as a vital step in your development process.</p>",frontmatter:{title:"Why Your Team Should Be Doing Code Reviews",date:"June 13, 2018"}}},pathContext:{slug:"/20180613-why-you-should-be-doing-code-reviews/",previous:{fields:{slug:"/20180608-immutability-in-javascript/"},frontmatter:{title:"Immutability in Javascript"}},next:{fields:{slug:"/20180621-functional-programming/"},frontmatter:{title:"Functional Programming"}}}}}});
//# sourceMappingURL=path---20180613-why-you-should-be-doing-code-reviews-7fe2ffeeaa1e2a9cecaa.js.map