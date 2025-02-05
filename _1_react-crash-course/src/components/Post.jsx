import classes from './Post.module.css';
import { Link } from 'react-router-dom';

// const names = ['Vaishali', 'Chandrashekhar', 'Sharmila', 'Shivakumar', 'Pammy'];

function Post({id, author, body}) {

    // const chosenName =  Math.random() > 0.5 ? names[0] : names [1];

    return (
        <li className={classes.post}>
            <Link to={id}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
            </Link>
        </li>
    );
}

export default Post;
