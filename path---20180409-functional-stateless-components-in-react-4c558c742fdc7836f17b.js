webpackJsonp([0xd15b96c599b5],{511:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Matthew Brown's JS Blog",author:"Matthew Brown"}},markdownRemark:{id:"/Users/travis/build/mbrown333/mbrown333.github.io/src/pages/20180409-functional-stateless-components-in-react/index.md absPath of file >>> MarkdownRemark",html:'<p>In this article I’m going to explain functional stateless React components using simple code examples. Now this may sound abstract, but the idea behind this is very simple. The idea is that functional stateless components are just displaying data that is passed to them through props. That is it. No state, no methods, just plugging data into a template and returning a component to render.</p>\n<p>When you see components in React they are normally declared in one of two ways. The first extends <code class="language-text">React.Component</code>. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">class FancyComponent extends React.Component { \n    constructor(props) { \n      super(props); \n    } \n    ...\n}</code></pre>\n      </div>\n<p>The example uses ES6 class notation to extend <code class="language-text">React.Component</code>. You use this method when you are creating a component that does one of the following: </p>\n<ul>\n<li>Uses state</li>\n<li>Uses a life cycle method (i.e. <em>componentDidMount</em>)</li>\n</ul>\n<p>In all likelihood you will be using the class approach for your container Components that hold a fair amount of logic and are composed of presentational components. For the lower level building blocks you can simply declare a function that returns the component that you want to display like the following example. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">function NotSoFancyComponent(props) { \n  const { name, city, } = props; \n  return &lt;div&gt;Hello, {name} from {city}!&lt;/div&gt; \n} </code></pre>\n      </div>\n<p>In the <code class="language-text">NotSoFancyComponent</code> we deconstruct the <code class="language-text">props</code> object into the <code class="language-text">name</code> and <code class="language-text">city</code> constants. <em>(You don’t have to do it this way. It is perfectly fine to use {props.name} that is just my preference.)</em> This is an example of a functional stateless component. No state, no life cycle methods required. Just taking in data as props and plugging it into a component. </p>\n<p>We would use the component as follows. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&lt;NotSoFancyComponent name=&quot;Bob&quot; city=&quot;Kansas City&quot; /&gt;</code></pre>\n      </div>\n<p>We can also make this declaration more succinct using an ES6 arrow function. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">const NotSoFancyComponent = (props) =&gt; &lt;div&gt;Hello, {props.name} from {props.city}!&lt;/div&gt;</code></pre>\n      </div>\n<p>The nice thing about keeping these components very simple is they can easily be re-used across your application or possibly multiple applications in a component library and you can be assured that they will display the same behavior everywhere. Cleaner code and better performance are two additional benefits to using this approach. </p>\n<p>And if you happen to come to a point where you need to use state or a life cycle method it is very easy to refactor these functions to do so. Let’s say we want to leverage the <code class="language-text">componentDidMount</code> life cycle hook with our example. This is the code changes we would need to make to make it work. </p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">class NotSoFancyComponent extends React.Component { \n  constructor(props) { \n    super(props); \n  } \n  \n  componentDidMount() { \n    console.log(&#39;NotSoFancyComponent did mount!&#39;); \n  } \n  \n  render() { \n    const { name, city, } = this.props; return &lt;div&gt;Hello, {name} from {city}!&lt;/div&gt; \n  } \n}</code></pre>\n      </div>\n<p>No drastic changes required. The declaration changes to a class extending <code class="language-text">React.Component</code> and then move the function into the render function. </p>\n<p>I hope this enhances your understanding of functional stateless components as it is a foundational concept for building applications in React.</p>',frontmatter:{title:"Functional Stateless Components in React",date:"April 09, 2018"}}},pathContext:{slug:"/20180409-functional-stateless-components-in-react/",previous:{fields:{slug:"/20180409-javascripts-call-bind-and-apply-a-quick-explanation/"},frontmatter:{title:"JavaScript's call, bind, and apply - A Quick Explanation"}},next:{fields:{slug:"/20180608-a-new-beginning/"},frontmatter:{title:"A New Beginning..."}}}}}});
//# sourceMappingURL=path---20180409-functional-stateless-components-in-react-4c558c742fdc7836f17b.js.map