1. What is the difference between Named Export, Default Export and * as export?

Named Export:
There can be multiple exports in same file with a keywork "export" before the function, var, let or const.
To import named components {} this used. Default Export
There can be only one default export in a file with keyword "export default" before the function, var, let or const.
There is no need of {} to import default export components.
Import
It allows importing all components that are exported in a file altogether.
What is the importance of config.js file?
Having a separate configuration file allows to access variables instantly and improves the maintainability of the codebase since all the variables are in the same file. The core application will remain intact, and it can deploy to different servers with different configurations quickly.

2. What are React Hooks?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. It is normal js function with a logic separated from the actual functional component. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community. Hooks help in splitting one components into smaller functions based on what pieces are related (subscription, fetching data etc) , rather than forcing a split based on differnt lifecycle method.

3. Why do we need useState hook?
It was the first hook defined in React Hooks that allows handling state in an application without writing a class component. It is called inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. It can be called from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

<-------------------------------------------------------------------------------------------------------------->

CHAPTER 5

Q1. What is the difference between Named Export, Default export, and * as Export?
Default Export:
In default export we write like this on the last line of component file 👇

export default Header
Use it when you have only one component in a file

Default Import: We can change the name of import as well

  import Header from ./components/Header
or

  import NewHeader from ./components/Header
Usage: <Header /> or <NewHeader />

Named Export:
When we write like this 👇. This is called named export

  export const Header = () => {...}
Recommended method when we have more than one component in a file.

Named Import:

  import { Header } from ./componentsHeader
Usage: <Header />

* as Export:
If there are more than component in a single file and we have done named export there then we can import them like this 👇. obj is any object name

  import * as obj from ./components/Header
Usage: <obj.Header>, <obj.Title>

Q2. What is the impirtance of config.js file?

It is good practice to create a config.js/constant.js file in src folder.
When we need same thing in many places, we can create a constant for that value and can use it anywhere. So we need to change it, we can change it from one place only. Example 👇
constant.js -> export const IMAGE_CDN_URL = "xyz.com/img.jpg"
Other files -> import { IMAGE_CDN_URL } from "./constants"

Q3. What are React Hooks?

React Hooks are just normal function of javascript, already created by fb devs to perform a specific functionality. eg. useState() is a hook

  import { useState } from react;

Q4. Why do we need useState Hook?
To create a state variable
It returns a array [variableName, function to update the variable]

e.g.
  [myVariable, setMyVariable] = useState()
<------------------------------------------------------------------------------------------------------->

  Ques1. Difference between named export, default export and * as export?
Ans. Named Export: When we have to export multiple values from a file then we can do named export where each export will have a name and can be used with the same name in different files. For importing named export we have to use below syntax:

import { xyz } from '.xyz'
Default export: When we have to export single value from a file we can do default export. Same name will be used for importing.

import xyz from '.xyz'
star as export(* as export): This is also similar to named export but here we can rename the imported data.

import * as abc from '.xyz'
now we can use abc.xyz instead of xyz

Ques2. What is the importance of config.js or constant.js file?
Ans. By introducing such files we achieve modularity and clean code. In such files, we can have our data from a separate file keeping the component clean.

Ques3. What are React hooks?
Ans. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: e.g.,

Ques4. Why do we use useState hook?
Ans. useState is a Hook that lets you add React state to function components, similar to class component. It is used to manage states and returns a stateful value and an updater function to update it.