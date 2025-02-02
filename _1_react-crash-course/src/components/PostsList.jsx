import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

function PostsList() {
    return (<>
    <NewPost/>
    <ul className={classes.posts}>
        <Post author="Vaishali" body="React.js is awesome!" />
        <Post author="Chandrashekhar" body="Check out the full course!" />
    </ul>
    </>);
}

export default PostsList;