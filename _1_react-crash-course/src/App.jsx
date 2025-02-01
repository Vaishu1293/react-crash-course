import './App.css';
import PostsList from './components/PostsList';

function add(a, b) {
  return a + b;
}

function App() {

  add(1, 2);
  add(5, 7);

  return (<main>
    <PostsList/>
  </main>);
}

export default App
