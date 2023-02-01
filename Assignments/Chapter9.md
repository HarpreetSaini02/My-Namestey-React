1. When and why do we need lazy()?
lazy() function allows rendering import dynamically as a regular component. const Component = lazy(()=>import(../../Component));

It takes the function that will call dynamic import. This must return a Promise that resolves to a moduel with default export containing a React component.

The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load. <Suspense><Component/></Suspense>

2. What is Suspense?
React.Suspense lets you specify the loading indicator in case some components in the tree below it are not yet ready to render. Lazy loading components is the only use case supported by <React.Suspense>

3. When and why do we need Suspense?
It is used in lazy loading when code-splitting is implemented to created multiple bundles to avoid loading time. The best practice is to place where you want to see a loading indicator, but to use lazy() wherever you want to do code splitting.

4. Advantages and disadvantages of using code splitting pattern.
Advantages:

As the app grows the bundles also grow hence increasing oading time. So, to avoid this issue code-splitting is a choice.
Code-splitting is a feature supported by bundlers like parcel, webpack etc to create multiple bundles that can be dynamically loaded at run-time.
It helps in lazy-load things, i.e. loading the module/part of code that is required currently by the user.
It has not reduced the overall amount of code in app, instead avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.
Disadvantages:

Code splitting can only be done in client side rendering. This is the reason why the React team recommends using loadable components for code splitting in the server.
Why do we get this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. to fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
Any component may suspend as a result of rendering, even components that were already shown to the user. In order for screen content to always be consistent, if an already shown component suspends, React has to hide its tree up to the closest boundary. However, from the user’s perspective, this can be disorienting.

Adding a parent Suspense fixes this issue.

<Suspense fallback={<Loader />}>
   <Component>
    <Suspense fallback={<Loader />}>
       <LazyLoadedComponentA />
    </Suspense>
   </Component>
   <Component>
    <Suspense fallback={<Loader />}>
      <LazyLoadedComponentB />
    </Suspense>
   </Component>
</Suspense>

--------------------------------------------------------------------------------------------------------------


1. When and why do we need lazy()?
We use lazy loading only when we have large size files in our app.If our app size is bigger then if we load all data at same time then it will slow down perfomance of our website. For this issue , we use lazy loading which means we will load only that things which are needed at the time.
For example , we have restaurant info we should not render all things in first render -> will slow down our web app.
for that we can use lazy loading and we will load when user clicks on specific restaurant.

2. What is Suspense ( to cause to stop temporarily ) ?

It is a component which can be imported from react.
So when we implement lazy loading -> it took sometime to download js file for that specific component.
basically react suspense loading -> for that we use Suspense component -> which have fallback as a props which is when this loading is in progress

3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

There are sometimes when component under suspense takes sometime to render, but we also don't want to show loader or the fallback component then we can tell react to show the old component only and render the new one when its ready using startTransition method.

Transitions are a new concurrent feature introduced in React 18. They allow you to mark updates as transitions, which tells React that they can be interrupted and avoid going back to Suspense fallbacks for already visible content.

4. Advantages and disadvantages of using this code splitting pattern?

Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.

Dis-Advantages
The only drawback about code splitting is that you can only use it in client side rendering.