1. What would happen if we do console.log(useState());
Then we will get an array of 2 items in which first item will be the value which will be undefined(Not know why) and second will be the function

2. How will useEffect behave if we don't add a dependency array ?
useEffect will be called after every render.

3. What is SPA?
Single Page Application which consist of single index.html file and If you try to change page it will not calls server again and again. It only changes UI based upon routes or condition.

OR 

An SPA (Single-page application) is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown. This therefore allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.

4. What is difference between Client Side Routing and Server Side Routing?
In client side Routing we don't call server for data. Whereas in Server Side Routing we have to call server if we need data.
The difference between this two routing have been stated above server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other

OR 

The main difference between CSR and SSR is where the page is rendered. SSR renders the page on the server-side and CSR renders the page on the client-side. The client-side dynamically manages the routing without refreshing the page each time the client requests another route.


5. What are different ways to add images in React? Explain with code.

Adding image from project folder:
import Logo from "./img/Logo.png"
<img src{Logo} alt="logo"/>
Adding image using url:
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffoodvilla.no%2F&psig=AOvVaw2PifP2gYaNfLEx0Dm9zX9a&ust=1674022674183000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjJoK36zfwCFQAAAAAdAAAAABAJ" alt="logo"/>

What would happen if we do console.log(useState())?
It returns an array of two elements: [variable, function]

The value of 'variable' is set to undefined.

The function returns following attributes:

length: 1

name: "bound dispatchSetState"

arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at Function.invokeGetter (:3:28)]

caller: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to t

How will useEffect behave if we don't add dependency array?
It runs both after the first render and after every update.
