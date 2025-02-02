import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewPost from './components/NewPost.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
  { path: '/', element: <App/>}, 
  { path: '/create-post', element: <NewPost />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
