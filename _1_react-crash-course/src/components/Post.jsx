import classes from './Post.module.css';


// const names = ['Vaishali', 'Chandrashekhar', 'Sharmila', 'Shivakumar', 'Pammy'];

function Post({author, body}) {

    // const chosenName =  Math.random() > 0.5 ? names[0] : names [1];

    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </li>
    );
}

export default Post;
