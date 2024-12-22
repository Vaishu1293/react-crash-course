const names = ['Vaishali', 'Chandrashekhar', 'Sharmila', 'Shivakumar', 'Pammy'];

function Post() {

    const chosenName =  Math.random() > 0.5 ? names[0] : names [1];

    return (
        <div>
            <p>{chosenName}</p>
            <p>React JS is awesome!!!</p>
        </div>
    );
}

export default Post;
