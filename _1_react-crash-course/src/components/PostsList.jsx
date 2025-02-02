import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';

function PostsList({ isPosting, onStopPosting }) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        if (!postData || !postData.author || !postData.body) {
            console.error("Invalid post data received:", postData);
            return;
        }
        setPosts((existingPosts) => [postData, ...existingPosts]);
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