webpackJsonp([0xecb5344580b0],{521:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Matthew Brown's JS Blog",author:"Matthew Brown"}},markdownRemark:{id:"/home/travis/build/mbrown333/mbrown333.github.io/src/pages/20180621-functional-programming/index.md absPath of file >>> MarkdownRemark",html:'<p>In this article I’m going to discuss the functional programming paradigm and the benefits of using that paradigm in your code.  I’ll be covering the core functional programming concepts along with higher order functions, functional composition, and pure functions.  </p>\n<p>Functional programming has been growing in popularity in the last few years.  I work on a team that follows functional programming and have found it to be an effective approach for building web applications with React and Redux.  </p>\n<p>If you haven’t worked in fp before it can take a little while to catch on because you have to think about how you do things differently.  But as I’ll show in this article none of the concepts behind functional programming are overly complicated to understand.</p>\n<p>Let’s dive in.</p>\n<blockquote>\n<p>“Object-oriented programming makes code understandable by encapsulating moving parts. Functional programming makes code understandable by minimizing moving parts.” -Michael Feathers</p>\n</blockquote>\n<h2>What is functional programming?</h2>\n<p>Let’s start by going over the core principles behind the functional programming paradigm.  </p>\n<ol>\n<li>Don’t mutate state.</li>\n<li>Avoid shared state.</li>\n<li>Use pure functions with no side effects.</li>\n</ol>\n<p>First, state should not be mutated.  One of the issues with OOP is that state can be mutated anywhere which makes it hard to track down unexpected changes in a program.  Rather the idea is that rather than mutating existing objects in state you should use the previous state and pure functions to calculate what the next state will be.</p>\n<p>This is the concept that makes Redux’s time travel debugging possible.  There can only be one value for state at any given time and stepping backward though actions will show what the state was at every step.</p>\n<p>In Javascript don’t confuse <code class="language-text">const</code> with immutable.  <code class="language-text">const</code> will prevent you from reassigning a new object reference to that variable, but you can still change the properties of that object.  <code class="language-text">Object.freeze</code> will prevent all the top level properties from being mutated, but if there is an object as a property then that object’s properties can still be changed unless you go traverse through and freeze each object property.</p>\n<p>I previously wrote <a href="/20180608-immutability-in-javascript/">an article on immutability in Javascript so you can read more on that here.</a></p>\n<p>Typically if you studied computer science in school you learned heavily in the Object Oriented Programming, but were likely exposed to functional programming as well.  In the past few years functional programming has been growing in popularity and this definitely holds true for the Javascript community.</p>\n<p>Next we’ll discuss some functional programming tools.</p>\n<blockquote>\n<p>Simplicity is prerequisite for reliability. -Edsger W. Dijkstra</p>\n</blockquote>\n<h2>Pure Functions</h2>\n<p>A pure function has no side effects.  So for each input a pure function will give you the exact same result every time.  </p>\n<p>The benefit of using pure functions is that they are typically easier to debug as they are predictable in their outcome and simple to read.</p>\n<p>Examples of side effects are:</p>\n<ul>\n<li>an xhr call</li>\n<li>changing a variable outside of the function’s scope</li>\n<li>console log</li>\n<li>outputting to a file</li>\n<li>calling other functions with side effects</li>\n</ul>\n<p>Let’s take a look at an example of a function with side effects:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">const a = 1;\nconst a1 = () =&gt; a += 1;\na1(); \nconsole.log(a); // 2\na1();\nconsole.log(a); // 3</code></pre>\n      </div>\n<p>The result of this function will give you a different result each time as every time it is called it continues to increment a because it’s operating on a variable that is not an input to itself.</p>\n<p>Let’s change our example to a pure function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">const b = 1;\nconst b1 = (val) =&gt; val += 1;\nconsole.log(b1(b)); // 2\nconsole.log(b1(b)); // 2</code></pre>\n      </div>\n<p>In this case <code class="language-text">b1</code> will give you the same result every time for any given input you pass into it unlike <code class="language-text">a1</code> which mutates a variable outside of its own scope.  <code class="language-text">b1</code> only operates on the variable that it takes in as an input.</p>\n<h2>Higher Order Functions</h2>\n<p>Higher order functions are functions that can accept another function as a parameter or return another function as a result.  This is how functional programming achieves reusability with a set of reusable utility functions as opposed to <em>Object Oriented Programming</em> which locates functions and data together in classes.</p>\n<p>Higher order functions are possible in javascript because it has <em>first class functions</em>.  Functions can be passed as parameters to other functions, assigned to variables, and returned from other functions.</p>\n<p>The array methods <code class="language-text">map</code>, <code class="language-text">reduce</code>, and <code class="language-text">filter</code> are examples of extremely useful and reusable higher order functions.  Once you learn to use these array methods it totally changes the way you write code, because they are fantastic.</p>\n<p>Let’s  demonstrate what a simple higher order function looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">const doubleArray = (a) =&gt; a.map(i =&gt; i * 2);\nconst reverseArray = (b) =&gt; b.reverse();\n\nconst compose = (a, b) =&gt; (input) =&gt; b(a(input));\n\nconst input = [1, 2, 3];\nconsole.log(compose(doubleArray, reverseArray)(input)); // [6, 4, 2]</code></pre>\n      </div>\n<p>Here we define a couple of functions to operate on arrays.  The <code class="language-text">compose</code> functions allow us to combine these two operations and gives us a function as a result.  We then can call that resulting function and pass in our <code class="language-text">input</code> array.</p>\n<blockquote>\n<p>There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies. — C.A.R. Hoare, The 1980 ACM Turing Award Lecture</p>\n</blockquote>\n<h2>Functional Composition</h2>\n<p>Functional composition is combining or chaining simple functions to make up more complex functions.  Again, since Javascript has first class functions it makes it easy to apply functions to the results of other functions.</p>\n<p>This can be demonstrated using the array map, reduce, and filter methods by chaining them together:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">const list = [1, 2, 6, 8];\n\nconst result = list.map(a =&gt; a * 3)\n  .filter(b =&gt; b &gt; 3)\n  .reduce((sum, c) =&gt; {\n    sum += c;\n    return sum;\n  });\n\nconsole.log(result); // 48</code></pre>\n      </div>\n<p>The result of each function returns a new array and we call the next function in the chain on that resulting array.</p>\n<p>Let’s go over another example where we combine two simple functions into a single function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">const triple = (a) =&gt; a * 3;\nconst minus2 = (b) =&gt; b - 2;\n\nconst tripleMinus2 = (c) =&gt; triple(minus2(c));\n\nconsole.log(tripleMinus2(5)); // 9\nconsole.log(tripleMinus2(45)); // 129\nconsole.log(tripleMinus2(678)); // 2028</code></pre>\n      </div>\n<p>These are trivial examples obviously, but in my experience organizing your code into small utility functions makes them easy to reuse and combine with other utility functions.</p>\n<blockquote>\n<p>The object-oriented version of spaghetti code is, of course, ‘lasagna code’. Too many layers. -Roberto Waltman</p>\n</blockquote>',frontmatter:{title:"Functional Programming",date:"June 21, 2018"}}},pathContext:{slug:"/20180621-functional-programming/",previous:{fields:{slug:"/20180613-why-you-should-be-doing-code-reviews/"},frontmatter:{title:"Why Your Team Should Be Doing Code Reviews"}},next:{fields:{slug:"/20181105-serverless/"},frontmatter:{title:"Building a Node.js Service with AWS Lambda, DynamoDB, and Serverless Framework"}}}}}});
//# sourceMappingURL=path---20180621-functional-programming-336672d522f2389fded6.js.map