webpackJsonp([0x89dcc67e496b],{513:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Matthew Brown's JS Blog",author:"Matthew Brown"}},markdownRemark:{id:"/home/travis/build/mbrown333/mbrown333.github.io/src/pages/20180608-immutability-in-javascript/index.md absPath of file >>> MarkdownRemark",html:'<p>I’m currently working on a project that uses React and Redux.  Both of these js libraries enforce immutability of objects as they won’t let you mutate state.  I’m going to discuss exactly what that means and show examples of how to achieve immutability cleanly with ES6 features.</p>\n<blockquote>\n<p>Here’s the simple truth: you can’t innovate on products without first innovating the way you build them.\n— Alex Schleifer, The Way We Build</p>\n</blockquote>\n<h2>Immutable vs Mutable</h2>\n<p>Let’s start with the basic definition.  <em>Immutable</em> means once an object is assigned to a variable it doesn’t change.  So when you want to change state in React or Redux you don’t mutate an object in state.  Instead you build a new object instead and that new object reference replaces the old as the current state.  Achieving this can seem difficult if you aren’t up to speed with modern js practices.  This is much easier to achieve using ES6 features which I will demonstrate below.</p>\n<p>Strings in Javascript are immutable objects.  If you add one string to another it does not change the current string.  It will create a new string object and assign the reference to the variable storing the result.</p>\n<blockquote>\n<p>Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.\n— Immutable.js page</p>\n</blockquote>\n<p><em>Mutable</em> is just the opposite.  You have an object reference in memory and when the state of the app changes you update properties of that object to reflect the new state.  Achieving this in Javascript is very easy.  However there are drawbacks.  I know it has been my experience that as projects grow the amount of state that is held in the app grows along with it.  As this is happening the number of bugs that are difficult to resolve start to increase.  Usually the issue is the objects kept in the state are being mutated in several different places which makes it hard to track exactly where to fix it.  And if it does fix one bug then how many others does it create simultaneously?</p>\n<p>This is the main advantage of making sure objects in state are immutable.  I’ve seen in building apps this way that it makes state changes really easy to debug.  Code for state changes is simple and easy to pinpoint if something is not correct.  Especially when <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">you use the Redux DevTools</a>.</p>\n<p>Let’s take a look at examples of how to achieve immutability using ES6 features.  The examples will follow the typical Redux reducer pattern.</p>\n<h2>Spread Operator</h2>\n<p>The spread operator is magic in my opinion.  It does a great job of keeping your code concise and saves a lot of work.  Take the example below:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">app</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initalState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> FETCH_SUCCESS<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> pizzaList<span class="token punctuation">:</span> action<span class="token punctuation">.</span>data<span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Rather than assigning <code class="language-text">pizzaList</code> to state we use the spread operator to assign all the properties of state and the <code class="language-text">pizzaList</code> property to a new object reference which is returned by the reducer.  This can also be achieved using <code class="language-text">Object.assign</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">app</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initalState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> FETCH_SUCCESS<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> state<span class="token punctuation">,</span> <span class="token punctuation">{</span> pizzaList<span class="token punctuation">:</span> action<span class="token punctuation">.</span>data <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Same result but my preference is to use the spread operator as it keeps things a bit more concise and explicit.  All just personal preference though.</p>\n<p>The same result can be achieved if you want to make the property that is changed dynamic.  The following will assign whichever property that it recieves in <code class="language-text">action.field</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">app</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initalState<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> FETCH_SUCCESS<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token punctuation">[</span>action<span class="token punctuation">.</span>field<span class="token punctuation">]</span><span class="token punctuation">:</span> action<span class="token punctuation">.</span>data<span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The spread operator also comes in handy for adding a new item to an array.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token keyword">case</span> ADD_PIZZA<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n        pizzaList<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token operator">...</span>state<span class="token punctuation">.</span>pizzaList<span class="token punctuation">,</span>\n          action<span class="token punctuation">.</span>newPizza<span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>Arrays - map/filter/reduce</h2>\n<p>It’s also very handy to use ES6 array operations (map/filter/reduce) since they all return new array references.  Let’s take a look at some examples below.</p>\n<p><em>Updating all items in a list</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token keyword">case</span> INCREMENT_ALL_PIZZA_ORDER_COUNT<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n        pizzaList<span class="token punctuation">:</span> state<span class="token punctuation">.</span>pizzaList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>pizza <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>pizza<span class="token punctuation">,</span> orderCount<span class="token punctuation">:</span> pizza<span class="token punctuation">.</span>orderCount <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This constructs a new <code class="language-text">pizzaList</code> by constructing a new object in the map for each item and updating the <code class="language-text">orderCount</code> property.</p>\n<p><em>Removing an item from a list</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token keyword">case</span> REMOVE_PIZZA<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n        pizzaList<span class="token punctuation">:</span> state<span class="token punctuation">.</span>pizzaList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>pizza <span class="token operator">=></span> pizza<span class="token punctuation">.</span>id <span class="token operator">!==</span> action<span class="token punctuation">.</span>removeId<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This creates a new array by simply filtering out the object with the id that was removed.</p>\n<p><em>Updating an item in a list:</em></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">    <span class="token keyword">case</span> ADD_PIZZA<span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n        pizzaList<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token operator">...</span>state<span class="token punctuation">.</span>pizzaList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>pizza <span class="token operator">=></span> pizza<span class="token punctuation">.</span>id <span class="token operator">!==</span> action<span class="token punctuation">.</span>updateId<span class="token punctuation">)</span><span class="token punctuation">,</span>\n          action<span class="token punctuation">.</span>updatedPizza<span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This updates an item in the list by first filtering out the updated id from the original list and then using the result plus the updated object to return a new array.</p>\n<h2>Immutable JS</h2>\n<p>Facebook has a js library build around immutable principles called immutable.js.  I highly recommend you <a href="https://facebook.github.io/immutable-js/">check out their page if you’d like to learn more</a>.</p>\n<blockquote>\n<p>Much of what makes application development difficult is tracking mutation and maintaining state. Developing with immutable data encourages you to think differently about how data flows through your application.\n— Immutable.js page</p>\n</blockquote>\n<h2>Wrap Up</h2>\n<p>We’ve talked about the principles behind immutability and some ES6 tools for achieving it.  Hopefully this gives you a clearer understanding as it an increasingly relevant topic in modern Javascript.</p>\n<p>Thank you for reading!</p>',frontmatter:{title:"Immutability in Javascript",date:"June 08, 2018"}}},pathContext:{slug:"/20180608-immutability-in-javascript/",previous:{fields:{slug:"/20180608-a-new-beginning/"},frontmatter:{title:"A New Beginning..."}},next:{fields:{slug:"/20180613-why-you-should-be-doing-code-reviews/"},frontmatter:{title:"Why Your Team Should Be Doing Code Reviews"}}}}}});
//# sourceMappingURL=path---20180608-immutability-in-javascript-42e7a6ea0f8dcdd41116.js.map