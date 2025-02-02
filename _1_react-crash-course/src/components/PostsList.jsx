import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from '../routes/NewPost';
import Modal from './Modal';
import { useLoaderData } from 'react-router-dom';

function PostsList({ isPosting, onStopPosting }) {
    const posts = useLoaderData();

    function addPostHandler(postData) {
        if (!postData || !postData.author || !postData.body) {
            console.error("Invalid post data received:", postData);
            return;
        }

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }


    let modalContent;

    if (isPosting) {
        modalContent = <Modal onClose={onStopPosting}>
            <NewPost
                onCancel={onStopPosting}
                onAddPost={addPostHandler}
            />
        </Modal>
    }

    return (<>
        {modalContent}
        {posts.length > 0 && (<ul className={classes.posts}>
            {posts.filter(post => post).map((post) => (
                <Post key={post.body} author={post.author} body={post.body} />
            ))}
        </ul>)}
        {posts.length === 0 && (
            <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>
        )}
    </>);
}

export default PostsList;