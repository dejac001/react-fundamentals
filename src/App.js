import React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

function App() {
  // commonly called a function component; its just a Javascript function
  // doesnt have any parameters in its function signature yet
  // returns code that resembles HTML which is called *JSX*
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label> 
      <input id="search" type="text"/>

      <hr />
      {list.map(function(item) {
        return (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>
        );
      })}
    </div>
  ) // *htmlFor* reflects the *for* attribute in HTML. JSX replaces a handful of internal HTML attributes, but you cand
}

export default App