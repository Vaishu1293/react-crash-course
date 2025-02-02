import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewPost from './routes/NewPost.jsx'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  { path: '/', element: <RootLayout/>, children: [
    { path: '/', element: <Posts />, loader: postsLoader, children: [
      { path: '/create-post', element: <NewPost />}
    ]},
  ]},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
