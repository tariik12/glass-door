import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div className='border p-5 my-5'>
                <h1>a. When should you use context API?</h1>
                <strong>context API:</strong> <br />
                <p> Context API is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='border p-5 my-5'>
                <h1>b. What is a custom hook?</h1>
                <p>A custom hook is a special JavaScript function, Custom hooks follow a naming convention of starting with the word use, just like built-in hooks such as useState, useEffect, and useContext. Custom hooks can be used to abstract away complex logic and make your code more modular and easier to understand.</p>
            </div>
            <div className='border p-5 my-5'>
                <h1>c. What is useRef?</h1>
            <p>useRef is a hook provided by React that allows you to create a mutable object that persists for the entire lifetime of the component. You can use the useRef hook to get a reference to a DOM element or to store any other mutable value that you want to persist across renders. <br />

            The useRef hook returns a single mutable ref object, which has a property called current. You can read and write to the current property of the ref object to store and access values.</p>
            </div>
            <div className='border p-5 my-5'>
                <h1>d. What is useMemo?</h1>
            <p> In React, components can sometimes re-render unnecessarily, even if their props or   state haven't changed. This can happen when a component contains expensive computations or calculations that are repeated on every render. To avoid this unnecessary re-computation, we can use the useMemo hook.

            The useMemo hook takes two arguments: a function and a list of dependencies. The function is the expensive computation that we want to memoize, and the list of dependencies is an array of values that the function depends on.

            The hook returns a memoized value that is computed by the function. The memoized value is only re-computed if one or more of the dependencies change. If none of the dependencies change, then the memoized value is returned from the cache.</p>
            </div>
        </div>
    );
};

export default Blog;