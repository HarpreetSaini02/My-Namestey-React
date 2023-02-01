1. What is Microservice?
When we build our application by combining small application which are running on diiferent ports.
EX -> We made Frontend in React , Backend in MEN , Authentication in Golang , etc.
Microservice will gave power of deployment individually when any change happen.
So it will save our time and also cost of deployment.

Adv ->
1. Agility
2. Flexible Scaling
3. Continuous Deployment
4. Highly maintainable and reliable
5. Technology flexibility

Dis-Adv ->
1. Development Sprawl
2. Exponential infrastructure costs
3. Debugging challenges

2. What is Monolithic architecture?
When we build our application in one environment then it is said to be a monolithic architecture.
Dis-Adv -> When we have a very small or minor change in code then we have to deploy our whole app from scratch.

Adv ->
1. Ease of deployment
2. Development
3. Performance
4. Simplified Testing
5. Easy debugging

Dis-Adv ->
1. Slower Development Speed
2. Scalability
3. Reliablity
4. Barrier to technology adoption
5. Deployment ( Discussed above )

3. Why do we need useEffect Hook?
The Effect Hook lets you perform side effects in function components:
When we want to call an api which should be called once then we need to use this hook. By passing empty dependency array , we can tell browser that call this function after initial render.
OR
The useEffect hook helps in performing side efffects (like API call, Data fetching, setting up a subscription, and manually changing the DOM in React components) in functional components.

It takes up two arguments:
Callback Function
Dependency Array (until you wish to render your component with every rerender, dependency array should be added as empty [])

4. What is Optional Chaining?
If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
Optional Chaining is helpful when we have to dig down to objects in depth and also to avoid un-relatable o/p.
OR
Optional Chaining "?." operator is used to access object's property or to call a function. If the object accessed or function called with undefined or null, ?. will return undefined instead of throwing an error.

5. What is Shimmer-UI?
Whenever we click on something , websites call api to fetch data and it takes sometime So for good UI experience we show them cards or anything which are un-filled before api-call and are appered as filled after some time.
OR 
Shimmer is a temporary animation placeholder for when data from the service call takes time to get back and we don't want to block rendering the rest of the UI.

6. What is difference between JS expression and JS statement?
An expression is any valid unit of code that resolves to a value. A statement is a unit of code that performs an action.
OR 
Expressions produce a value, and that value will be passed into the function. Statements don't produce a value, and so they can't be used as function arguments e.g. Expression: {console.log("Hello"}; Statement: let a = 20;

7. What is Conditional Rendering?
It allows us to show specific thing on a given condition.
<div>
    {isLoggedIn ? (
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    ) : (
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    )}
</div>
OR
Conditional Rendering works the same way conditions work in JavaSCript. We can use condition (if else) or ternary operators to render the components based on some conditions like current state wrt to update to be done in Component.

E.g. There is a card component which is rendered in sometime if data is available. In this case two different components can be rendered with a condition,

return !data ? (FirstComponent) : (Second Component)

8. What is CORS?
Cross Origin Resource Sharing
It simply means that a website running on port 1234 can't make api call to other website which is running on other port number for security reasons.

9. WHat is async and await?
async and await helps in asynchronous programming
We use them when we fetch some data and also when we convert that data into json format.
await will not be allowed to use if we haven't included async keyword first.

OR 

The async function declaration declares an asynchronous function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Async function can also be defined as expressions.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

10. What is the use of const json = await json.data in getRestaurantData?
The resolved value of the promise is treated as the return value of the await expression.