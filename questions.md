`1. What is the difference between Component and PureComponent? Give an example where it might break my app.`

The main difference is we mostly use PureComponent for components we want to prevent re-renders, usually because they have an expensive calculation for rendering or props does not change frequently. The analogy in functional components is when we wrap a component with the React.memo HOC.The Pure Component uses a shallow comparison to detect if the component should re-render or not.

`2. Context + ShouldComponentUpdate might be dangerous. Why is that?`

This combination is dangerous because “shouldComponentUpdate” does not care about changes in Context. This method is only called when a component's props or state change, but it is not called when a Context value changes. This can lead to unexpected behavior. Related to first question: shouldComponentUpdate is implemented by PureComponent.

`3. Describe 3 ways to pass information from a component to its PARENT.`

With a callback function
Using Context
With a custom hook (rare use case but we can use for it)

`4. Give 2 ways to prevent components from re-rendering.`

React.Memo or “shouldComponentUpdate” for class based components. Doing this the engine will do a shallow comparison of properties. If properties doesn’t change we can avoid unnecessary re-renders.
Isolate components we don´t need to re-render when an internal variable changes. Example: modal inside a component. We can create a ModalComponent and move the flag state into the ModalComponent. When “isModalOpen” changes, only the ModalComponent re-renders and the parent component not.

`5. What is a fragment and why do we need it? Give an example where it might break my app.`

A fragment is a custom react element that allows us to render multiple HTML elements inside it without creating a new DOM element. Fragment is useful when we want to render multiple elements without creating new nodes into the DOM. Can break the app (at least related to styling) if we are using custom css selector.

`6. Give 3 examples of the HOC pattern.`
React.Memo is an excellent example of High Order Component.
withRouter() is another example of HOC used to wrap class based components, this method is used by react-router-dom library to inject properties related to routing to their components.
connect(), a hoc used by redux with the purpose of connecting the component to the redux store.
In all the examples, the hoc take a component as argument and perform an action with it, the result is a new component modified.

`7. What's the difference in handling exceptions in promises, callbacks and async...await?`

These paradigms have different ways to handle errors.
Callbacks: use error first pattern. The callback expects the first argument to be an error, if error object exist, the error is notified. If not, the execution thread will continue.
Promises: we use words .then() for successfully results and .catch() to handle errors.
Async…await: We wrap the asynchronous code in a try .. catch block to handle possible results.

`8. How many arguments does setState take and why is it async.`

setState takes 2 arguments:
The first argument could be an object that we want to be the new state or could be a function that receives the current state value and returns a new object represents the new state.
The second argument is optional and is a function that will execute after update the state and the component has re-rendered.

setState is async by React team definition and is like this because react engine wraps some states update in a batch and execute them in a single update. This is useful because can minimize re-renders.

`9. List the steps needed to migrate a Class to Function Component.`

This is a common task for a frontend developer but needs to be done with care.
Change the component definition: this is changing the component based on classes to a function
Change the way that we access to props. Eliminate every instance of word “this”. We can access props directly.
Find setStates and replace with useState hook.
Replace lifecycle methods (“componentDidMount”, “componentDidUpdate”, “componentWillUnmont”, etc) with the useEffect hook. This step is really important and we have to be sure we are replacing every lifecycle code execution. As useEffect wraps inside the class based methods mentioned above.
Find any other class based methods or HOC’s, lets say you are using redux, we should change the way the component connects to the store.

`10. List a few ways styles can be used with components.`

Inline styling
With css stylesheet (I used this in code provided)
Css modules
Styled Components
Sass
Tailwind CSS
Using ui libraries like Material UI, Ant Design, Bulma, etc
