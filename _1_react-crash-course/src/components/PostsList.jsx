import { useState } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostsList() {
    const [ modalIsVisible, setModalIsVisible ] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    let modalContent;

    if(modalIsVisible){
        modalContent = <Modal onClose={hideModalHandler}>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
    </Modal>
    }

    return (<>
        {modalContent}
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            {/* <Post author="Chandrashekhar" body="Check out the full course!" /> */}
        </ul>
    </>);
}

export default PostsList;