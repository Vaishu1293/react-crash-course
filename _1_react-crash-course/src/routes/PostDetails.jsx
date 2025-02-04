import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import formClasses from './NewPost.module.css'; // reuse form styles
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <div className={formClasses.form}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </div>
      </Modal>
    );
  }
  return (
    <Modal>
      <div className={formClasses.form}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </div>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  console.log(params);
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}
