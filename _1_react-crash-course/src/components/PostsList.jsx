import { useState } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value);
    }

    return (<>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            {/* <Post author="Chandrashekhar" body="Check out the full course!" /> */}
        </ul>
    </>);
}

export default PostsList;