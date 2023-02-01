
## Q: Is `JSX` mandatory for React?
A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const sample = <h2>Greetings</h2>;
```
## Q: Is `ES6` mandatory for React?
A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.
## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React lement. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```
## Q: How can I write `comments` in JSX?
A: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```
## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.
#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );
return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```
## Q: What is `Reconciliation` in React?
A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.
## Q: What is `React Fiber`?
A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance
## Q: Why do we need `keys` in React?
A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." When there are same type of elements like : keys become necessary to identify what each item refers to when some changes are made. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.
Keys should be given to the elements within the array to give the elements a stable identity.
#### Example
```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```
## Q: Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

## Q: What is `props in React`? Ways to.
A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic. These are immutable. Whether you declare a component as a function or a class, it must never modify its own props. React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```
## Q: What is `Config Driven UI`?
A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. 
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

## Q: Difference between `Virtual DOM` and `Real DOM`?
A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
#### - `Virtual DOM`
- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
#### - `Real DOM`
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the Ul of your application | It is only a virtual representation of the DOM |


------------------------------------------------------------------------------------------------------------------

Assignment 4 Questions
Ques1. Is JSX mandatory for React?
Ans. No, JSX is not mandatory for writing React, but it is suggested to use JSX for having better code readability and clean code.

Ques2. Is ES6 mandatory for React?
Ans. No, Es6 is also not mandatory for React, but it is suggested to use Es6 while writing React as it offers a lot of features for writing better code.

Ques3. How can I write comments in JSX?
Ans. You can use // or /* */ for multi line comments inside {}.

Ques4. What is React.Fragment or <></>
Ans. React.Fragment gives the power of returning multiple children elements without adding the extra nodes to the DOM as the parent. <></> is the shorthand for React.Fragment

Ques5. What is Virtual DOM?
Ans. Virtual DOM is a concept which is a representation of UI kept in memory and synced with real DOM by ReactDOM. This process is called reconciliation.

Ques6. What is Reconciliation?
Ans. Reconciliation is a process where the virtual DOM is synced with actual DOM by reactDOM. React uses Diffing algorithm for performing reconciliation. React uses O(n) approach based on 2 assumptions

Two element of different types will produce different trees.
devs can use key props which makes child element stable and avoid multiple rendering.
The Diffing algorithm
Elements Of Different Types: Different types element will generate 2 different trees at all. In such cases root of the old and new tree is compared and if it is different from React will tear down the old tree and create the new one.
When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount().

When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive UNSAFE_componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.

DOM Elements Of The Same Type: In such cases where dom element is of same type and only attribute changes then react will only update the changed attribute.
<div className="before" title="stuff" />

<div className="after" title="stuff" />
only className attribute will be updated in such case.I guess in case of native element and not component.

Component Elements Of The Same Type: When the component element(custom) is same but the props gets changed then the instance gets the same and state is maintained across renders.
<CustomComponent prop1="hello" prop2="2022">

<CustomComponent prop1="hello" prop2="2023">
In such case, only the prop gets updated and internally React updates it to match the new element, and calls UNSAFE_componentWillReceiveProps(), UNSAFE_componentWillUpdate() and componentDidUpdate() on the underlying instance.

Recurring On Children without keys and with keys: Refer next answer
Ques7. Why do we need keys and when we need it?
Ans. In the diffing algorithm used by React, When there is a change in the child elements considering that same child elements gets added or removed, this time react will mutate on each and every child which can create performance issue when multiple nodes are involved.

//Old one
<ul>
    <li>Holi</li>
    <li>Diwali</li>
</ul>

//New one
<ul>
    <li>New year's eve</li>
    <li>Holi</li>
    <li>Diwali</li>
</ul>
In the above example where we add similar children element as before which is li tag, React will not realize that Holi and Diwali are the old existing nodes and will reiterate on all three nodes.

In such cases React comes up with providing key attribute to such nodes where elements are same.

//Old one
<ul>
    <li key={1}>Holi</li>
    <li key={2}>Diwali</li>
</ul>

//New one
<ul>
    <li key={0}>New year's eve</li>
    <li key={1}>Holi</li>
    <li key={2}>Diwali</li>
</ul>
Now, React knows that element with key 0 is the new one and other elements are just moved down.

We need keys to avoid such performance issue which can occur in case of multiple nodes in the application. Also, we should be careful to add more stable keys instead of random keys or indexes which change a lot.

Now, in the above example if we have added a new img tag instead of li tag then this problem would not have came so keys are required only when same elements needs to be added again.

Ques8. What is React Fiber?
Ans. The idea behind developing Fiber is to achieve these goals:

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.
For achieving this we need to breakdown things in unit of work. That's what a fiber is unit of work. When a function executed a new stack frame gets added in call stack so lets say if rendering is happening then browser if render till that stack frame gets completed and hence we cannot do anything there. there are new browsers which have requestIdleCallback schedules a low priority and requestAnimationFrame which have high priority and needs to be called in next animation frame So we need to break down things so that if possible we can hold the rendering stack frame and perform the more important task, but if we depend on call stack, it will keep doing work until the stack is empty.

Fiber is the reimplementation of call stack, specialized for React components. A single fiber can be considered as a virtual stack frame.

for more details: https://github.com/acdlite/react-fiber-architecture

Ques9. Can we use Index as keys?
Ans. Yes, we can use index as keys, but it is not recommended to use index as keys because if arrays element gets reordered so the indexes, and it becomes difficult for react to compare with the old tree and hence react ends up comparing each child element and that key will not be of much use.

Giving keys as index is still better than not giving keys at all. For more details: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

Ques10. What is props in React?
Ans. Props are the properties of a React component that can be passed from parent to Child component. we can consider it as a attributes of html element but here we can also have custom attributes as props.

Ques11: What is config Driven UI?
Ans. Controlling UI from backend data coming from API is basically known as config driven ui where we gets config details from backend apis which decides what ui to displays. e.g., If swiggy is providing offers in city1 but not in city2 the carousel for offers should come only for city 1 and these information ui will get from backend in config form.