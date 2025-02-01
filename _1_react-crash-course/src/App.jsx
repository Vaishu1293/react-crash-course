import './App.css';
import Post from './components/Post';

function add(a, b) {
  return a + b;
}

function App() {

  add(1, 2);
  add(5, 7);

  return <main>
    <Post author="Vaishali" body="React.js is awesome!" />
    <Post author="Chandrashekhar" body="Check out the full course!" />
  </main>;
}

export default App
