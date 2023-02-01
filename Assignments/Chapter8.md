1. Why is super(props) used in React Class Based Component?

Super(): It is used to call the constructor of its parent class. This is required when we need to access some variables of its parent class. Props: It is a special keyword that is used in react stands for properties. Used for passing data from one component to another.

2. Why cannot async be used before useEffect and used before componentDidMount?

Because React’s useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.

The issue here is that the first argument of useEffect is supposed to be a function that returns either nothing (undefined) or a function (to clean up side effects). But an async function returns a Promise, which can't be called as a function! It's simply not what the useEffect hook expects for its first argument.

While in case of Class Components, unmounting happens in other function "componentWillUnmount".

3. How to create Nested Routes using react-router-dom configuration?

By calling {Outlet} from 'react-router-dom' in the parent component of the nested component.

4. What is the order of life cycle methods calls in Class Based Components in React?

Mounting
constructor()
render()
componentDidMount()
Update
render()
componentDidUpdate()
Unmounting
componentWillUnmount

5. Why do we use componentDidMount?
It is invoked immediately after the component is mounted. Initialization that requires DOM nodes comes inside the function. To perform any side effects like API call/ fetch data, subscribe etc., componentDidMount is used. And it requires componentWillUnmount to clean up subscriptions otherwise the functionality will never stop as a result leading to performance issue.

Call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state.

6. Why do we use componentWillUnmount?
componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

Read about createHashRouter, createMemoryRouter from React Router Docs (Read and test)

--------------------------------------------------------------------------------------------------------------

1. How do you create Nested Routes react-router-dom cofiguration
By intoroducing a route inside children of children.

Ex. /login/market
Then we will first build /login path under home in children array and Outlet will contain all children routes.
Then we will introduce another children array in which we define path like market and we define outlet in the parent which is Login Component.

2. What is the order of life cycle method calls in Class Based Components

This order is for only a single component and not nested components

First constructor will be created
Then render method will be called
Then componentDidMount method will be called
Then componentWillUpdate will be called
And finally componentWillUnmount will be called

3. Why do we use componentDidMount?
The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

4. Why do we use componentWillUnmount? Show with example
We have to use this method for performance optimization.
For Ex. We have created a Interval function which will fetch data on specific page after specific time. In this cases if we will not use this method then due to SPA architecture , it will be called again and again on other pages too and after some time it will heavily loaded and slow down our page.

In these type of cases we should clear that Interval in this method.

5. (Research) Why do we use super(props) in constructor?
https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react -> Link
Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class.
super() is used to call the parent constructor, whereas, super(props) would pass the props to the parent constructor.
* React assigns props on the instance right after calling the component constructor.

6. (Research) Why can't we have the callback function of useEffect async?

https://www.designcise.com/web/tutorial/why-cant-react-useeffect-callback-be-async

because:
1. async functions implicitly return a promise, and;
2. useEffect expects its callback to either return nothing or a clean-up function

Therefore, to use async/await inside the useEffect hook, you can do either of the following:
Create a Self-Invoking Anonymous Function;
Create a Nested Named Function.
