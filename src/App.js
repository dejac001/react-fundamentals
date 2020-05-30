import React from 'react';

// const welcome = {
  // greeting: 'Hey',
  // title: 'React'
// }
function getTitle(title) {
  return title;
}

function App() {
  // commonly called a function component; its just a Javascript function
  // doesnt have any parameters in its function signature yet
  // returns code that resembles HTML which is called *JSX*
  return (
    <div>
      <h1>
        Hello {getTitle('React')}
        {/* {welcome.greeting} {welcome.title} */}
      </h1>
      <label htmlFor="search">Search: </label> 
      <input id="search" type="text"/>
    </div>
  ) // *htmlFor* reflects the *for* attribute in HTML. JSX replaces a handful of internal HTML attributes, but you cand
}

export default App