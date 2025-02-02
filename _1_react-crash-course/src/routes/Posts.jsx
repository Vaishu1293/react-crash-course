import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

function Posts() {

//   const [modalIsVisible, setModalIsVisible] = useState(true);

//   function showModalHandler() {
//     setModalIsVisible(true);
//   }

//   function hideModalHandler() {
//     setModalIsVisible(false);
//   }

  return (
  <>
  <Outlet />
  <main>
  <PostsList />
    {/* <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/> */}
  </main>
  </>);
}

export default Posts
