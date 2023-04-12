import React from 'react';

const Blog = () => {
    return (
        <div className='space-y-10 divide-y-2 divide-gray-600'>
            <div>
                <p className='pb-4'> 1.when the contex API used</p>

                <p>Ans: The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
            </div>

            <div>
                <p className='pb-4'>2. what is coustom hok react </p>
                <p> Ans: Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem</p>
            </div>

            <div>
                <p className='pb-4'>3. where does useref use it?</p>
                <p>Ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>


            <div>
                <p className='pb-4'> 4.what is useMemo</p>
                <p>Ans :React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
            </div>

        </div>
    );
};

export default Blog;