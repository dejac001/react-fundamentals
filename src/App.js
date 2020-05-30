import React from 'react';


const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState('');

  /*After we initialize the state and have access to the current stat and the state updater function,
  use them to display the current state and update it within the App component's event handler:*/
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label> 
      <input id="search" type="text" onChange={handleChange}/>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>

      <hr />

      {/* Use React props to pass the array to the List component */}
      <List list={stories} /> 
    </div>
  ); // *htmlFor* reflects the *for* attribute in HTML. JSX replaces a handful of internal HTML attributes, but you cand
};


// List component
const List = props =>
  props.list.map(item => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    )
  );


export default App