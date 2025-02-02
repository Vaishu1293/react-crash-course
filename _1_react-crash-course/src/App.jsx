import './App.css';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

import { useState } from 'react';

// function add(a, b) {
//   return a + b;
// }

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(true);

  // add(1, 2);
  // add(5, 7);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
  <>
  {/* <MainHeader onCreatePost={showModalHandler}/> */}
  <main>
    <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
  </main>
  </>);
}

export default App
