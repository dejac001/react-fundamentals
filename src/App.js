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

  // A callback function *A* gets introduced, is used elsewhere *B*, but calls back to the place it was introduced *C*
  // This allows us to communicate *up* the component tree
  // A
  const handleSearch = event => {
    // C
    setSearchTerm(event.target.value)
  };

  // By manaing the search feature state in the App component, we can finally filter the list with the stateful *searchTerm*
  //   before passing the list to the List component

  const searchedStories = stories.filter(function(story) {
    return story.title.includes(searchTerm)
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch}/>

      <hr />

      {/* Use React props to pass the array to the List component */}
      <List list={searchedStories} /> 
    </div>
  ); // *htmlFor* reflects the *for* attribute in HTML. JSX replaces a handful of internal HTML attributes, but you cand
};

// The search comopnent doesnt manage the state anymore, but only passes up the event to the App component
//  After text is entered into the input field. You could also display the searhterm again in the app component or search component
//    by passing it down as a prop

// Always manage the state at a component where every component that's interested in it is one that
// either manages the state (using information directly from state) or a component below the managing component (using information from props)

const Search = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch}/>
  </div>
)

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