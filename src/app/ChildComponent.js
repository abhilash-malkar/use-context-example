import React,{useContext} from 'react'
import { PostStore } from './ParentComponent'; // make sure the import path is correct



function ChildComponent() {

    const { post, setPost,status,setStatus } = useContext(PostStore);
    
  return (
    <>
        <div>ChildComponent</div>
        <p>{post}</p>
        <button onClick={() => setPost('Hello from Child')}>Change Post</button>

        <h1>Status</h1>
        <p>{status===true?'True':'False'}</p>
        <button onClick={() => setStatus(!status)}>Change Status</button>
    </>

  )
}

export default ChildComponent