import classes from './NewPost.module.css';
import { useState } from 'react';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {

  return (
    <Modal>
      <Form className={classes.form} method='post'>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="author" required />
      </p>
      <p className={classes.actions}>
        <Link type="button" to=".." className={classes.button}>Cancel</Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
  ); 
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const response = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  return redirect('/');
}